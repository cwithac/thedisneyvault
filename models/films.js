//FILMS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');

var filmSchema = mongoose.Schema({
    Title: { type: String },
    Poster: { type: String },
    Year: { type: Number, min: 1900, max: 2020 },
    Plot: { type: String },
    Imdb: { type: String },
    characters: [] //[CHARACTERS SCHEMA]
});

var Film = mongoose.model('Film', filmSchema);


//LISTENERS
//---------------------------------

module.exports = Film;
