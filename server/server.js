/*
* Choose Your Own Adventure
* Server JS
* Basic server entry for all web and service requests
*
* @license Rebel Technologies, Inc. V 1.0
*
* Rebel Technologies, Inc.
* License MIT
 */


express = require('express');
var app = express();
var port = process.env.PORT || 8888; 

app.use(express.static(__dirname + '/../public'));

app.listen(port);
console.log('Magic happens on port ' + port + ' '  + __dirname + '/../public');
module.exports = app;





