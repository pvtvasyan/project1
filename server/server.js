var http = require("http");
var fs = require("fs");
var body = fs.readFileSync("../pr1.html","utf-8"); 
http.createServer(function(request, response){
    response.setHeader("Content-Type","text/html"); 
	response.write(body);
	response.end();
}).listen(80);