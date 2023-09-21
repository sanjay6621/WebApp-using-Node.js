// javascrip methods 
// reference website doc -> mdn docs

 // Math.ceil() function always rounds a nymber up to then next largest integer
  
 console.log(Math.random());
  const ran1 = Math.random()*100;
  console.log(Math.floor(ran1));
  console.log(Math.ceil(ran1));

  for (let i=0;i<100;i++){
      console.log(ranNum(1,10));
  }
  function ranNum(min,max){
      return Math.floor(Math.random()*max)+min;
  }