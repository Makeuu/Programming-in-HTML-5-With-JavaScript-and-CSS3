var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));


//The request and response objects are the same objects that Node.js provides. The last bit
//of code to add is the statements that are required to listen for a request as follows.
var port = 8082;
app.listen(port);
console.log('Listening on port: ' + port);