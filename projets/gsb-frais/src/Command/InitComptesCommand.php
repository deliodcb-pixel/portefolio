<?php

namespace App\Command;

use Doctrine\DBAL\Connection;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactoryInterface;

/**
 * Attribue des identifiants aux comptes déjà présents en base et crée le
 * compte administrateur initial.
 *
 * Passe par DBAL et non par l'ORM : tant que les colonnes login et mdp sont
 * vides, l'hydratation des entités échouerait.
 */
#[AsCommand(
    name: 'app:init-comptes',
    description: 'Attribue les identifiants aux comptes existants et cree l\'administrateur initial',
)]
class InitComptesCommand extends Command
{
    public function __construct(
        private readonly Connection $connexion,
        private readonly PasswordHasherFactoryInterface $hasherFactory,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('mdp-admin', null, InputOption::VALUE_REQUIRED, 'Mot de passe du compte administrateur')
            ->addOption('mdp-defaut', null, InputOption::VALUE_REQUIRED, 'Mot de passe attribue aux comptes existants');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $hasher = $this->hasherFactory->getPasswordHasher('Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface');

        $mdpAdmin = $input->getOption('mdp-admin') ?? $this->motDePasseAleatoire();
        $mdpDefaut = $input->getOption('mdp-defaut') ?? $this->motDePasseAleatoire();

        $recap = [];

        // --- Visiteurs -----------------------------------------------------
        $visiteurs = $this->connexion->fetchAllAssociative(
            'SELECT id, nom, prenom FROM visiteur WHERE login IS NULL OR mdp IS NULL ORDER BY id'
        );
        foreach ($visiteurs as $v) {
            $login = $this->loginUnique('v.'.$this->normaliser($v['nom']));
            $this->connexion->executeStatement(
                'UPDATE visiteur SET login = :login, mdp = :mdp WHERE id = :id',
                ['login' => $login, 'mdp' => $hasher->hash($mdpDefaut), 'id' => $v['id']]
            );
            $recap[] = ['Visiteur', $v['prenom'].' '.$v['nom'], $login, $mdpDefaut];
        }

        // --- Comptables ----------------------------------------------------
        $comptables = $this->connexion->fetchAllAssociative(
            'SELECT id, nom, prenom FROM comptable WHERE login IS NULL OR mdp IS NULL ORDER BY id'
        );
        foreach ($comptables as $c) {
            $login = $this->loginUnique('c.'.$this->normaliser($c['nom']));
            $this->connexion->executeStatement(
                'UPDATE comptable SET login = :login, mdp = :mdp WHERE id = :id',
                ['login' => $login, 'mdp' => $hasher->hash($mdpDefaut), 'id' => $c['id']]
            );
            $recap[] = ['Comptable', $c['prenom'].' '.$c['nom'], $login, $mdpDefaut];
        }

        // --- Administrateur -------------------------------------------------
        $dejaAdmin = (int) $this->connexion->fetchOne('SELECT COUNT(*) FROM administrateur');
        if (0 === $dejaAdmin) {
            $this->connexion->executeStatement(
                'INSERT INTO administrateur (nom, prenom, email, login, mdp) VALUES (:nom, :prenom, :email, :login, :mdp)',
                [
                    'nom' => 'Administrateur',
                    'prenom' => 'Compte',
                    'email' => null,
                    'login' => 'admin',
                    'mdp' => $hasher->hash($mdpAdmin),
                ]
            );
            $recap[] = ['Administrateur', 'Compte Administrateur', 'admin', $mdpAdmin];
        } else {
            $io->note('Un administrateur existe deja, aucun compte cree.');
        }

        if ([] === $recap) {
            $io->success('Tous les comptes possedent deja des identifiants.');

            return Command::SUCCESS;
        }

        $io->title('Identifiants attribues');
        $io->table(['Profil', 'Personne', 'Login', 'Mot de passe'], $recap);
        $io->warning('Ces mots de passe apparaissent en clair uniquement ici. Notez-les puis changez-les.');

        return Command::SUCCESS;
    }

    /** Retire accents et caractères parasites pour construire un identifiant. */
    private function normaliser(string $valeur): string
    {
        $sansAccent = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $valeur) ?: $valeur;

        return strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $sansAccent) ?? '');
    }

    /** Ajoute un suffixe numérique tant que l'identifiant est pris. */
    private function loginUnique(string $base): string
    {
        $login = $base;
        $suffixe = 1;

        while ($this->loginPris($login)) {
            $login = $base.(++$suffixe);
        }

        return $login;
    }

    private function loginPris(string $login): bool
    {
        foreach (['visiteur', 'comptable', 'administrateur'] as $table) {
            $n = (int) $this->connexion->fetchOne(
                "SELECT COUNT(*) FROM $table WHERE login = :login",
                ['login' => $login]
            );
            if ($n > 0) {
                return true;
            }
        }

        return false;
    }

    private function motDePasseAleatoire(): string
    {
        $alphabet = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        $mdp = '';
        for ($i = 0; $i < 12; ++$i) {
            $mdp .= $alphabet[random_int(0, strlen($alphabet) - 1)];
        }

        return $mdp;
    }
}
