function add (num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function log(whatever){
    return console.log(whatever);
}
function operate(num1,num2,operator){
    switch(operator)
    {
        case'+':
        return add(num1,num2);
        case'-':
        return subtract(num1,num2);
        case'*':
        return multiply(num1,num2);
        case'/':
        return divide(num1,num2);
        default:
            return "Invalid operator";

    }
}
let numbers = document.querySelector(".numbers");

for(let i = 1 ;i <= 9;i++){
let digits = document.createElement("button");
digits.classList.add("digit");
digits.textContent = i;
numbers.appendChild(digits);
}
