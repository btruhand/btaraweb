var express = require('express');
var app = express();

// Set various things
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 8080);

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower', express.static(__dirname+ '/bower_components'));

app.get('/', function(req,res) {
    res.render('index', {"headline" : "Welcome", "year" : new Date().getFullYear()});
});

app.listen(app.get('port'), '127.0.0.1', function() {
    console.log('Website listening on port: ' + app.get('port'));
});
