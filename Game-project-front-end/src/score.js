class Score{
  constructor(id, points, user_id){
    this.id = id
    this.points = points
    this.user_id = user_id
    gameStore.scores.push(this)
  }
}
