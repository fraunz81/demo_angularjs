//Lets requrire/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT = 3001;

//We need a function which handles requests and send response
function handleRequest(req, res) 
{
	res.end('It works! Path hit: ' + req.url);
}

// Create a server
var server = http.createServer(handleRequest);

// Lets start our server
server.listen(PORT, function ()
{
	// Callback triggered when server is successfully listening, Hurray!
	console.log("Server listening on: http://localhost:%s", PORT);
});
