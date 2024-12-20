let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
}

function getHumanChoice() {
  let userInput;

  while (true) {
    userInput = prompt("Enter rock, paper, or scissors").toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      break;
    } else {
      alert("Invalid input! Please enter rock, paper or scissors.");
    }
  }

  return userInput;
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${capitalize(humanChoice)}`);
  console.log(`Computer chose: ${capitalize(computerChoice)}`);

  if (humanChoice === computerChoice) {
    console.log("It's a draw! Both chose " + humanChoice + ".");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(
      `You lose! ${capitalize(computerChoice)} beats ${capitalize(
        humanChoice
      )}.`
    );
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`
    );
    return;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playGame() {
  let round = 0;
  console.log("Welcome to Rock-Paper-Scissors! Best of 5 rounds!");

  while (round < 5) {
    console.log(`\nRound ${round + 1}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      humanScore++;
    } else if (
      (computerSelection === "rock" && humanSelection === "scissors") ||
      (computerSelection === "paper" && humanSelection === "rock") ||
      (computerSelection === "scissors" && humanSelection === "paper")
    ) {
      computerScore++;
    }
    round++;
  }

  console.log("\nGame Over!");
  console.log(`Final Scores: You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost! The computer won the game!");
  } else {
    console.log("It's a draw! No one wins.");
  }
}

playGame();
