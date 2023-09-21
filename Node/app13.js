// javascript array introduction

console.clear();
const myArray = ['test ' , 10, true , {one : 'one ' , two : 'two'}];
const myObj =  {one : 'one ' , two : 'two'};
console.log(myArray);

console.log(myArray.length);
console.log(typeof myObj);
console.log(typeof myArray);

const myArray1 = myArray;

myArray1[0]  = 'tested okay '

console.log(myArray);

console.log(myArray1[0]);
console.log(myArray1[1]);
console.log(myArray1[2]);
console.log(myArray1[3]);

console.log(myArray[3] ['two']); // selecting the element within the object using an array.

console.clear();

for (let x=0 ; x<5;x++){
 // myArray1[myArray.length] = 'counter ' + x;
 const temp = 'counter ' + x;
myArray1.push(temp);// add to end

}    //upadating an array

for (let x=0 ; x<3;x++){
    
   // myArray1.pop();
   const temp = myArray1.pop();// remove from end with response
   console.log('removed ' + temp);
   
   }  

   for (let x=0 ; x<3;x++){
     const temp = myArray1.shift();
    console.log('removed from start  ' + temp);
    
    }  

    for (let x=0 ; x<3;x++){
        const temp = ' Add ' + x;
       myArray1.unshift(temp);
       }  // add elements to the begining of the array

        // deleting and adding elements in the array

        // delete myArray1[4]; // results to empty element in the index 4
        // myArray[100] = '100';
        // 94 empty elements will be in console and length should be the 101 cuz array index starts from the '0'.
        //console.log(myArray.length);

    console.log(myArray1);

    for (let x=5 ; x>0 ;x--){
        const temp = ' Value ' + x;
       myArray1.splice( 3,0,temp);
       } 

       console.log(myArray1);








