// Define the possible moves
const moveList = ["rock", "paper", "scissors"];

// Get the necessary DOM elements
const statusDisplay = document.querySelector("#status-head");
const buttons = document.querySelectorAll("button");
const playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play Again";
playAgainButton.style.display = "none";
document.querySelector(".game-button-wrapper").appendChild(playAgainButton);

// Function to generate a random move for the computer
function randomMove() {
  return Math.floor(Math.random() * 3);
}

// Function to calculate the game result
function calcResult(move1, move2) {
  if (move1 === move2) {
    return "Tie";
  } else if (
    (move1 === 0 && move2 === 2) ||
    (move1 === 1 && move2 === 0) ||
    (move1 === 2 && move2 === 1)
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Function to start the game
function startGame() {
  statusDisplay.textContent = "Choose your move:";
  buttons.forEach((button) => {
    button.style.display = "inline-block";
  });
  playAgainButton.style.display = "none";
}

// Function to end the game and compute the result
function endGame(event) {
  const playerMove = moveList.indexOf(event.target.id);
  const computerMove = randomMove();

  const result = calcResult(playerMove, computerMove);

  statusDisplay.textContent = `You chose ${moveList[playerMove]}. Computer chose ${moveList[computerMove]}. ${result}`;

  buttons.forEach((button) => {
    if (button.id !== event.target.id) {
      button.style.display = "none";
    }
  });

  playAgainButton.style.display = "inline-block";
}

// Function to restart the game
function restartGame() {
  startGame();
}

// Attach event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", endGame);
});

// Attach event listener to the play again button
playAgainButton.addEventListener("click", restartGame);

// Start the game
startGame();
