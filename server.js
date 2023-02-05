const express = require('express');
const db = require('./db');

const app = express();

app.get('/employees', (req, res) => {
  res.send({ message: db.employees });
});

app.use((req, res) => {
  res.status(404).send('Not found... XD');
});

app.listen(8000, () => {
  console.log('server is running on port 8000');
});
