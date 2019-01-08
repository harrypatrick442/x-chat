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
-- Table structure for table `status_by_user`
--

DROP TABLE IF EXISTS `status_by_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status_by_user` (
  `USER` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `VARIABLE_NAME` varchar(64) NOT NULL,
  `VARIABLE_VALUE` varchar(1024) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_by_user`
--

LOCK TABLES `status_by_user` WRITE;
/*!40000 ALTER TABLE `status_by_user` DISABLE KEYS */;
INSERT INTO `status_by_user` VALUES (NULL,'Bytes_received','474'),(NULL,'Bytes_sent','474'),(NULL,'Com_stmt_reprepare','0'),(NULL,'Created_tmp_disk_tables','0'),(NULL,'Created_tmp_tables','0'),(NULL,'Handler_commit','0'),(NULL,'Handler_delete','0'),(NULL,'Handler_discover','0'),(NULL,'Handler_external_lock','0'),(NULL,'Handler_mrr_init','0'),(NULL,'Handler_prepare','0'),(NULL,'Handler_read_first','0'),(NULL,'Handler_read_key','0'),(NULL,'Handler_read_last','0'),(NULL,'Handler_read_next','0'),(NULL,'Handler_read_prev','0'),(NULL,'Handler_read_rnd','0'),(NULL,'Handler_read_rnd_next','0'),(NULL,'Handler_rollback','0'),(NULL,'Handler_savepoint','0'),(NULL,'Handler_savepoint_rollback','0'),(NULL,'Handler_update','0'),(NULL,'Handler_write','0'),(NULL,'Max_execution_time_exceeded','0'),(NULL,'Max_execution_time_set','0'),(NULL,'Max_execution_time_set_failed','0'),(NULL,'Opened_table_definitions','0'),(NULL,'Opened_tables','0'),(NULL,'Questions','0'),(NULL,'Select_full_join','0'),(NULL,'Select_full_range_join','0'),(NULL,'Select_range','0'),(NULL,'Select_range_check','0'),(NULL,'Select_scan','0'),(NULL,'Slow_queries','0'),(NULL,'Sort_merge_passes','0'),(NULL,'Sort_range','0'),(NULL,'Sort_rows','0'),(NULL,'Sort_scan','0'),(NULL,'Table_open_cache_hits','0'),(NULL,'Table_open_cache_misses','0'),(NULL,'Table_open_cache_overflows','0'),('xchat','Bytes_received','207281'),('xchat','Bytes_sent','4686296'),('xchat','Com_stmt_reprepare','0'),('xchat','Created_tmp_disk_tables','412'),('xchat','Created_tmp_tables','1359'),('xchat','Handler_commit','76'),('xchat','Handler_delete','4'),('xchat','Handler_discover','0'),('xchat','Handler_external_lock','997'),('xchat','Handler_mrr_init','0'),('xchat','Handler_prepare','0'),('xchat','Handler_read_first','235'),('xchat','Handler_read_key','434'),('xchat','Handler_read_last','0'),('xchat','Handler_read_next','148'),('xchat','Handler_read_prev','0'),('xchat','Handler_read_rnd','0'),('xchat','Handler_read_rnd_next','295760'),('xchat','Handler_rollback','0'),('xchat','Handler_savepoint','0'),('xchat','Handler_savepoint_rollback','0'),('xchat','Handler_update','0'),('xchat','Handler_write','125604'),('xchat','Max_execution_time_exceeded','0'),('xchat','Max_execution_time_set','0'),('xchat','Max_execution_time_set_failed','0'),('xchat','Opened_table_definitions','48'),('xchat','Opened_tables','216'),('xchat','Questions','2417'),('xchat','Select_full_join','300'),('xchat','Select_full_range_join','0'),('xchat','Select_range','0'),('xchat','Select_range_check','0'),('xchat','Select_scan','1165'),('xchat','Slow_queries','0'),('xchat','Sort_merge_passes','0'),('xchat','Sort_range','0'),('xchat','Sort_rows','0'),('xchat','Sort_scan','200'),('xchat','Table_open_cache_hits','850'),('xchat','Table_open_cache_misses','216'),('xchat','Table_open_cache_overflows','0'),('root','Bytes_received','1312'),('root','Bytes_sent','15867'),('root','Com_stmt_reprepare','0'),('root','Created_tmp_disk_tables','0'),('root','Created_tmp_tables','2'),('root','Handler_commit','16'),('root','Handler_delete','0'),('root','Handler_discover','0'),('root','Handler_external_lock','132'),('root','Handler_mrr_init','0'),('root','Handler_prepare','0'),('root','Handler_read_first','0'),('root','Handler_read_key','128'),('root','Handler_read_last','0'),('root','Handler_read_next','78'),('root','Handler_read_prev','0'),('root','Handler_read_rnd','0'),('root','Handler_read_rnd_next','2040'),('root','Handler_rollback','0'),('root','Handler_savepoint','0'),('root','Handler_savepoint_rollback','0'),('root','Handler_update','0'),('root','Handler_write','1018'),('root','Max_execution_time_exceeded','0'),('root','Max_execution_time_set','0'),('root','Max_execution_time_set_failed','0'),('root','Opened_table_definitions','4'),('root','Opened_tables','6'),('root','Questions','34'),('root','Select_full_join','0'),('root','Select_full_range_join','0'),('root','Select_range','0'),('root','Select_range_check','0'),('root','Select_scan','4'),('root','Slow_queries','0'),('root','Sort_merge_passes','0'),('root','Sort_range','0'),('root','Sort_rows','0'),('root','Sort_scan','0'),('root','Table_open_cache_hits','60'),('root','Table_open_cache_misses','6'),('root','Table_open_cache_overflows','0');
/*!40000 ALTER TABLE `status_by_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:19:05
