const Joi = require("joi");
const MusicianSchema = require("../models/Musician.model");

MusicianSchema.methods.joiValidate = function (obj) {
  var schema = {
    name: Joi.types.String().min(6).max(30).required(),
    age: Joi.types.Number().min(1).max(3).required(),
    enroll: Joi.types.Boolean().required(),
    created: Joi.types.Date(),
  };
  return Joi.validate(obj, schema);
};

//TODO: Use this validation service to validate data
//TODO: Export methods and validations

module.exports = mongoose.model("Musician", MusicianSchema);
