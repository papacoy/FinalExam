//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
});
app.get('/gallery', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Gallery.html'));
});
app.get('/trailer', function(req, res){
  res.sendFile(path.join(__dirname, 'views/trailer.html'));
});
app.get('/hero', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Hero.html'));
});
app.get('/enemy', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Enemy.html'));
});
app.get('/god', function(req, res){
  res.sendFile(path.join(__dirname, 'views/God.html'));
});
app.get('/dragonballsuper', function(req, res){
  res.sendFile(path.join(__dirname, 'views/DragonBallSuper.html'));
});
app.get('/dragonballgt', function(req, res){
  res.sendFile(path.join(__dirname, 'views/DragonBallGT.html'));
});
app.get('/dragonballkai', function(req, res){
  res.sendFile(path.join(__dirname, 'views/DragonBallKai.html'));
});
app.get('/dragonballz', function(req, res){
  res.sendFile(path.join(__dirname, 'views/DragonBallZ.html'));
});

app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});