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

let operand;
let operand2;
let operator;

function operate(operand, operator, operand2) { 
    add();
}

const numberBtn = (event) => { 
    const outputField = document.querySelector('#output');
    const btn = event.target;
    outputField.value += btn.innerText;
};
document.querySelectorAll('.operand').forEach((button) => button.addEventListener('click', numberBtn));
