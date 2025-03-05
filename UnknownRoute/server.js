// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Route: GET /products
app.get('/products', (req, res) => {
    res.send('Here is the list of all products.');
});

// Route: POST /products
app.post('/products', (req, res) => {
    res.send('A new product has been added.');
});

// Route: GET /categories
app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories.');
});

// Route: POST /categories
app.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

// Wildcard route to handle undefined routes
app.use('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server on port 4000
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});