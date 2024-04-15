const longueur = 10
const largeur = 10

// if(longueur > 0) {
//   if (largeur > 0) {
//     ///
//   }
// }

if (longueur > 0 && largeur > 0) {
  if (longueur == largeur) {
    console.log("C'est un carré")
  }

  const peri = 2 * (longueur + largeur)
  console.log("Le perimetre est de", peri)
}
