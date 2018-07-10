var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static('public'));

var server = app.listen(PORT, function() {
    console.log(`App is Listening on PORT: ${PORT}`);
});