<?php

namespace App\Entity;

use App\Repository\ComptableRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Agent du service comptable : valide les fiches et les met en paiement.
 * La création des comptes ne lui appartient pas, elle revient à l'administrateur.
 */
#[ORM\Entity(repositoryClass: ComptableRepository::class)]
#[ORM\Table(name: 'comptable')]
class Comptable implements UserInterface, PasswordAuthenticatedUserInterface
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

    /** @var Collection<int, FicheDeFrais> */
    #[ORM\OneToMany(mappedBy: 'comptable', targetEntity: FicheDeFrais::class)]
    private Collection $fichesValidees;

    public function __construct()
    {
        $this->fichesValidees = new ArrayCollection();
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
    public function getFichesValidees(): Collection
    {
        return $this->fichesValidees;
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
        return ['ROLE_COMPTABLE'];
    }

    public function eraseCredentials(): void
    {
    }
}
