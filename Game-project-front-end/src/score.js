class Score{
  constructor(id, points, user_id){
    this.id = id
    this.points = points
    this.user_id = user_id
    gameStore.scores.push(this)
  }

  static renderHighScores(){
    // debugger
    let ol = document.createElement('ol')
    const highScoresDiv = document.querySelector('#high-scores')
    highScoresDiv.append(ol)
    let count = 0;
    let scoreArr = gameStore.scores.filter(element=> element.points > 8).sort(function(a,b) {
      return   b.points - a.points
    })

    while(count <= 10){
      let li = document.createElement('li')
      let user = User.findUser(scoreArr[count].user_id)
      // debugger
      console.log(`${scoreArr[count].points} Points---------->${user.username}`)
      li.innerHTML= `${scoreArr[count].points} Points---------->${user.username}`
      ol.append(li)
      count++;
    }
  }
}
