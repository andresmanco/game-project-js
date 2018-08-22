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

  }
}
