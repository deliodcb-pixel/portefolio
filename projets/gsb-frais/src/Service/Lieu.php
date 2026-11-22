<?php

namespace App\Service;

/** Commune résolue en coordonnées par le géocodeur. */
readonly class Lieu
{
    public function __construct(
        public string $libelle,
        public float $lat,
        public float $lon,
        public string $codePostal = '',
    ) {
    }

    public function __toString(): string
    {
        return '' === $this->codePostal
            ? $this->libelle
            : $this->libelle.' ('.$this->codePostal.')';
    }
}
