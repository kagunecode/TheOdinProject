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

function game(userName) {
    let userScore = 0;
    let cpuScore = 0;
    let draw = 0;
    for (let i=0; i < 5; i++) {
    let pChoice = window.prompt(`${userName} please enter your choice!`)
    result = rpsGame(pChoice, getComputerChoice())
    if (result.includes("won")) {
        userScore++;
    } else if (result.includes("lose")) {
        cpuScore++;
    } else {
        draw++;
    }
    console.log(result)
    console.log(`User: ${userScore}   ||  CPU: ${cpuScore}    ||    Draws: ${draw}`)
    }
}

game(window.prompt("Enter your name!"))