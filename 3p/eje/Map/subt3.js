let subt = function(list){
    return list.map(function(number){
        return number-3;
    });
};

let a = [5,4,3,2,1];
console.log(subt(a));