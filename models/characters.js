//CHARACTERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var charSchema = mongoose.Schema({
    name: { type: String, required: true },
    headshot: { type: String, required: true },
    location: { type: String },
    kind: { type: String },
    quote: { type: String },
    enemy: { type: String },
    love: { type: String },
    friends: { type: String }
});

var Character = mongoose.model('Character', charSchema);


//LISTENERS
//---------------------------------

module.exports = Character;
