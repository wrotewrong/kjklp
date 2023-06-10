const Employee = require('../models/employees.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Employee.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.renderAllByDate = async (req, res) => {
  try {
    let selectedPeriod = req.query.selectedPeriod || '';
    let selectedRank = req.query.selectedRank || '';
    let selectedArea = req.query.selectedArea || '';

    const sevenDaysAgo = new Date();
    if (selectedPeriod === 'tydzień') {
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 1);
    } else {
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 30);
    }

    const filterQuery = {
      createdAt: { $gte: sevenDaysAgo },
    };

    if (req.query.selectedArea && req.query.selectedArea !== 'PGL LP') {
      filterQuery.area = req.query.selectedArea;
    }

    if (req.query.selectedRank === 'wysokie') {
      filterQuery.rank = { $lte: 5 };
    }

    console.log({ filterQuery });

    const requestedEmployees = await Employee.find(filterQuery).lean();

    res.render('employees', {
      employees: requestedEmployees.sort((a, b) => b.createdAt - a.createdAt),
      selectedPeriod,
      selectedRank,
      selectedArea,
    });
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
