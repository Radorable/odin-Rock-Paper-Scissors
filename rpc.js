// random number between 1 and 3
// 1 = rock, 2 = paper, 3 = scissors
let number = Math.floor(Math.random() * (4 - 1) + 1);
console.log("The number is " + number);

//rock, paper, scissors values to compare with the human
let rock = 0;
let paper = 0;
let scissors = 0;

// choices
let computerChoice;
let humanChoice;

// Scores
let humanScore = 0;
let computerScore = 0;

// through random numbers, assign to rock, paper, and
// scissors a value to be able to compare with human
function getComputerChoice() {
    if (number == 1) {
        paper++;
        scissors--;
       return computerChoice = rock;
    } else if (number == 2) {
        scissors++;
        rock--;
        return computerChoice = paper;
    } else {
        rock++;
        paper--;
        return computerChoice = scissors;
    }
}

//through human's answer, convert the appropriate string
// to his appropriate value
function getHumanChoice() {
    humanChoice = prompt("give me your choice", "");
    humanChoice = humanChoice.toLowerCase();
    console.log("human choice is lowercase : " + humanChoice);
    if (humanChoice == "rock") {
        return humanChoice = rock;
    } else if (humanChoice == "paper") {
        return humanChoice = paper;
    } else if (humanChoice == "scissors") {
        return humanChoice = scissors;
    } else {
        alert("something is wrong");
    }
}

// compare
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return alert("same !");
    } else if (humanChoice > computerChoice) {
        return alert("you win !");
    } else if (humanChoice < computerChoice) {
        return alert("you lose !");
    } else {
        return alert("something is wrong somewhere");
    }
}


console.log(getComputerChoice());
console.log("rock is " + rock);
console.log("paper is " + paper);
console.log("scissors is " + scissors);
console.log("");
console.log(getHumanChoice());
console.log("humanchoice is " + humanChoice);

console.log(playRound(humanChoice, computerChoice));