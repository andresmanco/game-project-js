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

    profileHeader.innerHTML = ''
    buttonDiv.innerHTML = ''
    divContainer.innerHTML = ''
    document.querySelector('#total-points').innerHTML = ''
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
    timerH1.innerText = ''
    promptH1.innerText = ''
    pointsCounter.innerText = ''

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
    const divProfile = document.querySelector('#profile-container')
    const pointsH1 = document.querySelector('#total-points')
    // document.querySelector('#points-counter').innerHTML = ''
    buttonDiv.innerHTML = ''
    divContainer.innerHTML = ''
    if(points > 0){
      pointsH1.innerText = `You got ${points} points`
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
    profileHeader.id = `div-${this.id}`

    setUserPostId(this.id)

    avatarBtn.innerHTML = 'Add an Avatar'
    avatarBtn.addEventListener('click',()=>{
      Avatar.getAllAvatars()
      console.log("I'm in user")
    })
    newAvatarDiv.append(avatarBtn)

    btnPlay.addEventListener('click', play)
    btnExit.addEventListener('click', this.logout)
    buttonDiv.append(btnPlay, btnExit)
    profileHeader.append(h1)
    divProfile.append(profileHeader)

    this.getAvatars().forEach(avatar=> {
      avatar.renderAvatar()
    })
  }

  logout(){
    logedIn = false;
    usernameLogedIn = undefined;
    passwordLogedIn = undefined;
    idLogedIn = undefined;
    profileHeader.innerHTML = ''
    buttonDiv.innerHTML = ''
    divContainer.innerHTML = ''
    document.querySelector('#total-points').innerHTML = ''
    renderButtons()
  }
}
