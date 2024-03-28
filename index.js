// index.js

const express = require('express');
const swagger = require('./swagger');
const app = express();
const pricingRoutes = require('./src/routes/pricingRoutes');
require('dotenv').config(); // Load environment variables from .env file
// Middleware
app.use(express.json());

// Mount pricing routes
app.use('/api/pricing', pricingRoutes);

// Serve Swagger UI
app.use('/api-docs', swagger.serve, swagger.setup);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
