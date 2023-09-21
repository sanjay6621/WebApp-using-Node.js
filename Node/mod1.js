const test1 = require('./test1');
const test2 = require('./test2');
// console.log(module.filename);

 test1.A1();  // here for functon we are invoking 
 console.log(test1); // here for object we are using console to print the object in test1 
 console.log(test2);
 const myName = `${test1.A2.first} ${test1.A2.last} `;
console.log(myName); 
const myName2 = `${test2.person.first} ${test2.person.last} `;
console.log(myName2); 


