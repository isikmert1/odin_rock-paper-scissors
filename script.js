function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"]
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionCapitilazed = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerSelectionCapitilazed = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    if (playerSelectionCapitilazed === computerSelectionCapitilazed) {
        console.log(`It's a tie! You both choose ${playerSelectionCapitilazed || computerSelectionCapitilazed}`);
        return "Tie";
    }
    else if (playerSelectionCapitilazed === "Rock" && computerSelectionCapitilazed ==="Scissors" || 
        playerSelectionCapitilazed === "Paper" && computerSelectionCapitilazed ==="Rock" ||
        playerSelectionCapitilazed === "Scissors" && computerSelectionCapitilazed ==="Paper") {
            console.log(`You Win! ${playerSelectionCapitilazed} beats ${computerSelectionCapitilazed}`);
            return "Win";
    } else {
        console.log(`You Lose! ${computerSelectionCapitilazed} beats ${playerSelectionCapitilazed}`);
        return "Lose";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Round " + (i + 1) + ": Rock, Paper, or Scissors?", "").toLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "Win") {
            playerScore += 1;
        } else if (roundResult === "Lose") {
            computerScore += 1;
        }
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        console.log("---------------------------------------")
    }
    if (playerScore > computerScore) {
        console.log("Congrats, You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game! Try again.");
    } else {
        console.log("It's a tie game!, Maybe next time.");
    }
}

game();
