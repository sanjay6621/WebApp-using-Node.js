// java asynchronus programming

 /// console.log(global);

 let a = 'hello';
 let counter = 0
 function timer(val){
     message(`timer ran  ${val} ${a}` );
 }

 function message(val){
    counter++;
    console.log(` ${counter } . -${val} `);
 }

 for (let i=5;i>0;i--){
    setTimeout(timer, i*1000, ` Loop : ${i}`);
 }
 
 console.log('new val');

 a ='world';