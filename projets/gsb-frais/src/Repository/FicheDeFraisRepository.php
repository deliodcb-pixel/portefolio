<?php

namespace App\Repository;

use App\Entity\FicheDeFrais;
use App\Entity\Statut;
use App\Entity\Vehicule;
use App\Entity\Visiteur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FicheDeFrais>
 */
class FicheDeFraisRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FicheDeFrais::class);
    }

    public function findOneByVisiteurEtPeriode(Visiteur $visiteur, int $mois, int $annee): ?FicheDeFrais
    {
        return $this->findOneBy(['visiteur' => $visiteur, 'mois' => $mois, 'annee' => $annee]);
    }

    /**
     * Fiches d'un visiteur, de la plus récente à la plus ancienne.
     *
     * @return FicheDeFrais[]
     */
    public function findParVisiteur(Visiteur $visiteur): array
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.visiteur = :v')
            ->setParameter('v', $visiteur)
            ->orderBy('f.annee', 'DESC')
            ->addOrderBy('f.mois', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Dernier véhicule déclaré par le visiteur sur une fiche antérieure à la
     * période donnée : il est repris sur la fiche suivante.
     */
    public function findDernierVehicule(Visiteur $visiteur, int $mois, int $annee): ?Vehicule
    {
        $fiche = $this->createQueryBuilder('f')
            ->join('f.vehicule', 've')
            ->addSelect('ve')
            ->andWhere('f.visiteur = :v')
            ->andWhere('(f.annee < :annee) OR (f.annee = :annee AND f.mois < :mois)')
            ->setParameter('v', $visiteur)
            ->setParameter('annee', $annee)
            ->setParameter('mois', $mois)
            ->orderBy('f.annee', 'DESC')
            ->addOrderBy('f.mois', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        return $fiche?->getVehicule();
    }

    /**
     * Fiches clôturées en attente de validation par le service comptable.
     *
     * @return FicheDeFrais[]
     */
    public function findAValider(): array
    {
        return $this->createQueryBuilder('f')
            ->join('f.visiteur', 'v')
            ->addSelect('v')
            ->andWhere('f.statut = :statut')
            ->setParameter('statut', Statut::CLOTUREE)
            ->orderBy('v.nom', 'ASC')
            ->addOrderBy('f.annee', 'DESC')
            ->addOrderBy('f.mois', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return FicheDeFrais[]
     */
    public function findParStatut(Statut $statut): array
    {
        return $this->createQueryBuilder('f')
            ->join('f.visiteur', 'v')
            ->addSelect('v')
            ->andWhere('f.statut = :statut')
            ->setParameter('statut', $statut)
            ->orderBy('v.nom', 'ASC')
            ->addOrderBy('f.annee', 'DESC')
            ->addOrderBy('f.mois', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Fiches encore en saisie alors que leur mois est révolu. C'est la cible
     * du script de clôture lancé en début de campagne de validation.
     *
     * @return FicheDeFrais[]
     */
    public function findACloturer(int $moisCourant, int $anneeCourante): array
    {
        return $this->createQueryBuilder('f')
            ->join('f.visiteur', 'v')
            ->addSelect('v')
            ->andWhere('f.statut = :statut')
            ->andWhere('(f.annee < :annee) OR (f.annee = :annee AND f.mois < :mois)')
            ->setParameter('statut', Statut::CREEE)
            ->setParameter('annee', $anneeCourante)
            ->setParameter('mois', $moisCourant)
            ->orderBy('f.annee', 'ASC')
            ->addOrderBy('f.mois', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Toutes les fiches d'un mois donné qui ne sont plus en saisie : lot
     * d'édition PDF du comptable.
     *
     * @return FicheDeFrais[]
     */
    public function findClotureesDuMois(int $mois, int $annee): array
    {
        return $this->createQueryBuilder('f')
            ->join('f.visiteur', 'v')
            ->addSelect('v')
            ->andWhere('f.mois = :mois')
            ->andWhere('f.annee = :annee')
            ->andWhere('f.statut != :creee')
            ->setParameter('mois', $mois)
            ->setParameter('annee', $annee)
            ->setParameter('creee', Statut::CREEE)
            ->orderBy('v.nom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Périodes distinctes présentes en base, pour alimenter les listes de choix.
     *
     * @return array<int, array{mois: int, annee: int}>
     */
    public function findPeriodesDisponibles(): array
    {
        return $this->createQueryBuilder('f')
            ->select('DISTINCT f.annee AS annee, f.mois AS mois')
            ->orderBy('f.annee', 'DESC')
            ->addOrderBy('f.mois', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
