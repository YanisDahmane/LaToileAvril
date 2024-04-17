
// On se créé un tableau qui contient toute les lettres de l'alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

// On créé une méthode randomLetter, qui prends en parametre le nombre de lettre souhaitées
const randomLetter = (nombre) => {
  // On se créé temporairement un tableau vide
  // dans le quel nous allons mettre les lettres une à une
  const tirages = []

  // Nous faisons une boucle jusqu'à ce que notre tableau tirages contiennent autant de lettre
  // que nombre
  while (tirages.length < nombre) {
    // On créé un nombre aléatoire compris entre 0 et le nombre de lettre de l'alphabet
    const aleatoire = Math.floor(Math.random() * alphabet.length)
    // On choisi la lettre dans le tableau alphabet grâce à l'index aléatoire
    const letterAleatoire = alphabet[aleatoire]
    // La lettre aleatoire nous la mettons à la fin de notre tableau tirages
    tirages.push(letterAleatoire)
  }
  // Enfin nous renvoyons notre tableau tirages
  return tirages
}

// On créé une methode askWord qui ne prends aucun parametre
const askWord = () => {
  // Nous mettons dans la variable askUser la réponse donnée par l'utilisateur
  // grâce à la méthode prompt
  let askUser = prompt("Quel mot voulez-vous ?")
  // nous réasignon la valeur de askUser par askUser mis en minuscule
  askUser = askUser.toLowerCase()
  // Enfin nous renvoyons le mot en minuscule
  return askUser
}

// On créé une methode convertStringToArray qui prends en paramétre un mot (une string)
const convertStringToArray = (word) => {
  // On transforme notre string ("ok"), en un array (['o','k'])
  const wordArray = word.split("")
  // Enfin nous renvoyons le tableau créé
  return wordArray
}

// On créé une methode checkWord qui prends deux paramétres,
// en premier un tableau des lettres du mot donné par l'utilisateur
// en seconds notre tableau composé des lettres aleatoires disponible
const checkWord = (userAnswerArray, tirages) => {
  // Nous créé une variable temporaire mis à true par défaut
  // que nous changerons si le mot n'est pas valide
  let valid = true

  // Nous itérons (nous passons) sur chaque lettre qui compose le mot donné par l'utilisateur
  // chaque lettre se mettra dans la variable letter
  userAnswerArray.forEach(letter => {
    // Nous vérifions si la lettre est comprise dans notre tableau de lettre aleatoire
    if (tirages.includes(letter)) {
      // Si c'est le cas
      // Nous recherchons l'index de la lettres dans notre tableau de lettre aleatoire
      const letterIndex = tirages.indexOf(letter)
      // Nous supprimons la lettre en question grâce au splice
      tirages.splice(letterIndex, 1)
    } else {
      // Si non c'est que la lettre n'est pas disponible
      // nous passons la variable temporaire valid
      // à false
      valid = false
    }
  })

  // Enfin nous retournons la variable valid
  return valid
}

// On créé la méthode countPoint qui prends en paramètre le tableau de lettre
// qui compose le mot de l'utilisateur
const countPoint = (userAnswerArray) => {
  // On se créé une variable temporaire qui comptera les points on les mets par défaut à 0
  let points = 0
  // On se créé un tableau qui contient toute les voyelles de l'alphabet pour pouvoir compter les points
  const voyelles = ['a', 'e', 'i', 'o', 'u', 'y']

  // Nous itérons (nous passons) sur chaque lettre qui compose le mot de l'utilisateurs
  userAnswerArray.forEach(letter => {
    // Nous vérifions si c'est une voyelle
    if (voyelles.includes(letter)) {
      // Si c'est le cas nous ajoutons 20 points au score
      points = points + 20
      // points += 20
    } else {
      // Si ce n'est pas le cas nous ajoutons 10 points au score
      points = points + 10
      // points += 10
    }
  })

  // Enfin nous retournons le nombre de points
  return points
}

// Etape 1, tirer 20 lettre aléatoire
const tirages = randomLetter(20)
console.log("Tirage", tirages)
// Etape 2, demander un mot à l'utilisateur
const word = askWord()
// Etape 3, convertir le mot (string) en un tableau (array)
const userAnswerArray = convertStringToArray(word)
// Etape 4, vérifier si le mot est valide
const valid = checkWord(userAnswerArray, tirages) // return boolean


if (valid) {
  // Etape 5A, si le mot est valide compter le nombre de points
  const points = countPoint(userAnswerArray)
  // Etape 6A, annoncer à l'utilisateur le nombre de points réaliser
  console.log(`Bravo tu as gagné avec ${points}`)
} else {
  // Etape 5B, si le mot n'est pas valide afficher qu'il est nul ;(
  console.log("Tu es nul tu as perdu")
}

// console.log("valid", valid)
// console.log("point", points)
