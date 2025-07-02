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
    num1 = parseInt(num1,10);
    num2 = parseInt(num2,10);
    switch(operator)
    {
        case'+':
        return add(num1,num2);
        case'-':
        return subtract(num1,num2);
        case'x':
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
clearbtn.addEventListener("click",()=>{display.textContent = ""; console.clear();});

let calculatebtn = document.querySelector(".equalbtn");
calculatebtn.addEventListener("click",()=>{
    let displaycontent = display.textContent;
    let arr = displaycontent.match(/\d+|[+\-x/]/g);
    log(arr);
       if (arr[0] === "-"){
            arr[0]=arr[0] +arr[1];
            arr.splice(1,1);
        }
    for(let i = 1;i <= arr.length;i++){
     
        if((arr[i] === "-" && arr[i+1]==="-")||(arr[i]==="+"&&arr[i+1]==="-")||(arr[i]==="x"&&arr[i+1]==="-")||(arr[i]==="/"&&arr[i+1]==="-"))
        {
           arr[i+1]= arr[i+1] +arr[i+2];
           arr.splice(i+2,1);
        }
    }
    log(arr);
    let sum = Number(arr[0]);
    for(let i = 1; i <= arr.length -1;i+=2){
        let operator = arr[i];
        let nextNumber = arr[i+1];
       
         sum = operate(sum,nextNumber,operator);
    }
    display.textContent = sum;
    log(sum);
})

