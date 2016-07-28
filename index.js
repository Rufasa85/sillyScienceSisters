var express = require('express');
var app = express();

var ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/static/'));

app.get('/', function(req, res) {
    res.render('index')
});

app.get('/about', function(req,res) {
    res.render('about')
});

app.get('/mail', function(req, res) {
    res.render('mail')
});


app.get('/offerings', function(req, res) {
    res.render('offerings')
});

app.get('/gallery', function(req, res) {
    res.render('gallery')
});



app.listen(3000);
