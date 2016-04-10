var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  user: Schema.Types.ObjectId,
  name: String,
  amount: Number,
  start: Date,
  end: Date,
  frequency: Number,
  from: Schema.Types.ObjectId,
  to: Schema.Types.ObjectId
});

module.exports = mongoose.model('Transaction', TransactionSchema);
