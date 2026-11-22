<?php

namespace App\Repository;

use App\Entity\Statut;
use App\Entity\Visiteur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Visiteur>
 */
class VisiteurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Visiteur::class);
    }

    /**
     * @return Visiteur[]
     */
    public function findAllTries(): array
    {
        return $this->createQueryBuilder('v')
            ->orderBy('v.nom', 'ASC')
            ->addOrderBy('v.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Visiteurs ayant au moins une fiche clôturée : seuls ceux-là sont
     * proposés à l'écran de sélection du comptable.
     *
     * @return Visiteur[]
     */
    public function findAvecFicheAValider(): array
    {
        return $this->createQueryBuilder('v')
            ->join('v.fiches', 'f')
            ->andWhere('f.statut = :statut')
            ->setParameter('statut', Statut::CLOTUREE)
            ->orderBy('v.nom', 'ASC')
            ->addOrderBy('v.prenom', 'ASC')
            ->distinct()
            ->getQuery()
            ->getResult();
    }

    public function loginExiste(string $login): bool
    {
        return (bool) $this->createQueryBuilder('v')
            ->select('COUNT(v.id)')
            ->andWhere('v.login = :login')
            ->setParameter('login', $login)
            ->getQuery()
            ->getSingleScalarResult();
    }
}
