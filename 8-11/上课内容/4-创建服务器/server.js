var http = require("http");

http.createServer(function(req,res){

	res.end("你好");

}).listen(80,"192.168.3.199",function(){
	console.log("服务器已经启动")
})