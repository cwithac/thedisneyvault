//FILMS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var Character = require('./characters.js');

var filmSchema = mongoose.Schema({
    Title: { type: String },
    Poster: { type: String },
    Year: { type: Number, min: 1900, max: 2020 },
    Plot: { type: String },
    Imdb: { type: String },
    characters: [Character.schema]
});

var Film = mongoose.model('Film', filmSchema);


//LISTENERS
//---------------------------------

module.exports = Film;
