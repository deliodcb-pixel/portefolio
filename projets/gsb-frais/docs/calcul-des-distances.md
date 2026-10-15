# Le calcul automatique des distances

Le visiteur ne tape pas de kilomètres : il donne deux villes, et l'application
trouve elle-même la distance par la route. Ce document explique comment, en
détail d'abord, puis en version simple.

---

## 1. Explication détaillée

### Les fichiers concernés

- **templates/visiteur/fiche.html.twig** → le formulaire « Ajouter un trajet ».
- **src/Controller/VisiteurController.php** → reçoit le formulaire (méthode `ajouterTrajet()`).
- **src/Service/CalculateurDistance.php** → fait le calcul.
- **src/Service/Lieu.php** → une ville avec ses coordonnées GPS.
- **src/Service/ResultatDistance.php** → le résultat du calcul.
- **src/Service/VilleIntrouvableException.php** → l'erreur « ville introuvable ».
- **src/Entity/Trajet.php** → le trajet enregistré en base.
- **src/Service/GestionnaireFiche.php** → reporte les kilomètres sur la fiche (`synchroniserKilometrage()`).

### Étape 1 : le visiteur remplit le formulaire

Sur sa fiche du mois, le visiteur saisit une date, une ville de départ, une
ville d'arrivée, et coche « aller-retour » si besoin. Puis il clique sur
« Calculer et ajouter ».

Le formulaire n'apparaît que si la fiche est modifiable et qu'un véhicule est
déclaré : sans véhicule, il n'y a pas de tarif kilométrique.

### Étape 2 : le contrôleur vérifie la demande

`VisiteurController::ajouterTrajet()` reçoit le formulaire. Avant tout calcul,
il vérifie :

1. que la fiche appartient bien au visiteur connecté ;
2. qu'elle est encore en saisie ;
3. que le jeton de sécurité du formulaire (CSRF) est valide ;
4. qu'un véhicule est déclaré ;
5. que la date est valide.

Il appelle ensuite le calculateur :

```php
$resultat = $calculateur->calculer($depart, $arrivee);
```

### Étape 3 : transformer chaque ville en coordonnées GPS (géocodage)

Méthode `geocoder()` de `CalculateurDistance`.

Un ordinateur ne sait pas où se trouve « Lyon ». Il faut d'abord convertir le
nom en coordonnées (latitude, longitude). Pour ça, l'application interroge la
**Base Adresse Nationale**, un service public gratuit de l'État, sans clé
d'accès :

```
https://api-adresse.data.gouv.fr/search/?q=Lyon&type=municipality&limit=1
```

- `q=Lyon` : la ville cherchée ;
- `type=municipality` : on cherche une commune, pas une rue ;
- `limit=1` : on ne garde que le meilleur résultat.

Le service répond en JSON. L'application en garde le nom officiel de la
commune, son code postal, sa latitude et sa longitude, et les range dans un
objet `Lieu`.

Si le service ne trouve rien, le calculateur lève une
`VilleIntrouvableException`. Le contrôleur la transforme en message pour le
visiteur : « Commune « Lyonn » introuvable. Vérifiez l'orthographe de la
commune. » Aucun trajet n'est alors enregistré.

Le géocodage est fait deux fois : une pour la ville de départ, une pour la
ville d'arrivée.

### Étape 4 : demander la distance par la route (routage)

Méthodes `distanceRoutiere()` et `interrogerRoutage()`.

Avec les deux points GPS, l'application interroge **OSRM** (Open Source
Routing Machine), un calculateur d'itinéraire gratuit basé sur les cartes
OpenStreetMap :

```
https://router.project-osrm.org/route/v1/driving/{longitude départ},{latitude départ};{longitude arrivée},{latitude arrivée}
```

- `driving` : un itinéraire en voiture ;
- la réponse contient la longueur du meilleur itinéraire, **en mètres**.

L'application divise par 1 000 pour obtenir des kilomètres, arrondis à deux
décimales. Exemple réel : Paris → Lyon = **465,42 km**.

### Étape 5 : le plan B si OSRM ne répond pas (vol d'oiseau)

