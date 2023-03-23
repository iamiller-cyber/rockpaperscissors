let choices = ["rock", "paper", "scissors"]
let wins = 0
let losses = 0

function getComputerSelection() {
  let computerSelection = choices[Math.floor(Math.random()*3)]
  return computerSelection;
}


function getPlayerSelection() { 
  let playerSelection = (prompt("rock, paper, or scissors?").toLowerCase())
  return playerSelection }

function playRound(playerSelection, computerSelection) {
    if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
    alert('You gotta enter rock, paper, or scissors! Check ur spelling.')
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
    alert('You win - this round!') 
    return wins++ }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
    alert('You lose - just this round!')
    return losses++ }
    else alert('Tie-d this round!')
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerSelection()
    let computerSelection = getComputerSelection()
    playRound(playerSelection, computerSelection) }
  if (wins > losses) {
      alert('You win!')
    }
    else if (losses > wins) {
      alert('You lost it all!')
    }
    else alert('I guess u tied')
}