//USERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//SCHEMA
//---------------------------------

var userSchema = Schema({
    username: { type: String, required: true, unique: true, minLength: 1 },
    password: { type: String, required: true, minLength: 1 },
    firstName: String,
    characters: String //[CHARACTERS SCHEMA]
});

var User = mongoose.model('User', userSchema);

//LISTENERS
//---------------------------------

module.exports = User;
