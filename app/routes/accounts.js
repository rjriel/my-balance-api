var express = require('express');
var Account = require('../models/account');

var router = express.Router();

router.get('/', function(req, res) {
  res.status(403).send();
});

router.get('/:id', function(req, res) {
  Account.findOne({ _id: req.params.id}, function(err, account) {
    if (account == null)
      res.status(404).send();
    else
      res.status(200).json(account);
  });
});

router.post('/', function(req, res) {
  var newAccount = new Account({
    user: req.body.user,
    name: req.body.name,
    balance: req.body.balance,
    interest: req.body.interest,
    credit: req.body.credit
  });
  newAccount.save();
  res.status(201).json(newAccount);
});

router.put('/:id', function(req, res) {
  var updates = {
    name: req.body.name,
    balance: req.body.balance,
    interest: req.body.interest,
    credit: req.body.credit
  };
  Account.update({ _id: req.params.id }, updates, function(err, account) {
    res.status(204).send();
  });
});

router.delete('/:id', function(req, res) {
  Account.remove({ _id: req.params.id}, function(err) {
    res.status(204).send();
  });
});

module.exports = router;
