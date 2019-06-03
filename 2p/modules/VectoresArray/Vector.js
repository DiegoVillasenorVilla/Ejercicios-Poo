class Vector{
    constructor(array){
        this.array=array;

    };
    getData( ){ return this.array}
    min(){
     array=[2,3,-4,5,6];
     let t=this.array[0]//2
     for(let x of array){
     if (t<x)
     t=x
 }
 console.log(t)
 };
    max(){
     array=[2,3,-4,5,6];
     let max=this.array[0]
     for(let x of array){
         if(max>x)
         max=x
     }
     console.log(max)
    };
    sum(){
      var array=[2,3,-4,5,6];
      var array2=[]
      var numas=2//num a sumar
      for(x=0; x<array.lenght;x++){
          array2.push(array[x]+numas);
      }
      for(i=0;i<array2.lenght;i++){
        console.log("Resultado "+ i +" :"+array2[i]);
      }
       
    };
    avg(){
        var array=[2,3,-4,5,6];
        var sum=[]
        var avg1=[]
       for(i=0;i<array.lenght;i++){
           sum.push(array[i]+i);//0+2=2 y asi
            avg1.push(sum[i]/5);
       }
       for(x=0;+x<array.lenght;i++){
           console.log("El promedio total de esta operacion es: "+avg1[x]);
       }
       
        
    };

    

    
    vectorize(){
     array=[a,b]
     let a=0
     let b=1
     let k=10
     let res =(b-a)/k
     for(let i of array){
        res=i; 
        array.push(a);
        

     }  
     console.log(res)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    };
    initialize(){
      
    }
   
}