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
let clearQueued = null;
const display = document.querySelector("#display");

function clearInput(){
    display.textContent="0";
    num1 = "";
    num2 = "";
    operationQueued = null;
    clearQueued = false;
}
function addInput(num){
    if (clearQueued) {
        clearInput();
    }
    if (!operationQueued){
        num1 += num;
        display.textContent = num1;
    } else if (operationQueued){
        num2 += num;
        display.textContent = num2;
    }
}


function deleteInput(){
    if (!operationQueued){
        num1 = String(num1).slice(0, num1.length-1);
        num1.length == 0 ? display.textContent = "0":
                            display.textContent = num1;
    } else if (operationQueued){
        num2 = String(num2).slice(0, num2.length-1);
        num2.length == 0 ? display.textContent = "0":
                            display.textContent = num1;
    }
}

function decimal(){
    if (display.textContent?.includes(".")) return;

    if (!operationQueued){
        num1 += ".";
        display.textContent = num1;
    } else if (operationQueued){
        num2 += ".";
        display.textContent = num2;
    }
}

function operate(operation){
    if(operationQueued){
        resolve()
    }
    operationQueued = operation;
}

function equal(){
    resolve();
    clearQueued = true;
    num1 = "";
}

function resolve(){
    if(num1 && num2 && operationQueued){
        num1 = operations[operationQueued](parseFloat(num1), parseFloat(num2));
        num2 = "";
    }
    operationQueued = null;
    display.textContent = num1;
}

const numButtons = document.querySelectorAll(".number");
numButtons.forEach(button => 
    button.addEventListener('click', () => addInput(button.value))
);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', ()=>clearInput());

const delButton = document.querySelector("#delete");
delButton.addEventListener('click', ()=>deleteInput());

const eqButton = document.querySelector("#equal");
eqButton.addEventListener('click', ()=>equal());

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach(button =>
    button.addEventListener('click', () => operate(button.id))
);

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener('click', () => decimal());