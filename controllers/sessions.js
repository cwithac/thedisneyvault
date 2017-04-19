//SESSIONS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var bcrypt = require('bcrypt');

//ROUTES
//---------------------------------

//NEW SESSION LOGIN ROUTE
router.get('/signin', function(req, res) {
  res.render('sessions/signin.ejs', {
    currentUser: req.session.currentUser
  });
});

//NEW SESSION LOGIN CREATE ROUTE
//PASSWORD ENCRYPT ON CREATE USER
router.post('/', function(req, res) {
  User.findOne({ username: req.body.username }, function(err, foundOneUser) {
    if (foundOneUser !== null) {
      if (bcrypt.compareSync(req.body.password, foundOneUser.password)) {
        req.session.currentUser = foundOneUser;
        res.redirect('/');
      } else {
        res.redirect('/users/register/tryagain');
      }
    } else {
      res.redirect('/users/register/tryagain');
    }
  });
});


//LOG OUT BUTTON DELETE ROUTE
router.delete('/', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/')
  });
});

//LISTENERS
//---------------------------------
module.exports = router;
