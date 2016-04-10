var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
