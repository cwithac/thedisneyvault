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

//JSON DATA
router.get('/json', function(req,res) {
  Character.find({}, function(err, jsonData) {
    res.send(jsonData);
  });
});


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
  if (req.body.headshot === "") {
    req.body.headshot = 'https://s-media-cache-ak0.pinimg.com/564x/e9/94/7c/e9947cf3e2d092444d4fdec539f49fce.jpg'
  } if (req.body.location === "") {
    req.body.location = "None"
  } if (req.body.enemy === "") {
    req.body.enemy = "None"
  } if (req.body.love === "") {
    req.body.love = "None"
  } if (req.body.friends === "") {
    req.body.friends = "None"
  }
  User.findById(req.body.userID, function(err, currentUser) {
    Films.findById(req.body.filmId, function(err, foundOneFilm){
      Character.create(req.body, function(err, createdCharacter) {
        foundOneFilm.characters.push(createdCharacter);
        currentUser.characters.push(createdCharacter);
        currentUser.save(function(err, data) {
          foundOneFilm.save(function(err, data) {
            res.redirect('/characters')
          });
        });
      });
    });
  });
});


//FILM AND CHARACTERS
// router.post('/', function(req, res) {
//   if (req.body.headshot === "") {
//     req.body.headshot = 'https://s-media-cache-ak0.pinimg.com/564x/e9/94/7c/e9947cf3e2d092444d4fdec539f49fce.jpg'
//   }
//   Films.findById(req.body.filmId, function(err, foundOneFilm){
//     Character.create(req.body, function(err, createdCharacter) {
//       foundOneFilm.characters.push(createdCharacter);
//       foundOneFilm.save(function(err, data) {
//         res.redirect('/characters')
//       });
//     });
//   });
// });



//SHOW CHARACTERS
router.get('/:id', function(req, res) {
  Character.findById(req.params.id, function(err, foundACharacter) {
    Films.findOne({ 'characters._id':req.params.id }, function(err, foundOneFilm) {
      res.render('characters/show.ejs', {
        currentUser: req.session.currentUser,
        film: foundOneFilm,
        character: foundACharacter
      });
    });
  });
});

// //DELETE ROUTE
router.delete('/:id', function(req, res) {
  Character.findByIdAndRemove(req.params.id, function(err, foundACharacter){
    User.findOne({'characters._id': req.params.id}, function(err, foundOneUser) {
      Films.findOne({'characters._id': req.params.id}, function(err, foundOneFilm) {
        foundOneUser.characters.id(req.params.id).remove();
        foundOneFilm.characters.id(req.params.id).remove();
        foundOneUser.save(function(err, data){
          foundOneFilm.save(function(err, data){
            res.redirect('/characters')
          });
        });
      });
    });
  });
});


// //DELETE ROUTE
// router.delete('/:id', function(req, res) {
//   Character.findByIdAndRemove(req.params.id, function() {
//     Films.findOne({'characters._id': req.params.id}, function(err, foundOneFilm){
//       foundOneFilm.characters.id(req.params.id).remove();
//       foundOneFilm.save(function(err, data){
//         res.redirect('/characters');
//       });
//     });
//   });
// });

//EDIT/UPDATE CHARACTERS
router.get('/:id/edit', function(req, res) {
  Character.findById(req.params.id, function(err, foundACharacter) {
    Films.find({}, function(err, allFilms) {
      Films.findOne({ 'characters._id':req.params.id }, function (err, foundFilmCharacter) {
        res.render('characters/edit.ejs', {
          currentUser: req.session.currentUser,
          character: foundACharacter,
          films: allFilms,
          characterFilm: foundFilmCharacter
        });
      });
    });
  });
});

router.put('/:id', function(req, res){
  Character.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, updatedCharacter){
    User.findOne({ 'characters._id': req.params.id }, function(err, foundOneUser){
      Films.findOne({ 'characters._id': req.params.id }, function(err, foundOneFilm){
        foundOneUser.characters.id(req.params.id).remove();
        foundOneFilm.characters.id(req.params.id).remove();
        foundOneUser.save(function(err, savedFoundOneUser) {
          foundOneFilm.save(function(err, savedFoundOneFilm) {
            Films.findById(req.body.filmId, function(err, newFilm){
              newFilm.characters.push(updatedCharacter);
              foundOneUser.characters.push(updatedCharacter);
              foundOneUser.save(function(err, savedNewUser) {
                newFilm.save(function(err, savedNewFilm){
                  res.redirect('/characters/' + req.params.id);
                });
              });
            });
          });
        });
      });
    });
  });
});

// router.put('/:id', function(req, res){
//   Character.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, updatedCharacter) {
//     Films.findOne({ 'characters._id' : req.params.id }, function(err, foundOneFilm) {
//       if(foundOneFilm._id.toString() !== req.body.filmId){
//         foundOneFilm.characters.id(req.params.id).remove();
//         foundOneFilm.save(function(err, saveFoundFilm) {
//           Films.findById(req.body.filmId, function(err, newFilm) {
//             newFilm.characters.push(updatedCharacter);
//             newFilm.save(function(err, savedNewFilm){
//               res.redirect('/characters/' + req.params.id);
//             });
//           });
//         });
//       } else {
//         foundOneFilm.characters.id(req.params.id).remove();
//         foundOneFilm.characters.push(updatedCharacter);
//         foundOneFilm.save(function(err, data){
//           res.redirect('/characters/' + req.params.id);
//         });
//       }
//     });
//   });
// });

//LISTENERS
//---------------------------------
module.exports = router;
