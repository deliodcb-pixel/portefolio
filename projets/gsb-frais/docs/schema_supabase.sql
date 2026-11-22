-- ============================================================
-- GSB Frais - schéma PostgreSQL (Supabase)
-- Porté depuis le MySQL d'origine + extensions demandées par le TP :
--   * puissance fiscale véhicule (tarif km indexé)
--   * upload de justificatifs
--   * authentification comptable
--   * état "Mise en paiement" (MP) du diagramme d'états
-- ============================================================

DROP TABLE IF EXISTS justificatif CASCADE;
DROP TABLE IF EXISTS lignefraishorsforfait CASCADE;
DROP TABLE IF EXISTS lignefraisforfait CASCADE;
DROP TABLE IF EXISTS fichefrais CASCADE;
DROP TABLE IF EXISTS fraisforfait CASCADE;
DROP TABLE IF EXISTS visiteur CASCADE;
DROP TABLE IF EXISTS comptable CASCADE;
DROP TABLE IF EXISTS vehicule CASCADE;
DROP TABLE IF EXISTS etat CASCADE;

-- ------------------------------------------------------------
-- Référentiels
-- ------------------------------------------------------------

CREATE TABLE etat (
    id      CHAR(2)     PRIMARY KEY,
    libelle VARCHAR(40) NOT NULL
);

-- Cycle de vie du diagramme d'états de l'annexe :
-- Créée -> Clôturée -> Validée -> Mise en paiement -> Remboursée
INSERT INTO etat (id, libelle) VALUES
    ('CR', 'Fiche créée, saisie en cours'),
    ('CL', 'Saisie clôturée'),
    ('VA', 'Validée'),
    ('MP', 'Mise en paiement'),
    ('RB', 'Remboursée');

-- Barème kilométrique indexé sur la puissance fiscale (TP §"Prise en compte
-- de la puissance fiscale d'un véhicule"). Remplace le forfait unique 0,62 €/km.
CREATE TABLE vehicule (
    id        VARCHAR(10)   PRIMARY KEY,
    libelle   VARCHAR(50)   NOT NULL,
    carburant VARCHAR(10)   NOT NULL,
    tarif_km  NUMERIC(4, 2) NOT NULL
);

INSERT INTO vehicule (id, libelle, carburant, tarif_km) VALUES
    ('4CVD',   'Véhicule 4 CV Diesel',        'Diesel',  0.52),
    ('5-6CVD', 'Véhicule 5/6 CV Diesel',      'Diesel',  0.58),
    ('7CVD',   'Véhicule 7 CV et + Diesel',   'Diesel',  0.65),
    ('4CVE',   'Véhicule 4 CV Essence',       'Essence', 0.62),
    ('5-6CVE', 'Véhicule 5/6 CV Essence',     'Essence', 0.67),
    ('7CVE',   'Véhicule 7 CV et + Essence',  'Essence', 0.72);

-- Frais forfaitisés. Le montant de KM sert de valeur de repli quand le
-- visiteur n'a pas de véhicule déclaré ; sinon vehicule.tarif_km prime.
CREATE TABLE fraisforfait (
    id      CHAR(3)       PRIMARY KEY,
    libelle VARCHAR(30)   NOT NULL,
    montant NUMERIC(6, 2) NOT NULL
);

INSERT INTO fraisforfait (id, libelle, montant) VALUES
    ('ETP', 'Forfait Étape',      110.00),
    ('KM',  'Frais Kilométrique',   0.62),
    ('NUI', 'Nuitée Hôtel',        80.00),
    ('REP', 'Repas Restaurant',    25.00);

-- ------------------------------------------------------------
-- Acteurs
-- ------------------------------------------------------------

CREATE TABLE visiteur (
    id            CHAR(4)     PRIMARY KEY,
    nom           VARCHAR(30) NOT NULL,
    prenom        VARCHAR(30) NOT NULL,
    login         VARCHAR(20) NOT NULL UNIQUE,
    mdp           VARCHAR(255) NOT NULL,
    adresse       VARCHAR(30),
    cp            CHAR(5),
    ville         VARCHAR(30),
    date_embauche DATE,
    id_vehicule   VARCHAR(10) REFERENCES vehicule (id) ON DELETE SET NULL
);

-- Le TP demande que le comptable puisse s'authentifier : table absente du
-- schéma d'origine, ajoutée ici.
CREATE TABLE comptable (
    id     CHAR(4)      PRIMARY KEY,
    nom    VARCHAR(30)  NOT NULL,
    prenom VARCHAR(30)  NOT NULL,
    login  VARCHAR(20)  NOT NULL UNIQUE,
    mdp    VARCHAR(255) NOT NULL
);

-- ------------------------------------------------------------
-- Fiches de frais
-- ------------------------------------------------------------

CREATE TABLE fichefrais (
    id_visiteur      CHAR(4)       NOT NULL REFERENCES visiteur (id) ON DELETE CASCADE,
    mois             CHAR(6)       NOT NULL,            -- aaaamm
    nb_justificatifs INTEGER       NOT NULL DEFAULT 0,
    montant_valide   NUMERIC(10, 2) NOT NULL DEFAULT 0,
    date_modif       DATE          NOT NULL DEFAULT CURRENT_DATE,
    id_etat          CHAR(2)       NOT NULL DEFAULT 'CR' REFERENCES etat (id),
    PRIMARY KEY (id_visiteur, mois)
);

CREATE TABLE lignefraisforfait (
    id_visiteur      CHAR(4) NOT NULL,
    mois             CHAR(6) NOT NULL,
    id_frais_forfait CHAR(3) NOT NULL REFERENCES fraisforfait (id),
    quantite         INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (id_visiteur, mois, id_frais_forfait),
    FOREIGN KEY (id_visiteur, mois) REFERENCES fichefrais (id_visiteur, mois) ON DELETE CASCADE
);

CREATE TABLE lignefraishorsforfait (
    id          SERIAL        PRIMARY KEY,
    id_visiteur CHAR(4)       NOT NULL,
    mois        CHAR(6)       NOT NULL,
    libelle     VARCHAR(100)  NOT NULL,
    date        DATE          NOT NULL,
    montant     NUMERIC(10, 2) NOT NULL,
    -- Validation comptable : une ligne refusée n'est pas supprimée tout de
    -- suite, elle est marquée puis reportée sur le mois suivant (TP : "les
    -- éléments reçus après le 10 sont basculés sur la fiche du mois suivant").
    refuse      BOOLEAN       NOT NULL DEFAULT FALSE,
    reporte     BOOLEAN       NOT NULL DEFAULT FALSE,
    FOREIGN KEY (id_visiteur, mois) REFERENCES fichefrais (id_visiteur, mois) ON DELETE CASCADE
);

CREATE INDEX idx_lfhf_visiteur_mois ON lignefraishorsforfait (id_visiteur, mois);

-- Justificatifs uploadés par le visiteur à l'appui d'un frais hors forfait.
CREATE TABLE justificatif (
    id            SERIAL       PRIMARY KEY,
    id_ligne      INTEGER      NOT NULL REFERENCES lignefraishorsforfait (id) ON DELETE CASCADE,
    nom_fichier   VARCHAR(255) NOT NULL,   -- nom sur disque / bucket
    nom_original  VARCHAR(255) NOT NULL,   -- nom fourni par l'utilisateur
    mime_type     VARCHAR(100) NOT NULL,
    taille        INTEGER      NOT NULL,
    date_upload   TIMESTAMP    NOT NULL DEFAULT now()
);

CREATE INDEX idx_justificatif_ligne ON justificatif (id_ligne);
