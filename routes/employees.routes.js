const express = require('express');
const router = express.Router();
const db = require('../db');

const database = db.employees;

router.route('/employees').get((req, res) => {
  res.render('employees', { employees: database });
});

module.exports = router;
