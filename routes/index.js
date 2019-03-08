var data = require('../data.json');
var data2 = require('../chats.json');
var data3 = require('../dataAlt.json');
//var data4 = require('../chats2.json');

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
  res.render('chats', data3);
}

exports.overview = function(req, res){
  res.render('overview', data2);
}

// exports.entry = function(req, res){
//   data['entryAlt']=false;
//   res.render('entry', data);
// }

// exports.entryAlt = function(req,res){
//   data['entryAlt']=true;
//   res.render('entry', data);
// }

exports.entry = function(req,res) {
  res.render('entry');
}


//route to profile page with data required
// exports.profiles = function(req, res){
//   res.render('profiles', data3);
// }
