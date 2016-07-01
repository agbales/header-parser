var express = require('express');
var ua = require('express-useragent')
var path = require('path');
var ip = require('ip');
var app = express();

var port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
	process.on('uncaughtException', function (err) {
	    console.log(err);
	}); 
});

app.use(ua.express());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'))
    
    var ipadd = ip.address();
    var lang = req.acceptsLanguages();
    var soft = req.useragent.platform + "; " + req.useragent.os + " " + req.useragent.version; 
    
    var response = {
        ipaddress: ipadd,
        language: lang,
        software: soft 
    }
    
    res.send(response);

});