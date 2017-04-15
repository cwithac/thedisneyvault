//SERVER.JS

//DEPENDENCIES
//---------------------------------
var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MIDDLEWARE
//---------------------------------
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

var usersController = require('./controllers/users.js');
app.use('/users', usersController);


//ROOT ROUTE
app.get('/', function(req, res){
  res.render('index.ejs')
});

//LISTENERS
//---------------------------------

mongoose.connect('mongodb://localhost:27017/thedisneyvault');

mongoose.connection.once('open', function() {
  console.log('server.js is connected to mongo');
});

app.listen(3000, function() {
  console.log('server.js is listening to port ' + port);
});
