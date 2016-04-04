var express = require('express');
var accounts = require('./routes/accounts');

var app = express();

app.use('/accounts',accounts);

module.exports = app;
