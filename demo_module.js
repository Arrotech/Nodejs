var http = require('http');
var dt = require('./date_module');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write("This is the current time: " + dt.MyDateTime());
	res.end();
}).listen(8080);