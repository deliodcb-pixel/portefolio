<?php

namespace App\Controller;

use App\Entity\Livre;
use App\Entity\User;
use App\Form\LivreType;
use App\Repository\LivreRepository;
use App\Service\EmpruntService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class LivreController extends AbstractController
{
    #[Route('/livres', name: 'livre_index', methods: ['GET'])]
    public function index(Request $request, LivreRepository $livreRepository): Response
    {
        $q = trim((string) $request->query->get('q', ''));

        return $this->render('livre/index.html.twig', [
            'livres' => $livreRepository->search($q),
            'q' => $q,
        ]);
    }

    // {id} limité à des chiffres : sinon « /livres/nouveau » serait capturé par cette route (déclarée avant livre_new).
    #[Route('/livres/{id}', name: 'livre_show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(Livre $livre): Response
    {
        return $this->render('livre/show.html.twig', [
            'livre' => $livre,
        ]);
    }

    #[Route('/livres/nouveau', name: 'livre_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $em): Response
    {
        $livre = new Livre();
        $form = $this->createForm(LivreType::class, $livre);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->persist($livre);
            $em->flush();

            $this->addFlash('success', 'Le livre a été ajouté au catalogue.');

            return $this->redirectToRoute('livre_index');
        }

        return $this->render('livre/new.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/livres/{id}/modifier', name: 'livre_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Livre $livre, EntityManagerInterface $em): Response
    {
        $form = $this->createForm(LivreType::class, $livre);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();

            $this->addFlash('success', 'Le livre a été modifié.');

            return $this->redirectToRoute('livre_show', ['id' => $livre->getId()]);
        }

        return $this->render('livre/edit.html.twig', [
            'livre' => $livre,
            'form' => $form,
        ]);
    }

    #[Route('/livres/{id}/supprimer', name: 'livre_delete')]
    public function delete(Livre $livre, EntityManagerInterface $em): Response
    {
        $em->remove($livre);
        $em->flush();

        $this->addFlash('success', 'Le livre a été supprimé.');

        return $this->redirectToRoute('livre_index');
    }

    #[Route('/livres/{id}/emprunter', name: 'livre_emprunter', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function emprunter(Request $request, Livre $livre, #[CurrentUser] User $user, EmpruntService $empruntService): Response
    {
        if (!$this->isCsrfTokenValid('emprunter' . $livre->getId(), $request->request->get('_token'))) {
            throw $this->createAccessDeniedException('Jeton CSRF invalide.');
        }

        try {
            $empruntService->emprunter($user, $livre);
            $this->addFlash('success', 'Le livre a été emprunté.');
        } catch (\DomainException $e) {
            $this->addFlash('danger', $e->getMessage());
        }

        return $this->redirectToRoute('livre_show', ['id' => $livre->getId()]);
    }
}
