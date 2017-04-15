//CHARACTERS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();

//ROUTES
//---------------------------------

router.get('/', function(req, res) {
  res.render('characters/index.ejs')
});

//LISTENERS
//---------------------------------
module.exports = router;
