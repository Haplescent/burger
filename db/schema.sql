DROP DATABASE IF EXISTS grcbjo3rydlpiea1;
CREATE DATABASE grcbjo3rydlpiea1;
USE grcbjo3rydlpiea1;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(80) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);