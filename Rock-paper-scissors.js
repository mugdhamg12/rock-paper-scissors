let player = 0;
let computer = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {

    let playerSelection = button.id;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result == 1) {
		player = player + 1;
	} else if (result == -1) {
		computer = computer + 1;
	}
	document.getElementById("score1").innerHTML = "Your Score: " + player;
	document.getElementById("score2").innerHTML = "Computer Score: " + computer;
	if ((player == 5) | (computer == 5)) {
		if (player == 5) {
			alert("You Won! Final Score: " + player + " - " + computer);
		} else {
			alert("You Lost! Final Score: "+ player + " - " + computer);
		}
		player = 0;
		computer = 0;
		document.getElementById("score1").innerHTML = "Your Score: " + player;
		document.getElementById("score2").innerHTML = "Computer Score: " + computer;
		document.getElementById("result").innerHTML = "New Game";
	}
  });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
	let computerResponse = getRandomInt(1, 3);
	let response;
	if (computerResponse == 1) {
		response = "rock";
	} else if (computerResponse == 2) {
		response = "paper";
	} else {
		response = "scissors";
	}
	return response;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	let outcome;
	let score = 3;
	if (playerSelection === "rock" && computerSelection === "rock") {
		outcome = "It's a Tie!";
		score = 0;
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		outcome = "You Lose! Paper beats Rock";
		score = -1;
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		outcome = "You Win! Rock beats Scissors";
		score = 1;
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		outcome = "You Win! Paper beats Rock";
		score = 1;
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		outcome = "It's a Tie!";
		score = 0;
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		outcome = "You Lose! Scissors beats Paper";
		score = -1;
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		outcome = "You Lose! Rock beats Scissors!";
		score = -1;
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		outcome = "You Win! Scissors beat Paper";
		score = 1;
	} else if (playerSelection === "scissors" && computerSelection === "scissors") {
		outcome = "It's a Tie!";
		score = 0;
	} else {
		outcome = "Error"
		score = 2;
	}
	document.getElementById("result").innerHTML = outcome;
	return score;
}