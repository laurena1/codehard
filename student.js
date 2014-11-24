var mongoose = require('mongoose');
var connString = "mongodb://" + process.env.IP + ":27017/";
var dbName = "studentsdb";


var db = mongoose.connect(connString + dbName);


var studentSchema = require('./student_schema.js').studentSchema;

var Students = mongoose.model('students', studentSchema);

mongoose.connection.once('open', function() {
    
    
     var student1 = {
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
    
     var student2 = {
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
     var student3 = {
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
     var student4 = {
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
    
     var student5 = {
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

    Students.create([student1, student2, student3, student4, student5], function(err) {
        for (var i = 1; i < arguments.length; i++) {
            console.log("\nCreated document: " + arguments[i].first + arguments[i].last);
        }
        mongoose.disconnect();
    });
});