var mongoose = require('mongoose');
var connString = "mongodb://" + process.env.IP + ":27017/";
var dbName = "studentsdb";


var db = mongoose.connect(connString + dbName);


var studentSchema = require('./student_schema.js').studentSchema;

var Students = mongoose.model('students', studentSchema);

mongoose.connection.once('open', function() {
    
    
     var employee1 = {
        "first": 'Lauren',
        "last": 'Alvarez',
        "major": 'CIS',
        "phone": 8066564564,
        "id": '01',
        "currentCity": 'Canyon',
        "currentState": 'TX',
        "gpa": '3.5',
        "gradYear": '2015'
        
    };
    
     var employee2 = {
        "first": 'Jordan',
        "last": 'Brittenham',
        "major": 'CIS',
         "phone": 9066564564,
        "id": '02',
        "currentCity": 'Canyon',
        "currentState": 'TX',
        "gpa": '3.1',
        "gradYear": '2015'
      
		
    };
     var employee3 = {
        "first": 'Derrick',
        "last": 'Burns',
        "major": 'CIS',
         "phone": 5176564564,
        "id": '03',
        "currentCity": 'Canyon',
        "currentState": 'TX',
        "gpa": '3.2',
        "gradYear": '2019'
		
    };
     var employee4 = {
        "first": 'Secia',
        "last": 'Chase',
        "major": 'CIS',
         "phone": 8066564564,
        "id": '04',
        "currentCity": 'Canyon',
        "currentState": 'TX',
        "gpa": '3.4',
        "gradYear": '2014'
		
    };
    
     var employee5 = {
        "first": 'Brett',
        "last": 'Dunlap',
        "major": 'CIS',
         "phone": 8066564564,
        "id": '05',
        "currentCity": 'Canyon',
        "currentState": 'TX',
        "gpa": '3.4',
        "gradYear": '2017'
        
    };

    //we write both of these objects - which must be properly structured - using
    //the create method.  The callback allows us to catch the error OR
    //work with or even find, the new objects.
    Students.create([employee1, employee2, employee3, employee4, employee5], function(err) {
        for (var i = 1; i < arguments.length; i++) {
            console.log("\nCreated document: " + arguments[i].first + arguments[i].last);
        }
        //close up shop
        mongoose.disconnect();
    });
});