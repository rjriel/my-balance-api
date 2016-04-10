var express = require('express');
var Transaction = require('../models/transaction');
var passwordHash = require('password-hash');

var router = express.Router();

router.get('/', function(req, res) {
  res.status(403).send();
});

router.get('/:id', function(req, res) {
  Transaction.findOne({ _id: req.params.id }, function(err, transaction) {
    if (transaction == null)
      res.status(404).send();
    else
      res.status(200).json(transaction);
  });
});

router.post('/', function(req, res) {
  var newTransaction = new Transaction({
  });
  newTransaction.save();
  res.status(201).json(newTransaction);
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
  Transaction.update({ _id: req.params.id}, updates, function(err, transaction) {
    res.status(204).send();
  });
});

router.delete('/:id', function(req, res) {
  Transaction.remove({ _id: req.params.id}, function(err) {
    res.status(204).send();
  });
});

module.exports = router;
