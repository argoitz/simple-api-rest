const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  enroll: {
      type: Boolean,
      default: false
  }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;