var express = require('express');
var app = express();
var middleware_mounter = require('./config/middleware_mounting')
var middlewares = require('./config/middlewares');

// Set various things
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 8080);

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

middleware_mounter(app, middlewares);

app.listen(app.get('port'), function() {
    console.log('Website listening on port: ' + app.get('port'));
});
