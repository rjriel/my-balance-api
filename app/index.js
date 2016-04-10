var express = require('express');
var bodyParser = require('body-parser');
var accounts = require('./routes/accounts');
var users = require('./routes/users');
var transactions = require('./routes/transactions');
var mongoose = require('mongoose');

var connection = "mongodb://rest-api:balance-pw@ds045021.mlab.com:45021/my-balance";

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(connection);

app.use('/accounts', accounts);
app.use('/users', users);
app.use('/transactions', transactions);

module.exports = app;
