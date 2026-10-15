<?php

namespace App\Controller;

use App\Entity\Comptable;
use App\Entity\Visiteur;
use App\Repository\AdministrateurRepository;
use App\Repository\ComptableRepository;
use App\Repository\VisiteurRepository;
use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Gestion des comptes. Réservée à l'administrateur : le comptable ne s'occupe
 * que des fiches de frais.
 */
#[Route('/admin')]
#[IsGranted('ROLE_ADMIN')]
class AdminController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly VisiteurRepository $visiteurs,
        private readonly ComptableRepository $comptables,
        private readonly AdministrateurRepository $admins,
        private readonly UserPasswordHasherInterface $hasher,
        private readonly ValidatorInterface $validateur,
    ) {
    }

    #[Route('/comptes', name: 'admin_comptes', methods: ['GET'])]
    public function comptes(): Response
    {
        return $this->render('admin/comptes.html.twig', [
            'menu' => 'comptes',
            'visiteurs' => $this->visiteurs->findAllTries(),
            'comptables' => $this->comptables->findAllTries(),
        ]);
    }

    #[Route('/comptes/visiteur', name: 'admin_visiteur_nouveau', methods: ['POST'])]
    public function creerVisiteur(Request $request): Response
    {
        $this->verifierJeton($request, 'nouveau_visiteur');

        $login = trim((string) $request->request->get('login'));
        $mdp = (string) $request->request->get('mdp');

        $erreurs = $this->verifierIdentifiants($login, $mdp);

        // Pas de véhicule ici : le visiteur le déclare lui-même sur sa fiche.
        $visiteur = (new Visiteur())
            ->setNom(trim((string) $request->request->get('nom')))
            ->setPrenom(trim((string) $request->request->get('prenom')))
            ->setEmail(trim((string) $request->request->get('email')) ?: null)
            ->setLogin($login);

        foreach ($this->validateur->validate($visiteur) as $violation) {
            $erreurs[] = $violation->getMessage();
        }

        if ([] !== $erreurs) {
            return $this->echec($erreurs);
        }

        $visiteur->setMdp($this->hasher->hashPassword($visiteur, $mdp));
        $this->em->persist($visiteur);
        $this->em->flush();

        $this->addFlash('success', 'Compte visiteur créé pour '.$visiteur->getNomComplet().' (identifiant « '.$login.' »).');

        return $this->redirectToRoute('admin_comptes');
    }

    #[Route('/comptes/comptable', name: 'admin_comptable_nouveau', methods: ['POST'])]
    public function creerComptable(Request $request): Response
    {
        $this->verifierJeton($request, 'nouveau_comptable');

        $login = trim((string) $request->request->get('login'));
        $mdp = (string) $request->request->get('mdp');

        $erreurs = $this->verifierIdentifiants($login, $mdp);

        $comptable = (new Comptable())
            ->setNom(trim((string) $request->request->get('nom')))
            ->setPrenom(trim((string) $request->request->get('prenom')))
            ->setEmail(trim((string) $request->request->get('email')) ?: null)
            ->setLogin($login);

        foreach ($this->validateur->validate($comptable) as $violation) {
            $erreurs[] = $violation->getMessage();
        }

        if ([] !== $erreurs) {
            return $this->echec($erreurs);
        }

        $comptable->setMdp($this->hasher->hashPassword($comptable, $mdp));
        $this->em->persist($comptable);
        $this->em->flush();

        $this->addFlash('success', 'Compte comptable créé pour '.$comptable->getNomComplet().' (identifiant « '.$login.' »).');

        return $this->redirectToRoute('admin_comptes');
    }

    #[Route('/comptes/{type}/{id}/mot-de-passe', name: 'admin_compte_mdp', requirements: ['type' => 'visiteur|comptable', 'id' => '\d+'], methods: ['POST'])]
    public function reinitialiserMdp(Request $request, string $type, int $id): Response
    {
        $this->verifierJeton($request, 'mdp'.$type.$id);

        $compte = 'visiteur' === $type ? $this->visiteurs->find($id) : $this->comptables->find($id);
        if (null === $compte) {
            throw $this->createNotFoundException('Compte introuvable.');
        }

        $mdp = (string) $request->request->get('mdp');
        if (strlen($mdp) < 8) {
            return $this->echec(['Le mot de passe doit comporter au moins 8 caractères.']);
        }

        $compte->setMdp($this->hasher->hashPassword($compte, $mdp));
        $this->em->flush();

        $this->addFlash('success', 'Mot de passe réinitialisé pour '.$compte->getNomComplet().'.');

        return $this->redirectToRoute('admin_comptes');
    }

    #[Route('/comptes/{type}/{id}/supprimer', name: 'admin_compte_supprimer', requirements: ['type' => 'visiteur|comptable', 'id' => '\d+'], methods: ['POST'])]
    public function supprimer(Request $request, string $type, int $id): Response
    {
        $this->verifierJeton($request, 'suppr'.$type.$id);

        $compte = 'visiteur' === $type ? $this->visiteurs->find($id) : $this->comptables->find($id);
        if (null === $compte) {
            throw $this->createNotFoundException('Compte introuvable.');
        }

        $nom = $compte->getNomComplet();

        try {
            $this->em->remove($compte);
            $this->em->flush();
        } catch (ForeignKeyConstraintViolationException) {
            // Les fiches de frais sont des pièces comptables : on ne supprime
            // pas un visiteur qui en possède.
            return $this->echec([
                'Impossible de supprimer '.$nom.' : des fiches de frais lui sont rattachées.',
            ]);
        }

        $this->addFlash('success', 'Compte de '.$nom.' supprimé.');

        return $this->redirectToRoute('admin_comptes');
    }

    // --- Outils -----------------------------------------------------------

    /** @return string[] */
    private function verifierIdentifiants(string $login, string $mdp): array
    {
        $erreurs = [];

        if ('' === $login) {
            $erreurs[] = "L'identifiant de connexion est obligatoire.";
        } elseif ($this->loginPris($login)) {
            $erreurs[] = 'L\'identifiant « '.$login.' » est déjà utilisé.';
        }

        if (strlen($mdp) < 8) {
            $erreurs[] = 'Le mot de passe doit comporter au moins 8 caractères.';
        }

        return $erreurs;
    }

    /** L'unicité vaut sur les trois tables, faute de quoi la connexion serait ambiguë. */
    private function loginPris(string $login): bool
    {
        return $this->visiteurs->loginExiste($login)
            || $this->comptables->loginExiste($login)
            || $this->admins->loginExiste($login);
    }

    /** @param string[] $erreurs */
    private function echec(array $erreurs): Response
    {
        foreach (array_unique($erreurs) as $message) {
            $this->addFlash('error', $message);
        }

        return $this->redirectToRoute('admin_comptes');
    }

    private function verifierJeton(Request $request, string $id): void
    {
        if (!$this->isCsrfTokenValid($id, (string) $request->request->get('_token'))) {
            throw $this->createAccessDeniedException('Jeton CSRF invalide.');
        }
    }
}
