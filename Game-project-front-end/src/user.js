let gameStore = {users: [], avatars: [], scores: []}
class User{
  constructor(id, name, username, avatarId){
    this.id = id
    this.name = name
    this.username = username
    this.avatarId = avatarId
    gameStore.users.push(this)
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
