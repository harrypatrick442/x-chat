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
-- Table structure for table `status_by_account`
--

DROP TABLE IF EXISTS `status_by_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_by_account` (
  `USER` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `HOST` char(60) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `VARIABLE_NAME` varchar(64) NOT NULL,
  `VARIABLE_VALUE` varchar(1024) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_by_account`
--

LOCK TABLES `status_by_account` WRITE;
/*!40000 ALTER TABLE `status_by_account` DISABLE KEYS */;
INSERT INTO `status_by_account` VALUES (NULL,NULL,'Bytes_received','474'),(NULL,NULL,'Bytes_sent','474'),(NULL,NULL,'Com_stmt_reprepare','0'),(NULL,NULL,'Created_tmp_disk_tables','0'),(NULL,NULL,'Created_tmp_tables','0'),(NULL,NULL,'Handler_commit','0'),(NULL,NULL,'Handler_delete','0'),(NULL,NULL,'Handler_discover','0'),(NULL,NULL,'Handler_external_lock','0'),(NULL,NULL,'Handler_mrr_init','0'),(NULL,NULL,'Handler_prepare','0'),(NULL,NULL,'Handler_read_first','0'),(NULL,NULL,'Handler_read_key','0'),(NULL,NULL,'Handler_read_last','0'),(NULL,NULL,'Handler_read_next','0'),(NULL,NULL,'Handler_read_prev','0'),(NULL,NULL,'Handler_read_rnd','0'),(NULL,NULL,'Handler_read_rnd_next','0'),(NULL,NULL,'Handler_rollback','0'),(NULL,NULL,'Handler_savepoint','0'),(NULL,NULL,'Handler_savepoint_rollback','0'),(NULL,NULL,'Handler_update','0'),(NULL,NULL,'Handler_write','0'),(NULL,NULL,'Max_execution_time_exceeded','0'),(NULL,NULL,'Max_execution_time_set','0'),(NULL,NULL,'Max_execution_time_set_failed','0'),(NULL,NULL,'Opened_table_definitions','0'),(NULL,NULL,'Opened_tables','0'),(NULL,NULL,'Questions','0'),(NULL,NULL,'Select_full_join','0'),(NULL,NULL,'Select_full_range_join','0'),(NULL,NULL,'Select_range','0'),(NULL,NULL,'Select_range_check','0'),(NULL,NULL,'Select_scan','0'),(NULL,NULL,'Slow_queries','0'),(NULL,NULL,'Sort_merge_passes','0'),(NULL,NULL,'Sort_range','0'),(NULL,NULL,'Sort_rows','0'),(NULL,NULL,'Sort_scan','0'),(NULL,NULL,'Table_open_cache_hits','0'),(NULL,NULL,'Table_open_cache_misses','0'),(NULL,NULL,'Table_open_cache_overflows','0'),('xchat','localhost','Bytes_received','181622'),('xchat','localhost','Bytes_sent','3942326'),('xchat','localhost','Com_stmt_reprepare','0'),('xchat','localhost','Created_tmp_disk_tables','360'),('xchat','localhost','Created_tmp_tables','1190'),('xchat','localhost','Handler_commit','76'),('xchat','localhost','Handler_delete','4'),('xchat','localhost','Handler_discover','0'),('xchat','localhost','Handler_external_lock','919'),('xchat','localhost','Handler_mrr_init','0'),('xchat','localhost','Handler_prepare','0'),('xchat','localhost','Handler_read_first','209'),('xchat','localhost','Handler_read_key','408'),('xchat','localhost','Handler_read_last','0'),('xchat','localhost','Handler_read_next','148'),('xchat','localhost','Handler_read_prev','0'),('xchat','localhost','Handler_read_rnd','0'),('xchat','localhost','Handler_read_rnd_next','258607'),('xchat','localhost','Handler_rollback','0'),('xchat','localhost','Handler_savepoint','0'),('xchat','localhost','Handler_savepoint_rollback','0'),('xchat','localhost','Handler_update','0'),('xchat','localhost','Handler_write','110238'),('xchat','localhost','Max_execution_time_exceeded','0'),('xchat','localhost','Max_execution_time_set','0'),('xchat','localhost','Max_execution_time_set_failed','0'),('xchat','localhost','Opened_table_definitions','48'),('xchat','localhost','Opened_tables','204'),('xchat','localhost','Questions','2131'),('xchat','localhost','Select_full_join','261'),('xchat','localhost','Select_full_range_join','0'),('xchat','localhost','Select_range','0'),('xchat','localhost','Select_range_check','0'),('xchat','localhost','Select_scan','1022'),('xchat','localhost','Slow_queries','0'),('xchat','localhost','Sort_merge_passes','0'),('xchat','localhost','Sort_range','0'),('xchat','localhost','Sort_rows','0'),('xchat','localhost','Sort_scan','174'),('xchat','localhost','Table_open_cache_hits','758'),('xchat','localhost','Table_open_cache_misses','204'),('xchat','localhost','Table_open_cache_overflows','0'),('root','localhost','Bytes_received','1312'),('root','localhost','Bytes_sent','15867'),('root','localhost','Com_stmt_reprepare','0'),('root','localhost','Created_tmp_disk_tables','0'),('root','localhost','Created_tmp_tables','2'),('root','localhost','Handler_commit','16'),('root','localhost','Handler_delete','0'),('root','localhost','Handler_discover','0'),('root','localhost','Handler_external_lock','132'),('root','localhost','Handler_mrr_init','0'),('root','localhost','Handler_prepare','0'),('root','localhost','Handler_read_first','0'),('root','localhost','Handler_read_key','128'),('root','localhost','Handler_read_last','0'),('root','localhost','Handler_read_next','78'),('root','localhost','Handler_read_prev','0'),('root','localhost','Handler_read_rnd','0'),('root','localhost','Handler_read_rnd_next','2040'),('root','localhost','Handler_rollback','0'),('root','localhost','Handler_savepoint','0'),('root','localhost','Handler_savepoint_rollback','0'),('root','localhost','Handler_update','0'),('root','localhost','Handler_write','1018'),('root','localhost','Max_execution_time_exceeded','0'),('root','localhost','Max_execution_time_set','0'),('root','localhost','Max_execution_time_set_failed','0'),('root','localhost','Opened_table_definitions','4'),('root','localhost','Opened_tables','6'),('root','localhost','Questions','34'),('root','localhost','Select_full_join','0'),('root','localhost','Select_full_range_join','0'),('root','localhost','Select_range','0'),('root','localhost','Select_range_check','0'),('root','localhost','Select_scan','4'),('root','localhost','Slow_queries','0'),('root','localhost','Sort_merge_passes','0'),('root','localhost','Sort_range','0'),('root','localhost','Sort_rows','0'),('root','localhost','Sort_scan','0'),('root','localhost','Table_open_cache_hits','60'),('root','localhost','Table_open_cache_misses','6'),('root','localhost','Table_open_cache_overflows','0');
/*!40000 ALTER TABLE `status_by_account` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:19:03
