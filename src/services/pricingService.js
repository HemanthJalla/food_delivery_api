// services/pricingService.js

const Pricing = require('../models/pricing');

async function calculatePrice(organizationId, totalDistance, itemType, zone) {
  try {
    const pricing = await Pricing.findOne({ organizationId, zone });
    if (!pricing) {
      throw new Error('Pricing not found for the provided organization and zone');
    }

    // Calculate the base price
    let totalPrice = pricing.fixPrice;

    // Calculate additional price based on distance
    const additionalDistance = Math.max(0, totalDistance - pricing.baseDistanceInKm);
    totalPrice += additionalDistance * (itemType === 'perishable' ? pricing.kmPrice : pricing.kmPrice);

    return totalPrice;
  } catch (error) {
    throw new Error('Error calculating delivery price: ' + error.message);
  }
}

module.exports = {
  calculatePrice,
};
