//CHARACTERS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var Character = require('../models/characters.js');

//ROUTES
//---------------------------------

//CHARACTERS INDEX
// router.get('/', function(req, res) {
//   res.render('characters/index.ejs')
// });

//CHARARCTERS INDEX UPDATED
router.get('/', function(req, res) {
  Character.find({}, function(err, foundCharacters){
    res.render('characters/index.ejs', {
          characters: foundCharacters
    });
  });
});

//ADD CHARACTERS
router.get('/add', function(req, res) {
  res.render('characters/new.ejs');
});

router.post('/', function(req, res) {
  Character.create(req.body, function(err, createdCharacter) {
    res.redirect('/characters')
  });
});

//LISTENERS
//---------------------------------
module.exports = router;
