console.log("Bonjour")
const teacher = "Yanis"
const fruits = ["pomme", "poire", "pêche"]
console.log(fruits)
console.log("poire : ", fruits[1])

const fraise = "fraise"
// Ajouter à la fin du tableau
fruits.push(fraise)
console.log(fruits)
const banane = "banane"
// Ajouter au début du tableau
fruits.unshift(banane)
console.log(fruits)
// Supprimer le premier élément du tableau
fruits.shift()
console.log(fruits)
// Supprimer à la fin élément du tableau
fruits.pop()
console.log(fruits)


// Le fruits est : pomme
// Le fruits est : banane

// Parcourir tout les éléments d'un tableau
fruits.forEach(fruit => {
  console.log(fruit.toUpperCase())
})

// IndexOf

const indexPeche = fruits.indexOf("pêche")
console.log(indexPeche)

const indexNothing = fruits.indexOf("nothing")
console.log(indexNothing)

// Short & Filter

let chiffres = [10, 5, 8, 2, 1];

console.log(chiffres.sort())

const chiffrePaire = chiffres.filter(chiffre => {
  if (chiffre % 2 === 0) {
    return chiffre
  }
})

console.log(chiffrePaire)
