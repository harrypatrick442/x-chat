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
-- Table structure for table `cond_instances`
--

DROP TABLE IF EXISTS `cond_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cond_instances` (
  `NAME` varchar(128) NOT NULL,
  `OBJECT_INSTANCE_BEGIN` bigint(20) unsigned NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cond_instances`
--

LOCK TABLES `cond_instances` WRITE;
/*!40000 ALTER TABLE `cond_instances` DISABLE KEYS */;
INSERT INTO `cond_instances` VALUES ('wait/synch/cond/sql/COND_manager',140694899518104),('wait/synch/cond/sql/COND_server_started',140694899395056),('wait/synch/cond/sql/COND_compress_gtid_table',140694899395176),('wait/synch/cond/sql/COND_handler_count',140694899407304),('wait/synch/cond/sql/MYSQL_BIN_LOG::update_cond',140694899582928),('wait/synch/cond/sql/MYSQL_BIN_LOG::prep_xids_cond',140694899585368),('wait/synch/cond/sql/MYSQL_BIN_LOG::COND_done',140694899585608),('wait/synch/cond/sql/COND_thread_cache',140694899407584),('wait/synch/cond/sql/COND_flush_thread_cache',140694899407600),('wait/synch/cond/sql/COND_connection_count',140694899407440),('wait/synch/cond/sql/COND_thd_list',2334340270064),('wait/synch/cond/sql/COND_open',140694899516592),('wait/synch/cond/sql/Query_cache::COND_cache_status_changed',140694899406312),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334390702856),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334390715320),('wait/synch/cond/sql/COND_thr_lock',2334390706464),('wait/synch/cond/sql/COND_thr_lock',2334390718928),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334390590408),('wait/synch/cond/sql/COND_thr_lock',2334390594016),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334391001112),('wait/synch/cond/sql/COND_thr_lock',2334391004720),('wait/synch/cond/innodb/commit_cond',140694899648232),('wait/synch/cond/myisam/keycache_thread_var::suspend',140694900706336),('wait/synch/cond/sql/Gtid_state',2336456894368),('wait/synch/cond/sql/Gtid_state',2336456892576),('wait/synch/cond/sql/Master_info::data_cond',2334391194760),('wait/synch/cond/sql/Master_info::start_cond',2334391194776),('wait/synch/cond/sql/Master_info::stop_cond',2334391194792),('wait/synch/cond/sql/Master_info::sleep_cond',2334391194808),('wait/synch/cond/sql/Relay_log_info::data_cond',2334391844568),('wait/synch/cond/sql/Relay_log_info::start_cond',2334391844584),('wait/synch/cond/sql/Relay_log_info::stop_cond',2334391844600),('wait/synch/cond/sql/Relay_log_info::sleep_cond',2334391844616),('wait/synch/cond/sql/Relay_log_info::log_space_cond',2334391852040),('wait/synch/cond/sql/Relay_log_info::pending_jobs_cond',2334391854480),('wait/synch/cond/sql/Relay_log_info::mts_gaq_cond',2334391845040),('wait/synch/cond/sql/MYSQL_RELAY_LOG::update_cond',2334391846472),('wait/synch/cond/sql/MYSQL_RELAY_LOG::prep_xids_cond',2334391848912),('wait/synch/cond/sql/MYSQL_RELAY_LOG::COND_done',2334391849152),('wait/synch/cond/sql/COND_queue_state',2334390307616),('wait/synch/cond/sql/Event_scheduler::COND_state',2334341054848),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334392185592),('wait/synch/cond/sql/COND_thr_lock',2334392189200),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334429591272),('wait/synch/cond/sql/COND_thr_lock',2334429594880),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334428241448),('wait/synch/cond/sql/COND_thr_lock',2334428245056),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334429642744),('wait/synch/cond/sql/COND_thr_lock',2334429646352),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334432063720),('wait/synch/cond/sql/COND_thr_lock',2334432067328),('wait/synch/cond/myisam/keycache_thread_var::suspend',2334429960832),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334431105256),('wait/synch/cond/sql/COND_thr_lock',2334431108864),('wait/synch/cond/myisam/keycache_thread_var::suspend',2334429961472),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334430622488),('wait/synch/cond/sql/COND_thr_lock',2334430626096),('wait/synch/cond/myisam/keycache_thread_var::suspend',2334429958592),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334431789272),('wait/synch/cond/sql/COND_thr_lock',2334431792880),('wait/synch/cond/myisam/keycache_thread_var::suspend',2334429959632),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334433508536),('wait/synch/cond/sql/COND_thr_lock',2334433512144),('wait/synch/cond/sql/MDL_context::COND_wait_status',2334433681560),('wait/synch/cond/sql/COND_thr_lock',2334433685168);
/*!40000 ALTER TABLE `cond_instances` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:18:55
