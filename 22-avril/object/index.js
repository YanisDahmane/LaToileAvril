// let personne = {
//   nom: "Jean",
//   age: 30,
//   ville: "Paris"
// };

// personne.ville = "Lyon"

// console.log(personne.ville)

// let table = {
//   pieds: 4,
//   width: 180,
//   length: 360
// }

// console.log(table.width)

// const teachers = [
//   {
//     prenom: "Yanis",
//     age: 22,
//     pc: "mac",
//     sexe: "garçon",
//     adresse: {
//       ville: "Lyon",
//       rue: "Quai Joseph"
//     }
//   },
//   {
//     prenom: "Sandy",
//     age: 23,
//     pc: "mac",
//     adresse: {
//       ville: "Lyon",
//       rue: "Rue des capucins"
//     }
//   }
// ]

// teachers.forEach(teacher => {
//   // teacher = {
//   //   prenom: "Yanis",
//   //   age: 22,
//   //   pc: "mac"
//   // }

//   // teacher.age10Years = teacher.age + 10

//   // console.log(`Bonjour ${teacher.prenom}, tu as ${teacher.age}, et tu travail sur un ${teacher.pc}`)
//   // console.log(`Dans 10 ans tu auras ${teacher.age10Years}`)

//   // console.log(`Tu habites la rue de : ${teacher.adresse.rue}`)

//   console.log(Object.entries(teacher))
//   // if ("sexe" in teacher) {
//   //   console.log(`${teacher.prenom} a la propriété sexe`)
//   // } else {
//   //   console.log(`${teacher.prenom} n'a pas la propriété sexe`)
//   // }
// })

// console.log(teachers)


// const Personne = (prenom, age) => {
//   const prenomArray = prenom.split("")
//   const firstLetter = prenomArray[0].toUpperCase()
//   prenomArray.shift()
//   const otherLetter = prenomArray.join("").toLowerCase()
//   return { prenom: `${firstLetter}${otherLetter}`, age: age }
// }

// console.log(Personne("bOb", 42))


const yanis = {
  prenom: "Yanis",
  age: 22,
  pc: "mac",
  sexe: "garçon",
  adresse: {
    ville: "Lyon",
    rue: "Quai Joseph"
  }
}

for (let propriete in yanis) {
  console.log(propriete)
  console.log(yanis[propriete])
}
