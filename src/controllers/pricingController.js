const { calculatePrice } = require('../services/pricingService');

async function calculateDeliveryPrice(req, res) {
  try {
    const { organization_id, total_distance, item_type, zone } = req.body;
    // Call service to calculate price
    const totalPrice = await calculatePrice(organization_id, total_distance, item_type, zone);
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error('Error calculating delivery price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  calculateDeliveryPrice,
};
