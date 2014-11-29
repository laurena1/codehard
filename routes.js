var crypto = require('crypto');
var express = require('express');
module.exports = function(app) {
  
  
   /*var photos = require('./controllers/photos_controller');
    var comments = require('./controllers/comments_controller');
    var pages = require('./controllers/pages_controller');*/
  
  var users = require('./controllers/users_controller');
  app.use('/static', express.static( './static')).
      use('/lib', express.static( './lib')
  );
  app.get('/', function(req, res){
    if (req.session.user) {
      res.render('index', {username: req.session.username,
                           msg:req.session.msg}); //from index to photos
    } else {
      req.session.msg = 'Access denied!';
      res.redirect('/login');
    }
  });
  app.get('/user', function(req, res){
    if (req.session.user) {
      res.render('user', {msg:req.session.msg});
    } else {
      req.session.msg = 'Access denied!';
      res.redirect('/login');
    }
  });
  app.get('/signup', function(req, res){
    if(req.session.user){
      res.redirect('/');
    }
    res.render('signup', {msg:req.session.msg});
  });
  app.get('/login',  function(req, res){
    if(req.session.user){
      res.redirect('/');
    }
    res.render('login', {msg:req.session.msg});
  });
  app.get('/logout', function(req, res){
    req.session.destroy(function(){
      res.redirect('/login');
      
      
    });
        
   /* app.use('/static', express.static('./static')).
    app.use('/images', express.static('./static/images')).
    app.use('/lib', express.static('../lib'));
    app.get('/', function(req, res) {
        
        res.render('photos');*/
    
  });
  app.post('/signup', users.signup);
  app.post('/user/update', users.updateUser);
  app.post('/user/delete', users.deleteUser);
  app.post('/login', users.login);
  app.get('/user/profile', users.getUserProfile);
  
  
  
  /*app.get('/photos', photos.getPhotos);
  app.get('/photo', photos.getPhoto);
  app.get('/page', pages.getPage);
  app.get('/comments/get', comments.getComment);
  app.post('/comments/add', comments.addComment);*/
  
  
};
