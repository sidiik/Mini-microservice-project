const express = require('express');

const app = express();

app.get('/api/shifts', (req, res) => {
  res.json({
    message: 'Get all shifts',
  });
});

app.post('/api/shifts', (req, res) => {
  res.json({
    message: 'Create new shift',
  });
});

app.listen(4002, () => console.log('Listening on port 4002'));
