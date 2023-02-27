const calculator = {
    displayValue: '0',
    displayText: "",
    firstOperand: null,
    secondOperand: null,
    temp: null,
    operator: null,
    operatorNext: null,
};

function updateDisplay(){
    const display = document.querySelector('.display');
    display.value = Math.round(calculator.displayText*100000)/100000;
}

function inputDigit(x) {
    const { firstOperand, secondOperand, displayValue, temp } = calculator
    
    calculator.displayValue = displayValue === 0 ? x : displayValue + x;
    calculator.displayText = calculator.displayValue;
    calculator.operator = calculator.operatorNext;
    if (temp != null)
    {
        calculator.firstOperand = temp;
        calculator.temp = null;
        calculator.secondOperand = null;
    }
}

//HANDLE OPERATOR
function inputOperator(input_op){
    calculator.operatorNext = input_op;
    if (calculator.firstOperand!=null)
    {
        equals();
    }
    else    
        calculator.firstOperand = parseFloat(calculator.displayValue);
    calculator.displayValue = '';
    
    console.log(calculator);
    
}

//EQUAL SIGN FUNCTION
function equals() {
    calculator.secondOperand = parseFloat(calculator.displayValue);
    calculator.temp = operate(calculator.firstOperand,calculator.secondOperand,calculator.operator);
    calculator.displayText = calculator.temp;
    console.log(calculator);
    
}

function addPeriod() {
    if (!calculator.displayText.includes('.'))
    {
        calculator.displayValue +='.'
        calculator.displayText = calculator.displayValue;
    }
}

function backspace() {
    if (calculator.displayText.length==1)
        calculator.displayValue ='0'
    else
        calculator.displayValue = calculator.displayValue.slice(0, -1);
    calculator.displayText = calculator.displayValue;
}

//RESOLVE OPERATION
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
        /*default:
            alert("Illegal operation");*/
    }
}

//CLEAR DISPLAY
function clearScreen() {
    calculator.displayValue = '';
}


//RESET CALCULATOR
function clear() {
    calculator.displayValue = 0;
    calculator.displayText = '0';
    calculator.firstOperand = null;
    calculator.secondOperand = null;
    calculator.temp = null;
    calculator.operator = null;
    calculator.operatorNext = null;
    console.log("clear called");
}

//ASSIGN BUTTONS TO VARIABLES
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal-sign");
const dotButton = document.querySelector(".dot");
const backButton = document.querySelector(".backspace");

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
        inputOperator(button.id);
        updateDisplay();
});
});

//CLEAR BUTTON 
clearButton.addEventListener('click', (e) => {
    clear();
    updateDisplay();
});

//EQUAL SIGN BUTTON 
equalButton.addEventListener('click', (e) => {
    equals();
    updateDisplay();
    clear();
});

//PERIOD BUTTON
dotButton.addEventListener('click', (e) => {
    addPeriod();
    updateDisplay();
});

//BACKSPACE BUTTON
backButton.addEventListener('click', (e) => {
    backspace();
    updateDisplay();
});

clear();

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
        return "lol";
}

