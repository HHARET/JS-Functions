var http = require('http');
var port=process.env.PORT || 5000;
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'test/plain'});
  response.end("Hello");
}).listen(port);
