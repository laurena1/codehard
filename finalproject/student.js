var mongoose = require('mongoose');
var connString = "mongodb://" + "127.0.0.1" + ":27017/";
var dbName = "myapp";


var db = mongoose.connect(connString + dbName);


var studentSchema = require('./models/students_model.js').studentSchema;

var Students = mongoose.model('students', studentSchema);

mongoose.connection.once('open', function() {
    
    
     var student1 = {
        "first": 'Lauren',
        "last": 'Alvarez',
        "major": 'CIS'
    };
    
     var student2 = {
        "first": 'Jordan',
        "last": 'Brittenham',
        "major": 'CIS'
    };
     var student3 = {
        "first": 'Derrick',
        "last": 'Burns',
        "major": 'CIS'
    };
     var student4 = {
        "first": 'Secia',
        "last": 'Chase',
        "major": 'CIS'
	};
    
     var student5 = {
        "first": 'Brett',
        "last": 'Dunlap',
        "major": 'CIS'
    };
    
     var student6 = {
        "first": 'Mayra',
        "last": 'Gomez',
        "major": 'CIS'
	};
    
     var student7 = {
        "first": 'Leeland',
        "last": 'Hackbarth',
        "major": 'CIS'
    };
    
     var student8 = {
        "first": 'Chern',
        "last": 'Wee',
        "major": 'CIS'
    };
    
      var student9 = {
        "first": 'Jason',
        "last": 'Madison',
        "major": 'CIS'
    };
    
    
    
    var student10 = new Students({
        "first": 'Alejandro',
        "last": 'Magallanes',
        "major": 'CIS'
		});
		
		  var student11 = new Students({
        "first": 'Rodrigo',
        "last": 'Mata',
        "major": 'CIS'
		});
		
		 var student12 = new Students({
        "first": 'Anthony',
        "last": 'Petruccione',
        "major": 'CIS'
		});

    //these are JavaScript objects
    var student13 = {
        "first": 'James',
        "last": 'Ritter',
        "major": 'CIS'
    };
    
        var student14 = {
        "firstname": 'Skyler',
        "lastname": 'Schmidt',
        "major": 'CIS',

    };
    
    
    

		
    //we write both of these objects - which must be properly structured - using
    //the create method.  The callback allows us to catch the error OR
    //work with or even find, the new objects.
    Students.create([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10, student11, student12, student13, student14], function(err) {
        for (var i = 1; i < arguments.length; i++) {
            console.log("\nCreated document: " + arguments[i].first + arguments[i].grades);
        }
        //close up shop
        mongoose.disconnect();
    });
});