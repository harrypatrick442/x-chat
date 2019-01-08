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
-- Table structure for table `rwlock_instances`
--

DROP TABLE IF EXISTS `rwlock_instances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rwlock_instances` (
  `NAME` varchar(128) NOT NULL,
  `OBJECT_INSTANCE_BEGIN` bigint(20) unsigned NOT NULL,
  `WRITE_LOCKED_BY_THREAD_ID` bigint(20) unsigned DEFAULT NULL,
  `READ_LOCKED_BY_COUNT` int(10) unsigned NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rwlock_instances`
--

LOCK TABLES `rwlock_instances` WRITE;
/*!40000 ALTER TABLE `rwlock_instances` DISABLE KEYS */;
INSERT INTO `rwlock_instances` VALUES ('wait/synch/rwlock/session/LOCK_srv_session_collection',140694899579408,NULL,0),('wait/synch/rwlock/sql/LOGGER::LOCK_logger',140694898485712,NULL,0),('wait/synch/rwlock/sql/LOCK_system_variables_hash',140694899395240,NULL,0),('wait/synch/rwlock/sql/LOCK_sys_init_connect',140694899395192,NULL,0),('wait/synch/rwlock/sql/LOCK_sys_init_slave',140694899395216,NULL,0),('wait/synch/rwlock/mysys/SAFE_HASH::lock',140694899645952,NULL,0),('wait/synch/rwlock/sql/LOCK_dboptions',140694899497240,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2336392227784,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2336392221000,NULL,0),('wait/synch/rwlock/sql/Trans_delegate::lock',140694899567808,NULL,0),('wait/synch/rwlock/sql/Binlog_storage_delegate::lock',140694899567952,NULL,0),('wait/synch/rwlock/sql/Server_state_delegate::lock',140694899568096,NULL,0),('wait/synch/rwlock/sql/Binlog_transmit_delegate::lock',140694899568240,NULL,0),('wait/synch/rwlock/sql/Binlog_relay_IO_delegate::lock',140694899568384,NULL,0),('wait/synch/rwlock/sql/gtid_commit_rollback',2334340242664,NULL,0),('wait/synch/rwlock/sql/gtid_mode_lock',2334340242040,NULL,0),('wait/synch/sxlock/innodb/trx_i_s_cache_lock',2336392301400,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389296824,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389296944,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297064,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297184,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297304,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297424,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297544,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297664,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297784,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389297904,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389298024,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389298144,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389298264,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389298384,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389298504,NULL,0),('wait/synch/sxlock/innodb/hash_table_locks',2334389298624,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392299320,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392299160,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392299960,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392301880,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392302200,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392302360,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392302520,NULL,0),('wait/synch/sxlock/innodb/btr_search_latch',2336392298680,NULL,0),('wait/synch/sxlock/innodb/checkpoint_lock',2334389596440,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334390169384,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334390169832,NULL,0),('wait/synch/sxlock/innodb/dict_operation_lock',2334390299432,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390158120,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390157016,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390391784,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390396392,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390401000,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390155768,NULL,0),('wait/synch/sxlock/innodb/trx_purge_latch',2334390501608,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334389638648,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334389637992,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334389676648,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334389678488,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334389643256,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389674584,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389637112,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389641720,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389642168,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389644808,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389645256,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389645704,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389646152,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389646600,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389647048,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389647496,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389656152,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389656600,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389661160,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389661608,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389662584,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389664376,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389664824,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389663480,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389665272,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389663928,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389663032,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389662136,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389597736,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389596840,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389603112,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389599528,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389598184,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389602664,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389603560,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389599080,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389604008,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389604456,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389597288,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389598632,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389599976,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389600424,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389600872,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389601320,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389601768,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389602216,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389606840,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389609976,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389608184,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389610872,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389611320,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389608632,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389611768,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389609080,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389605496,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389612216,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389612664,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334389730584,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390295432,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334389735784,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390299592,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390643880,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390646984,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390649352,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390651720,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390645800,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390299752,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390652312,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390648760,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390652904,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390646392,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390648168,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390647576,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390651128,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390650536,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390753400,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390755176,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390758728,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390766424,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390751624,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390757544,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390761096,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390762280,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390751032,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390755768,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390765240,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390758136,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390759912,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390764648,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390759320,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390760504,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390765832,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390306632,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390756360,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390761688,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390764056,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390310792,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390763464,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390752808,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390302472,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390756952,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390311912,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390753992,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390305832,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390762872,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390754584,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390308232,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390649944,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390878712,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390304712,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390883448,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390889368,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390304552,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390882856,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390312072,NULL,0),('wait/synch/sxlock/innodb/fts_cache_rw_lock',2334390911176,NULL,0),('wait/synch/sxlock/innodb/fts_cache_init_rw_lock',2334390911296,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390889960,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390888184,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390878120,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390306792,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390891144,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390305992,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390892920,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390307912,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390890552,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390306472,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390891736,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390311432,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390887000,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390308712,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390881672,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390302792,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390879304,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390311592,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390892328,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390306312,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390884632,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390304872,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390893512,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390306952,NULL,0),('wait/synch/sxlock/innodb/fil_space_latch',2334389605048,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390880488,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334390702944,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334390715408,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334390590496,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334391001200,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334340996376,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390882264,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390310472,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334389704056,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390881080,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390888776,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390884040,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390306152,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390307272,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390303112,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391123976,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391167432,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340969968,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340969992,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970016,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970040,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970064,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970088,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970112,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970136,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970160,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970184,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970208,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970232,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970256,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970280,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970304,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970328,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970352,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970376,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970400,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970424,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970448,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970472,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970496,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970520,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970544,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970568,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970592,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970616,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970640,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970664,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970688,NULL,0),('wait/synch/rwlock/sql/LOCK_grant',2334340970712,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334340971208,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391389656,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334391386976,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391159080,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391410848,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391410872,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334391409120,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391419448,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391461648,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391461672,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334391460544,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391363256,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390879896,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390309512,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391365016,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390885224,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390303592,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391535528,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390886408,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390307112,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391542392,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334390752216,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390302632,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391541768,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391716680,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390303752,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391543016,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391361312,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391361336,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334391360176,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391540520,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334340804064,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334340803104,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391538024,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391525528,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334391525552,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334391524368,NULL,0),('wait/synch/rwlock/sql/THR_LOCK_servers',140694899495384,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391541144,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391704248,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390311752,NULL,0),('wait/synch/rwlock/sql/THR_LOCK_udf',140694899495880,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391539272,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391536776,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391710760,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390307432,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391539896,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391715496,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390302952,NULL,0),('wait/synch/rwlock/sql/channel_lock',2334389622728,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391536152,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391703656,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390301992,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391537400,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391538648,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392001336,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392009448,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392010072,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391998216,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391998840,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392003208,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392002584,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392004456,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392000712,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391994472,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392005080,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391999464,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392005704,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392003832,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392006328,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391997592,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392006952,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392001960,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392000088,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392007576,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392008824,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392008200,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391995096,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391995720,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391996344,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334391996968,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392397032,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392400776,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392393912,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392397656,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392399528,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392398280,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392393288,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392404520,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392391416,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392401400,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392398904,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392394536,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392395160,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392402024,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392405144,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392400152,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392402648,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392403272,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392406392,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392392040,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392403896,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392405768,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392390792,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392392664,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392395784,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334392396408,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428235480,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428229864,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428237352,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428236104,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428224248,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428236728,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428234232,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428237976,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428239848,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428226744,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428238600,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428239224,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428224872,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428225496,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428226120,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428227368,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428231112,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428227992,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428228616,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428229240,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428230488,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428231736,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428232360,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428232984,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428233608,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428234856,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428768344,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428753368,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428767720,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428760856,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428761480,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428758360,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428765848,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428757112,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334392251824,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334392250272,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334392185680,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428762104,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334428260272,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334428258736,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428767096,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391704840,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390307752,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428758984,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391711352,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390311272,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428766472,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391707800,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390303272,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334433681648,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334429591360,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428762728,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428765224,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391717864,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390308392,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334428241536,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428763976,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428768968,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428753992,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428759608,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334429642832,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334432063808,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428754616,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428764600,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334431105344,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334430622576,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334431789360,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428755864,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428756488,NULL,0),('wait/synch/rwlock/sql/MDL_context::LOCK_waiting_for',2334433508624,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334437077104,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334437076480,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428760232,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390303432,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334428757736,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433412440,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390304072,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433400584,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433413688,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390305672,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433405576,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390304232,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436620408,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433408696,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391711944,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391706024,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391709576,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391705432,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390310952,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433401832,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390303912,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433413064,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433406200,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436615416,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433409320,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391717272,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390310312,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433414312,NULL,0),('wait/synch/sxlock/innodb/index_tree_rw_lock',2334391707208,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390305192,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433399336,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433409944,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390309032,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433403704,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390309352,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433411816,NULL,0),('wait/synch/sxlock/innodb/dict_table_stats',2334390309672,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433402456,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433399960,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433406824,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433404328,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433401208,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433410568,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433411192,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436611048,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::key_root_lock',2334430294480,NULL,0),('wait/synch/rwlock/myisam/MYISAM_SHARE::mmap_lock',2334430293424,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433403080,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433404952,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433407448,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433408072,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433364984,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433366856,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433363112,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433369352,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433369976,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433367480,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433370600,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433363736,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433365608,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433368104,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433366232,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433364360,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334433368728,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438373048,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438384904,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438377416,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438375544,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438378040,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438371800,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438386776,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438378664,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438376168,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438379288,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438373672,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438379912,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438385528,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438384280,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438386152,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438380536,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438381160,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438383656,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438387400,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438382408,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438376792,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438381784,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438383032,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438372424,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438374296,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334438374920,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436621032,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436605432,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436612296,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436618536,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436619160,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436619784,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436610424,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436614792,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436611672,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436606680,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436609176,NULL,0),('wait/synch/rwlock/sql/MDL_lock::rwlock',2334436606056,NULL,0);
/*!40000 ALTER TABLE `rwlock_instances` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:39
