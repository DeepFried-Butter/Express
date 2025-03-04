const express = require('express');

const app = express();

// Custom Middleware Function
const addUserMiddleware = (req, res, next) => {
    // Add a new property `req.user` with the value "Guest"
    req.user = "Guest";
    // Call the next middleware or route handler
    next();
};

// Route for /welcome with the custom middleware
app.get('/welcome', addUserMiddleware, (req, res) => {
    // Respond with an h1 message that includes the req.user value
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});