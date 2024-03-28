// services/pricingService.js

const { Pricing } = require('../models');

// Function to calculate the delivery price
async function calculatePrice(organizationId, totalDistance, itemType, zone) {
  try {
    // Retrieve pricing details based on organization ID, item type, and zone
    const pricing = await Pricing.findOne({
      where: {
        organizationId,
        zone,
      },
    });

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
