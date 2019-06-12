//Hacer una resta quitandole 3
let subt3= function(rest){
    return rest.map(function(num){
        return num-3
    });
};
let a=[5,4,3,2,1];
console.log(subt3(a));