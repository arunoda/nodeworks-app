var express     = require('express');
var app = express();

app.get('/', function(req, res) {

    res.send("Welcome to Node-EB");
});

var port = process.env.PORT || 80;
console.log('starting app on port:', port);

app.listen(port);
