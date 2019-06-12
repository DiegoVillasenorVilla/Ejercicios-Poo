
function numeroAleatorioEnteros(){

    
    var aleatorio=Math.random();


    var num;


    for(var i=0;i<10;i++){
        //num[i]=Math.random()*(max-min);
        //return num[i]+min;
        document.getElementById("entero").innerHTML=document.getElementById("entero").innerHTML+(Math.floor(Math.random()*11));
        

    
    }    
    
}
numeroAleatorioEnteros(1,10);