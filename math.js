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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    

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
digits.classList.add("everybtn");

digits.textContent = i;
numbers.appendChild(digits);


}
let display = document.querySelector(".text");
let buttons = document.querySelectorAll(".calcbtn");
let kopija= undefined;
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
       
       const opps = ["+", "/", "x"];
       const minus = ["-"];
         if(!(kopija===undefined)){
            
display.textContent = "";
kopija = undefined;
    }
        let btntext = button.textContent;
        display.textContent += btntext;
        let displaycontent = display.textContent;
    let arrays = displaycontent.match(/\d+(\.\d+)?|[+\-x\/]/g);
    log(arrays);
    for(let i = 1;i < arrays.length-1;i++){
        if(arrays[i]==="."&&arrays[i+1]==="."){
            let arr = display.textContent.split("");
    arr.pop();
    let newstr = arr.join("");
    display.textContent = newstr; 
        }
    }
    for(let i = arrays.length - 2;i <=arrays.length -1;i++){
        if((opps.includes(arrays[i])&&opps.includes(arrays[i+1])||(arrays[i]==="-"&&opps.includes(arrays[i+1])))){
let arr = display.textContent.split("");
    arr.pop();
    let newstr = arr.join("");
    display.textContent = newstr; 
        }
    }

    if(arrays.length >=3){
        let i = arrays.length -3;
        if(opps.includes(arrays[i])&& (minus.includes(arrays[i+1])&&minus.includes(arrays[i+2]))){
let arr = display.textContent.split("");
    arr.pop();
    let newstr = arr.join("");
    display.textContent = newstr; 
        }
    }
    if(opps.includes(arrays[0])){
        let arr = display.textContent.split("");
 arr.pop();
    let newstr = arr.join("");
    display.textContent = newstr; 
    }
  
   if(arrays.length >=3){
    let lastThree = arrays.slice(-3).join("");
    if(lastThree === "---"){
        arrays.pop();
         display.textContent = arrays.join("");
         return;
    }
   }
      for(let i = 0;i<= arrays.length;i++){
if ( arrays.length <= 2 && arrays[i] === "-" && arrays[i+1] ==="-"){
let arr = display.textContent.split("");
    arr.pop();
    let newstr = arr.join("");
    display.textContent = newstr; 
    }
    }
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
    let arr = displaycontent.match(/\d+(\.\d+)?|[+\-x\/]/g);
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
    let rsum = 0;
    for(let i = 1;i<= arr.length -1;i++){
       

    }
    for(let i = 1; i <= arr.length -1;i+=2){
        
         if(!(arr[i]==="/"&& arr[i+1]==="0")&& !(arr[0]==="0"&&arr[1]==="/") ){
            let operator = arr[i];
        let nextNumber = arr[i+1];
       
         sum = operate(sum,nextNumber,operator);
         rsum = +sum.toFixed(4);
        }else{
            rsum = "Really?";
            kopija = rsum;
        }
        
    }
    display.textContent = rsum;
    kopija = rsum;
    log(rsum);
})

