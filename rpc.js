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
    console.log("computer choice is rock");
    computerResult.src = "images/OIP-2.jpg";
    computerResult.alt = "image of a rock";
    computerResult.style.width = "25%";
    computerResult.style.height = "auto";
    return (computerChoice = "rock");
  } else if (number === 2) {
    console.log("computer choice is paper");
    computerResult.src = "images/OIP-5.jpg";
    computerResult.alt = "image of a paper";
    computerResult.style.width = "25%";
    computerResult.style.height = "auto";
    return (computerChoice = "paper");
  } else {
    console.log("computer choice is scissors");
    computerResult.src = "images/OIP-1.jpg";
    computerResult.alt = "image of a scissors";
    computerResult.style.width = "25%";
    computerResult.style.height = "auto";
    return (computerChoice = "scissors");
  }
}

//through human's answer, convert the appropriate string
// to its appropriate value
function getHumanChoice(e) {
  getComputerChoice();
  console.log("heyllo human" + humanChoice);
  console.log(computerChoice);
  if (e.target.id === "rock") {
    console.log("human choice is rock");
    humanChoice = "rock";
    humanResult.src = "images/OIP-2.jpg";
    humanResult.alt = "image of a rock";
    humanResult.style.width = "25%";
    humanResult.style.height = "auto";
    console.log(humanChoice);
  } else if (e.target.id === "paper") {
    console.log("human choice is paper");
    humanChoice = "paper";
    humanResult.src = "images/OIP-5.jpg";
    humanResult.alt = "image of a paper";
    humanResult.style.width = "25%";
    humanResult.style.height = "auto";
    console.log(humanChoice);
  } else if (e.target.id === "scissors") {
    console.log("human choice is scissors");
    humanChoice = "scissors";
    humanResult.src = "images/OIP-1.jpg";
    humanResult.alt = "image of a scissors";
    humanResult.style.width = "25%";
    humanResult.style.height = "auto";
    console.log(humanChoice);
  }

  return playRound(humanChoice, computerChoice);
}

// compare
function playRound(humanChoice, computerChoice) {
  gameRound++;
  round.textContent = "Round : " + gameRound;
  if (humanChoice === computerChoice) {
    return (choiceResult.textContent = "Equality !");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    human.textContent = "Your current score is : " + humanScore;
    if (humanScore === 5) {
      alert("Well done, you won the game !");
      return newGame();
    }
    return (choiceResult.textContent = "You win !");
  } else {
    computerScore++;
    console.log("computer score is : " + computerScore);
    computer.textContent = "Computer current score is : " + computerScore;
    if (computerScore === 5) {
      alert("Oh no, the computer won the game !");
      return newGame();
    }
    return (choiceResult.textContent = "You lose !");
  }
}

function newGame() {
  computerScore = 0;
  humanScore = 0;
  gameRound = 0;
  computer.textContent = "Computer current score is : 0";
  human.textContent = "Your current score is : 0";
  round.textContent = "Round : " + gameRound;
  choiceResult.textContent = "";

  // human result image
  humanResult.src = "";
  humanResult.alt = "";
  humanResult.style.width = "";
  humanResult.style.height = "";

  // computer result image
  computerResult.src = "";
  computerResult.alt = "";
  computerResult.style.width = "";
  computerResult.style.height = "";
}

function resultImage() {
  if (humanChoice === "rock") {
    humanResult.src = "images/OIP-2.jpg";
  }
}

// all DOM
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// screen round, score, and result round
const score = document.querySelector("#score");
const round = document.querySelector("#round");
const roundResult = document.querySelector("#round-result");
const choiceResult = document.querySelector("#choice-result");

const computer = document.querySelector("#computer");
const human = document.querySelector("#human");

rockBtn.addEventListener("click", getHumanChoice);
paperBtn.addEventListener("click", getHumanChoice);
scissorsBtn.addEventListener("click", getHumanChoice);

// screen fight
const screenFight = document.querySelector("#fight-screen");
const humanResult = document.querySelector("#human-result");
const computerResult = document.querySelector("#computer-result");
