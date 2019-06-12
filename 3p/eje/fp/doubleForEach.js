//doubles using ForEach: no k
let doubleFE= function(list){
    let result=[];
    list.forEach(function(number){
      result.push(number*2);
    });
    return result;
}
let a=[5,4,3,2,1];
console.log(doubleFE(a)); //result here