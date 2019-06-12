//
// object literal: methods inside
//
var Module ={
    methodOne: function(){
        console.log('perfoming a very complex task(1)...');
    },//la coma es para separar los 2 metodos
    methodTwo: function(){
        console.log('perfoming a very complex task(2)...');
    }
};

//
//Other representation: methods outside
//
var Modulo ={};
    Modulo.methodOne= function(){//Se agrega Module.nombre del metodo
        console.log('perfoming a very complex task(1)...');
    }//la coma No va aqui
    Modulo.methodTwo=function(){
        console.log('perfoming a very complex task(2)...');
    }

 
