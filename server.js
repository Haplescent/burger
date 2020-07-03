const express = require("express");
const app = express();
const path = require("path");
const connection = require("./config/connection");
require("dotenv").config();

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 3000;
}

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, "./views")));

const apiRoutes = require(path.join(
  __dirname,
  "./controllers/burgers_controllers_api"
));
app.use(apiRoutes);

const clientRoutes = require(path.join(
  __dirname,
  "./controllers/burgers_controllers_client"
));
app.use(clientRoutes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
