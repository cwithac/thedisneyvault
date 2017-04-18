//CHARACTERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');

var charSchema = mongoose.Schema({
    name: { type: String, required: true },
    headshot: { type: String, default: 'https://s-media-cache-ak0.pinimg.com/564x/e9/94/7c/e9947cf3e2d092444d4fdec539f49fce.jpg' },
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
