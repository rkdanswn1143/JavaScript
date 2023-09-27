//1~전달받은 수 까지합계를 계싼하는 함수
//함수 선언,
function calcSum(num){
    let sum = 0;
    for(let i=1; i<=num;i++){
        sum +=i; // sum = sum+i
    }
    return sum;  //함수를 호출한 곳으로 돌려 줌 .
}


//사용자로부터 정수 입력 받기
let number = parseInt(prompt("정수 입력(몇까지 더할까요?)"))


//함수 호출,
 //인수 값을 가지고 호출 


document.write(`<h1>1부터 ${number} 까지 합은 ${calcSum(number)}입니다.</h1>`);