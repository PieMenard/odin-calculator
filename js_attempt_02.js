const calculator = {
    displayValue: '0',
    firstOperand: null,
    secondOperand: null,
    operator: null,
};

function updateDisplay(){
    const display = document.querySelector('.display');
    display.value = calculator.displayValue;
}

function inputDigit(x) {
    calculator.displayValue = calculator.displayValue === 0 ? x : calculator.displayValue + x;
}

//HANDLE OPERATOR
function inputOperator(){
    const inputValue = parseFloat(calculator.displayValue);

}

//RESOLVE OPERATION

function compute() {

}

function clear() {
    calculator.displayValue = 0;
    calculator.firstOperand = null;
    calculator.secondOperand = null;
    calculator.operator = null;
}

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal-sign");

//INPUT NUMBERS
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id);
        inputDigit(button.id);
        updateDisplay();
});
});

//INPUT OPERATOR
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id);
        updateDisplay();
});
});

//CLEAR BUTTON 
clearButton.addEventListener('click', (e) => {
    console.log(e.id);
    clear();
    updateDisplay();
});