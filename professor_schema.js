var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var professorSchema = new Schema({
   
    first: {
        type: String,
        index: 1,
        required: true,
        unique: true
    },
    last: {
        type: String,
        index: 1,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        index:1,
        required: true,
        unique: true
        },
        
        email: {
        type: String, //subject to change
        index:1,
        required: true,
        unique: true
    },
        
    id: {
        type: Number,
        index: 1,
        required: true,
        unique: true
    },
    
    department: {
        type: String,
        index: 1,
        required: true,
        unique: true
    },
     email: {
        type: String,
        index: 1,
        required: true,
        unique: true
    },
    
},


{
    collection: 'professors'
});
//Here we are adding a method to the schema. This makes our documents more object-like.


exports.professorSchema = professorSchema;
