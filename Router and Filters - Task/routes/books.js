const express = require('express');
const router = express.Router();


router.get('/books', (req, res) => {
  res.send('Here is the list of books!');
});


router.post('/books', (req, res) => {
  const bookData = req.body; // Access the book data sent in the request body
  console.log('Received book data:', bookData);
  res.send('Book has been added!');
});

module.exports = router;