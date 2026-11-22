<?php

namespace App\Command;

use App\Entity\Comptable;
use App\Entity\FicheDeFrais;
use App\Entity\FraisForfaitaire;
use App\Entity\FraisHorsForfait;
use App\Entity\Statut;
use App\Entity\Trajet;
use App\Entity\Vehicule;
use App\Repository\FicheDeFraisRepository;
use App\Repository\VehiculeRepository;
use App\Repository\VisiteurRepository;
use App\Service\CalculateurDistance;
use App\Service\GestionnaireFiche;
use App\Service\VilleIntrouvableException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Remplit la base de fiches de frais plausibles sur les mois écoulés, pour
 * disposer de données de test couvrant tout le cycle de vie.
 *
 * N'écrase jamais une fiche existante.
 */
#[AsCommand(
    name: 'app:jeu-de-donnees',
    description: 'Genere des fiches de frais de test sur les mois ecoules',
)]
class JeuDeDonneesCommand extends Command
{
    /** Couples de communes servant de secteur de tournée. */
    private const SECTEURS = [
        ['Paris', 'Orléans'],
        ['Paris', 'Reims'],
        ['Lyon', 'Grenoble'],
        ['Lyon', 'Saint-Étienne'],
        ['Bordeaux', 'Toulouse'],
        ['Lille', 'Amiens'],
        ['Nantes', 'Rennes'],
        ['Marseille', 'Aix-en-Provence'],
    ];

