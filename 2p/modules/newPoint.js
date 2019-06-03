class Point{
    constructor(x, y){
        this._x=x;
        this._y=y;
    };
    draw(){console.log("draw Point");};//other
    clone(){};

    get x(){return this._x;}
    set x(x){this._x=x;}
    get y(){return this._y;}
    set y(y){this._y=y;}

}