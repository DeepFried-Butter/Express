const path = require('path');


const getAllProducts = (req, res) => {
  const filePath = path.join(__dirname, '../views/products.html');
  res.sendFile(filePath);
};

// GET /products/:id - Fetch a product by its ID
const getProductById = (req, res) => {
  const productId = req.params.id;
  res.send(`Fetching product with ID: ${productId}`);
};

// POST /products - Add a new product
const addProduct = (req, res) => {
  res.send('Adding a new product');
};

// Export the controller functions
module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};