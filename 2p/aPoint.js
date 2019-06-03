class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    };
    toString(){return "("+this.x+","+this.y+")";};
    distancia(aPoint,bPoint){
    var a=bPoint.x-aPoint.x
    var b=bPoint.y-aPoint.y
    var acua=Math.pow(a,2)
    var bcua=Math.pow(b,2)
    return  Math.sqrt(acua+bcua)
    

    };
    clone(){return new Point(this.x,this.y);};
};