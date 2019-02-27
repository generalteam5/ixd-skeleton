var data = require('../data.json');
var data2 = require('../chats.json');
var data3 = require('../facebook.json');

/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index');
};

exports.home = function(req, res){
  res.render('home', data);
}

exports.chats = function(req, res){
  res.render('chats', data2);
}

exports.overview = function(req, res){
  res.render('overview', data2);
}


//route to profile page with data required
exports.profiles = function(req, res){
  res.render('profiles', data3);
}
