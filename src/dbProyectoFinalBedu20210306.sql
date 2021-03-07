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
  `phoneNumber` varchar(15) NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idMuseum`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museum`
--

LOCK TABLES `museum` WRITE;
/*!40000 ALTER TABLE `museum` DISABLE KEYS */;
INSERT INTO `museum` VALUES (1,'Museo Nacional De Arte (MUNAL)','Calle de Tacuba 8, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX','5544362374',1,'2021-03-07 03:31:31',NULL),(2,'Museo Nacional de Antropología','Av. Paseo de la Reforma s/n, Polanco, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX','5369857400',1,'2021-03-07 03:31:59',NULL),(3,'Museo Soumaya','Blvd. Miguel de Cervantes Saavedra, Granada, Miguel Hidalgo, 11529 Ciudad de México, CDMX','5698748563',1,'2021-03-07 03:32:38',NULL),(4,'Museo Frida Kahlo','Londres 247, Del Carmen, Coyoacán, 04100 Ciudad de México, CDMX','6096857425',1,'2021-03-07 03:33:08',NULL),(5,'Papalote Museo del Niño','Av Constituyentes 268, Bosque de Chapultepec II Secc, Miguel Hidalgo, 11840 Ciudad de México, CDMX','5560854578',1,'2021-03-07 03:33:50',NULL),(6,'Museo de Arte Moderno','Av. Paseo de la Reforma s/n, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11100 Ciudad de México, CDMX','5560326598',1,'2021-03-07 03:46:54',NULL),(7,'Museo del Chocolate','Calle Milan 45, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX','5698563214',1,'2021-03-07 03:47:29',NULL),(8,'Museo Archivo de la Fotografía','República de Guatemala 34, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06010 Ciudad de México, CDMX','5567747485',1,'2021-03-07 03:49:28',NULL),(9,'Museo del Templo Mayor','Seminario 8, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06060 Ciudad de México, CDMX','5596967421',1,'2021-03-07 03:49:28',NULL),(10,'MIDE, Museo Interactivo de Economía','Calle de Tacuba 17, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX','5578415289',1,'2021-03-07 03:50:40',NULL);
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
  `price` int(11) NOT NULL,
  `limitVisitors` int(11) NOT NULL,
  `timeService` float NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idMuseumService`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museumService`
--

LOCK TABLES `museumService` WRITE;
/*!40000 ALTER TABLE `museumService` DISABLE KEYS */;
INSERT INTO `museumService` VALUES (1,1,2,80,15,1.5,1,'2021-03-07 04:48:25','2021-03-07 04:51:16'),(2,1,1,100,10,2,1,'2021-03-07 04:49:30','2021-03-07 04:51:16'),(3,2,4,50,100,2,1,'2021-03-07 04:51:16',NULL),(4,9,5,200,5,2,1,'2021-03-07 04:52:26',NULL),(5,3,3,30,25,0.5,0,'2021-03-07 04:53:28','2021-03-07 04:53:34');
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
  `registrationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idService`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'Recorrido con guía',1,'2021-03-07 03:52:27','2021-03-07 04:42:08'),(2,'Recorrido completo sin guía',1,'2021-03-07 04:42:29',NULL),(3,'Recorrido escolar',1,'2021-03-07 04:42:40',NULL),(4,'Recorrido virtual',1,'2021-03-07 04:42:48',NULL),(5,'Recorrido temático',1,'2021-03-07 04:42:57',NULL);
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
  `registrationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idTicket`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,1,2,1,'2021-03-07 04:56:06',NULL),(2,5,1,1,'2021-03-07 04:56:17',NULL),(3,8,3,1,'2021-03-07 04:56:46',NULL),(4,20,2,1,'2021-03-07 04:57:12',NULL),(11,15,2,1,'2021-03-07 04:58:58',NULL),(12,2,4,1,'2021-03-07 04:58:58',NULL),(13,13,3,1,'2021-03-07 04:58:58',NULL),(14,14,2,1,'2021-03-07 04:58:58',NULL),(15,8,1,1,'2021-03-07 04:59:56',NULL),(16,16,2,1,'2021-03-07 04:59:56',NULL);
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
  `phoneNumber` varchar(15) NOT NULL,
  `status` int(11) DEFAULT '1',
  `registrationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateData` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idVisitor`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor`
