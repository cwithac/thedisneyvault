//USERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//SCHEMA
//---------------------------------

var userSchema = Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    created: [] //[CHARACTERS SCHEMA]
});

var User = mongoose.model('User', userSchema);

//LISTENERS
//---------------------------------

module.exports = User;
