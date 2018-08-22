class Avatar{
  constructor(id, name, image, description){
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    gameStore.avatars.push(this)
  }


}
