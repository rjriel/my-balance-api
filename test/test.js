var request = require('supertest');
var app = require('../app');

describe('Accounts', function() {
  it('should respond to GET',function(done) {
    request(app)
      .get('/accounts')
      .expect(200, done);
  });
});
