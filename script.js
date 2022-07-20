 
const playerSelection = prompt("Please Chose one: Rock, Paper, Scissors.").toLowerCase();
const computerSelection = getComputerChoice();


function playRound(player, computer){

    let result;
    
    if(player === computer){
        return result = "Tie";
    }

   switch(player){
    case "rock":
        return result = (computer === "paper") ? "You Lose." :  "YOU WIN!" ;
         
    case "paper":
            return result = (computer === "rock") ? "YOU WIN!" : "You lose.";

    case "siccors":
            return result = (computer === "rock") ? "You Lose." : "YOU WIN!";
   }

}



function getComputerChoice(){

    let choice = Math.floor(Math.random() * 3 ) + 1;

    switch (choice){
        case 1:
            choice = "Rock"
            return choice.toLowerCase();
        case 2:
            choice = "Paper"
            return choice.toLowerCase();
        case 3:
            choice = "Scissors"
            return choice.toLowerCase();
    }

}




console.log(playRound(playerSelection,computerSelection));