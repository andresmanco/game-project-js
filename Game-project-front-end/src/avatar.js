class Avatar{
  constructor(id, name, image, description){
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    gameStore.avatars.push(this)
  }

  static getAllAvatars(){
    divContainer.innerHTML = ''
    gameStore.avatars.forEach(avatar=>{avatar.renderAvatar()})
  }

  static findAvatar(id){
    return gameStore.avatars.find(avatar=> {return avatar.id === id})
  }
   getAvatarId() {
    return this.id
  }
  renderAvatar(){
    let img = document.createElement('img')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let divCard = document.createElement('div')
    let divImage = document.createElement('div')
    let divHeader = document.createElement('div')
    let divDescription = document.createElement('div')
    let deleteBtn = document.createElement('button')

    deleteBtn.addEventListener('click', userAvatarGet)
    divCard.addEventListener('click', ()=>{
      pickAvatar(event)
      setAvatarPostId(this.id)
      if(logedIn){
        addNewAvatar()
        console.log("I'm in Avatar")
      }
    })
    if(logedIn === true){
      divCard.addEventListener('click', visible)
    }
    deleteBtn.innerText = 'DELETE'
    deleteBtn.style.visibility = 'hidden'
    divHeader.classList.add('header')
    divDescription.classList.add('description')
    p.innerHTML = this.description
    img.src = this.image
    h4.innerHTML = this.name
    divImage.classList.add('image')
    divImage.append(img)
    divCard.id = `avatar-${this.id}`
    divCard.classList.add('card')
    divHeader.append(h4)
    divDescription.append(p)
    divCard.append(divImage, divHeader, divDescription, deleteBtn)
    divContainer.append(divCard)
  }

}
