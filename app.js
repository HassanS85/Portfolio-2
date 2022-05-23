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
        sortArray(expressionArray)

    }
}

const sortArray = (Array) => {
    let tempArray = [];
    let newArray = [];
    Array.forEach(i => {
        if (parseFloat(i) || parseFloat === 0) {
            console.log(i)
            tempArray.push(i)
        } else if (i === "+" || i === "-" || i === "*" || i === "÷") {
            //temp array contains a multiple strings, the code below will join those multiple strings into one, change that string to a number, and then push that number into a new array. 
            newArray.push(parseFloat(tempArray.join("")))
            newArray.push(i)
            tempArray = []
        }
        
    })
     
    newArray.push(parseFloat(tempArray.join("")))
    console.log(newArray)
}


const resultExpression = (calcarray) => {

    for (let index = 0; index < calcarray.length; index++) {
        if (calcarray[index] === "+") {
            let initResult = (calcarray[index -1]/calcarray[index + 1]);
            console.log(initResult);
            calcarray.splice((index-1), 3, initResult)
            console.log(calcarray);
        }
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


