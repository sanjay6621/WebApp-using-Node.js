console.log(process);
for(let x=0 ; x<50000 ; x++){
    console.log(x);
    if (x == 3000){
        process.exit();
        console.log("hello world");
    }
}

//console.log('hello');
//for(let x=0 ; x<50000 ; x++){
  //  console.log(x);
   // if (x == 30000){
     //   process.exit();
    //}
//}
