//FILMS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var filmSchema = mongoose.Schema({
    title: { type: String, required: true },
    poster: { type: String },
    year: { type: Number, min: 1900, max: 2020 },
    imdb: { type: String },
    characters: [] //[CHARACTERS SCHEMA]
});

var Film = mongoose.model('Film', filmSchema);


//LISTENERS
//---------------------------------

module.exports = Film;
