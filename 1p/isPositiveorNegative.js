function isPositive(n){
if(n>0)
return 'true '+ n+ ' is positive'
else
return  'false ' + n + '  is negative'
}
function isNegative(n){
  if(n<0)
  return  'true ' + n +' is negative'
  else
  return 'false ' + n +'  is positive'
}
console.log(isPositive(-3))
console.log(isPositive(3))
console.log(isNegative(2))
console.log(isNegative(-2))