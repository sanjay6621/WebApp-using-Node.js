// function decorations and types of writing functions in javascript 

const myFun4 =  function(a,b,c){
    const val1 = a*b-c;
    return val1;

}
const a4 = myFun4(4,3,6);
const a5 = myFun4(43,32,6);
const a6 = myFun4(43,3,65);
console.log(a4,a5,a6);



function myFun1() {
    console.log('hello');
    console.log('world');
}

function myFun2(message , name , val) {
    console.log('1.'+  message , name , val);
    const val1 = name + '' + message ;
    console.log("2."+val1);
    return val1;

}

function myFun3 (a,b,c){
    const val1 = a*b/c;
    console.log("==="+val1);
   return val1;
}

myFun2("hi" ,"sanjay" , 500);
myFun2("hello ", "yamini" , 1000);
const val1 = myFun2("welcome " , "gowtham ", 2000);
console.log(val1);

const a1 = myFun3(4,3,6);
const a2 = myFun3(43,32,6);
const a3 = myFun3(43,3,65);
console.log(a1,a2,a3);





