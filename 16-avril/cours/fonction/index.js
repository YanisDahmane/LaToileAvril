// const normalize = (string) => {
//   const firstLetter = string[0].toUpperCase()
//   const otherLetter = string.substring(1).toLowerCase()
//   return `${firstLetter}${otherLetter}`
// }

// const fullName = (prenom, nom) => {
//   return `${normalize(prenom)} ${normalize(nom)}`
// }

// // const addition = (a, b) => {
// //   return a + b
// // }

// // console.log(addition(2, 3))

// console.log(fullName("yanis", "dahmane"))

// console.log(fullName("sandy", "blue"))

// console.log(fullName("joE", "dOE"))

// console.log(firstLetter)

// // console.log(normalize("yAniS"))

// const addition = (a, b) => {
//   return a + b
// }
// console.log(addition(2, 5)) // => 7

const normalize = (string) => {
  return `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`
}

const fullName = (prenom, nom) => {
  return `${normalize(prenom)} ${normalize(nom)}`
}

console.log(fullName("yaNis", "dahmane")) // => "yanis dahmane"
console.log(fullName("sandy", "blUE"))


console.log(estPaire(42)) // => true
