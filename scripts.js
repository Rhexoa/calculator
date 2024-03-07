const operations = {
    "sum": sum,
    "subtract": subtract,
    "multiply": multiply,
    "divide": divide,
}

function sum(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2==0){return "#DIV/0!"}
    return num1/num2;
}

let num1="", num2="";
let operationQueued = null;
const display = document.querySelector("#display");

function addInput(num){
    if (!operationQueued){
        num1 += num;
        display.textContent = num1;
    } else if (operationQueued){
        num2 += num;
        display.textContent = num2;
    }
}

function clearInput(){
    display.textContent="0";
    num1 = "";
    num2 = "";
    operationQueued = null;
}

function deleteInput(){
    if (!operationQueued){
        num1 = num1.slice(0, display.textContent.length-1);
        num1.length == 0 ? display.textContent = "0":
                            display.textContent = num1;
    } else if (operationQueued){
        num2 = num2.slice(0, display.textContent.length-1);
        num2.length == 0 ? display.textContent = "0":
                            display.textContent = num1;
    }
}

function operate(operation){
    if(operationQueued){
        equal();
    }
    operationQueued = operation;
}

function equal(){
    if(num1 && num2 && operationQueued) resolve();
    display.textContent = num1;
}

function resolve(){
    num1 = operations[operationQueued](parseFloat(num1), parseFloat(num2));
    num2 = "";
}

const numButtons = document.querySelectorAll(".number");
numButtons.forEach(button => 
    button.addEventListener('click', () => addInput(button.value))
)

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', ()=>clearInput());

const delButton = document.querySelector("#delete");
delButton.addEventListener('click', ()=>deleteInput());

const eqButton = document.querySelector("#equal");
eqButton.addEventListener('click', ()=>equal());

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach(button =>
    button.addEventListener('click', () => operate(button.id))
)

