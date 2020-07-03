const { selectAll, insertOne, updateOne } = require("../config/orm");

const selectAllSQLReq = () => {
  return new Promise((resolve, reject) => {
    const response = selectAll();
    resolve(response);
  });
};

const insertOneSQLReq = () => {
  return new Promise((resolve, reject) => {
    const response = insertOne();
    resolve(response);
  });
};

const updateOneSQLReq = () => {
  return new Promise((resolve, reject) => {
    const response = updateOne();
    resolve(response);
  });
};

module.exports = { selectAllSQLReq, insertOneSQLReq, updateOneSQLReq };
