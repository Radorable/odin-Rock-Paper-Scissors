let number = Math.floor(Math.random() * (4 - 1) + 1);
console.log("The number is " + number);

let rock = 0;
let paper = 0;
let scissors = 0;

let computerChoice;
let userChoice;

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

function getHumanChoice() {
    userChoice = prompt("give me your choice", "");
    console.log(userChoice);
    if (userChoice == "rock") {
        return userChoice = rock;
    } else if (userChoice == "paper") {
        return userChoice = paper;
    } else {
        return userChoice = scissors;
    }
}


console.log(getComputerChoice());
console.log("rock is " + rock);
console.log("paper is " + paper);
console.log("scissors is " + scissors);
console.log("");
console.log(getHumanChoice());
console.log("userchoice is " + userChoice);