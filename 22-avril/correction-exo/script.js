console.log("Bonjour")
// Créer un tableau

const students = [
  {
    prenom: "Yanis",
    nom: "Dahmane",
    age: 22,
    adresse: {
      ville: "Lyon",
      rue: "Quai Joseph",
      codePostal: "69008"
    },
    amis: [
      {
        prenom: "Sandy",
        nom: "Blue",
        age: 23,
        adresse: {
          ville: "Lyon",
          rue: "Rue des capucin",
          codePostal: "69000"
        }
      },
      {
        prenom: "Remi",
        nom: "LaPorte",
        age: 22,
        adresse: {
          ville: "Bourg",
          rue: "Rue des flechettes",
          codePostal: "01000"
        }
      }
    ]
  },
  {
    prenom: "Adina",
    nom: "Oula",
    age: 27,
    adresse: {
      ville: "Ecully",
      rue: "Saint Pierre",
      codePostal: "70000"
    },
    amis: [
      {
        prenom: "Sandy",
        nom: "Blue",
        age: 23,
        adresse: {
          ville: "Lyon",
          rue: "Rue des capucin",
          codePostal: "69000"
        }
      }
    ]
  },
  {
    prenom: "Sandy",
    nom: "Blue",
    age: 23,
    adresse: {
      ville: "Lyon",
      rue: "22 rue des capucins",
      codePostal: "69001"
    },
    amis: [
      {
        prenom: "Yanis",
        nom: "Dahmane",
        age: 22,
        adresse: {
          ville: "Bourg",
          rue: "chemin des plans",
          codePostal: "01250"
        }
      }
    ]
  }
]

const yanis = {
  prenom: "Yanis",
  nom: "Dahmane",
  age: 22,
  adresse: {
    ville: "Lyon",
    rue: "Quai Joseph",
    codePostal: "69008"
  },
  amis: [
    {
      prenom: "Sandy",
      nom: "Blue",
      age: 23,
      adresse: {
        ville: "Lyon",
        rue: "Rue des capucin",
        codePostal: "69000"
      }
    },
    {
      prenom: "Remi",
      nom: "LaPorte",
      age: 22,
      adresse: {
        ville: "Bourg",
        rue: "Rue des flechettes",
        codePostal: "01000"
      }
    }
  ]
}

const adina = {
  prenom: "Adina",
  nom: "Oula",
  age: 27,
  adresse: {
    ville: "Ecully",
    rue: "Saint Pierre",
    codePostal: "70000"
  },
  amis: [
    {
      prenom: "Sandy",
      nom: "Blue",
      age: 23,
      adresse: {
        ville: "Lyon",
        rue: "Rue des capucin",
        codePostal: "69000"
      }
    }
  ]
}

const sandy = {
  prenom: "Sandy",
  nom: "Blue",
  age: 23,
  adresse: {
    ville: "Lyon",
    rue: "22 rue des capucins",
    codePostal: "69001"
  },
  amis: [
    {
      prenom: "Yanis",
      nom: "Dahmane",
      age: 22,
      adresse: {
        ville: "Bourg",
        rue: "chemin des plans",
        codePostal: "01250"
      }
    }
  ]
}

// students.push(yanis)
// students.push(adina)
// students.push(sandy)

students.forEach(student => {
  console.log(`Bonjour ${student.prenom} ${student.nom} tu es agé de ${student.age} et tu habites la ville de ${student.adresse.ville} à l'adresse ${student.adresse.rue}, ${student.adresse.codePostal}. Tu es bien entouré puisque tu as ${student.amis.length} amis, dont voici la liste :`)
  student.amis.forEach((ami, index) => {
    console.log(`${index + 1} - ${ami.prenom} ${ami.nom} agé de ${ami.age} ans qui habite ${ami.adresse.ville}`)
  })
})
