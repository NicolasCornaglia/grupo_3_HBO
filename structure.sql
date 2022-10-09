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
   image VARCHAR(500),
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
   updated_at DATETIME,
   deleted_at DATETIME
);
CREATE TABLE deco_hogar.orders(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   userId INT(10) NOT NULL,
   total DECIMAL(10, 2),
   paymentMethod VARCHAR(25),
   shippingMethod VARCHAR(25),
   FOREIGN KEY (userId) REFERENCES deco_hogar.users(id),
   createdAt DATETIME,
   updatedAt DATETIME,
   deletedAt DATETIME
);
CREATE TABLE deco_hogar.orderitems(
   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
   orderId INT(10) NOT NULL,
   productId INT(10) NOT NULL,
   name VARCHAR(100),
   price DECIMAL(10, 2),
   quantity INTEGER(11),
   FOREIGN KEY (orderId) REFERENCES deco_hogar.orders(id),
   FOREIGN KEY (productId) REFERENCES deco_hogar.products(id),
   createdAt DATETIME,
   updatedAt DATETIME,
   deletedAt DATETIME
);


