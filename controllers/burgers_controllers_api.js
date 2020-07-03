const express = require("express");
const {
  selectAllSQLReq,
  insertOneSQLReq,
  updateOneSQLReq,
} = require("../models/burger.js");
const router = express.Router();

router.get("/api/all", (req, res) => {
  const data = selectAllSQLReq();
  res.send(data);
});

router.get("/api/add", (req, res) => {
  insertOneSQLReq().then((file) => {
    res.send(file);
  });
});

router.get("/api/update/", (req, res) => {
  selectAllSQLReq().then((file) => {
    res.send(file);
  });
});

module.exports = router;
