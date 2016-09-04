//require http model in Node.js
//and set it to http variable
var http = require("http");
var url = require("url");

function start(route,handle){
	//回调函数
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		
		console.log("Request for "+pathname +" recerived.");
		route(handle,pathname);

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello World");
		response.end();
	}
	//call http's function createServer()
//returns a object which has a listen(port number) method
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start= start;



