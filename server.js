const express = require('express');
const db = require('./db');
const path = require('path');
const hbs = require('express-handlebars');

const employeesRouter = require('./routes/employees.routes');
const unitsRouter = require('./routes/units.routes');

const app = express();

app.engine('.hbs', hbs.engine());
app.set('view engine', '.hbs');

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
