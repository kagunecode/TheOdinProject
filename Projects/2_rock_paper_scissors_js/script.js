function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let option = Math.floor(Math.random() * choices.length)
    return choices[option]
}

function getResult(playerChoice, computerChoice) {
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

function playGame(userName) {
    window.alert(`Welcome ${userName}! You will play 5 times against the CPU. Good luck!`)
    let userScore = 0;
    let cpuScore = 0;
    let draw = 0;
    for (let i=0; i < 5; i++) {
    let playerChoice = window.prompt(`Round ${i+1}: ${userName} please enter your choice!`)
    result = getResult(playerChoice, getComputerChoice())
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

playGame(window.prompt("Enter your name!"))