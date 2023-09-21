// java script promises

const pro1 = new Promise((resolve, reject)=>{
    const temp =10;
    if(temp > 5){resolve('success');
}
           else{reject('reject');
        }
           
})

pro1.then(
    (val)=>{
        console.log( `TRUE : ${val} `);
    },
    (err)=>{
        console.log(`ERROR : ${err}`)
    }
);