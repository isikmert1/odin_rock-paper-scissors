const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "tie";
    } 
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "player";
    }
    else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    const playerSelectionCapitalized = playerSelection[0].toUpperCase()+playerSelection.slice(1);
    const computerSelectionCapitalized = computerSelection[0].toUpperCase()+computerSelection.slice(1);
    if (result === "tie") {
        return "It's a Tie!";
    }
    else if (result === "player") {
        return `You Win! ${playerSelectionCapitalized} beats ${computerSelectionCapitalized}`;
    }
    else {
        return `You Lose! ${computerSelectionCapitalized} beats ${playerSelectionCapitalized}`;
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput === false) {
        const choice = prompt ("Rock ,Paper or Scissors?");
        if (choice === null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    let round = 0;
    console.log("Welcome to 5 Rounds of Rock, Paper, Scissors!")
    console.log("----------------------------------")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round: ${round += 1}`)
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) === "player"){
            scorePlayer++;
        } 
        else if(checkWinner(playerSelection, computerSelection) === "computer"){
            scoreComputer++;
        }
        console.log(`Player Score: ${scorePlayer} / Computer Score: ${scoreComputer}`)
        console.log("----------------------------------")
    }
    console.log("Game Over!")
    if(scorePlayer > scoreComputer){
        console.log("Congrats, You won the game!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Sorry, Computer was the winner of this game!");
    }
    else{
        console.log("We have a tie game!");
    }
}

game()


