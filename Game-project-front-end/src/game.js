const pointsCounter = document.querySelector('#points-counter')
const promptH1 = document.querySelector('#prompt-h1')
const timerH1 = document.querySelector('#timer-h1')
let points
let timer

const promptObj = {1: {A: 'KeyA'}, 2: {B: 'KeyB'}, 3: {C: 'KeyC'}, 4: {D: 'KeyD'}, 5: {E: 'KeyE'}, 6: {F: 'KeyF'}, 7: {G: 'KeyG'}, 8: {H:'KeyH'},9:{I:'KeyI'},10:{J:'KeyJ'},11:{K:'KeyK'},12:{L:'KeyL'},12:{M:'KeyM'},14:{N:'KeyN'},15:{O:'KeyO'},16:{P:'KeyP'},17:{Q:'KeyQ'},18:{R:'KeyR'},19:{S:'KeyS'},20:{T:'KeyT'},21:{U:'KeyU'},22:{V:'KeyV'},23:{W:'KeyW'},24:{X:'KeyX'},25:{Y:'KeyY'},26:{Z:'KeyZ'}}


function getRandomInt() {
  return Math.floor(Math.random() * (25)) + 1
}

function prompt() {
  let num = getRandomInt()
  let letter = Object.keys(promptObj[num])[0]
  promptH1.innerHTML = letter
}

function checkEquality(event) {
  if(event.key.toLowerCase() === promptH1.innerText.toLowerCase()){
    points++
    pointsCounter.innerHTML = points
  }else{
    points--;
    pointsCounter.innerText = points
  }
}
function play() {
  if (avatarPickedId === undefined){
    alert('Need to pick an Avatar')
    clearAll()
    User.loginUser(usernameLogedIn, passwordLogedIn)
    return
  }

  document.querySelector('#total-points').innerHTML = ''
  buttonDiv.innerHTML = ''
  divContainer.innerHTML = ''
  document.querySelector(`#div-${idLogedIn}`).innerHTML = ''
  document.querySelector('#profile-container').innerHTML = ''

  let avatarGameDiv = document.querySelector('#game-avatar')

  let avatar = Avatar.findAvatar(avatarPickedId)
  let h4 = document.createElement('h4')
  let img = document.createElement('img')

  h4.innerHTML = avatar.name
  img.src = avatar.image
  avatarGameDiv.append(h4,img)

  clearAll()

  points = 0
  timer = 10
  document.addEventListener("keydown", checkEquality)
  const promptInterval = setInterval(prompt, 1500)
  const timerInterval = setInterval(timerFunc, 1000)
  function timerFunc() {
    timerH1.innerText = timer

    if(timer === 0){
      document.removeEventListener("keydown", checkEquality);
      clearInterval(promptInterval)
      clearInterval(timerInterval)
      pointsCounter.innerText = "Your time is over"
      avatarGameDiv.innerHTML = ''
      setTimeout(()=>{
        scoresPost(points)
        User.loginUser(usernameLogedIn, passwordLogedIn)
       }, 3000);
    }
    timer--
  }
}
