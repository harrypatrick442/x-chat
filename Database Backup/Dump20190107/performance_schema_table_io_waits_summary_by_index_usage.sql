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
INSERT INTO `table_io_waits_summary_by_index_usage` VALUES ('TABLE','xchat','tblusers','PRIMARY',45,236465036,2715844,5254672,33870224,45,236465036,2715844,5254672,33870224,0,0,0,0,0,45,236465036,2715844,5254672,33870224,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblusers',NULL,1311,6556130256,196741512,5000484,2864845692,1308,627581016,196741512,479600,215854880,3,5928549240,632135036,1976183080,2864845692,1308,627581016,196741512,479600,215854880,3,5928549240,632135036,1976183080,2864845692,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblrooms','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblrooms',NULL,2,50540684,21995328,25270124,28545356,2,50540684,21995328,25270124,28545356,0,0,0,0,0,2,50540684,21995328,25270124,28545356,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblroommessages','PRIMARY',72,222833496,1451880,3094728,29281760,72,222833496,1451880,3094728,29281760,0,0,0,0,0,72,222833496,1451880,3094728,29281760,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblroommessages',NULL,4,5236558816,72319320,1309139704,2886825760,0,0,0,0,0,4,5236558816,72319320,1309139704,2886825760,0,0,0,0,0,4,5236558816,72319320,1309139704,2886825760,0,0,0,0,0,0,0,0,0,0),('TABLE','xchat','tblauthenticate','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','idx_fk_store_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','idx_fk_address_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer','idx_last_name',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','customer',NULL,599,3360265952,3360265952,5609576,3360265952,599,3360265952,3360265952,5609576,3360265952,0,0,0,0,0,599,3360265952,3360265952,5609576,3360265952,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_text','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_text','idx_title_description',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_text',NULL,1000,9595117400,9595117400,9595052,9595117400,1000,9595117400,9595117400,9595052,9595117400,0,0,0,0,0,1000,9595117400,9595117400,9595052,9595117400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_actor','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_actor','idx_fk_film_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_actor',NULL,5462,11475728844,11475728844,2100648,11475728844,5462,11475728844,11475728844,2100648,11475728844,0,0,0,0,0,5462,11475728844,11475728844,2100648,11475728844,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address','idx_fk_city_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address','idx_location',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','address',NULL,603,4170844452,4170844452,6916704,4170844452,603,4170844452,4170844452,6916704,4170844452,0,0,0,0,0,603,4170844452,4170844452,6916704,4170844452,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','rental_date',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','idx_fk_inventory_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','idx_fk_customer_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental','idx_fk_staff_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','rental',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','idx_fk_staff_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','idx_fk_customer_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment','fk_payment_rental',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','payment',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','idx_title',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','idx_fk_language_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film','idx_fk_original_language_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film',NULL,1000,10493186712,10493186712,10492776,10493186712,1000,10493186712,10493186712,10492776,10493186712,0,0,0,0,0,1000,10493186712,10493186712,10492776,10493186712,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff','idx_fk_store_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff','idx_fk_address_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','staff',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','category','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','category',NULL,16,39704340,39704340,2481276,39704340,16,39704340,39704340,2481276,39704340,0,0,0,0,0,16,39704340,39704340,2481276,39704340,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','city','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','city','idx_fk_country_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','city',NULL,600,1301095940,1301095940,2168228,1301095940,600,1301095940,1301095940,2168228,1301095940,0,0,0,0,0,600,1301095940,1301095940,2168228,1301095940,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','language','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','language',NULL,6,60429600,60429600,10071600,60429600,6,60429600,60429600,10071600,60429600,0,0,0,0,0,6,60429600,60429600,10071600,60429600,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','country','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','country',NULL,109,236189920,236189920,2166484,236189920,109,236189920,236189920,2166484,236189920,0,0,0,0,0,109,236189920,236189920,2166484,236189920,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','actor','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','actor','idx_actor_last_name',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','actor',NULL,200,282052324,282052324,1410024,282052324,200,282052324,282052324,1410024,282052324,0,0,0,0,0,200,282052324,282052324,1410024,282052324,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_category','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_category','fk_film_category_category',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','film_category',NULL,1000,4073395400,4073395400,4073112,4073395400,1000,4073395400,4073395400,4073112,4073395400,0,0,0,0,0,1000,4073395400,4073395400,4073112,4073395400,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory','idx_fk_film_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory','idx_store_id_film_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','inventory',NULL,4581,10713604332,10713604332,2338704,10713604332,4581,10713604332,10713604332,2338704,10713604332,0,0,0,0,0,4581,10713604332,10713604332,2338704,10713604332,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store','PRIMARY',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store','idx_unique_manager',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store','idx_fk_address_id',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('TABLE','sakila','store',NULL,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
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

-- Dump completed on 2019-01-07 21:19:02
