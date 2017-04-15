//SERVER.JS

//DEPENDENCIES
//---------------------------------
var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');

//MIDDLEWARE
//---------------------------------
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret: "awholenewworld",
  resave: false,
  saveUninitialized: false
}));
app.use(methodOverride('_method'));

var usersController = require('./controllers/users.js');
app.use('/users', usersController);

var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);


//ROOT ROUTE
app.get('/', function(req, res){
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
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
