const divContainer = document.querySelector('#fighter-container')
const divNewUser = document.querySelector('#new-user-form')
const divLogin = document.querySelector('#login-form')
document.addEventListener('DOMContentLoaded', ()=>{
  renderButtons()
  getUsers()

})

function getUsers() {
  fetch('http://localhost:3000/users')
  .then(res=> res.json())
  .then(json=>{
    //render
    json.forEach(element=>createUsers(element))
  })
}

function createUsers(element) {
  let user = new User(element.id, element.name, element.username)
}

function getAvatars() {
  fetch('http://localhost:3000/avatars')
  .then(res=> res.json())
  .then(json=>{
    //render
    json.forEach(element=>
      createAvatars(element))
  })
}

function createAvatars(element) {
  let avatar = new Avatar(element.id, element.name, element.image, element.description)
  let img = document.createElement('img')
  let h4 = document.createElement('h4')
  let p = document.createElement('p')
  let divCard = document.createElement('div')
  let divImage = document.createElement('div')
  let divHeader = document.createElement('div')
  let divDescription = document.createElement('div')

  divHeader.classList.add('header')
  divDescription.classList.add('description')
  p.innerHTML = element.description
  img.src = element.image
  h4.innerHTML = element.name
  divImage.classList.add('image')
  divImage.append(img)
  divCard.id = `avatar-${element.id}`
  divCard.classList.add('card')
  divHeader.append(h4)
  divDescription.append(p)
  divCard.append(divImage, divHeader, divDescription)
  divContainer.append(divCard)
}

function renderButtons() {
  const buttonDiv = document.querySelector('#buttonsDiv')
  let loginBtn = document.createElement('button')
  let accBtn = document.createElement('button')
  loginBtn.classList.add('ui', 'button')
  accBtn.classList.add('ui', 'positive', 'button')
  loginBtn.innerText = 'Login'
  accBtn.innerText = 'Create Account'
  loginBtn.addEventListener('click', renderLogin)
  accBtn.addEventListener('click', renderAccount)
  buttonDiv.append(loginBtn, accBtn)
}

function renderLogin() {
  let loginForm = document.createElement('form')
  let usernameInput = document.createElement('input')
  let passwordInput = document.createElement('input')
  let submitBtn = document.createElement('submit')


  usernameInput.placeholder = 'Username...'
  passwordInput.placeholder = "Password..."


  usernameInput.name = 'username'
  passwordInput.name = 'password'

  loginForm.append(usernameInput,passwordInput)
  divLogin.append('loginForm')
}

// // function renderAccount() {
// //
// }

function renderNewUserForm() {
  let createUserForm = document.createElement('form')
  let nameInput = document.createElement('input')
  let emailInput = document.createElement('input')
  let usernameInput = document.createElement('input')
  let password = document.createElement('input')
  let submit = document.createElement('submit')

  nameInput.placeholder = 'Full Name...'
  emailInput.placeholder = 'Email...'
  usernameInput.placeholder = 'Username...'
  password.placeholder = 'Password...'

  nameInput.name = 'name'
  emailInput.name = 'email'
  usernameInput.name = 'username'
  password.name = 'password'

  createUserForm.append(nameInput,emailInput,usernameInput,passwordInput)
  divNewUser.append(createUserForm)
}


function clearLogin() {
  divLogin.innerHTML = ""
}

function clearNewUserForm() {
  divNewUser.innerHTML=""
}
