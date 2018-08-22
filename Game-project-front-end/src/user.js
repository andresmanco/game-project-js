let gameStore = {users: [], avatars: [], scores: []}
class User{
  constructor(id, name, username, password, avatarId){
    this.id = id
    this.name = name
    this.username = username
    this.avatarId = avatarId
    this.password = password
    gameStore.users.push(this)
  }
  getAvatars(){
    let arr = []
    this.avatarId.forEach(id=>{
      arr.push(gameStore.avatars.find(avatar=>{
        return avatar.id === id
      })
    )})
    return arr
  }

  static getAllUsers(){
    return gameStore.users
  }

  static findUser(id){
    return gameStore.users.find(user=> {return user.id === id})
  }

  static loginUser(username, password){
    let user = gameStore.users.find(user=>{
      return user.username === username
    })

    if (user !== undefined){
      if (password === user.password){
        user.renderUser()
      }else{
        alert('username or password incorrect')
      }
    }
  }

  renderUser(){
    const divProfile = document.querySelector('#profile-container')
    buttonDiv.innerHTML = ''
    divContainer.innerHTML = ''

    let h1 = document.createElement('h1')
    let btnExit = document.createElement('button')
    let btnPlay = document.createElement('button')
    let divAvatars = document.createElement('div')

    btnExit.innerText = 'Logout'
    btnPlay.innerText = 'Play'
    h1.innerText = `${this.username}, pick your avatar`
    btnExit.classList.add('ui', 'button')
    btnPlay.classList.add('ui', 'positive', 'button')
    profileHeader.classList.add('header')
    profileHeader.id = `div-${this.id}`

    btnExit.addEventListener('click', this.logout)

    buttonDiv.append(btnPlay, btnExit)
    profileHeader.append(h1)
    divProfile.append(profileHeader)


    this.getAvatars().forEach(avatar=> {
      avatar.renderAvatar()
    })
  }

  logout(){
    profileHeader.innerHTML = ''
    buttonDiv.innerHTML = ''
    divContainer.innerHTML = ''
    renderButtons()
  }
}
