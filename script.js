//computerPlay() function will randomly return either 'rock', 'paper', 'scissors'.
function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    let compChoice = Math.floor(Math.random() * choice.length);
    return choice[compChoice];
}

let winPoint = 2;
let losePoint = 0;
let tiePoint = 1;
let playerScore = 0;
let computerScore = 0;
let totalPlayerScore = 0;
let totalComputerScore = 0;
let x = 0;
let round=x/2;

const container = document.querySelector("#buttons-container");

const array = Array.from(container.querySelectorAll("button"));

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    window.location.reload(true);
})

function game() {
    function rockBtn() {
        let computerSelection = computerPlay();
        switch (true) {
            case (computerSelection === "rock"):
                playerScore = tiePoint, computerScore = tiePoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "It's a Tie!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break; 
            case (computerSelection === "paper"):
                playerScore = losePoint, computerScore = winPoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "You lose! Paper wraps Rock!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break;
            default:
                playerScore = winPoint, computerScore = losePoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "You win! Rock crushes Scissors!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break; 
        }

    }
    array[0].addEventListener("click", rockBtn);

    function paperBtn() {
        let computerSelection = computerPlay();
        switch (true) {
            case (computerSelection === "paper"):
                playerScore = tiePoint, computerScore = tiePoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "It's a Tie!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break;
            case (computerSelection === "rock"):
                playerScore = winPoint, computerScore = losePoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "You win! Paper wraps Rock!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break;
            default:
                playerScore = losePoint, computerScore = winPoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "You lose! Scissors cuts Paper!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break;
        }
    }
    array[1].addEventListener("click", paperBtn);

    function scissorBtn() {
        let computerSelection = computerPlay();
        switch (true) {
            case (computerSelection === "scissors"):
                playerScore = tiePoint, computerScore = tiePoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "It's a Tie!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break;
            case (computerSelection === "paper"):
                playerScore = winPoint, computerScore = losePoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "You win! Scissors cuts Paper!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break;
            default:
                playerScore = losePoint, computerScore = winPoint;
                totalPlayerScore = playerScore + totalPlayerScore;
                totalComputerScore = computerScore + totalComputerScore;
                x = totalPlayerScore + totalComputerScore;
                document.getElementById("you").innerHTML = "You: " + totalPlayerScore;
                document.getElementById("computer").innerHTML = "Computer: " + totalComputerScore;
                document.getElementById("roundResult").innerHTML = "You lose! Rock crushes Scissors!";
                if (x>=10){
                    array[0].disabled = true;
                    array[1].disabled = true;
                    array[2].disabled = true;
                    if (totalPlayerScore > totalComputerScore) {
                        alert("Congratulations!! You win.");
                    } else if (totalPlayerScore < totalComputerScore) {
                        alert("Computer Wins!! You lose.");
                    } else {
                        alert("It's a Tie!! Play again.");
                    }
                } else{
                    array[0].disabled = false;
                    array[1].disabled = false;
                    array[2].disabled = false;

                }
                break; 
        }
    }
    array[2].addEventListener("click", scissorBtn);

}

game();


//Rules Popup.
alert("Rules: \n 1. There are 5 rounds in this game. \n 2. Every click represents a Round. \n 3. If you win a round, you gain 2 points. \n 4. If you lose a round, you gain 0 points. \n 5. If there is a tie, you gain 1 point. \n 6. In order to win this game, your score in the final round must be\n      more than final round score of computer. \n 7. Press 'reset' to reset the game.");








