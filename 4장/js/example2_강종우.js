
let num1 = parseFloat(prompt("숫자 하나 입력"))
let num2 = parseFloat(prompt("숫자 하나 입력"))

let sum = (a,b) => {
    let result = a*b;
    return result;
}

sum(num1,num2)

document.write(`<h1>입력받은${num1} 부터 ${num2}까지 곱은 ${sum(num1,num2)}입니다.</h1>`);