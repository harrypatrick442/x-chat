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
-- Table structure for table `table_io_waits_summary_by_index_usage`
--

DROP TABLE IF EXISTS `table_io_waits_summary_by_index_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table_io_waits_summary_by_index_usage` (
  `OBJECT_TYPE` varchar(64) DEFAULT NULL,
  `OBJECT_SCHEMA` varchar(64) DEFAULT NULL,
  `OBJECT_NAME` varchar(64) DEFAULT NULL,
  `INDEX_NAME` varchar(64) DEFAULT NULL,
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
  `COUNT_WRITE` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_WRITE` bigint(20) unsigned NOT NULL,
  `COUNT_FETCH` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_FETCH` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_FETCH` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_FETCH` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_FETCH` bigint(20) unsigned NOT NULL,
  `COUNT_INSERT` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_INSERT` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_INSERT` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_INSERT` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_INSERT` bigint(20) unsigned NOT NULL,
  `COUNT_UPDATE` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_UPDATE` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_UPDATE` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_UPDATE` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_UPDATE` bigint(20) unsigned NOT NULL,
  `COUNT_DELETE` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_DELETE` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_DELETE` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_DELETE` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_DELETE` bigint(20) unsigned NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_io_waits_summary_by_index_usage`
--

LOCK TABLES `table_io_waits_summary_by_index_usage` WRITE;
/*!40000 ALTER TABLE `table_io_waits_summary_by_index_usage` DISABLE KEYS */;
INSERT INTO `table_io_waits_summary_by_index_usage` VALUES ('TABLE','xchat','tblusers','PRIMARY',45,236465036,2715844,5254672,33870224,45,236465036,2715844,5254672,33870224,0,0,0,0,0,45,236465036,2715844,5254672,33870224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblusers',NULL,2187,7652490624,196741512,3498900,2864845692,2184,1723941384,196741512,789160,586747872,3,5928549240,632135036,1976183080,2864845692,2184,1723941384,196741512,789160,586747872,3,5928549240,632135036,1976183080,2864845692,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblrooms','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblrooms',NULL,4,110136652,21995328,27533836,37429728,4,110136652,21995328,27533836,37429728,0,0,0,0,0,4,110136652,21995328,27533836,37429728,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblroommessages','PRIMARY',72,222833496,1451880,3094728,29281760,72,222833496,1451880,3094728,29281760,0,0,0,0,0,72,222833496,1451880,3094728,29281760,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblroommessages',NULL,82,5654587768,72319320,68958196,2886825760,78,418028952,126538972,5359312,291489980,4,5236558816,72319320,1309139704,2886825760,78,418028952,126538972,5359312,291489980,4,5236558816,72319320,1309139704,2886825760,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblauthenticate','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblauthenticate',NULL,2,77560912,19481352,38780456,58079560,2,77560912,19481352,38780456,58079560,0,0,0,0,0,2,77560912,19481352,38780456,58079560,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','idx_fk_store_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','idx_fk_address_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','idx_last_name',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer',NULL,1797,6416779860,1372654876,3570404,3360265952,1797,6416779860,1372654876,3570404,3360265952,0,0,0,0,0,1797,6416779860,1372654876,3570404,3360265952,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_text','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_text','idx_title_description',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_text',NULL,3000,16399262332,3302376488,5466132,9595117400,3000,16399262332,3302376488,5466132,9595117400,0,0,0,0,0,3000,16399262332,3302376488,5466132,9595117400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_actor','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_actor','idx_fk_film_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_actor',NULL,16386,22273735800,5291827484,1359012,11475728844,16386,22273735800,5291827484,1359012,11475728844,0,0,0,0,0,16386,22273735800,5291827484,1359012,11475728844,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address','idx_fk_city_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address','idx_location',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address',NULL,1809,11199924836,2358707244,6191200,4670373140,1809,11199924836,2358707244,6191200,4670373140,0,0,0,0,0,1809,11199924836,2358707244,6191200,4670373140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','rental_date',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','idx_fk_inventory_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','idx_fk_customer_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','idx_fk_staff_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','idx_fk_staff_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','idx_fk_customer_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','fk_payment_rental',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','idx_title',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','idx_fk_language_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','idx_fk_original_language_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film',NULL,3000,24606881236,6988702860,8202032,10493186712,3000,24606881236,6988702860,8202032,10493186712,0,0,0,0,0,3000,24606881236,6988702860,8202032,10493186712,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff','idx_fk_store_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff','idx_fk_address_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','category','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','category',NULL,48,166597780,39704340,3470560,72350276,48,166597780,39704340,3470560,72350276,0,0,0,0,0,48,166597780,39704340,3470560,72350276,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','city','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','city','idx_fk_country_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','city',NULL,1800,3046196840,728913956,1692116,1301095940,1800,3046196840,728913956,1692116,1301095940,0,0,0,0,0,1800,3046196840,728913956,1692116,1301095940,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','language','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','language',NULL,18,146287156,27669432,8127040,60429600,18,146287156,27669432,8127040,60429600,0,0,0,0,0,18,146287156,27669432,8127040,60429600,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','country','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','country',NULL,327,628284720,120291964,1921016,271802836,327,628284720,120291964,1921016,271802836,0,0,0,0,0,327,628284720,120291964,1921016,271802836,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','actor','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','actor','idx_actor_last_name',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','actor',NULL,600,746868000,218602988,1244780,282052324,600,746868000,218602988,1244780,282052324,0,0,0,0,0,600,746868000,218602988,1244780,282052324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_category','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_category','fk_film_category_category',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_category',NULL,3000,6247347644,921118452,2082336,4073395400,3000,6247347644,921118452,2082336,4073395400,0,0,0,0,0,3000,6247347644,921118452,2082336,4073395400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory','idx_fk_film_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory','idx_store_id_film_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory',NULL,13743,24661593132,5690823728,1794140,10713604332,13743,24661593132,5690823728,1794140,10713604332,0,0,0,0,0,13743,24661593132,5690823728,1794140,10713604332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store','idx_unique_manager',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store','idx_fk_address_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sys','sys_config','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sys','sys_config',NULL,12,1848846228,33379724,154070192,1815466504,12,1848846228,33379724,154070192,1815466504,0,0,0,0,0,12,1848846228,33379724,154070192,1815466504,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `table_io_waits_summary_by_index_usage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:43
