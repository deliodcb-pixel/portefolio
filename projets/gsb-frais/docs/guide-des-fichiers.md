# Les fichiers du projet GSB Frais

Du plus important au moins important.

---

## 1. Le code de l'application (à connaître pour l'oral)

### Les données — `src/Entity/`

- **FicheDeFrais.php** → la fiche d'un visiteur pour un mois : frais, trajets, véhicule, état et totaux.
- **Visiteur.php** → un visiteur médical, qui se connecte pour saisir ses frais.
- **Comptable.php** → un comptable, qui valide les fiches et les met en paiement.
- **Administrateur.php** → l'administrateur, qui gère les comptes et traite aussi les fiches.
- **FraisForfaitaire.php** → une ligne au forfait : nuitée, repas, étape ou kilomètres.
- **FraisHorsForfait.php** → une dépense réelle (libellé, date, montant), qui peut être refusée.
- **Trajet.php** → un déplacement d'une ville à une autre, avec sa distance calculée.
- **Vehicule.php** → une puissance fiscale + un carburant ; calcule le tarif au kilomètre.
- **Justificatif.php** → les informations d'une facture déposée (le fichier est sur le disque).
- **Statut.php** → les 5 états d'une fiche : créée, clôturée, validée, mise en paiement, remboursée.

### Les pages et les actions — `src/Controller/`

- **VisiteurController.php** → tout ce que fait le visiteur : sa fiche, ses frais, ses trajets, ses factures, son PDF.
- **ComptableController.php** → tout ce que fait le comptable : valider, refuser, mettre en paiement, imprimer.
- **AdminController.php** → la gestion des comptes : créer, changer le mot de passe, supprimer.
- **SecurityController.php** → la page de connexion et la déconnexion.
- **AccueilController.php** → envoie chaque utilisateur vers son espace selon son rôle.

### Les règles métier — `src/Service/`

- **GestionnaireFiche.php** → les règles des fiches : création du mois, clôture, report des frais refusés, validation.
- **CalculateurDistance.php** → calcule la distance entre deux villes avec deux services en ligne.e
- **GenerateurPdf.php** → transforme une fiche en PDF.
- **StockageJustificatif.php** → enregistre les factures déposées et vérifie leur format et leur taille.
- **Lieu.php** → une commune avec ses coordonnées GPS.
- **ResultatDistance.php** → le résultat d'un calcul de distance.
- **VilleIntrouvableException.php** → l'erreur affichée quand une ville n'existe pas.

### Les pages HTML — `templates/`

- **base.html.twig** → le modèle commun à toutes les pages : bandeau, menu, messages.
- **visiteur/fiche.html.twig** → la fiche du mois du visiteur.
- **visiteur/historique.html.twig** → la liste des fiches passées du visiteur.
- **comptable/selection.html.twig** → le choix de la fiche à valider.
- **comptable/validation.html.twig** → le contrôle et la validation d'une fiche.
- **comptable/paiement.html.twig** → la mise en paiement des fiches validées.
- **comptable/suivi.html.twig** → toutes les fiches, rangées par état.
- **comptable/editions.html.twig** → les impressions PDF du comptable.
- **admin/comptes.html.twig** → la page de gestion des comptes.
- **security/login.html.twig** → le formulaire de connexion.
- **pdf/fiche.html.twig** → le modèle du PDF imprimé.

### Les requêtes en base — `src/Repository/`

- **FicheDeFraisRepository.php** → les recherches de fiches (par visiteur, par mois, par état…).
- **VisiteurRepository.php** → les recherches de visiteurs.
- **ComptableRepository.php** → les recherches de comptables.
- **AdministrateurRepository.php** → vérifie si un identifiant est déjà pris.
- **VehiculeRepository.php** → la liste des 6 véhicules du barème.
- **FraisForfaitaireRepository.php**, **FraisHorsForfaitRepository.php**, **JustificatifRepository.php**, **TrajetRepository.php** → vides, créés avec leur entité.

### Les modifications de la base — `migrations/`

- **Version20260923000001.php** → ajoute la connexion, l'administrateur, les justificatifs et les 5 états.
- **Version20260923000002.php** → rend les identifiants obligatoires et uniques.
- **Version20260923000003.php** → remet à jour les compteurs d'identifiants.
- **Version20260923000004.php** → ajoute les trajets et la validation par l'administrateur.
- **Version20260923000005.php** → met le véhicule sur la fiche.
- **Version20260930000001.php** → rend le véhicule du compte facultatif.

### Les commandes — `src/Command/`

- **InitComptesCommand.php** → `app:init-comptes` : crée les identifiants et le compte administrateur.
- **CloturerFichesCommand.php** → `app:cloturer-fiches` : clôture les fiches des mois passés.
- **JeuDeDonneesCommand.php** → `app:jeu-de-donnees` : crée des fiches de test.

---

## 2. Les autres fichiers du projet

- **public/css/gsb.css** → l'apparence de toutes les pages.
- **public/js/formulaires.js** → empêche d'envoyer deux fois un formulaire.
- **public/maquette/validation.html** → la maquette de l'écran de validation demandée par l'énoncé.
- **README.md** → la présentation du projet et son installation.
- **docs/schema_supabase.sql** → ⚠ ancien schéma de la base, qui ne correspond plus à la vraie.
- **docs/guide-des-fichiers.md** → ce guide.
- **docs/calcul-des-distances.md** → l'explication du calcul automatique des distances.
- **config/packages/security.yaml** → qui peut se connecter et à quelles pages chacun a accès.
- **config/packages/doctrine.yaml** → la connexion à la base de données.
- **.env.local** → ⚠ l'adresse et le mot de passe de la base Supabase, à ne jamais partager.
- **.env** → les réglages par défaut de l'application.
- **.env.dev** → la clé secrète pour le développement.
- **.env.test** → les réglages pour les tests (non utilisés).

