//USERS MODEL

//DEPENDENCIES
//---------------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//SCHEMA
//---------------------------------

var userSchema = Schema({
    username: String,
    password: String,
    firstName: String
});

var User = mongoose.model('User', userSchema);

//LISTENERS
//---------------------------------

module.exports = User;
