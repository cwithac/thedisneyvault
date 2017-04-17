//SERVER.JS

//DEPENDENCIES
//---------------------------------
var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/thedisneyvault';

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

var filmsController = require('./controllers/films.js');
app.use('/films', filmsController);

var charactersController = require('./controllers/characters.js');
app.use('/characters', charactersController);


//ROOT ROUTE
app.get('/', function(req, res){
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});

//LISTENERS
//---------------------------------

mongoose.connect(mongoDBURI);

mongoose.connection.once('open', function() {
  console.log('server.js is connected to mongo');
});

app.listen(port, function() {
  console.log('server.js is listening to port ' + port);
});
