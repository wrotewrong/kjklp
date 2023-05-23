const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    unitName: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String },
    shoulderMarkImg: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Employee', employeeSchema);
