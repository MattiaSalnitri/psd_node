//Libraries
var http = require('http');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');

//create a server
var server = http.createServer(function (req, res) 
{
	res.writeHead(200, {'Content-Type': 'text/html'});

    //get GET
    var url_parts = url.parse(req.url, true);
    var getVar = url_parts.query; //link new attribute
	
    var text = 'GET: ' +util.inspect(getVar);

    res.end(text);
    
    
});
 
//listen in a specific port
server.listen(1337, '127.0.0.1');
 
//check status
console.log('Server running at http://127.0.0.1:1337/');