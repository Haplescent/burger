const express = require("express");
const { selectAllSQLReq, insertOneSQLReq, updateOneSQLReq } = requre(
  "../models/burger.js"
);
const router = express.Router();
