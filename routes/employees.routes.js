const express = require('express');
const router = express.Router();
const db = require('../db');
const employeesController = require('../controllers/employees.controller');

const database = db.employees;

// router.route('/employees').get((req, res) => {
//   res.render('employees', { employees: database });
// });

router.get('/employees', employeesController.getAll);

router.post('/employees', employeesController.addEmployee);

module.exports = router;
