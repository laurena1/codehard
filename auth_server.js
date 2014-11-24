var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});
var mongoose = require('mongoose');
require('./models/users_model.js');
var connString = "mongodb://" + process.env.IP + ":27017/";
console.log(connString + 'myapp');
var conn = mongoose.connect(connString + 'myapp');
//var db = mongoose.connect('mongodb://localhost/comments');
var app = express();


require('./models/comments_model.js');
require('./models/photo_model.js');
require('./models/page_model.js');

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
  secret: 'SECRET',
  cookie: {maxAge: 60*60*1000},
  store: new mongoStore({
      db: mongoose.connection.db,
      collection: 'sessions'
    })
  }));

require('./routes')(app);

app.listen(process.env.PORT, process.env.IP);