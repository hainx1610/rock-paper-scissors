const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = choiceList => {
    return choiceList[Math.floor(Math.random() * choiceList.length)];
}
console.log(getComputerChoice(choices));