const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = choiceList => {
    return choiceList[Math.floor(Math.random() * choiceList.length)];
}

let playerChoice;

let computerScore = 0;
let playerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    const winMessage = `You won! ${playerSelection} beats ${computerSelection}.`;
    const loseMessage = `You lost! ${computerSelection} beats ${playerSelection}.`;
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return("Draw!")
    } else {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "Paper") {
                computerScore++;
                return(loseMessage);
            } else {
                playerScore++;
                return(winMessage);
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "Scissors") {
                computerScore++;
                return(loseMessage);
            } else {
                playerScore++;
                return(winMessage);
            }
        } else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "Rock") {
                computerScore++;
                return(loseMessage);
            } else {
                playerScore++;
                return(winMessage);
            }
        } else {
            return("Wrong input!")
        }
    }
}

function game() {
    playerChoice = this.textContent;
    console.log(playRound(playerChoice, getComputerChoice(choices)));
    console.log(`${playerScore} vs. ${computerScore}`);
    if ((playerScore == 5) || (computerScore == 5)) {
        if (playerScore == 5) {
            alert("You win!");
        } else {
            alert("You lose...");
        }
        playerScore = 0;
        computerScore = 0;
    }
}

const rockElement = document.querySelector("#rock");
rockElement.addEventListener("click", game);

const paperElement = document.querySelector("#paper");
paperElement.addEventListener("click", game);

const scissorsElement = document.querySelector("#scissors");
scissorsElement.addEventListener("click", game);
    
    
