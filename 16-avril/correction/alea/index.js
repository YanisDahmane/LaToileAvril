console.log("ok")
const aleatoire = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min
}

console.log(aleatoire(5, 8))
