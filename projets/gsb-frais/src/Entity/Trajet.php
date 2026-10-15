<?php

namespace App\Entity;

use App\Repository\TrajetRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Déplacement d'une ville à une autre, dont la distance est calculée plutôt
 * que déclarée. Le kilométrage de la fiche est la somme de ces trajets.
 */
#[ORM\Entity(repositoryClass: TrajetRepository::class)]
#[ORM\Table(name: 'trajet')]
class Trajet
{
    public const SOURCE_ROUTIERE = 'osrm';
    public const SOURCE_ORTHODROMIE = 'haversine';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: FicheDeFrais::class, inversedBy: 'trajets')]
    #[ORM\JoinColumn(name: 'fiche_de_frais_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?FicheDeFrais $fiche = null;

    #[ORM\Column(name: 'ville_depart', type: 'text')]
    #[Assert\NotBlank(message: 'La ville de départ est obligatoire')]
    private string $villeDepart = '';

    #[ORM\Column(name: 'ville_arrivee', type: 'text')]
    #[Assert\NotBlank(message: "La ville d'arrivée est obligatoire")]
    private string $villeArrivee = '';

    #[ORM\Column(name: 'lat_depart', type: 'decimal', precision: 9, scale: 6, nullable: true)]
    private ?string $latDepart = null;

    #[ORM\Column(name: 'lon_depart', type: 'decimal', precision: 9, scale: 6, nullable: true)]
    private ?string $lonDepart = null;

    #[ORM\Column(name: 'lat_arrivee', type: 'decimal', precision: 9, scale: 6, nullable: true)]
    private ?string $latArrivee = null;

    #[ORM\Column(name: 'lon_arrivee', type: 'decimal', precision: 9, scale: 6, nullable: true)]
    private ?string $lonArrivee = null;

    #[ORM\Column(name: 'distance_km', type: 'decimal', precision: 8, scale: 2)]
    #[Assert\PositiveOrZero]
    private string $distanceKm = '0';

    #[ORM\Column(name: 'aller_retour', type: 'boolean')]
    private bool $allerRetour = false;

    #[ORM\Column(name: 'date_trajet', type: 'date_immutable')]
    private \DateTimeImmutable $dateTrajet;

    /** Méthode de calcul retenue, pour pouvoir justifier la distance. */
    #[ORM\Column(type: 'text')]
    private string $source = self::SOURCE_ROUTIERE;

    public function __construct()
    {
        $this->dateTrajet = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFiche(): ?FicheDeFrais
    {
        return $this->fiche;
    }

    public function setFiche(?FicheDeFrais $fiche): static
    {
        $this->fiche = $fiche;

        return $this;
    }

    public function getVilleDepart(): string
    {
        return $this->villeDepart;
    }

    public function setVilleDepart(string $villeDepart): static
    {
        $this->villeDepart = $villeDepart;

        return $this;
    }

    public function getVilleArrivee(): string
    {
        return $this->villeArrivee;
    }

    public function setVilleArrivee(string $villeArrivee): static
    {
        $this->villeArrivee = $villeArrivee;

        return $this;
    }

    public function setCoordonneesDepart(?float $lat, ?float $lon): static
    {
        $this->latDepart = null === $lat ? null : (string) $lat;
        $this->lonDepart = null === $lon ? null : (string) $lon;

        return $this;
    }

    public function setCoordonneesArrivee(?float $lat, ?float $lon): static
    {
        $this->latArrivee = null === $lat ? null : (string) $lat;
        $this->lonArrivee = null === $lon ? null : (string) $lon;

        return $this;
    }

    public function getLatDepart(): ?float
    {
        return null === $this->latDepart ? null : (float) $this->latDepart;
    }

    public function getLonDepart(): ?float
    {
        return null === $this->lonDepart ? null : (float) $this->lonDepart;
    }

    public function getLatArrivee(): ?float
    {
        return null === $this->latArrivee ? null : (float) $this->latArrivee;
    }

    public function getLonArrivee(): ?float
    {
        return null === $this->lonArrivee ? null : (float) $this->lonArrivee;
    }

    public function getDistanceKm(): float
    {
        return (float) $this->distanceKm;
    }

    public function setDistanceKm(string|float $distanceKm): static
    {
        $this->distanceKm = (string) $distanceKm;

        return $this;
    }

    public function isAllerRetour(): bool
    {
        return $this->allerRetour;
    }

    public function setAllerRetour(bool $allerRetour): static
    {
        $this->allerRetour = $allerRetour;

        return $this;
    }

    public function getDateTrajet(): \DateTimeImmutable
    {
        return $this->dateTrajet;
    }

    public function setDateTrajet(\DateTimeImmutable $dateTrajet): static
    {
        $this->dateTrajet = $dateTrajet;

        return $this;
    }

    public function getSource(): string
    {
        return $this->source;
    }

    public function setSource(string $source): static
    {
        $this->source = $source;

        return $this;
    }

    /** Distance effectivement parcourue, aller-retour compris. */
    public function getDistanceTotale(): float
    {
        return round($this->getDistanceKm() * ($this->allerRetour ? 2 : 1), 2);
    }

    public function getLibelle(): string
    {
        return $this->villeDepart.' → '.$this->villeArrivee.($this->allerRetour ? ' (aller-retour)' : '');
    }

    public function getSourceLibelle(): string
    {
        return match ($this->source) {
            self::SOURCE_ROUTIERE => 'distance routière calculée',
            default => 'distance à vol d\'oiseau majorée',
        };
    }
}
