function add(a, b) { 
    return a + b;
}

function subtract(a, b) { 
    return a - b;
}

function multiply(a, b) { 
    return a * b;   
}

function divide(a, b) { 
    return a / b;
}

const display = document.querySelector('#display');
const exec = display.innerText;

console.log(exec);

let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

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
    display.innerText += btn.innerText;

};

// const operatorBtn = (event) => { 
//     const op = event.target.innerText;
//     exec = x;
// };


document.querySelectorAll('.operand').forEach((button) => button.addEventListener('click', numberBtn));
// document.querySelectorAll('.operator').forEach((button) => button.addEventListener('click', operatorBtn));

