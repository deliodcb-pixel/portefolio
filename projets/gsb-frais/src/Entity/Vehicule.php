<?php

namespace App\Entity;

use App\Repository\VehiculeRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: VehiculeRepository::class)]
#[ORM\Table(name: 'vehicule')]
#[ORM\UniqueConstraint(name: 'vehicule_puissance_fiscale_carburant_key', columns: ['puissance_fiscale', 'carburant'])]
class Vehicule
{
    public const DIESEL = 'diesel';
    public const ESSENCE = 'essence';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'bigint')]
    private ?int $id = null;

    #[ORM\Column(name: 'puissance_fiscale', type: 'smallint')]
    #[Assert\Positive(message: 'La puissance fiscale doit être strictement positive')]
    private int $puissanceFiscale = 4;

    #[ORM\Column(type: 'text')]
    #[Assert\Choice(choices: [self::DIESEL, self::ESSENCE], message: 'Carburant inconnu')]
    private string $carburant = self::ESSENCE;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPuissanceFiscale(): int
    {
        return $this->puissanceFiscale;
    }

    public function setPuissanceFiscale(int $puissanceFiscale): static
    {
        $this->puissanceFiscale = $puissanceFiscale;

        return $this;
    }

    public function getCarburant(): string
    {
        return $this->carburant;
    }

    public function setCarburant(string $carburant): static
    {
        $this->carburant = strtolower($carburant);

        return $this;
    }

    public function estDiesel(): bool
    {
        return self::DIESEL === strtolower($this->carburant);
    }

    /**
     * Barème imposé par la direction en remplacement du forfait unique de
     * 0,62 €/km : le tarif dépend de la tranche de puissance fiscale et du
     * carburant. La table ne stocke pas le tarif, il se déduit des deux.
     */
    public function getTarifKm(): float
    {
        $tranche = match (true) {
            $this->puissanceFiscale <= 4 => 0,
            $this->puissanceFiscale <= 6 => 1,
            default => 2,
        };

        $bareme = $this->estDiesel()
            ? [0.52, 0.58, 0.65]
            : [0.62, 0.67, 0.72];

        return $bareme[$tranche];
    }

    public function getLibelle(): string
    {
        $tranche = match (true) {
            $this->puissanceFiscale <= 4 => '4 CV',
            $this->puissanceFiscale <= 6 => '5/6 CV',
            default => '7 CV et +',
        };

        return $tranche.' '.ucfirst(strtolower($this->carburant));
    }

    public function __toString(): string
    {
        return $this->getLibelle().' — '.number_format($this->getTarifKm(), 2, ',', ' ').' €/km';
    }
}
