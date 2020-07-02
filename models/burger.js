const { selectAll, insertOne, updateOne } = require("../config/orm");

const selectAllSQLReq = () => {
  return new Promise((resolve, reject) => {
    const response = selectAll();
  });
};

const insertOneSQLReq = () => {
  return new Promise((resolve, reject) => {
    const response = insertOne();
  });
};

const updateOneSQLReq = () => {
  return new Promise((resolve, reject) => {
    const response = updateOne();
  });
};

module.exports = { selectAllSQLReq, insertOneSQLReq, updateOneSQLReq };
