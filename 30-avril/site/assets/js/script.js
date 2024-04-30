const title = document.querySelector("h1")
const description = document.querySelector("#description")
const articles = document.querySelector(".articles")

const url = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/cordonnier.json"
fetch(url)
  .then(response => response.json())
  .then(data => {
    title.innerText = data.nomCommercial
    description.innerText = data.phraseAccroche
    const realisations = data.realisations

    realisations.forEach(realisation => {
      console.log(realisation)

      const article = document.createElement("div")
      article.classList.add("article")

      const h2 = document.createElement("h2")
      h2.innerText = realisation.type
      article.appendChild(h2)

      const p = document.createElement("p")
      p.innerText = realisation.description
      article.appendChild(p)

      articles.appendChild(article)
    })
  })
