function game(myOption){
    const options = ["rock", "paper", "scissors"]
    const machineOption = options[Math.floor(Math.random()*2)];
    if(myOption == "scissors" && machineOption == "paper") {
        return "You Win!";
    } else if (myOption == "rock" && machineOption == "scissors") {
        return"You Win!";
    } else if( myOption == "paper" && machineOption == "rock") {
        return "You Win!";
    } else if (myOption == machineOption){
        return "There is a tie!";
    } else if(myOption !== "rock" && myOption !== "scissors" && myOption !== "paper" ){
        return "You are entering a wrong value, thanks for playing. try again later, and be sure that you are writing one of the options: rock, paper or scissors";
    } else {
        return "You lost";
    }
}

function letsPlay(){
    const input = document.getElementById("input-user-option");
    const value= input.value;

    const userOption = game(value);
    const resultGame = document.getElementById("ResultGame");
    resultGame.innerText = userOption;
}