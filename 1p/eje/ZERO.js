//jsc online
function argRequired(arg){
if(arg===0)
throw new Error('Error is ZERO');
else
return arg
}
print(argRequired(5));
argRequired(0);
