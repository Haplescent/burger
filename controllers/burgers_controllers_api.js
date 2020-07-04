const express = require("express");
const {
  selectAllSQLReq,
  insertOneSQLReq,
  updateOneSQLReq,
} = require("../models/burger.js");
const router = express.Router();

router.get("/api/all", async (req, res) => {
  const data = await selectAllSQLReq();
  res.send(data);
});

router.post("/api/add", async (req, res) => {
  insertOneSQLReq(req.body.burgerName);
  res.json(req.body.burgerName);
});

router.get("/api/update/", async (req, res) => {
  selectAllSQLReq().then((file) => {
    res.send(file);
  });
});

module.exports = router;
