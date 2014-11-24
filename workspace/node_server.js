var express = require ('express');//we have to put this to create an express application
var http = require('http');//we have to add this because we are starting an HTTP server
var url = require("url");
var mongoose = require('mongoose');
var studentSchema = require('./student_schema.js').studentSchema;
var jade = require("jade");
var bodyParser = require('body-parser');

var app = express();//we have to put this to create an express application


app.use(bodyParser.urlencoded({extended: true}));


app.set('views', './views');//here we are setting the ./views directory as teh root for the template documents. 
app.set('view engine', 'jade');//here jade is set as the view engine                        
app.engine('jade', jade.__express);//We need to register teh template engines for the template extensions that we want them to handle by using the app.engine(ext, callback) method. The ext parameter is the file extension used for the template files, and the callback parameter is a function that supports Express's rendering functionality.

var connString = "mongodb://" + process.env.IP + ":27017/";
var dbName = "studentsdb";

mongoose.connect(connString + dbName);
var Students = mongoose.model('students', studentSchema);


//to start the HTTP server, you need to first create a Server object, using the createServer() method. This method retunrs the Server object. The optional requestListner parameter is a callback that is executed when the request event is triggered. The callback should accept two parameters. The first is an IncomingMessage object repreenting the client request, and the second is a ServerResponse object you use to formulate and send the response. Once we create the server object we can begin listening on it by calling the listen() method on the server object.
http.createServer(app).listen(process.env.PORT);

app.on('close', function() {
    console.log("Closed");
    mongoose.disconnect();
});


app.get('/', function(req, res) {   
    var output = "\n";
    output += "";
    res.send('This is our home page to view our list of students add an extension to the url.');
});