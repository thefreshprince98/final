DROP DATABASE IF EXISTS realtorapp_db;

CREATE DATABASE realtorapp_db;

USE realtorapp_db;

CREATE TABLE favorites
(
id int NOT NULL AUTO_INCREMENT,
user_fav VARCHAR(255) NOT NULL,
user_name VARCHAR(25) NOT NULL,

PRIMARY KEY (id)
);

INSERT INTO favorites (user_fav, user_name)
VALUES ("house 1", "juliantest");
