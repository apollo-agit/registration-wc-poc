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
var cors = require('cors');
app.use(cors());

bodyParser = require('body-parser');
app.use(bodyParser.json());
var uuid = require('node-uuid');

var port = process.env.PORT || 5555;

app.use(express.static(__dirname + '/../public'));

app.route('/api/profile')
    .post(function(req, rep) {
        var profile = req.body
        profile.profileId = uuid.v1();
        rep.status(200).send(profile);
    });



app.listen(port);
console.log('Magic happens on port ' + port + ' ' + __dirname + '/../public');
module.exports = app;
