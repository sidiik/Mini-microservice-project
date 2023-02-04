const express = require('express');

const app = express();

app.get('/api/users/all', (req, res) => {
  res.json({
    message: 'Get all users',
  });
});

app.post('/api/users/new', (req, res) => {
  res.json({
    message: 'Create new user',
  });
});

app.listen(4000, console.log('Serving on 4000'));
