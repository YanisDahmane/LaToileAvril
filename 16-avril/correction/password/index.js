console.log("test")

const password = "password"
const passwordConfirmation = "PASSWORD"

const checkPassword = (pass, confPass) => {
  // if (pass.toUpperCase() === confPass.toUpperCase()) {
  //   return true
  // } else {
  //   return false
  // }
  return pass.toUpperCase() === confPass.toUpperCase()
}

console.log(checkPassword(password, passwordConfirmation))// => true
