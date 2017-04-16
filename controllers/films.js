//FILMS CONTROLLER

//DEPENDENCIES
//---------------------------------
var express = require('express');
var router = express.Router();
var Films = require('../models/films.js');

//ROUTES
//---------------------------------

// router.get('/', function(req, res) {
//   res.render('films/index.ejs')
// });

router.get('/', function(req, res) {
  Films.find({}, function(err, foundFilms){
    res.render('films/index.ejs', {
      films: foundFilms
    });
  });
});

router.get('/add', function(req, res) {
  res.render('films/new.ejs');
});

router.post('/', function(req, res) {
  Films.create(req.body, function(err, createdFilm) {
    res.redirect('/films');
  });
});

//LISTENERS
//---------------------------------
module.exports = router;
