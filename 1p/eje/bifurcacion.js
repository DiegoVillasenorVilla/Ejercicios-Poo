
print ("Teclea un numero:");

 var dia=parseInt(readline());
switch(dia){
case 1:print('Lunes');break;
case 2:print('Martes');break;
case 3:print('Miercoles');break; 
case 4:print('Jueves');break; 
case 5: print('Viernes');break;
case 6: print('Sabado');break;
case 7:print('Domingo');break; 
default:print('Hay un error en:' + dia); break;
}
