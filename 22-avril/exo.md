# Object et Array

Créer un tableau, qui contient des objects d'élève.

Un objet élève devra contenir les propriétés suivantes : `prenom, nom, age, adresse,  amis`

Deux des propriétés sont particulière `adresse` qui sera un objet qui contiendra les propriétés suivantes : `ville, rue, code postal`
Et amis qui sera un tableau qui contiendra lui même un objet ami qui aura les propriété : `prenom, nom, age, adresse`

A la fin il devrait être possible d'itérer sur le tableau students (tableau qui contiendra tout nos élèves et d'obtenir les phrases suivantes pour chaque élève :

````
Bonjour *prenom* *nom* tu es agé de *age* et tu habites la ville de *ville* à l'adresse *rue*, *code postal*. Tu es bien entouré puisque tu as *nombre d'amis*, dont voici la liste :
1 - *prenom* *nom* agé de *age* qui habite *ville*
2 - *prenom* *nom* agé de *age* qui habite *ville*
ect 
````
  
