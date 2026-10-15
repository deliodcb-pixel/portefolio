<?php

namespace App\Controller;

use App\Entity\Administrateur;
use App\Entity\Comptable;
use App\Entity\FicheDeFrais;
use App\Entity\FraisForfaitaire;
use App\Entity\FraisHorsForfait;
use App\Entity\Justificatif;
use App\Entity\Statut;
use App\Repository\FicheDeFraisRepository;
use App\Repository\VisiteurRepository;
use App\Service\GenerateurPdf;
use App\Service\GestionnaireFiche;
use App\Service\StockageJustificatif;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/comptable')]
#[IsGranted('ROLE_COMPTABLE')]
class ComptableController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly FicheDeFraisRepository $fiches,
        private readonly VisiteurRepository $visiteurs,
        private readonly GestionnaireFiche $gestionnaire,
    ) {
    }

    /**
     * Étapes 1 à 3 du scénario nominal : le comptable choisit un visiteur et
     * un mois parmi les fiches clôturées.
     */
    #[Route('/validation', name: 'comptable_validation_selection', methods: ['GET'])]
    public function selection(Request $request): Response
    {
        $idVisiteur = $request->query->get('visiteur');
        $periode = (string) $request->query->get('periode');

        if (null !== $idVisiteur && '' !== $periode) {
            [$annee, $mois] = array_map('intval', explode('-', $periode) + [0, 0]);
            $visiteur = $this->visiteurs->find($idVisiteur);

            $fiche = null !== $visiteur
                ? $this->fiches->findOneByVisiteurEtPeriode($visiteur, $mois, $annee)
                : null;

            // Exception 4-a de l'annexe 2.
            if (null === $fiche) {
                $this->addFlash('error', 'Pas de fiche de frais pour ce visiteur ce mois.');
            } else {
                return $this->redirectToRoute('comptable_validation_fiche', ['id' => $fiche->getId()]);
            }
        }

        return $this->render('comptable/selection.html.twig', [
            'menu' => 'validation',
            'visiteurs' => $this->visiteurs->findAvecFicheAValider(),
            'a_valider' => $this->fiches->findAValider(),
        ]);
    }

    /** Étape 4 : détail de la fiche, frais forfaitisés et hors forfait. */
    #[Route('/validation/{id}', name: 'comptable_validation_fiche', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function detail(FicheDeFrais $fiche): Response
    {
        return $this->render('comptable/validation.html.twig', [
            'menu' => 'validation',
            'fiche' => $fiche,
            'quantites' => $this->quantitesSaisies($fiche),
            'codes' => FraisForfaitaire::CODES,
            'tarifs' => FraisForfaitaire::TARIFS,
        ]);
    }

    /** Étapes 5 et 6 : correction des quantités forfaitisées. */
    #[Route('/validation/{id}/forfait', name: 'comptable_forfait_maj', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function corrigerForfait(Request $request, FicheDeFrais $fiche): Response
    {
        $this->verifierJeton($request, 'cforfait'.$fiche->getId());
        $this->verifierValidable($fiche);

        $saisies = $request->request->all('quantites');
        $quantites = [];

        foreach (FraisForfaitaire::CODES as $code => $libelle) {
            $valeur = trim((string) ($saisies[$code] ?? '0'));
            $valeur = '' === $valeur ? '0' : $valeur;

            if (!ctype_digit($valeur)) {
                $this->addFlash('error', 'Quantité invalide pour « '.$libelle.' ».');

                return $this->redirectToRoute('comptable_validation_fiche', ['id' => $fiche->getId()]);
            }

            $quantites[$libelle] = (int) $valeur;
        }

        $this->gestionnaire->majFraisForfaitaires($fiche, $quantites);
        $this->em->flush();

        $this->addFlash('success', 'La modification a été prise en compte. Totaux actualisés.');

        return $this->redirectToRoute('comptable_validation_fiche', ['id' => $fiche->getId()]);
    }

    /** Étape 7 : refus d'une ligne hors forfait non justifiée. */
    #[Route('/hors-forfait/{id}/refus', name: 'comptable_refus_ligne', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function basculerRefus(Request $request, FraisHorsForfait $ligne): Response
    {
        $fiche = $ligne->getFiche();
        $this->verifierJeton($request, 'refus'.$ligne->getId());
        $this->verifierValidable($fiche);

        $ligne->setRefuse(!$ligne->isRefuse());
        $this->em->flush();

        $this->addFlash('success', $ligne->isRefuse()
            ? 'Ligne refusée. Elle sera reportée sur la fiche du mois suivant et le visiteur doit en être informé.'
            : 'Refus annulé, la ligne est de nouveau prise en compte.');

        return $this->redirectToRoute('comptable_validation_fiche', ['id' => $fiche->getId()]);
    }

    /** Étapes 8 et 9 : la fiche passe à l'état validé. */
    #[Route('/validation/{id}/valider', name: 'comptable_valider', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function valider(Request $request, FicheDeFrais $fiche): Response
    {
        $this->verifierJeton($request, 'valider'.$fiche->getId());
        $this->verifierValidable($fiche);

        $this->gestionnaire->valider($fiche, $this->validateur());

        $this->addFlash('success', sprintf(
            'Fiche de %s validée pour %s — montant retenu %s €.',
            $fiche->getVisiteur()?->getNomComplet(),
            $fiche->getPeriodeLibelle(),
            number_format($fiche->getTotal(), 2, ',', ' ')
        ));

        return $this->redirectToRoute('comptable_validation_selection');
    }

    #[Route('/paiement', name: 'comptable_paiement', methods: ['GET'])]
    public function paiement(): Response
    {
        return $this->render('comptable/paiement.html.twig', [
            'menu' => 'paiement',
            'validees' => $this->fiches->findParStatut(Statut::VALIDEE),
            'en_paiement' => $this->fiches->findParStatut(Statut::MISE_EN_PAIEMENT),
        ]);
    }

    #[Route('/paiement/{id}/avancer', name: 'comptable_paiement_avancer', requirements: ['id' => '\d+'], methods: ['POST'])]
    public function avancer(Request $request, FicheDeFrais $fiche): Response
    {
        $this->verifierJeton($request, 'avancer'.$fiche->getId());

        if (!in_array($fiche->getStatut(), [Statut::VALIDEE, Statut::MISE_EN_PAIEMENT], true)) {
            $this->addFlash('error', 'Seule une fiche validée peut avancer dans le cycle de paiement.');

            return $this->redirectToRoute('comptable_paiement');
        }

        $this->gestionnaire->avancerStatut($fiche);
        $this->addFlash('success', 'Fiche passée à l\'état « '.$fiche->getStatut()->libelle().' ».');

        return $this->redirectToRoute('comptable_paiement');
    }

    #[Route('/suivi', name: 'comptable_suivi', methods: ['GET'])]
    public function suivi(): Response
    {
        return $this->render('comptable/suivi.html.twig', [
            'menu' => 'suivi',
            'par_statut' => [
                Statut::CREEE->value => $this->fiches->findParStatut(Statut::CREEE),
                Statut::CLOTUREE->value => $this->fiches->findParStatut(Statut::CLOTUREE),
                Statut::VALIDEE->value => $this->fiches->findParStatut(Statut::VALIDEE),
                Statut::MISE_EN_PAIEMENT->value => $this->fiches->findParStatut(Statut::MISE_EN_PAIEMENT),
                Statut::REMBOURSEE->value => $this->fiches->findParStatut(Statut::REMBOURSEE),
            ],
        ]);
    }

    /**
     * Script de clôture lancé en début de campagne : toutes les fiches des
     * mois révolus encore en saisie passent à l'état clôturé.
     */
    #[Route('/cloturer', name: 'comptable_cloturer', methods: ['POST'])]
    public function cloturer(Request $request): Response
    {
        $this->verifierJeton($request, 'cloturer');

        $aCloturer = $this->fiches->findACloturer((int) date('n'), (int) date('Y'));
        foreach ($aCloturer as $fiche) {
            $fiche->setStatut(Statut::CLOTUREE);
        }
        $this->em->flush();

        $this->addFlash('success', 0 === count($aCloturer)
            ? 'Aucune fiche à clôturer, toutes les fiches des mois révolus sont déjà traitées.'
            : count($aCloturer).' fiche(s) clôturée(s).');

        return $this->redirectToRoute('comptable_validation_selection');
    }

    /**
     * Éditions : lot mensuel, et impression fiche par fiche pour un visiteur
     * donné.
     */
    #[Route('/editions', name: 'comptable_editions', methods: ['GET'])]
    public function editions(Request $request): Response
    {
        $idVisiteur = $request->query->get('visiteur');
        $visiteur = null !== $idVisiteur ? $this->visiteurs->find($idVisiteur) : null;

        return $this->render('comptable/editions.html.twig', [
            'menu' => 'editions',
            'periodes' => $this->fiches->findPeriodesDisponibles(),
            'visiteurs' => $this->visiteurs->findAllTries(),
            'visiteur' => $visiteur,
            'fiches' => null !== $visiteur ? $this->fiches->findParVisiteur($visiteur) : [],
        ]);
    }

    /** Toutes les fiches d'un visiteur en un seul document. */
    #[Route('/editions/visiteur/{id}', name: 'comptable_edition_visiteur', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function editionVisiteur(int $id, GenerateurPdf $pdf): Response
    {
        $visiteur = $this->visiteurs->find($id);
        if (null === $visiteur) {
            throw $this->createNotFoundException('Visiteur introuvable.');
        }

        $fiches = $this->fiches->findParVisiteur($visiteur);

        if ([] === $fiches) {
            $this->addFlash('error', 'Aucune fiche pour '.$visiteur->getNomComplet().'.');

            return $this->redirectToRoute('comptable_editions');
        }

        return new Response($pdf->lot($fiches), Response::HTTP_OK, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="fiches-'.$pdf->normaliserNom($visiteur->getNom()).'.pdf"',
        ]);
    }

    /** Édition en un clic de toutes les fiches clôturées d'un mois. */
    #[Route('/editions/lot', name: 'comptable_edition_lot', methods: ['GET'])]
    public function editionLot(Request $request, GenerateurPdf $pdf): Response
    {
        $periode = (string) $request->query->get('periode');
        [$annee, $mois] = array_map('intval', explode('-', $periode) + [0, 0]);

        $fiches = $this->fiches->findClotureesDuMois($mois, $annee);

        if ([] === $fiches) {
            $this->addFlash('error', 'Aucune fiche clôturée pour cette période.');

            return $this->redirectToRoute('comptable_editions');
        }

        return new Response($pdf->lot($fiches), Response::HTTP_OK, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => sprintf('inline; filename="fiches-%04d%02d.pdf"', $annee, $mois),
        ]);
    }

    #[Route('/fiche/{id}/pdf', name: 'comptable_fiche_pdf', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function pdf(FicheDeFrais $fiche, GenerateurPdf $pdf): Response
    {
        return new Response($pdf->ficheIndividuelle($fiche), Response::HTTP_OK, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="'.$pdf->nomFichier($fiche).'"',
        ]);
    }

    #[Route('/justificatif/{id}', name: 'comptable_justificatif_voir', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function voirJustificatif(Justificatif $justificatif, StockageJustificatif $stockage): Response
    {
        return VisiteurController::servirJustificatif($justificatif, $stockage);
    }

    // --- Outils -----------------------------------------------------------

    /** @return array<string, float> */
    private function quantitesSaisies(FicheDeFrais $fiche): array
    {
        $quantites = array_fill_keys(array_values(FraisForfaitaire::CODES), 0.0);

        foreach ($fiche->getFraisForfaitaires() as $ligne) {
            $quantites[$ligne->getLibelle()] = $ligne->getQuantite();
        }

        return $quantites;
    }

    /** Comptable ou administrateur : les deux traitent les fiches. */
    private function validateur(): Comptable|Administrateur
    {
        $utilisateur = $this->getUser();
        if (!$utilisateur instanceof Comptable && !$utilisateur instanceof Administrateur) {
            throw $this->createAccessDeniedException();
        }

        return $utilisateur;
    }

    /** Seule une fiche clôturée est soumise à la validation comptable. */
    private function verifierValidable(?FicheDeFrais $fiche): void
    {
        if (null === $fiche || Statut::CLOTUREE !== $fiche->getStatut()) {
            throw $this->createAccessDeniedException('Cette fiche n\'est pas en attente de validation.');
        }
    }

    private function verifierJeton(Request $request, string $id): void
    {
        if (!$this->isCsrfTokenValid($id, (string) $request->request->get('_token'))) {
            throw $this->createAccessDeniedException('Jeton CSRF invalide.');
        }
    }
}
