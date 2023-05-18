const express = require('express');
// const db = require('./db');
const path = require('path');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const employeesRouter = require('./routes/employees.routes');
const unitsRouter = require('./routes/units.routes');

const app = express();

app.engine('.hbs', hbs.engine());
app.set('view engine', '.hbs');

app.use(cors());
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(employeesRouter);
app.use(unitsRouter);

app.get('/home', (req, res) => {
  res.render('home');
});

// app.get('/employees', (req, res) => {
//   res.render('employees', { employees: db.employees });
// });

app.use((req, res) => {
  res.status(404).send('Not found... XD');
});

app.listen(8000, () => {
  console.log('server is running on port 8000');
});

mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');

  let createdAt = '2023-05-15T21:20:06.196+00:00';

  const dateNow = Date.now();
  console.log(dateNow);
  const dateCreate = Date.parse(createdAt);
  console.log(dateCreate);
  console.log(dateCreate - dateNow);
  // let week = 604800000
});
db.on('error', (err) => console.log('Error ' + err));
