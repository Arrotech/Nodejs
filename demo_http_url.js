// This object has a property called "url" which holds the part of the url that comes after the domain name:
// 8080/summer or 8080/winter

var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write(req.url);
	res.end();
}).listen(8080);