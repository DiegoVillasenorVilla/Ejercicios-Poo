//sacar el cuadrado
let SQUARE= function(sSQUARE){
    return sSQUARE.map(function(num){
        var num= Math.pow(num,2)
        return num;
    });
};
let arr2=[5,4,3,2,1];
console.log(SQUARE(arr2));