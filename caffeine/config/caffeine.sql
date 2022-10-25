DROP DATABASE IF EXISTS caffeine_DB;
CREATE DATABASE caffeine_DB;
USE caffeine_DB;
CREATE TABLE caffeine(
  id INT NOT NULL AUTO_INCREMENT,
  beverage VARCHAR(100) NOT NULL,
  description VARCHAR(300) NOT NULL,
  caffeine_mg INT,
  PRIMARY KEY (id)
);