const divContainer = document.querySelector('#fighter-container')
const divNewUser = document.querySelector('#new-user-form')
const divLogin = document.querySelector('#login-form')

document.addEventListener('DOMContentLoaded', ()=>{
  renderButtons()
  getUsers()
  getAvatars()
})

function getUsers() {
  fetch('http://localhost:3000/users')
  .then(res=> res.json())
  .then(json=>{
    json.forEach(element=>createUsers(element))
  })
}

function createUsers(element) {
  let id = []
  element.avatars.forEach(avatar=> {id.push(avatar.id)})
  let user = new User(element.id, element.name, element.username, id)
}

function getAvatars() {
  fetch('http://localhost:3000/avatars')
  .then(res=> res.json())
  .then(json=>{
    json.forEach(element=>
      createAvatars(element))
  })
}

function createAvatars(element) {
  let avatar = new Avatar(element.id, element.name, element.image, element.description)
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
  accBtn.addEventListener('click', renderNewUserForm)
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

  loginForm.append(usernameInput, passwordInput)
  divLogin.append('loginForm')
}

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
  divNewUser.innerHTML = ""
}
