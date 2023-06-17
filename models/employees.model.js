const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true, minlength: 6, maxlength: 70 },
    unitName: { type: String, required: true },
    position: { type: String },
    department: { type: String },
    shoulderMarkImg: { type: String },
    rank: { type: Number },
    area: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Employee', employeeSchema);
