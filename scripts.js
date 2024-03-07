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
const display = document.querySelector("#display");

function calculate(operation, num1, num2){
    return operations[operation](num1, num2)
}

function input(num){
    if (display.textContent === "0"){
        display.textContent = String(num);
    } else if (display.textContent.length<9){
        display.textContent+= num;
    } 
}

function clearInput(){
    display.textContent="0";
}

function deleteInput(){
    if (display.textContent.length == 1){
        display.textContent = "0"
    } else if(display.textContent.length > 1){
        let newDisplayContent = display.textContent.slice(0, display.textContent.length-1)
        display.textContent = newDisplayContent;
    }
}

const numButtons = document.querySelectorAll(".number");
numButtons.forEach(button => 
    button.addEventListener('click', () => input(button.value))
    )

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', ()=>clearInput())


const delButton = document.querySelector("#delete");
delButton.addEventListener('click', ()=>deleteInput())