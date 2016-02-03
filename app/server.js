'use strict';

var _ = require('lodash');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var fs = require('fs');

require('dotenv').load();

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;

require('./routes')(app);
require('./api/api')(app);

// APIs
app.use(express.static(__dirname + '/../web/dist'));

app.listen(port);

console.log('listening on port 8080');
