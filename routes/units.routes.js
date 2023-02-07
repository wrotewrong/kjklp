const express = require('express');
const router = express.Router();
const db = require('../db');

const database = db.units;

router.route('/units').get((req, res) => {
  res.render('units', { units: database });
});

module.exports = router;
