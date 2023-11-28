//Promise 객체 만들기 (제작 코드)
let likePizza = false;
const pizza = new Promise((resolve,reject) =>{
    if(likePizza) {  //트루이면
    resolve('피자를 주문합니다');
    }
    else{
    reject('피자를 주문하지 않습니다.');
    } 
}) ;

// Promise 객체 사용하기 (소비코드)
pizza                    
   .then(             //트루이면
    result => console.log(result)
   )
   .catch(                 //트루가 아니면
    err => console.log(err)
   )
   .finally(() => console.log('완료'));    //세미콜론 찍을떄 마지막에만 찍으면댐,한줄로 다적어도댐 
                   