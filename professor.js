var mongoose = require('mongoose');
var connString = "mongodb://" + process.env.IP + ":27017/";
var dbName = "studentsdb";


var db = mongoose.connect(connString + dbName);


var professorSchema = require('./student_schema.js').professorSchema;

var Professors = mongoose.model('professors', professorSchema);

mongoose.connection.once('open', function() {
    
    
     var professor1 = {
        "first": 'Jeffry',
        "last": 'Babb',
        "phone": 8064346789,
        "id": '06',
        "department": 'Computer Information Systems',
        "email": 'babb@buffs.wtamu.edu'
    };
    
    var professor2 = {
       "first": 'Hugo',
        "last": 'Stiglitz',
        "phone": 8176567890,
        "id": '07',
        "department": 'English',
        "email": 'inglorious@gmail.com'
        
    };
    var professor3 = {
        "first": 'Anna',
        "last": 'Robins',
        "phone": 7146787654,
        "id": '08',
        "department": 'Education',
        "email": 'frefrefresh@gmail.com'
        
    };
    var professor4 = {
       "first": 'Thomas',
        "last": 'Aquinas',
        "phone": 8067895432,
        "id": '09',
        "department": 'Psychology',
        "email": 'taqua@gmail.com'
        
    };
    var professor5 = {
        "first": 'Jeffry',
        "last": 'Babb',
        "phone": 8067650987,
        "id": '10',
        "department": 'Computer Science',
        "email": 'jeff@gmial.com'
        
    };

    //we write both of these objects - which must be properly structured - using
    //the create method.  The callback allows us to catch the error OR
    //work with or even find, the new objects.
    Professors.create([professor1, professor2, professor3, professor4, professor5], function(err) {
        for (var i = 1; i < arguments.length; i++) {
            console.log("\nCreated document: " + arguments[i].first + arguments[i].last);
        }
        //close up shop
        mongoose.disconnect();
    });
});