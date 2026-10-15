<?php

namespace App\Entity;

use App\Repository\JustificatifRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * Facture acquittée déposée par le visiteur à l'appui d'un frais hors forfait.
 * Le fichier lui-même est stocké hors base, seul son descripteur est persisté.
 */
#[ORM\Entity(repositoryClass: JustificatifRepository::class)]
#[ORM\Table(name: 'justificatif')]
class Justificatif
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: FraisHorsForfait::class, inversedBy: 'justificatifs')]
    #[ORM\JoinColumn(name: 'frais_hors_forfait_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?FraisHorsForfait $frais = null;

    /** Nom technique sur le disque, non devinable. */
    #[ORM\Column(name: 'nom_fichier', type: 'text')]
    private string $nomFichier = '';

    #[ORM\Column(name: 'nom_original', type: 'text')]
    private string $nomOriginal = '';

    #[ORM\Column(name: 'mime_type', type: 'text')]
    private string $mimeType = '';

    #[ORM\Column(type: 'integer')]
    private int $taille = 0;

    #[ORM\Column(name: 'date_upload', type: 'datetimetz_immutable')]
    private \DateTimeImmutable $dateUpload;

    public function __construct()
    {
        $this->dateUpload = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFrais(): ?FraisHorsForfait
    {
        return $this->frais;
    }

    public function setFrais(?FraisHorsForfait $frais): static
    {
        $this->frais = $frais;

        return $this;
    }

    public function getNomFichier(): string
    {
        return $this->nomFichier;
    }

    public function setNomFichier(string $nomFichier): static
    {
        $this->nomFichier = $nomFichier;

        return $this;
    }

    public function getNomOriginal(): string
    {
        return $this->nomOriginal;
    }

    public function setNomOriginal(string $nomOriginal): static
    {
        $this->nomOriginal = $nomOriginal;

        return $this;
    }

    public function getMimeType(): string
    {
        return $this->mimeType;
    }

    public function setMimeType(string $mimeType): static
    {
        $this->mimeType = $mimeType;

        return $this;
    }

    public function getTaille(): int
    {
        return $this->taille;
    }

    public function setTaille(int $taille): static
    {
        $this->taille = $taille;

        return $this;
    }

    public function getDateUpload(): \DateTimeImmutable
    {
        return $this->dateUpload;
    }

    public function setDateUpload(\DateTimeImmutable $dateUpload): static
    {
        $this->dateUpload = $dateUpload;

        return $this;
    }

    public function estImage(): bool
    {
        return str_starts_with($this->mimeType, 'image/');
    }

    public function getTailleLisible(): string
    {
        if ($this->taille < 1024) {
            return $this->taille.' o';
        }
        if ($this->taille < 1024 * 1024) {
            return round($this->taille / 1024).' Ko';
        }

        return round($this->taille / (1024 * 1024), 1).' Mo';
    }
}
