let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;
const display = document.querySelector('#display');


function updateDisplay() { 
    display.innerText = displayValue;
    if (displayValue.length > 9) { 
        display.innerText = displayValue.substring(0, 9);
    }
}

updateDisplay();


function operate (x, y, op) { 
    if (op === '+') { 
        return x + y;
    } else if (op === '-') { 
        return x - y;
    } else if (op === '*') { 
        return x * y;
    } else if (op === '/') { 
        if (y === '0') { 
            return 'no';
        } else return x / y;
    }
}



const numberBtn = (event) => { 
    const btn = event.target;
    if (display.innerText === '0') { 
        display.innerText = '';
    }
    display.innerText += btn.innerText;
    displayValue = display.innerText;
    firstOperand = displayValue;
};

// const operatorBtn = (event) => { 
//     operator = event.target.innerText;
//     if (display.innerText !== '')
//     if (operator === '+') { 
//         result = firstOperand + secondOperand;
//     // } else if (operator === '-') { 
//     //     result = firstOperand - secondOperand;
//     // } else if (operator === '*') { 
//     //     result = firstOperand * secondOperand;
//     // } else if (operator)
// };


document.querySelectorAll('.operand').forEach((button) => button.addEventListener('click', numberBtn));
// document.querySelectorAll('.operator').forEach((button) => button.addEventListener('click', operatorBtn));
