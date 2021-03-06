
/*
Routes has express which governs redirecting of pages. Lauren worked on the first few get requests, Chern worked on the last half and Rodirgo did the app.post and app.get at the bottom of the page. Credits given to the
author of the book because we used alot of it.
*/

var crypto = require('crypto');
var express = require('express');
module.exports = function(app) {
  

  var users = require('./controllers/users_controller');
  var students = require('./controllers/students_controller');
  app.use('/static', express.static( './static')).
      use('/lib', express.static( './lib')
  );
  app.get('/', function(req, res){
    if (req.session.user) {
      res.render('index', {username: req.session.username,
                           msg:req.session.msg});
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
  
  app.get('/list',  function(req, res){
    if(req.session.user){
      res.render('studentlist', {msg:req.session.msg});
    }else{
      res.redirect('/login');
    }
  });
  
  app.get('/logout', function(req, res){
    req.session.destroy(function(){
      res.redirect('/login');
    });
  });


  app.get('/showstudentprofile', function(req, res){
    if (req.session.user) {
      res.render('studentprofile', {username: req.session.username,
                           msg:req.session.msg});
    } else {
      req.session.msg = 'Access denied!';
      res.redirect('/login');
    }
  });

  app.post('/signup', users.signup);
  app.post('/user/update', users.updateUser);
  app.post('/user/delete', users.deleteUser);
  app.post('/login', users.login);
  app.get('/user/profile', users.getUserProfile);
  app.get('/students/list', students.getStudents);
  app.get('/studentprofile/:email', students.getStudent);
}