

//Caracteres
//primerBlanco = /^ /
//ultimoBlanco = / $/
//variosBlancos = /[ ]+/g
function contadordePalabras(){
 textArea=document.getElementById('TextA')
 caracteres=textArea.length;
 textAreaSplit=textArea.split(" ");
 palabras= textAreaSplit.length;

 
 
 document.getElementById("afuera").innerHTML=palabras+" numero de palabras"
 
}

