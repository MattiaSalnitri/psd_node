//express lib
var express = require('express');
//general lib
var app = express();
//manages sessions
var session = require('express-session')

app.set('port', (process.env.PORT || 5000));

//use sessions
app.use(session({ 
	//required, used to prevent tampering
	secret: 'string for the hash', 
	//set time of validity of cookies
	cookie: { maxAge: 60000 },
    resave: true, //Forces the session to be saved back to the session store, even if the session was never modified during the request. 
    saveUninitialized: true //Forces a session that is "uninitialized" to be saved to the store. false for lof sessions, or to comply with privacy law
}));

/**
 * @brief main page, it will check if the user is logged in and print his name
 * @return a page with greetings to user if he/she is logged in, a page with a string that notify the user that he/so is not ogged in yet
 */
app.get('/', function(request, response) 
{
	var text = "";
	
	//check if the session exists
	if (request.session.user_id!=null) {
		//print the greetings with the content of the session
		text = 'Hello ' + request.session.user_id;		
	}
	else {
    	text = 'You are not authorized to view this page';
  	}
	
	
	//write response
	response.writeHead(200, {'Content-Type': 'text/html'});	
    response.end(text);
  	
});

/**
 * @brief log in page, thia page will create a session if it is not present ( i.e. it will log in a user)
 * @return a page with notification that auser is logged in, or a page which says that the user is already logged in.
 */
app.get('/login', function(request, response) 
{
	var text = "";
	
	//check if the session exists
	if (request.session.user_id != null) 
	{
    	text = 'You are already logged in';
  	}
	else
	{
		text = 'logged in';
		request.session.user_id = "Mattia";
    	//response.redirect('/my_secret_page');
		
	}
	
	//write response
	response.writeHead(200, {'Content-Type': 'text/html'});	
    response.end(text);
});

/**
 * @brief log out page
 * @return a page with notification that user is logged out, or a page which says that the user is already logged out.
 */
app.get('/logout', function(request, response) 
{
	var text = "";
	
	//check if the session exists
	if (request.session.user_id !=null) 
	{
    	text = 'logged out';
		request.session.user_id = null;
  	}
	else
	{
		text = 'You are already logged out';
		
	}
	
	//write response
	response.writeHead(200, {'Content-Type': 'text/html'});	
    response.end(text);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
