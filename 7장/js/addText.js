//버튼 요소 가져오기
const orderBtn =document.querySelector("#order");
//주문 정보 영역 가져오기
const orderInfo = document.querySelector("#orderInfo");
//책 제목 요소 가져오기
const title = document.querySelector("h2")  // ("#container > h2") 2가지 방법 있음
//버튼 클릭하면
orderBtn.addEventListener("click", () =>{
    // 새로운 p 요소 만들기 
    let newP = document.createElement("p");
    //텍스트 만들기 -title의 텍스트 부분만 가지고와서 텍스트 노드로 생성
    let TextNode = document.createTextNode(title.innerText);

    // 텍스트 노드를 p요소에 추가 
    newP.appendChild(TextNode);
    //p 요소를 orderInfo 영역에 추가.
    newP.style.fontsize = "1.5cm";
    newP.style.color = "red";
    orderInfo.appendChild(newP);
},{once : true});