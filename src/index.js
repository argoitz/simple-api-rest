const express = require("express");
require("express-async-errors");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.port || 3000;
const cors = require("cors");

// Get Body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// DB CONNETION
require("./database");
const errorHandler = require("./middlewares/error-handler");

// Middleware to allow HTTP request comes from origin and restrict from other sites
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(express.json());

// Public Routes
app.use("/api/user", require("./routes/auth/auth.routes"));
app.use("/api", require("./routes/index.routes"));

// Private Routes
const privateRoutes = require("./routes/private/private.routes");
const verifyToken = require("./services/ValidateToken.service");
// route middlewares
app.use("/api/private", verifyToken, privateRoutes);

// Error middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Listening in ${port}`));
