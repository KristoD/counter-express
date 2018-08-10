var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'secretmuchsecretwow'}));

app.get('/', function(req, res) {
    if(!req.session.counter) {
        req.session.counter = -1;
    }
    req.session.counter++;
    res.render('index', {counter: req.session.counter});
});

app.post('/button', function(req, res) {
    req.session.counter++;
    res.redirect('/');
})

app.post('/reset', function(req, res) {
    req.session.counter = 0;
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("Listening on port 8000...");
})




