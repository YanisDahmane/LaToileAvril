console.log("Bonjour")

const form = document.querySelector("#formulaire")
console.log(form)


form.addEventListener("submit", (event) => {
  event.preventDefault()
  const titre = document.querySelector("#titre")
  const description = document.querySelector("#description")
  console.log(titre.value)
  console.log(description.value)
  console.log("Click")

  const card = document.createElement("li")
  const h2 = document.createElement("h2")
  h2.innerText = titre.value
  const p = document.createElement("p")
  p.innerText = description.value

  titre.value = ""
  description.value = ""

  card.insertAdjacentElement("beforeend", h2)
  card.insertAdjacentElement("beforeend", p)

  const list = document.querySelector("#cards")
  list.insertAdjacentElement("beforeend", card)
})
