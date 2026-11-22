Les numéros de ligne correspondent au projet fourni.

1/ La première anomalie est qu'on ne peut pas ajouter de nouveau livre avec le compte docu, cela nous renvoie sur une page d'erreur 404 (dans var/log/dev.log on a "App\Entity\Livre" object not found).  
cause : dans src/Controller/LivreController.php ligne 27, la route livre_show (/livres/{id}) est déclarée avant livre_new (/livres/nouveau) et {id} accepte n'importe quel texte, donc Symfony prend "nouveau" pour l'id d'un livre. On le voit avec debug:router où livre_show est avant livre_new.  
correction : j'ai ajouté requirements: ['id' => '\d+'] sur livre_show pour que {id} n'accepte que des chiffres.

2/ La seconde est que peu importe le compte qu'on a, quand on clique sur le septième livre soit "Voyage au centre de la Terre", on a un pop-up qui nous force à cliquer sur OK pour aller sur la page, ce n'est donc pas automatique, pareillement lorsqu'on clique sur modifier et qu'on valide.  
cause : c'est une faille XSS. Dans templates/livre/show.html.twig ligne 15, la description est affichée avec |raw, donc Twig n'échappe pas le HTML et le script alert(1) qui est dans la description de ce livre est exécuté par le navigateur. Quelqu'un de malveillant pourrait y mettre un script qui vole la session des utilisateurs.  
correction : j'ai enlevé le |raw, maintenant le script s'affiche comme du texte.

3/ La troisième est qu'une fois la page d'ajout réparée, quand on ajoute un livre on a bien le message "Le livre a été ajouté au catalogue" mais le livre n'apparaît pas dans le catalogue.  
cause : dans src/Controller/LivreController.php ligne 43, il y a $em->persist($livre) mais pas de $em->flush(), donc rien n'est enregistré en base.  
correction : j'ai ajouté $em->flush() après le persist().

4/ La quatrième est que quand on fait une recherche avec une apostrophe (par exemple l') on a une erreur 500.  
cause : c'est une injection. Dans src/Repository/LivreRepository.php ligne 32, le texte de la recherche est collé directement dans la requête DQL, donc l'utilisateur peut modifier la requête.  
correction : j'ai utilisé un paramètre : ->andWhere('l.titre LIKE :q')->setParameter('q', '%' . $q . '%').

5/ La cinquième est qu'avec le compte élève on peut aller sur /livres/1/modifier et modifier un livre, alors que c'est réservé aux documentalistes.  
cause : dans config/packages/security.yaml lignes 32-33, la règle ^/livres (ROLE_USER) est avant la règle des documentalistes. Symfony applique seulement la première règle qui correspond, donc celle des documentalistes n'est jamais utilisée.  
correction : j'ai mis la règle des documentalistes avant ^/livres. Maintenant l'élève a une erreur 403 sur l'ajout, la modification et la suppression.

