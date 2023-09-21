console.clear();
const myArr1 = ['one' , 'two', 55, true, {one : "one ", two : " two"}];

// const val = myArr1.toString(); // converts array to the string

//json method in the javascript

let val = myArr1.toString();
val = JSON.stringify(myArr1); //converts whole array to the string
val = JSON.parse(val); // coverts all strings to objects back
val[0] = 'UPDATED ';


console.log(val);
console.log(myArr1);

const myArr2 = ['one','two', 'three'];
val = myArr2.join('{{||}}'); // here we are not using the let because we are using join and concat of the arrays and let is used if we want to update a value to the varible later on.

val = myArr2.concat(myArr1);

val = myArr2.includes('two'); //checking if value if  there in the array it will return the true or else false

val = myArr2.indexOf('two'); //return the index value

// val = Array.isArray(myArr2);

console.log(val);

// if elements in the array are repeating then we can find the index of the element using the function lastIndexOf() certain element.

// also we can sort the array ex: myArr2.sort();
// console.log(myArr2);  reverse() for reversing the sorted area.

console.clear();
// myArr2.length = 0;
console.log(myArr2);

const myArr3 = myArr2.map(val =>{
    return val;
}) // or const myArr3 = myArr2.map(val => val ) ill get rid of the return statement if we use this type syntax

myArr2[2] =  'hello';
console.log(myArr3);
console.log(myArr2);

const myArr4 = myArr2.map(val =>{
    val += 'Tested';
    return val;
})
console.log(myArr4);

console.log(val);


