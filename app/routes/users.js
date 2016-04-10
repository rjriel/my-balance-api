var express = require('express');
var Account = require('../models/account');
var Transaction = require('../models/transaction');
var User = require('../models/user');
var passwordHash = require('password-hash');

var router = express.Router();

router.get('/', function(req, res) {
  res.status(403).send();
});

router.get('/:id', function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, user) {
    if (user == null)
      res.status(404).send();
    else
      res.status(200).json(user);
  });
});

router.get('/:id/accounts', function(req, res) {
  Account.find({user: req.params.id}, function(err, accounts) {
    res.status(200).json(accounts);
  });
});

router.get('/:id/transactions', function(req, res) {
  Transaction.find({user: req.params.id}, function(err, transactions) {
    res.status(200).json(transactions);
  });
});

router.post('/', function(req, res) {
  var newUser = new User({
    name: {
      last: req.body.name.last,
      first: req.body.name.first },
    email: req.body.email,
    password: passwordHash.generate(req.body.password)
  });
  newUser.save();
  res.status(201).json(newUser);
});

router.put('/:id', function(req, res) {
  var updates = {
    name: {
      first: req.body.name.first,
      last: req.body.name.last
    },
    email: req.body.email
  };
  if (req.body.password != null && req.body.password !== "") {
    updates.password = passwordHash.generate(req.body.password);
  }
  User.update({ _id: req.params.id}, updates, function(err, user) {
    res.status(204).send();
  });
});

router.delete('/:id', function(req, res) {
  User.remove({ _id: req.params.id}, function(err) {
    res.status(204).send();
  });
});

module.exports = router;
