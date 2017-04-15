//SESSIONS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();

//ROUTES
//---------------------------------

//NEW SESSION LOGIN ROUTE
router.get('/signin', function(req, res) {
  res.render('sessions/signin.ejs')
});

//LISTENERS
//---------------------------------
module.exports = router;
