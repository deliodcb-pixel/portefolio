<?php

namespace App\Entity;

use App\Repository\FraisHorsForfaitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: FraisHorsForfaitRepository::class)]
#[ORM\Table(name: 'frais_hors_forfait')]
class FraisHorsForfait
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: FicheDeFrais::class, inversedBy: 'fraisHorsForfait')]
    #[ORM\JoinColumn(name: 'fiche_de_frais_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
    private ?FicheDeFrais $fiche = null;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: 'Le champ description ne peut pas être vide')]
    #[Assert\Length(max: 100, maxMessage: 'La description ne doit pas dépasser {{ limit }} caractères')]
    private string $libelle = '';

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Assert\NotNull(message: 'Le champ montant ne peut pas être vide')]
    #[Assert\PositiveOrZero(message: 'Le montant ne peut pas être négatif')]
    private ?string $montant = null;

    #[ORM\Column(name: 'date_frais', type: 'date_immutable')]
    #[Assert\NotNull(message: 'Le champ date ne doit pas être vide')]
    private ?\DateTimeImmutable $dateFrais = null;

    /**
     * Refus prononcé par le comptable. La ligne est conservée pour garder la
     * trace que le visiteur doit être informé de la suppression.
     */
    #[ORM\Column(type: 'boolean')]
    private bool $refuse = false;

    /** Marque une ligne refusée déjà basculée sur la fiche du mois suivant. */
    #[ORM\Column(type: 'boolean')]
    private bool $reporte = false;

    /** @var Collection<int, Justificatif> */
    #[ORM\OneToMany(mappedBy: 'frais', targetEntity: Justificatif::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $justificatifs;

    public function __construct()
    {
        $this->justificatifs = new ArrayCollection();
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

    public function getMontant(): float
    {
        return (float) $this->montant;
    }

    public function setMontant(string|float|null $montant): static
    {
        $this->montant = null === $montant ? null : (string) $montant;

        return $this;
    }

    public function getDateFrais(): ?\DateTimeImmutable
    {
        return $this->dateFrais;
    }

    public function setDateFrais(?\DateTimeImmutable $dateFrais): static
    {
        $this->dateFrais = $dateFrais;

        return $this;
    }

    public function isRefuse(): bool
    {
        return $this->refuse;
    }

    public function setRefuse(bool $refuse): static
    {
        $this->refuse = $refuse;

        return $this;
    }

    public function isReporte(): bool
    {
        return $this->reporte;
    }

    public function setReporte(bool $reporte): static
    {
        $this->reporte = $reporte;

        return $this;
    }

    /** @return Collection<int, Justificatif> */
    public function getJustificatifs(): Collection
    {
        return $this->justificatifs;
    }

    public function addJustificatif(Justificatif $justificatif): static
    {
        if (!$this->justificatifs->contains($justificatif)) {
            $this->justificatifs->add($justificatif);
            $justificatif->setFrais($this);
        }

        return $this;
    }

    public function removeJustificatif(Justificatif $justificatif): static
    {
        $this->justificatifs->removeElement($justificatif);

        return $this;
    }

    public function aUnJustificatif(): bool
    {
        return !$this->justificatifs->isEmpty();
    }
}
