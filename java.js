let choices = ["rock", "paper", "scissors"]

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
    alert('You win!') }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors')) {
    alert('You lose') }
    else alert('Tie!')
}
