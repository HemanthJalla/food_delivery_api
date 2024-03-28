// tests/pricing.test.js

const request = require('supertest');
const app = require('../index'); // Assuming your main application file is index.js

describe('Pricing Endpoint Tests', () => {
  it('Should calculate delivery price successfully', async () => {
    const res = await request(app)
      .post('/api/pricing/calculate-price')
      .send({
        organization_id: '005',
        total_distance: 12,
        item_type: 'perishable',
        zone: 'central'
      });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('total_price');
    expect(typeof res.body.total_price).toEqual('number');
  });

  it('Should return 400 if request body is invalid', async () => {
    const res = await request(app)
      .post('/api/pricing/calculate-price')
      .send({
        // Invalid request body
      });
    
    expect(res.statusCode).toEqual(400);
  });
});