--

LOCK TABLES `visitor` WRITE;
/*!40000 ALTER TABLE `visitor` DISABLE KEYS */;
INSERT INTO `visitor` VALUES (1,'Damian Susano','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','caracas 8','5550887878',1,'2021-03-07 02:53:17','2021-03-07 03:23:11'),(2,'Andres Soto','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe7','ALCANFORES NO. 60, JARDINES DE SAN MATEO, 53200','5534216678',1,'2021-03-07 03:20:06','2021-03-07 03:23:11'),(3,'Esperanza Pedrosa','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','AV. AZTECAS MZ-105 LT-8 SN, AJUSCO COYOACAN, 04300','5578235109',1,'2021-03-07 03:21:29','2021-03-07 03:23:11'),(4,'Maximino Escudero','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','AV. AZTECAS MZ-105 LT-8 SN, AJUSCO COYOACAN, 04300','5590312896',1,'2021-03-07 03:22:25','2021-03-07 03:23:11'),(5,'Olivia Pulido','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','NORTE 72 A NO. 5221, MARTIRES DE RIO BLANCO','5523196745',1,'2021-03-07 03:23:58',NULL),(6,'Estefania Carrero','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','RIENTE 85 NO. 3122 DPTO NO. 3, MARTIRES RIO BLANCO','5587210978',1,'2021-03-07 03:24:33',NULL),(7,'Gladys Verdugo','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','FIDENCIA NO. 310, CENTRO, 86000','6698741234',1,'2021-03-07 03:25:08',NULL),(8,'Maribel Andrade','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','NIÑOS HEROES NO. 205, SEGUNDA DEL AGUILA, 86000','4423896753',1,'2021-03-07 03:25:50',NULL),(9,'Javier Hurtado','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','SANCHEZ MARMOL NO. 204, VILLAHERMOSA CENTRO, 86000','5532907843',1,'2021-03-07 03:26:32',NULL),(10,'German Medina','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','NORTE 76 NO. 5120, AMPLIACION RIO BLANCO -- 5560635287','5532907843',1,'2021-03-07 03:27:23',NULL),(11,'Santiago Ballesteros','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','ARTIFICIOS NO. 64 S/N, HIDALGO','5569896352',1,'2021-03-07 04:29:43',NULL),(12,'Tania Requena','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','AV LAS AMERICAS 106, LIDIA ESTHER, 86000','9931456667',1,'2021-03-07 04:30:19',NULL),(13,'Hipolito Estrada','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','SUR 126 NO. 40 NO. 1, COVE -- 5696821452','5696821452',1,'2021-03-07 04:31:09',NULL),(14,'Stephania Oros','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','Venustiano Carranza #9, Col. Americas 06770, CDMX','9954843153',1,'2021-03-07 04:31:48',NULL),(15,'Fabian Medrano','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','27 DE FEBRERO NO 931, 86000','9931256786',1,'2021-03-07 04:32:24',NULL),(16,'Natalia Riquelme','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','OBSERVATORIO 239, COVE','5574859614',1,'2021-03-07 04:33:02',NULL),(17,'Uriel Macias','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','Oriente 3 #834, Col. Hidalguense 17615, CDMX','5535414426',1,'2021-03-07 04:33:39',NULL),(18,'Ernesto Costas','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','Av. Observatorio 279','5596857452',1,'2021-03-07 04:34:07',NULL),(19,'Bernat Castillo ','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','BIZANCIO 113, VALLE DE SAN CARLOS, 66437','5820519755',1,'2021-03-07 04:36:51',NULL),(20,'Maria Eugenia Boix','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','Avenida 1 No. 3219 Entre Calles 32 y  34. Col. Dos Caminos','5141934638',1,'2021-03-07 04:37:54',NULL),(21,'Nadia Bermejo','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','CARR VILLAHERMOSA-TEAPA KM 0.5, AMATE, 86200','9932567172',1,'2021-03-07 04:38:34',NULL),(22,'Carolina Nephis','$2y$15$VGXmfRI.Gil7moBzh7tBn.SxAxF./xYUdNm4f.gO2D2nt74s8dPCe','Mesones #135, Col. Centro 38458, CDMX','5613565483',1,'2021-03-07 04:39:03',NULL);
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

-- Dump completed on 2021-03-06 23:29:18
