
const result = document.querySelector("#result");

const playerScore = document.querySelector("#player");

const computerScore = document.querySelector("#computer");

const message = document.querySelector("#message");

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
  return computerSelection;
}

//The player chooses a move

function getPlayerChoice(choice) {
  if (scoreC == 5 || scoreP == 5){
    scoreC = 0;
    scoreP = 0;
  }
  compareMoves(choice, getComputerChoice());
}
//A function compares both moves and displays the result on the page

let scoreP = 0;
let scoreC = 0;

function compareMoves(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "It's a draw!";
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result.textContent = "The computer played " + computerSelection + ". You lose! Rock gets beaten by paper.";
    scoreC += 1;
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result.textContent =  "The computer played " + computerSelection + ". You win! Rock beats Scissors.";
    scoreP += 1;
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result.textContent = "The computer played " + computerSelection + ". You lose! Paper gets beaten by scissors.";
    scoreC += 1;
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result.textContent = "The computer played " + computerSelection + ". You win! Paper beats Rock.";
    scoreP += 1;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result.textContent =  "The computer played " + computerSelection + ". You Lose! Scissors get beaten by rock.";
    scoreC += 1;
  }
  else { 
    result.textContent = "The computer played " + computerSelection + ".   You win! Scissors beats Paper.  ";
    scoreP += 1
  }
  playerScore.textContent= scoreP;
  computerScore.textContent = scoreC;
  if (scoreP == 5) {
    message.textContent = ". You won this match!"
  }
  if (scoreC == 5) {
    message.textContent = ". You lost this match"
  }
}

//






//Run the game 

