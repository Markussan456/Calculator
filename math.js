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
digits.classList.add("calcbtn");
digits.textContent = i;
numbers.appendChild(digits);


}
let display = document.querySelector(".text");
let buttons = document.querySelectorAll(".calcbtn");
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        let btntext = button.textContent;
        display.textContent += btntext;
    })
})
let deletebtn = document.querySelector(".delete");
deletebtn.addEventListener("click",()=>{
    let arr = display.textContent.split("");
    log(arr);
    arr.pop();
    log(arr);
    let newstr = arr.join("");
    log(newstr);
    display.textContent = newstr; 
    
})
let clearbtn = document.querySelector(".clearbtn");
clearbtn.addEventListener("click",()=>{display.textContent = ""});
