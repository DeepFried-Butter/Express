const express = require('express');
const router = express.Router();

// Import the user controller
const userController = require('../controllers/userController');

// GET /users - Fetch all users
router.get('/', userController.getAllUsers);

// POST /users - Add a new user
router.post('/', userController.addUser);

// GET /users/:id - Fetch a user by their ID
router.get('/:id', userController.getUserById);

module.exports = router;