    private const LIBELLES_HORS_FORFAIT = [
        'Repas de représentation',
        'Achat de fournitures',
        'Réservation salle de conférence',
        'Péage et parking',
        'Frais de réception praticien',
    ];

    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly VisiteurRepository $visiteurs,
        private readonly FicheDeFraisRepository $fiches,
        private readonly VehiculeRepository $vehicules,
        private readonly GestionnaireFiche $gestionnaire,
        private readonly CalculateurDistance $calculateur,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('mois', null, InputOption::VALUE_REQUIRED, 'Nombre de mois ecoules a generer', '6')
            ->addOption('completer-trajets', null, InputOption::VALUE_NONE, 'Ajoute des trajets aux fiches qui n en ont pas, et recale leur kilometrage');
    }

    /**
     * Rattrape les fiches dont le kilométrage a été saisi sans trajet : sans
     * cela, rien ne justifie la distance facturée.
     */
    private function completerTrajets(SymfonyStyle $io): int
    {
        $lignes = [];
        $sansVehicule = 0;

        foreach ($this->fiches->findAll() as $fiche) {
            if (!$fiche->getTrajets()->isEmpty()) {
                continue;
            }

            // Sans véhicule déclaré par le visiteur, les kilomètres n'auraient
            // pas de tarif : on ne lui en invente pas un.
            if (null === $fiche->getVehicule()) {
                ++$sansVehicule;
                continue;
            }

            $avant = $fiche->getTotal();
            $this->remplirTrajets($fiche, $fiche->getDateCreation());
            $this->gestionnaire->synchroniserKilometrage($fiche);

            // Le montant arrêté doit suivre, sinon la fiche se contredit.
            if (null !== $fiche->getMontantValide()) {
                $fiche->setMontantValide($fiche->getTotal());
            }

            $lignes[] = [
                $fiche->getVisiteur()?->getNomComplet(),
                $fiche->getPeriodeLibelle(),
                $fiche->getTrajets()->count().' trajet(s)',
                number_format($avant, 2, ',', ' ').' € → '.number_format($fiche->getTotal(), 2, ',', ' ').' €',
            ];
        }

        $this->em->flush();

        if ($sansVehicule > 0) {
            $io->note($sansVehicule.' fiche(s) sans trajet ignoree(s) : aucun vehicule declare par le visiteur.');
        }

        if ([] === $lignes) {
            $io->success(0 === $sansVehicule
                ? 'Toutes les fiches disposent deja de trajets.'
                : 'Aucune autre fiche a completer.');

            return Command::SUCCESS;
        }

        $io->title(count($lignes).' fiche(s) completee(s)');
        $io->table(['Visiteur', 'Periode', 'Trajets ajoutes', 'Total'], $lignes);

        return Command::SUCCESS;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        if ($input->getOption('completer-trajets')) {
            return $this->completerTrajets($io);
        }

        $nbMois = max(1, (int) $input->getOption('mois'));

        $visiteurs = $this->visiteurs->findAllTries();
        if ([] === $visiteurs) {
            $io->error('Aucun visiteur en base : creez d abord des comptes.');

            return Command::FAILURE;
        }

        $creees = 0;
        $recap = [];

        foreach ($visiteurs as $visiteur) {
            // Véhicule que le visiteur aurait déclaré, s'il n'en a encore aucun.
            $vehicule = null;

            for ($recul = $nbMois; $recul >= 1; --$recul) {
                $date = new \DateTimeImmutable("first day of -$recul month");
                $mois = (int) $date->format('n');
                $annee = (int) $date->format('Y');

                if (null !== $this->fiches->findOneByVisiteurEtPeriode($visiteur, $mois, $annee)) {
                    continue;
                }

                $fiche = $this->gestionnaire->creerFiche($visiteur, $mois, $annee);
                $fiche->setDateCreation($date);

                if (null === $fiche->getVehicule()) {
                    $vehicule ??= $this->vehiculeAuHasard();
                    $fiche->setVehicule($vehicule);
                }
                $fiche->setStatut($this->statutPour($recul));

                $this->remplirForfait($fiche, $date);
                $this->remplirTrajets($fiche, $date);
                $this->remplirHorsForfait($fiche, $date);

                // Le kilométrage doit refléter les trajets générés.
                $this->gestionnaire->synchroniserKilometrage($fiche);

                if (in_array($fiche->getStatut(), [Statut::VALIDEE, Statut::MISE_EN_PAIEMENT, Statut::REMBOURSEE], true)) {
                    $fiche->setDateValidation($date->modify('+40 days'))
                        ->setMontantValide($fiche->getTotal());

                    // La contrainte validation_coherente exige un validateur.
                    $comptable = $this->em->getRepository(Comptable::class)->findOneBy([]);
                    $fiche->setComptable($comptable);
                }

                ++$creees;
                $recap[] = [
                    $visiteur->getNomComplet(),
                    $fiche->getPeriodeLibelle(),
                    $fiche->getStatut()->libelleCourt(),
                    number_format($fiche->getTotal(), 2, ',', ' ').' €',
                ];
            }
        }

        $this->em->flush();

        if (0 === $creees) {
            $io->success('Rien a generer : toutes les fiches des mois demandes existent deja.');

            return Command::SUCCESS;
        }

        $io->title($creees.' fiche(s) generee(s)');
        $io->table(['Visiteur', 'Periode', 'Etat', 'Total'], $recap);

        return Command::SUCCESS;
    }

    /** Une des six possibilités du barème, tirée au sort. */
    private function vehiculeAuHasard(): ?Vehicule
    {
        $bareme = $this->vehicules->findBareme();

        return [] === $bareme ? null : $bareme[array_rand($bareme)];
    }

    /** Répartit les fiches sur le cycle de vie : les plus anciennes sont soldées. */
    private function statutPour(int $recul): Statut
    {
        return match (true) {
            $recul >= 5 => Statut::REMBOURSEE,
            $recul >= 4 => Statut::MISE_EN_PAIEMENT,
            $recul >= 3 => Statut::VALIDEE,
            default => Statut::CLOTUREE,
        };
    }

    private function remplirForfait(FicheDeFrais $fiche, \DateTimeImmutable $date): void
    {
        // Le kilométrage n'est pas tiré au sort : il découle des trajets.
        $quantites = [
            FraisForfaitaire::NUITEE => random_int(2, 12),
            FraisForfaitaire::REPAS => random_int(8, 20),
            FraisForfaitaire::ETAPE => random_int(0, 4),
        ];

        foreach ($quantites as $libelle => $quantite) {
            if ($quantite <= 0) {
                continue;
            }

            $ligne = (new FraisForfaitaire())
                ->setLibelle($libelle)
                ->setQuantite($quantite)
                ->setMontantUnitaire($this->gestionnaire->montantUnitaire($fiche, $libelle))
                ->setDateFrais($date);

            $fiche->addFraisForfaitaire($ligne);
            $this->em->persist($ligne);
        }
    }

    /**
     * Génère des déplacements entre villes du secteur. Les distances passent
     * par le calculateur, donc par le cache : les couples se répètent d'une
     * fiche à l'autre et ne sont interrogés qu'une fois.
     */
    private function remplirTrajets(FicheDeFrais $fiche, \DateTimeImmutable $date): void
    {
        foreach (range(1, random_int(2, 4)) as $i) {
            [$depart, $arrivee] = self::SECTEURS[array_rand(self::SECTEURS)];

            try {
                $resultat = $this->calculateur->calculer($depart, $arrivee);
            } catch (VilleIntrouvableException) {
                continue;
            }

            $trajet = (new Trajet())
                ->setVilleDepart($resultat->depart->libelle)
                ->setVilleArrivee($resultat->arrivee->libelle)
                ->setCoordonneesDepart($resultat->depart->lat, $resultat->depart->lon)
                ->setCoordonneesArrivee($resultat->arrivee->lat, $resultat->arrivee->lon)
                ->setDistanceKm($resultat->distanceKm)
                ->setAllerRetour(0 === random_int(0, 1))
                ->setDateTrajet($date->modify('+'.random_int(0, 27).' days'))
                ->setSource($resultat->source);

            $fiche->addTrajet($trajet);
            $this->em->persist($trajet);
        }
    }

    private function remplirHorsForfait(FicheDeFrais $fiche, \DateTimeImmutable $date): void
    {
        foreach (range(1, random_int(0, 3)) as $i) {
            if (0 === random_int(0, 3)) {
                continue;
            }

            $ligne = (new FraisHorsForfait())
                ->setLibelle(self::LIBELLES_HORS_FORFAIT[array_rand(self::LIBELLES_HORS_FORFAIT)])
                ->setMontant(number_format(random_int(2000, 25000) / 100, 2, '.', ''))
                ->setDateFrais($date->modify('+'.random_int(0, 27).' days'));

            $fiche->addFraisHorsForfait($ligne);
            $this->em->persist($ligne);
        }
    }
}
