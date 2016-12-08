/*
 * POC for Polymer
 * Server JS
 * Basic server entry for all web and service requests
 *
 * @license Apollo Global, Inc. V 1.0
 *
 * Apollo Global, Inc.
 * License MIT
 */


express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json());


var port = process.env.PORT || 8888;

app.use(express.static(__dirname + '/../public'));

app.route('/api/customer')
    .post(function(req, rep) {
        var customer = req.body
        rep.status(200).send("success");
    });

app.listen(port);
console.log('Magic happens on port ' + port + ' ' + __dirname + '/../public');
module.exports = app;
