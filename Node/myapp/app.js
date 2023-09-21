const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const myObj = require('./users')
const port = process.env.PORT ||3000;

const logOutput = (req,res,next)=>{
    console.log('middleware in action');
    console.log(req.params);
    next();
}
app.use(logOutput);

app.use(bodyparser.urlencoded({extended:true}))



console.log(myObj);

app.get('/users',(req,res)=>{
    res.json(myObj)
})

console.log(myObj.users.some((ele)=>ele.id ==1));

app.get('/users/:id',(req,res)=>{
console.log(req.params)
let myJson =[];
 if(myObj.users.some((ele)=>ele.id === parseInt(req.params.id))){
myJson = myObj.users.filter((ele)=>ele.id === parseInt(req.params.id))
 }
    res.json(myJson)
})

/*
// const path = require('path');
//const fileName = 'index.html';
//const url = path.join(__dirname,'public','index.html');
//console.log(url);

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
   res.sendFile(url);
  // res.sendFile(sendFile);
  })*/
  app.post('/users',(req,res)=>{
console.log(req); // middle ware request getting with post method.
  })

app.get('/user',(req,res)=>{
    res.sendFile(__dirname + '/index2.html');
})

app.post('/users',(req,res)=>{
   console.clear();
   console.log('ready');
   res.send(`DONE: user ${req.body.user} ${req.body.Id}`);
})

/*
app.get('/info',(req,res)=>{
    res.send('<h1>Info</h1>');
})
//pettern match
app.get('/ab?cd',(req,res)=>{
    res.send('<h1>ABC</h1>');
})

app.get('/ab+de',(req,res)=>{
    res.send('<h1>ABCDE</h1>');
}) //'/ab*de' we can add any elements in between ab and de output will not change

//reg expression
app.get('/z/',(req,res)=>{
    res.send('<h1>zzz</h1>');
}) // /z/ even if in url one letter of z there iw willl give the message zzz note: without single quotes

// route paramters
app.get('/users/:id/:val',(req,res,next)=>{
    res.send(req.params)
    console.log(req.params.id)
    next()
},
    (req,res,next)=>{
        console.log(`second callback ${req.params.val} `)
    next()
},

(req,res,next)=>{
    console.log(`third callback ${req.params.val} `)
})*/

app.listen(port,()=>{
    console.log(`Ready listening on ${port}`)
})

app.get('/users/:Id',(req,res)=>{
    const Id = req.params.id;
    console.log('found' +Id);
    res.send('found' +Id);
})

app.delete('/users/:Id',(req,res)=>{
    const Id = req.params.Id;
    console.log('deleted' +Id);
    res.send({status : 'deleted',Id :Id});
})

app.put('/users/:Id',(req,res)=>{
    const Id = req.params.Id;
    console.log('updated' +Id);
    res.send({status : 'updated',Id :Id});
})