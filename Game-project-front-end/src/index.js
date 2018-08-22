const divContainer = document.querySelector('#fighter-container')
const divNewUser = document.querySelector('#new-user-form')
const divLogin = document.querySelector('#login-form')
const buttonDiv = document.querySelector('#buttonsDiv')
const profileHeader = document.querySelector('#username')
let avatarPickedId
document.addEventListener('DOMContentLoaded', ()=>{
  renderButtons()
  getUsers()
  getAvatars()
})

function getUsers() {
  fetch('http://localhost:3000/users')
  .then(res=> res.json())
  .then(json=>{
    gameStore.users = []
    json.forEach(element=>createUsers(element))
  })
}

function createUsers(element) {
  let id = []
  element.avatars.forEach(avatar=> {id.push(avatar.id)})
  let user = new User(element.id, element.name, element.username, element.password, id)
}

function getAvatars() {
  fetch('http://localhost:3000/avatars')
  .then(res=> res.json())
  .then(json=>{
    gameStore.avatars = []
    json.forEach(element=>
      createAvatars(element))
  })
}

function createAvatars(element) {
  let avatar = new Avatar(element.id, element.name, element.image, element.description)
}

function renderButtons() {
  buttonDiv.innerHTML = ''
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
  clearLogin()
  clearNewUserForm()
  divContainer.innerHTML = ''
  avatarPickedId = undefined
  let loginForm = document.createElement('form')
  let usernameInput = document.createElement('input')
  let passwordInput = document.createElement('input')
  let submitBtn = document.createElement('input')

  usernameInput.placeholder = 'Username...'
  passwordInput.placeholder = "Password..."

  submitBtn.type = 'submit'
  loginForm.addEventListener('submit', login)

  usernameInput.name = 'username'
  passwordInput.name = 'password'


  loginForm.append(usernameInput, passwordInput, submitBtn)
  divLogin.append(loginForm)
  // debugger
}

function renderNewUserForm() {
  clearLogin()
  clearNewUserForm()
  divContainer.innerHTML = ''
  avatarPickedId = undefined
  let createUserForm = document.createElement('form')
  let nameInput = document.createElement('input')
  let emailInput = document.createElement('input')
  let usernameInput = document.createElement('input')
  let password = document.createElement('input')
  let submit = document.createElement('input')

  nameInput.placeholder = 'Full Name...'
  emailInput.placeholder = 'Email...'
  usernameInput.placeholder = 'Username...'
  password.placeholder = 'Password...'
  submit.type = 'submit'
  nameInput.name = 'name'
  emailInput.name = 'email'
  usernameInput.name = 'username'
  password.name = 'password'


  createUserForm.append(nameInput, emailInput, usernameInput, password, submit)
  createUserForm.addEventListener('submit', ()=>retrieveNewUserData(event))

  divNewUser.append(createUserForm)
  Avatar.getAllAvatars()

}

function retrieveNewUserData(event) {
  event.preventDefault()
  let form = event.target
  let els = form.elements
  let name = els[0].value
  let email = els[1].value
  let username = els[2].value
  let password = els[3].value

  clearNewUserForm()
  if(name === "" || username === "" || email === "" || password === ""){
    alert('Need to fill all the fields')
    renderNewUserForm()
    return
  }
  createNewUser(name, email, username, password)
}

function createNewUser(name, email, username, password) {
  if (avatarPickedId === undefined){
    alert('Need to pick an Avatar')
    renderNewUserForm()
    return
  }
  divContainer.innerHTML = ''
   let user = new User(name, username, password, avatarPickedId)
   fetch('http://localhost:3000/users',{
     method: 'POST',
     headers:{
       'Content-Type': 'application/json',
       'accept': 'application.json'
     },
     body: JSON.stringify({
       name: name,
       email: email,
       username: username,
       password: password
     })
   }).then(r=> r.json())
   .then(user=>{
     userAvatar(user.id)
   })
}

  function userAvatar(userId) {
    fetch('http://localhost:3000/user_avatars',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'accept': 'application.json'
      },
      body: JSON.stringify({
        user_id: userId,
        avatar_id: avatarPickedId
      })
    })
    getUsers()
    getAvatars()
  }

function clearLogin() {
  divLogin.innerHTML = ""
}

function clearNewUserForm() {
  divNewUser.innerHTML = ""
}

function pickAvatar(e) {
  avatarPickedId = parseInt(e.currentTarget.id.split('-')[1])
}

function login(e){
  e.preventDefault()
  clearLogin()
  let username = e.target.elements[0].value
  let password = e.target.elements[1].value
  User.loginUser(username, password)
}
