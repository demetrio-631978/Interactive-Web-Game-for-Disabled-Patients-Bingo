// backend/__tests__/app.test.js
const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('GET /ping', () => {
  it('should return pong', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('pong');
  });
});
