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
-- Table structure for table `events_statements_current`
--

DROP TABLE IF EXISTS `events_statements_current`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_statements_current` (
  `THREAD_ID` bigint(20) unsigned NOT NULL,
  `EVENT_ID` bigint(20) unsigned NOT NULL,
  `END_EVENT_ID` bigint(20) unsigned DEFAULT NULL,
  `EVENT_NAME` varchar(128) NOT NULL,
  `SOURCE` varchar(64) DEFAULT NULL,
  `TIMER_START` bigint(20) unsigned DEFAULT NULL,
  `TIMER_END` bigint(20) unsigned DEFAULT NULL,
  `TIMER_WAIT` bigint(20) unsigned DEFAULT NULL,
  `LOCK_TIME` bigint(20) unsigned NOT NULL,
  `SQL_TEXT` longtext,
  `DIGEST` varchar(32) DEFAULT NULL,
  `DIGEST_TEXT` longtext,
  `CURRENT_SCHEMA` varchar(64) DEFAULT NULL,
  `OBJECT_TYPE` varchar(64) DEFAULT NULL,
  `OBJECT_SCHEMA` varchar(64) DEFAULT NULL,
  `OBJECT_NAME` varchar(64) DEFAULT NULL,
  `OBJECT_INSTANCE_BEGIN` bigint(20) unsigned DEFAULT NULL,
  `MYSQL_ERRNO` int(11) DEFAULT NULL,
  `RETURNED_SQLSTATE` varchar(5) DEFAULT NULL,
  `MESSAGE_TEXT` varchar(128) DEFAULT NULL,
  `ERRORS` bigint(20) unsigned NOT NULL,
  `WARNINGS` bigint(20) unsigned NOT NULL,
  `ROWS_AFFECTED` bigint(20) unsigned NOT NULL,
  `ROWS_SENT` bigint(20) unsigned NOT NULL,
  `ROWS_EXAMINED` bigint(20) unsigned NOT NULL,
  `CREATED_TMP_DISK_TABLES` bigint(20) unsigned NOT NULL,
  `CREATED_TMP_TABLES` bigint(20) unsigned NOT NULL,
  `SELECT_FULL_JOIN` bigint(20) unsigned NOT NULL,
  `SELECT_FULL_RANGE_JOIN` bigint(20) unsigned NOT NULL,
  `SELECT_RANGE` bigint(20) unsigned NOT NULL,
  `SELECT_RANGE_CHECK` bigint(20) unsigned NOT NULL,
  `SELECT_SCAN` bigint(20) unsigned NOT NULL,
  `SORT_MERGE_PASSES` bigint(20) unsigned NOT NULL,
  `SORT_RANGE` bigint(20) unsigned NOT NULL,
  `SORT_ROWS` bigint(20) unsigned NOT NULL,
  `SORT_SCAN` bigint(20) unsigned NOT NULL,
  `NO_INDEX_USED` bigint(20) unsigned NOT NULL,
  `NO_GOOD_INDEX_USED` bigint(20) unsigned NOT NULL,
  `NESTING_EVENT_ID` bigint(20) unsigned DEFAULT NULL,
  `NESTING_EVENT_TYPE` enum('TRANSACTION','STATEMENT','STAGE','WAIT') DEFAULT NULL,
  `NESTING_EVENT_LEVEL` int(11) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_statements_current`
--

LOCK TABLES `events_statements_current` WRITE;
/*!40000 ALTER TABLE `events_statements_current` DISABLE KEYS */;
INSERT INTO `events_statements_current` VALUES (31,32,32,'statement/com/Ping','socket_connection.cc:101',380141431504944,380141479697568,48192624,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,42,42,'statement/sql/help','socket_connection.cc:101',468877788079240,468878127658748,339579508,67000000,'help \'begin\'','6e337db4177ded1eed9080216face221','HELP ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,110,110,'statement/sql/help','socket_connection.cc:101',468976425439956,468976788223320,362783364,81000000,'help \'begin\'','6e337db4177ded1eed9080216face221','HELP ? ','xchat',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,10,10,'statement/com/Ping','socket_connection.cc:101',178458989478048,178459035885760,46407712,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(37,4,5,'statement/sql/call_procedure','socket_connection.cc:101',473944605279256,473945259449504,654170248,80000000,'CALL xchat_username_count(\'werdfsfdsfds\')','fe3db0471383b46d437d37d50da4d82c','CALL `xchat_username_count` (?) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(38,8,14,'statement/sql/call_procedure','socket_connection.cc:101',473950128689440,473954505739892,4377050452,110000000,'CALL xchat_register(NULL,\'werdfsfdsfds\',NULL,NULL,NULL,true)','6c9946de2a9c98d374a1c9fa5082ab11','CALL `xchat_register` ( ?, ... , TRUE ) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(39,20,22,'statement/sql/call_procedure','socket_connection.cc:101',404128033442636,404130670203888,2636761252,0,'CALL xchat_room_message_add(1,437,\'','87326dbc30acdeb6dd31ed363b6ede7f','CALL `xchat_room_message_add` (...) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(41,20,20,'statement/sql/show_tables','socket_connection.cc:101',636566699316556,636567469059856,769743300,70000000,'SHOW FULL TABLES FROM `xchat`','76d59fe7ea92549a39a85196a724d7f0','SHOW FULL TABLES FROM `xchat` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,4,4,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(106,15,NULL,'statement/sql/select','socket_connection.cc:101',681746521266676,681746791234616,269967940,77000000,'SELECT /*!40001 SQL_NO_CACHE */ * FROM `events_statements_current`',NULL,NULL,'performance_schema',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,8,0,0,0,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0);
/*!40000 ALTER TABLE `events_statements_current` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:19:00
