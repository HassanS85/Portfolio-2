const numberButtons = document.querySelectorAll(".calculator-grid__twospan__number")
const operationButtons = document.querySelectorAll(".calculator-grid__twospan__operation")
const equalsButton = document.querySelectorAll(".calculator-grid__twospan__equals")
const deleteButton = document.querySelectorAll(".calculator-grid__twospan__delete")
const allClearButton = document.querySelectorAll(".calculator-grid__twospan__allclear")
const previousTextElement = document.querySelector(".calculator-grid__output__previous")
const currentTextElement = document.querySelector(".calculator-grid__output__current")

let expressionArray = [];




const printUserInput = (event) => {
    console.log(event.target.value)
    if (event.target.value === "0" || event.target.value === "1"
     ||event.target.value === "2"
     || event.target.value === "3"
     || event.target.value === "4"
     || event.target.value === "5"
     || event.target.value === "6"
     || event.target.value === "7"
     || event.target.value === "8"
     || event.target.value === "9") {
        expressionArray.push(event.target.value);
        console.log(expressionArray);
    } 
}


numberButtons.forEach(input => {
    input.addEventListener("click", printUserInput)
});


operationButtons.forEach(input => {
    input.addEventListener("click", printUserInput)
});

equalsButton.forEach(input => {
    input.addEventListener("click", printUserInput)
});

deleteButton.forEach(input => {
    input.addEventListener("click", printUserInput)
});

allClearButton.forEach(input => {
    input.addEventListener("click", printUserInput)
});


