var express = require('express');
var app = express();

// static content
app.use(express.static(__dirname));

// make the root route '/' return the home page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/home.html');
});

// return not-found-page.html for all other routes
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/not-found.html');
});

var port = 8080;
app.listen(port, function() {
  console.log('server running on port ' + port);
});
