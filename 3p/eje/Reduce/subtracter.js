const myArray = [22,9,60,12,4,56];
const sub = (x,y) => x-y;
let mySub = myArray.reduce(sub,0);
console.log(mySub);