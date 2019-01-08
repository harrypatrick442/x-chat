CREATE DATABASE  IF NOT EXISTS `mysql` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mysql`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: mysql
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
-- Table structure for table `help_keyword`
--

DROP TABLE IF EXISTS `help_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `help_keyword` (
  `help_keyword_id` int(10) unsigned NOT NULL,
  `name` char(64) NOT NULL,
  PRIMARY KEY (`help_keyword_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='help keywords';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `help_keyword`
--

LOCK TABLES `help_keyword` WRITE;
/*!40000 ALTER TABLE `help_keyword` DISABLE KEYS */;
INSERT INTO `help_keyword` VALUES (692,'(JSON'),(495,'->'),(209,'->>'),(680,'<>'),(532,'ACCOUNT'),(664,'ACTION'),(469,'ADD'),(341,'AES_DECRYPT'),(641,'AES_ENCRYPT'),(519,'AFTER'),(417,'AGAINST'),(115,'AGGREGATE'),(475,'ALGORITHM'),(227,'ALL'),(278,'ALTER'),(308,'ANALYSE'),(661,'ANALYZE'),(577,'AND'),(166,'ANY_VALUE'),(471,'ARCHIVE'),(552,'AREA'),(505,'AS'),(184,'ASBINARY'),(668,'ASC'),(473,'ASTEXT'),(197,'ASWKB'),(362,'ASWKT'),(5,'AT'),(157,'AUTOCOMMIT'),(50,'AUTOEXTEND_SIZE'),(507,'AUTO_INCREMENT'),(470,'AVG_ROW_LENGTH'),(226,'BEFORE'),(635,'BEGIN'),(565,'BETWEEN'),(439,'BIGINT'),(55,'BINARY'),(575,'BINLOG'),(582,'BOOL'),(74,'BOOLEAN'),(242,'BOTH'),(686,'BTREE'),(298,'BUFFER'),(372,'BY'),(499,'BYTE'),(142,'CACHE'),(570,'CALL'),(195,'CASCADE'),(456,'CASE'),(346,'CATALOG_NAME'),(598,'CEIL'),(642,'CEILING'),(638,'CENTROID'),(211,'CHAIN'),(401,'CHANGE'),(498,'CHANNEL'),(285,'CHAR'),(191,'CHARACTER'),(466,'CHARSET'),(370,'CHECK'),(68,'CHECKSUM'),(457,'CIPHER'),(78,'CLASS_ORIGIN'),(537,'CLIENT'),(42,'CLOSE'),(688,'COALESCE'),(551,'CODE'),(496,'COLLATE'),(684,'COLLATION'),(257,'COLUMN'),(357,'COLUMNS'),(383,'COLUMN_NAME'),(84,'COMMENT'),(488,'COMMIT'),(627,'COMMITTED'),(106,'COMPACT'),(356,'COMPLETION'),(310,'COMPRESSED'),(85,'COMPRESSION'),(584,'CONCURRENT'),(113,'CONDITION'),(41,'CONNECTION'),(588,'CONSISTENT'),(662,'CONSTRAINT'),(480,'CONSTRAINT_CATALOG'),(146,'CONSTRAINT_NAME'),(659,'CONSTRAINT_SCHEMA'),(3,'CONTAINS'),(458,'CONTINUE'),(147,'CONVERT'),(503,'CONVEXHULL'),(423,'COUNT'),(213,'CREATE'),(403,'CREATE_DH_PARAMETERS'),(176,'CROSS'),(208,'CROSSES'),(162,'CSV'),(56,'CURRENT_USER'),(205,'CURSOR'),(513,'CURSOR_NAME'),(376,'DATA'),(332,'DATABASE'),(580,'DATABASES'),(307,'DATAFILE'),(82,'DATE'),(358,'DATETIME'),(249,'DATE_ADD'),(606,'DATE_SUB'),(375,'DAY'),(640,'DAY_HOUR'),(605,'DAY_MINUTE'),(72,'DAY_SECOND'),(454,'DEALLOCATE'),(107,'DEC'),(484,'DECIMAL'),(490,'DECLARE'),(431,'DEFAULT'),(140,'DEFAULT_AUTH'),(526,'DEFINER'),(323,'DELAYED'),(634,'DELAY_KEY_WRITE'),(38,'DELETE'),(547,'DESC'),(214,'DESCRIBE'),(309,'DES_KEY_FILE'),(591,'DIAGNOSTICS'),(628,'DIMENSION'),(340,'DIRECTORY'),(520,'DISABLE'),(216,'DISCARD'),(122,'DISJOINT'),(262,'DISTANCE'),(673,'DISTINCT'),(203,'DISTINCTROW'),(81,'DO'),(365,'DROP'),(172,'DUAL'),(593,'DUMPFILE'),(22,'DUPLICATE'),(148,'DYNAMIC'),(97,'ELSE'),(104,'ELSEIF'),(669,'ENABLE'),(114,'ENCLOSED'),(395,'ENCRYPTION'),(231,'END'),(420,'ENDPOINT'),(558,'ENDS'),(542,'ENGINE'),(70,'ENGINES'),(151,'ENVELOPE'),(633,'EQUALS'),(48,'ERROR'),(624,'ERRORS'),(17,'ESCAPE'),(282,'ESCAPED'),(388,'EVENT'),(18,'EVENTS'),(295,'EVERY'),(564,'EXCHANGE'),(595,'EXECUTE'),(427,'EXISTS'),(317,'EXIT'),(549,'EXPANSION'),(514,'EXPIRE'),(161,'EXPLAIN'),(681,'EXPORT'),(175,'EXTENDED'),(554,'EXTENT_SIZE'),(98,'EXTERIORRING'),(186,'EXTRACTION)'),(397,'FALSE'),(221,'FAST'),(407,'FEDERATED'),(255,'FETCH'),(117,'FIELDS'),(165,'FILE'),(347,'FILE_BLOCK_SIZE'),(631,'FILTER'),(687,'FIRST'),(348,'FIXED'),(472,'FLOAT4'),(234,'FLOAT8'),(516,'FLOOR'),(212,'FLUSH'),(108,'FOR'),(399,'FORCE'),(141,'FOREIGN'),(94,'FORMAT'),(101,'FROM'),(371,'FULL'),(83,'FULLTEXT'),(464,'FUNCTION'),(188,'GENERAL'),(508,'GEOMCOLLFROMTEXT'),(429,'GEOMCOLLFROMWKB'),(413,'GEOMETRYCOLLECTION'),(210,'GEOMETRYCOLLECTIONFROMTEXT'),(364,'GEOMETRYCOLLECTIONFROMWKB'),(139,'GEOMETRYFROMTEXT'),(609,'GEOMETRYFROMWKB'),(138,'GEOMETRYN'),(644,'GEOMETRYTYPE'),(610,'GEOMFROMTEXT'),(99,'GEOMFROMWKB'),(222,'GET'),(342,'GLENGTH'),(500,'GLOBAL'),(134,'GRANT'),(510,'GRANTS'),(177,'GROUP'),(71,'HANDLER'),(153,'HAVING'),(562,'HEAP'),(585,'HELP'),(73,'HELP_DATE'),(127,'HELP_VERSION'),(685,'HIGH_PRIORITY'),(1,'HOST'),(487,'HOSTS'),(578,'HOUR'),(57,'HOUR_MINUTE'),(409,'HOUR_SECOND'),(238,'IDENTIFIED'),(313,'IF'),(390,'IGNORE'),(182,'IGNORE_SERVER_IDS'),(67,'IMPORT'),(590,'IN'),(525,'INDEX'),(485,'INDEXES'),(125,'INFILE'),(665,'INITIAL_SIZE'),(206,'INLINE'),(446,'INNER'),(27,'INNODB'),(422,'INSERT'),(543,'INSERT_METHOD'),(438,'INSTALL'),(492,'INSTANCE'),(275,'INT1'),(557,'INT2'),(467,'INT3'),(34,'INT4'),(296,'INT8'),(360,'INTEGER'),(267,'INTERIORRINGN'),(220,'INTERSECTS'),(287,'INTERVAL'),(61,'INTO'),(455,'IO_THREAD'),(303,'IS'),(21,'ISCLOSED'),(561,'ISEMPTY'),(294,'ISOLATION'),(156,'ISSIMPLE'),(443,'ISSUER'),(80,'ITERATE'),(0,'JOIN'),(597,'JSON'),(676,'JSON_APPEND'),(137,'JSON_ARRAY'),(424,'JSON_ARRAY_APPEND'),(434,'JSON_ARRAY_INSERT'),(468,'JSON_CONTAINS'),(478,'JSON_CONTAINS_PATH'),(651,'JSON_DEPTH'),(75,'JSON_EXTRACT'),(118,'JSON_INSERT'),(453,'JSON_KEYS'),(677,'JSON_LENGTH'),(442,'JSON_MERGE'),(300,'JSON_OBJECT'),(330,'JSON_QUOTE'),(344,'JSON_REMOVE'),(592,'JSON_REPLACE'),(39,'JSON_SEARCH'),(535,'JSON_SET'),(88,'JSON_TYPE'),(119,'JSON_UNQUOTE'),(250,'JSON_VALID'),(656,'KEY'),(654,'KEYS'),(283,'KEY_BLOCK_SIZE'),(121,'KILL'),(652,'LAST'),(145,'LEADING'),(198,'LEAVE'),(103,'LEFT'),(54,'LEVEL'),(252,'LIKE'),(655,'LIMIT'),(385,'LINEFROMTEXT'),(643,'LINEFROMWKB'),(264,'LINES'),(380,'LINESTRING'),(302,'LINESTRINGFROMTEXT'),(501,'LINESTRINGFROMWKB'),(493,'LOAD'),(674,'LOCAL'),(32,'LOCK'),(553,'LOGFILE'),(559,'LOGS'),(93,'LONG'),(421,'LONGBINARY'),(224,'LOOP'),(164,'LOW_PRIORITY'),(690,'MASTER'),(183,'MASTER_AUTO_POSITION'),(527,'MASTER_BIND'),(87,'MASTER_CONNECT_RETRY'),(382,'MASTER_HEARTBEAT_PERIOD'),(600,'MASTER_HOST'),(89,'MASTER_LOG_FILE'),(202,'MASTER_LOG_POS'),(538,'MASTER_PASSWORD'),(583,'MASTER_PORT'),(368,'MASTER_RETRY_COUNT'),(248,'MASTER_SSL'),(9,'MASTER_SSL_CA'),(603,'MASTER_SSL_CERT'),(240,'MASTER_SSL_CIPHER'),(129,'MASTER_SSL_CRL'),(43,'MASTER_SSL_CRLPATH'),(675,'MASTER_SSL_KEY'),(363,'MASTER_SSL_VERIFY_SERVER_CERT'),(8,'MASTER_TLS_VERSION'),(540,'MASTER_USER'),(201,'MATCH'),(589,'MAX_CONNECTIONS_PER_HOUR'),(270,'MAX_QUERIES_PER_HOUR'),(277,'MAX_ROWS'),(408,'MAX_SIZE'),(556,'MAX_UPDATES_PER_HOUR'),(671,'MAX_USER_CONNECTIONS'),(236,'MBRCONTAINS'),(569,'MBRDISJOINT'),(126,'MBREQUAL'),(135,'MBRINTERSECTS'),(187,'MBROVERLAPS'),(541,'MBRTOUCHES'),(256,'MBRWITHIN'),(637,'MEDIUM'),(259,'MEMORY'),(319,'MERGE'),(381,'MESSAGE_TEXT'),(133,'MIDDLEINT'),(36,'MINUTE'),(460,'MINUTE_SECOND'),(462,'MIN_ROWS'),(426,'MLINEFROMTEXT'),(170,'MLINEFROMWKB'),(76,'MOD'),(359,'MODE'),(200,'MODIFY'),(19,'MONTH'),(284,'MPOINTFROMTEXT'),(653,'MPOINTFROMWKB'),(482,'MPOLYFROMTEXT'),(79,'MPOLYFROMWKB'),(449,'MRG_MYISAM'),(280,'MULTILINESTRING'),(219,'MULTILINESTRINGFROMTEXT'),(529,'MULTILINESTRINGFROMWKB'),(254,'MULTIPOINT'),(174,'MULTIPOINTFROMTEXT'),(173,'MULTIPOINTFROMWKB'),(102,'MULTIPOLYGON'),(350,'MULTIPOLYGONFROMTEXT'),(604,'MULTIPOLYGONFROMWKB'),(428,'MUTEX'),(546,'MYISAM'),(143,'MYSQL_ERRNO'),(288,'NAME'),(274,'NAMES'),(178,'NATIONAL'),(279,'NATURAL'),(10,'NCHAR'),(33,'NDB'),(52,'NDBCLUSTER'),(331,'NEVER'),(623,'NEXT'),(374,'NO'),(167,'NODEGROUP'),(678,'NONE'),(305,'NOT'),(433,'NO_WRITE_TO_BINLOG'),(333,'NULL'),(116,'NUMBER'),(550,'NUMERIC'),(474,'NUMGEOMETRIES'),(268,'NUMINTERIORRINGS'),(491,'NUMPOINTS'),(338,'NVARCHAR'),(622,'OFFSET'),(40,'ON'),(11,'ONLY'),(15,'OPEN'),(435,'OPTIMIZE'),(411,'OPTIMIZER_COSTS'),(95,'OPTION'),(670,'OPTIONALLY'),(587,'OPTIONS'),(237,'OR'),(128,'ORDER'),(512,'OUTER'),(163,'OUTFILE'),(124,'OVERLAPS'),(189,'OWNER'),(218,'PACK_KEYS'),(612,'PARSER'),(230,'PARTIAL'),(377,'PARTITION'),(312,'PARTITIONING'),(451,'PARTITIONS'),(621,'PASSWORD'),(120,'PATH)'),(253,'PLUGIN'),(647,'PLUGINS'),(265,'PLUGIN_DIR'),(402,'POINT'),(239,'POINTFROMTEXT'),(335,'POINTFROMWKB'),(181,'POINTN'),(594,'POLYFROMTEXT'),(62,'POLYFROMWKB'),(35,'POLYGON'),(150,'POLYGONFROMTEXT'),(398,'POLYGONFROMWKB'),(425,'PORT'),(524,'POW'),(334,'POWER'),(90,'PRECISION'),(31,'PREPARE'),(59,'PRESERVE'),(235,'PREV'),(650,'PRIMARY'),(45,'PRIVILEGES'),(416,'PROCEDURE'),(586,'PROCESS'),(215,'PROCESSLIST'),(636,'PROFILE'),(20,'PROFILES'),(324,'PROXY'),(315,'PURGE'),(261,'QUERY'),(393,'QUICK'),(160,'RANDOM_BYTES'),(459,'READ'),(378,'REAL'),(608,'REBUILD'),(560,'RECOVER'),(228,'REDUNDANT'),(290,'REFERENCES'),(327,'RELAY'),(447,'RELAYLOG'),(539,'RELAY_LOG_FILE'),(196,'RELAY_LOG_POS'),(430,'RELEASE'),(155,'RELOAD'),(528,'REMOVE'),(611,'RENAME'),(96,'REORGANIZE'),(567,'REPAIR'),(351,'REPEAT'),(477,'REPEATABLE'),(352,'REPLACE'),(511,'REPLICATE_DO_DB'),(306,'REPLICATE_DO_TABLE'),(269,'REPLICATE_IGNORE_DB'),(607,'REPLICATE_IGNORE_TABLE'),(28,'REPLICATE_REWRITE_DB'),(132,'REPLICATE_WILD_DO_TABLE'),(223,'REPLICATE_WILD_IGNORE_TABLE'),(24,'REPLICATION'),(91,'REQUIRE'),(437,'RESET'),(246,'RESIGNAL'),(299,'RESTRICT'),(339,'RETURN'),(563,'RETURNED_SQLSTATE'),(7,'RETURNS'),(159,'REVOKE'),(276,'RIGHT'),(682,'RLIKE'),(65,'ROLLBACK'),(314,'ROWS'),(463,'ROW_COUNT'),(691,'ROW_FORMAT'),(648,'SAVEPOINT'),(6,'SCHEDULE'),(168,'SCHEMA'),(144,'SCHEMAS'),(192,'SCHEMA_NAME'),(233,'SECOND'),(49,'SECURITY'),(579,'SELECT'),(37,'SEPARATOR'),(663,'SERIAL'),(2,'SERIALIZABLE'),(602,'SERVER'),(666,'SESSION'),(441,'SET'),(180,'SHA'),(620,'SHA1'),(391,'SHA2'),(379,'SHARE'),(574,'SHOW'),(343,'SHUTDOWN'),(646,'SIGNAL'),(394,'SIGNED'),(667,'SLAVE'),(405,'SLOW'),(489,'SNAPSHOT'),(614,'SOCKET'),(523,'SONAME'),(217,'SOUNDS'),(46,'SPATIAL'),(436,'SQLSTATE'),(63,'SQL_AFTER_GTIDS'),(515,'SQL_AFTER_MTS_GAPS'),(419,'SQL_BEFORE_GTIDS'),(366,'SQL_BIG_RESULT'),(47,'SQL_BUFFER_RESULT'),(494,'SQL_CACHE'),(544,'SQL_CALC_FOUND_ROWS'),(625,'SQL_LOG_BIN'),(321,'SQL_NO_CACHE'),(241,'SQL_SLAVE_SKIP_COUNTER'),(629,'SQL_SMALL_RESULT'),(266,'SQL_THREAD'),(4,'SRID'),(639,'SSL'),(311,'START'),(154,'STARTING'),(481,'STARTPOINT'),(354,'STARTS'),(100,'STATS_AUTO_RECALC'),(26,'STATS_PERSISTENT'),(645,'STATS_SAMPLE_PAGES'),(445,'STATUS'),(518,'STD'),(273,'STDDEV'),(448,'STOP'),(293,'STORAGE'),(392,'STORED'),(617,'STRAIGHT_JOIN'),(112,'STRING'),(418,'ST_AREA'),(415,'ST_ASBINARY'),(345,'ST_ASGEOJSON'),(86,'ST_ASTEXT'),(613,'ST_ASWKB'),(92,'ST_ASWKT'),(297,'ST_BUFFER'),(349,'ST_BUFFER_STRATEGY'),(304,'ST_CENTROID'),(232,'ST_CONTAINS'),(522,'ST_CONVEXHULL'),(566,'ST_CROSSES'),(410,'ST_DIFFERENCE'),(440,'ST_DIMENSION'),(576,'ST_DISJOINT'),(320,'ST_DISTANCE'),(325,'ST_DISTANCE_SPHERE'),(531,'ST_ENDPOINT'),(251,'ST_ENVELOPE'),(601,'ST_EQUALS'),(660,'ST_EXTERIORRING'),(199,'ST_GEOHASH'),(396,'ST_GEOMCOLLFROMTEXT'),(13,'ST_GEOMCOLLFROMWKB'),(414,'ST_GEOMETRYCOLLECTIONFROMTEXT'),(618,'ST_GEOMETRYCOLLECTIONFROMWKB'),(497,'ST_GEOMETRYFROMTEXT'),(465,'ST_GEOMETRYFROMWKB'),(12,'ST_GEOMETRYN'),(77,'ST_GEOMETRYTYPE'),(616,'ST_GEOMFROMGEOJSON'),(130,'ST_GEOMFROMTEXT'),(619,'ST_GEOMFROMWKB'),(509,'ST_INTERIORRINGN'),(486,'ST_INTERSECTION'),(16,'ST_INTERSECTS'),(105,'ST_ISCLOSED'),(152,'ST_ISEMPTY'),(179,'ST_ISSIMPLE'),(149,'ST_ISVALID'),(615,'ST_LATFROMGEOHASH'),(555,'ST_LINEFROMTEXT'),(194,'ST_LINEFROMWKB'),(506,'ST_LINESTRINGFROMTEXT'),(111,'ST_LINESTRINGFROMWKB'),(110,'ST_LONGFROMGEOHASH'),(291,'ST_MAKEENVELOPE'),(658,'ST_MLINEFROMTEXT'),(185,'ST_MLINEFROMWKB'),(444,'ST_MPOINTFROMTEXT'),(479,'ST_MPOINTFROMWKB'),(568,'ST_MPOLYFROMTEXT'),(136,'ST_MPOLYFROMWKB'),(318,'ST_MULTILINESTRINGFROMTEXT'),(599,'ST_MULTILINESTRINGFROMWKB'),(461,'ST_MULTIPOINTFROMTEXT'),(260,'ST_MULTIPOINTFROMWKB'),(322,'ST_MULTIPOLYGONFROMTEXT'),(630,'ST_MULTIPOLYGONFROMWKB'),(649,'ST_NUMGEOMETRIES'),(355,'ST_NUMINTERIORRING'),(452,'ST_NUMINTERIORRINGS'),(247,'ST_NUMPOINTS'),(533,'ST_OVERLAPS'),(373,'ST_POINTFROMGEOHASH'),(530,'ST_POINTFROMTEXT'),(289,'ST_POINTFROMWKB'),(23,'ST_POINTN'),(271,'ST_POLYFROMTEXT'),(326,'ST_POLYFROMWKB'),(171,'ST_POLYGONFROMTEXT'),(53,'ST_POLYGONFROMWKB'),(60,'ST_SIMPLIFY'),(596,'ST_SRID'),(51,'ST_STARTPOINT'),(353,'ST_SYMDIFFERENCE'),(169,'ST_TOUCHES'),(207,'ST_UNION'),(369,'ST_VALIDATE'),(292,'ST_WITHIN'),(572,'ST_X'),(158,'ST_Y'),(386,'SUBCLASS_ORIGIN'),(367,'SUBJECT'),(389,'SUPER'),(193,'TABLE'),(679,'TABLES'),(123,'TABLESPACE'),(404,'TABLE_NAME'),(626,'TEMPORARY'),(337,'TERMINATED'),(69,'THEN'),(548,'TIME'),(66,'TIMESTAMP'),(400,'TO'),(504,'TOUCHES'),(412,'TRADITIONAL'),(450,'TRAILING'),(272,'TRANSACTION'),(683,'TRIGGER'),(245,'TRIGGERS'),(190,'TRUE'),(573,'TRUNCATE'),(432,'TYPE'),(301,'UNCOMMITTED'),(534,'UNDO'),(521,'UNINSTALL'),(545,'UNION'),(244,'UNIQUE'),(25,'UNLOCK'),(483,'UNSIGNED'),(657,'UNTIL'),(58,'UPDATE'),(286,'UPGRADE'),(258,'USAGE'),(44,'USE'),(316,'USER'),(229,'USER_RESOURCES'),(336,'USE_FRM'),(131,'USING'),(361,'VALUE'),(571,'VALUES'),(225,'VARCHARACTER'),(64,'VARIABLE'),(281,'VARIABLES'),(406,'VARYING'),(476,'VIEW'),(329,'VIRTUAL'),(689,'WAIT'),(109,'WARNINGS'),(502,'WHEN'),(387,'WHERE'),(672,'WHILE'),(517,'WITH'),(30,'WITHIN'),(14,'WORK'),(581,'WRAPPER'),(328,'WRITE'),(204,'X'),(384,'X509'),(632,'XA'),(263,'Y'),(243,'YEAR'),(29,'YEAR_MONTH'),(536,'ZEROFILL');
/*!40000 ALTER TABLE `help_keyword` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:48
