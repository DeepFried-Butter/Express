const express = require('express');
const app = express();

// Custom logging middleware
const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};

// Use the logging middleware for all requests
app.use(loggingMiddleware);

// Endpoint: GET /products
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

// Endpoint: POST /products
app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// Endpoint: GET /categories
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

// Endpoint: POST /categories
app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// Start the server on port 4000
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});