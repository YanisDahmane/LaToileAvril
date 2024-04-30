console.log("bonjour");
const items = [
  {
    title: "Porsche 911",
    description: "Super Voiture",
    image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg"
  },
  {
    title: "Ferrari 488 GTB",
    description: "Rapidité ultime, design époustouflant.",
    image: "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_960_720.png"
  },
  {
    title: "Lamborghini Aventador",
    description: "La quintessence du luxe et de la puissance.",
    image: "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990_960_720.png"
  },
  {
    title: "Bugatti Chiron",
    description: "La voiture la plus rapide et la plus chère du monde.",
    image: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milwaukee-2695823_960_720.jpg"
  },
  {
    title: "McLaren P1",
    description: "Innovation technologique et performances extrêmes.",
    image: "https://cdn.pixabay.com/photo/2015/10/01/21/39/car-967154_960_720.jpg"
  },
  {
    title: "Aston Martin DB11",
    description: "Élégance britannique combinée à des performances sportives.",
    image: "https://cdn.pixabay.com/photo/2019/11/15/16/04/aston-4675662_960_720.jpg"
  },
  {
    title: "Tesla Model S Plaid",
    description: "Électrique, rapide et futuriste.",
    image: "https://cdn.pixabay.com/photo/2021/11/09/18/26/tesla-6807731_960_720.jpg"
  },
  {
    title: "Mercedes-Benz S-Class",
    description: "Le summum du luxe et de la technologie automobile.",
    image: "https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_960_720.jpg"
  },
  {
    title: "BMW M5",
    description: "Puissance allemande et dynamisme sur la route.",
    image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg"
  },
  {
    title: "Audi R8",
    description: "Alliance parfaite entre performance et sophistication.",
    image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/audi-63930_960_720.jpg"
  }
];

const carroussel = document.querySelector(".carroussel")

const insertCar = (id) => {
  const element = document.createElement("div")
  element.classList.add("element")

  const image = document.createElement("div")
  image.classList.add("image")
  image.style = `background-image: url("${items[id].image}")`
  image.id = "image1"

  element.appendChild(image)

  const title = document.createElement("h2")
  title.innerText = items[id].title

  element.appendChild(title)

  const description = document.createElement("p")
  description.innerText = items[id].description

  element.appendChild(description)

  carroussel.appendChild(element)
}

const insertCarPrevious = (id) => {
  const element = document.createElement("div")
  element.classList.add("element")

  const image = document.createElement("div")
  image.classList.add("image")
  image.style = `background-image: url("${items[id].image}")`

  element.appendChild(image)

  const title = document.createElement("h2")
  title.innerText = items[id].title

  element.appendChild(title)

  const description = document.createElement("p")
  description.innerText = items[id].description

  element.appendChild(description)

  carroussel.insertAdjacentElement("afterbegin", element)
}

let lastCarId = 3
let firstCarId = 0

const nextCar = document.querySelector("#next")
nextCar.addEventListener("click", () => {
  carroussel.firstChild.remove()

  if (lastCarId === items.length - 1) {
    // C'est la derniere voiture
    lastCarId = 0
    insertCar(lastCarId)
  } else {
    lastCarId++
    insertCar(lastCarId)
  }

  if (firstCarId === items.length - 1) {
    firstCarId = 0
  } else {
    firstCarId++
  }
})

const previousCar = document.querySelector("#previous")
previousCar.addEventListener("click", () => {
  carroussel.lastChild.remove()
  if (firstCarId === 0) {
    firstCarId = items.length - 1
  } else {
    firstCarId--
  }
  insertCarPrevious(firstCarId)
  if (lastCarId === 0) {
    lastCarId = items.length - 1
  } else {
    lastCarId--
  }
})

const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() { // We need to wrap the loop into an async function for this to work
  while (true) {
    carroussel.firstChild.remove()

    if (lastCarId === items.length - 1) {
      // C'est la derniere voiture
      lastCarId = 0
      insertCar(lastCarId)
    } else {
      lastCarId++
      insertCar(lastCarId)
    }

    if (firstCarId === items.length - 1) {
      firstCarId = 0
    } else {
      firstCarId++
    }
    await timer(5000)
  }
}

load();

insertCar(0)
insertCar(1)
insertCar(2)
