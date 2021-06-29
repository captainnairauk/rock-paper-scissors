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

function gameScore(){
    console.log ("You: "+playerScore, "Computer: "+computerScore);
}

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

for (let i=0; i<5; i++){
    game();
    console.log("\n");
}




