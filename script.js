//computerPlay() function will randomly return either 'rock', 'paper', 'scissors'.
function computerPlay(){
    const choice=["rock", "paper", "scissors"];
    let compChoice= Math.floor(Math.random()*choice.length);
    return choice[compChoice];
}

//playRound() function takes two parameters 'playerSelection' & 'computerSelection'- and then returns a string that declares the winner of the round.
function playRound(playerSelection, computerSelection){
    if ((playerSelection ==="rock" && computerSelection ==="paper")){
        return ("You lose!! Rock loses against paper.");
    }else if ((playerSelection ==="")){
        return("You lose!! Next time please type either rock/paper/scissors.");
    }else if ((playerSelection ==="rock" && computerSelection ==="scissors")){
        return("You win!! Rock beats scissors.");
    }else if ((playerSelection ==="paper" && computerSelection ==="rock")){
        return("You win!! Paper beats rock.");
    }else if ((playerSelection ==="paper" && computerSelection ==="scissors")){
        return ("You lose!! Paper loses against scissors.");
    }else if ((playerSelection ==="scissors" && computerSelection ==="paper")){
        return ("You win!! Scissor beats paper.");
    }else if ((playerSelection==="scissors" && computerSelection==="rock")){
        return ("You lose!! Scissors lose against rock.")
    }else {
        return ("It's a Tie!");
    }   
}

//playerInput variable collects input- 'rock' / 'paper' / 'scissors' from the player.
//playSelection variable ensures that the input remains 'case-insensitive' which means players can input 'rock', 'ROCK', 'RoCk' and other variations.
function game (){
    let playerInput= prompt("Type 'rock' / 'paper' / 'scissors'.");

    let playerSelection = playerInput.toLowerCase();
    //if (playerSelection!==['rock', 'paper', 'scissors']){
        //playerInput=prompt("Please type correct value again [HINT-'rock'/'paper'/'scissors']")
    //}
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




