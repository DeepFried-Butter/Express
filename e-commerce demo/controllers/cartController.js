// GET /cart/:userId - Fetch the cart for a user
const getCartForUser = (req, res) => {
    const userId = req.params.userId;
    res.send(`Fetching cart for user with ID: ${userId}`);
  };
  
  // POST /cart/:userId - Add a product to the user's cart
  const addProductToCart = (req, res) => {
    const userId = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${userId}`);
  };
  
  // Export the controller functions
  module.exports = {
    getCartForUser,
    addProductToCart,
  };