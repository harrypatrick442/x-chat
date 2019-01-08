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
-- Table structure for table `socket_instances`
--

DROP TABLE IF EXISTS `socket_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `socket_instances` (
  `EVENT_NAME` varchar(128) NOT NULL,
  `OBJECT_INSTANCE_BEGIN` bigint(20) unsigned NOT NULL,
  `THREAD_ID` bigint(20) unsigned DEFAULT NULL,
  `SOCKET_ID` int(11) NOT NULL,
  `IP` varchar(64) NOT NULL,
  `PORT` int(11) NOT NULL,
  `STATE` enum('IDLE','ACTIVE') NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `socket_instances`
--

LOCK TABLES `socket_instances` WRITE;
/*!40000 ALTER TABLE `socket_instances` DISABLE KEYS */;
INSERT INTO `socket_instances` VALUES ('wait/io/socket/sql/server_tcpip_socket',2334391214016,1,2568,'::',3306,'ACTIVE'),('wait/io/socket/sql/client_connection',2334391215616,31,2700,'::ffff:127.0.0.1',50170,'IDLE'),('wait/io/socket/sql/client_connection',2334391215936,32,2772,'::ffff:127.0.0.1',50171,'IDLE'),('wait/io/socket/sql/client_connection',2334391216576,34,2808,'::ffff:127.0.0.1',50173,'IDLE'),('wait/io/socket/sql/client_connection',2334391216896,35,548,'::ffff:127.0.0.1',50201,'IDLE'),('wait/io/socket/sql/client_connection',2334391217536,37,2840,'::ffff:127.0.0.1',50247,'IDLE'),('wait/io/socket/sql/client_connection',2334391217856,38,2888,'::ffff:127.0.0.1',50248,'IDLE'),('wait/io/socket/sql/client_connection',2334391218176,39,2908,'::ffff:127.0.0.1',50249,'IDLE'),('wait/io/socket/sql/client_connection',2334391218816,41,2892,'::ffff:127.0.0.1',50278,'IDLE'),('wait/io/socket/sql/client_connection',2334391236416,96,3048,'::ffff:127.0.0.1',50334,'ACTIVE');
/*!40000 ALTER TABLE `socket_instances` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:18:59
