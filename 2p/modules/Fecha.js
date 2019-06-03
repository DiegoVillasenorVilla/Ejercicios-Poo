class Fecha{
    //Constructor(dia,mes,año)
    // metodos get y set para aumentar dia
    //Opcional toString
     constructor(dia,mes,año){
        this.dia=dia;
        this.mes=mes;
        this.año=año;
     }
     toString(){
         return "("+this.dia+","+this.mes+","+this.año+")"
     }
    dia(){
      Fecha=new Date
      this.dia=Fecha.getDay()
      
      console.log(this.dia)//3
      cambiar=Fecha.SetDay()
      

     }
     mes(){
      Fecha2=new Date
      this.mes= Fecha2.getMonth()
      
      console.log(this.mes)//4
      
     }
     año(){
      Fecha3=new Date
      this.año=Fecha3.getFullYear()
      
      console.log(this.año)//2019
     }
     
    
}