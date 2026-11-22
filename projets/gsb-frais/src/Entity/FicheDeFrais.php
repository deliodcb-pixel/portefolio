<?php

namespace App\Entity;

use App\Repository\FicheDeFraisRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: FicheDeFraisRepository::class)]
#[ORM\Table(name: 'fiche_de_frais')]
#[ORM\UniqueConstraint(name: 'fiche_de_frais_visiteur_id_mois_annee_key', columns: ['visiteur_id', 'mois', 'annee'])]
class FicheDeFrais
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Visiteur::class, inversedBy: 'fiches')]
    #[ORM\JoinColumn(name: 'visiteur_id', referencedColumnName: 'id', nullable: false, onDelete: 'RESTRICT')]
    private ?Visiteur $visiteur = null;

    /** Renseigné au moment où un comptable valide la fiche. */
    #[ORM\ManyToOne(targetEntity: Comptable::class, inversedBy: 'fichesValidees')]
    #[ORM\JoinColumn(name: 'comptable_id', referencedColumnName: 'id', nullable: true, onDelete: 'SET NULL')]
    private ?Comptable $comptable = null;

    /** L'administrateur traite également les fiches : il peut être le validateur. */
    #[ORM\ManyToOne(targetEntity: Administrateur::class)]
    #[ORM\JoinColumn(name: 'administrateur_id', referencedColumnName: 'id', nullable: true, onDelete: 'SET NULL')]
    private ?Administrateur $administrateur = null;

    /**
     * Véhicule utilisé ce mois-là, déclaré par le visiteur lui-même. Tant
     * qu'il ne l'a pas fait, le kilométrage n'a pas de tarif.
     */
    #[ORM\ManyToOne(targetEntity: Vehicule::class)]
    #[ORM\JoinColumn(name: 'vehicule_id', referencedColumnName: 'id', nullable: true, onDelete: 'RESTRICT')]
    private ?Vehicule $vehicule = null;

    #[ORM\Column(type: 'smallint')]
    #[Assert\Range(min: 1, max: 12)]
    private int $mois;

    #[ORM\Column(type: 'smallint')]
    #[Assert\Range(min: 2000, max: 2100)]
    private int $annee;

    #[ORM\Column(name: 'date_creation', type: 'datetimetz_immutable')]
    private \DateTimeImmutable $dateCreation;

    #[ORM\Column(name: 'date_validation', type: 'datetimetz_immutable', nullable: true)]
    private ?\DateTimeImmutable $dateValidation = null;

    #[ORM\Column(type: 'string', enumType: Statut::class)]
    private Statut $statut = Statut::CREEE;

    #[ORM\Column(name: 'montant_valide', type: 'decimal', precision: 10, scale: 2, nullable: true)]
    private ?string $montantValide = null;

    /** @var Collection<int, FraisForfaitaire> */
    #[ORM\OneToMany(mappedBy: 'fiche', targetEntity: FraisForfaitaire::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[ORM\OrderBy(['libelle' => 'ASC'])]
    private Collection $fraisForfaitaires;

    /** @var Collection<int, FraisHorsForfait> */
    #[ORM\OneToMany(mappedBy: 'fiche', targetEntity: FraisHorsForfait::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[ORM\OrderBy(['dateFrais' => 'ASC'])]
    private Collection $fraisHorsForfait;

    /** @var Collection<int, Trajet> */
    #[ORM\OneToMany(mappedBy: 'fiche', targetEntity: Trajet::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[ORM\OrderBy(['dateTrajet' => 'ASC'])]
    private Collection $trajets;

    public function __construct()
    {
        $this->fraisForfaitaires = new ArrayCollection();
        $this->fraisHorsForfait = new ArrayCollection();
        $this->trajets = new ArrayCollection();
        $this->dateCreation = new \DateTimeImmutable();
        $this->mois = (int) date('n');
        $this->annee = (int) date('Y');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVisiteur(): ?Visiteur
    {
        return $this->visiteur;
    }

    public function setVisiteur(?Visiteur $visiteur): static
    {
        $this->visiteur = $visiteur;

        return $this;
    }

    public function getComptable(): ?Comptable
    {
        return $this->comptable;
    }

    public function setComptable(?Comptable $comptable): static
    {
        $this->comptable = $comptable;

        return $this;
    }

    public function getAdministrateur(): ?Administrateur
    {
        return $this->administrateur;
    }

    public function setAdministrateur(?Administrateur $administrateur): static
    {
        $this->administrateur = $administrateur;

        return $this;
    }

    /** Qui a validé la fiche, qu'il s'agisse d'un comptable ou d'un administrateur. */
    public function getValidateur(): ?string
    {
        return $this->comptable?->getNomComplet() ?? $this->administrateur?->getNomComplet();
    }

    public function getVehicule(): ?Vehicule
    {
        return $this->vehicule;
    }

    public function setVehicule(?Vehicule $vehicule): static
    {
        $this->vehicule = $vehicule;

        return $this;
    }

    /** Tarif kilométrique applicable à cette fiche. */
    public function getTarifKm(): float
    {
        return $this->vehicule?->getTarifKm() ?? 0.0;
    }

    public function getMois(): int
    {
        return $this->mois;
    }

    public function setMois(int $mois): static
    {
        $this->mois = $mois;

        return $this;
    }

    public function getAnnee(): int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): static
    {
        $this->annee = $annee;

        return $this;
    }

    /** Clé triable « aaaamm », équivalent du champ mois du schéma d'origine. */
    public function getPeriode(): string
    {
        return sprintf('%04d%02d', $this->annee, $this->mois);
    }

    public function getPeriodeLibelle(): string
    {
        $noms = [1 => 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

        return ($noms[$this->mois] ?? '?').' '.$this->annee;
    }

    public function getDateCreation(): \DateTimeImmutable
    {
        return $this->dateCreation;
    }

    public function setDateCreation(\DateTimeImmutable $dateCreation): static
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    public function getDateValidation(): ?\DateTimeImmutable
    {
        return $this->dateValidation;
    }

    public function setDateValidation(?\DateTimeImmutable $dateValidation): static
    {
        $this->dateValidation = $dateValidation;

        return $this;
    }

    public function getStatut(): Statut
    {
        return $this->statut;
    }

    public function setStatut(Statut $statut): static
    {
        $this->statut = $statut;

        return $this;
    }

    public function getMontantValide(): ?float
    {
        return null === $this->montantValide ? null : (float) $this->montantValide;
    }

    public function setMontantValide(string|float|null $montantValide): static
    {
        $this->montantValide = null === $montantValide ? null : (string) $montantValide;

        return $this;
    }

    /** @return Collection<int, FraisForfaitaire> */
    public function getFraisForfaitaires(): Collection
    {
        return $this->fraisForfaitaires;
    }

    public function addFraisForfaitaire(FraisForfaitaire $frais): static
    {
        if (!$this->fraisForfaitaires->contains($frais)) {
            $this->fraisForfaitaires->add($frais);
            $frais->setFiche($this);
        }

        return $this;
    }

    public function removeFraisForfaitaire(FraisForfaitaire $frais): static
    {
        $this->fraisForfaitaires->removeElement($frais);

        return $this;
    }

    /** @return Collection<int, FraisHorsForfait> */
    public function getFraisHorsForfait(): Collection
    {
        return $this->fraisHorsForfait;
    }

    public function addFraisHorsForfait(FraisHorsForfait $frais): static
    {
        if (!$this->fraisHorsForfait->contains($frais)) {
            $this->fraisHorsForfait->add($frais);
            $frais->setFiche($this);
        }

        return $this;
    }

    public function removeFraisHorsForfait(FraisHorsForfait $frais): static
    {
        $this->fraisHorsForfait->removeElement($frais);

        return $this;
    }

    /** @return Collection<int, Trajet> */
    public function getTrajets(): Collection
    {
        return $this->trajets;
    }

    public function addTrajet(Trajet $trajet): static
    {
        if (!$this->trajets->contains($trajet)) {
            $this->trajets->add($trajet);
            $trajet->setFiche($this);
        }

        return $this;
    }

    public function removeTrajet(Trajet $trajet): static
    {
        $this->trajets->removeElement($trajet);

        return $this;
    }

    /** Kilométrage déduit des trajets saisis, aller-retour compris. */
    public function getKilometrageCalcule(): float
    {
        $total = 0.0;
        foreach ($this->trajets as $trajet) {
            $total += $trajet->getDistanceTotale();
        }

        return round($total, 2);
    }

    // --- Calculs ---------------------------------------------------------

    public function getMontantForfait(): float
    {
        $total = 0.0;
        foreach ($this->fraisForfaitaires as $frais) {
            $total += $frais->getTotal();
        }

        return round($total, 2);
    }

    /** Seules les lignes non refusées entrent dans le remboursement. */
    public function getMontantHorsForfait(): float
    {
        $total = 0.0;
        foreach ($this->fraisHorsForfait as $frais) {
            if (!$frais->isRefuse()) {
                $total += $frais->getMontant();
            }
        }

        return round($total, 2);
    }

    public function getMontantRefuse(): float
    {
        $total = 0.0;
        foreach ($this->fraisHorsForfait as $frais) {
            if ($frais->isRefuse()) {
                $total += $frais->getMontant();
            }
        }

        return round($total, 2);
    }

    public function getTotal(): float
    {
        return round($this->getMontantForfait() + $this->getMontantHorsForfait(), 2);
    }

    public function getNbJustificatifs(): int
    {
        $n = 0;
        foreach ($this->fraisHorsForfait as $frais) {
            $n += $frais->getJustificatifs()->count();
        }

        return $n;
    }

    public function estModifiable(): bool
    {
        return $this->statut->estModifiable();
    }
}
