'use strict';
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

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

app.listen(port);
console.log('Server listening at ' + port);
exports = module.exports = app;
