// const promptDiv = document.querySelector('#game-prompt')
// const pointsDiv = document.querySelector('#points')
const pointsCounter = document.querySelector('#points-counter')
const promptH1 = document.querySelector('#prompt-h1')
// const timerDiv = document.querySelector('#timer')
const timerH1 = document.querySelector('#timer-h1')
let points
let timer

const promptObj = {1: {A: 'KeyA'}, 2: {B: 'KeyB'}, 3: {C: 'KeyC'}, 4: {D: 'KeyD'}, 5: {E: 'KeyE'}, 6: {F: 'KeyF'}, 7: {G: 'KeyG'}, 8: {H:'KeyH'},9:{I:'KeyI'},10:{J:'KeyJ'},11:{K:'KeyK'},12:{L:'KeyL'},12:{M:'KeyM'},14:{N:'KeyN'},15:{O:'KeyO'},16:{P:'KeyP'},17:{Q:'KeyQ'},18:{R:'KeyR'},19:{S:'KeyS'},20:{T:'KeyT'},21:{U:'KeyU'},22:{V:'KeyV'},23:{W:'KeyW'},24:{X:'KeyX'},25:{Y:'KeyY'},26:{Z:'KeyZ'}}


function getRandomInt() {
  return Math.floor(Math.random() * (25)) + 1
}

function prompt() {
  let num = getRandomInt()
  // debugger
  let letter = Object.keys(promptObj[num])[0]
  // debugger
  // let value = promptObj[num][letter]
  promptH1.innerHTML = letter
}

function checkEquality(event) {
  if(event.key.toLowerCase() === promptH1.innerText.toLowerCase()){
    points++
    pointsCounter.innerHTML = points
    // console.log('these are equal')
  }else{
    pointsCounter.innerText = "Wrong!"
  }
}
function play() {
  if (avatarPickedId === undefined){
    alert('Need to pick an Avatar')
    document.querySelector(`#div-${idLogedIn}`).innerHTML = ''
    User.loginUser(usernameLogedIn, passwordLogedIn)
    return
  }
  document.querySelector('#total-points').innerHTML = ''
  buttonDiv.innerHTML = ''
  divContainer.innerHTML = ''
  document.querySelector(`#div-${idLogedIn}`).innerHTML = ''
  document.querySelector('#profile-container').innerHTML = ''
  points = 0
  timer = 10
  document.addEventListener("keydown", checkEquality)
  const promptInterval = setInterval(prompt, 1500)
  const timerInterval = setInterval(timerFunc, 1000)
  function timerFunc() {
    timerH1.innerText = timer
    timer--
    if(timer === 0){
      clearInterval(promptInterval)
      clearInterval(timerInterval)
      pointsCounter.innerText = "Your time is over"
      scoresPost(points)
      User.loginUser(usernameLogedIn, passwordLogedIn)

    }
  }
}
