let subject = prompt("신청할 과목을 선택하세요. 1-HTML 2-CSS 3-JAVASCRIPT")

if (subject !==null){
    switch(subject){
    case "1" : document.write("HTML을 신청했습니다.");
        break;
    case "2" : document.write("css를 신청했습니다.");
        break;
    case "3" : document.write("java스크리트를 신청했습니다.");
        break;
    default : document.write("재 입력해주세요");

    }
}