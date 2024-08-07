
let displayValue="0";
let prevDisplayValue ="0";
const clearBtn= document.getElementById('clear')
const prevClear = document.getElementById('prevClear');
const operators = document.querySelectorAll('.operator');
const result = document.getElementById('result');



let firstNumber="";
let secondNumber="";
let operator="";



const button = document.querySelectorAll('.number');
    button.forEach(button => {
        button.addEventListener('click', (event)=>{
            if (operator==="") {
                firstNumber+=event.target.innerText;
            } else {
                secondNumber+=event.target.innerText;
            }
            const number = button.textContent;
            handleNumberClick(number);
        })
    })
  operators.forEach(operators=> {
    operators.addEventListener('click', (event) =>{
        if (displayValue!=="0" && operator===""){
        operator = event.target.innerText;
        const op = operators.textContent;
        handleOperatorClick(op);
        }
    })
  })


const handleOperatorClick = (op) =>{
    if (displayValue === "0") {
         displayValue = op.toString();
    } else {
        displayValue += op.toString();
    }
    updateDisplay();

}

const handleNumberClick = (number) =>{

     if (displayValue === '0') {
        displayValue = number.toString(); 
    } 
    else {
        displayValue += number.toString();
    }
    updateDisplay();

}


    
function updateDisplay(){
    const display = document.getElementById('display');
    display.textContent = displayValue;   
  
}


function operate(operator,firstNumber,secondNumber){    
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
  switch(operator){
    case "+":
        return add(num1,num2);
    case "-":
        return subtract(num1,num2);
    case "×":
        return multiply(num1,num2);
    case "÷":
        if (num2 ===0){
            return alert("Cant divide by 0")
        } else {
        return divide(num1,num2);}
    case "%":
        return modulo(num1,num2);                    
  }}

 
function add(num1,num2){
    const sum =num1+num2;
    return sum;
}

function subtract(num1,num2){
    const sum =num1-num2;
    return sum;
}

function divide(num1,num2){
    const sum = num1/num2;
    return sum;
}

function multiply(num1,num2){
    const sum = num1*num2;
    return sum;
}
function modulo(num1,num2){
    const sum = num1%num2;
    return sum;
}

updateDisplay();

clearBtn.addEventListener('click', ()=>{
    displayValue ="0";
    firstNumber="";
    secondNumber="";
    operator="";
    updateDisplay();
}
)
prevClear.addEventListener('click',()=>{
   displayValue = display.textContent.slice(0,-1);
   firstNumber = displayValue;
    updateDisplay();
    if (displayValue===""){
        displayValue ="0";
        updateDisplay();
    }
})

result.addEventListener('click', () =>{
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    const result =operate(operator,firstNumber,secondNumber);
    displayValue = result.toString();
    firstNumber =displayValue;
    secondNumber ="";
    operator = "";
    updateDisplay();
    
    }
})