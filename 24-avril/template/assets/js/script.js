console.log("Bonjour 😀")
const form = document.querySelector("#formulaire")
console.log(form)
const namedom = document.querySelector("#name")
console.log(namedom)
const descriptiondom = document.querySelector("#description")
console.log(descriptiondom)
const imagedom = document.querySelector("#image")
console.log(imagedom)
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const name = namedom.value
  console.log("name", name)
  const description = descriptiondom.value
  console.log("description", description)
  const image = imagedom.value
  console.log("image", image)
})
