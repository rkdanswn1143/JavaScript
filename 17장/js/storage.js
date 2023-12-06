let students = ["Kim","Lee","Park"];


// 스토리지에 stduents 키로 배열을 저장합니다
localStorage.setItem("students",JSON.stringify(students));     //stduents >> 키 ,JSON.stringify 값 Json 형식으로 바꾼 students
//로컬 스토리지에 키와 값 저장
let localData;
if(localStorage.getItem("students")==null){
    localData = [];
}else{
localData = JSON.parse(localStorage.getItem("students"));
}
console.log(`현재 stduent : ${students}`);

localData.push("Choi");
localStorage.setItem("students",JSON.stringify(localData));

console.log(`추가후 students : ${localData}`);

const indexOfvalue = localData.indexOf("Lee");
localData.splice(indexOfvalue,1);
localStorage.setItem("students",JSON.stringify(localData));
console.log(`삭제후 students : ${localData}`)

localStorage.removeItem("students");