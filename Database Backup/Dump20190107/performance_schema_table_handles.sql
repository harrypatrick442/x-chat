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
-- Table structure for table `table_handles`
--

DROP TABLE IF EXISTS `table_handles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `table_handles` (
  `OBJECT_TYPE` varchar(64) NOT NULL,
  `OBJECT_SCHEMA` varchar(64) NOT NULL,
  `OBJECT_NAME` varchar(64) NOT NULL,
  `OBJECT_INSTANCE_BEGIN` bigint(20) unsigned NOT NULL,
  `OWNER_THREAD_ID` bigint(20) unsigned DEFAULT NULL,
  `OWNER_EVENT_ID` bigint(20) unsigned DEFAULT NULL,
  `INTERNAL_LOCK` varchar(64) DEFAULT NULL,
  `EXTERNAL_LOCK` varchar(64) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_handles`
--

LOCK TABLES `table_handles` WRITE;
/*!40000 ALTER TABLE `table_handles` DISABLE KEYS */;
INSERT INTO `table_handles` VALUES ('TABLE','xchat','tblrooms',2334428827728,0,0,NULL,NULL),('TABLE','xchat','tblusers',2334428856848,0,0,NULL,NULL),('TABLE','xchat','tblauthenticate',2334428823568,0,0,NULL,NULL),('TABLE','xchat','tblroommessages',2334428858928,0,0,NULL,NULL),('TABLE','xchat','tblusers',2334428932768,0,0,NULL,NULL),('TABLE','xchat','tblusers',2334428934848,0,0,NULL,NULL),('TABLE','xchat','tblrooms',2334428939008,0,0,NULL,NULL),('TABLE','xchat','tblroommessages',2334428943168,0,0,NULL,NULL),('TABLE','xchat','tblusers',2334431898432,0,0,NULL,NULL),('TABLE','sakila','customer',2334431916112,0,0,NULL,NULL),('TABLE','sakila','customer',2334431918192,0,0,NULL,NULL),('TABLE','sakila','film_text',2334431923392,0,0,NULL,NULL),('TABLE','sakila','film_text',2334431907792,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334431953552,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334431922352,0,0,NULL,NULL),('TABLE','sakila','address',2334431946272,0,0,NULL,NULL),('TABLE','sakila','address',2334431928592,0,0,NULL,NULL),('TABLE','sakila','rental',2334431945232,0,0,NULL,NULL),('TABLE','sakila','rental',2334431938992,0,0,NULL,NULL),('TABLE','sakila','payment',2334431954592,0,0,NULL,NULL),('TABLE','sakila','payment',2334431949392,0,0,NULL,NULL),('TABLE','sakila','film',2334431985792,0,0,NULL,NULL),('TABLE','sakila','film',2334431936912,0,0,NULL,NULL),('TABLE','sakila','staff',2334431966032,0,0,NULL,NULL),('TABLE','sakila','staff',2334431967072,0,0,NULL,NULL),('TABLE','sakila','category',2334431962912,0,0,NULL,NULL),('TABLE','sakila','category',2334431959792,0,0,NULL,NULL),('TABLE','sakila','city',2334432003472,0,0,NULL,NULL),('TABLE','sakila','city',2334431964992,0,0,NULL,NULL),('TABLE','sakila','language',2334432014912,0,0,NULL,NULL),('TABLE','sakila','language',2334431992032,0,0,NULL,NULL),('TABLE','sakila','country',2334433141296,0,0,NULL,NULL),('TABLE','sakila','country',2334433121536,0,0,NULL,NULL),('TABLE','sakila','actor',2334433119456,0,0,NULL,NULL),('TABLE','sakila','actor',2334433150656,0,0,NULL,NULL),('TABLE','sakila','film_category',2334433134016,0,0,NULL,NULL),('TABLE','sakila','film_category',2334433125696,0,0,NULL,NULL),('TABLE','sakila','inventory',2334433157936,0,0,NULL,NULL),('TABLE','sakila','inventory',2334433138176,0,0,NULL,NULL),('TABLE','sakila','store',2334433170416,0,0,NULL,NULL),('TABLE','sakila','store',2334433151696,0,0,NULL,NULL),('TABLE','sakila','address',2334433137136,0,0,NULL,NULL),('TABLE','sakila','city',2334433175616,0,0,NULL,NULL),('TABLE','sakila','country',2334433165216,0,0,NULL,NULL),('TABLE','sakila','category',2334433147536,0,0,NULL,NULL),('TABLE','sakila','film_category',2334433156896,0,0,NULL,NULL),('TABLE','sakila','film',2334433182896,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334433216176,0,0,NULL,NULL),('TABLE','sakila','actor',2334433200576,0,0,NULL,NULL),('TABLE','sakila','payment',2334433198496,0,0,NULL,NULL),('TABLE','sakila','rental',2334433199536,0,0,NULL,NULL),('TABLE','sakila','inventory',2334433192256,0,0,NULL,NULL),('TABLE','sakila','film',2334433193296,0,0,NULL,NULL),('TABLE','sakila','film_category',2334433203696,0,0,NULL,NULL),('TABLE','sakila','category',2334433208896,0,0,NULL,NULL),('TABLE','sakila','category',2334433212016,0,0,NULL,NULL),('TABLE','sakila','film_category',2334433215136,0,0,NULL,NULL),('TABLE','sakila','film',2334433184976,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334433219296,0,0,NULL,NULL),('TABLE','sakila','actor',2334433220336,0,0,NULL,NULL),('TABLE','sakila','film',2334433241136,0,0,NULL,NULL),('TABLE','sakila','film_category',2334433221376,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334433222416,0,0,NULL,NULL),('TABLE','sakila','actor',2334433223456,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334433240096,0,0,NULL,NULL),('TABLE','sakila','film_category',2334433227616,0,0,NULL,NULL),('TABLE','sakila','category',2334433230736,0,0,NULL,NULL),('TABLE','sakila','staff',2334433236976,0,0,NULL,NULL),('TABLE','sakila','address',2334433242176,0,0,NULL,NULL),('TABLE','sakila','city',2334432005552,0,0,NULL,NULL),('TABLE','sakila','country',2334432016992,0,0,NULL,NULL),('TABLE','sakila','payment',2334432008672,0,0,NULL,NULL),('TABLE','sakila','rental',2334432011792,0,0,NULL,NULL),('TABLE','sakila','inventory',2334435346400,0,0,NULL,NULL),('TABLE','sakila','store',2334435367200,0,0,NULL,NULL),('TABLE','sakila','address',2334435353680,0,0,NULL,NULL),('TABLE','sakila','city',2334435366160,0,0,NULL,NULL),('TABLE','sakila','country',2334435370320,0,0,NULL,NULL),('TABLE','sakila','staff',2334435371360,0,0,NULL,NULL),('TABLE','sakila','address',2334435360960,0,0,NULL,NULL),('TABLE','sakila','city',2334435347440,0,0,NULL,NULL),('TABLE','sakila','country',2334435349520,0,0,NULL,NULL),('TABLE','sakila','category',2334435350560,0,0,NULL,NULL),('TABLE','sakila','film_category',2334435356800,0,0,NULL,NULL),('TABLE','sakila','film',2334435351600,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334435402560,0,0,NULL,NULL),('TABLE','sakila','actor',2334435384880,0,0,NULL,NULL),('TABLE','sakila','payment',2334435355760,0,0,NULL,NULL),('TABLE','sakila','rental',2334435390080,0,0,NULL,NULL),('TABLE','sakila','inventory',2334435393200,0,0,NULL,NULL),('TABLE','sakila','film_actor',2334435401520,0,0,NULL,NULL),('TABLE','sakila','film_category',2334435406720,0,0,NULL,NULL),('TABLE','sakila','staff',2334435386960,0,0,NULL,NULL),('TABLE','sakila','store',2334435292320,0,0,NULL,NULL);
/*!40000 ALTER TABLE `table_handles` ENABLE KEYS */;
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
