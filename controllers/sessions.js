//SESSIONS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');

//ROUTES
//---------------------------------

//NEW SESSION LOGIN ROUTE
router.get('/signin', function(req, res) {
  res.render('sessions/signin.ejs')
});

//NEW SESSION LOGIN CREATE ROUTE
router.post('/', function(req, res) {
  User.findOne({ username: req.body.username }, function(err, foundOneUser) {
    if (req.body.password === foundOneUser.password) {
      req.session.currentUser = foundOneUser;
      res.redirect('/');
    } else {
      res.redirect('/users/register');
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
