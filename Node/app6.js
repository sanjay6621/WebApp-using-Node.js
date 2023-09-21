const fun1 =  function(a,b,c)// here a b c are arguments we are taking within the function
{
const val1 = a * b * c;// using the arguments which we used in function
return val1; //returning the whatever the value we are getting from the arguments

} //expression

// for the function expressions we cant run the program by calling before initialisation
// if we call fun1(5,6,7) before above function expression t will throws an error

const a= 5;
const b = 6;
const c = 7;

(function(a,b,c){
const val = a * b * c;
console.log(val);// or return(val)
})(a,b,c);//IIFE (imediate invoking function expression) : advanced feature in java script

const fun3 = (function(a,b,c)// different method 
{
    const val = a * b * c;
     return(val)
    })(a,b,c);
    console.log(fun3);

    const fun4 = (a,b,c) => // using arrow format for the function
{
    const val = a * b * c;
     return(val)
    }
    console.log(fun4(7,7,7));

    (() =>{
             console.log('hello');
    })(); // IIFE using arrow format 




 const val1 = fun1(5,6,7);
 const val2 = fun2(5,6,7);

 console.log(val1);
 console.log(val2);

 function fun2(a,b,c) // function decoration 
 {
     const val = a * b* c;
     return val
 }


 let counter = 100
 function loop(val){
     console.log(val);
     if(val<88){
         return 
     }
     const temp = val-1
     loop(temp);
 }
     // loop(counter);

 function loop2(val){
     console.log(val);
     if (val>0){
         val =  val-1 ;
      loop2(val);
     }
     loop(counter); // calling the above loop.
     return 'end';
 }
 const looper = loop2(25);
 console.log(looper);

 
 