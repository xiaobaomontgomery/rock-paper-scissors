const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice, computerChoice, result;
possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    getComputerChoice();
    getResult();
  })
);

function getComputerChoice() {
  const choiceNumber = Math.floor(Math.random() * possibleChoice.length);
  switch (choiceNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "scissors";
      break;
    case 2:
      computerChoice = "paper";
      break;
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === userChoice) {
    resultDisplay.innerHTML = "it is a draw!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    resultDisplay.innerHTML = "you lost!";
  } else {
    resultDisplay.innerHTML = "you win!";
  }
}
