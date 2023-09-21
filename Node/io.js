console.log(process.env);


const rLine = require('readline') .createInterface({
    input : process.stdin,
    output: process.stdout
})

rLine.question(`what is your name` , name=>{
    console.log(name);
    // console.log(process);
    console.log(`welcome ${name} `);
    rLine.close();
})

process.on('exit' ,(val)=>{
    console.log(`process existing `);
    console.log(val);
})

process.on('beforeExit' ,(val)=>{
    console.log(`before existing `);
    console.log(val);
})

console.log(`last message`);

