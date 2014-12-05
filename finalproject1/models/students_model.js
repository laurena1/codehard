var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var studentSchema = new Schema({
   
    first: {
        type: String,
        index: 1,
        required: true,
        unique: false
    },
        last: {
        type: String,
        index: 1,
        required: true,
        unique: false
    },
        
        major: {
        type: String,
        index: 1,
        required: true,
        unique: false
      
    },
		email: {
       type: String,
        index: 1,
        required: true,
        unique: true
      
    },
  
     
},


{
//    collection: 'students'
});

mongoose.model('Student',studentSchema);
//exports.studentSchema = studentSchema;
