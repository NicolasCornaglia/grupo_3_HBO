DROP DATABASE IF EXISTS deco_hogar;
CREATE DATABASE deco_hogar;
USE deco_hogar;
CREATE TABLE deco_hogar.categories(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   created_at DATETIME,
   updated_at DATETIME
);
CREATE TABLE deco_hogar.colors(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   created_at DATETIME,
   updated_at DATETIME
);
CREATE TABLE deco_hogar.materials(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   created_at DATETIME,
   updated_at DATETIME
);
CREATE TABLE deco_hogar.products(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   description VARCHAR(500),
   price float,
   image VARCHAR(100),
   dimensions VARCHAR(100),
   category_id INT(10) NOT NULL,
   color_id INT(10) NOT NULL,
   material_id INT(10) NOT NULL,
   created_at DATETIME,
   updated_at DATETIME,
   FOREIGN KEY (category_id) REFERENCES deco_hogar.categories(id),
   FOREIGN KEY (color_id) REFERENCES deco_hogar.colors(id),
   FOREIGN KEY (material_id) REFERENCES deco_hogar.materials(id)
);
CREATE TABLE deco_hogar.users(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   firstname VARCHAR(50) NOT NULL,
   lastname VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(500),
   phone_number VARCHAR(500),
   city VARCHAR(50),
   gender VARCHAR(100),
   role VARCHAR(100),
   avatar VARCHAR(150),
   created_at DATETIME,
   updated_at DATETIME
);
