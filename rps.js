function computerPlay(){
    var item = ["rock","paper","scissor"];
    var randomNum = Math.floor(Math.random() * item.length);
    return item[randomNum];
}

function playRound(playerSelection, computerSelection) {
    var result;
 if (computerSelection == "rock" && playerSelection =="rock"){
     console.log("player:", playerSelection, "computer:", computerSelection);
     result = "it's a tie";
 }
 else if (computerSelection == "rock" && playerSelection =="paper"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "user wins!";
}
else if (computerSelection == "rock" && playerSelection =="scissor"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "computer wins!";
}
else if (computerSelection == "paper" && playerSelection =="paper"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "it's a tie";
}
else if (computerSelection == "paper" && playerSelection =="rock"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "computer wins!";
}
else if (computerSelection == "paper" && playerSelection =="scissor"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "user wins!";
}
else if (computerSelection == "scissor" && playerSelection =="scissor"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "it's a tie";
}
else if (computerSelection == "scissor" && playerSelection =="rock"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "user wins!";
}
else if (computerSelection == "scissor" && playerSelection =="paper"){
    console.log("player:", playerSelection, "computer:", computerSelection);
    result = "computer wins!";
}
else{
    console.log("error invalid user input: ", playerSelection);
}
 return result;
}

function game(){
    var countU=0, countC=0;
    for (let i = 0; i<5; i++){
        var playerSelection = prompt("rock / paper / scissor");
        var computerSelection = computerPlay();
        var sprintResult = playRound(playerSelection, computerSelection);
        if (sprintResult == "computer wins!"){
            countC++;
            console.log("Match ", i ,"computer wins!");
        }
        else if (sprintResult == "user wins!"){
            countU++;
            console.log("Match ", i ,"user wins!");
        }
        else if (sprintResult == "it's a tie"){
            console.log("Match ", i ,"is a tie..");
            // continue;
        }
        else{
            console.log("Error Occured");
        }
        }
    if(countC > countU){
        console.log("Computer Wins the game!!");
    }
    else if(countC < countU){
        console.log("User Wins the game!!");
    }
    else if(countC == countU){
        console.log("The game is a tie!!");
    }
}

game();
