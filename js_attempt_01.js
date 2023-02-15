/*let operandOne = parseInt(prompt("Enter first number:"));
let operator = prompt("Enter an operator (+ - * /)");
let operandTwo = parseInt(prompt("Enter second number:"));*/

const screen = document.querySelector('.display');


//screen.style.backgroundColor = "light gray";

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
let operandOne = 0;
let operandTwo = 0;
let operandTemp = 0;

/*function clearNumbers(){
    operandOne = undefined;
    operandTwo = undefined;
}*/
const buttonNumbers = document.querySelectorAll('.numbers');
const buttonOperators = document.querySelectorAll('.operator');
const buttonEqual = document.querySelector("#equals");
const buttonClear = document.querySelector("#clear");

//INPUT NUMBER
buttonNumbers.forEach((button) => {
    button.addEventListener('click', () => {
        screen.textContent += button.id;
        displayValue = parseFloat(screen.textContent);
        console.log("operandOne = "+ operandOne);
        console.log("operandTwo = "+ operandTwo);
    });
});

//INPUT OPERATOR
buttonOperators.forEach((button) => {
    button.addEventListener('click', () => {
        //RESOLVE WHAT'S ALREADY IN DISPLAY 
        operandTemp = 
        /*screen.textContent = operate(operandOne,operandTwo,operator);
        displayValue = parseFloat(screen.textContent);*/
        screen.textContent = '';
        //screen.textContent += button.id;
        operandOne = displayValue;
        displayValue = 0;
        operator = button.id;
        console.log("operandOne = "+ operandOne);
        console.log("operandTwo = "+ operandTwo);
    });
});

//RESOLVE BUTTON
buttonEqual.addEventListener('click', () => {
    screen.textContent = '';
    operandTwo = displayValue;
    screen.textContent = operate(operandOne,operandTwo,operator);
    console.log("operandOne = "+ operandOne);
    console.log("operandTwo = "+ operandTwo);
    operandOne = 0;
    operandTwo = 0;
    displayValue = parseFloat(screen.textContent);
    operator = '';

});

//CLEAR SCREEN BUTTON
buttonClear.addEventListener('click', () => {
    screen.textContent = ' ';
    operandOne = 0;
    operandTwo = 0;
    displayValue = 0;
    operator = '';
});

function resolve() {
    screen.textContent = '';
    screen.textContent = operate(operandOne,operandTwo,operator);
    console.log("operandOne = "+ operandOne);
    console.log("operandTwo = "+ operandTwo);
    operandOne = 0;
    operandTwo = 0;
    displayValue = parseFloat(screen.textContent);
    operator = '';
}

//console.log(operate(operandOne,operandTwo,operator));