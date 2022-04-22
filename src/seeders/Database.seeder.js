const MusicianSeeder = require("./Musician.seeder");

const ExecuteSeeders = async () => {
  // You can add more seeders here (Towns, Provinces...)
  MusicianSeeder();
};

module.exports = ExecuteSeeders;
