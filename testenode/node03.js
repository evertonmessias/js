var http = require('http');

http.createServer(function(req,res){
    res.end("Ola");
}).listen(8080);

console.log('O servidor está On-Line');