# GSB — Gestion des frais de déplacement

Application web de gestion des fiches de frais des visiteurs médicaux du
laboratoire Galaxy Swiss Bourdin, réalisée avec Symfony 7.4 sur PostgreSQL
(instance Supabase).

## Périmètre couvert

| Demande de l'énoncé | Réalisation |
|---|---|
| Saisie des frais par le visiteur | Espace `/visiteur` : frais forfaitisés et hors forfait, modifiables tant que la fiche est en saisie |
| Puissance fiscale du véhicule | Barème appliqué au frais kilométrique ; le visiteur déclare lui-même son véhicule sur chaque fiche, parmi les six possibilités du barème (trois tranches de puissance, deux carburants) |
| Kilométrage | Le visiteur saisit deux villes, la distance routière est calculée |
| Upload de justificatifs | Dépôt de factures (PDF, JPEG, PNG, WebP, 5 Mo max) rattachées à une ligne hors forfait |
| Génération PDF | Fiche à l'unité, toutes les fiches d'un visiteur, ou lot mensuel — au format de l'annexe 1 |
| Partie comptable | Espace `/comptable` : cas d'utilisation « Valider fiche de frais » de l'annexe 2, mise en paiement, suivi |
| Clôture mensuelle | `app:cloturer-fiches`, également déclenchable depuis l'interface |
| Maquette de validation | `public/maquette/validation.html`, à faire valider avant développement |

## Barème kilométrique

Le forfait unique de 0,62 €/km est remplacé par un barème indexé sur la
puissance fiscale. Le tarif n'est pas stocké : il se déduit du couple
puissance/carburant dans `Vehicule::getTarifKm()`.

| Puissance | Diesel | Essence |
|---|---|---|
| 4 CV | 0,52 € | 0,62 € |
| 5 et 6 CV | 0,58 € | 0,67 € |
| 7 CV et plus | 0,65 € | 0,72 € |

**Le véhicule est déclaré par le visiteur, sur la fiche.** L'administrateur
n'en saisit aucun à la création du compte : c'est le visiteur qui retient
lui-même, chaque mois, la voiture réellement utilisée parmi les six
possibilités du barème. Changer de voiture en cours d'année ne réécrit donc pas
les mois déjà saisis.

- Une nouvelle fiche reprend le dernier véhicule déclaré ; le visiteur le
  change s'il y a lieu.
- Tant qu'aucune de ses fiches ne porte de véhicule (c'est le cas de la
  première), rien n'est présélectionné : il choisit parmi les six possibilités
  avant de pouvoir saisir un trajet ou des kilomètres, faute de tarif. Le
  comptable ne peut pas non plus porter de kilomètres sur une telle fiche.
- Changer de véhicule en cours de mois revalorise la ligne kilométrique au
  nouveau tarif, sans toucher à la quantité retenue.

La colonne `visiteur.vehicule_id` du schéma d'origine est conservée avec ses
valeurs, mais rendue facultative et n'est plus lue par l'application. Elle
reste mappée dans l'entité (propriété privée, sans accesseur) : sans cela, les
outils de Doctrine proposeraient de la supprimer.

Le montant unitaire est en outre recopié sur la ligne de frais au moment de la
saisie : une évolution ultérieure du barème ne touche pas aux fiches passées.

Les tranches sont représentées en base par les puissances 4, 5 et 7. Proposer
chaque puissance réelle afficherait des doublons, le tarif ne dépendant que de
la tranche.

## Calcul automatique des distances

Le kilométrage de la fiche est la somme des trajets enregistrés. Pour chaque
trajet, le visiteur donne deux villes et le système calcule la distance
routière. L'ajout d'un trajet à « distance connue », saisie par le visiteur et
vérifiable par personne, a été retiré.

**Arbitrage avec la saisie directe.** La quantité kilométrique reste modifiable
directement dans le tableau des frais forfaitisés. Tout ajout ou retrait de
trajet y reporte la somme recalculée et écrase donc une valeur saisie à la
main ; l'inverse n'est pas vrai. Tant que les deux divergent, l'écran le
signale et le message de confirmation rappelle laquelle des deux l'emportera.

Pour le calcul, deux services publics sont sollicités, sans clé d'API :

- **Base Adresse Nationale** (`api-adresse.data.gouv.fr`) convertit le nom de
  commune en coordonnées ;
- **OSRM** (`router.project-osrm.org`) fournit la distance routière.

Si le routage est indisponible, l'application retombe sur la distance à vol
d'oiseau majorée de 30 %, et le signale à l'écran comme sur le PDF. La méthode
retenue est stockée sur chaque trajet (`trajet.source`), de même que les
coordonnées : une distance contestée doit pouvoir être justifiée.

Les résultats sont mis en cache, un même couple de villes revenant souvent.

Le comptable garde la main : il voit le détail des trajets et peut corriger la
quantité kilométrique retenue, comme l'exige l'étape 5 du cas d'utilisation.

