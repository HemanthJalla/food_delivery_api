// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const options = {
  swaggerDefinition: {
    info: {
      title: 'Food Delivery API',
      version: '1.0.0',
      description: 'API documentation for the Food Delivery App',
    },
    basePath: '/',
  },
  // List of files to be processed by swagger-jsdoc
  apis: ['./src/routes/*.js'], // Path to the API routes files
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec),
};
