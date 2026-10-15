<?php

namespace App\Command;

use App\Entity\Statut;
use App\Repository\FicheDeFraisRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Script de clôture lancé en début de campagne de validation : toutes les
 * fiches des mois révolus encore en saisie passent à l'état clôturé, afin que
 * le service comptable dispose d'un périmètre figé.
 */
#[AsCommand(
    name: 'app:cloturer-fiches',
    description: 'Cloture les fiches des mois revolus restees en saisie',
)]
class CloturerFichesCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly FicheDeFraisRepository $fiches,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addOption('simulation', null, InputOption::VALUE_NONE, 'Liste les fiches concernees sans rien modifier');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $simulation = (bool) $input->getOption('simulation');

        $aCloturer = $this->fiches->findACloturer((int) date('n'), (int) date('Y'));

        if ([] === $aCloturer) {
            $io->success('Aucune fiche a cloturer : les mois revolus sont deja traites.');

            return Command::SUCCESS;
        }

        $lignes = [];
        foreach ($aCloturer as $fiche) {
            $lignes[] = [
                $fiche->getVisiteur()?->getNomComplet(),
                $fiche->getPeriodeLibelle(),
                number_format($fiche->getTotal(), 2, ',', ' ').' €',
            ];

            if (!$simulation) {
                $fiche->setStatut(Statut::CLOTUREE);
            }
        }

        if (!$simulation) {
            $this->em->flush();
        }

        $io->title(count($lignes).' fiche(s) '.($simulation ? 'a cloturer' : 'cloturee(s)'));
        $io->table(['Visiteur', 'Periode', 'Total'], $lignes);

        if ($simulation) {
            $io->note('Simulation : aucune modification enregistree.');
        }

        return Command::SUCCESS;
    }
}
