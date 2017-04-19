//USERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Character = require('./characters.js');

//SCHEMA
//---------------------------------

var userSchema = Schema({
    username: { type: String, required: true, unique: true, min: 1 },
    password: { type: String, required: true, min: 1 },
    firstName: String,
    characters: [Character.schema]
});

var User = mongoose.model('User', userSchema);

//LISTENERS
//---------------------------------

module.exports = User;
