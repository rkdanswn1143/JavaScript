const pizza = () =>{
    return new Promise ((reslove,reject)=> {
        reslove("피자를 주문합니다.");
    });
}



const step1= (message) => { 
    console.log(message);
    return new Promise ((reslove,reject)=> {
        setTimeout(()=>{
            reslove("피자 도우 준비");
        },3000);
    });
};

const step2= (message) => { 
    console.log(message);
    return new Promise ((reslove,reject)=> {
        setTimeout(()=>{
            reslove("토핑 완료");
        },1000);
    });
};

const step3= (message) => { 
    console.log(message);
    return new Promise ((reslove,reject)=> {
        setTimeout(()=>{
            reslove("굽기 완료");
        },2000);
    });
};









pizza()
    //    .then((result) => step1(result))   //.pizza 함수가 실행되면 step1
    //    .then((result) => step2(result))    // step1이 실행되면 step2
    //    .then((result) => step3(result))      step2가 실행되면 step3
    //    .then((result => console.log(result)))   step3가 성공하면 굽기완료 표시
    //    .then(()=> {
    //     setTimeout(() => {
    //         console.log("피자가 준비되었습니다.");    
    //     }, 3000);
        
    .then(step1)
    .then(step2)
    .then(step3)
    .then(console.log)
    .then(()=>{
        console.log("피자가 준비되었습니다")
    });

