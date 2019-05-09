//Libraries
var http = require('http');

//create a server
var server = http.createServer(function (req, res) 
{
	res.writeHead(200, {'Content-Type': 'text/html'});

    //get GET
    //include the library directly in the code, when the library is mall and used only once
    var name = require('url').parse(req.url, true).query.name;
    
    //prints the variable
    res.end("name: " + name);
 
});
 
//listen in a specific port
server.listen(1337, '127.0.0.1');
 
//check status
console.log('Server running at http://127.0.0.1:1337/');