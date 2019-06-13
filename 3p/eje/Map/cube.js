let cubo = function(list){
    return list.map(function(numero){
        return numero*numero*numero;
    });
};

let array= [5,4,3,2,1];
console.log(cubo(array));
