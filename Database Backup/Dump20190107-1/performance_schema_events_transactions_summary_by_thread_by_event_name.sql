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
-- Table structure for table `events_transactions_summary_by_thread_by_event_name`
--

DROP TABLE IF EXISTS `events_transactions_summary_by_thread_by_event_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_transactions_summary_by_thread_by_event_name` (
  `THREAD_ID` bigint(20) unsigned NOT NULL,
  `EVENT_NAME` varchar(128) NOT NULL,
  `COUNT_STAR` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `COUNT_READ_WRITE` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_READ_WRITE` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_READ_WRITE` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_READ_WRITE` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_READ_WRITE` bigint(20) unsigned NOT NULL,
  `COUNT_READ_ONLY` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_READ_ONLY` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_READ_ONLY` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_READ_ONLY` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_READ_ONLY` bigint(20) unsigned NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_transactions_summary_by_thread_by_event_name`
--

LOCK TABLES `events_transactions_summary_by_thread_by_event_name` WRITE;
/*!40000 ALTER TABLE `events_transactions_summary_by_thread_by_event_name` DISABLE KEYS */;
INSERT INTO `events_transactions_summary_by_thread_by_event_name` VALUES (1,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(2,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(3,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(4,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(5,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(6,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(7,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(8,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(9,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(10,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(11,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(12,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(13,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(15,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(16,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(17,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(18,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(19,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(20,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(21,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(22,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(23,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(24,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(25,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(26,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(31,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(32,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(34,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(35,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(37,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(38,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(39,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(41,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(421,'transaction',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `events_transactions_summary_by_thread_by_event_name` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:45
