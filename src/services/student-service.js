const Joi = require("joi");
const studentModel = require("../models/student-model");

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
    default: false,
  },
  created: { type: Date, default: Date.now },
});

StudentSchema.methods.joiValidate = function (obj) {
  var schema = {
    name: Joi.types.String().min(6).max(30).required(),
    age: Joi.types.Number().min(1).max(3).required(),
    enroll: Joi.types.Boolean().required(),
    created: Joi.types.Date(),
  };
  return Joi.validate(obj, schema);
};

//TODO: add methods to validate, get, update and remove calling student-model
//TODO: Export methods and validations

module.exports = mongoose.model("Student", StudentSchema);
