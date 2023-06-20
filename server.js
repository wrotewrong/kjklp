const express = require('express');
// const db = require('./db');
const path = require('path');
const hbs = require('express-handlebars');
const Handlebars = require('./utils/handlebars.js');
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

app.get('/', (req, res) => {
  res.render('home');
});

app.use((req, res) => {
  res.status(404).send('Not found... XD');
});

app.listen(process.env.PORT || 8000, () => {
  console.log('server is running...');
});

mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));