---

## 3. Les fichiers de Symfony (on n'y touche presque jamais)

- **public/index.php** → la porte d'entrée : toutes les pages passent par lui.
- **src/Kernel.php** → le cœur de Symfony, qui démarre l'application.
- **bin/console** → l'outil pour lancer les commandes (`php bin/console …`).
- **composer.json** → la liste des bibliothèques utilisées par le projet.
- **composer.lock** → les versions exactes de ces bibliothèques.
- **symfony.lock** → la liste des configurations installées automatiquement par Symfony.
- **config/bundles.php** → la liste des modules Symfony activés.
- **config/services.yaml** → permet d'utiliser les classes de `src/` partout sans configuration.
- **config/routes.yaml** → dit à Symfony de trouver les adresses des pages dans les contrôleurs.
- **config/routes/framework.yaml** → les pages d'erreur en développement.
- **config/routes/security.yaml** → l'adresse de déconnexion.
- **config/routes/web_profiler.yaml** → l'adresse de la barre de débogage.
- **config/packages/framework.yaml** → les réglages de base de Symfony.
- **config/packages/csrf.yaml** → la protection des formulaires contre les attaques.
- **config/packages/twig.yaml** → les réglages des pages HTML.
- **config/packages/validator.yaml** → active la vérification des saisies.
- **config/packages/cache.yaml** → le cache, qui garde en mémoire les distances déjà calculées.
- **config/packages/monolog.yaml** → l'écriture du journal de l'application.
- **config/packages/routing.yaml** → l'adresse de base du site.
- **config/packages/doctrine_migrations.yaml** → l'emplacement des migrations.
- **config/packages/debug.yaml** → les outils de débogage.
- **config/packages/web_profiler.yaml** → la barre de débogage en bas des pages.
- **config/packages/property_info.yaml** → un réglage par défaut de Symfony.
- **config/packages/translation.yaml** → la traduction (non utilisée, l'appli est en français).
- **config/preload.php** → une optimisation pour la mise en production.
- **config/reference.php** → la liste de toutes les options de configuration, générée automatiquement.
- **.gitignore** → les fichiers que Git ne doit pas enregistrer.
- **.editorconfig** → les règles de mise en forme pour l'éditeur de code.

---

## 4. Les fichiers installés mais inutilisés

- **assets/app.js** → le JavaScript de Symfony, jamais chargé par nos pages.
- **assets/stimulus_bootstrap.js** → démarre Stimulus (non utilisé).
- **assets/controllers.json** → la configuration de Stimulus (non utilisée).
- **assets/controllers/hello_controller.js** → un exemple fourni par Symfony.
- **assets/controllers/csrf_protection_controller.js** → un exemple fourni par Symfony.
- **assets/styles/app.css** → une feuille de style d'exemple (non utilisée).
- **assets/vendor/@hotwired/stimulus/stimulus.index.js** → la bibliothèque Stimulus (non utilisée).
- **assets/vendor/@hotwired/turbo/turbo.index.js** → la bibliothèque Turbo (non utilisée).
- **assets/vendor/installed.php** → la liste de ces bibliothèques.
- **importmap.php** → la liste des fichiers JavaScript (non utilisée).
- **config/packages/asset_mapper.yaml** → la gestion du dossier `assets/` (non utilisée).
- **config/packages/ux_turbo.yaml** → la configuration de Turbo (non utilisée).
- **config/packages/mailer.yaml** → l'envoi de mails (non utilisé).
- **config/packages/messenger.yaml** → les tâches en arrière-plan (non utilisées).
- **config/packages/notifier.yaml** → les notifications (non utilisées).
- **compose.yaml** → une base de données Docker (non utilisée, la base est sur Supabase).
- **compose.override.yaml** → des réglages Docker (non utilisés).
- **src/DataFixtures/AppFixtures.php** → des données de test, vide. ⚠ Ne jamais lancer `doctrine:fixtures:load`, qui vide toute la base.
- **phpunit.dist.xml** → la configuration des tests automatiques (aucun test écrit).
- **bin/phpunit** → lance les tests automatiques.
- **tests/bootstrap.php** → prépare les tests automatiques.
- **translations/** → dossier des traductions, vide.
- **src/Controller/.gitignore**, **src/Entity/.gitignore**, **src/Repository/.gitignore**, **migrations/.gitignore**, **translations/.gitignore** → fichiers vides qui gardent les dossiers dans Git.

---

## 5. Les dossiers créés automatiquement (ne jamais modifier)

- **vendor/** → le code des bibliothèques (Symfony, Doctrine, Twig, Dompdf…), recréé par `composer install`.
- **var/cache/** → les fichiers temporaires de Symfony, recréés tout seuls.
- **var/log/** → le journal de tout ce qui se passe dans l'application.
- **var/justificatifs/** → les factures déposées par les visiteurs.
- **var/share/** → un dossier interne de Symfony, vide.
