//FILMS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();

//ROUTES
//---------------------------------

router.get('/', function(req, res) {
  res.render('films/index.ejs')
});

//LISTENERS
//---------------------------------
module.exports = router;
