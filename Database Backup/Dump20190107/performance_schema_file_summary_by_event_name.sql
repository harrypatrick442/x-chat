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
-- Table structure for table `file_summary_by_event_name`
--

DROP TABLE IF EXISTS `file_summary_by_event_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file_summary_by_event_name` (
  `EVENT_NAME` varchar(128) NOT NULL,
  `COUNT_STAR` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `COUNT_READ` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_READ` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_READ` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_READ` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_READ` bigint(20) unsigned NOT NULL,
  `SUM_NUMBER_OF_BYTES_READ` bigint(20) NOT NULL,
  `COUNT_WRITE` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `SUM_NUMBER_OF_BYTES_WRITE` bigint(20) NOT NULL,
  `COUNT_MISC` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_MISC` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_MISC` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_MISC` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_MISC` bigint(20) unsigned NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file_summary_by_event_name`
--

LOCK TABLES `file_summary_by_event_name` WRITE;
/*!40000 ALTER TABLE `file_summary_by_event_name` DISABLE KEYS */;
INSERT INTO `file_summary_by_event_name` VALUES ('wait/io/file/sql/map',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/binlog',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/binlog_cache',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/binlog_index',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/binlog_index_cache',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/relaylog',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/relaylog_cache',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/relaylog_index',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/relaylog_index_cache',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/io_cache',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/casetest',15,3873645052,0,258242800,2265195708,0,0,0,0,0,0,0,0,0,0,0,0,15,3873645052,0,258242800,2265195708),('wait/io/file/sql/dbopt',38,1305107576,2563244,34344592,168268532,0,0,0,0,0,0,2,115027264,57225872,57513632,57801392,134,36,1190080312,2563244,33057520,168268532),('wait/io/file/sql/des_key_file',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/ERRMSG',5,197908248,12384144,39581388,75286300,3,105421748,12384144,35140292,52991876,76649,0,0,0,0,0,0,2,92486500,17200200,46243032,75286300),('wait/io/file/sql/select_to_file',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/file_parser',67,4814170300,0,71853236,392852132,15,862173868,18093128,57477880,392852132,10227,0,0,0,0,0,0,52,3951996432,0,75999596,220071000),('wait/io/file/sql/FRM',2791,154283631440,0,55278696,2254713832,1325,85379280568,4922004,64436876,2190919620,321593,0,0,0,0,0,0,1466,68904350872,0,47001236,2254713832),('wait/io/file/sql/global_ddl_log',2,55931824,0,27965912,31579916,0,0,0,0,0,0,0,0,0,0,0,0,2,55931824,0,27965912,31579916),('wait/io/file/sql/load',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/LOAD_FILE',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/log_event_data',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/log_event_info',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/master_info',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/misc',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/partition_ddl_log',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/pid',3,361026312,70210824,120342104,204035792,0,0,0,0,0,0,1,86779696,86779696,86779696,86779696,5,2,274246616,70210824,137123308,204035792),('wait/io/file/sql/query_log',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/relay_log_info',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/send_file',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/slow_log',4,106581508,2131168,26645268,66583304,0,0,0,0,0,0,1,66583304,66583304,66583304,66583304,201,3,39998204,2131168,13332444,34087352),('wait/io/file/sql/tclog',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/trigger_name',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/trigger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/sql/init',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/mysys/charset',3,89448452,12605632,29815860,39287524,1,39287524,39287524,39287524,39287524,18710,0,0,0,0,0,0,2,50160928,12605632,25080464,37555296),('wait/io/file/mysys/cnf',5,99886292,319588,19977084,48077284,3,37137172,319588,12378912,29651924,56,0,0,0,0,0,0,2,62749120,14671836,31374560,48077284),('wait/io/file/csv/metadata',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/csv/data',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/csv/update',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/innodb/innodb_data_file',884,326802264408,0,369685708,4575384872,557,220193205568,30799476,395319892,4575384872,11239424,73,73334464468,25710484,1004581496,4510057684,13713408,254,33274594372,0,131002304,902349524),('wait/io/file/innodb/innodb_log_file',99,53547350028,15381208,540881980,2226347236,7,2080145100,167387376,297163212,756050596,70144,43,33574698404,39225612,780806676,2226347236,31232,49,17892506524,15381208,365153052,1518695256),('wait/io/file/innodb/innodb_temp_file',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/myisam/data_tmp',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/myisam/dfile',336,3053525564,984488,9087548,239308192,173,1562374172,4928544,9030868,32811616,19969,28,264202920,5246824,9435476,43297852,2832,135,1226948472,984488,9088420,239308192),('wait/io/file/myisam/kfile',46,636312788,1260040,13832536,69678468,18,201202228,5601292,11177732,32647244,4926,9,114931780,5317892,12770004,69678468,1187,19,320178780,1260040,16851400,35149884),('wait/io/file/myisam/log',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/myisammrg/MRG',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/archive/metadata',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/archive/data',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/archive/FRM',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('wait/io/file/partition/ha_partition::parfile',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `file_summary_by_event_name` ENABLE KEYS */;
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
