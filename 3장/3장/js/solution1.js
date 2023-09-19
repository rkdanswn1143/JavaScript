const num = [1, 3, 4, 6, 8, 11, 12, 23, 34];

// 반복문 for로 배열에서 10보다 큰 값 출력하기
for (let i=0;i<num.length;i++){
    if (num[i] > 10) {
        document.write(`${num[i]} | `);
    }
}
document.write("은 10보다 큰수 입니다.<br><br><hr>");


// 반복문 forEach로 배열에서 10보다 큰 값 출력하기
num.forEach(function(eachnum){
    if(eachnum > 10){
        document.write(`${eachnum} | `);
    } 
})
document.write("은 10보다 큰수 입니다. <br><br><hr>");


// 반복문 for..of로 배열에서 10보다 큰 값 출력하기
for(let ofnum of num){
    if(ofnum > 10){
        document.write(`${ofnum} | `);
    }
}
document.write("은 10보다 큰수 입니다. <br><br><hr>")