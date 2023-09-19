const student = {
    major : "컴퓨터공학과",
    idNum : 202095002,
    name : '강종우'
}

for(key in student){
    document.write(`${key} : ${student[key]}<br>`);
}