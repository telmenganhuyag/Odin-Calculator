// let displayValue = '0';
// let firstOperand = null;
// let secondOperand = null;
// let operator = null;
// let result;
// const display = document.getElementById('display');

// function updateDisplay() {
//   if (displayValue.length > 9) {
//     display.innerText = displayValue.substring(0, 9);
//   } else { 
//     display.innerText = displayValue;
//   }
// }

// updateDisplay();

// function addNum(e) {
//   const button = e.target.innerText;
//   if (displayValue === firstOperand) displayValue = '';
//   if (displayValue === '0') displayValue = '';
//   displayValue += button;
//   updateDisplay();
//   if (firstOperand !== null) { 
//     secondOperand = displayValue;
//   }
//   console.log(firstOperand);
//   console.log(secondOperand);
//   console.log(operator);
// }

// function onOperator(e) {
//   const button = e.target.innerText;
//   operator = button;
//   firstOperand = displayValue;
//   displayValue = '0';
//   // displayValue = firstOperand;
//   updateDisplay();
// }

// function operate() {
//   const x = parseFloat(firstOperand);
//   const y = parseFloat(secondOperand);
//   if (operator === '+') {
//     result = x + y;
//   } else if (operator === '-') {
//     result = x - y;
//   } else if (operator === '*') {
//     result = x * y;
//   } else if (operator === '/') {
//     if (y === '0') {
//       result = 'no';
//     } else result = x / y;
//   }
//   displayValue = result.toString();
//   updateDisplay();
// }

// function clearBtn() {
//   displayValue = '0';
//   firstOperand = null;
//   secondOperand = null;
//   operator = null;
//   result = 0;
//   updateDisplay();
// }

// document
//   .querySelectorAll('.operand')
//   .forEach((button) => button.addEventListener('click', addNum));
// document
//   .querySelectorAll('.operator')
//   .forEach((button) => button.addEventListener('click', onOperator));
// document.getElementById('clear').addEventListener('click', clearBtn);
// document
//   .querySelector('.equal')
//   .addEventListener('click', operate);


let displayValue = '0'; // Change to string to concatenate digits easily
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result;
const display = document.getElementById('display');

function updateDisplay() {
  if (displayValue.length > 9) {
    display.innerText = displayValue.substring(0, 9);
  } else {
    display.innerText = displayValue;
  }
}

updateDisplay();

function addNum(e) {
  const button = e.target.innerText;
  if (displayValue === firstOperand) displayValue = '';
  if (displayValue === '0') displayValue = '';
  displayValue += button;
  updateDisplay();
  if (firstOperand !== null) {
    secondOperand = displayValue;
  }
  console.log("First Operand:", firstOperand);
  console.log("Second Operand:", secondOperand);
  console.log("Operator:", operator);
}

function onOperator(e) {
  const button = e.target.innerText;
  operator = button;
  if (button === 'X') operator = '*';
  firstOperand = displayValue;
  // displayValue = '0'; // Reset displayValue for the next operand
  displayValue = firstOperand;
  updateDisplay();
  console.log("Operator selected:", operator);
}

function operate() {
  if (firstOperand === null || secondOperand === null || operator === null) {
    return;
  }
  const x = parseFloat(firstOperand);
  const y = parseFloat(secondOperand);
  console.log("Operating on:", x, y, operator);
  if (operator === '+') {
    result = x + y;
  } else if (operator === '-') {
    result = x - y;
  } else if (operator === '*') {
    result = x * y;
  } else if (operator === '/') {
    if (y === 0) {
      result = 'no';
    } else {
      result = x / y;
    }
  }
  displayValue = result.toString();
  firstOperand = displayValue;
  secondOperand = null;
  operator = null;
  updateDisplay();
  console.log("Result:", result);
}

function clearBtn() {
  displayValue = '0';
  firstOperand = null;
  secondOperand = null;
  operator = null;
  result = 0;
  updateDisplay();
}

document
  .querySelectorAll('.operand')
  .forEach((button) => button.addEventListener('click', addNum));
document
  .querySelectorAll('.operator')
  .forEach((button) => button.addEventListener('click', onOperator));
document.getElementById('clear').addEventListener('click', clearBtn);
document
  .querySelector('.equal')
  .addEventListener('click', operate);