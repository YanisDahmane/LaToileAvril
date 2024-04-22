// const title = document.querySelector("h2");
// title.classList.remove("red")
// title.classList.add("green")
// console.log(title.classList)


// const button = document.querySelector("button")
// console.log(button)
// button.addEventListener("click", (event) => {
//   console.log("Super tu as clické !!!!!")
// })


// const form = document.querySelector("#todoForm")
// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   const input = document.querySelector("#todoInput")
//   const lists = document.querySelector("#todoList")
//   const li = document.createElement("li")
//   li.innerText = input.value
//   input.value = ""
//   lists.insertAdjacentElement("beforeend", li)
// })


const form = document.querySelector("#todoForm")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const input = document.querySelector("#todoInput")
  // le mot écris par l'utilisateur est stocké dans input.value
  const lists = document.querySelector("#todoList")
  const li = document.createElement("li")
  li.innerText = input.value
  lists.insertAdjacentElement('beforeend', li)
  input.value = ""
})
