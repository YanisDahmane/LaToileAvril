console.log("ok")
const aleatoire = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(aleatoire(5, 8))
