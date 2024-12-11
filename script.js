function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
}

function getHumanChoice(){
    let userInput;

    while(true){
        userInput = prompt("Enter rock, paper, or scissors").toLowerCase();
        if((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")){
            break;
        }else{
            alert("Invalid input! Please enter rock, paper or scissors.");
        }
    }

    return userInput;
}

console.log(getHumanChoice());
console.log(getComputerChoice());

