//java script objects

const myObj1 = {
    first : "sanjay",
    last : "tulabandula",
    age : 18 ,
    a1 : 'test',
    a2 : 'test2',
    a3 : 'test 3',
      "test 1" : "wow"
};
console.log(myObj1);

console.log(myObj1.first + ' ' + myObj1.last); // dot notation
console.log(myObj1['first'] + ' ' + myObj1['last']);// bracket notation
console.clear();

for(let x=1; x<4 ; x++){
    console.log('a'+x);
    console.log(myObj1['a'+x]); //dynamic object situation 
}

console.log(myObj1['test 1'] ); // we use dynamic notation if we use double quoets or anything special characters
console.clear();

const myobj2 = {
    "first" : "sanjay",
    "last" : "tulabandula",
    "age" : 18 ,
    "test 1" : "wow"
}

myobj2.last = 'NewName';
myobj2.newOne = 'test 1000';
console.log(myobj2.last);
console.log(myobj2);
console.clear();


const myobj3 = myobj2;
myobj3.last = 'changed last name';
console.log(myobj3);
console.log(myobj2);

console.clear();

// for creating complex objects and functions within the objects 

const myobj4 = {
    val: 100,
    val2 : true,
    val3 : {
        first :'sanjay',
        last : 'tulabandula ',

}, 
       val4:{
           first : 'yamini',
           last : 'tualabandula'
       },
fullName : function(val5){
    console.log(this);
    console.log(val5); // as we are passing the test named varible (argument) within the function.
    return this.val3.first + ' ' + this.val3.last},
   
    fullName1 : function(){
    return this.val4.first + ' ' + this.val4.last
}


}

// console.log(myobj4.val3.first + ' ' + myobj4.val3.last);

console.log(myobj4.fullName('test'));
console.log(myobj4.fullName1());
