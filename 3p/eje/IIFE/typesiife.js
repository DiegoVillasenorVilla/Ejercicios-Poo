//a named function declaration : the most commond one
function foo(){
    console.log('Called foo');
}
// an anonymous function expression
var bar=function(){
    console.log('Called bar!')
}
//an anonymous iife function
(function (){
    console.log('This is invoked inmediately');

})();
//alternative iife syntaxis
(function (){
    console.log('This function is also invoked inmeddiatelly');

})()
