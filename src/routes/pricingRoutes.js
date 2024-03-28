const express = require('express');
const router = express.Router();
const { calculateDeliveryPrice } = require('../controllers/pricingController');

/**
 * @swagger
 * /api/pricing/calculate-price:
 *   post:
 *     summary: Calculate delivery price
 *     description: Calculates the total price for food delivery based on various factors.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 description: Zone for delivery
 *               organization_id:
 *                 type: string
 *                 description: ID of the organization
 *               total_distance:
 *                 type: number
 *                 format: double
 *                 description: Total distance for delivery in kilometers
 *               item_type:
 *                 type: string
 *                 description: Type of food item (e.g., "perishable" or "non-perishable")
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   format: double
 *                   description: Total price for delivery in euros
 *       400:
 *         description: Invalid request format
 *       500:
 *         description: Internal server error
 */

router.post('/calculate-price', calculateDeliveryPrice);

module.exports = router;
