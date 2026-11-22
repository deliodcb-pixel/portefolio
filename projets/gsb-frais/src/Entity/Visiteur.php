<?php

namespace App\Entity;

use App\Repository\VisiteurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Compte d'un visiteur médical. Il ne porte pas de véhicule : le visiteur
 * déclare lui-même le sien sur chaque fiche.
 */
#[ORM\Entity(repositoryClass: VisiteurRepository::class)]
#[ORM\Table(name: 'visiteur')]
class Visiteur implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: 'Le nom est obligatoire')]
    private string $nom = '';

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank(message: 'Le prénom est obligatoire')]
    private string $prenom = '';

    #[ORM\Column(type: 'text', nullable: true)]
    #[Assert\Email(message: 'Adresse électronique invalide')]
    private ?string $email = null;

    #[ORM\Column(type: 'text', unique: true)]
    #[Assert\NotBlank(message: "L'identifiant de connexion est obligatoire")]
    private string $login = '';

    #[ORM\Column(type: 'text')]
    private string $mdp = '';

    /**
     * Véhicule autrefois saisi par l'administrateur. La colonne est conservée
     * avec ses valeurs, les migrations ne supprimant rien. Elle reste mappée
     * pour que Doctrine ne propose pas de la supprimer, mais l'application ne
     * la lit plus : d'où l'absence d'accesseur.
     */
    #[ORM\ManyToOne(targetEntity: Vehicule::class)]
    #[ORM\JoinColumn(name: 'vehicule_id', referencedColumnName: 'id', nullable: true, onDelete: 'RESTRICT')]
    private ?Vehicule $ancienVehicule = null;

    /** @var Collection<int, FicheDeFrais> */
    #[ORM\OneToMany(mappedBy: 'visiteur', targetEntity: FicheDeFrais::class)]
    private Collection $fiches;

    public function __construct()
    {
        $this->fiches = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNomComplet(): string
    {
        return ucfirst($this->prenom).' '.mb_strtoupper($this->nom);
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = null === $email ? null : trim($email);

        return $this;
    }

    public function getLogin(): string
    {
        return $this->login;
    }

    public function setLogin(string $login): static
    {
        $this->login = $login;

        return $this;
    }

    public function getMdp(): string
    {
        return $this->mdp;
    }

    public function setMdp(string $mdp): static
    {
        $this->mdp = $mdp;

        return $this;
    }

    /** @return Collection<int, FicheDeFrais> */
    public function getFiches(): Collection
    {
        return $this->fiches;
    }

    // --- UserInterface ---------------------------------------------------

    public function getUserIdentifier(): string
    {
        return $this->login;
    }

    public function getPassword(): string
    {
        return $this->mdp;
    }

    public function getRoles(): array
    {
        return ['ROLE_VISITEUR'];
    }

    public function eraseCredentials(): void
    {
    }
}
