<?php

namespace App\Service;

use App\Entity\Trajet;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * Calcule la distance entre deux villes.
 *
 * Deux services publics sont sollicités : la Base Adresse Nationale pour
 * convertir un nom de commune en coordonnées, puis OSRM pour obtenir la
 * distance routière. Si le routage est indisponible, on retombe sur
 * l'orthodromie majorée, en le signalant.
 */
class CalculateurDistance
{
    private const URL_GEOCODAGE = 'https://api-adresse.data.gouv.fr/search/';
    private const URL_ROUTAGE = 'https://router.project-osrm.org/route/v1/driving/';

    /**
     * Une route suit rarement la ligne droite. Coefficient appliqué à
     * l'orthodromie quand le service de routage ne répond pas.
     */
    private const COEFFICIENT_ROUTIER = 1.3;

    private const RAYON_TERRE_KM = 6371.0;

    public function __construct(
        private readonly HttpClientInterface $client,
        private readonly CacheInterface $cache,
        private readonly LoggerInterface $logger,
        #[Autowire('%kernel.debug%')]
        private readonly bool $debug = false,
    ) {
    }

    /**
     * @throws VilleIntrouvableException
     */
    public function calculer(string $depart, string $arrivee): ResultatDistance
    {
        $a = $this->geocoder($depart);
        $b = $this->geocoder($arrivee);

        $distance = $this->distanceRoutiere($a, $b);
        $source = Trajet::SOURCE_ROUTIERE;

        if (null === $distance) {
            $distance = round($this->orthodromie($a, $b) * self::COEFFICIENT_ROUTIER, 2);
            $source = Trajet::SOURCE_ORTHODROMIE;
        }

        return new ResultatDistance($a, $b, $distance, $source);
    }

    /**
     * Résout un nom de commune en coordonnées.
     *
     * @throws VilleIntrouvableException
     */
    public function geocoder(string $ville): Lieu
    {
        $ville = trim($ville);

        if ('' === $ville) {
            throw new VilleIntrouvableException('Le nom de la ville est vide.');
        }

        $cle = 'geocodage_'.md5(mb_strtolower($ville));

        $donnees = $this->cache->get($cle, function () use ($ville) {
            $reponse = $this->client->request('GET', self::URL_GEOCODAGE, [
                'query' => [
                    'q' => $ville,
                    'type' => 'municipality',
                    'limit' => 1,
                    'autocomplete' => 0,
                ],
                'timeout' => 10,
            ]);

            $corps = $reponse->toArray(false);
            $premier = $corps['features'][0] ?? null;

            if (null === $premier) {
                return null;
            }

            return [
                'lon' => (float) $premier['geometry']['coordinates'][0],
                'lat' => (float) $premier['geometry']['coordinates'][1],
                'label' => (string) ($premier['properties']['label'] ?? $ville),
                'codePostal' => (string) ($premier['properties']['postcode'] ?? ''),
            ];
        });

        if (null === $donnees) {
            throw new VilleIntrouvableException(sprintf('Commune « %s » introuvable.', $ville));
        }

        return new Lieu($donnees['label'], $donnees['lat'], $donnees['lon'], $donnees['codePostal']);
    }

    /** Distance routière en kilomètres, ou null si le service est indisponible. */
    private function distanceRoutiere(Lieu $a, Lieu $b): ?float
    {
        $trajet = sprintf('%F,%F;%F,%F', $a->lon, $a->lat, $b->lon, $b->lat);

        // Un même couple de villes revient souvent d'une fiche à l'autre.
        $cle = 'routage_'.md5($trajet);
        $connu = $this->cache->get($cle, fn () => $this->interrogerRoutage($trajet));

        return $connu;
    }

    private function interrogerRoutage(string $trajet): ?float
    {
        try {
            $reponse = $this->client->request('GET', self::URL_ROUTAGE.$trajet, [
                'query' => ['overview' => 'false'],
                'timeout' => 12,
            ]);

            $corps = $reponse->toArray(false);

            if ('Ok' !== ($corps['code'] ?? null) || !isset($corps['routes'][0]['distance'])) {
                return null;
            }

            return round(((float) $corps['routes'][0]['distance']) / 1000, 2);
        } catch (\Throwable $e) {
            $this->logger->warning('Routage indisponible, repli sur l orthodromie.', ['exception' => $e]);

            if ($this->debug) {
                // En développement, remonter la cause facilite le diagnostic.
                $this->logger->debug($e->getMessage());
            }

            return null;
        }
    }

    /** Distance à vol d'oiseau, formule de haversine. */
    public function orthodromie(Lieu $a, Lieu $b): float
    {
        $dLat = deg2rad($b->lat - $a->lat);
        $dLon = deg2rad($b->lon - $a->lon);

        $h = sin($dLat / 2) ** 2
            + cos(deg2rad($a->lat)) * cos(deg2rad($b->lat)) * sin($dLon / 2) ** 2;

        return round(2 * self::RAYON_TERRE_KM * asin(min(1.0, sqrt($h))), 2);
    }
}
