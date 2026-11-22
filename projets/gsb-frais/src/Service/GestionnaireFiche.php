<?php

namespace App\Service;

use App\Entity\Administrateur;
use App\Entity\Comptable;
use App\Entity\FicheDeFrais;
use App\Entity\FraisForfaitaire;
use App\Entity\FraisHorsForfait;
use App\Entity\Statut;
use App\Entity\Vehicule;
use App\Entity\Visiteur;
use App\Repository\FicheDeFraisRepository;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Règles de gestion des fiches de frais : ouverture du mois courant, clôture
 * des mois révolus, mise à jour des frais forfaitisés et report des lignes
 * refusées par le service comptable.
 */
class GestionnaireFiche
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly FicheDeFraisRepository $fiches,
    ) {
    }

    /**
     * Fiche du mois en cours pour ce visiteur, créée si elle n'existe pas.
     *
     * Conformément à l'énoncé, la première saisie d'un mois clôture les fiches
     * des mois précédents restées en saisie.
     */
    public function getOuCreerFicheCourante(Visiteur $visiteur): FicheDeFrais
    {
        $mois = (int) date('n');
        $annee = (int) date('Y');

        $fiche = $this->fiches->findOneByVisiteurEtPeriode($visiteur, $mois, $annee);

        if (null === $fiche) {
            $this->cloturerFichesAnterieures($visiteur, $mois, $annee);
            $fiche = $this->creerFiche($visiteur, $mois, $annee);
            $this->em->flush();
        }

        // À chaque consultation et non à la seule création : un refus prononcé
        // par le comptable après l'ouverture de la fiche doit lui aussi être
        // basculé. Le drapeau « reporte » rend l'opération idempotente.
        if ($this->reporterFraisRefuses($visiteur, $fiche) > 0) {
            $this->em->flush();
        }

        return $fiche;
    }

    public function creerFiche(Visiteur $visiteur, int $mois, int $annee): FicheDeFrais
    {
        $fiche = (new FicheDeFrais())
            ->setVisiteur($visiteur)
            ->setMois($mois)
            ->setAnnee($annee)
            ->setStatut(Statut::CREEE)
            // Le dernier véhicule déclaré par le visiteur est repris, il reste
            // libre d'en changer. Tant qu'il n'en a déclaré aucun, c'est à lui
            // de le renseigner : l'administrateur n'en saisit pas.
            ->setVehicule($this->fiches->findDernierVehicule($visiteur, $mois, $annee));

        $this->em->persist($fiche);

        return $fiche;
    }

    /**
     * Clôture les fiches encore en saisie dont le mois est révolu.
     *
     * @return int nombre de fiches clôturées
     */
    public function cloturerFichesAnterieures(Visiteur $visiteur, int $mois, int $annee): int
    {
        $n = 0;
        foreach ($this->fiches->findParVisiteur($visiteur) as $fiche) {
            $estAnterieure = $fiche->getAnnee() < $annee
                || ($fiche->getAnnee() === $annee && $fiche->getMois() < $mois);

            if ($estAnterieure && Statut::CREEE === $fiche->getStatut()) {
                $fiche->setStatut(Statut::CLOTUREE);
                ++$n;
            }
        }

        return $n;
    }

    /**
     * Met à jour les frais forfaitisés d'une fiche.
     *
     * La table impose une quantité strictement positive : une quantité nulle
     * se traduit donc par la suppression de la ligne, pas par un zéro stocké.
     *
     * @param array<string, float> $quantites libellé du frais => quantité saisie
     */
    public function majFraisForfaitaires(FicheDeFrais $fiche, array $quantites): void
    {
        $existantes = [];
        foreach ($fiche->getFraisForfaitaires() as $ligne) {
            $existantes[$ligne->getLibelle()] = $ligne;
        }

        foreach ($quantites as $libelle => $quantite) {
            // Sans véhicule déclaré, le kilométrage n'a pas de tarif : la ligne
            // reste en l'état, que la saisie vienne du visiteur ou du comptable.
            if (FraisForfaitaire::KILOMETRE === $libelle && null === $fiche->getVehicule()) {
                continue;
            }

            $quantite = (float) $quantite;
            $ligne = $existantes[$libelle] ?? null;

            if ($quantite <= 0) {
                if (null !== $ligne) {
                    $fiche->removeFraisForfaitaire($ligne);
                    $this->em->remove($ligne);
                }
                continue;
            }

            if (null === $ligne) {
                $ligne = (new FraisForfaitaire())->setLibelle($libelle);
                $fiche->addFraisForfaitaire($ligne);
                $this->em->persist($ligne);
            }

            $ligne->setQuantite($quantite)
                ->setMontantUnitaire($this->montantUnitaire($fiche, $libelle));
        }
    }

    /**
     * Change le véhicule retenu pour la fiche et répercute le nouveau tarif
     * sur la ligne kilométrique déjà constituée.
     */
    public function changerVehicule(FicheDeFrais $fiche, Vehicule $vehicule): void
    {
        $fiche->setVehicule($vehicule);

        // Seul le tarif change : la quantité, peut-être corrigée à la main,
        // ne doit pas être recalculée au passage.
        foreach ($fiche->getFraisForfaitaires() as $ligne) {
            if (FraisForfaitaire::KILOMETRE === $ligne->getLibelle()) {
                $ligne->setMontantUnitaire($this->montantUnitaire($fiche, FraisForfaitaire::KILOMETRE));
            }
        }

        $this->em->flush();
    }

    /**
     * Recale la ligne de frais kilométrique sur la somme des trajets saisis.
     *
     * Appelée après tout ajout ou retrait de trajet : le kilométrage n'est
     * plus déclaré mais déduit des distances calculées.
     */
    public function synchroniserKilometrage(FicheDeFrais $fiche): void
    {
        $distance = round($fiche->getKilometrageCalcule());

        $ligne = null;
        foreach ($fiche->getFraisForfaitaires() as $candidate) {
            if (FraisForfaitaire::KILOMETRE === $candidate->getLibelle()) {
                $ligne = $candidate;
                break;
            }
        }

        // La table impose une quantité strictement positive.
        if ($distance <= 0) {
            if (null !== $ligne) {
                $fiche->removeFraisForfaitaire($ligne);
                $this->em->remove($ligne);
            }

            return;
        }

        if (null === $ligne) {
            $ligne = (new FraisForfaitaire())->setLibelle(FraisForfaitaire::KILOMETRE);
            $fiche->addFraisForfaitaire($ligne);
            $this->em->persist($ligne);
        }

        $ligne->setQuantite($distance)
            ->setMontantUnitaire($this->montantUnitaire($fiche, FraisForfaitaire::KILOMETRE));
    }

    /**
     * Tarif applicable à un frais forfaitisé. Le kilométrage suit le barème
     * de puissance fiscale du véhicule retenu sur la fiche, les autres sont fixes.
     */
    public function montantUnitaire(FicheDeFrais $fiche, string $libelle): float
    {
        if (FraisForfaitaire::KILOMETRE === $libelle) {
            return $fiche->getTarifKm();
        }

        return FraisForfaitaire::TARIFS[$libelle] ?? 0.0;
    }

    /**
     * Bascule sur la fiche cible les frais refusés des fiches antérieures,
     * l'énoncé prévoyant que les éléments écartés soient reportés sur le mois
     * suivant plutôt que perdus.
     *
     * @return int nombre de lignes reportées
     */
    public function reporterFraisRefuses(Visiteur $visiteur, FicheDeFrais $cible): int
    {
        $n = 0;
        foreach ($this->fiches->findParVisiteur($visiteur) as $fiche) {
            if ($fiche === $cible) {
                continue;
            }

            foreach ($fiche->getFraisHorsForfait() as $ligne) {
                if (!$ligne->isRefuse() || $ligne->isReporte()) {
                    continue;
                }

                $report = (new FraisHorsForfait())
                    ->setLibelle($ligne->getLibelle().' (reporté de '.$fiche->getPeriodeLibelle().')')
                    ->setMontant($ligne->getMontant())
                    ->setDateFrais($ligne->getDateFrais());

                $cible->addFraisHorsForfait($report);
                $this->em->persist($report);

                $ligne->setReporte(true);
                ++$n;
            }
        }

        return $n;
    }

    /**
     * Validation : la fiche passe à l'état validé, le montant retenu est figé
     * et le validateur identifié. L'administrateur traite les fiches au même
     * titre qu'un comptable, la contrainte de cohérence accepte les deux.
     */
    public function valider(FicheDeFrais $fiche, Comptable|Administrateur $validateur): void
    {
        $fiche->setStatut(Statut::VALIDEE)
            ->setDateValidation(new \DateTimeImmutable())
            ->setMontantValide($fiche->getTotal());

        if ($validateur instanceof Comptable) {
            $fiche->setComptable($validateur);
        } else {
            $fiche->setAdministrateur($validateur);
        }

        $this->em->flush();
    }

    /** Fait avancer une fiche validée dans le cycle de paiement. */
    public function avancerStatut(FicheDeFrais $fiche): bool
    {
        $suivant = $fiche->getStatut()->suivant();
        if (null === $suivant) {
            return false;
        }

        $fiche->setStatut($suivant);
        $this->em->flush();

        return true;
    }
}
