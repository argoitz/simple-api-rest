const express = require("express");
const app = express();

require("./database");

app.use(express.json());

app.use(require("./routes/index.routes"));

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening in ${port}`));
