import request from 'supertest';
import { describe, it } from 'mocha';

const app = require('../src/index.ts')
//const app = require('../index');

describe('API Endpoint Tests', () => {
  it('should return a message from /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const { hello } = res.body;
        if (!hello) return done(new Error('Response does not contain a message.'));
        done();
      });
  });
});