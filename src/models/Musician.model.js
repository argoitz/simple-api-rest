const mongoose = require("mongoose");

const MusicianSchema = new mongoose.Schema({
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
});

const Musician = mongoose.model("Musician", MusicianSchema);

module.exports = Musician;
