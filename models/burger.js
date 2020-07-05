const { selectAll, insertOne, updateOne } = require("../config/orm");

const selectAllSQLReq = () => {
  return new Promise((resolve, reject) => {
    const response = selectAll();
    resolve(response);
  });
};

const insertOneSQLReq = (burgerName) => {
  return new Promise((resolve, reject) => {
    const response = insertOne(burgerName);
    resolve(response);
  });
};

const updateOneSQLReq = (devoured, id) => {
  return new Promise((resolve, reject) => {
    const response = updateOne(devoured, id);
    resolve(response);
  });
};

module.exports = { selectAllSQLReq, insertOneSQLReq, updateOneSQLReq };
