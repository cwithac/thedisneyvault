//USERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//SCHEMA
//---------------------------------

var userSchema = Schema({
    username: { type: String, required: true, unique: true, min: 1 },
    password: { type: String, required: true, min: 1 },
    firstName: String,
    created: [] //[CHARACTERS SCHEMA]
});

var User = mongoose.model('User', userSchema);

//LISTENERS
//---------------------------------

module.exports = User;
