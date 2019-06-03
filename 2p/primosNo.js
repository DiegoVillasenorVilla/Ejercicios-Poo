function init(){
  for (n=3;n<1000;n++){
   s=Math.sqrt(n);
   noFactorSoFar = true;
    for (f=2;f<=s;f++){
     r = n % f;//la variable s no es necesaria
     if (r==0){
        noFactorSoFar = false;
        break;   
     }
    }
    if (noFactorSoFar){
      document.write(n)
      document.write("<br/>");
    }
  }
}

init();
