<?php

namespace App\Service;

use App\Entity\FraisHorsForfait;
use App\Entity\Justificatif;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Dépôt des factures acquittées.
 *
 * Les fichiers sont écrits hors de public/ : ce sont des pièces comptables
 * nominatives, elles ne doivent être lisibles qu'au travers d'un contrôleur
 * qui vérifie les droits du demandeur.
 */
class StockageJustificatif
{
    public const TYPES_AUTORISES = [
        'application/pdf' => 'pdf',
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/webp' => 'webp',
    ];

    public const TAILLE_MAX = 5 * 1024 * 1024;

    public function __construct(
        #[Autowire('%kernel.project_dir%/var/justificatifs')]
        private readonly string $repertoire,
        private readonly Filesystem $fs,
    ) {
    }

    /**
     * @throws FileException si le fichier est refusé
     */
    public function enregistrer(UploadedFile $fichier, FraisHorsForfait $frais): Justificatif
    {
        $mime = $fichier->getMimeType() ?? '';

        if (!isset(self::TYPES_AUTORISES[$mime])) {
            throw new FileException('Format refusé : seuls les PDF, JPEG, PNG et WebP sont acceptés.');
        }

        if ($fichier->getSize() > self::TAILLE_MAX) {
            throw new FileException('Fichier trop volumineux : 5 Mo au maximum.');
        }

        // Nom non devinable : le nom d'origine n'est conservé que pour l'affichage.
        $nomFichier = bin2hex(random_bytes(16)).'.'.self::TYPES_AUTORISES[$mime];

        $this->fs->mkdir($this->repertoire);
        $fichier->move($this->repertoire, $nomFichier);

        $justificatif = (new Justificatif())
            ->setNomFichier($nomFichier)
            ->setNomOriginal($fichier->getClientOriginalName())
            ->setMimeType($mime)
            ->setTaille((int) filesize($this->chemin($nomFichier)));

        $frais->addJustificatif($justificatif);

        return $justificatif;
    }

    public function chemin(Justificatif|string $justificatif): string
    {
        $nom = $justificatif instanceof Justificatif ? $justificatif->getNomFichier() : $justificatif;

        return $this->repertoire.'/'.$nom;
    }

    public function supprimerFichier(Justificatif $justificatif): void
    {
        $this->fs->remove($this->chemin($justificatif));
    }

    public function existe(Justificatif $justificatif): bool
    {
        return $this->fs->exists($this->chemin($justificatif));
    }
}
