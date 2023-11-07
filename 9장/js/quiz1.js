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
const Pet = new Petr("하얀","바둑이")
Pet.run();