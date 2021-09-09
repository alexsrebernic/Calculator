
const displayNumbers = document.querySelector("#showNumbers");
const displayResult = document.querySelector("#result");
const p = document.getElementById("para")
let span = document.getElementById("span")
let pTextContent = p.textContent.length
const equal = document.querySelector(".equal")
const parentesis = document.querySelectorAll(".parentesis")
const coma = document.querySelector(".coma")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const undo = document.querySelector("#undo")
const escapeButton = document.querySelector("#escape")

equal.onclick = () => console.log(p.textContent)
coma.onclick = () => displayCalculate(coma)
undo.onclick = () =>  deleteChar()
escapeButton.onclick = () => clearDisplayNumber()
window.addEventListener("keydown",handleKeyboardInput)
parentesis.forEach(function(parentesis){
    parentesis.onclick = () => displayCalculate(parentesis)
})
numbers.forEach(function(number){
    number.onclick = () => displayCalculate(number)
})

operators.forEach(function(operator){
    operator.onclick = () => displayCalculate(operator)
})

function handleKeyboardInput(e) {
    if (e.key>= 0 && e.key <= 9) displayCalculate(e.key)
    if (e.key === ',') displayCalculate()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteChar()
    if (e.key === 'Escape') clearDisplayNumber()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      displayCalculate(e.key)
  }

function displayCalculate(value){  
    if(checkOperatorsParentesisDots(value)){
        return
    } else {
        addChar(value)  
    }
}

function checkOperatorsParentesisDots(value){
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "+")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "-")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "*")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "/")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "%")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 2) == "**")  return true
     if(value.textContent == "**" && p.textContent.substring(p.textContent.length - 1) == "(")  return true
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "(")  return true  
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "+")  return true    
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "*")  return true   
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "-")  return true   
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "/")  return true   
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "%")  return true    
     if(value.textContent == "." && p.textContent.substring(p.textContent.length - 1) == ".")  return true    

}


function addChar(value){
    if (p.textContent.length < 33){
        checkChars(value)
        putLimitNumbers()
     }
    } 
   
let numberOfParentesisOpen = 0;
let numberOfParentesisClosed = 0; 
function checkChars (value){
    if (value.textContent === "(" || value.textContent === ")"){
     return checkParentesis(value)
    }
    if(value.className == "operator" && p.textContent == "" || value.textContent == ")" && p.textContent == ("")) {
         return
     } else if(value.className == "number"&& p.textContent.substring(p.textContent.length - 1) == ")"
            || value.textContent == "." && p.textContent.substring(p.textContent.length - 1) == ")"){
        return toString(p.textContent += "*" + value.textContent)
     } else {
        toString(p.textContent +=  value.textContent)
     }
}
function checkParentesis(value){
    if (value.textContent == "("){
        numberOfParentesisOpen += 1;
        return checkIfHasNumberOrOperator()
    }
    if (value.textContent == ")"){
        if(numberOfParentesisOpen > numberOfParentesisClosed){
         numberOfParentesisClosed += 1;
        return toString(p.textContent += value.textContent)
        } else {
            return
        }
    }
}
function checkIfHasNumberOrOperator(){
    if(p.textContent.substring(p.textContent.length - 1) == "0") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "1") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "2") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "3") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "4") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "5") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "6") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "7") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "8") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "9") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == ")") return toString(p.textContent += "*(")
    if(p.textContent.substring(p.textContent.length - 1) == "") return toString(p.textContent += "(")
    if(p.textContent.substring(p.textContent.length - 1) == "-") return toString(p.textContent += "(")
    if(p.textContent.substring(p.textContent.length - 1) == "+") return toString(p.textContent += "(")
    if(p.textContent.substring(p.textContent.length - 1) == "*") return toString(p.textContent += "(")
    if(p.textContent.substring(p.textContent.length - 1) == "/") return toString(p.textContent += "(")
    if(p.textContent.substring(p.textContent.length - 1) == "%") return toString(p.textContent += "(")
    if(p.textContent.substring(p.textContent.length - 1) == "(") return toString(p.textContent += "(")

}

function deleteChar(){
    checkCharsOfString()
    putLimitNumbers()    
}

function checkCharsOfString(){
    if(p.textContent.substr(p.textContent.length - 2) === "**"){
        p.textContent = p.textContent.slice(0,-2)
        } else {
        p.textContent = p.textContent.slice(0,-1)
        }
}
function putLimitNumbers(){
    if(p.textContent.length >= 33){
        span.style.display = "block"
    } else if (p.textContent.length < 33){
        span.style.display = "none"
    }
}
function clearDisplayNumber(){
    p.textContent = ""
   span.style.display = "none"
}
