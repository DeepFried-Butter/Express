// GET /products - Fetch all products
const getAllProducts = (req, res) => {
    res.send('Fetching all products');
  };
  
  // POST /products - Add a new product
  const addProduct = (req, res) => {
    res.send('Adding a new product');
  };
  
  // GET /products/:id - Fetch a product by its ID
  const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Fetching product with ID: ${productId}`);
  };
  
  // Export the controller functions
  module.exports = {
    getAllProducts,
    addProduct,
    getProductById,
  };