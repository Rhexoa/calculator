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

let num1=0, num2=0;
let operation = "";

function calculate(operation, num1, num2){
    return operations[operation](num1, num2)
}

