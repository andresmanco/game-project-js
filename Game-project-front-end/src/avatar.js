class Avatar{
  constructor(id, name, image, description){
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    gameStore.avatars.push(this)
  }

  static getAllAvatars(){
    gameStore.avatars.forEach(avatar=>{avatar.renderAvatar()})
  }

  static findAvatar(id){
    return gameStore.avatars.find(avatar=> {return avatar.id === id})
  }

  renderAvatar(){
    let img = document.createElement('img')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let divCard = document.createElement('div')
    let divImage = document.createElement('div')
    let divHeader = document.createElement('div')
    let divDescription = document.createElement('div')

    divCard.addEventListener('click', pickAvatar)

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
    divCard.append(divImage, divHeader, divDescription)
    divContainer.append(divCard)
  }

}
