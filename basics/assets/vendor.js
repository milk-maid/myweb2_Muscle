const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

let currentResult = 0;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// trying out objects in a separate function
function writeToLog(operation, prevNum, enteredNum, result) {
  const logEntry = {
    operation: operation,
    prevNum: prevNum,
    newValue: enteredNum,
    currentResult: result
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  console.log(logEntry);
}

// function add(){
//   // const enteredNum = parseInt(userInput.value);
//   const enteredNum = getUserInput();
//   const calcDescription = `${currentResult} + ${enteredNum}`
//   currentResult += enteredNum;
//   outputResult(currentResult, calcDescription);
// }

function calculateResult(calcType) {
  const enteredNum = getUserInput();
  if (calcType !== 'Add' && 
      calcType !== 'Subtract' && 
      calcType !== 'Multiply' && 
      calcType !== 'Divide' || 
      !enteredNum) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calcType === 'Add') {
    currentResult += enteredNum;
    mathOperator = '+';
  } else if(calcType === 'Subtract') {
    currentResult += enteredNum;
    mathOperator = '-';
  } else if(calcType === 'Multiply') {
    currentResult += enteredNum;
    mathOperator = '*';
  } else if(calcType === 'Divide') {
    currentResult += enteredNum;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNum);
  writeToLog(calcType, initialResult, enteredNum, currentResult);
}

function add() {
  calculateResult('Add');
  // const enteredNum = getUserInput();
  // const initialResult = currentResult;
  // currentResult += enteredNum;
  // createAndWriteOutput('+', initialResult, enteredNum);
  // writeToLog('Add', initialResult, enteredNum, currentResult);
}

function subtract() {
  calculateResult('Subtract');
}

function multiply() {
  calculateResult('Multiply');
}

function divide() {
  calculateResult('Divide');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
