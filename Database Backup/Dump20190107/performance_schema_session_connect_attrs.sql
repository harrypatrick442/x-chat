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
-- Table structure for table `session_connect_attrs`
--

DROP TABLE IF EXISTS `session_connect_attrs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session_connect_attrs` (
  `PROCESSLIST_ID` int(11) NOT NULL,
  `ATTR_NAME` varchar(32) COLLATE utf8_bin NOT NULL,
  `ATTR_VALUE` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `ORDINAL_POSITION` int(11) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_connect_attrs`
--

LOCK TABLES `session_connect_attrs` WRITE;
/*!40000 ALTER TABLE `session_connect_attrs` DISABLE KEYS */;
INSERT INTO `session_connect_attrs` VALUES (6,'_os','Win32',0),(6,'_client_name','libmysql',1),(6,'_pid','9792',2),(6,'_thread','3064',3),(6,'_platform','x86',4),(6,'_client_version','5.6.13',5),(7,'_os','Win32',0),(7,'_client_name','libmysql',1),(7,'_pid','9792',2),(7,'_thread','9796',3),(7,'_platform','x86',4),(7,'_client_version','5.6.13',5),(9,'_os','Win32',0),(9,'_client_name','libmysql',1),(9,'_pid','9792',2),(9,'_thread','9796',3),(9,'_platform','x86',4),(9,'_client_version','5.6.13',5),(10,'_os','Win32',0),(10,'_client_name','libmysql',1),(10,'_pid','9792',2),(10,'_thread','3680',3),(10,'_platform','x86',4),(10,'_client_version','5.6.13',5),(16,'_os','Win32',0),(16,'_client_name','libmysql',1),(16,'_pid','9792',2),(16,'_thread','9796',3),(16,'_platform','x86',4),(16,'_client_version','5.6.13',5),(86,'_os','Win32',0),(86,'_client_name','libmysql',1),(86,'_pid','5628',2),(86,'_thread','6104',3),(86,'_platform','x86',4),(86,'program_name','mysqldump',5),(86,'_client_version','5.6.13',6);
/*!40000 ALTER TABLE `session_connect_attrs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:19:01
