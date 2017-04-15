//USERS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');

//ROUTES
//---------------------------------

//NEW USER REGISTER ROUTE
router.get('/register', function(req, res) {
res.render('users/register.ejs');
});

//NEW USER REGISTRATION CREATION ROUTE
router.post('/', function(req, res) {
  User.create(req.body, function(err, createdUser) {
    res.redirect('/');
  });
});

//LISTENERS
//---------------------------------
module.exports = router;
