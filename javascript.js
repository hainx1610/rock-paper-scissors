const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = choiceList => {
    return choiceList[Math.floor(Math.random() * choiceList.length)];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return("Draw!")
    } else {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "Paper") {
                return(`You lost! ${computerSelection} beats ${playerSelection}.`);
            } else {
                return(`You won! ${playerSelection} beats ${computerSelection}`);
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "Scissors") {
                return(`You lost! ${computerSelection} beats ${playerSelection}.`);
            } else {
                return(`You won! ${playerSelection} beats ${computerSelection}`);
            }
        } else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "Rock") {
                return(`You lost! ${computerSelection} beats ${playerSelection}.`);
            } else {
                return(`You won! ${playerSelection} beats ${computerSelection}`);
            }
        } else {
            return("Wrong input!")
        }
    }
}

console.log(playRound((prompt("Pick your poison!")), getComputerChoice(choices)));

