<?php

namespace App\Repository;

use App\Entity\Emprunt;
use App\Entity\Livre;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Emprunt>
 */
class EmpruntRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Emprunt::class);
    }

    /**
     * Nombre d'exemplaires de ce livre actuellement empruntés (non rendus).
     */
    public function countEnCoursPourLivre(Livre $livre): int
    {
        return (int) $this->createQueryBuilder('e')
            ->select('COUNT(e.id)')
            ->andWhere('e.livre = :livre')
            ->andWhere('e.dateRetour IS NULL')
            ->setParameter('livre', $livre)
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Nombre d'emprunts en cours (non rendus) de cet utilisateur.
     */
    public function countEnCoursPourUser(User $user): int
    {
        return (int) $this->createQueryBuilder('e')
            ->select('COUNT(e.id)')
            ->andWhere('e.user = :user')
            ->andWhere('e.dateRetour IS NULL')
            ->setParameter('user', $user)
            ->getQuery()
            ->getSingleScalarResult();
    }
}
