const MusicianModel = require("../models/Musician-model");

const musicians = [
  { name: "Paco", age: 23, enroll: true },
  { name: "Maria", age: 25, enroll: true },
  { name: "Marcos", age: 30, enroll: true },
  { name: "Alicia", age: 28, enroll: true },
];

const MusicianSeeder = async () => {
  await MusicianModel.deleteMany({});
  await MusicianModel.insertMany(musicians);
};

MusicianSeeder().then(() => {
  console.log("MUSICIAN SEEDED FINISH");
});

module.exports = MusicianSeeder;
