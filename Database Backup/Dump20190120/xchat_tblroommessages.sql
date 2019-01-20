CREATE DATABASE  IF NOT EXISTS `xchat` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `xchat`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: xchat
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
) ENGINE=InnoDB AUTO_INCREMENT=1049 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblroommessages`
--

LOCK TABLES `tblroommessages` WRITE;
/*!40000 ALTER TABLE `tblroommessages` DISABLE KEYS */;
INSERT INTO `tblroommessages` VALUES (1015,29,1234,'ddfdfdfdf',2),(1016,29,1234,'ddfdfdfdf',2),(1017,29,1234,'ddfdfdfdf',2),(1018,29,1234,'ddfdfdfdf',2),(1019,30,1531,'dfdffd',NULL),(1020,30,1531,'ddffddfdfdf',NULL),(1021,30,1531,'dffdfddffds',NULL),(1022,31,1533,'fdsdfsdfssdf',NULL),(1023,32,1534,'ddffdfddf',NULL),(1024,33,1535,'wererwewrrweerw',NULL),(1025,33,1535,'dfdfdf',NULL),(1026,1,1536,'dfdfdfdfd',3),(1027,34,1536,'dffddfdfdf',NULL),(1028,35,1537,'dfdffddfs',NULL),(1029,36,1539,'fdsfddfdfs',NULL),(1030,37,1542,'dsffddfsfds',NULL),(1031,37,1542,'fddfsd',NULL),(1032,38,1544,'erwerwrewrewew',NULL),(1033,39,1545,'dfsfddfsdfssd',NULL),(1034,39,1545,'dfdfdffddfd',NULL),(1035,40,1547,'dfdffdfddf',NULL),(1036,41,1548,'fdsfdsdfsfdsfdsds',NULL),(1037,42,1549,'sdfdsfdfsdsfdsf',NULL),(1038,43,1550,'fdsfdsdsfdfds',NULL),(1039,44,1551,'sdfdsfffsdfds',NULL),(1040,45,1553,'dsffsddsfdsf',NULL),(1041,46,1554,'dsffdsfdfsdfsdfs',NULL),(1042,47,1556,'dfdffddfdf',NULL),(1043,48,1557,'dfdffddfdf',NULL),(1044,49,1560,'fddffddffd',NULL),(1045,50,1562,'fddffddffd',NULL),(1046,51,1563,'dfdfdffd',NULL),(1047,51,1563,'dffddffddf',NULL),(1048,52,1569,'dsfsdffdsdsfds',NULL);
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

-- Dump completed on 2019-01-20  4:50:58
