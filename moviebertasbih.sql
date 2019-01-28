CREATE DATABASE IF NOT EXISTS `Moviebertasbih`;

USE `Moviebertasbih`;


CREATE TABLE IF NOT EXISTS `movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama` VARCHAR(45) NOT NULL,
  `tahun` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `movies` VALUES 
(null,'Doraemon','2005','mantul gan'),
(null,'Power Rangers','2006','sip abis'),
(null,'Upin Ipin','2004','keren cuy'),
(null,'Dora The Explorer','2007','parah abis')
;

CREATE TABLE `categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO 'categories' VALUES
(null,'horror'),
(null,'comedy'),
(null,'drama'),
(null,'action')
;

CREATE TABLE IF NOT EXISTS `movcat` (
  `id_movies` INT NOT NULL,
  `id_categories` INT NOT NULL,
  PRIMARY KEY(`id`));

INSERT INTO 'movcat' VALUES
(null,1,1)
(null,2,2)
(null,3,3)
(null,4,4)
