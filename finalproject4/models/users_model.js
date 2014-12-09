//This schema was for our users and we all worked on this collectively.
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
	College: String,
    hashed_password: String,
	email:String
});
mongoose.model('User', UserSchema);