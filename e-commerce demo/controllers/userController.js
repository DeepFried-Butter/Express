// GET /users - Fetch all users
const getAllUsers = (req, res) => {
    res.send('Fetching all users');
  };
  
  // POST /users - Add a new user
  const addUser = (req, res) => {
    res.send('Adding a new user');
  };
  
  // GET /users/:id - Fetch a user by their ID
  const getUserById = (req, res) => {
    const userId = req.params.id;
    res.send(`Fetching user with ID: ${userId}`);
  };
  
  // Export the controller functions
  module.exports = {
    getAllUsers,
    addUser,
    getUserById,
  };