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
      res.send('Signed In');
    } else {
      res.send('Incorrect Password');
    }
  });
});

//LISTENERS
//---------------------------------
module.exports = router;
