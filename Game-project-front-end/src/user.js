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

  deleteAvatar(idAvatar){
    let arr = []
    this.avatarId.forEach(id=>{
      if(id !== idAvatar){
        arr.push(id)
      }
    })
    this.avatarId = arr

    clearAll()
    User.loginUser(usernameLogedIn, passwordLogedIn)
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
    clearAll()
    // timerH1.innerText = ''
    // promptH1.innerText = ''
    // pointsCounter.innerText = ''

    let user = gameStore.users.find(user=>{
      return user.username === username
    })

    if (user !== undefined){
      if (password === user.password){
        logedIn = true
        idLogedIn = user.id
        usernameLogedIn = user.username
        passwordLogedIn = user.password
        user.renderUser()
      }else{
        alert('username or password incorrect')
      }
    }
  }
   getUserId() {
    return this.id
  }
  renderUser(){
    clearAll()
    if(points > 0){
      totalPoints.innerText = `You got ${points} points`
    }

    let h1 = document.createElement('h1')
    let btnExit = document.createElement('button')
    let btnPlay = document.createElement('button')
    let divAvatars = document.createElement('div')
    let avatarBtn = document.createElement('button')

    btnExit.innerText = 'Logout'
    btnPlay.innerText = 'Play'
    h1.innerText = `${this.username}, pick your avatar`
    btnExit.classList.add('ui', 'button')
    btnPlay.classList.add('ui', 'positive', 'button')
    profileHeader.classList.add('header')

    avatarBtn.innerHTML = 'Add an Avatar'
    avatarBtn.addEventListener('click',()=>{
      Avatar.getAllAvatars()
    })

    btnPlay.addEventListener('click', play)
    btnExit.addEventListener('click', this.logout)
    newAvatarDiv.append(avatarBtn)
    buttonDiv.append(btnPlay, btnExit)
    profileHeader.append(h1)
    profileDiv.append(profileHeader)

    this.getAvatars().forEach(avatar=> {
      avatar.renderAvatar()
    })
  }

  logout(){
    logedIn = false;
    usernameLogedIn = undefined;
    passwordLogedIn = undefined;
    idLogedIn = undefined;
    clearAll()
    renderButtons()
  }
}
