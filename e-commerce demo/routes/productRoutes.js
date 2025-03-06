const express = require('express');
const router = express.Router();

// Import the product controller
const productController = require('../controllers/productController');

// GET /products - Fetch all products
router.get('/', productController.getAllProducts);

// GET /products/:id - Fetch a product by its ID
router.get('/:id', productController.getProductById);

// POST /products - Add a new product
router.post('/', productController.addProduct);

module.exports = router;