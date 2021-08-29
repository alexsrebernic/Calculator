const displayNumbers = document.querySelector("#showNumbers");
const displayResult = document.querySelector("#result");

const equal = document.querySelector(".equal")
const parentesis = document.querySelectorAll(".parentesis")
const coma = document.querySelector(".coma")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const undo = document.querySelector("#undo")
const escape = document.querySelector("#escape")


numbers.forEach(function(number){
    number.onclick = () => displayCalculate(number.textContent)
})
operators.forEach(function(operator){
    operator.onclick = () => displayCalculate(operator.textContent)
})


function clearDisplayNumber(){
    
}
function displayCalculate(value){  
    const p = document.getElementById("para")
    makePara(p)
    addChars(p,value)
}

function addChars (para,value){
    if (para.textContent.length != 39){
        para.textContent += value
    } else {
        let span = document.getElementById("span")
        span.style.display = "block"      
    }
}
function makePara (para){
    if (displayNumbers.innerHTML == ""){   
        displayNumbers.appendChild(para)
       para.style.height = "20px"
       para.style.width = "95%"      
    }
}




function add (a,b){
    return a + b
}
function subtract (a,b){
    return a - b
}
function multiply (a,b){
    return a * b
}
function divide (a,b){
    return a / b
}
function potencia (a){
    return a * a
}
function squareRoot(a){
    return Math.sqrt(a)
}




