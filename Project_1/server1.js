//运行它node server.js时，它会马上在命令行上输出“Server has started.”。当我们向服务器发出请求（在浏览器访问http://localhost:8888/ ），“Request received.”这条消息就会在命令行中出现。

//这就是事件驱动的异步服务器端JavaScript和它的回调啦！
var http = require("http");
/*
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end()
}).listen(8888)
*/

function onRequest(request,response){
	console.log("Request recerived.");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");