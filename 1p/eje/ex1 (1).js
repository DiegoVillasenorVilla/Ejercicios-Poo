var a
var b
var c


print('Agrega un valor para a:')
a= parseInt(readline());
print('Agrega un valor para b:')
b=parseInt(readline());
print('Agrega un valor para c:')
c=parseInt(readline());
if(a==0){
print('Su numero a es neutro aditivo(0)');
} 
if(b==0){
print('Su numero b es neutro aditivo(0)');
}
if(c==0){
print('Su numero c es neutro aditivo(0)');
}
if(a<0){
var cua=a*a
print(' a es negativo por lo tanto su cuadrado es:' + cua);
} 
if(b<0){
var cub=b*b
print('b es negativo por lo tanto su cuadrado es:'+ cub);
}
if(c<0){
var cuc=c*c
print('c es negativo por lo tanto su cuadrado es:' + cuc);
}
var pert=a+b+c
var ecuan=-b-Math.sqrt(b*b-4*(a*c))/2*a
var ecuap=b+Math.sqrt(b*b-4*(a*c))/2*a

print('El perimetro de este triangulo es:' + pert);
print('El resultado de la formula general es:');
print("X1= " + ecuan);
print("X2=" + ecuap); 
