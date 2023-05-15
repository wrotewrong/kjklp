const Employee = require('../models/employees.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Employee.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee({
      ...req.body,
    });
    await newEmployee.save();
    res.json({ message: 'OK', newEmployee });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
