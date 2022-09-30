const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = choiceList => {
    return choiceList[Math.floor(Math.random() * choiceList.length)];
}

let computerScore = 0;
let playerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return("Draw!")
    } else {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "Paper") {
                computerScore++;
                return(`You lost! ${computerSelection} beats ${playerSelection}.`);
            } else {
                playerScore++;
                return(`You won! ${playerSelection} beats ${computerSelection}`);
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "Scissors") {
                computerScore++;
                return(`You lost! ${computerSelection} beats ${playerSelection}.`);
            } else {
                playerScore++;
                return(`You won! ${playerSelection} beats ${computerSelection}`);
            }
        } else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "Rock") {
                computerScore++;
                return(`You lost! ${computerSelection} beats ${playerSelection}.`);
            } else {
                playerScore++;
                return(`You won! ${playerSelection} beats ${computerSelection}`);
            }
        } else {
            return("Wrong input!")
        }
    }
}

const game = () => {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound((prompt("Pick your poison!")), getComputerChoice(choices)));
    }
    if (computerScore === playerScore) {
        console.log("Final result: Draw!")
    } else if (computerScore > playerScore) {
        console.log("Final: You've lost...")
    } else {
        console.log("Final: You've won!")
    }
}

game();
