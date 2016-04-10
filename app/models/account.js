var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  user: Schema.Types.ObjectId,
  name: String,
  balance: Number,
  interest: Number,
  credit: Boolean 
});

module.exports = mongoose.model('Account', AccountSchema);
