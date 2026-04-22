const mongoose = require('mongoose');

const employeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const EmployModel=mongoose.model('Employ', employeSchema);

module.exports = EmployModel;