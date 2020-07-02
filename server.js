const express = require("express");
const app = express();
const path = require("path");

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 3000;
}

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, "./public/assets")));

const apiRoutes = require(path.join(__dirname, "./routes/api-route"));
app.use(apiRoutes);

const clientRoutes = require(path.join(__dirname, "./routes/client-route"));
app.use(clientRoutes);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
