import request from 'supertest';
import { describe, it } from 'mocha';

const app = require('../src/index.ts')
//const app = require('../index');

describe('API Endpoint Tests', () => {
  it('should return a message from /home', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const { message } = res.body;
        if (!message) return done(new Error('Response does not contain a message.'));
        done();
      });
  });
});