function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        alert("Division by zero is not defined");
    }
    else{
        return a/b;
    }
}

function operate(num1,num2,op){

    if(op==='+'){
        return add(num1,num2);
    }

    else if(op==='-'){
        return subtract(num1,num2);
    }

    else if(op==='*'){
        return multiply(num1,num2);
    }

    else if(op==='/'){
        return divide(num1,num2);
    }

}

let display=document.querySelector(".display");

let numbers=document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('click', function() {
        display.innerText+=element.innerText;
    });
});

let clear=document.querySelector(".clear");
clear.addEventListener('click',()=>{
    display.innerText='';
});

let operators=document.querySelectorAll(".operator");
operators.forEach(element => {
    element.addEventListener('click', function() {
        display.innerText+=element.innerText;
    });
});

let oper= ['+','-','*','/'];

let equals=document.querySelector(".equals");
equals.addEventListener('click',()=>{
    let str=display.innerText;
    for(i=0;i<str.length;i++){
        if(oper.includes(str[i])===true ){
            op=str[i];
            let arr=str.split(op);
            result=operate(Number(arr[0]),Number(arr[1]),op);
            break;
        }
    }
    display.innerText=result;
});