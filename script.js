let counter = 0;
let winCount = 0;
let loseCount = 0;
let choice; 
let computerSelection = getComputerChoice();

const displayResults = document.querySelector('.content');
const round = document.querySelector('.round');
const wins = document.querySelector('.win-count');
const loses = document.querySelector('.lose-count');


const btnRock = document.getElementById('rock');
btnRock.addEventListener('click', () => {
    counter++;
    playRound("rock",computerSelection)
});

const btnPaper = document.getElementById('paper');
btnPaper.addEventListener('click', () => {
    counter++;
    playRound('paper', computerSelection)
});

let btnScissors = document.getElementById('scissors');
btnScissors.addEventListener('click', () => {
    counter++
    playRound('scissors', computerSelection)
});

const whoWon = document.createElement('div');
whoWon.classList.add('winner');

const roundNum = document.createElement('div');
roundNum.classList.add('roundNum');
roundNum.textContent = counter;
round.appendChild(roundNum);

const winPlus = document.createElement('div');
winPlus.classList.add('win-count-sub');
// winPlus.textContent = winCount;
wins.appendChild(winPlus);

const losePlus = document.createElement('div');
losePlus.classList.add('lose-count-sub');
// losePlus.textContent = winCount;
loses.appendChild(losePlus);





function getComputerChoice(){

    choice = Math.floor(Math.random() * 3 ) + 1;

    switch (choice){
        case 1:
            choice = "rock"
            return choice;
        case 2:
            choice = "paper"
            return choice;
        case 3:
            choice = "scissors"
            return choice;
    }

}

function playRound(playerIn, computerSelection){
    
    let result;
    
    while(playerIn === computerSelection){
        computerSelection = getComputerChoice();
    }

   switch(playerIn){
    case "rock":
        result = (computerSelection === "paper") ? "You Lose." :  "YOU WIN!";
        (result === "You Lose.") ? loseCount++ : winCount++;
        losePlus.textContent = loseCount;
        winPlus.textContent = winCount;
        whoWon.textContent = result;   
        console.log(result);
        console.log("wins: " +winCount+ "loses: :" + loseCount);
       break;
    case "paper":
        result = (computerSelection === "rock") ? "YOU WIN!" : "You Lose.";
        (result === "You Lose.") ? loseCount++ : winCount++;
        losePlus.textContent = loseCount;
        winPlus.textContent = winCount;
        whoWon.textContent = result;   
        console.log(result);
        console.log("wins: " +winCount+ "loses: :" + loseCount);
        break;
    case "scissors":
        result = (computerSelection === "rock") ? "You Lose." : "YOU WIN!";
        (result === "You Lose.") ? loseCount++ : winCount++;
        losePlus.textContent = loseCount;
        winPlus.textContent = winCount;
        whoWon.textContent = result;   
        console.log(result);
        console.log("wins: " +winCount+ "loses: :" + loseCount);
        break;
   }
  
   displayResults.appendChild(whoWon);
   roundNum.textContent = counter;
}



function game(){
    let compWin = 0;
    let playerWin = 0;
    let plays = 0;
   

    // while(plays < 5){
    //     if(playRound(computerSelection) === "You Lose."){
    //         alert(`You lost this round. The computer chose: ${choice}` );
    //         compWin += 1;
    //     }else{
    //         alert(`You won this round! The computer chose: ${choice}`);
    //         playerWin += 1;
    //     }
        
    //     plays++;
    // }

    if(compWin > playerWin){
        alert(`You lost ${compWin} : ${playerWin}`)
    }else{
        alert(`YOU WIN! GG! ${playerWin} : ${compWin}`)
    }
}
// game();
console.log("wins: " +winCount+ "loses: :" + loseCount);