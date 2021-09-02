const displayNumbers = document.querySelector("#showNumbers");
const displayResult = document.querySelector("#result");
const p = document.getElementById("para")
let span = document.getElementById("span")

const equal = document.querySelector(".equal")
const parentesis = document.querySelectorAll(".parentesis")
const coma = document.querySelector(".coma")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const undo = document.querySelector("#undo")
const escapeButton = document.querySelector("#escape")


coma.onclick = () => displayCalculate()
undo.onclick = () =>  deleteChar()
escapeButton.onclick = () => clearDisplayNumber()
window.addEventListener("keydown",handleKeyboardInput)
numbers.forEach(function(number){
    number.onclick = () => displayCalculate(number.textContent)
})
operators.forEach(function(operator){
    operator.onclick = () => displayCalculate(operator.textContent)
})

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) displayCalculate(e.key)
    if (e.key === ',') displayCalculate()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteChar()
    if (e.key === 'Escape') displayCalculate()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      displayCalculate(convertOperator(e.key))
  }
  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }


  

function displayCalculate(value){  
      if (value === "χ²"){
       value = "^2"
    }
    makePara(p)
    addChars(value)
  
   
}
function makePara (para){
    if (displayNumbers.innerHTML == ""){   
        displayNumbers.appendChild(para)
       para.style.height = "20px"
       para.style.width = "95%"      
    }
}

function addChars (value){
    if (p.textContent.length < 33){
       toString(para.textContent += value)

    }
    
    limitNumbers(para)
}

function deleteChar(){
    let para = p.innerHTML
    if(para.slice(-2) == "^2"){
       
        p.textContent = para.slice(0, -2)
    }
    p.textContent = para.slice(0,-1)
    limitNumbers(p)    
}

function clearDisplayNumber(){
    p.textContent = ""
}

function limitNumbers(p){
    if(p.textContent.length >= 33){
        span.style.display = "block"
    } else if (p.textContent.length < 33){
        span.style.display = "none"
    }
}


function add (a,b){
    return a + b
}
function substract (a,b){
    return a - b
}
function multiply (a,b){
    return a * b
}
function divide (a,b){
    return a / b
}
function potencia (a){
    return Math.pow(a)
}
function squareRoot(a){
    return Math.sqrt(a)
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case 'χ²':
        return potencia(a)
      case '√()':
        return squareRoot(a)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}