Méthode `orthodromie()`.

OSRM est un service gratuit : il peut être lent ou en panne. L'application
attend 12 secondes au maximum. Si elle n'a pas de réponse valable, elle ne
bloque pas le visiteur : elle calcule la distance **à vol d'oiseau** entre les
deux points GPS, avec la **formule de haversine**, qui tient compte de la forme
ronde de la Terre (rayon de 6 371 km) :

```
h = sin²(Δlatitude / 2) + cos(latitude1) × cos(latitude2) × sin²(Δlongitude / 2)
distance = 2 × 6 371 × arcsin(√h)
```

Une route n'est jamais en ligne droite. Le résultat est donc multiplié par
**1,3** (constante `COEFFICIENT_ROUTIER`) pour approcher la distance réelle.

Le visiteur est prévenu par un message orange : « Le service de calcul
d'itinéraire était indisponible : la distance retenue est une estimation à vol
d'oiseau majorée. »

### Étape 6 : le cache, pour ne pas recalculer

Les visiteurs refont souvent les mêmes trajets. Chaque résultat (coordonnées
d'une ville, distance entre deux points) est donc gardé dans le **cache** de
Symfony, dans le dossier `var/cache/`. La deuxième fois qu'on demande
Paris → Lyon, la réponse est immédiate et aucun service extérieur n'est
interrogé.

### Étape 7 : enregistrer le trajet

De retour dans le contrôleur, un objet `Trajet` est créé et enregistré en base
avec :

- les noms officiels des deux communes ;
- leurs coordonnées GPS ;
- la distance d'un aller simple ;
- la case aller-retour ;
- la date ;
- la **source** du calcul : `osrm` (route réelle) ou `haversine` (vol d'oiseau).

Les coordonnées et la source sont gardées pour pouvoir justifier une distance
si elle est contestée. Le comptable voit la source sur son écran de validation,
et elle figure aussi dans le détail affiché au visiteur.

Pour un aller-retour, `Trajet::getDistanceTotale()` double la distance :
Paris → Lyon aller-retour = 465,42 × 2 = **930,84 km**.

### Étape 8 : reporter les kilomètres sur la fiche

`GestionnaireFiche::synchroniserKilometrage()` :

1. additionne la distance totale de **tous** les trajets de la fiche ;
2. arrondit au kilomètre près ;
3. écrit ce nombre dans la ligne « Frais kilométrique » de la fiche ;
4. y applique le tarif du véhicule déclaré (par exemple 0,65 € par km pour
   un 7 CV diesel).

Si la fiche n'a plus aucun trajet, la ligne kilométrique est supprimée : la base
refuse une quantité égale à zéro.

Le visiteur voit enfin un message de confirmation, par exemple : « Trajet
Paris → Lyon (aller-retour) enregistré : 930,84 km (distance routière
calculée). Kilométrage de la fiche porté à 931 km. »

### Étape 9 : la correction manuelle reste possible

La quantité kilométrique reste modifiable à la main dans le tableau des frais
forfaitisés. En revanche, le prochain ajout ou la prochaine suppression de
trajet remettra la somme calculée. Tant que les deux ne correspondent pas,
l'écran le signale. Le comptable peut lui aussi corriger la quantité lors de la
validation.

---

## 2. En version simple

Le visiteur écrit deux villes, par exemple Paris et Lyon. L'application demande
d'abord à un service de l'État où se trouvent ces deux villes sur la carte : on
obtient leurs coordonnées GPS. Elle demande ensuite à un calculateur
d'itinéraire, comme un GPS de voiture, quelle est la longueur de la route entre
ces deux points : 465 km. Si ce calculateur ne répond pas, l'application
mesure la distance en ligne droite et ajoute 30 %, parce qu'une route fait
toujours des détours.

La distance est enregistrée avec le trajet, doublée s'il s'agit d'un
aller-retour. L'application additionne ensuite tous les trajets du mois et
multiplie le total par le tarif du véhicule du visiteur : c'est le montant de
ses frais kilométriques. Le visiteur n'a jamais à taper lui-même un nombre de
kilomètres, ce qui évite les erreurs et les fraudes.
