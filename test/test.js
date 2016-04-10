var request = require('supertest');
var app = require('../app');

var userId;

describe('Users', function() {
  it('should create a user', function(done) {
    var userInfo = {
      name: {
        first: 'Rene-Jacques',
        last: 'Riel'
      },
      email: 'flamebaud@gmail.com',
      password: 'newPassword'
    };
    request(app)
      .post('/users')
      .send(userInfo)
      .expect(201)
      .expect(function(res) {
        if (!('_id' in res.body)) throw new Error("missing identifier");
        userId = res.body._id;
      })
      .end(function(err, res) { // .end handles the response
        console.log('res');
        console.log(err);
        console.log(res);
        if (err) {
          return done(err);
        }
        done();
      });
  });
  console.log(userId);
  if (userId != null) {
    it('should remove a user', function(done) {
      request('app')
        .delete('/users/'+userId)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  }
});
