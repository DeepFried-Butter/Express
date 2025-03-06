const express = require('express');
const router = express.Router();

// Import the cart controller
const cartController = require('../controllers/cartController');

// GET /cart/:userId - Fetch the cart for a user
router.get('/:userId', cartController.getCartForUser);

// POST /cart/:userId - Add a product to the user's cart
router.post('/:userId', cartController.addProductToCart);

module.exports = router;