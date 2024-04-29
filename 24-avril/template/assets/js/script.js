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
  // console.log("name", name)
  // const description = descriptiondom.value
  // console.log("description", description)
  // const image = imagedom.value
  // console.log("image", image)

  const apiUrl = `https://www.myapifilms.com/imdb/idIMDB?title=${name}&token=254c15ce-e74a-4bfa-85ea-25dfd3fa8fa5`

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.data.movies[0])
      const movie = data.data.movies[0]
      const imageUrl = movie.urlPoster
      const description = movie.simplePlot

      const card = `
      <div class="card">
        <img
          src="${imageUrl}"
          alt>
        <h2>${name}</h2>
        <p>${description}</p>
      </div>`

      const cards = document.querySelector("#cards")
      cards.innerHTML = card
    })
})
