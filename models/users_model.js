//so we bring in mongoose here
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, unique: true},
    //username
    hashed_password: String,
    //password
    firstname: {type: String, index: 1, required: true},
    //firstname
    lastname:  {type: String, index: 1, required: true},
    //lastname
    email: String,

});

mongoose.model('User', UserSchema);
//tells mongoose to call User document.