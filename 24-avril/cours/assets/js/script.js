const movies = []
// const moviesJson = "assets/js/movies.json"
// const response = fetchData(moviesJson)

// async function fetchData(url) {
//   const response = await fetch(url) // response est "une string"
//   const films = await response.json() // j'hydrate ma donnée
//   films.forEach(movie => {
//     const cardHTML = `
//       <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
//         <img class="w-full"
//           src="${movie.imageUrl}"
//           alt="Image de la carte">
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2">${movie.name}</div>
//           <p class="text-gray-700 text-base">
//             ${movie.description}
//           </p>
//         </div>
//         <div class="px-6 py-4">
//           <button
//             class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
//             Supprimer
//           </button>
//         </div>
//       </div>
//     `
//     cardsDom.innerHTML += cardHTML
//   })
// }

const nameDom = document.querySelector("#name")
// const descriptionDom = document.querySelector("#description")
// const imageDom = document.querySelector("#image")

const submitDom = document.querySelector("#submit")
const formDom = document.querySelector("#form")
const cardsDom = document.querySelector("#cards")

formDom.addEventListener("submit", async (event) => {
  event.preventDefault()
  const name = nameDom.value
  // const description = descriptionDom.value
  // const imageUrl = imageDom.value

  // Je créé le lien personalisé vers l'api
  const apiUrl = `https://www.myapifilms.com/imdb/idIMDB?title=${name}&token=254c15ce-e74a-4bfa-85ea-25dfd3fa8fa5`
  // Je récuperer la donné du site (Qui en gros est du text)
  const response = await fetch(apiUrl)
  // Je convertie mon text en json
  const movieJson = await response.json()

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      const imageUrl = data.data.movies[0].urlPoster
      const description = data.data.movies[0].simplePlot

      const cardHTML = `
            <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2">
              <img class="w-full"
                src="${imageUrl}"
                alt="Image de la carte">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${name}</div>
                <p class="text-gray-700 text-base">
                  ${description}
                </p>
              </div>
              <div class="px-6 py-4">
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                  Supprimer
                </button>
              </div>
            </div>
      `

      cardsDom.innerHTML += cardHTML
    })
  // fetch(apiUrl)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })


  // console.log(movies)
})
