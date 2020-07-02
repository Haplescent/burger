db.sequelize
  .sync()
  .then(() => {
    return db.Student.create({ fname: "Michael" });
  })
  .then(() => {
    return db.Student.findAll();
  })
  .then((allStudents) => {
    console.log(allStudents);
  });
