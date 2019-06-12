//double using Map: no forEach: no k
let doubleWM= function(list){
    return list.map(function(number){
        return number*2
    });
};
let a=[5,4,3,2,1];
console.log(doubleWM(a));

//other examples
//example 1
['1','2','3'].map(parseFloat)

//example 2
[1, '2', true, [4,5]].map(function (n){
    return typeof n
})

//example 3
[1,2,3].map(
    function(element, index, arr){
        console.log({element: element, index: index, arr:arr})
    }
)
