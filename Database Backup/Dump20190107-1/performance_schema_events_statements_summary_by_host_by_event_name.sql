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
-- Table structure for table `events_statements_summary_by_host_by_event_name`
--

DROP TABLE IF EXISTS `events_statements_summary_by_host_by_event_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events_statements_summary_by_host_by_event_name` (
  `HOST` char(60) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `EVENT_NAME` varchar(128) NOT NULL,
  `COUNT_STAR` bigint(20) unsigned NOT NULL,
  `SUM_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `MIN_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `AVG_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `MAX_TIMER_WAIT` bigint(20) unsigned NOT NULL,
  `SUM_LOCK_TIME` bigint(20) unsigned NOT NULL,
  `SUM_ERRORS` bigint(20) unsigned NOT NULL,
  `SUM_WARNINGS` bigint(20) unsigned NOT NULL,
  `SUM_ROWS_AFFECTED` bigint(20) unsigned NOT NULL,
  `SUM_ROWS_SENT` bigint(20) unsigned NOT NULL,
  `SUM_ROWS_EXAMINED` bigint(20) unsigned NOT NULL,
  `SUM_CREATED_TMP_DISK_TABLES` bigint(20) unsigned NOT NULL,
  `SUM_CREATED_TMP_TABLES` bigint(20) unsigned NOT NULL,
  `SUM_SELECT_FULL_JOIN` bigint(20) unsigned NOT NULL,
  `SUM_SELECT_FULL_RANGE_JOIN` bigint(20) unsigned NOT NULL,
  `SUM_SELECT_RANGE` bigint(20) unsigned NOT NULL,
  `SUM_SELECT_RANGE_CHECK` bigint(20) unsigned NOT NULL,
  `SUM_SELECT_SCAN` bigint(20) unsigned NOT NULL,
  `SUM_SORT_MERGE_PASSES` bigint(20) unsigned NOT NULL,
  `SUM_SORT_RANGE` bigint(20) unsigned NOT NULL,
  `SUM_SORT_ROWS` bigint(20) unsigned NOT NULL,
  `SUM_SORT_SCAN` bigint(20) unsigned NOT NULL,
  `SUM_NO_INDEX_USED` bigint(20) unsigned NOT NULL,
  `SUM_NO_GOOD_INDEX_USED` bigint(20) unsigned NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events_statements_summary_by_host_by_event_name`
--

LOCK TABLES `events_statements_summary_by_host_by_event_name` WRITE;
/*!40000 ALTER TABLE `events_statements_summary_by_host_by_event_name` DISABLE KEYS */;
INSERT INTO `events_statements_summary_by_host_by_event_name` VALUES (NULL,'statement/sql/select',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_index',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/update',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/insert',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/insert_select',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/delete',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/truncate',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_index',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_databases',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_tables',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_fields',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_keys',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_variables',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_engine_logs',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_engine_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_engine_mutex',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_processlist',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_master_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_slave_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_grants',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_create_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_charsets',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_collations',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_create_db',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_table_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_triggers',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/load',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/set_option',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/lock_tables',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/unlock_tables',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/grant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/change_db',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_db',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_db',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_db',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/repair',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/replace',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/replace_select',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_udf',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_function',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/revoke',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/optimize',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/check',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/assign_to_keycache',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/preload_keys',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/flush',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/kill',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/analyze',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/rollback',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/rollback_to_savepoint',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/commit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/savepoint',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/release_savepoint',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/slave_start',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/slave_stop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/group_replication_start',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/group_replication_stop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/begin',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/change_master',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/change_repl_filter',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/rename_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/reset',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/purge',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/purge_before_date',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_binlogs',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_open_tables',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/ha_open',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/ha_close',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/ha_read',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_slave_hosts',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/delete_multi',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/update_multi',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_binlog_events',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/do',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_warnings',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/empty_query',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_errors',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_storage_engines',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_privileges',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/help',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/rename_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/revoke_all',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/checksum',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_procedure',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_function',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/call_procedure',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_procedure',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_procedure',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_function',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_create_proc',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_create_func',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_procedure_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_function_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/prepare_sql',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/execute_sql',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/dealloc_sql',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_view',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_view',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_trigger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_trigger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/xa_start',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/xa_end',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/xa_prepare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/xa_commit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/xa_rollback',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/xa_recover',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_procedure_code',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_function_code',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_tablespace',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/install_plugin',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/uninstall_plugin',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/binlog',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_plugins',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_server',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_server',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_server',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/create_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/drop_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_create_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_events',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_create_trigger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_db_upgrade',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_profile',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_profiles',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/signal',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/resignal',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_relaylog_events',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/get_diagnostics',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/explain_other',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/show_create_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/shutdown',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/alter_instance',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sql/error',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/stmt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/set',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/set_trigger_field',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/jump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/jump_if_not',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/freturn',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/hpush_jump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/hpop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/hreturn',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/cpush',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/cpop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/copen',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/cclose',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/cfetch',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/error',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/sp/set_case_expr',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/scheduler/event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Sleep',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Quit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Init DB',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Field List',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Create DB',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Drop DB',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Refresh',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Shutdown',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Statistics',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Processlist',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Connect',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Kill',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Debug',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Ping',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Time',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Delayed insert',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Change user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Binlog Dump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Table Dump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Connect Out',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Register Slave',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Prepare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Execute',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Long Data',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Close stmt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Reset stmt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Set option',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Fetch',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Daemon',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Binlog Dump GTID',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Reset Connection',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(NULL,'statement/com/Error',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/select',1256,2353163277740,61133236,1873265144,60838725520,318493000000,0,310,0,153250,186415,641,2191,930,0,0,0,929,0,0,0,620,925,0),('localhost','statement/sql/create_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_index',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_table',10,62017213668,4460495088,6201676744,10571587548,33402000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/update',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/insert',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/insert_select',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/delete',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/truncate',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_index',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_databases',1,1687634296,1687634296,1687634296,1687634296,99000000,0,0,0,9,9,0,1,0,0,0,0,1,0,0,0,0,1,0),('localhost','statement/sql/show_tables',336,850234352868,399820288,2530112760,77339344504,29185000000,0,0,0,692,692,0,336,0,0,0,0,336,0,0,0,0,336,0),('localhost','statement/sql/show_fields',357,211887349748,339579508,593483240,1826857432,53185000000,0,0,0,3828,3828,357,378,0,0,0,0,357,0,0,0,0,357,0),('localhost','statement/sql/show_keys',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_variables',636,1684737383824,1447563632,2648809408,6683602984,76457000000,0,0,0,852,647448,0,636,0,0,0,0,1272,0,0,0,0,636,0),('localhost','statement/sql/show_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_engine_logs',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_engine_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_engine_mutex',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_processlist',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_master_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_slave_status',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_grants',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_create_table',343,50951651724,64256832,148147696,681836384,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_charsets',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_collations',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_create_db',6,1377952064,203033740,229361192,267736800,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_table_status',357,962202775084,960728884,2695217120,11841552436,18410000000,0,0,0,357,357,0,378,0,0,0,0,357,0,0,0,0,357,0),('localhost','statement/sql/show_triggers',300,765748666944,627842796,2552424160,12770152904,55889000000,0,0,0,16,16,300,300,0,0,0,0,300,0,0,0,0,300,0),('localhost','statement/sql/load',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/set_option',2344,205107807744,47300168,87460688,375277748,0,0,310,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/lock_tables',132,135378435552,59794552,1025431944,62159114172,127991000000,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/unlock_tables',316,17596554952,36590696,55332272,193216724,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/grant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/change_db',313,47760675296,98170160,152163748,379740028,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_db',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_db',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_db',2,829984080,411422216,414992040,418561864,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/repair',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/replace',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/replace_select',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_udf',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_function',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/revoke',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/optimize',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/check',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/assign_to_keycache',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/preload_keys',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/flush',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/kill',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/analyze',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/rollback',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/rollback_to_savepoint',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/commit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/savepoint',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/release_savepoint',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/slave_start',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/slave_stop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/group_replication_start',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/group_replication_stop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/begin',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/change_master',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/change_repl_filter',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/rename_table',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/reset',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/purge',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/purge_before_date',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_binlogs',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_open_tables',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/ha_open',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/ha_close',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/ha_read',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_slave_hosts',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/delete_multi',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/update_multi',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_binlog_events',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/do',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_warnings',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/empty_query',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_errors',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_storage_engines',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_privileges',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/help',32,40345704620,132529716,1260594100,12599693808,21960000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/rename_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/revoke_all',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/checksum',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_procedure',4,1543056424,272645308,385540992,515393340,883000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_function',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/call_procedure',15,62638363044,516285796,4175801624,15144532092,4087000000,1,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_procedure',4,3072279780,328870036,767958388,1879958564,2808000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_procedure',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_function',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_create_proc',26,7969185852,91030512,306112408,728244096,1393000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_create_func',6,1637210532,185630848,272645308,445335544,198000000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_procedure_status',5,17678660904,2979910584,3535464444,4519843412,1883000000,0,0,0,12,175,5,5,0,0,0,0,5,0,0,0,0,5,0),('localhost','statement/sql/show_function_status',5,21194491316,2919223576,4238719772,6849599800,3298000000,0,0,0,6,125,5,5,0,0,0,0,5,0,0,0,0,5,0),('localhost','statement/sql/prepare_sql',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/execute_sql',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/dealloc_sql',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_view',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_view',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_trigger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_trigger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/xa_start',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/xa_end',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/xa_prepare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/xa_commit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/xa_rollback',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/xa_recover',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_procedure_code',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_function_code',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_tablespace',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/install_plugin',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/uninstall_plugin',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/binlog',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_plugins',1,792054700,792054700,792054700,792054700,341000000,0,0,0,44,44,1,1,0,0,0,0,1,0,0,0,0,1,0),('localhost','statement/sql/create_server',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_server',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_server',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/create_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/drop_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_create_event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_events',5,3617124168,315483196,723335588,1298077252,2665000000,0,0,0,0,0,5,5,0,0,0,0,5,0,0,0,0,5,0),('localhost','statement/sql/show_create_trigger',16,6965172852,299418988,435072300,778221632,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_db_upgrade',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_profile',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_profiles',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/signal',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/resignal',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_relaylog_events',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/get_diagnostics',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/explain_other',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/show_create_user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/shutdown',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/alter_instance',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sql/error',1,145024100,145024100,145024100,145024100,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/stmt',23,52261777132,12048156,2272192976,13237353620,52501000000,0,0,7,76,1451,0,0,0,0,0,0,7,0,0,0,0,5,0),('localhost','statement/sp/set',6,54439816,3569824,8924560,17402892,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/set_trigger_field',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/jump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/jump_if_not',3,33020872,7139648,10709472,17849120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/freturn',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/hpush_jump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/hpop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/hreturn',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/cpush',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/cpop',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/copen',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/cclose',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/cfetch',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/error',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/sp/set_case_expr',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/scheduler/event',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Sleep',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Quit',309,3400703588,7585876,10709472,21865172,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Init DB',310,53089083844,136545768,170905324,451136508,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Field List',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Create DB',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Drop DB',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Refresh',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Shutdown',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Statistics',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Processlist',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Connect',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Kill',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Debug',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Ping',82,5087891656,34805784,62025692,116911736,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Time',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Delayed insert',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Change user',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Binlog Dump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Table Dump',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Connect Out',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Register Slave',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Prepare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Execute',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Long Data',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Close stmt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Reset stmt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Set option',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Fetch',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Daemon',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Binlog Dump GTID',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Reset Connection',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('localhost','statement/com/Error',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `events_statements_summary_by_host_by_event_name` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:37
