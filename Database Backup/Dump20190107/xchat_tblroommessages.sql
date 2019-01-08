CREATE DATABASE  IF NOT EXISTS `xchat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `xchat`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: xchat
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
-- Table structure for table `tblroommessages`
--

DROP TABLE IF EXISTS `tblroommessages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblroommessages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `serverAssignedNMessage` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblroommessages`
--

LOCK TABLES `tblroommessages` WRITE;
/*!40000 ALTER TABLE `tblroommessages` DISABLE KEYS */;
INSERT INTO `tblroommessages` VALUES (1,1,0,'test',1),(2,1,361,'{\"userId\":361,\"content\":\"sdffdsfsfds\"}',2),(3,1,363,'DASFFADSDFADFS',3),(4,1,370,'sdffdssdf',4),(5,1,371,'ewrewrdfsfds',5),(6,1,394,'dsafdfasdfasfdsa',6),(7,1,404,'sadasffds',7),(8,1,404,'fdsdsfdsfdsff',8),(9,1,406,'sdfdsff',9),(10,1,406,'sgddf',10),(11,1,406,'dgdsdfds',11),(12,1,407,'dsfdsfdfds',12),(13,1,407,'ewrew',13),(14,1,407,'cxvv',14),(15,1,407,'saddsa',15),(16,1,409,'fdafdfddsfa',16),(17,1,410,'fdsfdfadf',17),(18,1,410,'dd',18),(19,1,411,'dfdsfdfs',19),(20,1,412,'ddffds',20),(21,1,412,'dfadsffddfdfdf',21),(22,1,414,'dfsdsfdsf',22),(23,1,414,'dfsdsdsfdsf',23),(24,1,420,'ewrerwdfsfds',24),(25,1,420,'dfsdfs',25),(26,1,420,'dfdf',26),(27,1,420,'dsf',27),(28,1,420,'dfsdfs',28),(29,1,422,'fddsf',29),(30,1,423,'dfdffdfd',30),(31,1,423,'??',31),(32,1,426,'dfsdfs',32),(33,1,429,'dsffd',33),(34,1,433,'werewrdfsddfs',34),(35,1,435,'ewrewrewdfsfds',35),(36,1,437,'ewrewrdfdfdfs',36),(37,1,437,'?',37),(38,1,437,'??',38),(39,1,437,'?',39);
/*!40000 ALTER TABLE `tblroommessages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:19:10
