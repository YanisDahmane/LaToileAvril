// je mets dans une variable body le body de mon document
const body = document.querySelector("body")
console.log(body)
// Je mets une ecouteur d'evenement sur le body
body.addEventListener("keyup", (event) => {
  console.log(event.key)
  // je mets dans une variable key la touche presser
  // event.key => la touche presser
  const key = event.key
  // Je teste si la touche presser est "a"
  // si c'est le cas j'appelle la fonction go pour la voiture 1
  if (key == "a") {
    // J'appelle la fonction go avec le parametre 1
    go(1)
  }
  if (key == "p") {
    // J'appelle la fonction go avec le parametre 2
    go(2)
  }
  if (key == "z") {
    // J'appelle la fonction go avec le parametre 3
    go(3)
  }
})

// go(2)

// Je créé une fonction go qui prend en parametre Idplayer
const go = (Idplayer) => {
  // Je mets dans une variable player la piste du joueur
  const player = document.querySelector(`#player-${Idplayer}`)
  // Je mets dans une variable car la voiture du joueur en fonction de la piste
  const car = player.querySelector(".active")
  // Je mets dans une variable nextCase la prochaine case
  const nextCase = car.nextElementSibling
  // Je teste si la prochaine case est la derniere case
  // grâce à la class end
  const isLastCase = nextCase.classList.contains("end")

  // Si la prochaine case n'est pas la derniere case
  // !false => true
  // !true => false
  if (!isLastCase) {
    // Je mets la prochaine case avec la class active
    nextCase.classList.add("active")
    // Je retire la class active de la voiture sur la case actuelle
    car.classList.remove("active")
  } else {
    // Si la prochaine case est la derniere case
    // j'affiche une alerte avec le joueur qui a gagné
    alert(`Player ${Idplayer} Win`)
  }
}
