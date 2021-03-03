-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: museumReservation
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `museum`
--

DROP TABLE IF EXISTS `museum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `museum` (
  `idMuseum` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phoneNumber` int(15) NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idMuseum`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museum`
--

LOCK TABLES `museum` WRITE;
/*!40000 ALTER TABLE `museum` DISABLE KEYS */;
INSERT INTO `museum` VALUES (1,'Papalote','Av Constituyentes 268, Bosque de Chapultepec II Secc, Miguel Hidalgo, 11840 Ciudad de México, CDMX',55507070,1,'2021-03-03 01:37:28',NULL),(2,'frida kahlo','Londres 247, Del Carmen, Coyoacán, 04100 Ciudad de México, CDMX',55243975,1,'2021-03-03 01:38:11',NULL);
/*!40000 ALTER TABLE `museum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `museumService`
--

DROP TABLE IF EXISTS `museumService`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `museumService` (
  `idMuseumService` int(11) NOT NULL AUTO_INCREMENT,
  `idMuseum` int(11) NOT NULL,
  `idService` int(11) NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `price` float NOT NULL,
  `limitVisitors` int(11) DEFAULT NULL,
  `timeService` float NOT NULL,
  PRIMARY KEY (`idMuseumService`),
  KEY `idMuseum` (`idMuseum`),
  KEY `idService` (`idService`),
  CONSTRAINT `museumService_ibfk_1` FOREIGN KEY (`idMuseum`) REFERENCES `museum` (`idMuseum`),
  CONSTRAINT `museumService_ibfk_2` FOREIGN KEY (`idService`) REFERENCES `service` (`idService`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museumService`
--

LOCK TABLES `museumService` WRITE;
/*!40000 ALTER TABLE `museumService` DISABLE KEYS */;
INSERT INTO `museumService` VALUES (1,1,1,1,'2021-03-03 01:59:10','2021-03-03 03:18:53',45,20,1),(2,1,2,1,'2021-03-03 01:59:16','2021-03-03 03:18:53',50,25,1),(3,2,2,1,'2021-03-03 01:59:22','2021-03-03 03:18:53',35,20,1.5),(4,1,3,1,'2021-03-03 02:39:05','2021-03-03 03:18:53',60,15,2);
/*!40000 ALTER TABLE `museumService` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `idService` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idService`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'recorrido 1',1,'2021-03-03 01:45:18',NULL),(2,'recorrido 2',1,'2021-03-03 01:45:42',NULL),(3,'recorrido 3',1,'2021-03-03 02:37:00','2021-03-03 02:37:29');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `idTicket` int(11) NOT NULL AUTO_INCREMENT,
  `idVisitor` int(11) NOT NULL,
  `idMuseumService` int(11) NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idTicket`),
  KEY `idVisitor` (`idVisitor`),
  KEY `idMuseumService` (`idMuseumService`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`idVisitor`) REFERENCES `visitor` (`idVisitor`),
  CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`idMuseumService`) REFERENCES `museumService` (`idMuseumService`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitor`
--

DROP TABLE IF EXISTS `visitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visitor` (
  `idVisitor` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idVisitor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor`
--

LOCK TABLES `visitor` WRITE;
/*!40000 ALTER TABLE `visitor` DISABLE KEYS */;
INSERT INTO `visitor` VALUES (1,'Damian Susano','nws123','Caracas 8',55508878,1,'2021-03-03 01:35:39',NULL);
/*!40000 ALTER TABLE `visitor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-02 22:32:11
