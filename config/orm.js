const connection = require("./connection");

// const useDatabase = () => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       `
//     SELECT * FROM burgers;
//     `,
//       (err, data) => {
//         err ? reject(err) : resolve(data);
//       }
//     );
//   });
// };

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
        err ? reject(err) : resolve(data);
      }
    );
  });
};

const updateOne = (burgerName, devoured) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
        UPDATE burgers
        SET burger_name = ?,
        devoured = ?
        WHERE id = ?;
        `,
      [burgerName, devoured],
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
  });
};

module.exports = { selectAll, insertOne, updateOne };
