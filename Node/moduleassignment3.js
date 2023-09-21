const events = require('events');
const eEmitter = new events.EventEmitter();
const sayHello = function(){
    console.log('Hello');
}

eEmitter.on('greet' , sayHello);
eEmitter.emit('greet' );