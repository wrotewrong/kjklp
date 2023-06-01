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
    // const dropdownDate = ['Wszyscy', 'RDLP w Łodzi', 'RDLP w Gdańsku'];
    const dropdownPeriods = [
      { time: 'week', message: 'tydzień', days: 7 },
      { time: 'month', message: 'miesiąc', days: 30 },
    ];

    const dropdownAreas = [
      { message: 'Wszyscy' },
      { message: 'RDLP w Łodzi' },
      { message: 'RDLP w Gdańsku' },
    ];

    let selectedPeriod = '';
    req.query.selectedPeriod ? (selectedPeriod = req.query.selectedPeriod) : '';
    // selectedValue = req.query.selectedValue;
    console.log(selectedPeriod);

    const sevenDaysAgo = new Date();
    // sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 1);
    if (selectedPeriod === 'tydzień') {
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 1);
      console.log('1');
    } else {
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      console.log('7');
    }

    // const selectedArea = (area) => {
    //   if (area === 'Wszyscy') {
    //     return 'Wszyscy';
    //   } else if (area === 'RDLP w Łodzi') {
    //     return 'RDLP w Łodzi';
    //   } else {
    //     return 'RDLP w Gdańsku';
    //   }
    // };

    const requestedEmployees = await Employee.find({
      createdAt: { $gte: sevenDaysAgo },
    }).lean();

    res.render('employees', {
      employees: requestedEmployees,
      dropdownPeriods,
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
