//Circle
class Circle{
    constructor(p ,r){
        this._p=p;
        this._r=r;
    };
    toString(){
        return this.p.toString();
    };
    //DISTANCIA(p){};
    cone(){
        return new Point(this.x, this.y);
    };
    get p(){return this._p}
    get p(p){this._p=p}
    get r(){return thid._r}
    get r(r){this._r=r}
}