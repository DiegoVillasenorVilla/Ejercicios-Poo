    
var abcd = (function(){
    return{
        hello: function hello (){
            return 'Hello world!';
        }
    };
}());

abcd.hello();

var Module = {
    methodOne: function(){
        console.log('Performing a very complex task(1)...');
    },
    methodTwo: function(){
        console.log('Performing a very complex task(2)...');
    }
};

var Module = {};

Module.methodOne = function(){
    console.log('Performing a very complex task(1)...');
}

Module.methodTwo = function(){
    console.log('Performing a very complex task(2)...');
}