const fs = require('fs');
const dir = './public';
let tempCounter = 1;
let newFileName = `new ${tempCounter}.html`;
console.clear();

function  renameFiler(fileName,newName){
    console.log(fileName);
    fs.rename(fileName,newName,(err)=>{
        if (err) throw err;
        console.log(`File Renamed - ${newName} from ${fileName} `)
    });
}

renameAll() // removing all the files in the folder
function renameAll(){
    fs.readdir(dir ,(err,files)=>{
        if (err) throw err;
        files.forEach((myFile , ind)=>{
           renameFiler(dir +'/' + myFile , `${dir}/new${ind + 0 }.html`);
        })
    })
}


  //  maker();
function maker(){ // it will not run in background because maker is declared but it not called back
for(let i=0;i<5;i++){

fs.readdir(dir,(err,files)=>{
    console.log(files);
    console.log(files.length); // for length of the files and files for searching any files.
    console.log(err);
    tempCounter = files.length +1 +i;
    newFileName = `new ${tempCounter}.html`;
    createNewFile(newFileName);
})
}
}

 // removeAll() // removing all the files in the folder
function removeAll(){
    fs.readdir(dir ,(err,files)=>{
        if (err) throw err;
        files.forEach((myFile)=>{
            delFile(dir +'/' + myFile);
        })
    })
}

// delFile(dir+'/log.html');
function delFile(val){
    fs.unlink(val,(err)=>{
        console.log('file deleted');
    })
}
// overmyLog('sanjay')

function overmyLog(val){ //over writing and create
    const html = `- ${val}`;
    fs.writeFile(dir + '/log.html' ,html,(err)=>{
        if (err) throw err;
        console.log(`updated writeFile ${val}`);
    })
}

function myLog(val){ // adding and create
    const html = `${val} `;
    fs.appendFile(dir +'/log.html' , html,(err)=>{
        if(err) throw err;
        console.log(`*appended ${val}`);
    })
}


function createNewFile(myfileName){
    const html = `<h>Hello ${tempCounter} </h>`;
    fs.appendFile(dir + '/' + myfileName,html,(err)=>{
        if(err) throw err;
        console.log(`save file  ${myfileName}`);
    })
}