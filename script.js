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

const container =document.querySelector("#container");

console.dir(container.querySelectorAll("button"));

const array = Array.from(container.querySelectorAll("button"));
container.appendChild(array[0]);
container.appendChild(array[1]);
container.appendChild(array[2]);

array[0].addEventListener("click",() =>{
    let computerSelection = computerPlay();
    alert("You: "+"rock!" +  "\n" + "Computer: "+ computerSelection + "!");
});

array[1].addEventListener("click",() =>{
    let computerSelection = computerPlay();
    alert("You: "+"paper!" +  "\n" + "Computer: "+ computerSelection + "!");
});

array[2].addEventListener("click",() =>{
    let computerSelection = computerPlay();
    alert("You: "+"scissors!" +  "\n" + "Computer: "+ computerSelection + "!");
});



//playRound() function takes two parameters 'playerSelection' & 'computerSelection'- and then returns a string that declares the winner of the round.
// function playRound(playerInput, computerSelection){
//     switch (true){
//         case ((playerInput =rockBtn && computerSelection ==="paper")):
//         playerScore=losePoint, computerScore=winPoint;
//         console.log ("You lose this round!! Paper wraps rock." );
//         break;
        
//         // case ((playerSelection ==="")):
//         // playerScore=losePoint, computerScore=winPoint;
//         // console.log("You lose this round!! Next time please type rock or paper or scissors.");
//         // break;

//         case ((playerInput =rockBtn && computerSelection ==="scissors")):
//         playerScore=winPoint, computerScore=losePoint;
//         console.log("You've won this round!! Rock crushes scissors.");
//         break;

//         case((playerInput =paperBtn && computerSelection ==="rock")):
//         playerScore=winPoint, computerScore=losePoint;
//         console.log("You've won this round!! Paper wraps rock.");
//         break;

//         case((playerInput =paperBtn && computerSelection ==="scissors")):
//         playerScore=losePoint, computerScore=winPoint;
//         console.log("You've won the round!! Scissors cuts paper.");
//         break;

//         case((playerInput =scissorBtn && computerSelection ==="paper")):
//         playerScore=winPoint, computerScore=losePoint;
//         console.log("You've won the round!! Scissors cuts paper.");
//         break;

//         case((playerInput=scissorBtn && computerSelection==="rock")):
//         playerScore=losePoint, computerScore=winPoint;
//         console.log ("You lose this round!! Rock crushes scissors.");
//         break;

//         default:
//         playerScore=tiePoint, computerScore=tiePoint;
//         console.log ("It's a Tie!");
//         break;
//     }   
// }

// playRound()
// //scoreCounter() keeps score & adds previous round's score (cumulative)
// function scoreCounter(){
//     totalPlayerScore=playerScore+totalPlayerScore;
//     totalComputerScore=computerScore+totalComputerScore;
//     console.log("You: "+totalPlayerScore, "Computer: "+totalComputerScore);
// }

// //playerInput variable collects input- 'rock' / 'paper' / 'scissors' from the player.
// //playSelection variable ensures that the input remains 'case-insensitive' which means players can input 'rock', 'ROCK', 'RoCk' and other variations.
// function game (){
//     let playerInput= [rockBtn,paperBtn,scissorBtn]

//     console.log("You: "+ playerInput + "!");

//     let computerSelection = computerPlay();
//         console.log("Computer: "+ computerSelection + "!");

//     let roundResult=playRound(playerInput, computerSelection);
//         roundResult;
//         scoreCounter();
//     }  

//Rules Popup.
// alert("Rules: \n\n 1. Before beginning this game press f12 to open console.\n 2. There are 5 rounds in this game. \n 3. If you win a round, you gain 2 points. \n 4. If you lose a round, you gain 0 points. \n 5. If there is a tie, you gain 1 points. \n 6. If you don't enter anything, you lose that round. \n 7. In order to win this game, your score in the final round must be\n      more than final round score of computer. \n 8. Press f5 to reset the game.");

//Ensures 5 rounds of game.
// for (let i=0; i<5; i++){
//     game();
//     console.log("\n");
// }


// if (totalPlayerScore>totalComputerScore){
//     console.log ("Congratulations!! You win.");
// } else if (totalPlayerScore<totalComputerScore){
//     console.log ("Computer Wins!! You lose.");
// } else {
//     console.log ("It's a Tie!! Play again.");
// }



