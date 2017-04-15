//USERS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();

//NEW USER REGISTER ROUTE
//---------------------------------
router.get('/register', function(req, res) {
res.render('users/register.ejs');
});

//LISTENERS
//---------------------------------
module.exports = router;
