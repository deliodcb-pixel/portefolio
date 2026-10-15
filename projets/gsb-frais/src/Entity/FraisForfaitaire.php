<?php

namespace App\Entity;

use App\Repository\FraisForfaitaireRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Ligne de frais au forfait. Le montant unitaire est figé sur la ligne au
 * moment de la saisie : si le barème kilométrique change ensuite, ou si le
 * visiteur déclare un autre véhicule le mois suivant, les fiches déjà saisies
 * ne sont pas réécrites.
 */
#[ORM\Entity(repositoryClass: FraisForfaitaireRepository::class)]
#[ORM\Table(name: 'frais_forfaitaire')]
class FraisForfaitaire
{
    public const NUITEE = 'Nuitée hôtel';
    public const REPAS = 'Repas midi';
    public const ETAPE = 'Forfait étape';
    public const KILOMETRE = 'Frais kilométrique';

    /** Barème des frais forfaitisés hors kilométrage. */
    public const TARIFS = [
        self::NUITEE => 80.00,
        self::REPAS => 25.00,
        self::ETAPE => 110.00,
    ];

    /**
     * Codes courts servant de clés dans les formulaires. Les libellés portent
     * des accents : les employer comme noms de champs rend la correspondance
     * dépendante de l'encodage du client.
     */
    public const CODES = [
        'NUI' => self::NUITEE,
        'REP' => self::REPAS,
        'ETP' => self::ETAPE,
        'KM' => self::KILOMETRE,
    ];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: FicheDeFrais::class, inversedBy: 'fraisForfaitaires')]
    #[ORM\JoinColumn(name: 'fiche_de_frais_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?FicheDeFrais $fiche = null;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: 'Le libellé ne peut pas être vide')]
    private string $libelle = '';

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Assert\Positive(message: 'La quantité doit être strictement positive')]
    private string $quantite = '1';

    #[ORM\Column(name: 'montant_unitaire', type: 'decimal', precision: 10, scale: 2)]
    #[Assert\PositiveOrZero(message: 'Le montant unitaire ne peut pas être négatif')]
    private string $montantUnitaire = '0';

    #[ORM\Column(name: 'date_frais', type: 'date_immutable')]
    private \DateTimeImmutable $dateFrais;

    public function __construct()
    {
        $this->dateFrais = new \DateTimeImmutable();
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

    public function getLibelle(): string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): static
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getQuantite(): float
    {
        return (float) $this->quantite;
    }

    public function setQuantite(string|float $quantite): static
    {
        $this->quantite = (string) $quantite;

        return $this;
    }

    public function getMontantUnitaire(): float
    {
        return (float) $this->montantUnitaire;
    }

    public function setMontantUnitaire(string|float $montantUnitaire): static
    {
        $this->montantUnitaire = (string) $montantUnitaire;

        return $this;
    }

    public function getDateFrais(): \DateTimeImmutable
    {
        return $this->dateFrais;
    }

    public function setDateFrais(\DateTimeImmutable $dateFrais): static
    {
        $this->dateFrais = $dateFrais;

        return $this;
    }

    public function getTotal(): float
    {
        return round($this->getQuantite() * $this->getMontantUnitaire(), 2);
    }

    public function estKilometrique(): bool
    {
        return self::KILOMETRE === $this->libelle;
    }

    /** L'unité affichée : des kilomètres pour le kilométrage, des jours sinon. */
    public function getUnite(): string
    {
        return $this->estKilometrique() ? 'km' : 'j';
    }
}
