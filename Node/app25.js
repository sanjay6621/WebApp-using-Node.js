// javascript single thread 

function test1(){
    return test1();
}
 /* // example for the return function
    var test4 = function test5(i){
        console.log(i);
        if(i<5){
            test5(i+1);
        }
        
    }
    test4(0); */


console.log('one');
  // test1();
console.log('two');

// Event loop checks the call stack -

 // console.clear();

const one = () => console.log('one');
const two = () => console.log('two');

const test2 = () =>{
    console.log('three');
    one();
    two();
}
test2();

const test3 = () =>{
    console.log('three');
    setTimeout(one , 0);
    two();
}

test3();

// event loop give proirity to call stck - only once the stack is completed and nothing there it checks the queue

console.clear();

(()=>{  // IIFE immediately invoked function 
       console.log('run right away');
})(); 

setTimeout(()=>{
    console.log('i ran after one second');
} , 1000);
