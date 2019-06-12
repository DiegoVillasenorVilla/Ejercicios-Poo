//
// : an inmediately-invoked function expression(life)->
//
var abc=(function(){
    return{
        hello: function hello(){
            return 'Hello world!';

        }
    };
}());
abc.hello();