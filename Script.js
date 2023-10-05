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

function getPlayerChoice() {
  let playerSelection = prompt('Choose your move (rock, paper, or scissors)');
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
  return playerSelection;
  }
  else alert('Invalid move! Choose between "rock", "paper", or "scissors"');
  getPlayerChoice();
}
//A function compares both moves and returns a string with the result

function compareMoves(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
    return(0);
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log("You lose! Paper beats Rock");
    return(-1);
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log("You win! Rock beats Scissors");
    return(1);
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log("You lose! Scissors beats Paper");
    return(-1);
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("You win! Paper beats Rock");
    return(1);
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log("You Lose! Rock beats Scissors");
    return(-1);
  }
  else console.log("You win! Scissors beats Paper");
  return(1);
}

//A function repeats the game 5 times and keeps a tally of the score, reporting the winner and loser at the end

function game() {
  let yourScore = 0;
  let computerScore = 0;
  let draws = 0;
  let winner = null;

  for (i=0; i<5; i++) {
    let result = compareMoves(getPlayerChoice(), getComputerChoice());
    if (result === 0) {
      draws += 1;
    } 
    else if (result === -1 ) {
      computerScore += 1;
    }
    else yourScore += 1;   
  }

  if (yourScore > computerScore) {
    winner = "You have won the game!";
  }
  else if (yourScore < computerScore){
    winner = "The Computer has won the game!";
  }
  else winner = "It's a tie!";

  console.log ("You've won " + yourScore + " times, lost " + computerScore + " times, and drawn " + draws + " times. " + winner );
}

//Run the game 

game();
