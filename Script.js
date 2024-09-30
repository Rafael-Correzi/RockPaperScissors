

//The computer randomly chooses a move

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random()*3) + 1;
  if (computerSelection == 1 ) {
    computerSelection = 'rock';
  }
  else if (computerSelection == 2) {
    computerSelection = 'paper';
  }
  else computerSelection = 'scissors';
  console.log(computerSelection);
  return computerSelection;
}

//The player chooses a move

function getPlayerChoice(choice) {
  compareMoves(choice, getComputerChoice());
}
//A function compares both moves and returns a string with the result

function compareMoves(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
    return(0);
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log("You lose! Rock gets beaten by paper");
    return(-1);
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log("You win! Rock beats Scissors");
    return(1);
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log("You lose! Paper gets beaten by scissors");
    return(-1);
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("You win! Paper beats Rock");
    return(1);
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log("You Lose! Scissors get beaten by rock");
    return(-1);
  }
  else console.log("You win! Scissors beats Paper");
  return(1);
}

//

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    getPlayerChoice('rock');
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  getPlayerChoice('paper');
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  getPlayerChoice('scissors');
});




//Run the game 

