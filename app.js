import evaluate from "evaluator.js"
const resultDisplay = document.querySelector("#result");
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

equal.onclick = () => calculate()
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
    if(checkValues(value)){
        return
    } else {
        addChar(value)  
    }
}

function checkValues(value){
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "+")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "-")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "*")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "/")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "%")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "^")  return true
     if(value.textContent == "%" && p.textContent.substring(p.textContent.length - 1) == "(")  return true
     if(value.textContent == "/" && p.textContent.substring(p.textContent.length - 1) == "(")  return true
     if(value.textContent == "*" && p.textContent.substring(p.textContent.length - 1) == "(")  return true
     if(value.textContent == "^" && p.textContent.substring(p.textContent.length - 1) == "(")  return true
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "(")  return true  
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "+")  return true    
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "*")  return true   
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "-")  return true   
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "/")  return true   
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "%")  return true    
     if(value.textContent == ")" && p.textContent.substring(p.textContent.length - 1) == "^")  return true    
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
        p.textContent = p.textContent.slice(0,-1)
        
}
function putLimitNumbers(){
    span.textContent = "Limit reached!"
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


function calculate(){
    try{
        evaluate(p.textContent)
    } catch(err){
        span.style.display = "block"
        span.textContent = err.message
        return
    }
    let result = evaluate(p.textContent)
    let div = document.createElement("div")
    makeDiv(div)
    showEquation(div)
    showResult(div)
    clearDisplayNumber()
    p.textContent += result
    console.log(resultDisplay.childNodes.length)
    if(resultDisplay.childNodes.length == 8){
        resultDisplay.removeChild(resultDisplay.firstChild)
    }
    
}
function makeDiv(div){
    div.style.width = "100%"
    div.style.height = "13%"
    div.style.display = "flex"
    div.style.flexDirection = "row"
    div.style.justifyContent = "space-between"
    div.style.alignItems = "center"
    div.style.borderTop = "1px solid rgb(188, 184, 178)"
    resultDisplay.appendChild(div)
}
function showEquation(div){
    let equation = p.textContent;
    let equationPara = document.createElement("p")
    equationPara.style.fontSize = "14px"
    equationPara.style.marginLeft = "20px"
    equationPara.style.maxWidth = "180px"
    equationPara.style.wordWrap = "break-word"
    equationPara.textContent = equation
    div.appendChild(equationPara)
}
function showResult(div){
    let result = evaluate(p.textContent)
    let resultPara = document.createElement("p")
    resultPara.style.fontSize = "14px"
    resultPara.style.marginRight = "20px"
    resultPara.textContent = "=     " + result
    div.appendChild(resultPara)
}