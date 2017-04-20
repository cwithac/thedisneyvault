//USERS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var bcrypt = require('bcrypt');

//ROUTES
//---------------------------------

//JSON DATA
// router.get('/json', function(req,res) {
//   User.find({}, function(err, jsonData) {
//     res.send(jsonData);
//   });
// });

//NEW USER REGISTER ROUTE
router.get('/register', function(req, res) {
res.render('users/register.ejs', {
  currentUser: req.session.currentUser
  });
});

//TRY AGAIN REGISTER ROUTE
router.get('/register/tryagain', function(req, res) {
res.render('users/tryagain.ejs', {
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

//USER PROFILE ROUTE DISABLED
// //SHOW USER PROFILE
// router.get('/profile', function(req, res) {
//   User.findById(req.session.currentUser._id, function(err, sessionUser) {
//     res.render('users/profile.ejs', {
//       currentUser: req.session.currentUser,
//       sessionUser: sessionUser
//     });
//   });
// });

//LISTENERS
//---------------------------------
module.exports = router;
