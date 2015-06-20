var express = require('express');
var app = express();

var port = 9000;

app.use(express.static(__dirname));

app.listen(port, function(){
	console.log('listening on port', port);
})