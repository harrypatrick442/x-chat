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
-- Table structure for table `threads`
--

DROP TABLE IF EXISTS `threads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `threads` (
  `THREAD_ID` bigint(20) unsigned NOT NULL,
  `NAME` varchar(128) NOT NULL,
  `TYPE` varchar(10) NOT NULL,
  `PROCESSLIST_ID` bigint(20) unsigned DEFAULT NULL,
  `PROCESSLIST_USER` varchar(32) DEFAULT NULL,
  `PROCESSLIST_HOST` varchar(60) DEFAULT NULL,
  `PROCESSLIST_DB` varchar(64) DEFAULT NULL,
  `PROCESSLIST_COMMAND` varchar(16) DEFAULT NULL,
  `PROCESSLIST_TIME` bigint(20) DEFAULT NULL,
  `PROCESSLIST_STATE` varchar(64) DEFAULT NULL,
  `PROCESSLIST_INFO` longtext,
  `PARENT_THREAD_ID` bigint(20) unsigned DEFAULT NULL,
  `ROLE` varchar(64) DEFAULT NULL,
  `INSTRUMENTED` enum('YES','NO') NOT NULL,
  `HISTORY` enum('YES','NO') NOT NULL,
  `CONNECTION_TYPE` varchar(16) DEFAULT NULL,
  `THREAD_OS_ID` bigint(20) unsigned DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `threads`
--

LOCK TABLES `threads` WRITE;
/*!40000 ALTER TABLE `threads` DISABLE KEYS */;
INSERT INTO `threads` VALUES (1,'thread/sql/main','BACKGROUND',NULL,NULL,NULL,NULL,NULL,965,NULL,NULL,NULL,NULL,'YES','YES',NULL,10096),(2,'thread/sql/thread_timer_notifier','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'YES','YES',NULL,2328),(3,'thread/innodb/io_ibuf_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,3764),(4,'thread/innodb/io_log_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,2380),(5,'thread/innodb/io_read_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,2368),(6,'thread/innodb/io_read_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,2560),(7,'thread/innodb/io_read_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,5268),(8,'thread/innodb/io_read_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,4500),(9,'thread/innodb/io_write_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,5516),(10,'thread/innodb/io_write_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,7216),(11,'thread/innodb/io_write_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,4248),(12,'thread/innodb/io_write_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,3036),(13,'thread/innodb/page_cleaner_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,1416),(15,'thread/innodb/srv_lock_timeout_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,1252),(16,'thread/innodb/srv_error_monitor_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,2808),(17,'thread/innodb/srv_monitor_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,6364),(18,'thread/innodb/srv_master_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,5712),(19,'thread/innodb/srv_worker_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,2936),(20,'thread/innodb/srv_worker_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,1600),(21,'thread/innodb/srv_purge_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,6504),(22,'thread/innodb/srv_worker_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,3272),(23,'thread/innodb/buf_dump_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,4348),(24,'thread/innodb/dict_stats_thread','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'YES','YES',NULL,3296),(25,'thread/sql/compress_gtid_table','FOREGROUND',1,NULL,NULL,NULL,'Daemon',965,'Suspending',NULL,1,NULL,'YES','YES',NULL,5776),(26,'thread/sql/con_sockets','BACKGROUND',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'YES','YES',NULL,4344),(31,'thread/sql/one_connection','FOREGROUND',6,'xchat','localhost',NULL,'Sleep',585,NULL,NULL,NULL,NULL,'YES','YES','TCP/IP',1088),(32,'thread/sql/one_connection','FOREGROUND',7,'root','localhost',NULL,'Sleep',187,NULL,NULL,NULL,NULL,'YES','YES','TCP/IP',4884),(34,'thread/sql/one_connection','FOREGROUND',9,'xchat','localhost','xchat','Sleep',496,NULL,NULL,NULL,NULL,'YES','YES','TCP/IP',10148),(35,'thread/sql/one_connection','FOREGROUND',10,'root','localhost',NULL,'Sleep',187,NULL,NULL,26,NULL,'YES','YES','TCP/IP',4312),(37,'thread/sql/one_connection','FOREGROUND',12,'xchat','localhost','xchat','Sleep',491,NULL,NULL,NULL,NULL,'YES','YES','TCP/IP',3908),(38,'thread/sql/one_connection','FOREGROUND',13,'xchat','localhost','xchat','Sleep',491,NULL,NULL,26,NULL,'YES','YES','TCP/IP',2196),(39,'thread/sql/one_connection','FOREGROUND',14,'xchat','localhost','xchat','Sleep',561,NULL,NULL,26,NULL,'YES','YES','TCP/IP',1932),(41,'thread/sql/one_connection','FOREGROUND',16,'xchat','localhost',NULL,'Sleep',329,NULL,NULL,NULL,NULL,'YES','YES','TCP/IP',2272),(419,'thread/sql/one_connection','FOREGROUND',394,'xchat','localhost','performance_schema','Query',0,'Sending data','SELECT /*!40001 SQL_NO_CACHE */ * FROM `threads`',NULL,NULL,'YES','YES','TCP/IP',7124);
/*!40000 ALTER TABLE `threads` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:44
