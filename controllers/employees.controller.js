const Employee = require('../models/employees.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Employee.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getAllByDate = async (req, res) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 1);

    res.json(await Employee.find({ createdAt: { $gte: sevenDaysAgo } }));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getOne = async (req, res) => {
  try {
    const existingEmployee = await Employee.findOne({ ...req.body });
    if (existingEmployee) {
      res.status(200).json(existingEmployee);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.addEmployeeIfNotExist = async (req, res) => {
  try {
    const existingEmployee = await Employee.findOne({ ...req.body });
    if (existingEmployee) {
      console.log(
        `${existingEmployee.fullName} -- ${existingEmployee.position} -- ${existingEmployee.unitName} -- ALREADY EXIST`
      );
      res.status(400).json({ message: 'Already exist' });
    } else {
      const newEmployee = new Employee({ ...req.body });
      await newEmployee.save();
      console.log(
        `${newEmployee.fullName} -- ${newEmployee.position} -- ${newEmployee.unitName} -- HAS BEEN ADDED`
      );
      res.json({ message: 'OK', newEmployee });
    }
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
