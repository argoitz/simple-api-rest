const MusicianSeeder = require("./Musician.seeder");

const ExecuteSeeders = async () => {
  MusicianSeeder();
  // You can add more seeders here (Categories, Instruments, Musical genres...)
  //...
};

module.exports = ExecuteSeeders;
