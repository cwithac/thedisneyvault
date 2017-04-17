//USERS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var bcrypt = require('bcrypt');

//ROUTES
//---------------------------------

//NEW USER REGISTER ROUTE
router.get('/register', function(req, res) {
res.render('users/register.ejs', {
  currentUser: req.session.currentUser
  });
});

//NEW USER REGISTRATION CREATION ROUTE
//PASSWORD ENCRYPT ON CREATE USER
router.post('/', function(req, res) {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, function(err, createdUser) {
    res.redirect('/sessions/signin');
  });
});



//LISTENERS
//---------------------------------
module.exports = router;
