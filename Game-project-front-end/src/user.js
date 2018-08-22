let gameStore = {users: [], avatars: [], scores: []}
class User{
  constructor(id, name, username){
    this.id = id
    this.name = name
    this.username = username
    gameStore.users.push(this)
  }
  static getUsers(){
    return gameStore.users
  }

}
