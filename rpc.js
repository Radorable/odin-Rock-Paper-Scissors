// random number between 1 and 3
// 1 = rock, 2 = paper, 3 = scissors

// choices
let computerChoice;
let humanChoice;

// Scores
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

// through random numbers, assign to rock, paper, and
// scissors a value to be able to compare with human
function getComputerChoice() {
  let number = Math.floor(Math.random() * (4 - 1) + 1);
  console.log("The number is " + number);
  if (number === 1) {
    return (computerChoice = "rock");
  } else if (number === 2) {
    return (computerChoice = "paper");
  } else {
    return (computerChoice = "scissors");
  }
}

//through human's answer, convert the appropriate string
// to his appropriate value
function getHumanChoice(e) {
  getComputerChoice();
  console.log(computerChoice);
  if (e.target.id === "rock") {
    humanChoice = "rock";
    console.log(humanChoice);
  } else if (e.target.id === "paper") {
    humanChoice = "paper";
    console.log(humanChoice);
  } else if (e.target.id === "scissors") {
    humanChoice = "scissors";
    console.log(humanChoice);
  }

  return playRound(humanChoice, computerChoice);
}

// compare
function playRound(humanChoice, computerChoice) {
  gameRound++;
  round.textContent = "Round : " + gameRound;
  if (humanChoice === computerChoice) {
    return alert("same !");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    human.textContent = "Your current score is : " + humanScore;
    if (humanScore === 5) {
      alert("well done, you finished the game !");
      return newGame();
    }
    return alert("you win !");
  } else {
    computerScore++;
    console.log("computer score is : " + computerScore);
    computer.textContent = "Computer current score is : " + computerScore;
    if (computerScore === 5) {
      alert("well done, you finished the game !");
      return newGame();
    }
    return alert("you lose !");
  }
}

function newGame() {
  computerScore = 0;
  humanScore = 0;
  gameRound = 0;
  computer.textContent = "Computer current score is : 0";
  human.textContent = "Your current score is : 0";
  round.textContent = "Round : " + gameRound;
}

// all DOM
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const score = document.querySelector("#score");
const round = document.querySelector("#round");

const computer = document.querySelector("#computer");
const human = document.querySelector("#human");

rockBtn.addEventListener("click", getHumanChoice);
paperBtn.addEventListener("click", getHumanChoice);
scissorsBtn.addEventListener("click", getHumanChoice);
