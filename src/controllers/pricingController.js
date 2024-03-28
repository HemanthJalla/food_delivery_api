// controllers/pricingController.js

const { calculatePrice } = require('../services/pricingService');

// Controller function to calculate the delivery price
async function calculateDeliveryPrice(req, res) {
  try {
    // Extract necessary data from request body
    const { organization_id, total_distance, item_type, zone } = req.body;

    // Call service function to calculate the price
    const totalPrice = await calculatePrice(organization_id, total_distance, item_type, zone);

    // Send response with calculated price
    res.json({ total_price: totalPrice });
  } catch (error) {
    // Handle errors
    console.error('Error calculating delivery price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  calculateDeliveryPrice,
};
