'use strict';

var express = require('express');
var app = express();
var middleware_mounter = require('./config/middleware_mounting')
var middlewares = require('./config/middlewares');

var authenticationAPI = require('./private/api/authenticate');

// Set various things
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8080);

middleware_mounter(app, middlewares);

app.get('/', function(req,res) {
    res.render('index', {"headline" : "Welcome", "year" : new Date().getFullYear()});
});
app.get('/resume', function(req, res) {
    res.render('resume', {"headline" : "Resumé", "year" : new Date().getFullYear()});

});
app.get('/projects', function(req, res) {
    res.render('projects', {"headline" : "Projects", "year" : new Date().getFullYear()});
});
app.get('/timeline', function(req, res) {
    res.render('timeline', {"headline" : "Timeline", "year" : new Date().getFullYear()});
});

// ADMIN RELATED
app.get('/admin', function(req, res) {
	res.render('admin/admin_login');
});
app.post('/admin_login', function(req, res) {
	let promiseResult = authenticationAPI(req.body.username,req.body.password);
	promiseResult.then((result) => {
		res.send({ authenticate : result[0], message : result[1] });
	});
});

// CANNOT FIND ROUTING?
app.use(function(req,res) {
	res.render('404', {headline : "404"});
});

app.listen(app.get('port'), function() {
    console.log('Website listening on port: ' + app.get('port'));
});
