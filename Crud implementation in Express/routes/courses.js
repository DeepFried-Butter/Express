const express = require('express');
const router = express.Router();

// Demo data
const courses = [
  { id: 1, name: 'Frontend', description: 'HTML, CSS, JS, React' },
  { id: 2, name: 'Backend', description: 'Node.js, Express, MongoDB' },
];

// GET /courses - List all courses
router.get('/courses', (req, res) => {
  const courseNames = courses.map((course) => course.name).join(', ');
  res.send(`Courses: ${courseNames}`);
});

// GET /courses/:id - Fetch a course by ID
router.get('/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);

  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.status(404).send('Course not found');
  }
});

module.exports = router;