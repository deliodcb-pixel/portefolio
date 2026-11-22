<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Verrouille les colonnes d'authentification une fois les comptes existants
 * pourvus d'identifiants par app:init-comptes.
 */
final class Version20260923000002 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Rend login et mdp obligatoires et garantit l unicite des identifiants';
    }

    public function up(Schema $schema): void
    {
        $this->abortIf(
            (bool) $this->connection->fetchOne('SELECT COUNT(*) FROM visiteur WHERE login IS NULL OR mdp IS NULL'),
            'Des visiteurs sont encore sans identifiants : lancez d abord app:init-comptes.'
        );
        $this->abortIf(
            (bool) $this->connection->fetchOne('SELECT COUNT(*) FROM comptable WHERE login IS NULL OR mdp IS NULL'),
            'Des comptables sont encore sans identifiants : lancez d abord app:init-comptes.'
        );

        $this->addSql('ALTER TABLE visiteur ALTER COLUMN login SET NOT NULL');
        $this->addSql('ALTER TABLE visiteur ALTER COLUMN mdp SET NOT NULL');
        $this->addSql('ALTER TABLE comptable ALTER COLUMN login SET NOT NULL');
        $this->addSql('ALTER TABLE comptable ALTER COLUMN mdp SET NOT NULL');

        $this->addSql('CREATE UNIQUE INDEX IF NOT EXISTS visiteur_login_key ON visiteur (login)');
        $this->addSql('CREATE UNIQUE INDEX IF NOT EXISTS comptable_login_key ON comptable (login)');

        $this->addSql("ALTER TABLE visiteur ADD CONSTRAINT visiteur_login_check CHECK (btrim(login) <> '')");
        $this->addSql("ALTER TABLE comptable ADD CONSTRAINT comptable_login_check CHECK (btrim(login) <> '')");
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE visiteur DROP CONSTRAINT IF EXISTS visiteur_login_check');
        $this->addSql('ALTER TABLE comptable DROP CONSTRAINT IF EXISTS comptable_login_check');
        $this->addSql('DROP INDEX IF EXISTS visiteur_login_key');
        $this->addSql('DROP INDEX IF EXISTS comptable_login_key');
        $this->addSql('ALTER TABLE visiteur ALTER COLUMN login DROP NOT NULL');
        $this->addSql('ALTER TABLE visiteur ALTER COLUMN mdp DROP NOT NULL');
        $this->addSql('ALTER TABLE comptable ALTER COLUMN login DROP NOT NULL');
        $this->addSql('ALTER TABLE comptable ALTER COLUMN mdp DROP NOT NULL');
    }

    public function isTransactional(): bool
    {
        return true;
    }
}
