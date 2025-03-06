const express = require('express');
const router = express.Router();

// Demo data
const students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to the Student & Course Portal API!');
});

// GET /students - List all students
router.get('/students', (req, res) => {
  const studentNames = students.map((student) => student.name).join(', ');
  res.send(`Students: ${studentNames}`);
});

// GET /students/:id - Fetch a student by ID
router.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    res.status(404).send('Student not found');
  }
});

module.exports = router;