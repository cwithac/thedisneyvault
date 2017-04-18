//CHARACTERS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var Character = require('../models/characters.js');
var User = require('../models/users.js');
var Films = require('../models/films.js');

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
          currentUser: req.session.currentUser,
          characters: foundCharacters
    });
  });
});

//ADD CHARACTERS
router.get('/add', function(req, res) {
  User.find({}, function(err, currentUser) {
    Films.find({}, function(err, allFilms) {
      res.render('characters/new.ejs', {
        currentUser: req.session.currentUser,
        films: allFilms
      });
    });
  });
});

router.post('/', function(req, res) {
  Character.create(req.body, function(err, createdCharacter) {
    res.redirect('/characters')
  });
});

//SHOW CHARACTERS
router.get('/:id', function(req, res) {
  Character.findById(req.params.id, function(err, foundACharacter) {
    Films.find({}, function(err, allFilms) {
      res.render('characters/show.ejs', {
        currentUser: req.session.currentUser,
        character: foundACharacter,
        films: allFilms
      })
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
    Films.find({}, function(err, allFilms) {
      res.render('characters/edit.ejs', {
        currentUser: req.session.currentUser,
        character: foundACharacter,
        films: allFilms
      })
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
