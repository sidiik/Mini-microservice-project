const express = require('express');

const app = express();

app.get('/api/departments/all', (req, res) => {
  console.log('SERVED ON DEPARTMENTS');
  res.json({
    message: 'Get all departments',
  });
});

app.post('/api/departments/new', (req, res) => {
  res.json({
    message: 'Create new department',
  });
});

app.listen(4001, () => console.log('Serving on 4001'));
