<?php

namespace App\Controller;

use App\Entity\FicheDeFrais;
use App\Entity\FraisForfaitaire;
use App\Entity\FraisHorsForfait;
use App\Entity\Justificatif;
use App\Entity\Trajet;
use App\Entity\Visiteur;
use App\Repository\FicheDeFraisRepository;
use App\Repository\VehiculeRepository;
use App\Service\CalculateurDistance;
use App\Service\GenerateurPdf;
use App\Service\GestionnaireFiche;
use App\Service\StockageJustificatif;
use App\Service\VilleIntrouvableException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/visiteur')]
#[IsGranted('ROLE_VISITEUR')]
class VisiteurController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly FicheDeFraisRepository $fiches,
        private readonly GestionnaireFiche $gestionnaire,
        private readonly VehiculeRepository $vehicules,
    ) {
    }

    #[Route('/fiche', name: 'visiteur_fiche_courante', methods: ['GET'])]
    public function ficheCourante(): Response
    {
        $fiche = $this->gestionnaire->getOuCreerFicheCourante($this->visiteur());

        return $this->render('visiteur/fiche.html.twig', [
            'menu' => 'saisie',
            'fiche' => $fiche,
            'quantites' => $this->quantitesSaisies($fiche),
            'codes' => FraisForfaitaire::CODES,
            'tarifs' => FraisForfaitaire::TARIFS,
            'vehicules' => $this->vehicules->findBareme(),
        ]);
    }

    #[Route('/fiche/{id}', name: 'visiteur_fiche_voir', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function voirFiche(FicheDeFrais $fiche): Response
    {
        $this->verifierProprietaire($fiche);

        return $this->render('visiteur/fiche.html.twig', [
            'menu' => 'historique',
            'fiche' => $fiche,
            'quantites' => $this->quantitesSaisies($fiche),
            'codes' => FraisForfaitaire::CODES,
            'tarifs' => FraisForfaitaire::TARIFS,
            'vehicules' => $this->vehicules->findBareme(),
        ]);
    }

    #[Route('/historique', name: 'visiteur_historique', methods: ['GET'])]
    public function historique(): Response
    {
        return $this->render('visiteur/historique.html.twig', [
            'menu' => 'historique',
            'fiches' => $this->fiches->findParVisiteur($this->visiteur()),
        ]);
    }

    #[Route('/fiche/{id}/forfait', name: 'visiteur_frais_forfait', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function majForfait(Request $request, FicheDeFrais $fiche): Response
    {
        $this->verifierProprietaire($fiche);
        $this->verifierModifiable($fiche);
        $this->verifierJeton($request, 'forfait'.$fiche->getId());

        $saisies = $request->request->all('quantites');
        $quantites = [];
        $invalides = [];

        foreach (FraisForfaitaire::CODES as $code => $libelle) {
            $valeur = trim((string) ($saisies[$code] ?? '0'));
            $valeur = '' === $valeur ? '0' : $valeur;

            if (!ctype_digit($valeur)) {
                $invalides[] = $libelle;
                continue;
            }

            $quantites[$libelle] = (int) $valeur;
        }

        if ([] !== $invalides) {
            $this->addFlash('error', 'Quantité invalide pour : '.implode(', ', $invalides).'. Seuls des entiers positifs sont acceptés.');

            return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
        }

        $this->gestionnaire->majFraisForfaitaires($fiche, $quantites);
        $this->em->flush();

        $this->addFlash('success', 'Frais forfaitisés enregistrés.');

        // Le kilométrage saisi ici prime sur la somme des trajets ; autant le
        // dire, puisque le prochain trajet ajouté le réécrira.
        $calcule = round($fiche->getKilometrageCalcule());
        $retenu = $quantites[FraisForfaitaire::KILOMETRE] ?? 0;

        if ($calcule > 0 && abs($calcule - $retenu) >= 1) {
            $this->addFlash('warning', sprintf(
                'Kilométrage retenu : %s km, alors que vos trajets totalisent %s km. '
                .'Ajouter ou supprimer un trajet remettra la valeur calculée.',
                number_format($retenu, 0, ',', ' '),
                number_format($calcule, 0, ',', ' ')
            ));
        }

        return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
    }

    /**
     * Le visiteur déclare le véhicule utilisé ce mois-là parmi les tranches du
     * barème : l'administrateur n'en saisit aucun. Le tarif kilométrique de la
     * fiche en découle.
     */
    #[Route('/fiche/{id}/vehicule', name: 'visiteur_fiche_vehicule', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function choisirVehicule(Request $request, FicheDeFrais $fiche, VehiculeRepository $vehicules): Response
    {
        $this->verifierProprietaire($fiche);
        $this->verifierModifiable($fiche);
        $this->verifierJeton($request, 'vehicule'.$fiche->getId());

        // L'option « choisissez » a une valeur vide, qui ne doit pas atteindre la requête.
        $id = (string) $request->request->get('vehicule');
        $vehicule = ctype_digit($id) ? $vehicules->find($id) : null;

        if (null === $vehicule) {
            $this->addFlash('error', 'Choisissez un véhicule dans la liste.');

            return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
        }

        $this->gestionnaire->changerVehicule($fiche, $vehicule);

        $this->addFlash('success', sprintf(
            'Véhicule de la fiche : %s — %s €/km. Ce tarif s\'applique à tous les kilomètres de la fiche.',
            $vehicule->getLibelle(),
            number_format($vehicule->getTarifKm(), 2, ',', ' ')
        ));

        return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
    }

    /**
     * Enregistre un déplacement ville à ville. La distance n'est pas déclarée
     * par le visiteur : elle est calculée, puis le kilométrage de la fiche est
     * recalé sur la somme des trajets.
     */
    #[Route('/fiche/{id}/trajet', name: 'visiteur_trajet_ajout', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function ajouterTrajet(Request $request, FicheDeFrais $fiche, CalculateurDistance $calculateur): Response
    {
        $this->verifierProprietaire($fiche);
        $this->verifierModifiable($fiche);
        $this->verifierJeton($request, 'trajet'.$fiche->getId());

        if ($this->vehiculeManquant($fiche)) {
            return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
        }

        $depart = trim((string) $request->request->get('ville_depart'));
        $arrivee = trim((string) $request->request->get('ville_arrivee'));

        $dateSaisie = (string) $request->request->get('date_trajet');
        $date = \DateTimeImmutable::createFromFormat('!Y-m-d', $dateSaisie);

        if (false === $date) {
            $this->addFlash('error', 'La date du trajet est invalide.');

            return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
        }

        try {
            $resultat = $calculateur->calculer($depart, $arrivee);
        } catch (VilleIntrouvableException $e) {
            $this->addFlash('error', $e->getMessage().' Vérifiez l\'orthographe de la commune.');

            return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
        }

        $trajet = (new Trajet())
            ->setVilleDepart($resultat->depart->libelle)
            ->setVilleArrivee($resultat->arrivee->libelle)
            ->setCoordonneesDepart($resultat->depart->lat, $resultat->depart->lon)
            ->setCoordonneesArrivee($resultat->arrivee->lat, $resultat->arrivee->lon)
            ->setDistanceKm($resultat->distanceKm)
            ->setAllerRetour($request->request->getBoolean('aller_retour'))
            ->setDateTrajet($date)
            ->setSource($resultat->source);

        $fiche->addTrajet($trajet);
        $this->em->persist($trajet);

        $this->gestionnaire->synchroniserKilometrage($fiche);
        $this->em->flush();

        $this->addFlash('success', sprintf(
            'Trajet %s enregistré : %s km (%s). Kilométrage de la fiche porté à %s km.',
            $trajet->getLibelle(),
            number_format($trajet->getDistanceTotale(), 2, ',', ' '),
            $trajet->getSourceLibelle(),
            number_format(round($fiche->getKilometrageCalcule()), 0, ',', ' ')
        ));

        if (Trajet::SOURCE_ORTHODROMIE === $resultat->source) {
            $this->addFlash('warning', 'Le service de calcul d\'itinéraire était indisponible : '
                .'la distance retenue est une estimation à vol d\'oiseau majorée.');
        }

        return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
    }

    #[Route('/trajet/{id}/supprimer', name: 'visiteur_trajet_suppr', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function supprimerTrajet(Request $request, ?Trajet $trajet): Response
    {
        // Envoi répété ou page restée ouverte : le trajet n'existe déjà plus.
        if (null === $trajet) {
            $this->addFlash('warning', 'Ce trajet avait déjà été supprimé.');

            return $this->redirectToRoute('visiteur_fiche_courante');
        }

        $fiche = $trajet->getFiche();
        $this->verifierProprietaire($fiche);
        $this->verifierModifiable($fiche);
        $this->verifierJeton($request, 'trajetsuppr'.$trajet->getId());

        $fiche->removeTrajet($trajet);
        $this->em->remove($trajet);
        $this->em->flush();

        $this->gestionnaire->synchroniserKilometrage($fiche);
        $this->em->flush();

        $this->addFlash('success', 'Trajet supprimé, kilométrage recalculé.');

        return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
    }

    #[Route('/fiche/{id}/hors-forfait', name: 'visiteur_frais_ajout', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function ajouterHorsForfait(
        Request $request,
        FicheDeFrais $fiche,
        ValidatorInterface $validateur,
        StockageJustificatif $stockage,
    ): Response {
        $this->verifierProprietaire($fiche);
        $this->verifierModifiable($fiche);
        $this->verifierJeton($request, 'horsforfait'.$fiche->getId());

        $frais = new FraisHorsForfait();
        $frais->setLibelle(trim((string) $request->request->get('libelle')));

        $dateSaisie = (string) $request->request->get('date_frais');
        $date = \DateTimeImmutable::createFromFormat('!Y-m-d', $dateSaisie);
        $frais->setDateFrais(false === $date ? null : $date);

        $montant = str_replace(',', '.', trim((string) $request->request->get('montant')));
        $frais->setMontant(is_numeric($montant) ? $montant : null);

        $erreurs = [];

        if (!is_numeric($montant)) {
            $erreurs[] = 'Le champ montant doit être numérique.';
        }
        if (false === $date) {
            $erreurs[] = 'La date saisie est invalide.';
        } elseif ($this->dateDepassee($date)) {
            $erreurs[] = "Date d'enregistrement du frais dépassée de plus d'un an.";
        }

        foreach ($validateur->validate($frais) as $violation) {
            $erreurs[] = $violation->getMessage();
        }

        if ([] !== $erreurs) {
            foreach (array_unique($erreurs) as $message) {
                $this->addFlash('error', $message);
            }

            return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
        }

        $fiche->addFraisHorsForfait($frais);
        $this->em->persist($frais);

        $fichier = $request->files->get('justificatif');
        if ($fichier instanceof UploadedFile) {
            try {
                $this->em->persist($stockage->enregistrer($fichier, $frais));
            } catch (FileException $e) {
                $this->addFlash('warning', 'Frais enregistré, mais le justificatif a été refusé : '.$e->getMessage());
            }
        }

        $this->em->flush();
        $this->addFlash('success', 'Frais hors forfait ajouté.');

        return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
    }

    #[Route('/hors-forfait/{id}/supprimer', name: 'visiteur_frais_suppr', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function supprimerHorsForfait(Request $request, ?FraisHorsForfait $frais, StockageJustificatif $stockage): Response
    {
        // Envoi répété ou page restée ouverte : le frais n'existe déjà plus.
        if (null === $frais) {
            $this->addFlash('warning', 'Ce frais avait déjà été supprimé.');

            return $this->redirectToRoute('visiteur_fiche_courante');
        }

        $fiche = $frais->getFiche();
        $this->verifierProprietaire($fiche);
        $this->verifierModifiable($fiche);
        $this->verifierJeton($request, 'suppr'.$frais->getId());

        foreach ($frais->getJustificatifs() as $justificatif) {
            $stockage->supprimerFichier($justificatif);
        }

        $this->em->remove($frais);
        $this->em->flush();

        $this->addFlash('success', 'Frais hors forfait supprimé.');

        return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
    }

    #[Route('/hors-forfait/{id}/justificatif', name: 'visiteur_justificatif_ajout', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function ajouterJustificatif(Request $request, FraisHorsForfait $frais, StockageJustificatif $stockage): Response
    {
        $fiche = $frais->getFiche();
        $this->verifierProprietaire($fiche);
        $this->verifierModifiable($fiche);
        $this->verifierJeton($request, 'justif'.$frais->getId());

        $fichier = $request->files->get('justificatif');
        if (!$fichier instanceof UploadedFile) {
            $this->addFlash('error', 'Aucun fichier sélectionné.');

            return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
        }

        try {
            $this->em->persist($stockage->enregistrer($fichier, $frais));
            $this->em->flush();
            $this->addFlash('success', 'Justificatif déposé.');
        } catch (FileException $e) {
            $this->addFlash('error', $e->getMessage());
        }

        return $this->redirectToRoute('visiteur_fiche_voir', ['id' => $fiche->getId()]);
    }

    #[Route('/justificatif/{id}', name: 'visiteur_justificatif_voir', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function voirJustificatif(Justificatif $justificatif, StockageJustificatif $stockage): Response
    {
        $this->verifierProprietaire($justificatif->getFrais()?->getFiche());

        return $this->servirJustificatif($justificatif, $stockage);
    }

    #[Route('/fiche/{id}/pdf', name: 'visiteur_fiche_pdf', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function pdf(FicheDeFrais $fiche, GenerateurPdf $pdf): Response
    {
        $this->verifierProprietaire($fiche);

        return new Response($pdf->ficheIndividuelle($fiche), Response::HTTP_OK, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="'.$pdf->nomFichier($fiche).'"',
        ]);
    }

    // --- Outils partagés --------------------------------------------------

    /**
     * Sert un justificatif depuis var/, hors racine web : l'accès passe
     * obligatoirement par un contrôle de droits.
     */
    public static function servirJustificatif(Justificatif $justificatif, StockageJustificatif $stockage): Response
    {
        if (!$stockage->existe($justificatif)) {
            throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException('Justificatif introuvable sur le serveur.');
        }

        $reponse = new BinaryFileResponse($stockage->chemin($justificatif));
        $reponse->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_INLINE,
            $justificatif->getNomOriginal()
        );

        return $reponse;
    }

    /** @return array<string, float> */
    private function quantitesSaisies(FicheDeFrais $fiche): array
    {
        $quantites = array_fill_keys(array_values(FraisForfaitaire::CODES), 0.0);

        foreach ($fiche->getFraisForfaitaires() as $ligne) {
            $quantites[$ligne->getLibelle()] = $ligne->getQuantite();
        }

        return $quantites;
    }

    private function visiteur(): Visiteur
    {
        $utilisateur = $this->getUser();
        if (!$utilisateur instanceof Visiteur) {
            throw $this->createAccessDeniedException();
        }

        return $utilisateur;
    }

    private function verifierProprietaire(?FicheDeFrais $fiche): void
    {
        if (null === $fiche || $fiche->getVisiteur()?->getId() !== $this->visiteur()->getId()) {
            throw $this->createAccessDeniedException("Cette fiche n'est pas la vôtre.");
        }
    }

    private function verifierModifiable(?FicheDeFrais $fiche): void
    {
        if (null === $fiche || !$fiche->estModifiable()) {
            throw $this->createAccessDeniedException('Cette fiche est clôturée, elle ne peut plus être modifiée.');
        }
    }

    private function verifierJeton(Request $request, string $id): void
    {
        if (!$this->isCsrfTokenValid($id, (string) $request->request->get('_token'))) {
            throw $this->createAccessDeniedException('Jeton CSRF invalide.');
        }
    }

    /**
     * Le tarif kilométrique dépend du véhicule : tant que le visiteur ne l'a
     * pas déclaré sur la fiche, aucun kilomètre ne peut y être porté.
     */
    private function vehiculeManquant(FicheDeFrais $fiche): bool
    {
        if (null !== $fiche->getVehicule()) {
            return false;
        }

        $this->addFlash('error', 'Déclarez d\'abord le véhicule utilisé ce mois-ci : le tarif kilométrique en dépend.');

        return true;
    }

    /** L'énoncé limite la saisie rétroactive à un an. */
    private function dateDepassee(\DateTimeImmutable $date): bool
    {
        return $date < new \DateTimeImmutable('-1 year');
    }
}
