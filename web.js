'use strict';
var http        = require('http'); 
var express     = require('express');
var logfmt      = require('logfmt');
var mongoose    = require('mongoose');
var app         = express();

var uristring   = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/HelloMongoose';
//var uristring = require('./config/database');

var theport = process.env.PORT || 5000;

mongoose.connect(uristring);
//mongoose.connect(uristring.url);

app.configure(function(){
  //app.use(logfmt.requestLogger());
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
  //app.use(express.bodyParser());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
});

require('./routes/routes')(app); //pass our application into our routes

app.listen(theport);
console.log('Server listening at ' + theport);
exports = module.exports = app;

