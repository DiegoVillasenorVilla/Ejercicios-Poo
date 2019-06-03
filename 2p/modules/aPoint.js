class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    };
    toString(){return "("+this.x+","+this.y+")";};
    distancia(aPoint,bPoint){
    var a=bPoint.x-aPoint.x
    var b=bPointy-aPoint.y
    return Math.sqrt(a*a+b*b)
    };
    clone(){return new Point(this.x,this.y);};
};

