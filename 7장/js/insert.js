//버튼 가져오기
const orderBtn =document.querySelector("#btn")

orderBtn.addEventListener("click", () =>{
    // 새로운 p 요소 만들기 
    let newP = document.createElement("p");
    //텍스트 만들기 -title의 텍스트 부분만 가지고와서 텍스트 노드로 생성
    let TextNode = document.createTextNode("안녕하세요");
    // 텍스트 노드를 p요소에 추가 
    newP.appendChild(TextNode);
    //Javascript 기준으로
   let basicNode = document.querySelectorAll("p")[2];

   //앞에 추가하기
   document.body.insertBefore(newP,basicNode);
},{once : true});