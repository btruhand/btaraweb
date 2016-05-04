var path = require('path');
var express = require('express');


var app_directory = path.dirname(require.main.filename);

var handle404 = function(req, res) {
    res.render('404', {"headline" : "404"});
};

exports = module.exports = [ 
    ['/public', express.static(app_directory + '/public')],
    ['/bower', express.static(app_directory + '/bower_components')],
    handle404
];
