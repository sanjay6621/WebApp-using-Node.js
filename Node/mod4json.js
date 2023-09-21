// core modules http web server setup // json->json1

const http = require('http');
// console.log(http);
const myJson = require('./json1');
console.log(myJson);



http.createServer((req,res)=>{
       res.writeHead(200, {'content-type' : 'application/json'});
       res.write(JSON.stringify(myJson));

      res.end();
       res.end();
}).listen(8080);

console.log('server Running.....');
