// object and the array iteration using the for each and for in various syntax.

const myArr = [1,2,3,4, 'five' , 'six'];
const myObj = {
    first : "sanjay",
    last : "tulabandula",
    city : "guntur"
}
console.log(myArr.length);

for(let i=0 ; i<myArr.length;i++){
    console.log(myArr[i]);
}

myArr.forEach((val) =>{
      console.log(val);
})

for(key in myObj){
    console.log(key,myObj[key]);
}

console.log(Object.entries(myObj));

// to get from the object type we agin use below syntax we can see how it is getting changed in the console.
Object.entries(myObj).forEach(([val,key]) =>{
    console.log(val,key);
})

console.log(Object.keys(myObj));
console.log(Object.values(myObj));

// example for the for each loop
 const myArr2 = (Object.values(myObj));
  myArr2.forEach((val,index,arr)=>{
console.log(val,index,arr)
  })


