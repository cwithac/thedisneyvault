//FILMS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var Films = require('../models/films.js');
var User = require('../models/users.js');

//ROUTES
//---------------------------------

//FILMS INDEX
// router.get('/', function(req, res) {
//   res.render('films/index.ejs')
// });

//FILMS INDEX UPDATED
router.get('/', function(req, res) {
  Films.find({}, function(err, foundFilms){
    res.render('films/index.ejs', {
      currentUser: req.session.currentUser,
      films: foundFilms
    });
  });
});

//ADD FILMS
router.get('/add', function(req, res) {
  User.find({}, function(err, currentUser) {
    res.render('films/new.ejs', {
      currentUser: req.session.currentUser
    });
  });
});


router.post('/', function(req, res) {
  Films.create(req.body, function(err, createdFilm) {
    res.redirect('/films');
  });
});

//SHOW FILMS
router.get('/:id', function(req, res) {
  Films.findById(req.params.id, function(err, foundOneFilm) {
    res.render('films/show.ejs', {
      currentUser: req.session.currentUser,
      film: foundOneFilm
    });
  });
});

//DELETE FILMS
router.delete('/:id', function(req, res) {
  Films.findByIdAndRemove(req.params.id, function() {
    res.redirect('/films');
  });
});

//UPDATE FILMS
router.get('/:id/edit', function(req, res) {
  Films.findById(req.params.id, function(err, foundOneFilm) {
    res.render('films/edit.ejs', {
      currentUser: req.session.currentUser,
      film: foundOneFilm
    });
  });
});

router.put('/:id', function(req, res) {
  Films.findByIdAndUpdate(req.params.id, req.body, function() {
    res.redirect('/films')
  });
});


//LISTENERS
//---------------------------------
module.exports = router;
