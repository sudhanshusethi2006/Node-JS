// creating a server- HTTP, EXPRESS

var http= require('http');


var server= http.createServer(function(request, response){
  //  request.write("<h1>This is Node app</h1>");
  
response.write("<h1>This is Node app</h1>");
//request.end();


})

server.listen(5600);




