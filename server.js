//SERVER.JS

//DEPENDENCIES
//---------------------------------
var express = require('express');
var app = express();
var port = 3000;

//MIDDLEWARE
//---------------------------------
app.use(express.static('public'));

var usersController = require('./controllers/users.js');
app.use('/users', usersController);


//ROOT ROUTE
app.get('/', function(req, res){
  res.render('index.ejs')
});

//LISTENERS
//---------------------------------
app.listen(3000, function() {
  console.log('server.js is listening to port ' + port);
});
