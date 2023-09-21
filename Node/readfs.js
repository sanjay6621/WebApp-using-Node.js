const fs = require('fs');
const fileName = 'test.txt';
const data = fs.readFileSync(fileName,'utf8');
console.log(data);

const arr = ['red' , 'blue','green'];
// fs.append file adds the hello wrod agian2 in the test.txt file

function addMe(data){
fs.appendFile(fileName,`\n${data}`,(err)=>{
    if (err) throw err;
        console.log('DONE');
})
}

arr.forEach((ele)=>{
addMe(ele);
})