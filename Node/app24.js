// asynchronus programming -> stacks and queues eexamples


const arr = [1,2,3,4,5];
 
console.clear();

arr.forEach((ele)=>{
    console.log(ele);
    console.log('sync');
})    // (i)

function myFun(myArr,callback){
     myArr.forEach((ele)=>{
         setTimeout(callback , 1000, ele);
     })

     myArr.forEach((ele)=>{
        setTimeout(callback , 0 ,`${ele} - `  );
    })

}
    

    myFun(arr , (val)=>{
       //  console.log(val);
        // console.log('async');
    })



    console.log('test'); // set timeout will execute after finishing of all the stack part (i) and test which is in console message will print next and then the async will print after the timeout.

    console.clear();

    console.log('one');
    setTimeout(()=>{
        console.log('five')
    } , 2000);
    console.log('two');
    setTimeout(()=>{
        console.log('four');
    }, 500);
    console.log('threee');
    setTimeout(()=>{
        console.log('three and half')
    }, 0)