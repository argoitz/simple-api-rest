const express = require("express");
require("express-async-errors");
const app = express();
const port = process.env.port || 3000;
const cors = require("cors");

require("./database");

const errorHandler = require("./middlewares/error-handler");

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(express.json());
app.use(require("./routes/index.routes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Listening in ${port}`));
