class Fraction{
    constructor(n,d){
        this.n=n;
        this.d=d;
    };
 euclides(n,d){ //Maximo comun divisor o MCD
    var iaux; //auxiliar
    n = Math.abs(n); //tomamos valor absoluto
    d = Math.abs(d);
    var i1 = Math.max(n, d); //i1 = el más grande
    var i2 = Math.min(n, d); //i2 = el más pequeño
  
    do {
      iaux = i2; //guardar divisor
      i2 = i1 % i2; //resto pasa a divisor
      i1 = iaux; //divisor pasa a dividendo
    } while (i2 !== 0);
    return i1; //ultimo resto no nulo
    };
  
  
    //Minimo comun multiplo o MCM
   EuclidesMCM( n,  d)
   {
       return (n / euclides(n, d)) * d;
   }
 sum(f){
     var prim=this.n+f.n;
     var seg=this.d+f.d;
     if(this.d==f.d){
         return new Fraction(prim,seg)
         
     }
     
     else
     var prim1=this.n*f.d; //(4*4)
     var seg2=this.d*f.n;  //(2*5)
     var mul=this.d*f.d;//(2/4)
     var sum=prim1+seg2;//(4*4)+(2*5)
     
     return new Fraction(sum,mul)// 36/8
     
 };
 
 res(f){
    var uno=this.n-f.n;
    var dos=this.d-f.d;
    if(this.d==f.d){
        return new Fraction(uno,dos)//Si son iguales los denominadores
    }
    
    else
    var one=this.n*f.d; //(4*4)
    var two=this.d*f.n;  //(2*5)
    var three=this.d*f.d;//(2/4)
    var four=one-two;//(4*4)-(2*5)
    
    return new Fraction(four,three)// 36/8
 };
 
 div(f){
     var first=this.n*f.d; //(4*4)
     var second=this.d*f.n //(5*2)

     return new Fraction(first, second)//(16/10)
 };
 mul(f){
        var n=this.n*f.n; //(4*5)
        var d=this.d*f.d; //(2*4)
        
        return new Fraction(n,d);// (20/8)
    };
};
var f1=new Fraction(4,2);
var f2= new Fraction(5,4);
