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
-- Table structure for table `replication_connection_configuration`
--

DROP TABLE IF EXISTS `replication_connection_configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `replication_connection_configuration` (
  `CHANNEL_NAME` char(64) NOT NULL,
  `HOST` char(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `PORT` int(11) NOT NULL,
  `USER` char(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `NETWORK_INTERFACE` char(60) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `AUTO_POSITION` enum('1','0') NOT NULL,
  `SSL_ALLOWED` enum('YES','NO','IGNORED') NOT NULL,
  `SSL_CA_FILE` varchar(512) NOT NULL,
  `SSL_CA_PATH` varchar(512) NOT NULL,
  `SSL_CERTIFICATE` varchar(512) NOT NULL,
  `SSL_CIPHER` varchar(512) NOT NULL,
  `SSL_KEY` varchar(512) NOT NULL,
  `SSL_VERIFY_SERVER_CERTIFICATE` enum('YES','NO') NOT NULL,
  `SSL_CRL_FILE` varchar(255) NOT NULL,
  `SSL_CRL_PATH` varchar(255) NOT NULL,
  `CONNECTION_RETRY_INTERVAL` int(11) NOT NULL,
  `CONNECTION_RETRY_COUNT` bigint(20) unsigned NOT NULL,
  `HEARTBEAT_INTERVAL` double(10,3) unsigned NOT NULL COMMENT 'Number of seconds after which a heartbeat will be sent .',
  `TLS_VERSION` varchar(255) NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replication_connection_configuration`
--

LOCK TABLES `replication_connection_configuration` WRITE;
/*!40000 ALTER TABLE `replication_connection_configuration` DISABLE KEYS */;
/*!40000 ALTER TABLE `replication_connection_configuration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:46
