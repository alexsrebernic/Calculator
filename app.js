
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

equal.onclick = () => 
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
checkIfHasParentesis()

    if(checkOperators(value)) return
    makeParagraph()
    addChars(value)  
    
}
function checkIfHasParentesis(value){
    if(p.textContent.includes("()")){
        console.log("ASD")
      let indexOfParentesis = p.textContent.indexOf("(")
      let hasOpenParentesis = true
      p.textContent[indexOfParentesis]
    }
}

function checkOperators(value){
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "+")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "-")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "*")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "/")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "(")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == "%")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 1) == ")")  return true
     if(value.className == "operator" && p.textContent.substring(p.textContent.length - 2) == "**")  return true
}

function makeParagraph (){
    if (displayNumbers.innerHTML == ""){   
        displayNumbers.appendChild(p)
       p.style.height = "20px"
       p.style.width = "95%"      
    }
}

function addChars (value){
    if (p.textContent.length < 33){
        checkChars(value)
        putLimitNumbers(para)
     }
    } 

function checkChars (value){
    if (value.textContent == "("){
        return toString(para.textContent += "()")
     }
     if(value.textContent == ")"){

     }
     if(value.className == "operator" && p.textContent == "") {
         return
     } else {
         toString(para.textContent += value.textContent)
     }
}
function deleteChar(){
    checkCharsOfString()
    putLimitNumbers(p)    
}

function checkCharsOfString(){
    if(p.textContent.substr(p.textContent.length - 2) === "**" || p.textContent.substr(p.textContent.length - 2) === "()"){
        p.textContent = p.textContent.slice(0,-2)
        } else {
        p.textContent = p.textContent.slice(0,-1)
        }
}

function clearDisplayNumber(){
    p.textContent = ""
   span.style.display = "none"
}

function putLimitNumbers(p){
    if(p.textContent.length >= 33){
        span.style.display = "block"
    } else if (p.textContent.length < 33){
        span.style.display = "none"
    }
}






