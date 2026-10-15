<?php

namespace App\DataFixtures;

use App\Entity\Auteur;
use App\Entity\Categorie;
use App\Entity\Emprunt;
use App\Entity\Livre;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    /** Mot de passe des deux comptes de test (à écrire au tableau le jour du contrôle). */
    public const MOT_DE_PASSE = 'mediatheque';

    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        // --- Catégories -------------------------------------------------------
        $categories = [];
        foreach (['Science-fiction', 'Roman', 'Jeunesse'] as $libelle) {
            $categorie = (new Categorie())->setLibelle($libelle);
            $manager->persist($categorie);
            $categories[$libelle] = $categorie;
        }

        // --- Auteurs ----------------------------------------------------------
        $auteurs = [];
        foreach ([['Herbert', 'Frank'], ['Le Guin', 'Ursula K.'], ['Verne', 'Jules']] as [$nom, $prenom]) {
            $auteur = (new Auteur())->setNom($nom)->setPrenom($prenom);
            $manager->persist($auteur);
            $auteurs[$nom] = $auteur;
        }

        // --- Livres -----------------------------------------------------------
        // titre, ISBN, date de publication, auteur, catégories, exemplaires, description
        $donnees = [
            ['Dune', '9782266320481', '1965-08-01', 'Herbert', ['Science-fiction'], 1,
                "Sur la planète désertique Arrakis, la famille Atréides lutte pour sa survie."],
            ['Le Messie de Dune', '9782266320498', '1969-01-01', 'Herbert', ['Science-fiction'], 2,
                "Paul Atréides règne sur l'univers, mais son pouvoir attire les complots."],
            ['La Main gauche de la nuit', '9782253003458', '1969-03-01', 'Le Guin', ['Science-fiction'], 2,
                "Un envoyé terrien découvre un monde glacé où les habitants n'ont pas de sexe fixe."],
            ['Les Dépossédés', '9782253133261', '1974-05-01', 'Le Guin', ['Science-fiction', 'Roman'], 2,
                "Un physicien quitte sa planète anarchiste pour rejoindre le monde voisin."],
            ['Vingt mille lieues sous les mers', '9782070360024', '1870-06-20', 'Verne', ['Roman', 'Jeunesse'], 3,
                "Le capitaine Nemo entraîne trois naufragés à bord du Nautilus."],
            ['Le Tour du monde en quatre-vingts jours', '9782070413065', '1872-12-01', 'Verne', ['Roman', 'Jeunesse'], 3,
                "Phileas Fogg parie qu'il peut faire le tour du monde en quatre-vingts jours."],
            ['Voyage au centre de la Terre', '9782070413072', '1864-11-25', 'Verne', ['Roman', 'Jeunesse', 'Science-fiction'], 2,
                "Un professeur et son neveu descendent dans un volcan islandais.<script>alert(1)</script>"],
            ['Les Enfants du capitaine Grant', '9782070413089', '1868-01-01', 'Verne', ['Roman', 'Jeunesse'], 1,
                "À la recherche d'un naufragé, trois enfants et leurs compagnons font le tour du globe."],
        ];

        $livres = [];
        foreach ($donnees as [$titre, $isbn, $date, $nomAuteur, $libellesCategories, $exemplaires, $description]) {
            $livre = (new Livre())
                ->setTitre($titre)
                ->setIsbn($isbn)
                ->setDatePublication(new \DateTime($date))
                ->setAuteur($auteurs[$nomAuteur])
                ->setNbExemplaires($exemplaires)
                ->setDescription($description);

            foreach ($libellesCategories as $libelle) {
                $livre->addCategorie($categories[$libelle]);
            }

            $manager->persist($livre);
            $livres[$titre] = $livre;
        }

        // --- Utilisateurs -----------------------------------------------------
        $eleve = (new User())->setEmail('eleve@lycee.test')->setRoles(['ROLE_USER']);
        $eleve->setPassword($this->passwordHasher->hashPassword($eleve, self::MOT_DE_PASSE));
        $manager->persist($eleve);

        $docu = (new User())->setEmail('docu@lycee.test')->setRoles(['ROLE_DOCUMENTALISTE']);
        $docu->setPassword($this->passwordHasher->hashPassword($docu, self::MOT_DE_PASSE));
        $manager->persist($docu);

        // --- Emprunts de l'élève ------------------------------------------------
        // L'élève a déjà 3 emprunts EN COURS (limite atteinte), plus 1 emprunt déjà rendu.
        // « Dune » n'existe qu'en un exemplaire : il n'est plus disponible pour les autres.
        $emprunts = [
            ['Dune', '-5 days', null],
            ['Le Messie de Dune', '-3 days', null],
            ['Les Dépossédés', '-1 day', null],
            ['Vingt mille lieues sous les mers', '-40 days', '-26 days'],
        ];

        foreach ($emprunts as [$titre, $debut, $retour]) {
            $dateEmprunt = new \DateTimeImmutable($debut);

            $emprunt = (new Emprunt())
                ->setUser($eleve)
                ->setLivre($livres[$titre])
                ->setDateEmprunt($dateEmprunt)
                ->setDateRetourPrevue($dateEmprunt->modify('+14 days'))
                ->setDateRetour($retour !== null ? new \DateTimeImmutable($retour) : null);

            $manager->persist($emprunt);
        }

        $manager->flush();
    }
}
