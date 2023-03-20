let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random()*3)]
  return computerChoice;
}

