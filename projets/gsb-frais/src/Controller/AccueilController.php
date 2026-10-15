<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AccueilController extends AbstractController
{
    /**
     * Point d'entrée commun : chaque profil est renvoyé vers son espace.
     */
    #[Route('/', name: 'app_accueil')]
    public function index(): Response
    {
        if ($this->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('admin_comptes');
        }

        if ($this->isGranted('ROLE_COMPTABLE')) {
            return $this->redirectToRoute('comptable_validation_selection');
        }

        return $this->redirectToRoute('visiteur_fiche_courante');
    }
}
