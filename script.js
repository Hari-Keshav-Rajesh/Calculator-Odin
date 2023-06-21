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

let num1;
let num2;
let op;

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
