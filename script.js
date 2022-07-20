 
//const playerSelection = prompt("Please Chose one: Rock, Paper, Scissors.").toLowerCase();
const computerSelection = getComputerChoice();

function game(){
    let compWin = 0;
    let playerWin = 0;
    let plays = 0;
    let compChoice = computerSelection.toUpperCase();

    while(plays < 5){
        if(playRound(computerSelection) === "You Lose."){
            alert(`You lost this round. The computer chose: ${compChoice}` );
            compWin += 1;
        }else{
            alert(`You won this round! The computer chose: ${compChoice}`);
            playerWin += 1;
        }
        
        plays++;
    }

    if(compWin > playerWin){
        alert(`You lost ${compWin} : ${playerWin}`)
    }else{
        alert(`YOU WIN! GG! ${playerWin} : ${compWin}`)
    }
}

function playRound(computer){
    let player = prompt("Please Choose one: Rock Paper, Scissors.\nP.S. Tie goes to you.").toLowerCase(); 
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


game();