const express = require("express");
require("express-async-errors");
const app = express();
const port = process.env.port || 3000;
const cors = require("cors");

require("./database"); //MongoDB Connection
const errorHandler = require("./middlewares/error-handler");

//Middleware to allow HTTP request comes from origin and restrict from other sites
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(express.json());
//TODO: Add Controller and remove route
app.use(require("./routes/index.routes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Listening in ${port}`));
