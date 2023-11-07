class Petr{
    //프로퍼티 생성,
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    // 메서드
    run(){
    document.write(`<h1>${this.name}색깔을 가진${this.color}가 달린다</h1>`);  
    }
}

class Cat extends Petr{
    constructor(name,color,breed){
        super(name,color); //상위 클래스의 프로퍼티 재사용.
        this.breed = breed; //새로운 프로퍼티 정의
    }
    //새로운 메서드 정의
    viewInfo(){
        document.write(`이름:${this.name},품종:${this.breed},색깔:${this.color}`);
    }
}

//객체 생성.
const Catn = new Cat("보리","흰색","페르시안 친칠라");
const Pet = new Petr("<hr>하얀","바둑이</hr>")

Catn.viewInfo();
Pet.run();