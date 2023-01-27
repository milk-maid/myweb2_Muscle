const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

function startGame() {
  console.log("Game is Starting...");
}

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK} ${PAPER} OR ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  //   if (cChoice === pChoice) {
  //     return RESULT_DRAW;
  //   } else if (
  //     (cChoice === ROCK && pChoice === PAPER) ||
  //     (cChoice === PAPER && pChoice === SCISSORS) ||
  //     (cChoice === SCISSORS && pChoice === ROCK)
  //   ) {
  //     return RESULT_PLAYER_WINS;
  //   } else {
  //     return RESULT_COMPUTER_WINS;
  //   }
};

console.log(typeof startGame);
console.dir(startGame);

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game Is Starting... ");
  const playerChoice = getPlayerChoice();
  console.log(`Player Chose : ${playerChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Computer Chose: ${computerChoice}`);
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  let message = `You picked ${playerChoice} while computer picked ${computerChoice}`;
  if (winner === RESULT_DRAW) {
    message = message + ` therefore NO WINNER`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ` therefore YOU na WINNER`;
  } else {
    message = message + ` ! you lost .'. COMPUTER na Boss`;
  }
  alert(message);
  gameIsRunning = false;
});

// NOT RELATED

const combined = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum, "The result after adding all numbers is: ");
};

// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combined(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  1,
  5,
  "fdsa",
  -3,
  6,
  10
);
combined(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combined(
  showResult.bind(this, "The result after subtracting all numbers is: "),
  "SUBTRACT",
  1,
  10,
  15,
  20
);
// console.log(subtractUp(1, 10, 15, 20));
// console.log(sumUp(showResult, 10, 20, 30, 40, 50, 60));
// console.log(sumUp(showResult, 20, 40, 60, 80, 100, 120, 140, 160, 180));

/*
const loadPerson = pName => ({name: pName});
console.log(loadPerson);
const person = {
    name: 'David',
    greeting : function greet() {  //functions in objects is called method
        console.log("you're welcome")
    }
};
person.greeting();
*/
