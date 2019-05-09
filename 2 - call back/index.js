//Libraries
var http = require('http');
 
//create a server
var server = http.createServer(
    function (req, res) 
    {
        //HTML head (type of the page)
        res.writeHead(200, {'Content-Type': 'text/plain'});
        
        //HTML content
        res.end('Hello World');
        
        print(noDataFormat, "the data");
        //print(coolDataFormat, "the data");
        //print(coolDataFormat, null);
    });
 
//listen in a specific port
server.listen(1337, '127.0.0.1');
 
//check status
console.log('Server running at http://127.0.0.1:1337/');


/**
 * @brief prints data
 */
var print = function(callback, data)
{
    var err;
    if (data==null)
        err = new Error('My custom error!'); 
    else
        err=null;
    
    console.log (callback(err, data));
}

/**
 * @brief format data, with advance controls
 * @return the formatted string received in input
 */
var noDataFormat = function(err, data)
{
    if (err) 
        throw err;
    
    return(data);
}

/**
 * @brief format data, plain text data 
 * @return the formatted string received in input
 */
var coolDataFormat = function(err, data)
{
    if (err) 
        return 'an error occurred, ' + err.message;
    else
        return '_.**'+ data +'**._';
}

