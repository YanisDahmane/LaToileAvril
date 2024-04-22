// Je crée une variable form qui contient l'élément du DOM qui a l'id form
const form = document.querySelector("#form")
// Je console.log form pour vérifier que j'ai bien récupéré l'élément du DOM
console.log(form)

form.addEventListener("submit", (event) => {
  // J'empêche le comportement par défaut du formulaire
  event.preventDefault()
  console.log("Formulaire soumis !")

  // Je récupère la valeur de l'input qui a l'id nom
  const nomDOM = document.querySelector("#nom")
  // Je récupère la valeur de l'input qui a l'id nom
  const nom = nomDOM.value

  // // Je récupère la valeur de l'input qui a l'id image
  const imageDOM = document.querySelector("#image")
  // // Je récupère la valeur de l'input qui a l'id image
  // const imageURL = imageDOM.value

  const imageURL = `http://loremflickr.com/300/300/${imageDOM.value}`
  // Je crée une div qui contiendra le nom et l'image de la carte

  const card = document.createElement("div")
  // card = <div></div>
  // J'atoute la classe card à l'élément card
  card.classList.add("card")
  // card = <div class="card"></div>
  const img = document.createElement("img")
  // img = <img></img>
  // Je modifie l'attribut src de l'élément img pour mettre l'image que l'utilisateur a rentré
  img.setAttribute("src", imageURL)
  // img = <img src="url"></img>

  // Je crée un h2 qui contiendra le nom de la carte
  const h2 = document.createElement("h2")
  // h2 = <h2></h2>
  // Je modifie le texte de l'élément h2 pour mettre le nom que l'utilisateur a rentré
  h2.innerText = nom
  // h2 = <h2>nom</h2>

  // J'ajoute l'élément h2 à l'élément card
  card.appendChild(h2)
  // card = <div><h2>nom</h2></div>
  // J'ajoute l'élément img à l'élément card
  card.appendChild(img)
  // card =
  // <div class="card">
  //   <h2>nom</h2>
  //   <img src="url"></img>
  // </div>

  // // Je récupère l'ancien élément card
  // const oldCard = document.querySelector(".card")
  // // Si oldCard existe
  // if (oldCard) {
  //   // Je le supprime
  //   oldCard.remove()
  // }

  const cards = document.querySelector(".cards")
  // J'ajoute l'élément card à l'élément cards
  cards.appendChild(card)
})
