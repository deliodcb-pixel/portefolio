<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * L'administrateur ne saisit plus de véhicule à la création d'un compte : le
 * visiteur déclare lui-même le sien sur sa fiche. Le véhicule du compte devient
 * donc facultatif.
 *
 * La colonne est conservée avec les valeurs déjà enregistrées : les migrations
 * de ce projet ne suppriment rien.
 */
final class Version20260930000001 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Vehicule du compte visiteur facultatif : le visiteur le declare sur sa fiche';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE visiteur ALTER COLUMN vehicule_id DROP NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->abortIf(
            (bool) $this->connection->fetchOne('SELECT COUNT(*) FROM visiteur WHERE vehicule_id IS NULL'),
            'Des visiteurs n ont pas de vehicule sur leur compte : la contrainte NOT NULL ne peut pas etre retablie.'
        );

        $this->addSql('ALTER TABLE visiteur ALTER COLUMN vehicule_id SET NOT NULL');
    }

    public function isTransactional(): bool
    {
        return true;
    }
}
