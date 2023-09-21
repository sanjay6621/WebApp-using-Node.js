// async and await  related to the promises

// async function always return the promise 

let counter = 0;
async function hello(mes){
   console.log(mes);
   counter++;

   
   let pro1 = new Promise((res,rej)=>{
    setTimeout(res("works"), 2000);
   
});
    let result = await pro1;
   return `${mes} ${counter} ${result}`;
}

function output(mes){
    counter++;
    console.log(`${mes} ${counter} `)
}

hello('hello world').then((val) =>{
    console.log(val);
})
for (let i=0;i<5;i++){
    output(`Loop ${i}`);
}

// await only works if iyt is uses within the async funnction