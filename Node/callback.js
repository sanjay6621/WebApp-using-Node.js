// single thread call back 

function adder(a,b){
    console.log('adder');//3
    return a+b;

}
 function doubler(a,b){
     console.log('doubler'); //2
     return adder(a,b)*2;
 }

 function output(a,b){
     console.log(a,b); //1
     const dub = doubler(a,b);
     console.log(dub); // 4
    
 }
 

 output(2,5);