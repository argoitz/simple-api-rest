const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo/apidatabase")
  .then((db) => console.log("Db is connected to ", db.connection.host))
  .catch((err) => console.error(err));
