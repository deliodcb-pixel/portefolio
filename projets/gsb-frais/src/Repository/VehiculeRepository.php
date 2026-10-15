<?php

namespace App\Repository;

use App\Entity\Vehicule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Vehicule>
 */
class VehiculeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Vehicule::class);
    }

    /**
     * Les six possibilités du barème, une par tranche de puissance et par
     * carburant. Les puissances 4, 5 et 7 représentent les tranches
     * « 4 CV », « 5/6 CV » et « 7 CV et plus » : proposer davantage de lignes
     * afficherait des doublons, le tarif ne dépendant que de la tranche.
     *
     * @return Vehicule[]
     */
    public function findBareme(): array
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.puissanceFiscale IN (:tranches)')
            ->setParameter('tranches', [4, 5, 7])
            ->orderBy('v.carburant', 'ASC')
            ->addOrderBy('v.puissanceFiscale', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
