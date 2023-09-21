// javascript promises 

let ready = true;

const checker = new Promise((resolve,reject)=>{
if (ready){
    const markReady = 'this is the result';
    resolve(markReady);
}
else{
    const markNot = 'still working on it';
    reject(markNot);
}
})

console.log(checker);
ready = false;
console.log(checker);


const check1 = () =>{

checker.then(val=>{
    console.group(val);
})
.catch(err=>{
    console.log(err);
})
}
check1();