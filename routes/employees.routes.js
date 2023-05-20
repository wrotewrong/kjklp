const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees.controller');

router.get('/employees/date', employeesController.renderAllByDate);

router.get('/list', employeesController.renderAllByDate);

router.get('/employee', employeesController.getOne);

router.post('/employee', employeesController.addEmployeeIfNotExist);

router.get('/employees', employeesController.getAll);

router.post('/employees', employeesController.addEmployee);

module.exports = router;
