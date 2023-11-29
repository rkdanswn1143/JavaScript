function whatsYourFavorite(){
    let fav = "Javascript";
    
    // reslove 일떄 Javascript를 반환

    return new Promise((resolve,reject) => resolve(fav))
}

function displaySubject(subject){
    // resolve 일떄 whatYourFavorite() 함수의 결과를 받아서 Hello 와 함께 프로미스 반환
                                        //↓ Javascript        
    return new Promise((resolve,reject)=>resolve(`Hello,${subject}`));
}

whatsYourFavorite()
.then(displaySubject)  // .then(response => displaySubject(response))
.then(console.log);   // .then (result => console.log(result))