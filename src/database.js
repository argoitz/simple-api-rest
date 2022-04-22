const mongoose = require("mongoose");
const ExecuteSeeders = require("./seeders/Database.seeder");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ncdk5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect("mongodb://mongo/apidatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected to ", db.connection.host))
  .catch((err) => console.error("error db:", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//SEEDERS
ExecuteSeeders();
