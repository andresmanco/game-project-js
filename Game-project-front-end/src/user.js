let gameStore = {users: [], avatars: [], scores: []}
class User{
  constructor(id, name, username, avatarId){
    this.id = id
    this.name = name
    this.username = username
    this.avatarId = avatarId
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

  renderUser(){
    const divProfile = document.querySelector('#profile-container')
    const divBtn = document.querySelector('#buttonsDiv')
    divBtn.innerHTML = ''
    divContainer.innerHTML = ''

    let h1 = document.createElement('h1')
    let btnExit = document.createElement('button')
    let btnPlay = document.createElement('button')
    let divName = document.createElement('div')
    let divAvatars = document.createElement('div')

    btnExit.innerText = 'Logout'
    btnPlay.innerText = 'Play'
    h1.innerText = `${this.username}, pick your avatar`
    btnExit.classList.add('ui', 'button')
    btnPlay.classList.add('ui', 'positive', 'button')
    divName.classList.add('header')

    divBtn.append(btnPlay, btnExit)
    divName.append(h1)
    divProfile.append(divName)


    this.getAvatars().forEach(avatar=> {
      avatar.renderAvatar()
    })
  }
}