## Cycle de vie d'une fiche

```
Créée ──(fin de mois)──> Clôturée ──(validation)──> Validée
                                                      │
                                          (mise en paiement)
                                                      ▼
                                             Mise en paiement
                                                      │
                                            (paiement effectué)
                                                      ▼
                                                 Remboursée
```

Une ligne hors forfait refusée par le comptable n'est pas supprimée : elle est
marquée `refuse`, exclue du montant remboursé, puis reportée sur la fiche du
mois suivant lorsque le visiteur l'ouvre. Le report est idempotent grâce au
drapeau `reporte`.

## Rôles

Trois profils, trois tables, un formulaire de connexion commun (provider chaîné).

- **Administrateur** (`/admin` et `/comptable`) — crée et gère les comptes, et traite les fiches au même titre qu'un comptable.
- **Comptable** (`/comptable`) — valide les fiches, les met en paiement, les imprime. Aucun accès à la gestion des comptes.
- **Visiteur** (`/visiteur`) — saisit ses frais et ses trajets, consulte ses fiches passées.

La hiérarchie est volontairement asymétrique : `ROLE_ADMIN` hérite de
`ROLE_COMPTABLE`, jamais l'inverse. La gestion des comptes reste le seul
domaine réservé.

Une fiche validée porte son validateur, qu'il s'agisse d'un comptable
(`comptable_id`) ou d'un administrateur (`administrateur_id`) ; la contrainte
`validation_coherente` exige l'un ou l'autre.

## Installation

```bash
composer install
```

Renseigner la chaîne de connexion dans `.env.local` (non versionné) :

```
DATABASE_URL="postgresql://UTILISATEUR:MOTDEPASSE@HOTE:5432/postgres?sslmode=require&charset=utf8"
```

Utiliser le port **5432** (session pooler) et non 6543 : le pooler en mode
transaction est incompatible avec les requêtes préparées de Doctrine.

```bash
php bin/console doctrine:migrations:migrate   # met le schéma à niveau
php bin/console app:init-comptes              # identifiants des comptes existants + administrateur
symfony server:start                          # démarre le serveur
```

## Commandes

| Commande | Rôle |
|---|---|
| `app:init-comptes` | Attribue login et mot de passe aux comptes sans identifiants, crée l'administrateur initial |
| `app:cloturer-fiches` | Clôture les fiches des mois révolus restées en saisie (`--simulation` pour un essai à blanc) |
| `app:jeu-de-donnees` | Génère des fiches de test réparties sur le cycle de vie (`--mois=N`, ou `--completer-trajets` pour rattraper les fiches sans trajet) |

## Choix techniques

**Schéma existant conservé.** La base Supabase préexistait avec ses contraintes
`CHECK` et ses clés étrangères. Les migrations sont purement additives : aucune
table ni colonne n'a été supprimée ou renommée.

| Migration | Apport |
|---|---|
| `Version20260923000001` | identifiants de connexion, tables `administrateur` et `justificatif`, drapeaux de refus et de report, statut à cinq états, `montant_valide` |
| `Version20260923000002` | identifiants rendus obligatoires et uniques |
| `Version20260923000003` | resynchronisation des séquences d'identité |
| `Version20260923000004` | table `trajet`, validation possible par un administrateur (`administrateur_id`, contrainte `validation_coherente`) |
| `Version20260923000005` | véhicule porté par la fiche (`fiche_de_frais.vehicule_id`), six lignes du barème |
| `Version20260930000001` | `visiteur.vehicule_id` rendu facultatif (`DROP NOT NULL`), colonne et valeurs conservées |

**`doctrine:schema:validate` signale une désynchronisation.** C'est attendu :
Doctrine voudrait renommer les index et les clés étrangères, et supprimer les
`DEFAULT` définis à la main. Ne pas lancer `doctrine:schema:update`, cela
dégraderait le schéma ; pour la même raison, une migration générée par
`make:migration` ou `doctrine:migrations:diff` doit être relue et débarrassée
de ces lignes avant d'être appliquée. Le mapping, lui, est validé.

**Introspection limitée.** `schema_filter` restreint Doctrine aux tables de
l'application : la base Supabase héberge aussi ses schémas internes (`auth`,
`storage`, `realtime`) dont certaines colonnes utilisent des types tableau que
Doctrine ne sait pas lire.

**Quantité forfaitaire nulle.** La table impose `CHECK (quantite > 0)`. Une
quantité remise à zéro supprime donc la ligne au lieu d'enregistrer un zéro.

**Codes de formulaire ASCII.** Les libellés de frais portent des accents ;
les employer comme noms de champs rendait la correspondance dépendante de
l'encodage du client. Les formulaires utilisent `NUI`, `REP`, `ETP`, `KM`.

**Justificatifs hors racine web.** Les fichiers sont écrits dans
`var/justificatifs/` sous un nom non devinable et servis par un contrôleur qui
vérifie les droits : ce sont des pièces comptables nominatives.
