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

//SHOW CHARACTERS
router.get('/:id', function(req, res) {
  Character.findById(req.params.id, function(err, foundACharacter) {
    res.render('characters/show.ejs', {
      character: foundACharacter
    });
  });
});

//DELETE ROUTE
router.delete('/:id', function(req, res) {
  Character.findByIdAndRemove(req.params.id, function() {
    res.redirect('/characters');
  });
});

//EDIT/UPDATE CHARACTERS
router.get('/:id/edit', function(req, res) {
  Character.findById(req.params.id, function(err, foundACharacter) {
    res.render('characters/edit.ejs', {
      character: foundACharacter
    });
  });
});

router.put('/:id', function(req, res){
  Character.findByIdAndUpdate(req.params.id, req.body, function() {
    res.redirect('/characters')
  });
});

//LISTENERS
//---------------------------------
module.exports = router;
