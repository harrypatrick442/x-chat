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
-- Table structure for table `status_by_host`
--

DROP TABLE IF EXISTS `status_by_host`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_by_host` (
  `HOST` char(60) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `VARIABLE_NAME` varchar(64) NOT NULL,
  `VARIABLE_VALUE` varchar(1024) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_by_host`
--

LOCK TABLES `status_by_host` WRITE;
/*!40000 ALTER TABLE `status_by_host` DISABLE KEYS */;
INSERT INTO `status_by_host` VALUES (NULL,'Bytes_received','474'),(NULL,'Bytes_sent','474'),(NULL,'Com_stmt_reprepare','0'),(NULL,'Created_tmp_disk_tables','0'),(NULL,'Created_tmp_tables','0'),(NULL,'Handler_commit','0'),(NULL,'Handler_delete','0'),(NULL,'Handler_discover','0'),(NULL,'Handler_external_lock','0'),(NULL,'Handler_mrr_init','0'),(NULL,'Handler_prepare','0'),(NULL,'Handler_read_first','0'),(NULL,'Handler_read_key','0'),(NULL,'Handler_read_last','0'),(NULL,'Handler_read_next','0'),(NULL,'Handler_read_prev','0'),(NULL,'Handler_read_rnd','0'),(NULL,'Handler_read_rnd_next','0'),(NULL,'Handler_rollback','0'),(NULL,'Handler_savepoint','0'),(NULL,'Handler_savepoint_rollback','0'),(NULL,'Handler_update','0'),(NULL,'Handler_write','0'),(NULL,'Max_execution_time_exceeded','0'),(NULL,'Max_execution_time_set','0'),(NULL,'Max_execution_time_set_failed','0'),(NULL,'Opened_table_definitions','0'),(NULL,'Opened_tables','0'),(NULL,'Questions','0'),(NULL,'Select_full_join','0'),(NULL,'Select_full_range_join','0'),(NULL,'Select_range','0'),(NULL,'Select_range_check','0'),(NULL,'Select_scan','0'),(NULL,'Slow_queries','0'),(NULL,'Sort_merge_passes','0'),(NULL,'Sort_range','0'),(NULL,'Sort_rows','0'),(NULL,'Sort_scan','0'),(NULL,'Table_open_cache_hits','0'),(NULL,'Table_open_cache_misses','0'),(NULL,'Table_open_cache_overflows','0'),('localhost','Bytes_received','153148'),('localhost','Bytes_sent','3628258'),('localhost','Com_stmt_reprepare','0'),('localhost','Created_tmp_disk_tables','300'),('localhost','Created_tmp_tables','997'),('localhost','Handler_commit','92'),('localhost','Handler_delete','4'),('localhost','Handler_discover','0'),('localhost','Handler_external_lock','961'),('localhost','Handler_mrr_init','0'),('localhost','Handler_prepare','0'),('localhost','Handler_read_first','179'),('localhost','Handler_read_key','506'),('localhost','Handler_read_last','0'),('localhost','Handler_read_next','226'),('localhost','Handler_read_prev','0'),('localhost','Handler_read_rnd','0'),('localhost','Handler_read_rnd_next','226812'),('localhost','Handler_rollback','0'),('localhost','Handler_savepoint','0'),('localhost','Handler_savepoint_rollback','0'),('localhost','Handler_update','0'),('localhost','Handler_write','93526'),('localhost','Max_execution_time_exceeded','0'),('localhost','Max_execution_time_set','0'),('localhost','Max_execution_time_set_failed','0'),('localhost','Opened_table_definitions','52'),('localhost','Opened_tables','196'),('localhost','Questions','1835'),('localhost','Select_full_join','216'),('localhost','Select_full_range_join','0'),('localhost','Select_range','0'),('localhost','Select_range_check','0'),('localhost','Select_scan','861'),('localhost','Slow_queries','0'),('localhost','Sort_merge_passes','0'),('localhost','Sort_range','0'),('localhost','Sort_rows','0'),('localhost','Sort_scan','144'),('localhost','Table_open_cache_hits','712'),('localhost','Table_open_cache_misses','196'),('localhost','Table_open_cache_overflows','0');
/*!40000 ALTER TABLE `status_by_host` ENABLE KEYS */;
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
