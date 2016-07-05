var http = require('http');
var hostname = '127.0.0.1'
var port=5000;
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'test/plain'});
  response.end("Hello");
}).listen(port,hostname);
