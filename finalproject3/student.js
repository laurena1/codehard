var mongoose = require('mongoose');
var connString = "mongodb://" + "127.0.0.1" + ":27017/";
var dbName = "myapp";


var db = mongoose.connect(connString + dbName);


var studentSchema = require('./models/students_model.js').studentSchema;

var Students = mongoose.model('Student', studentSchema);

mongoose.connection.once('open', function() {
    
    
     var student1 = {
        "first": 'Lauren',
        "last": 'Alvarez',
        "major": 'CIS',
		"email":'Lauren@gmail.com'
    };
    
     var student2 = {
        "first": 'Jordan',
        "last": 'Brittenham',
        "major": 'CIS',
		"email":'Jordan@gmail.com'
    };
     var student3 = {
        "first": 'Derrick',
        "last": 'Burns',
        "major": 'CIS',
		"email":'Derrick@gmail.com'
    };
     var student4 = {
        "first": 'Secia',
        "last": 'Chase',
        "major": 'CIS',
		"email":'Secia@gmail.com'
	};
    
     var student5 = {
        "first": 'Brett',
        "last": 'Dunlap',
        "major": 'CIS',
		"email":'Brett@gmail.com'
    };
    
     var student6 = {
        "first": 'Mayra',
        "last": 'Gomez',
        "major": 'CIS',
		"email":'Mayra@gmail.com'
	};
    
     var student7 = {
        "first": 'Leeland',
        "last": 'Hackbarth',
        "major": 'CIS',
		"email":'Leeland@gmail.com'
    };
    
     var student8 = {
        "first": 'Chern',
        "last": 'Hee',
        "major": 'CIS',
		"email":'Chern@gmail.com'
    };
    
      
    
    
    

		
    //we write both of these objects - which must be properly structured - using
    //the create method.  The callback allows us to catch the error OR
    //work with or even find, the new objects.
    Students.create([student1, student2, student3, student4, student5, student6, student7, student8], function(err) {
        for (var i = 1; i < arguments.length; i++) {
            console.log("\nCreated document: " + arguments[i].first + arguments[i].grades);
        }
        //close up shop
        mongoose.disconnect();
    });
});