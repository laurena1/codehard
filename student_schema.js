var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var studentSchema = new Schema({
   
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
        
        major: {
        type: String,
        index: 1,
        required: true,
        unique: true
      
    },
        phone: {
            type: String, //subject to change
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
        city: {
        type: String,
        index: 1,
        required: true,
        unique: true
    },
        
        state: {
        type: String,
        index: 1,
        required: true,
        unique: true
      
    },
        
  
       
     
},


{
    collection: 'students'
});
//Here we are adding a method to the schema. This makes our documents more object-like.


exports.studentSchema = studentSchema;
