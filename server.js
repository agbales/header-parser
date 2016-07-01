var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
	process.on('uncaughtException', function (err) {
	    console.log(err);
	}); 
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.get('/:query', function(req, res) {
	var query = req.params.query;
	res.send(query);
});