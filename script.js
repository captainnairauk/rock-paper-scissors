//computerPlay() function will randomly return either 'rock', 'paper', 'scissors'.
function computerPlay(){
    const choice=["rock", "paper", "scissors"];
    let compChoice= Math.floor(Math.random()*choice.length);
    return choice[compChoice];
}

let winPoint = 2;
let losePoint = 0;
let tiePoint = 1;
let playerScore =0;
let computerScore =0;
let totalPlayerScore=0;
let totalComputerScore=0;

//playRound() function takes two parameters 'playerSelection' & 'computerSelection'- and then returns a string that declares the winner of the round.
function playRound(playerSelection, computerSelection){
    if ((playerSelection ==="rock" && computerSelection ==="paper")){
        playerScore=losePoint, computerScore=winPoint;    
        return ("You lose this round!! Paper wraps rock." );
    }else if ((playerSelection ==="")){
        playerScore=losePoint, computerScore=winPoint;
        return("You lose this round!! Next time please type rock or paper or scissors.");
    }else if ((playerSelection ==="rock" && computerSelection ==="scissors")){
        playerScore=winPoint, computerScore=losePoint;
        return("You've won this round!! Rock crushes scissors.");
    }else if ((playerSelection ==="paper" && computerSelection ==="rock")){
        playerScore=winPoint, computerScore=losePoint;
        return("You've won this round!! Paper wraps rock.");
    }else if ((playerSelection ==="paper" && computerSelection ==="scissors")){
        playerScore=losePoint, computerScore=winPoint;
        return ("You've won the round!! Scissors cuts paper.");
    }else if ((playerSelection ==="scissors" && computerSelection ==="paper")){
        playerScore=winPoint, computerScore=losePoint;
        return ("You've won the round!! Scissors cuts paper.");
    }else if ((playerSelection==="scissors" && computerSelection==="rock")){
        playerScore=losePoint, computerScore=winPoint;
        return ("You lose this round!! Rock crushes scissors.")
    }else {
        playerScore=tiePoint, computerScore=tiePoint;
        return ("It's a Tie!");
    }   
}
//scoreCounter() keeps score & adds previous round's score (cumulative)
function scoreCounter(){
    totalPlayerScore=playerScore+totalPlayerScore;
    totalComputerScore=computerScore+totalComputerScore;
    console.log("You: "+totalPlayerScore, "Computer: "+totalComputerScore);
}

//playerInput variable collects input- 'rock' / 'paper' / 'scissors' from the player.
//playSelection variable ensures that the input remains 'case-insensitive' which means players can input 'rock', 'ROCK', 'RoCk' and other variations.
function game (){
    let playerInput= prompt("Please type either 'rock' / 'paper' / 'scissors'.");

    let playerSelection = playerInput.toLowerCase();
    console.log("You: "+ playerSelection + "!");

    let computerSelection = computerPlay();
        console.log("Computer: "+ computerSelection + "!");

    let roundResult=playRound(playerSelection, computerSelection);
        console.log(roundResult);
        scoreCounter();
    }  
//Rules Popup.
alert("Rules: \n\n 1. Before beginning this game press f12 to open console.\n 2. There are 5 rounds in this game. \n 3. If you win a round, you gain 2 points. \n 4. If you lose a round, you gain 0 points. \n 5. If there is a tie, you gain 1 points. \n 6. If you don't enter anything, you lose that round. \n 7. In order to win this game, your score in the final round must be\n      more than final round score of computer. \n 8. Press f5 to reset the game.");

//Ensures 5 rounds of game.
for (let i=0; i<5; i++){
    game();
    console.log("\n");
}

if (totalPlayerScore>totalComputerScore){
    console.log ("Congratulations!! You win.");
} else if (totalPlayerScore<totalComputerScore){
    console.log ("Computer Wins!! You lose.");
} else {
    console.log ("It's a Tie!! Play again.");
}



