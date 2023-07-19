function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let option = Math.floor(Math.random() * choices.length)
    return choices[option]
}

function rpsGame(playerChoice, computerChoice) {
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
    console.log(`The CPU played ${computerChoice}`)
    if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
        return `${playerChoice} is not a valid option. Options are rock, paper or scissors`
    } else if (playerChoice === computerChoice) {
        return `It's a draw! You both played ${playerChoice}`
    } else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
    playerChoice == "Scissors" && computerChoice === "Paper" ||
    playerChoice == "Paper" && computerChoice === "Rock") {
        return `Congrats, you won! ${playerChoice} beats ${computerChoice}`
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }    
}

console.log(rpsGame(window.prompt("Enter your choice"), getComputerChoice()))