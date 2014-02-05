'use strict';
var http        = require('http'); 
var express     = require('express');
var logfmt      = require('logfmt');
var app         = express();
//var port        = process.env.PORT || 3000;
var mongoose    = require('mongoose');
//var database    = require('./config/database');

var uristring   = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://localhost/HelloMongoose';

var theport = process.env.PORT || 5000;

mongoose.connect(database.url);

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

