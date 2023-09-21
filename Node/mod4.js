// core modules http web server setup

const http = require('http');
// console.log(http);

http.createServer((req,res)=>{
       res.writeHead(200, {'content-type' : 'text/html'});
       if(req.url == '/'){
           res.write('Main landing page');
       }
       else if(req.url == '/test'){
           res.write('Test page');
       }
       else{
           res.write('Page not found');
       }
      // res.write('Hello');
      // res.write('world');
      //  res.write(` <br> URL = ${req.url} `);
       //res.end('Hello world');
       res.end();
}).listen(8080);

console.log('server Running.....');
