<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Resynchronise les séquences d'identité.
 *
 * Les premières lignes ont été insérées avec des identifiants explicites, ce
 * qui ne fait pas avancer la séquence associée : le premier INSERT laissé à
 * PostgreSQL tentait alors de réutiliser un identifiant déjà pris.
 */
final class Version20260923000003 extends AbstractMigration
{
    private const TABLES = [
        'visiteur',
        'comptable',
        'administrateur',
        'vehicule',
        'fiche_de_frais',
        'frais_forfaitaire',
        'frais_hors_forfait',
        'justificatif',
    ];

    public function getDescription(): string
    {
        return 'Resynchronise les sequences d identite sur le maximum des identifiants existants';
    }

    public function up(Schema $schema): void
    {
        foreach (self::TABLES as $table) {
            $this->addSql(sprintf(
                "SELECT setval(pg_get_serial_sequence('%s', 'id'), COALESCE((SELECT MAX(id) FROM %s), 0) + 1, false)",
                $table,
                $table
            ));
        }
    }

    public function down(Schema $schema): void
    {
        $this->throwIrreversibleMigrationException('La resynchronisation des sequences ne se defait pas.');
    }
}
