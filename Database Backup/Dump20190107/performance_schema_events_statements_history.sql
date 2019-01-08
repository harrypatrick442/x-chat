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
-- Table structure for table `events_statements_history`
--

DROP TABLE IF EXISTS `events_statements_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_statements_history` (
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
-- Dumping data for table `events_statements_history`
--

LOCK TABLES `events_statements_history` WRITE;
/*!40000 ALTER TABLE `events_statements_history` DISABLE KEYS */;
INSERT INTO `events_statements_history` VALUES (31,31,31,'statement/sql/show_variables','socket_connection.cc:101',53067847853480,53073398483572,5550630092,438000000,'SHOW VARIABLES WHERE Variable_name LIKE \'character\\_set\\_%\' OR Variable_name LIKE \'collation%\'','3930cc2e532260fd74cf697bcb016273','SHOW VARIABLES WHERE `Variable_name` LIKE ? OR `Variable_name` LIKE ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,10,1018,0,1,0,0,0,0,2,0,0,0,0,1,0,NULL,NULL,0),(31,32,32,'statement/com/Ping','socket_connection.cc:101',380141431504944,380141479697568,48192624,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,23,23,'statement/sql/alter_table','socket_connection.cc:101',35958209755432,35966077647528,7867892096,4769000000,'ALTER TABLE xchat.tblroommessages CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci','ed6c5b777c742c1be8dca450e3afb311','ALTER TABLE `xchat` . `tblroommessages` CONVERT TO CHARACTER SET `utf8mb4` COLLATE `utf8mb4_unicode_ci` ',NULL,NULL,NULL,NULL,NULL,0,'00000','Records: 0  Duplicates: 0  Warnings: 0',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,24,24,'statement/sql/alter_table','socket_connection.cc:101',35968089243352,35973026756172,4937512820,1941000000,'ALTER TABLE xchat.tblRooms CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci','355b393828a53d788c56d299908242dd','ALTER TABLE `xchat` . `tblRooms` CONVERT TO CHARACTER SET `utf8mb4` COLLATE `utf8mb4_unicode_ci` ',NULL,NULL,NULL,NULL,NULL,0,'00000','Records: 0  Duplicates: 0  Warnings: 0',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,25,25,'statement/sql/alter_table','socket_connection.cc:101',35974850936236,35979667075040,4816138804,1895000000,'ALTER TABLE xchat.tblUsers CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci','9d693135b745fa9946079542e7e3f144','ALTER TABLE `xchat` . `tblUsers` CONVERT TO CHARACTER SET `utf8mb4` COLLATE `utf8mb4_unicode_ci` ',NULL,NULL,NULL,NULL,NULL,0,'00000','Records: 0  Duplicates: 0  Warnings: 0',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,26,26,'statement/sql/alter_table','socket_connection.cc:101',35981350247056,35986641172452,5290925396,1984000000,'ALTER TABLE xchat.tblAuthenticate CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci','9cc153294d5702639834f474803cfb9d','ALTER TABLE `xchat` . `tblAuthenticate` CONVERT TO CHARACTER SET `utf8mb4` COLLATE `utf8mb4_unicode_ci` ',NULL,NULL,NULL,NULL,NULL,0,'00000','Records: 0  Duplicates: 0  Warnings: 0',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,27,27,'statement/sql/alter_table','socket_connection.cc:101',35988302479296,35993199831596,4897352300,2433000000,'ALTER TABLE xchat.tblroommessages CHANGE content content TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci','c30b3d95e3fd565e2dfb35b004cbe394','ALTER TABLE `xchat` . `tblroommessages` CHANGE `content` `content` TEXT CHARACTER SET `utf8mb4` COLLATE `utf8mb4_unicode_ci` ',NULL,NULL,NULL,NULL,NULL,0,'00000','Records: 0  Duplicates: 0  Warnings: 0',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,28,28,'statement/com/Ping','socket_connection.cc:101',44839125087208,44839193806320,68719112,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,29,29,'statement/sql/set_option','socket_connection.cc:101',44840744894848,44840846188604,101293756,0,'SET NAMES utf8mb4','b53b828efafcdc29a0265c8d1f8c172a','SET NAMES `utf8mb4` ',NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(31,30,30,'statement/com/Ping','socket_connection.cc:101',53065620729532,53065696142064,75412532,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,41,41,'statement/com/Ping','socket_connection.cc:101',468877698387412,468877771568804,73181392,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,42,42,'statement/sql/help','socket_connection.cc:101',468877788079240,468878127658748,339579508,67000000,'help \'begin\'','6e337db4177ded1eed9080216face221','HELP ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,33,33,'statement/com/Ping','socket_connection.cc:101',428504251772652,428504293718084,41945432,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,34,34,'statement/sql/help','socket_connection.cc:101',428504301750188,428504679259076,377508888,25000000,'help \'create\'','6e337db4177ded1eed9080216face221','HELP ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,35,35,'statement/com/Ping','socket_connection.cc:101',435910265760236,435910337156716,71396480,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,36,36,'statement/sql/help','socket_connection.cc:101',435910356790748,435910721359024,364568276,79000000,'help \'begin\'','6e337db4177ded1eed9080216face221','HELP ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,37,37,'statement/com/Ping','socket_connection.cc:101',438754513661448,438754581041876,67380428,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,38,38,'statement/sql/help','socket_connection.cc:101',438754633250552,438754896971300,263720748,71000000,'help \'utf8mb4\'','6e337db4177ded1eed9080216face221','HELP ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,39,39,'statement/com/Ping','socket_connection.cc:101',455848192415076,455848274967256,82552180,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(32,40,40,'statement/sql/help','socket_connection.cc:101',455848372244960,455848667201668,294956708,90000000,'help \'utf8mb4\'','6e337db4177ded1eed9080216face221','HELP ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,101,101,'statement/com/Ping','socket_connection.cc:101',458467215211620,458467275898628,60687008,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,102,102,'statement/sql/show_create_proc','socket_connection.cc:101',458467297763800,458467611015856,313252056,56000000,'SHOW CREATE PROCEDURE `xchat`.`xchat_hash_get`','e5f9ccb5ebe3513b61de9e0112559bfd','SHOW CREATE PROCEDURE `xchat` . `xchat_hash_get` ','xchat',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,103,103,'statement/com/Ping','socket_connection.cc:101',458467665009444,458467699815228,34805784,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,104,104,'statement/sql/show_variables','socket_connection.cc:101',458467728373820,458471436974728,3708600908,87000000,'SHOW SESSION VARIABLES LIKE \'sql_mode\'','932d3da3dd875d82acdf93e67e96996a','SHOW SESSION VARIABLES LIKE ? ','xchat',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,1,1018,0,1,0,0,0,0,2,0,0,0,0,1,0,NULL,NULL,0),(34,105,105,'statement/com/Ping','socket_connection.cc:101',464271658005108,464271720030800,62025692,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,106,106,'statement/sql/show_create_proc','socket_connection.cc:101',464271792319736,464272031497944,239178208,55000000,'SHOW CREATE PROCEDURE `xchat`.`xchat_rooms_get`','7fed3d4f63b74795aad12139dab6404d','SHOW CREATE PROCEDURE `xchat` . `xchat_rooms_get` ','xchat',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,107,107,'statement/com/Ping','socket_connection.cc:101',466103267765308,466103330683456,62918148,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,108,108,'statement/sql/show_create_proc','socket_connection.cc:101',466103410558268,466103679633752,269075484,55000000,'SHOW CREATE PROCEDURE `xchat`.`xchat_username_count`','d4e2f39d1487b960d397a381d0a4da54','SHOW CREATE PROCEDURE `xchat` . `xchat_username_count` ','xchat',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,109,109,'statement/com/Ping','socket_connection.cc:101',468976270152612,468976352704792,82552180,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(34,110,110,'statement/sql/help','socket_connection.cc:101',468976425439956,468976788223320,362783364,81000000,'help \'begin\'','6e337db4177ded1eed9080216face221','HELP ? ','xchat',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,1,1,'statement/sql/set_option','socket_connection.cc:101',178453902925076,178454044379352,141454276,0,'set autocommit=1','54b0116d21e24f638f94bd799148b397','SET `autocommit` = ? ',NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,2,2,'statement/sql/set_option','socket_connection.cc:101',178454094803116,178454156828808,62025692,0,'SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ','96742f0c703bf6c864d6541da1674821','SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ ',NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,3,3,'statement/sql/show_variables','socket_connection.cc:101',178454189403452,178458137182568,3947779116,242000000,'SHOW SESSION VARIABLES LIKE \'lower_case_table_names\'','932d3da3dd875d82acdf93e67e96996a','SHOW SESSION VARIABLES LIKE ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,1,1018,0,1,0,0,0,0,2,0,0,0,0,1,0,NULL,NULL,0),(35,4,4,'statement/sql/select','socket_connection.cc:101',178458235352728,178458347802184,112449456,0,'SELECT current_user()','733df3db2d5d5ffbee5335f5f21c3631','SELECT CURRENT_USER ( ) ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,5,5,'statement/sql/set_option','socket_connection.cc:101',178458439725152,178458515137684,75412532,0,'SET CHARACTER SET utf8','bc350a40df005e75198814706eb82b1f','SET CHARACTER SET `utf8` ',NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,6,6,'statement/sql/set_option','socket_connection.cc:101',178458537449084,178458620893720,83444636,0,'SET NAMES utf8','af3cf758f0cbc9ea0bda8e95a2c3eec8','SET NAMES `utf8` ',NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,7,7,'statement/sql/set_option','socket_connection.cc:101',178458657038188,178458732896948,75858760,0,'SET SQL_SAFE_UPDATES=1','b4c60fde08355e8d5223960894795888','SET `SQL_SAFE_UPDATES` = ? ',NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,8,8,'statement/sql/select','socket_connection.cc:101',178458749853612,178458823927460,74073848,0,'SELECT CONNECTION_ID()','0bce2b8053e101108490b3b7ed1d8e38','SELECT `CONNECTION_ID` ( ) ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,9,9,'statement/sql/set_option','socket_connection.cc:101',178458893985256,178458958242088,64256832,0,'set autocommit=1','54b0116d21e24f638f94bd799148b397','SET `autocommit` = ? ',NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(35,10,10,'statement/com/Ping','socket_connection.cc:101',178458989478048,178459035885760,46407712,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(37,2,2,'statement/sp/stmt','sp_head.cc:778',392279044617016,392280842023400,1797406384,2295000000,'select count(*) as count from tblUsers where tblUsers.username =username',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_username_count',NULL,0,NULL,NULL,0,0,0,1,436,0,0,0,0,0,0,1,0,0,0,0,1,0,1,'STATEMENT',1),(37,1,2,'statement/sql/call_procedure','socket_connection.cc:101',392278196783816,392280889769796,2692985980,550000000,'CALL xchat_username_count(\'ewrdfdfdsf\')','fe3db0471383b46d437d37d50da4d82c','CALL `xchat_username_count` (?) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(37,3,3,'statement/com/Ping','socket_connection.cc:101',473944039015924,473944111751088,72735164,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(37,5,5,'statement/sp/stmt','sp_head.cc:778',473944871231144,473945229106000,357874856,302000000,'select count(*) as count from tblUsers where tblUsers.username =username',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_username_count',NULL,0,NULL,NULL,0,0,0,1,437,0,0,0,0,0,0,1,0,0,0,0,1,0,4,'STATEMENT',1),(37,4,5,'statement/sql/call_procedure','socket_connection.cc:101',473944605279256,473945259449504,654170248,80000000,'CALL xchat_username_count(\'werdfsfdsfds\')','fe3db0471383b46d437d37d50da4d82c','CALL `xchat_username_count` (?) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(38,12,12,'statement/sp/set','sp_head.cc:778',473954257637124,473954267007912,9370788,0,NULL,NULL,NULL,'xchat','PROCEDURE','xchat','xchat_register',NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,'STATEMENT',1),(38,13,13,'statement/sp/jump_if_not','sp_head.cc:778',473954268792824,473954276824928,8032104,0,NULL,NULL,NULL,'xchat','PROCEDURE','xchat','xchat_register',NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,'STATEMENT',1),(38,14,14,'statement/sp/stmt','sp_head.cc:778',473954278609840,473954468256740,189646900,4175000000,'select * from tblUsers where tblUsers.id = userId',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_register',NULL,0,NULL,NULL,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,8,'STATEMENT',1),(38,8,14,'statement/sql/call_procedure','socket_connection.cc:101',473950128689440,473954505739892,4377050452,110000000,'CALL xchat_register(NULL,\'werdfsfdsfds\',NULL,NULL,NULL,true)','6c9946de2a9c98d374a1c9fa5082ab11','CALL `xchat_register` ( ?, ... , TRUE ) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(38,6,6,'statement/sp/stmt','sp_head.cc:778',392301676854948,392301862932024,186077076,6155000000,'select * from tblUsers where tblUsers.id = userId',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_register',NULL,0,NULL,NULL,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,'STATEMENT',1),(38,1,6,'statement/sql/call_procedure','socket_connection.cc:101',392295521585916,392301899968948,6378383032,431000000,'CALL xchat_register(NULL,\'ewrdfdfdsf\',NULL,NULL,NULL,true)','6c9946de2a9c98d374a1c9fa5082ab11','CALL `xchat_register` ( ?, ... , TRUE ) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(38,7,7,'statement/com/Ping','socket_connection.cc:101',473949534759972,473949610618732,75858760,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(38,9,9,'statement/sp/set','sp_head.cc:778',473950561976828,473950565546652,3569824,0,NULL,NULL,NULL,'xchat','PROCEDURE','xchat','xchat_register',NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,'STATEMENT',1),(38,10,10,'statement/sp/stmt','sp_head.cc:778',473950567777792,473950579825948,12048156,0,'SET NAMES utf8mb4',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_register',NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,'STATEMENT',1),(38,11,11,'statement/sp/stmt','sp_head.cc:778',473950581610860,473954250943704,3669332844,467000000,'insert into tblUsers(email, username, gender, birthday, isGuest) values(email, username, gender, birthday, isGuest)',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_register',NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,'STATEMENT',1),(39,22,22,'statement/sp/stmt','sp_head.cc:778',404128185606384,404130543921364,2358314980,186000000,'insert into tblRoomMESSAGES (roomId, userId, content, serverAssignedNMessage) values(roomId, userId, content, serverAssignedNMessage)',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_room_message_add',NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,'STATEMENT',1),(39,20,22,'statement/sql/call_procedure','socket_connection.cc:101',404128033442636,404130670203888,2636761252,0,'CALL xchat_room_message_add(1,437,\'','87326dbc30acdeb6dd31ed363b6ede7f','CALL `xchat_room_message_add` (...) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(39,14,14,'statement/sp/stmt','sp_head.cc:778',398131727780900,398134026747556,2298966656,213000000,'insert into tblRoomMESSAGES (roomId, userId, content, serverAssignedNMessage) values(roomId, userId, content, serverAssignedNMessage)',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_room_message_add',NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,'STATEMENT',1),(39,12,14,'statement/sql/call_procedure','socket_connection.cc:101',398131540365140,398134124025260,2583660120,0,'CALL xchat_room_message_add(1,437,\'','87326dbc30acdeb6dd31ed363b6ede7f','CALL `xchat_room_message_add` (...) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(39,15,15,'statement/com/Ping','socket_connection.cc:101',402843837897488,402843913310020,75412532,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(39,17,17,'statement/sp/stmt','sp_head.cc:778',402844483143176,402844498761156,15617980,0,'SET NAMES utf8mb4',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_room_message_add',NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,'STATEMENT',1),(39,18,18,'statement/sp/stmt','sp_head.cc:778',402844501438524,402847152925300,2651486776,161000000,'insert into tblRoomMESSAGES (roomId, userId, content, serverAssignedNMessage) values(roomId, userId, content, serverAssignedNMessage)',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_room_message_add',NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,'STATEMENT',1),(39,16,18,'statement/sql/call_procedure','socket_connection.cc:101',402844359538020,402847286793700,2927255680,0,'CALL xchat_room_message_add(1,437,\'??\',38)','87326dbc30acdeb6dd31ed363b6ede7f','CALL `xchat_room_message_add` (...) ','xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(39,19,19,'statement/com/Ping','socket_connection.cc:101',404127286903192,404127358745900,71842708,0,NULL,NULL,NULL,'xchat',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(39,21,21,'statement/sp/stmt','sp_head.cc:778',404128161510072,404128181144104,19634032,0,'SET NAMES utf8mb4',NULL,NULL,'xchat','PROCEDURE','xchat','xchat_room_message_add',NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,'STATEMENT',1),(41,11,11,'statement/sql/show_create_db','socket_connection.cc:101',631059895953804,631060143610344,247656540,0,'SHOW CREATE DATABASE `performance_schema`','8c69fefad31dea9130e2fcd2f663d978','SHOW CREATE SCHEMA `performance_schema` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(41,12,12,'statement/sql/show_tables','socket_connection.cc:101',631060330133648,631068796863720,8466730072,75000000,'SHOW FULL TABLES FROM `performance_schema`','8979eeb900729ee82365377af8efa1c6','SHOW FULL TABLES FROM `performance_schema` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,87,87,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(41,13,13,'statement/sql/show_create_db','socket_connection.cc:101',632367538549212,632367741582952,203033740,0,'SHOW CREATE DATABASE `sakila`','162c1d293b431f7870bc8247a644f0bf','SHOW CREATE SCHEMA `sakila` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(41,14,14,'statement/sql/show_tables','socket_connection.cc:101',632367926767572,632386313146084,18386378512,71000000,'SHOW FULL TABLES FROM `sakila`','2eea3df676f608caf91877094326fe1a','SHOW FULL TABLES FROM `sakila` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,23,23,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(41,15,15,'statement/sql/show_create_db','socket_connection.cc:101',632881318328764,632881586065564,267736800,0,'SHOW CREATE DATABASE `swingers`','7e3f7613cfc9b9e091d628272d796976','SHOW CREATE SCHEMA `swingers` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(41,16,16,'statement/sql/show_tables','socket_connection.cc:101',632881769465272,632882207661168,438195896,77000000,'SHOW FULL TABLES FROM `swingers`','2f234906436b78c6945c15dd87717e80','SHOW FULL TABLES FROM `swingers` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(41,17,17,'statement/sql/show_create_db','socket_connection.cc:101',634460952954380,634461179638204,226683824,0,'SHOW CREATE DATABASE `sys`','3fc790db79222bc9d396b0acc109bc66','SHOW CREATE SCHEMA `sys` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(41,18,18,'statement/sql/show_tables','socket_connection.cc:101',634461288071608,634538627416112,77339344504,83000000,'SHOW FULL TABLES FROM `sys`','788f7e2a708bc0e881c5adc86d2aa4c5','SHOW FULL TABLES FROM `sys` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,101,101,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(41,19,19,'statement/sql/show_create_db','socket_connection.cc:101',636566308867056,636566528411232,219544176,0,'SHOW CREATE DATABASE `xchat`','4d585c4501658e13383754a12396499e','SHOW CREATE SCHEMA `xchat` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(41,20,20,'statement/sql/show_tables','socket_connection.cc:101',636566699316556,636567469059856,769743300,70000000,'SHOW FULL TABLES FROM `xchat`','76d59fe7ea92549a39a85196a724d7f0','SHOW FULL TABLES FROM `xchat` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,4,4,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(61,11,11,'statement/sql/set_option','socket_connection.cc:101',675845571404944,675845661543000,90138056,0,'SET SESSION character_set_results = \'binary\'','32c0cc023258e29683367ac55975cb20','SET SESSION `character_set_results` = ? ','performance_schema',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(61,12,12,'statement/sql/show_create_table','socket_connection.cc:101',675845676268524,675845841819112,165550588,0,'show create table `events_statements_history`','2d597a3184eba3e8ccb8cb1e3a5915d1','SHOW CREATE TABLE `events_statements_history` ','performance_schema',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(61,13,13,'statement/sql/set_option','socket_connection.cc:101',675845858329548,675845928833572,70504024,0,'SET SESSION character_set_results = \'utf8\'','32c0cc023258e29683367ac55975cb20','SET SESSION `character_set_results` = ? ','performance_schema',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(61,14,14,'statement/sql/show_fields','socket_connection.cc:101',675845974348828,675846805671592,831322764,284000000,'show fields from `events_statements_history`','6ac82e4ae0f5c50bdc576fc24ab19eaf','SHOW FIELDS FROM `events_statements_history` ','performance_schema',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,41,41,1,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(61,5,5,'statement/sql/select','socket_connection.cc:101',675834338061272,675835903875324,1565814052,481000000,'SELECT DISTINCT TABLESPACE_NAME, FILE_NAME, LOGFILE_GROUP_NAME, EXTENT_SIZE, INITIAL_SIZE, ENGINE FROM INFORMATION_SCHEMA.FILES WHERE FILE_TYPE = \'DATAFILE\' AND TABLESPACE_NAME IN (SELECT DISTINCT TABLESPACE_NAME FROM INFORMATION_SCHEMA.PARTITIONS WHERE TABLE_SCHEMA=\'performance_schema\' AND TABLE_NAME IN (\'events_statements_history\')) ORDER BY TABLESPACE_NAME, LOGFILE_GROUP_NAME','2582eae1ac31fc6017317b822b19c3f5','SELECT DISTINCTROW `TABLESPACE_NAME` , `FILE_NAME` , `LOGFILE_GROUP_NAME` , EXTENT_SIZE , INITIAL_SIZE , ENGINE FROM `INFORMATION_SCHEMA` . `FILES` WHERE `FILE_TYPE` = ? AND `TABLESPACE_NAME` IN ( SELECT DISTINCTROW `TABLESPACE_NAME` FROM `INFORMATION_SCHEMA` . `PARTITIONS` WHERE `TABLE_SCHEMA` = ? AND TABLE_NAME IN (?) ) ORDER BY `TABLESPACE_NAME` , `LOGFILE_GROUP_NAME` ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,54,1,3,1,0,0,0,1,0,0,0,1,1,0,NULL,NULL,0),(61,6,6,'statement/sql/show_variables','socket_connection.cc:101',675835947605668,675839707969024,3760363356,137000000,'SHOW VARIABLES LIKE \'ndbinfo\\_version\'','c7d67ef1451534c7aa3f8a4e278ee07a','SHOW VARIABLES LIKE ? ',NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,0,1018,0,1,0,0,0,0,2,0,0,0,0,1,0,NULL,NULL,0),(61,7,7,'statement/com/Init DB','socket_connection.cc:101',675839761516384,675839944916092,183399708,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0),(61,8,8,'statement/sql/show_tables','socket_connection.cc:101',675839972136000,675842655304964,2683168964,98000000,'SHOW TABLES LIKE \'events\\_statements\\_history\'','94ce095e8dab074d32474d15c5ff9499','SHOW TABLES LIKE ? ','performance_schema',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(61,9,9,'statement/sql/show_table_status','socket_connection.cc:101',675842722685392,675845402730760,2680045368,109000000,'show table status like \'events\\_statements\\_history\'','cba12fe7a8d8a3e29ddf84e5cacd7932','SHOW TABLE STATUS LIKE ? ','performance_schema',NULL,NULL,NULL,NULL,0,NULL,NULL,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,NULL,NULL,0),(61,10,10,'statement/sql/set_option','socket_connection.cc:101',675845460294172,675845544185036,83890864,0,'SET SQL_QUOTE_SHOW_CREATE=1','e92fbda4acceb75e3e1f52b3dbf99599','SET `SQL_QUOTE_SHOW_CREATE` = ? ','performance_schema',NULL,NULL,NULL,NULL,0,'00000',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,NULL,0);
/*!40000 ALTER TABLE `events_statements_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:18:54
