// sacar el cubo
 
let CUBE= function(sCUBE){
    return sCUBE.map(function(number){
        var number= Math.pow(number,3)
        return number;
    });
};
let arr=[5,4,3,2,1];
console.log(CUBE(arr));