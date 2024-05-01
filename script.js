
let yourScore = 0;
let computerScore = 0;
let round = 0;


const choices = document.querySelectorAll(".choice");
const yourscore = document.getElementById("yourscore");
const computerscore = document.getElementById("computerscore");
const totalround = document.getElementById("round");
const msg = document.getElementById("msg");
const resetbtn = document.getElementById("reset");

// user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        round++;
        totalround.innerText = round;
    })
})


const drawGame = (userChoice, compChoice) => {
    msg.innerHTML = `It's Draw! <b>${compChoice}</b> can't Beat <b>${userChoice}</b>, Click another choice for next round or Click Reset for Start new game`;
    msg.style.color = "black";
    console.log("draw");
}


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        yourScore++
        yourscore.innerText = yourScore;
        msg.innerHTML = `Hurray! Your <b>${userChoice}</b> beat <b>${compChoice}</b>, Click another choice for next round or Click Reset for Start new game`;
        msg.style.color = "green";
        console.log("You win");
    } else {
        computerScore++
        computerscore.innerText = computerScore;
        msg.innerHTML = `You Lose! <b>${compChoice}</b> Beat Your <b>${userChoice}</b>, Click another choice for next round or Click Reset for Start new game`;
        msg.style.color = "red";
        console.log("You lose");
    }
}



const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genComputerChoice();
    console.log(compChoice);

    if (compChoice === userChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

// computer choice
genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

// reset score button
resetbtn.addEventListener("click", () => {
    yourScore = 0;
    computerScore = 0;
    round = 0;
    totalround.innerText = 0;
    yourscore.innerText = yourScore;
    computerscore.innerText = computerScore;
    msg.innerHTML = "Scores have been reset. Click a choice to start a new game. It's going to be funny and Enjoy the game";
    msg.style.color = "black";
});