// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Route: GET /orders
app.get('/orders', (req, res) => {
    res.send('Here is the list of all orders.');
});

// Route: POST /orders
app.post('/orders', (req, res) => {
    res.send('A new order has been created.');
});

// Route: GET /users
app.get('/users', (req, res) => {
    res.send('Here is the list of all users.');
});

// Route: POST /users
app.post('/users', (req, res) => {
    res.send('A new user has been added.');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});