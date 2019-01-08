CREATE DATABASE  IF NOT EXISTS `performance_schema` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `performance_schema`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: performance_schema
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
-- Table structure for table `setup_objects`
--

DROP TABLE IF EXISTS `setup_objects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `setup_objects` (
  `OBJECT_TYPE` enum('EVENT','FUNCTION','PROCEDURE','TABLE','TRIGGER') NOT NULL DEFAULT 'TABLE',
  `OBJECT_SCHEMA` varchar(64) DEFAULT '%',
  `OBJECT_NAME` varchar(64) NOT NULL DEFAULT '%',
  `ENABLED` enum('YES','NO') NOT NULL DEFAULT 'YES',
  `TIMED` enum('YES','NO') NOT NULL DEFAULT 'YES'
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setup_objects`
--

LOCK TABLES `setup_objects` WRITE;
/*!40000 ALTER TABLE `setup_objects` DISABLE KEYS */;
INSERT INTO `setup_objects` VALUES ('EVENT','mysql','%','NO','NO'),('EVENT','performance_schema','%','NO','NO'),('EVENT','information_schema','%','NO','NO'),('EVENT','%','%','YES','YES'),('FUNCTION','mysql','%','NO','NO'),('FUNCTION','performance_schema','%','NO','NO'),('FUNCTION','information_schema','%','NO','NO'),('FUNCTION','%','%','YES','YES'),('PROCEDURE','mysql','%','NO','NO'),('PROCEDURE','performance_schema','%','NO','NO'),('PROCEDURE','information_schema','%','NO','NO'),('PROCEDURE','%','%','YES','YES'),('TABLE','mysql','%','NO','NO'),('TABLE','performance_schema','%','NO','NO'),('TABLE','information_schema','%','NO','NO'),('TABLE','%','%','YES','YES'),('TRIGGER','mysql','%','NO','NO'),('TRIGGER','performance_schema','%','NO','NO'),('TRIGGER','information_schema','%','NO','NO'),('TRIGGER','%','%','YES','YES');
/*!40000 ALTER TABLE `setup_objects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:39
