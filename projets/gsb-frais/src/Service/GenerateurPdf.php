<?php

namespace App\Service;

use App\Entity\FicheDeFrais;
use Dompdf\Dompdf;
use Dompdf\Options;
use Twig\Environment;

/**
 * Édition des fiches de remboursement au format de l'annexe 1, soit à
 * l'unité, soit en lot pour toutes les fiches clôturées d'un mois.
 */
class GenerateurPdf
{
    public function __construct(private readonly Environment $twig)
    {
    }

    public function ficheIndividuelle(FicheDeFrais $fiche): string
    {
        return $this->rendre('pdf/fiche.html.twig', ['fiches' => [$fiche]]);
    }

    /**
     * @param FicheDeFrais[] $fiches
     */
    public function lot(array $fiches): string
    {
        return $this->rendre('pdf/fiche.html.twig', ['fiches' => $fiches]);
    }

    public function nomFichier(FicheDeFrais $fiche): string
    {
        return sprintf(
            'fiche-frais-%s-%04d%02d.pdf',
            $this->normaliserNom($fiche->getVisiteur()?->getNom() ?? 'visiteur'),
            $fiche->getAnnee(),
            $fiche->getMois()
        );
    }

    /** Réduit un nom propre à une forme utilisable dans un nom de fichier. */
    public function normaliserNom(string $valeur): string
    {
        $sansAccent = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $valeur) ?: $valeur;

        return strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', $sansAccent) ?? 'fiche');
    }

    /**
     * @param array<string, mixed> $contexte
     */
    private function rendre(string $gabarit, array $contexte): string
    {
        $options = new Options();
        $options->set('defaultFont', 'DejaVu Sans');
        $options->set('isRemoteEnabled', false);

        $dompdf = new Dompdf($options);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->loadHtml($this->twig->render($gabarit, $contexte), 'UTF-8');
        $dompdf->render();

        return (string) $dompdf->output();
    }
}
