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
    if (event.target.value === "0" 
    || event.target.value === "1"
     ||event.target.value === "2"
     || event.target.value === "3"
     || event.target.value === "4"
     || event.target.value === "5"
     || event.target.value === "6"
     || event.target.value === "7"
     || event.target.value === "8"
     || event.target.value === "9"
     || event.target.value === "+"
     || event.target.value === "-"
     || event.target.value === "*"
     || event.target.value === "÷"
     || event.target.value === ".") {
        expressionArray.push(event.target.value);
        console.log(expressionArray);
        console.log(expressionArray.join(" "));


        //converting array to a string here.
        let num = expressionArray.join(" ")

        previousTextElement.innerText = num

    } else if (event.target.value === "AC") {
        expressionArray = [];
        console.log(expressionArray)

        previousTextElement.innerText = ""


    } else if (event.target.value === "DEL") {
        expressionArray.pop();
        console.log(expressionArray);

        let num = expressionArray.join(" ")


        previousTextElement.innerText = num

    } else if (event.target.value === "=") {
        let result = sortArray(expressionArray)
        currentTextElement.innerText = result

    }
}

// Only will work for an array consisting of 3 elements.
// Array[0] must be a one digit integer
// Array[1] must be an operator (+-/*)
// Array[2] must be a one digit integer
 const sortArray = (Array) => {
    operand_0 = parseFloat(Array[0])
    operator = Array[1]
    operand_1 = parseFloat(Array[2])

    console.log(operand_0)
    console.log(operator)
    console.log(operand_1)

    if (operator === "+") {
        return operand_0 + operand_1
    }
    else if (operator ===  "-")
    {
        return operand_0 - operand_1
    }
    else if (operator === "*")
    {
        return operand_0 * operand_1
    }
    else if (operator ===  "÷")
    {
        return operand_0 / operand_1
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

