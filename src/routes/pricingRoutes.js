// routes/pricingRoutes.js

// routes/pricingRoutes.js

/**
 * @swagger
 * /api/pricing/calculate-price:
 *   post:
 *     summary: Calculate delivery price
 *     description: Calculate the delivery price based on provided parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               organization_id:
 *                 type: string
 *               total_distance:
 *                 type: number
 *               item_type:
 *                 type: string
 *               zone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 */


const express = require('express');
const router = express.Router();
const { calculateDeliveryPrice } = require('../controllers/pricingController');

// Route to calculate delivery price
router.post('/calculate-price', calculateDeliveryPrice);

module.exports = router;
