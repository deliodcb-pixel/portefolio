<?php

namespace App\Entity;

/**
 * Cycle de vie d'une fiche de frais, tel que décrit par le diagramme d'états
 * de l'énoncé : Créée -> Clôturée -> Validée -> Mise en paiement -> Remboursée.
 */
enum Statut: string
{
    case CREEE = 'CREEE';
    case CLOTUREE = 'CLOTUREE';
    case VALIDEE = 'VALIDEE';
    case MISE_EN_PAIEMENT = 'MISE_EN_PAIEMENT';
    case REMBOURSEE = 'REMBOURSEE';

    public function libelle(): string
    {
        return match ($this) {
            self::CREEE => 'Fiche créée, saisie en cours',
            self::CLOTUREE => 'Saisie clôturée',
            self::VALIDEE => 'Validée',
            self::MISE_EN_PAIEMENT => 'Mise en paiement',
            self::REMBOURSEE => 'Remboursée',
        };
    }

    /** Libellé court pour les pastilles d'état de l'interface. */
    public function libelleCourt(): string
    {
        return match ($this) {
            self::CREEE => 'En saisie',
            self::CLOTUREE => 'Clôturée',
            self::VALIDEE => 'Validée',
            self::MISE_EN_PAIEMENT => 'En paiement',
            self::REMBOURSEE => 'Remboursée',
        };
    }

    /** Le visiteur ne peut modifier sa fiche que tant qu'elle est en saisie. */
    public function estModifiable(): bool
    {
        return self::CREEE === $this;
    }

    /** État suivant du cycle, ou null si la fiche est au bout de son parcours. */
    public function suivant(): ?self
    {
        return match ($this) {
            self::CREEE => self::CLOTUREE,
            self::CLOTUREE => self::VALIDEE,
            self::VALIDEE => self::MISE_EN_PAIEMENT,
            self::MISE_EN_PAIEMENT => self::REMBOURSEE,
            self::REMBOURSEE => null,
        };
    }
}
