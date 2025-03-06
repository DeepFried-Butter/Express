const express = require('express');
const app = express();


const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');


app.use('/', studentRoutes);
app.use('/', courseRoutes);

// Custom 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server on port 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});