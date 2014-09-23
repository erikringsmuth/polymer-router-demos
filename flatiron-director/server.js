var express = require('express');
var app = express();

// static content
app.use(express.static(__dirname));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('server running on port ' + port);
});
