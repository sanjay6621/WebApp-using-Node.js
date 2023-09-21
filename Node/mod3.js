// node module export class:

const person = require('./test5');

// also we can write './Node/test5' this will also works.

const friend1 = new person('sanjay' , 'tulabandula');
const friend2 = new person('jane' , 'doe');
const friend3 = new person('jack' , 'jone');

console.log(friend1.first);
console.log(friend1.last);
console.log(friend1.myName());
console.log(friend2.myName());
console.log(friend3.myName());