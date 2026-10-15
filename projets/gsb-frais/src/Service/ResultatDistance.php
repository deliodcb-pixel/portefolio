<?php

namespace App\Service;

/** Résultat d'un calcul de distance entre deux communes. */
readonly class ResultatDistance
{
    public function __construct(
        public Lieu $depart,
        public Lieu $arrivee,
        public float $distanceKm,
        public string $source,
    ) {
    }
}
