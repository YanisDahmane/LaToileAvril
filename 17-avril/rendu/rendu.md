# Jeu du mots le plus long

> Le but du jeu :
> Vous aurez une liste de 20 lettres, vous devrez réussir à composer le mot le plus long que vous puissiez écrire.
> Attention chaque lettre ne pourra être utilisé qu'une seul fois !

## Etape 1 :

Réussir à créer une liste de 20 lettres aléatoirement en créent une méthode, vous devriez les stocker dans un tableau. Exemple de résultat lorsque j'appel ma méthode :
````
randomLetter(20) => ['a','b','n','b','k','l','m','o','h','i','a','b','n','b','k','l','m','o','h','i']
````

## Etape 2 :

Demander à notre utilisateur de proposer un mot et le stocker dans une variable, grâce à une méthode. Toute les lettres devrons automatiquement être mise en minuscule.

````
askWord() => "bonjour" // Bonjour est le mot donné par l'utilisateur
````

## Etape 3 :
Transformer notre mot donné par l'utilisateur en un tableau de lettre. Faite le avec une méthode

```
convertStringToArray(word) => ['b','o','n','j','o','u','r']
```
## Etape 4 :
Parcourir le tableau composé des lettres du mot donné par l'utilisateur. Et à chaque lettre vérifier qu'elle soit présente dans notre tableau de lettre, puis la retirer.
Si jamais la lettre n'est pas présente l'utilisateur à perdu

## Etape 5 :
Si toute les lettres sont présente alors le mot est valide ! Il est venu le moment de compter les points !!!
Pour chaque consonne ça fait 10 points, et pour chaque voyelle 20 points !!!
```
countPoint(word) => 100 // 100 points pour le mots bonjour
```
A vous de réfléchir à comment faire la méthode countPoint 😃

## Etape 6 :
Félicitation si vous arrivez jusqu'ici 🎉🎉
A vous d'ajouter des options en plus libre à votre imagination 💭
Par exemple vous pouvez ajouter un compteur de temps
