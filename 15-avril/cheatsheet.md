# CheatSheet JS

## Différents types de variable

 - String => Chaine de text = `"bonjour"`
 - Number => Un nombre = `23`
 - Boolean => Vrai / Faux = `true / false`
 - Object => Tableau ou Array = `[ "yanis", "sandy" ]`
 - Null => Rien = `null`
 - Undefined => Non initialisé = `const variable`

## Const / Let

### Const
C'est une variable qu'on ne pourra jamais modifier
`const nomDeLaVariable = valeur`

### Let
C'est une variable qu'on pourra modifier
`let nomDeLaVariable = valeur`
et pour la modifier
`nomDeLaVariable = nouvelleValeur`

## Condition

### Condition simple
```
if (condition) {
	code à executer si la condition est vrai
}
```

### Condition et si faux
```
if (condition) {
	code à executer si la condition est vrai
} else {
	code à executer si la condition est fausse
}
```

### Condition et si faux si

```
if (condition 1) {
	code à executer si la condition 1 est vrai
} else if (condition 2) {
	code à executer si la condition 2 est vrai
} else {
	code à executer si les conditions sont fausses
}
```

## Affichage console

### Afficher une phrase
`console.log("La phrase") => // La phrase`
### Afficher une valeur simplement
```
const teacher = "Yanis"
console.log("Le prof est", teacher) => // Le prof est Yanis
```
### Afficher avec une interpolation
```
const teacher = "Yanis"
console.log(`C'est ${teacher} qui nous a fait cours`) => //  C'est Yanis qui nous a fait cours
```
### Afficher avec concaténation
```
const teacher = "Yanis"
console.log("C'est " + teacher + " qui nous a fait cours") => //  C'est Yanis qui nous a fait cours
```
# Exemple :

## Convertisseur °C °F

 1. Créer une variable degresCelsius
 2. Tester si la température est négative (<0)
	 3. Si négative afficher il fait froid
	 4. Si non afficher la conversion en °F

```
const degresCelsius = 10
if (degresCelsius < 0) {
	console.log("Il fait froid")
} else {
	const degresFah = degresCelsius x 9/5 + 32
	console.log(`Il fait ${degresFah}°F`) => // Il fait 50°F
	console.log("Il fait " + degresFah + "°F") => Il fait 50°F
}
```
