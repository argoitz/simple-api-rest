const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/apidatabase")
  .then((db) => console.log("Db is connected to ", db.connection.host))
  .catch((err) => console.error(err));


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});