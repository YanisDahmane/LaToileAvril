const randomLetter = (number) => {
  const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const randLetters = []
  for (let i = 0; i < number; i++) {
    const letter = allLetters[Math.floor(Math.random() * allLetters.length)]
    randLetters.push(letter)
  }
  return randLetters
}

const convertStringToArray = (word) => {
  return word.split("")
}

const checkLetter = (userArray, letters) => {
  let ok = true
  userArray.forEach((letter) => {
    if (letters.includes(letter)) {
      const index = letters.indexOf(letter)
      letters.splice(index, 1)
    } else {
      ok = false
    }
  })

  return ok
}

const countPoint = (word) => {
  const arrayWord = convertStringToArray(word)
  let point = 0
  const voyelle = ['a', 'e', 'i', 'o', 'u', 'y']

  arrayWord.forEach((letter) => {
    if (voyelle.includes(letter)) {
      point += 20
    } else {
      point += 10
    }
  })
  return point
}

let essai = []
const randLetters = randomLetter(20)
document.querySelector('#letters').innerHTML = randLetters.join(" - ")
document.querySelector('button').addEventListener('click', () => {
  const motUser = document.querySelector('input').value
  const motUserArray = convertStringToArray(motUser)
  const valid = checkLetter(motUserArray, randLetters)
  if (valid) {
    let point = countPoint(motUser)
    document.querySelector('h2').innerHTML = `Bravo vous avez gagné avec ${point} points`
  } else {
    document.querySelector('h2').innerHTML = "Malheureusement vous avez perdu :("
  }
})


// const askWord = (phrase) => {
//   const userAnswer = prompt(phrase)
//   const final = userAnswer.toLocaleLowerCase()
//   return final
// }

// const convertStringToArray = (word) => {
//   return word.split("")
// }

// const userAnswer = askWord("Quel mot voulez-vous essayer ?") // bonjour
// console.log(convertStringToArray(userAnswer))

const arrayUser = ['b', 'o', 'n', 'j', 'o', 'u', 'r']

// Créer une variable temporaire qui sera un boolean par defaut à true

// Boucler sur chaque élément du tableau
//    letter => b
//    Verifier que cette lettre est bien dans mon tableau avec toute les lettres disponibles
//        Si elle y est c'est ok
//          Retirer la lettre du tableau avec toute les lettres disponibles
//        Si c'est pas ok
//          Alors le mot n'est pas valide
//          mettre notre variable temporaire a false

// Juste a vérifier notre variable temporaire si elle est a true le mot est valide
// Si elle est a false le mot n'est pas valide
