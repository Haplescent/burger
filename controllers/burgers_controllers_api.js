const express = require("express");
const {
  selectAllSQLReq,
  insertOneSQLReq,
  updateOneSQLReq,
} = require("../models/burger.js");
const router = express.Router();

router.get("/api/all", async (req, res) => {
  const data = await selectAllSQLReq();
  console.log(data);
  res.send(data);
});

router.get("/api/add", async (req, res) => {
  insertOneSQLReq().then((file) => {
    res.send(file);
  });
});

router.get("/api/update/", async (req, res) => {
  selectAllSQLReq().then((file) => {
    res.send(file);
  });
});

module.exports = router;
