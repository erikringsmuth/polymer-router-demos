var express = require('express');
var app = express();

// static content
app.use(express.static(__dirname));

// let pushState and the router do the navigation. return index.html for all non-static-content routes.
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('server running on port ' + port);
});
