//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//parse get url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('port', (process.env.PORT || 1337));

//use: for both POST and GET
app.use('/', function(request, response) 
{
    //set the headers of the responce
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; // Website you wish to allow to connect
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS"; // Request methods you wish to allow
    headers["Access-Control-Allow-Credentials"] = false;// Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; // Request headers you wish to allow
    
    //answer
    headers["Content-Type"] = "application/json";//format response
    response.writeHead(200, headers);

	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the ontent of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        //content of the post
		var username;
		var password;
		
		//if query is defined and not null
		if ( typeof request.body.username !== 'undefined' && request.body.username)
            //save content of username
			username = request.body.username;
		else 
			username = "not defined";
		
		if ( typeof request.body.password !== 'undefined' && request.body.password)
            //save content of password
    		password = request.body.password;
		else 
			password = "not defined";
			    	
        text = text + "post received: " + username + ", "+ password;
	}
	else
	{
		text = "body undefined";
	}

    console.log(text);
    
    //answer a JSON file
	var otherArray = ["item1", "item2"];
	var otherObject = { item1: "item1val", item2: "item2val" };
    
	var json = JSON.stringify({ 
    	anObject: otherObject, 
	    anArray: otherArray, 
    	another: "item"
	});
    
    //send JSON
    response.end(json);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});