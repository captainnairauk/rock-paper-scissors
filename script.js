function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
}

console.log(getComputerChoice());
