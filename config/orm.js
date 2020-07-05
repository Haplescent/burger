const connection = require("./connection");

const selectAll = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
    SELECT * FROM burgers;
    `,
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
  });
};

const insertOne = (burgerName) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
    INSERT INTO burgers(burger_name)
    VALUES (?);
    `,
      [burgerName],
      (err, data) => {
        err ? reject(err) : resolve();
      }
    );
  });
};

const updateOne = (devoured, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
        UPDATE burgers
        SET devoured = ?
        WHERE id = ?;
        `,
      [devoured, id],
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
  });
};

module.exports = { selectAll, insertOne, updateOne };
