//computerPlay() function will randomly return either 'rock', 'paper', 'scissors'.
function computerPlay(){
    const choice=["rock", "paper", "scissors"];
    let compChoice= Math.floor(Math.random()*choice.length);
    return choice[compChoice];
}

let winScore = 2;
let loseScore = 0;
let tieScore = 1;


//playRound() function takes two parameters 'playerSelection' & 'computerSelection'- and then returns a string that declares the winner of the round.
function playRound(playerSelection, computerSelection){
    if ((playerSelection ==="rock" && computerSelection ==="paper")){
        console.log("Player: "+loseScore, "Computer: "+winScore);
        return ("You lose!! Rock loses against paper.\n " );
    }else if ((playerSelection ==="")){
        console.log ("Player: "+loseScore, "Computer: "+winScore);
        return("You lose!! Next time please type either rock/paper/scissors.\n ");
    }else if ((playerSelection ==="rock" && computerSelection ==="scissors")){
        console.log ("Player: "+winScore, "Computer: "+loseScore);
        return("You win!! Rock beats scissors.\n ");
    }else if ((playerSelection ==="paper" && computerSelection ==="rock")){
        console.log ("Player: "+winScore, "Computer: "+loseScore);
        return("You win!! Paper beats rock.\n ");
    }else if ((playerSelection ==="paper" && computerSelection ==="scissors")){
        console.log ("Player: "+loseScore, "Computer: "+winScore);
        return ("You lose!! Paper loses against scissors.\n ");
    }else if ((playerSelection ==="scissors" && computerSelection ==="paper")){
        console.log ("Player: "+winScore, "Computer: "+loseScore);
        return ("You win!! Scissor beats paper.\n ");
    }else if ((playerSelection==="scissors" && computerSelection==="rock")){
        console.log ("Player: "+loseScore, "Computer: "+winScore);
        return ("You lose!! Scissors lose against rock.\n ")
    }else {
        console.log ("Player: "+tieScore, "Computer: "+tieScore);
        return ("It's a Tie!\n ");
    }   
}

//playerInput variable collects input- 'rock' / 'paper' / 'scissors' from the player.
//playSelection variable ensures that the input remains 'case-insensitive' which means players can input 'rock', 'ROCK', 'RoCk' and other variations.
function game (){
    let playerInput= prompt("Please type either 'rock' / 'paper' / 'scissors'.");

    let playerSelection = playerInput.toLowerCase();
    console.log("You selected: "+ playerSelection+ ".");

    let computerSelection = computerPlay();
        console.log("Computer selected: "+ computerSelection+ ".");

    playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }  
game();

game();
game();
game();
game();




