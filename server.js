var express = require('express');
var path = require('path');

var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccavutil.js'),
    qs = require('querystring'),
    ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler.js');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'server', 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'server')));

app.get('/', function (request, response){
	response.render('make_payment');
});

app.post('/ccavRequestHandler', function (request, response){
	ccavReqHandler.postReq(request, response);
});

app.post('/ccavResponseHandler', function (request, response){
	ccavResHandler.postRes(request, response);
});

app.listen(port, function(){
	console.log('server is running on port ' + port);
});

