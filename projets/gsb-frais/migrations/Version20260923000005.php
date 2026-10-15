<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Le véhicule devient un choix porté par la fiche et non plus une propriété
 * figée du visiteur : un visiteur peut changer de voiture en cours d'année, et
 * chaque fiche doit garder trace de celle réellement utilisée ce mois-là.
 *
 * Le véhicule du compte reste la valeur par défaut d'une fiche nouvelle.
 */
final class Version20260923000005 extends AbstractMigration
{
    /** Les six possibilités du barème : tranche de puissance et carburant. */
    private const BAREME = [
        [4, 'diesel'],
        [5, 'diesel'],
        [7, 'diesel'],
        [4, 'essence'],
        [5, 'essence'],
        [7, 'essence'],
    ];

    public function getDescription(): string
    {
        return 'Vehicule choisi au niveau de la fiche et referentiel complet du bareme';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(<<<'SQL'
            ALTER TABLE fiche_de_frais
                ADD COLUMN IF NOT EXISTS vehicule_id BIGINT
                REFERENCES vehicule (id) ON UPDATE CASCADE ON DELETE RESTRICT
            SQL);

        // Les six combinaisons doivent exister pour alimenter la liste de choix.
        foreach (self::BAREME as [$puissance, $carburant]) {
            $this->addSql(
                'INSERT INTO vehicule (puissance_fiscale, carburant) VALUES (:p, :c) ON CONFLICT DO NOTHING',
                ['p' => $puissance, 'c' => $carburant]
            );
        }

        // Les fiches déjà saisies conservent le véhicule de leur visiteur.
        $this->addSql(<<<'SQL'
            UPDATE fiche_de_frais f
               SET vehicule_id = v.vehicule_id
              FROM visiteur v
             WHERE v.id = f.visiteur_id
               AND f.vehicule_id IS NULL
            SQL);
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE fiche_de_frais DROP COLUMN IF EXISTS vehicule_id');
    }

    public function isTransactional(): bool
    {
        return true;
    }
}
