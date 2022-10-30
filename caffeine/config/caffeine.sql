DROP DATABASE IF EXISTS caffeine;
CREATE DATABASE caffeine;
USE caffeine;
CREATE TABLE caffeine_intake(
  id INT NOT NULL AUTO_INCREMENT,
  beverage VARCHAR(100) NOT NULL,
  description VARCHAR(300) NOT NULL,
  caffeine_mg INT,
  PRIMARY KEY (id)
);