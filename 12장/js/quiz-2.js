const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");

button.addEventListener("click",() => {
    let num = userNumber.value;  // 숫자 입력받는 변수
    try {
        if (num ==="" || isNaN(num)) {      
          throw "제대로된 숫자를 입력해주세요";  //throw는 오류부분으로 넘겨줌
        }
        num=Number(num);   //num= parseInt(n) 파스인트 대체
        if(num<=10){
            document.querySelector("#result").innerText = num;       //num이 10보다 작다면 reult에 있는innertext 부분에 num을 넣어줌
         }
        if(num>10){
            throw "10보다 작은 숫자를 입력해주세요"; //throw 는 err부분으로 넘겨줌 
        }
      } catch (err) {
        alert(err); 
      }finally{
        userNumber.value="";   // 밑에만 출력하기 위해서 칸을 지워짐
      }
    
})

    
