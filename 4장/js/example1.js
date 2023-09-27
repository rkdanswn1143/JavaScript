//두수를 입력 받아 곱한 결과를 화면에 출력하는 함수
function multiple(num1,num2){
    
    let gop =num1*num2;

    return gop;  //함수를 호출한 곳으로 돌려 줌 .
}


//사용자로부터 정수 입력 받기
let number = parseInt(prompt("첫번쨰 정수 입력"))
let number1 = parseInt(prompt("두번쨰 정수 입력"))

//함수 호출,
 //인수 값을 가지고 호출 


document.write(`<h1>입력받은${number} 부터 ${number1}까지 곱은 ${multiple(number,number1)}입니다.</h1>`);