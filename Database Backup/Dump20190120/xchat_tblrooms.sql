CREATE DATABASE  IF NOT EXISTS `xchat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `xchat`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: xchat
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `tblrooms`
--

DROP TABLE IF EXISTS `tblrooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblrooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isPm` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblrooms`
--

LOCK TABLES `tblrooms` WRITE;
/*!40000 ALTER TABLE `tblrooms` DISABLE KEYS */;
INSERT INTO `tblrooms` VALUES (1,'Lounge','\0'),(2,'pm_',''),(3,'pm_',''),(4,'pm_',''),(5,'pm_',''),(6,'pm_',''),(7,'pm_',''),(8,NULL,''),(9,NULL,''),(10,NULL,''),(11,'pm_16',''),(12,'pm_1245',''),(13,'pm_1245',''),(14,'pm_12451232',''),(15,'pm_1245_1232',''),(16,'pm_',''),(17,'pm_',''),(18,'pm_',''),(19,'pm_',''),(20,'pm_',''),(21,'pm_',''),(22,'pm_1275_1292',''),(23,'pm_1275_1292',''),(24,'pm_1275_1292',''),(25,'pm_1275_1292',''),(26,'pm_1234_2345',''),(27,'pm_1234_2315',''),(28,NULL,''),(29,'pm_1234_1345',''),(30,'pm_1531_1531',''),(31,'pm_1533_1533',''),(32,'pm_1534_1534',''),(33,'pm_1535_1535',''),(34,'pm_1536_1536',''),(35,'pm_1537_1537',''),(36,'pm_1539_1539',''),(37,'pm_1542_1542',''),(38,'pm_1544_1544',''),(39,'pm_1545_1545',''),(40,'pm_1547_1546',''),(41,'pm_1548_1546',''),(42,'pm_1549_1546',''),(43,'pm_1550_1546',''),(44,'pm_1551_1546',''),(45,'pm_1553_1552',''),(46,'pm_1554_1552',''),(47,'pm_1556_1555',''),(48,'pm_1557_1558',''),(49,'pm_1560_1561',''),(50,'pm_1562_1561',''),(51,'pm_1563_1561',''),(52,'pm_1569_1561','');
/*!40000 ALTER TABLE `tblrooms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-20  4:50:59
