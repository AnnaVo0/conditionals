// Part 1 - Variable Declarations
let userChoice = prompt("heads or tails");
let randomNumber = Math.round(Math.random());
let computerChoice;

// Part 2 - Variable Declarations
const birthYear = prompt("What is your year of birth?");
let age = (2024 - birthYear);

// Part 1 - computerChoice heads or tails assignment
if (randomNumber === 0) {
    computerChoice = "heads";
} else if (randomNumber === 1) {
    computerChoice = "tails";
}

// Part 1 - Compare userChoice and computerChoice
if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else if (userChoice !== computerChoice) {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

// Part 2 - Age conditionals
if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age == 21) {
    alert("You are old enough to drink in the US...barely");
} else if (age < 21) {
    alert("Sorry, you are not old enough to drink in the US");
}