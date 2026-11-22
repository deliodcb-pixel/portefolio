/*
 * Un formulaire n'est envoyé qu'une fois. Chaque requête vers la base distante
 * prend une à deux secondes : un double clic renvoyait le formulaire, d'où des
 * trajets ajoutés en double, ou la suppression d'un trajet déjà supprimé qui
 * finissait en erreur 404.
 */
document.addEventListener('submit', (evenement) => {
    const formulaire = evenement.target;

    // Confirmation refusée, recherche (GET) ou édition ouverte dans un nouvel
    // onglet : il n'y a rien à protéger.
    if (evenement.defaultPrevented
        || (formulaire.getAttribute('method') || 'get').toLowerCase() !== 'post'
        || formulaire.getAttribute('target') === '_blank') {
        return;
    }

    if (formulaire.dataset.envoye) {
        evenement.preventDefault();

        return;
    }

    formulaire.dataset.envoye = '1';
    formulaire.querySelectorAll('button').forEach((bouton) => { bouton.disabled = true; });
});

// Page restituée par le bouton « Précédent » : ses formulaires redeviennent
// utilisables. L'événement accompagne aussi le chargement initial, qu'il faut
// ignorer, sans quoi un envoi déjà parti serait débloqué.
window.addEventListener('pageshow', (evenement) => {
    if (!evenement.persisted) {
        return;
    }

    document.querySelectorAll('form[data-envoye]').forEach((formulaire) => {
        delete formulaire.dataset.envoye;
        formulaire.querySelectorAll('button').forEach((bouton) => { bouton.disabled = false; });
    });
});
