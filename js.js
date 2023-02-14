/*let num1 = parseInt(prompt("Enter first number:"));
let operator = prompt("Enter an operator (+ - * /)");
let num2 = parseInt(prompt("Enter second number:"));*/

const displayText = document.querySelector('.display');


//displayText.style.backgroundColor = "light gray";

function add(x , y) {
    return x + y;
}

function substract(x , y) {
    return x - y;
}

function multiply (x , y) {
    return x * y;
}

function divide (x , y) {
    if (y !=0 )
        return x / y;
    else    
        alert("UNPOSSIBLE");
}

function operate(x , y , operation) {
    switch (operation) {
        case "+":
            return add (x , y);
            break;
        case "-":
            return substract (x , y);
            break;
        case "*":
            return multiply (x , y);
            break;
        case "/":
            return divide (x , y);
            break; 
        default:
            alert("Illegal operation");
    }
}

let clickedButton = "";
let displayValue = 0;
let operator = "";
let num1 = 0;
let num2 = 0;

const buttonNumbers = document.querySelectorAll('.numbers');
const buttonOperators = document.querySelectorAll('.operator');
const buttonEqual = document.querySelector("#equals");
const buttonClear = document.querySelector("#clear");
buttonNumbers.forEach((button) => {
    button.addEventListener('click', () => {
        displayText.textContent += button.id;
        displayValue = parseFloat(displayText.textContent);
    });
});

buttonOperators.forEach((button) => {
    button.addEventListener('click', () => {
        displayText.textContent = '';
        //displayText.textContent += button.id;
        num1 = displayValue;
        displayValue = 0;
        operator = button.id;
    });
});

buttonEqual.addEventListener('click', () => {
    displayText.textContent = '';
    num2 = displayValue;
    displayText.textContent = operate(num1,num2,operator);
    console.log("num2 = "+ num2);
    num1 = 0;
    num2 = 0;
    displayValue = parseFloat(displayText.textContent);
    operator = '';
});

buttonClear.addEventListener('click', () => {
    displayText.textContent = ' ';
    num1 = 0;
    num2 = 0;
    displayValue = 0;
    operator = '';
});



//console.log(operate(num1,num2,operator));