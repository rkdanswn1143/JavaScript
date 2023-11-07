// 생성자 함수 만들기
// function Cylinder(CylinderDiameter, CylinderHeight) {
//     this.diameter = CylinderDiameter; // 지름
//     this.height = CylinderHeight; // 높이

//     // 부피 계산 메서드
//     this.volume = function(){
//         // 반지름 계산
//         let radius = this.diameter / 2;
//         // 부피 계산 = 반지름 * 반지름 * 파이 * 높이
//         return (radius * radius * Math.PI * this.height).toFixed(2);
//     }
// }

// 클래스 만들기
class Cylinder{
    constructor(CylinderDiameter,CylinderHeight){
    this.diameter = CylinderDiameter; // 지름
    this.height = CylinderHeight; // 높이
    }
    volume(){
        let radius = this.diameter / 2;
        return (radius * radius * Math.PI * this.height).toFixed(2);
    }
}
// 버튼 가져오기
const btn = document.querySelector("button");
// 결과 표시 영역 가져오기
const result = document.querySelector("#result");
// 버튼을 누르면 입력한 지름과 높이를 가지고 생성자를 호출
btn.addEventListener("click",function() {
    event.preventDefault();

    // 지름 값 가져오기
    CylinderDiameter = document.querySelector("#cyl-diameter").value;
    // 높이 값 가져오기
    CylinderHeight = document.querySelector("#cyl-height").value;
    // 빈칸인지 아닌지 체크
    if (CylinderDiameter === "" || CylinderHeight === ""){
        result.innerText - "지름, 높이 값을 모두 입력하세요.";
    }
    else{
    // 객체 생성.
    const volume1 = new Cylinder(parseInt(CylinderDiameter),parseInt(CylinderHeight));
    // 계산 결과 result에 표시
    result.innerText = `지름 ${CylinderDiameter}, 높이 ${CylinderHeight}인 원기둥의 부피는 ${volume1.volume()}입니다.`;
    }
})