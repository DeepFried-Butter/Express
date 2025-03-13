const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.static('public'))

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Start the server on port 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});