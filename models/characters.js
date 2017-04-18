//CHARACTERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var charSchema = mongoose.Schema({
    name: { type: String, required: true },
    headshot: { type: String, required: true },
    location: { type: String },
    kind: Array,
    quote: { type: String },
    enemy: { type: String },
    love: { type: String },
    friends: Array,
    additional: Array
});

var Character = mongoose.model('Character', charSchema);


//LISTENERS
//---------------------------------

module.exports = Character;
