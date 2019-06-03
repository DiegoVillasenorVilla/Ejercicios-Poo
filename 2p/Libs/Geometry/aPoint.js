class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
	print('geometry ');
    };
    toString(){return "("+this.x+","+this.y+")";};
    distancia(aPoint,bPoint){
    var a=bPoint.x-aPoint.x
    var b=bPointy-aPoint.y
    return Math.sqrt(a*a+b*b)
    };
    clone(){return new Point(this.x,this.y);};
};
var p1=new Point(3,4);
var p2=new Point(-3,-4);
var p3=p1
