const fs = require('fs');
const folderName = 'public1';
console.clear();
try{
if(!fs.existsSync(folderName)){
fs.mkdirSync(folderName);
console.log('folder made');
} else{
    console.log('folder exists');
}
}


catch(err){
    console.log(err);
}

const folderPath = `./${folderName}`;

fs.writeFile(folderPath+'/index.html' ,'<h>Hello world </h>', (err)=>{
    if(err) throw err;
    console.log('file created');
} )

 let val1 = fs.readdirSync(folderPath);
 console.log(val1); // fro seein the files present in that folder directory.
