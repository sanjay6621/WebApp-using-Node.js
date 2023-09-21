const fs = require('fs');
const dir = 'public';
fs.readdir(dir,(err,files)=>{
    if (err) throw err;
   // console.log(files);
})

try{
    console.log('hello');
}
catch(err){
    //console.log(err);
    console.log('ERROR');
}

class myError extends Error{}
throw new myError('new error');