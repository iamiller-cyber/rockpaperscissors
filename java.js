let choices = ["rock", "paper", "scissors"]
let wins = 0
let losses = 0

function getComputerSelection() {
  return choices[Math.floor(Math.random()*3)];
}


function playRound(playerSelection) {
    let computerSelection = getComputerSelection()
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
             (playerSelection === 'scissors' && computerSelection === 'paper') || 
             (playerSelection === 'paper' && computerSelection === 'rock')) {
      alert('You win - this round!') 
      wins++
      w.textContent = `Wins =` + ` ${wins}`; }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
             (playerSelection === 'scissors' && computerSelection === 'rock') || 
             (playerSelection === 'paper' && computerSelection === 'scissors')) {
      alert('You lose - just this round!')
      losses++ 
      l.textContent = `Losses =` + ` ${losses}`  }
    else alert('Tie-d this round!');
    if (wins === 2) {
      alert('You won big time!')
      p.textContent = "You win big one"
      results.appendChild(p)
      newgame.classList.remove('invis')
    }
    if (losses === 2) {
      alert('You lose big time!')
      p.textContent = "You lose big one"
      results.appendChild(p)
      newgame.classList.remove('invis')
    }
}


const rock = document.querySelector("#rock")
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('#results')
const p = document.createElement('p')
const w = document.querySelector('#wins')
const l = document.querySelector('#losses')
const newgame = document.querySelector('.newgame')


rock.addEventListener('click', function() {
  playRound('rock');
})
paper.addEventListener('click', function() {
  playRound('paper')
})
scissors.addEventListener('click', function(){
  playRound('scissors')
})

newgame.addEventListener('click', function() {
  resetGame()
})

function resetGame () {
  wins = 0;
  losses = 0;
  results.removeChild(p);
  newgame.classList.add('invis');
  l.textContent = 'Losses =';
  w.textContent = 'Wins =';
}