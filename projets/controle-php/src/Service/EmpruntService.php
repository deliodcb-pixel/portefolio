<?php

namespace App\Service;

use App\Entity\Emprunt;
use App\Entity\Livre;
use App\Entity\User;
use App\Repository\EmpruntRepository;
use Doctrine\ORM\EntityManagerInterface;

class EmpruntService
{
    public function __construct(
        private EmpruntRepository $empruntRepository,
        private EntityManagerInterface $em,
    ) {
    }

    public function emprunter(User $user, Livre $livre): Emprunt
    {
        if ($this->empruntRepository->countEnCoursPourUser($user) >= 3) {
            throw new \DomainException('Vous avez déjà 3 emprunts en cours.');
        }

        if ($livre->getNbExemplaires() - $this->empruntRepository->countEnCoursPourLivre($livre) < 1) {
            throw new \DomainException("Aucun exemplaire de ce livre n'est disponible.");
        }

        $emprunt = new Emprunt();
        $emprunt->setUser($user);
        $emprunt->setLivre($livre);
        $emprunt->setDateEmprunt(new \DateTimeImmutable());
        $emprunt->setDateRetourPrevue(new \DateTimeImmutable('+14 days'));

        $this->em->persist($emprunt);
        $this->em->flush();

        return $emprunt;
    }
}
