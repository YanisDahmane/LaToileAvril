// Créer une variable qui contiendra un nombre aleatoire entre 1 et 100
const aleatoire = Math.random() * (101 - 1) + 1 // 4.543425454342524352453
const aleatoireRounded = Math.round(aleatoire) // 5
console.log("aleatoire", aleatoire)
console.log("aleatoireRounded", aleatoireRounded)

// Créer une variable qui contiendra un tableau vide
let tries = []

// Demander à l'utilisateur de donner un nombre
let choice = 0
console.log("choice", choice)

// Ajouter la réponse de l'utilisateur dans notre tableau vide
// console.log(tries)

console.log("tries", tries)

// Tester si le nombre donnée par l'utilisateur et le même que le nombre aleatoire
// if (choice == aleatoireRounded) {
//   console.log("Bravo vous avez gagné")
// } else {
//   if (choice < aleatoireRounded) {
//     console.log("Trop petit")
//   } else {
//     console.log("Trop grand")
//   }
// }


//  Si vrai
//    Mettre dans une variable le nombre de coups jouer
//    Afficher félicitation vous avez gagné en X coups
//  Si le nombre est différent
//    Savoir si le nombre est plus petit
//      Afficher à l'utilisateur le nombre est plus petit
//    Savoir si le nombre est plus grand
//      Afficher à l'utilisateur le nombre est plus grand

// Réinviter l'utilisateur à jouer

// while => tant que
// choice != aleatoireRounded => c'est l'inverse que choice == aleatoireRounded
while (choice != aleatoireRounded) {
  if (tries.length == 10) {
    console.log("Tu es trop nul")
    break;
  }
  // Tant qu'il n'a pas gagner
  choice = prompt("Saisir un nombre")

  if (choice < aleatoireRounded) {
    console.log("Trop petit")
  }
  if (choice > aleatoireRounded) {
    console.log("Trop grand")
  }
  tries.push(choice)
  console.log(tries.length)
}

if (choice == aleatoireRounded) {
  console.log("Bravo vous avez gagné en " + tries.length + " coups")
}
