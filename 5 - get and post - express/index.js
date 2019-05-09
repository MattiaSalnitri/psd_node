//general lib
var express = require('express');

//instantiate express
var app = express(); 

//part post data
bodyParser = require('body-parser')

//listen in a specific port
app.set('port', (process.env.PORT || 1337));

//specify to use body parser as parser for url
app.use(bodyParser.urlencoded({extended: true}))

//specify to use body parser as parser for json
app.use(bodyParser.json())

//start listening for GET messages on /
app.get('/', function(req, res) 
{
    var text = '';
	res.writeHead(200, {'Content-Type': 'text/html'});

    //get GET
    if (( typeof req.query.username !== 'undefined' && req.query.username) &&
     ( typeof req.query.password !== 'undefined' && req.query.password))
        text = 'The server received a GET call. <br>'
         + 'The content of the username variable is: ' + req.query.username + '<br>'
         + 'The content of the password variable is: ' + req.query.password;
    else
        text = 'Parameters not correct';

    res.end(text);
  	
});

//start listening for POST messages on /
app.post('/', function(req, res) 
{
	var text = '';
	res.writeHead(200, {'Content-Type': 'text/html'});
	
    
    if (( typeof req.body.username !== 'undefined' && req.body.username) &&
     ( typeof req.body.password !== 'undefined' && req.body.password))
        text = 'The server received a POST call. <br>'
         + 'The content of the username variable is: ' + req.body.username + '<br>'
         + 'The content of the password variable is: ' + req.body.password;
    else
        text = 'Parameters not correct';
    
    
    res.end(text);
  	
});
 
//when the app start listening at the port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});