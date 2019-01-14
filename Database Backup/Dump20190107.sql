CREATE DATABASE  IF NOT EXISTS `sys` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `sys`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: sys
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
-- Temporary table structure for view `host_summary`
--

DROP TABLE IF EXISTS `host_summary`;
/*!50001 DROP VIEW IF EXISTS `host_summary`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `host_summary` (
  `host` tinyint NOT NULL,
  `statements` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `statement_avg_latency` tinyint NOT NULL,
  `table_scans` tinyint NOT NULL,
  `file_ios` tinyint NOT NULL,
  `file_io_latency` tinyint NOT NULL,
  `current_connections` tinyint NOT NULL,
  `total_connections` tinyint NOT NULL,
  `unique_users` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `total_memory_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `host_summary_by_file_io`
--

DROP TABLE IF EXISTS `host_summary_by_file_io`;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_file_io`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `host_summary_by_file_io` (
  `host` tinyint NOT NULL,
  `ios` tinyint NOT NULL,
  `io_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `host_summary_by_file_io_type`
--

DROP TABLE IF EXISTS `host_summary_by_file_io_type`;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_file_io_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `host_summary_by_file_io_type` (
  `host` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `host_summary_by_stages`
--

DROP TABLE IF EXISTS `host_summary_by_stages`;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_stages`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `host_summary_by_stages` (
  `host` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `host_summary_by_statement_latency`
--

DROP TABLE IF EXISTS `host_summary_by_statement_latency`;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_statement_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `host_summary_by_statement_latency` (
  `host` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `host_summary_by_statement_type`
--

DROP TABLE IF EXISTS `host_summary_by_statement_type`;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_statement_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `host_summary_by_statement_type` (
  `host` tinyint NOT NULL,
  `statement` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `innodb_buffer_stats_by_schema`
--

DROP TABLE IF EXISTS `innodb_buffer_stats_by_schema`;
/*!50001 DROP VIEW IF EXISTS `innodb_buffer_stats_by_schema`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `innodb_buffer_stats_by_schema` (
  `object_schema` tinyint NOT NULL,
  `allocated` tinyint NOT NULL,
  `data` tinyint NOT NULL,
  `pages` tinyint NOT NULL,
  `pages_hashed` tinyint NOT NULL,
  `pages_old` tinyint NOT NULL,
  `rows_cached` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `innodb_buffer_stats_by_table`
--

DROP TABLE IF EXISTS `innodb_buffer_stats_by_table`;
/*!50001 DROP VIEW IF EXISTS `innodb_buffer_stats_by_table`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `innodb_buffer_stats_by_table` (
  `object_schema` tinyint NOT NULL,
  `object_name` tinyint NOT NULL,
  `allocated` tinyint NOT NULL,
  `data` tinyint NOT NULL,
  `pages` tinyint NOT NULL,
  `pages_hashed` tinyint NOT NULL,
  `pages_old` tinyint NOT NULL,
  `rows_cached` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `innodb_lock_waits`
--

DROP TABLE IF EXISTS `innodb_lock_waits`;
/*!50001 DROP VIEW IF EXISTS `innodb_lock_waits`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `innodb_lock_waits` (
  `wait_started` tinyint NOT NULL,
  `wait_age` tinyint NOT NULL,
  `wait_age_secs` tinyint NOT NULL,
  `locked_table` tinyint NOT NULL,
  `locked_index` tinyint NOT NULL,
  `locked_type` tinyint NOT NULL,
  `waiting_trx_id` tinyint NOT NULL,
  `waiting_trx_started` tinyint NOT NULL,
  `waiting_trx_age` tinyint NOT NULL,
  `waiting_trx_rows_locked` tinyint NOT NULL,
  `waiting_trx_rows_modified` tinyint NOT NULL,
  `waiting_pid` tinyint NOT NULL,
  `waiting_query` tinyint NOT NULL,
  `waiting_lock_id` tinyint NOT NULL,
  `waiting_lock_mode` tinyint NOT NULL,
  `blocking_trx_id` tinyint NOT NULL,
  `blocking_pid` tinyint NOT NULL,
  `blocking_query` tinyint NOT NULL,
  `blocking_lock_id` tinyint NOT NULL,
  `blocking_lock_mode` tinyint NOT NULL,
  `blocking_trx_started` tinyint NOT NULL,
  `blocking_trx_age` tinyint NOT NULL,
  `blocking_trx_rows_locked` tinyint NOT NULL,
  `blocking_trx_rows_modified` tinyint NOT NULL,
  `sql_kill_blocking_query` tinyint NOT NULL,
  `sql_kill_blocking_connection` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `io_by_thread_by_latency`
--

DROP TABLE IF EXISTS `io_by_thread_by_latency`;
/*!50001 DROP VIEW IF EXISTS `io_by_thread_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `io_by_thread_by_latency` (
  `user` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `thread_id` tinyint NOT NULL,
  `processlist_id` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `io_global_by_file_by_bytes`
--

DROP TABLE IF EXISTS `io_global_by_file_by_bytes`;
/*!50001 DROP VIEW IF EXISTS `io_global_by_file_by_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `io_global_by_file_by_bytes` (
  `file` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `total_read` tinyint NOT NULL,
  `avg_read` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `total_written` tinyint NOT NULL,
  `avg_write` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `write_pct` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `io_global_by_file_by_latency`
--

DROP TABLE IF EXISTS `io_global_by_file_by_latency`;
/*!50001 DROP VIEW IF EXISTS `io_global_by_file_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `io_global_by_file_by_latency` (
  `file` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `read_latency` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `write_latency` tinyint NOT NULL,
  `count_misc` tinyint NOT NULL,
  `misc_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `io_global_by_wait_by_bytes`
--

DROP TABLE IF EXISTS `io_global_by_wait_by_bytes`;
/*!50001 DROP VIEW IF EXISTS `io_global_by_wait_by_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `io_global_by_wait_by_bytes` (
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `total_read` tinyint NOT NULL,
  `avg_read` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `total_written` tinyint NOT NULL,
  `avg_written` tinyint NOT NULL,
  `total_requested` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `io_global_by_wait_by_latency`
--

DROP TABLE IF EXISTS `io_global_by_wait_by_latency`;
/*!50001 DROP VIEW IF EXISTS `io_global_by_wait_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `io_global_by_wait_by_latency` (
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `read_latency` tinyint NOT NULL,
  `write_latency` tinyint NOT NULL,
  `misc_latency` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `total_read` tinyint NOT NULL,
  `avg_read` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `total_written` tinyint NOT NULL,
  `avg_written` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `latest_file_io`
--

DROP TABLE IF EXISTS `latest_file_io`;
/*!50001 DROP VIEW IF EXISTS `latest_file_io`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `latest_file_io` (
  `thread` tinyint NOT NULL,
  `file` tinyint NOT NULL,
  `latency` tinyint NOT NULL,
  `operation` tinyint NOT NULL,
  `requested` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `memory_by_host_by_current_bytes`
--

DROP TABLE IF EXISTS `memory_by_host_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `memory_by_host_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `memory_by_host_by_current_bytes` (
  `host` tinyint NOT NULL,
  `current_count_used` tinyint NOT NULL,
  `current_allocated` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `current_max_alloc` tinyint NOT NULL,
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `memory_by_thread_by_current_bytes`
--

DROP TABLE IF EXISTS `memory_by_thread_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `memory_by_thread_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `memory_by_thread_by_current_bytes` (
  `thread_id` tinyint NOT NULL,
  `user` tinyint NOT NULL,
  `current_count_used` tinyint NOT NULL,
  `current_allocated` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `current_max_alloc` tinyint NOT NULL,
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `memory_by_user_by_current_bytes`
--

DROP TABLE IF EXISTS `memory_by_user_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `memory_by_user_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `memory_by_user_by_current_bytes` (
  `user` tinyint NOT NULL,
  `current_count_used` tinyint NOT NULL,
  `current_allocated` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `current_max_alloc` tinyint NOT NULL,
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `memory_global_by_current_bytes`
--

DROP TABLE IF EXISTS `memory_global_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `memory_global_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `memory_global_by_current_bytes` (
  `event_name` tinyint NOT NULL,
  `current_count` tinyint NOT NULL,
  `current_alloc` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `high_count` tinyint NOT NULL,
  `high_alloc` tinyint NOT NULL,
  `high_avg_alloc` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `memory_global_total`
--

DROP TABLE IF EXISTS `memory_global_total`;
/*!50001 DROP VIEW IF EXISTS `memory_global_total`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `memory_global_total` (
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `metrics`
--

DROP TABLE IF EXISTS `metrics`;
/*!50001 DROP VIEW IF EXISTS `metrics`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `metrics` (
  `Variable_name` tinyint NOT NULL,
  `Variable_value` tinyint NOT NULL,
  `Type` tinyint NOT NULL,
  `Enabled` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `processlist`
--

DROP TABLE IF EXISTS `processlist`;
/*!50001 DROP VIEW IF EXISTS `processlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `processlist` (
  `thd_id` tinyint NOT NULL,
  `conn_id` tinyint NOT NULL,
  `user` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `command` tinyint NOT NULL,
  `state` tinyint NOT NULL,
  `time` tinyint NOT NULL,
  `current_statement` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `progress` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `tmp_tables` tinyint NOT NULL,
  `tmp_disk_tables` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `last_statement` tinyint NOT NULL,
  `last_statement_latency` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `last_wait` tinyint NOT NULL,
  `last_wait_latency` tinyint NOT NULL,
  `source` tinyint NOT NULL,
  `trx_latency` tinyint NOT NULL,
  `trx_state` tinyint NOT NULL,
  `trx_autocommit` tinyint NOT NULL,
  `pid` tinyint NOT NULL,
  `program_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `ps_check_lost_instrumentation`
--

DROP TABLE IF EXISTS `ps_check_lost_instrumentation`;
/*!50001 DROP VIEW IF EXISTS `ps_check_lost_instrumentation`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `ps_check_lost_instrumentation` (
  `variable_name` tinyint NOT NULL,
  `variable_value` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_auto_increment_columns`
--

DROP TABLE IF EXISTS `schema_auto_increment_columns`;
/*!50001 DROP VIEW IF EXISTS `schema_auto_increment_columns`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_auto_increment_columns` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `column_name` tinyint NOT NULL,
  `data_type` tinyint NOT NULL,
  `column_type` tinyint NOT NULL,
  `is_signed` tinyint NOT NULL,
  `is_unsigned` tinyint NOT NULL,
  `max_value` tinyint NOT NULL,
  `auto_increment` tinyint NOT NULL,
  `auto_increment_ratio` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_index_statistics`
--

DROP TABLE IF EXISTS `schema_index_statistics`;
/*!50001 DROP VIEW IF EXISTS `schema_index_statistics`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_index_statistics` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `index_name` tinyint NOT NULL,
  `rows_selected` tinyint NOT NULL,
  `select_latency` tinyint NOT NULL,
  `rows_inserted` tinyint NOT NULL,
  `insert_latency` tinyint NOT NULL,
  `rows_updated` tinyint NOT NULL,
  `update_latency` tinyint NOT NULL,
  `rows_deleted` tinyint NOT NULL,
  `delete_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_object_overview`
--

DROP TABLE IF EXISTS `schema_object_overview`;
/*!50001 DROP VIEW IF EXISTS `schema_object_overview`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_object_overview` (
  `db` tinyint NOT NULL,
  `object_type` tinyint NOT NULL,
  `count` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_redundant_indexes`
--

DROP TABLE IF EXISTS `schema_redundant_indexes`;
/*!50001 DROP VIEW IF EXISTS `schema_redundant_indexes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_redundant_indexes` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `redundant_index_name` tinyint NOT NULL,
  `redundant_index_columns` tinyint NOT NULL,
  `redundant_index_non_unique` tinyint NOT NULL,
  `dominant_index_name` tinyint NOT NULL,
  `dominant_index_columns` tinyint NOT NULL,
  `dominant_index_non_unique` tinyint NOT NULL,
  `subpart_exists` tinyint NOT NULL,
  `sql_drop_index` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_table_lock_waits`
--

DROP TABLE IF EXISTS `schema_table_lock_waits`;
/*!50001 DROP VIEW IF EXISTS `schema_table_lock_waits`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_table_lock_waits` (
  `object_schema` tinyint NOT NULL,
  `object_name` tinyint NOT NULL,
  `waiting_thread_id` tinyint NOT NULL,
  `waiting_pid` tinyint NOT NULL,
  `waiting_account` tinyint NOT NULL,
  `waiting_lock_type` tinyint NOT NULL,
  `waiting_lock_duration` tinyint NOT NULL,
  `waiting_query` tinyint NOT NULL,
  `waiting_query_secs` tinyint NOT NULL,
  `waiting_query_rows_affected` tinyint NOT NULL,
  `waiting_query_rows_examined` tinyint NOT NULL,
  `blocking_thread_id` tinyint NOT NULL,
  `blocking_pid` tinyint NOT NULL,
  `blocking_account` tinyint NOT NULL,
  `blocking_lock_type` tinyint NOT NULL,
  `blocking_lock_duration` tinyint NOT NULL,
  `sql_kill_blocking_query` tinyint NOT NULL,
  `sql_kill_blocking_connection` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_table_statistics`
--

DROP TABLE IF EXISTS `schema_table_statistics`;
/*!50001 DROP VIEW IF EXISTS `schema_table_statistics`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_table_statistics` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `rows_fetched` tinyint NOT NULL,
  `fetch_latency` tinyint NOT NULL,
  `rows_inserted` tinyint NOT NULL,
  `insert_latency` tinyint NOT NULL,
  `rows_updated` tinyint NOT NULL,
  `update_latency` tinyint NOT NULL,
  `rows_deleted` tinyint NOT NULL,
  `delete_latency` tinyint NOT NULL,
  `io_read_requests` tinyint NOT NULL,
  `io_read` tinyint NOT NULL,
  `io_read_latency` tinyint NOT NULL,
  `io_write_requests` tinyint NOT NULL,
  `io_write` tinyint NOT NULL,
  `io_write_latency` tinyint NOT NULL,
  `io_misc_requests` tinyint NOT NULL,
  `io_misc_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_table_statistics_with_buffer`
--

DROP TABLE IF EXISTS `schema_table_statistics_with_buffer`;
/*!50001 DROP VIEW IF EXISTS `schema_table_statistics_with_buffer`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_table_statistics_with_buffer` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `rows_fetched` tinyint NOT NULL,
  `fetch_latency` tinyint NOT NULL,
  `rows_inserted` tinyint NOT NULL,
  `insert_latency` tinyint NOT NULL,
  `rows_updated` tinyint NOT NULL,
  `update_latency` tinyint NOT NULL,
  `rows_deleted` tinyint NOT NULL,
  `delete_latency` tinyint NOT NULL,
  `io_read_requests` tinyint NOT NULL,
  `io_read` tinyint NOT NULL,
  `io_read_latency` tinyint NOT NULL,
  `io_write_requests` tinyint NOT NULL,
  `io_write` tinyint NOT NULL,
  `io_write_latency` tinyint NOT NULL,
  `io_misc_requests` tinyint NOT NULL,
  `io_misc_latency` tinyint NOT NULL,
  `innodb_buffer_allocated` tinyint NOT NULL,
  `innodb_buffer_data` tinyint NOT NULL,
  `innodb_buffer_free` tinyint NOT NULL,
  `innodb_buffer_pages` tinyint NOT NULL,
  `innodb_buffer_pages_hashed` tinyint NOT NULL,
  `innodb_buffer_pages_old` tinyint NOT NULL,
  `innodb_buffer_rows_cached` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_tables_with_full_table_scans`
--

DROP TABLE IF EXISTS `schema_tables_with_full_table_scans`;
/*!50001 DROP VIEW IF EXISTS `schema_tables_with_full_table_scans`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_tables_with_full_table_scans` (
  `object_schema` tinyint NOT NULL,
  `object_name` tinyint NOT NULL,
  `rows_full_scanned` tinyint NOT NULL,
  `latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `schema_unused_indexes`
--

DROP TABLE IF EXISTS `schema_unused_indexes`;
/*!50001 DROP VIEW IF EXISTS `schema_unused_indexes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `schema_unused_indexes` (
  `object_schema` tinyint NOT NULL,
  `object_name` tinyint NOT NULL,
  `index_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `session`
--

DROP TABLE IF EXISTS `session`;
/*!50001 DROP VIEW IF EXISTS `session`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `session` (
  `thd_id` tinyint NOT NULL,
  `conn_id` tinyint NOT NULL,
  `user` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `command` tinyint NOT NULL,
  `state` tinyint NOT NULL,
  `time` tinyint NOT NULL,
  `current_statement` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `progress` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `tmp_tables` tinyint NOT NULL,
  `tmp_disk_tables` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `last_statement` tinyint NOT NULL,
  `last_statement_latency` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `last_wait` tinyint NOT NULL,
  `last_wait_latency` tinyint NOT NULL,
  `source` tinyint NOT NULL,
  `trx_latency` tinyint NOT NULL,
  `trx_state` tinyint NOT NULL,
  `trx_autocommit` tinyint NOT NULL,
  `pid` tinyint NOT NULL,
  `program_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `session_ssl_status`
--

DROP TABLE IF EXISTS `session_ssl_status`;
/*!50001 DROP VIEW IF EXISTS `session_ssl_status`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `session_ssl_status` (
  `thread_id` tinyint NOT NULL,
  `ssl_version` tinyint NOT NULL,
  `ssl_cipher` tinyint NOT NULL,
  `ssl_sessions_reused` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `statement_analysis`
--

DROP TABLE IF EXISTS `statement_analysis`;
/*!50001 DROP VIEW IF EXISTS `statement_analysis`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `statement_analysis` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `err_count` tinyint NOT NULL,
  `warn_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_sent_avg` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_examined_avg` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `rows_affected_avg` tinyint NOT NULL,
  `tmp_tables` tinyint NOT NULL,
  `tmp_disk_tables` tinyint NOT NULL,
  `rows_sorted` tinyint NOT NULL,
  `sort_merge_passes` tinyint NOT NULL,
  `digest` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `statements_with_errors_or_warnings`
--

DROP TABLE IF EXISTS `statements_with_errors_or_warnings`;
/*!50001 DROP VIEW IF EXISTS `statements_with_errors_or_warnings`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `statements_with_errors_or_warnings` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `errors` tinyint NOT NULL,
  `error_pct` tinyint NOT NULL,
  `warnings` tinyint NOT NULL,
  `warning_pct` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `statements_with_full_table_scans`
--

DROP TABLE IF EXISTS `statements_with_full_table_scans`;
/*!50001 DROP VIEW IF EXISTS `statements_with_full_table_scans`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `statements_with_full_table_scans` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `no_index_used_count` tinyint NOT NULL,
  `no_good_index_used_count` tinyint NOT NULL,
  `no_index_used_pct` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_sent_avg` tinyint NOT NULL,
  `rows_examined_avg` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `statements_with_runtimes_in_95th_percentile`
--

DROP TABLE IF EXISTS `statements_with_runtimes_in_95th_percentile`;
/*!50001 DROP VIEW IF EXISTS `statements_with_runtimes_in_95th_percentile`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `statements_with_runtimes_in_95th_percentile` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `err_count` tinyint NOT NULL,
  `warn_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_sent_avg` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_examined_avg` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `statements_with_sorting`
--

DROP TABLE IF EXISTS `statements_with_sorting`;
/*!50001 DROP VIEW IF EXISTS `statements_with_sorting`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `statements_with_sorting` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `sort_merge_passes` tinyint NOT NULL,
  `avg_sort_merges` tinyint NOT NULL,
  `sorts_using_scans` tinyint NOT NULL,
  `sort_using_range` tinyint NOT NULL,
  `rows_sorted` tinyint NOT NULL,
  `avg_rows_sorted` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `statements_with_temp_tables`
--

DROP TABLE IF EXISTS `statements_with_temp_tables`;
/*!50001 DROP VIEW IF EXISTS `statements_with_temp_tables`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `statements_with_temp_tables` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `memory_tmp_tables` tinyint NOT NULL,
  `disk_tmp_tables` tinyint NOT NULL,
  `avg_tmp_tables_per_query` tinyint NOT NULL,
  `tmp_tables_to_disk_pct` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `sys_config`
--

DROP TABLE IF EXISTS `sys_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_config` (
  `variable` varchar(128) NOT NULL,
  `value` varchar(128) DEFAULT NULL,
  `set_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `set_by` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`variable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_config`
--

LOCK TABLES `sys_config` WRITE;
/*!40000 ALTER TABLE `sys_config` DISABLE KEYS */;
INSERT INTO `sys_config` VALUES ('diagnostics.allow_i_s_tables','OFF','2018-12-28 10:43:31',NULL),('diagnostics.include_raw','OFF','2018-12-28 10:43:31',NULL),('ps_thread_trx_info.max_length','65535','2018-12-28 10:43:31',NULL),('statement_performance_analyzer.limit','100','2018-12-28 10:43:31',NULL),('statement_performance_analyzer.view',NULL,'2018-12-28 10:43:31',NULL),('statement_truncate_len','64','2018-12-28 10:43:31',NULL);
/*!40000 ALTER TABLE `sys_config` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`mysql.sys`@`localhost`*/ /*!50003 TRIGGER sys_config_insert_set_user BEFORE INSERT on sys_config FOR EACH ROW BEGIN IF @sys.ignore_sys_config_triggers != true AND NEW.set_by IS NULL THEN SET NEW.set_by = USER(); END IF; END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`mysql.sys`@`localhost`*/ /*!50003 TRIGGER sys_config_update_set_user BEFORE UPDATE on sys_config FOR EACH ROW BEGIN IF @sys.ignore_sys_config_triggers != true AND NEW.set_by IS NULL THEN SET NEW.set_by = USER(); END IF; END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary table structure for view `user_summary`
--

DROP TABLE IF EXISTS `user_summary`;
/*!50001 DROP VIEW IF EXISTS `user_summary`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_summary` (
  `user` tinyint NOT NULL,
  `statements` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `statement_avg_latency` tinyint NOT NULL,
  `table_scans` tinyint NOT NULL,
  `file_ios` tinyint NOT NULL,
  `file_io_latency` tinyint NOT NULL,
  `current_connections` tinyint NOT NULL,
  `total_connections` tinyint NOT NULL,
  `unique_hosts` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `total_memory_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_summary_by_file_io`
--

DROP TABLE IF EXISTS `user_summary_by_file_io`;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_file_io`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_summary_by_file_io` (
  `user` tinyint NOT NULL,
  `ios` tinyint NOT NULL,
  `io_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_summary_by_file_io_type`
--

DROP TABLE IF EXISTS `user_summary_by_file_io_type`;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_file_io_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_summary_by_file_io_type` (
  `user` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_summary_by_stages`
--

DROP TABLE IF EXISTS `user_summary_by_stages`;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_stages`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_summary_by_stages` (
  `user` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_summary_by_statement_latency`
--

DROP TABLE IF EXISTS `user_summary_by_statement_latency`;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_statement_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_summary_by_statement_latency` (
  `user` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `user_summary_by_statement_type`
--

DROP TABLE IF EXISTS `user_summary_by_statement_type`;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_statement_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `user_summary_by_statement_type` (
  `user` tinyint NOT NULL,
  `statement` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `version`
--

DROP TABLE IF EXISTS `version`;
/*!50001 DROP VIEW IF EXISTS `version`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `version` (
  `sys_version` tinyint NOT NULL,
  `mysql_version` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `wait_classes_global_by_avg_latency`
--

DROP TABLE IF EXISTS `wait_classes_global_by_avg_latency`;
/*!50001 DROP VIEW IF EXISTS `wait_classes_global_by_avg_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `wait_classes_global_by_avg_latency` (
  `event_class` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `wait_classes_global_by_latency`
--

DROP TABLE IF EXISTS `wait_classes_global_by_latency`;
/*!50001 DROP VIEW IF EXISTS `wait_classes_global_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `wait_classes_global_by_latency` (
  `event_class` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `waits_by_host_by_latency`
--

DROP TABLE IF EXISTS `waits_by_host_by_latency`;
/*!50001 DROP VIEW IF EXISTS `waits_by_host_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `waits_by_host_by_latency` (
  `host` tinyint NOT NULL,
  `event` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `waits_by_user_by_latency`
--

DROP TABLE IF EXISTS `waits_by_user_by_latency`;
/*!50001 DROP VIEW IF EXISTS `waits_by_user_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `waits_by_user_by_latency` (
  `user` tinyint NOT NULL,
  `event` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `waits_global_by_latency`
--

DROP TABLE IF EXISTS `waits_global_by_latency`;
/*!50001 DROP VIEW IF EXISTS `waits_global_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `waits_global_by_latency` (
  `events` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$host_summary`
--

DROP TABLE IF EXISTS `x$host_summary`;
/*!50001 DROP VIEW IF EXISTS `x$host_summary`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$host_summary` (
  `host` tinyint NOT NULL,
  `statements` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `statement_avg_latency` tinyint NOT NULL,
  `table_scans` tinyint NOT NULL,
  `file_ios` tinyint NOT NULL,
  `file_io_latency` tinyint NOT NULL,
  `current_connections` tinyint NOT NULL,
  `total_connections` tinyint NOT NULL,
  `unique_users` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `total_memory_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$host_summary_by_file_io`
--

DROP TABLE IF EXISTS `x$host_summary_by_file_io`;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_file_io`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$host_summary_by_file_io` (
  `host` tinyint NOT NULL,
  `ios` tinyint NOT NULL,
  `io_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$host_summary_by_file_io_type`
--

DROP TABLE IF EXISTS `x$host_summary_by_file_io_type`;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_file_io_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$host_summary_by_file_io_type` (
  `host` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$host_summary_by_stages`
--

DROP TABLE IF EXISTS `x$host_summary_by_stages`;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_stages`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$host_summary_by_stages` (
  `host` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$host_summary_by_statement_latency`
--

DROP TABLE IF EXISTS `x$host_summary_by_statement_latency`;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_statement_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$host_summary_by_statement_latency` (
  `host` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$host_summary_by_statement_type`
--

DROP TABLE IF EXISTS `x$host_summary_by_statement_type`;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_statement_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$host_summary_by_statement_type` (
  `host` tinyint NOT NULL,
  `statement` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$innodb_buffer_stats_by_schema`
--

DROP TABLE IF EXISTS `x$innodb_buffer_stats_by_schema`;
/*!50001 DROP VIEW IF EXISTS `x$innodb_buffer_stats_by_schema`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$innodb_buffer_stats_by_schema` (
  `object_schema` tinyint NOT NULL,
  `allocated` tinyint NOT NULL,
  `data` tinyint NOT NULL,
  `pages` tinyint NOT NULL,
  `pages_hashed` tinyint NOT NULL,
  `pages_old` tinyint NOT NULL,
  `rows_cached` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$innodb_buffer_stats_by_table`
--

DROP TABLE IF EXISTS `x$innodb_buffer_stats_by_table`;
/*!50001 DROP VIEW IF EXISTS `x$innodb_buffer_stats_by_table`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$innodb_buffer_stats_by_table` (
  `object_schema` tinyint NOT NULL,
  `object_name` tinyint NOT NULL,
  `allocated` tinyint NOT NULL,
  `data` tinyint NOT NULL,
  `pages` tinyint NOT NULL,
  `pages_hashed` tinyint NOT NULL,
  `pages_old` tinyint NOT NULL,
  `rows_cached` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$innodb_lock_waits`
--

DROP TABLE IF EXISTS `x$innodb_lock_waits`;
/*!50001 DROP VIEW IF EXISTS `x$innodb_lock_waits`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$innodb_lock_waits` (
  `wait_started` tinyint NOT NULL,
  `wait_age` tinyint NOT NULL,
  `wait_age_secs` tinyint NOT NULL,
  `locked_table` tinyint NOT NULL,
  `locked_index` tinyint NOT NULL,
  `locked_type` tinyint NOT NULL,
  `waiting_trx_id` tinyint NOT NULL,
  `waiting_trx_started` tinyint NOT NULL,
  `waiting_trx_age` tinyint NOT NULL,
  `waiting_trx_rows_locked` tinyint NOT NULL,
  `waiting_trx_rows_modified` tinyint NOT NULL,
  `waiting_pid` tinyint NOT NULL,
  `waiting_query` tinyint NOT NULL,
  `waiting_lock_id` tinyint NOT NULL,
  `waiting_lock_mode` tinyint NOT NULL,
  `blocking_trx_id` tinyint NOT NULL,
  `blocking_pid` tinyint NOT NULL,
  `blocking_query` tinyint NOT NULL,
  `blocking_lock_id` tinyint NOT NULL,
  `blocking_lock_mode` tinyint NOT NULL,
  `blocking_trx_started` tinyint NOT NULL,
  `blocking_trx_age` tinyint NOT NULL,
  `blocking_trx_rows_locked` tinyint NOT NULL,
  `blocking_trx_rows_modified` tinyint NOT NULL,
  `sql_kill_blocking_query` tinyint NOT NULL,
  `sql_kill_blocking_connection` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$io_by_thread_by_latency`
--

DROP TABLE IF EXISTS `x$io_by_thread_by_latency`;
/*!50001 DROP VIEW IF EXISTS `x$io_by_thread_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$io_by_thread_by_latency` (
  `user` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `thread_id` tinyint NOT NULL,
  `processlist_id` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$io_global_by_file_by_bytes`
--

DROP TABLE IF EXISTS `x$io_global_by_file_by_bytes`;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_file_by_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$io_global_by_file_by_bytes` (
  `file` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `total_read` tinyint NOT NULL,
  `avg_read` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `total_written` tinyint NOT NULL,
  `avg_write` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `write_pct` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$io_global_by_file_by_latency`
--

DROP TABLE IF EXISTS `x$io_global_by_file_by_latency`;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_file_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$io_global_by_file_by_latency` (
  `file` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `read_latency` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `write_latency` tinyint NOT NULL,
  `count_misc` tinyint NOT NULL,
  `misc_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$io_global_by_wait_by_bytes`
--

DROP TABLE IF EXISTS `x$io_global_by_wait_by_bytes`;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_wait_by_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$io_global_by_wait_by_bytes` (
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `total_read` tinyint NOT NULL,
  `avg_read` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `total_written` tinyint NOT NULL,
  `avg_written` tinyint NOT NULL,
  `total_requested` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$io_global_by_wait_by_latency`
--

DROP TABLE IF EXISTS `x$io_global_by_wait_by_latency`;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_wait_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$io_global_by_wait_by_latency` (
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `read_latency` tinyint NOT NULL,
  `write_latency` tinyint NOT NULL,
  `misc_latency` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `total_read` tinyint NOT NULL,
  `avg_read` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `total_written` tinyint NOT NULL,
  `avg_written` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$latest_file_io`
--

DROP TABLE IF EXISTS `x$latest_file_io`;
/*!50001 DROP VIEW IF EXISTS `x$latest_file_io`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$latest_file_io` (
  `thread` tinyint NOT NULL,
  `file` tinyint NOT NULL,
  `latency` tinyint NOT NULL,
  `operation` tinyint NOT NULL,
  `requested` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$memory_by_host_by_current_bytes`
--

DROP TABLE IF EXISTS `x$memory_by_host_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `x$memory_by_host_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$memory_by_host_by_current_bytes` (
  `host` tinyint NOT NULL,
  `current_count_used` tinyint NOT NULL,
  `current_allocated` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `current_max_alloc` tinyint NOT NULL,
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$memory_by_thread_by_current_bytes`
--

DROP TABLE IF EXISTS `x$memory_by_thread_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `x$memory_by_thread_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$memory_by_thread_by_current_bytes` (
  `thread_id` tinyint NOT NULL,
  `user` tinyint NOT NULL,
  `current_count_used` tinyint NOT NULL,
  `current_allocated` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `current_max_alloc` tinyint NOT NULL,
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$memory_by_user_by_current_bytes`
--

DROP TABLE IF EXISTS `x$memory_by_user_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `x$memory_by_user_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$memory_by_user_by_current_bytes` (
  `user` tinyint NOT NULL,
  `current_count_used` tinyint NOT NULL,
  `current_allocated` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `current_max_alloc` tinyint NOT NULL,
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$memory_global_by_current_bytes`
--

DROP TABLE IF EXISTS `x$memory_global_by_current_bytes`;
/*!50001 DROP VIEW IF EXISTS `x$memory_global_by_current_bytes`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$memory_global_by_current_bytes` (
  `event_name` tinyint NOT NULL,
  `current_count` tinyint NOT NULL,
  `current_alloc` tinyint NOT NULL,
  `current_avg_alloc` tinyint NOT NULL,
  `high_count` tinyint NOT NULL,
  `high_alloc` tinyint NOT NULL,
  `high_avg_alloc` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$memory_global_total`
--

DROP TABLE IF EXISTS `x$memory_global_total`;
/*!50001 DROP VIEW IF EXISTS `x$memory_global_total`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$memory_global_total` (
  `total_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$processlist`
--

DROP TABLE IF EXISTS `x$processlist`;
/*!50001 DROP VIEW IF EXISTS `x$processlist`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$processlist` (
  `thd_id` tinyint NOT NULL,
  `conn_id` tinyint NOT NULL,
  `user` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `command` tinyint NOT NULL,
  `state` tinyint NOT NULL,
  `time` tinyint NOT NULL,
  `current_statement` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `progress` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `tmp_tables` tinyint NOT NULL,
  `tmp_disk_tables` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `last_statement` tinyint NOT NULL,
  `last_statement_latency` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `last_wait` tinyint NOT NULL,
  `last_wait_latency` tinyint NOT NULL,
  `source` tinyint NOT NULL,
  `trx_latency` tinyint NOT NULL,
  `trx_state` tinyint NOT NULL,
  `trx_autocommit` tinyint NOT NULL,
  `pid` tinyint NOT NULL,
  `program_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$ps_digest_95th_percentile_by_avg_us`
--

DROP TABLE IF EXISTS `x$ps_digest_95th_percentile_by_avg_us`;
/*!50001 DROP VIEW IF EXISTS `x$ps_digest_95th_percentile_by_avg_us`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$ps_digest_95th_percentile_by_avg_us` (
  `avg_us` tinyint NOT NULL,
  `percentile` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$ps_digest_avg_latency_distribution`
--

DROP TABLE IF EXISTS `x$ps_digest_avg_latency_distribution`;
/*!50001 DROP VIEW IF EXISTS `x$ps_digest_avg_latency_distribution`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$ps_digest_avg_latency_distribution` (
  `cnt` tinyint NOT NULL,
  `avg_us` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$ps_schema_table_statistics_io`
--

DROP TABLE IF EXISTS `x$ps_schema_table_statistics_io`;
/*!50001 DROP VIEW IF EXISTS `x$ps_schema_table_statistics_io`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$ps_schema_table_statistics_io` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `count_read` tinyint NOT NULL,
  `sum_number_of_bytes_read` tinyint NOT NULL,
  `sum_timer_read` tinyint NOT NULL,
  `count_write` tinyint NOT NULL,
  `sum_number_of_bytes_write` tinyint NOT NULL,
  `sum_timer_write` tinyint NOT NULL,
  `count_misc` tinyint NOT NULL,
  `sum_timer_misc` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$schema_flattened_keys`
--

DROP TABLE IF EXISTS `x$schema_flattened_keys`;
/*!50001 DROP VIEW IF EXISTS `x$schema_flattened_keys`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$schema_flattened_keys` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `index_name` tinyint NOT NULL,
  `non_unique` tinyint NOT NULL,
  `subpart_exists` tinyint NOT NULL,
  `index_columns` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$schema_index_statistics`
--

DROP TABLE IF EXISTS `x$schema_index_statistics`;
/*!50001 DROP VIEW IF EXISTS `x$schema_index_statistics`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$schema_index_statistics` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `index_name` tinyint NOT NULL,
  `rows_selected` tinyint NOT NULL,
  `select_latency` tinyint NOT NULL,
  `rows_inserted` tinyint NOT NULL,
  `insert_latency` tinyint NOT NULL,
  `rows_updated` tinyint NOT NULL,
  `update_latency` tinyint NOT NULL,
  `rows_deleted` tinyint NOT NULL,
  `delete_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$schema_table_lock_waits`
--

DROP TABLE IF EXISTS `x$schema_table_lock_waits`;
/*!50001 DROP VIEW IF EXISTS `x$schema_table_lock_waits`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$schema_table_lock_waits` (
  `object_schema` tinyint NOT NULL,
  `object_name` tinyint NOT NULL,
  `waiting_thread_id` tinyint NOT NULL,
  `waiting_pid` tinyint NOT NULL,
  `waiting_account` tinyint NOT NULL,
  `waiting_lock_type` tinyint NOT NULL,
  `waiting_lock_duration` tinyint NOT NULL,
  `waiting_query` tinyint NOT NULL,
  `waiting_query_secs` tinyint NOT NULL,
  `waiting_query_rows_affected` tinyint NOT NULL,
  `waiting_query_rows_examined` tinyint NOT NULL,
  `blocking_thread_id` tinyint NOT NULL,
  `blocking_pid` tinyint NOT NULL,
  `blocking_account` tinyint NOT NULL,
  `blocking_lock_type` tinyint NOT NULL,
  `blocking_lock_duration` tinyint NOT NULL,
  `sql_kill_blocking_query` tinyint NOT NULL,
  `sql_kill_blocking_connection` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$schema_table_statistics`
--

DROP TABLE IF EXISTS `x$schema_table_statistics`;
/*!50001 DROP VIEW IF EXISTS `x$schema_table_statistics`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$schema_table_statistics` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `rows_fetched` tinyint NOT NULL,
  `fetch_latency` tinyint NOT NULL,
  `rows_inserted` tinyint NOT NULL,
  `insert_latency` tinyint NOT NULL,
  `rows_updated` tinyint NOT NULL,
  `update_latency` tinyint NOT NULL,
  `rows_deleted` tinyint NOT NULL,
  `delete_latency` tinyint NOT NULL,
  `io_read_requests` tinyint NOT NULL,
  `io_read` tinyint NOT NULL,
  `io_read_latency` tinyint NOT NULL,
  `io_write_requests` tinyint NOT NULL,
  `io_write` tinyint NOT NULL,
  `io_write_latency` tinyint NOT NULL,
  `io_misc_requests` tinyint NOT NULL,
  `io_misc_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$schema_table_statistics_with_buffer`
--

DROP TABLE IF EXISTS `x$schema_table_statistics_with_buffer`;
/*!50001 DROP VIEW IF EXISTS `x$schema_table_statistics_with_buffer`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$schema_table_statistics_with_buffer` (
  `table_schema` tinyint NOT NULL,
  `table_name` tinyint NOT NULL,
  `rows_fetched` tinyint NOT NULL,
  `fetch_latency` tinyint NOT NULL,
  `rows_inserted` tinyint NOT NULL,
  `insert_latency` tinyint NOT NULL,
  `rows_updated` tinyint NOT NULL,
  `update_latency` tinyint NOT NULL,
  `rows_deleted` tinyint NOT NULL,
  `delete_latency` tinyint NOT NULL,
  `io_read_requests` tinyint NOT NULL,
  `io_read` tinyint NOT NULL,
  `io_read_latency` tinyint NOT NULL,
  `io_write_requests` tinyint NOT NULL,
  `io_write` tinyint NOT NULL,
  `io_write_latency` tinyint NOT NULL,
  `io_misc_requests` tinyint NOT NULL,
  `io_misc_latency` tinyint NOT NULL,
  `innodb_buffer_allocated` tinyint NOT NULL,
  `innodb_buffer_data` tinyint NOT NULL,
  `innodb_buffer_free` tinyint NOT NULL,
  `innodb_buffer_pages` tinyint NOT NULL,
  `innodb_buffer_pages_hashed` tinyint NOT NULL,
  `innodb_buffer_pages_old` tinyint NOT NULL,
  `innodb_buffer_rows_cached` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$schema_tables_with_full_table_scans`
--

DROP TABLE IF EXISTS `x$schema_tables_with_full_table_scans`;
/*!50001 DROP VIEW IF EXISTS `x$schema_tables_with_full_table_scans`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$schema_tables_with_full_table_scans` (
  `object_schema` tinyint NOT NULL,
  `object_name` tinyint NOT NULL,
  `rows_full_scanned` tinyint NOT NULL,
  `latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$session`
--

DROP TABLE IF EXISTS `x$session`;
/*!50001 DROP VIEW IF EXISTS `x$session`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$session` (
  `thd_id` tinyint NOT NULL,
  `conn_id` tinyint NOT NULL,
  `user` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `command` tinyint NOT NULL,
  `state` tinyint NOT NULL,
  `time` tinyint NOT NULL,
  `current_statement` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `progress` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `tmp_tables` tinyint NOT NULL,
  `tmp_disk_tables` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `last_statement` tinyint NOT NULL,
  `last_statement_latency` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `last_wait` tinyint NOT NULL,
  `last_wait_latency` tinyint NOT NULL,
  `source` tinyint NOT NULL,
  `trx_latency` tinyint NOT NULL,
  `trx_state` tinyint NOT NULL,
  `trx_autocommit` tinyint NOT NULL,
  `pid` tinyint NOT NULL,
  `program_name` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$statement_analysis`
--

DROP TABLE IF EXISTS `x$statement_analysis`;
/*!50001 DROP VIEW IF EXISTS `x$statement_analysis`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$statement_analysis` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `err_count` tinyint NOT NULL,
  `warn_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_sent_avg` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_examined_avg` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `rows_affected_avg` tinyint NOT NULL,
  `tmp_tables` tinyint NOT NULL,
  `tmp_disk_tables` tinyint NOT NULL,
  `rows_sorted` tinyint NOT NULL,
  `sort_merge_passes` tinyint NOT NULL,
  `digest` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$statements_with_errors_or_warnings`
--

DROP TABLE IF EXISTS `x$statements_with_errors_or_warnings`;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_errors_or_warnings`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$statements_with_errors_or_warnings` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `errors` tinyint NOT NULL,
  `error_pct` tinyint NOT NULL,
  `warnings` tinyint NOT NULL,
  `warning_pct` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$statements_with_full_table_scans`
--

DROP TABLE IF EXISTS `x$statements_with_full_table_scans`;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_full_table_scans`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$statements_with_full_table_scans` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `no_index_used_count` tinyint NOT NULL,
  `no_good_index_used_count` tinyint NOT NULL,
  `no_index_used_pct` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_sent_avg` tinyint NOT NULL,
  `rows_examined_avg` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$statements_with_runtimes_in_95th_percentile`
--

DROP TABLE IF EXISTS `x$statements_with_runtimes_in_95th_percentile`;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_runtimes_in_95th_percentile`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$statements_with_runtimes_in_95th_percentile` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `full_scan` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `err_count` tinyint NOT NULL,
  `warn_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_sent_avg` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_examined_avg` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$statements_with_sorting`
--

DROP TABLE IF EXISTS `x$statements_with_sorting`;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_sorting`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$statements_with_sorting` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `sort_merge_passes` tinyint NOT NULL,
  `avg_sort_merges` tinyint NOT NULL,
  `sorts_using_scans` tinyint NOT NULL,
  `sort_using_range` tinyint NOT NULL,
  `rows_sorted` tinyint NOT NULL,
  `avg_rows_sorted` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$statements_with_temp_tables`
--

DROP TABLE IF EXISTS `x$statements_with_temp_tables`;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_temp_tables`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$statements_with_temp_tables` (
  `query` tinyint NOT NULL,
  `db` tinyint NOT NULL,
  `exec_count` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `memory_tmp_tables` tinyint NOT NULL,
  `disk_tmp_tables` tinyint NOT NULL,
  `avg_tmp_tables_per_query` tinyint NOT NULL,
  `tmp_tables_to_disk_pct` tinyint NOT NULL,
  `first_seen` tinyint NOT NULL,
  `last_seen` tinyint NOT NULL,
  `digest` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$user_summary`
--

DROP TABLE IF EXISTS `x$user_summary`;
/*!50001 DROP VIEW IF EXISTS `x$user_summary`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$user_summary` (
  `user` tinyint NOT NULL,
  `statements` tinyint NOT NULL,
  `statement_latency` tinyint NOT NULL,
  `statement_avg_latency` tinyint NOT NULL,
  `table_scans` tinyint NOT NULL,
  `file_ios` tinyint NOT NULL,
  `file_io_latency` tinyint NOT NULL,
  `current_connections` tinyint NOT NULL,
  `total_connections` tinyint NOT NULL,
  `unique_hosts` tinyint NOT NULL,
  `current_memory` tinyint NOT NULL,
  `total_memory_allocated` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$user_summary_by_file_io`
--

DROP TABLE IF EXISTS `x$user_summary_by_file_io`;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_file_io`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$user_summary_by_file_io` (
  `user` tinyint NOT NULL,
  `ios` tinyint NOT NULL,
  `io_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$user_summary_by_file_io_type`
--

DROP TABLE IF EXISTS `x$user_summary_by_file_io_type`;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_file_io_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$user_summary_by_file_io_type` (
  `user` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$user_summary_by_stages`
--

DROP TABLE IF EXISTS `x$user_summary_by_stages`;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_stages`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$user_summary_by_stages` (
  `user` tinyint NOT NULL,
  `event_name` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$user_summary_by_statement_latency`
--

DROP TABLE IF EXISTS `x$user_summary_by_statement_latency`;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_statement_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$user_summary_by_statement_latency` (
  `user` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$user_summary_by_statement_type`
--

DROP TABLE IF EXISTS `x$user_summary_by_statement_type`;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_statement_type`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$user_summary_by_statement_type` (
  `user` tinyint NOT NULL,
  `statement` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL,
  `lock_latency` tinyint NOT NULL,
  `rows_sent` tinyint NOT NULL,
  `rows_examined` tinyint NOT NULL,
  `rows_affected` tinyint NOT NULL,
  `full_scans` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$wait_classes_global_by_avg_latency`
--

DROP TABLE IF EXISTS `x$wait_classes_global_by_avg_latency`;
/*!50001 DROP VIEW IF EXISTS `x$wait_classes_global_by_avg_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$wait_classes_global_by_avg_latency` (
  `event_class` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$wait_classes_global_by_latency`
--

DROP TABLE IF EXISTS `x$wait_classes_global_by_latency`;
/*!50001 DROP VIEW IF EXISTS `x$wait_classes_global_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$wait_classes_global_by_latency` (
  `event_class` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `min_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$waits_by_host_by_latency`
--

DROP TABLE IF EXISTS `x$waits_by_host_by_latency`;
/*!50001 DROP VIEW IF EXISTS `x$waits_by_host_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$waits_by_host_by_latency` (
  `host` tinyint NOT NULL,
  `event` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$waits_by_user_by_latency`
--

DROP TABLE IF EXISTS `x$waits_by_user_by_latency`;
/*!50001 DROP VIEW IF EXISTS `x$waits_by_user_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$waits_by_user_by_latency` (
  `user` tinyint NOT NULL,
  `event` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `x$waits_global_by_latency`
--

DROP TABLE IF EXISTS `x$waits_global_by_latency`;
/*!50001 DROP VIEW IF EXISTS `x$waits_global_by_latency`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `x$waits_global_by_latency` (
  `events` tinyint NOT NULL,
  `total` tinyint NOT NULL,
  `total_latency` tinyint NOT NULL,
  `avg_latency` tinyint NOT NULL,
  `max_latency` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'sys'
--

--
-- Dumping routines for database 'sys'
--
/*!50003 DROP FUNCTION IF EXISTS `extract_schema_from_file_name` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `extract_schema_from_file_name`( path VARCHAR(512) ) RETURNS varchar(64) CHARSET utf8
    NO SQL
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a raw file path, and attempts to extract the schema name from it.\n \n Useful for when interacting with Performance Schema data \n concerning IO statistics, for example.\n \n Currently relies on the fact that a table data file will be within a \n specified database directory (will not work with partitions or tables\n that specify an individual DATA_DIRECTORY).\n \n Parameters\n \n path (VARCHAR(512)):\n The full file path to a data file to extract the schema name from.\n \n Returns\n \n VARCHAR(64)\n \n Example\n \n mysql> SELECT sys.extract_schema_from_file_name(''/var/lib/mysql/employees/employee.ibd'');\n +----------------------------------------------------------------------------+\n | sys.extract_schema_from_file_name(''/var/lib/mysql/employees/employee.ibd'') |\n +----------------------------------------------------------------------------+\n | employees                                                                  |\n +----------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN LEFT(SUBSTRING_INDEX(SUBSTRING_INDEX(REPLACE(path, '\\', '/'), '/', -2), '/', 1), 64); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `extract_table_from_file_name` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `extract_table_from_file_name`( path VARCHAR(512) ) RETURNS varchar(64) CHARSET utf8
    NO SQL
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a raw file path, and extracts the table name from it.\n \n Useful for when interacting with Performance Schema data \n concerning IO statistics, for example.\n \n Parameters\n \n path (VARCHAR(512)):\n The full file path to a data file to extract the table name from.\n \n Returns\n \n VARCHAR(64)\n \n Example\n \n mysql> SELECT sys.extract_table_from_file_name(''/var/lib/mysql/employees/employee.ibd'');\n +---------------------------------------------------------------------------+\n | sys.extract_table_from_file_name(''/var/lib/mysql/employees/employee.ibd'') |\n +---------------------------------------------------------------------------+\n | employee                                                                  |\n +---------------------------------------------------------------------------+\n 1 row in set (0.02 sec)\n '
BEGIN RETURN LEFT(SUBSTRING_INDEX(REPLACE(SUBSTRING_INDEX(REPLACE(path, '\\', '/'), '/', -1), '@0024', '$'), '.', 1), 64); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `format_bytes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `format_bytes`( bytes TEXT ) RETURNS text CHARSET utf8
    NO SQL
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a raw bytes value, and converts it to a human readable format.\n \n Parameters\n \n bytes (TEXT):\n A raw bytes value.\n \n Returns\n \n TEXT\n \n Example\n \n mysql> SELECT sys.format_bytes(2348723492723746) AS size;\n +----------+\n | size     |\n +----------+\n | 2.09 PiB |\n +----------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.format_bytes(2348723492723) AS size;\n +----------+\n | size     |\n +----------+\n | 2.14 TiB |\n +----------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.format_bytes(23487234) AS size;\n +-----------+\n | size      |\n +-----------+\n | 22.40 MiB |\n +-----------+\n 1 row in set (0.00 sec)\n '
BEGIN IF bytes IS NULL THEN RETURN NULL; ELSEIF bytes >= 1125899906842624 THEN RETURN CONCAT(ROUND(bytes / 1125899906842624, 2), ' PiB'); ELSEIF bytes >= 1099511627776 THEN RETURN CONCAT(ROUND(bytes / 1099511627776, 2), ' TiB'); ELSEIF bytes >= 1073741824 THEN RETURN CONCAT(ROUND(bytes / 1073741824, 2), ' GiB'); ELSEIF bytes >= 1048576 THEN RETURN CONCAT(ROUND(bytes / 1048576, 2), ' MiB'); ELSEIF bytes >= 1024 THEN RETURN CONCAT(ROUND(bytes / 1024, 2), ' KiB'); ELSE RETURN CONCAT(ROUND(bytes, 0), ' bytes'); END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `format_path` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `format_path`( in_path VARCHAR(512) ) RETURNS varchar(512) CHARSET utf8
    NO SQL
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a raw path value, and strips out the datadir or tmpdir\n replacing with @@datadir and @@tmpdir respectively. \n \n Also normalizes the paths across operating systems, so backslashes\n on Windows are converted to forward slashes\n \n Parameters\n \n path (VARCHAR(512)):\n The raw file path value to format.\n \n Returns\n \n VARCHAR(512) CHARSET UTF8\n \n Example\n \n mysql> select @@datadir;\n +-----------------------------------------------+\n | @@datadir                                     |\n +-----------------------------------------------+\n | /Users/mark/sandboxes/SmallTree/AMaster/data/ |\n +-----------------------------------------------+\n 1 row in set (0.06 sec)\n \n mysql> select format_path(''/Users/mark/sandboxes/SmallTree/AMaster/data/mysql/proc.MYD'') AS path;\n +--------------------------+\n | path                     |\n +--------------------------+\n | @@datadir/mysql/proc.MYD |\n +--------------------------+\n 1 row in set (0.03 sec)\n '
BEGIN DECLARE v_path VARCHAR(512); DECLARE v_undo_dir VARCHAR(1024);  DECLARE path_separator CHAR(1) DEFAULT '/';  IF @@global.version_compile_os LIKE 'win%' THEN SET path_separator = '\\'; END IF;  IF in_path LIKE '/private/%' THEN SET v_path = REPLACE(in_path, '/private', ''); ELSE SET v_path = in_path; END IF;  SET v_undo_dir = IFNULL((SELECT VARIABLE_VALUE FROM performance_schema.global_variables WHERE VARIABLE_NAME = 'innodb_undo_directory'), '');  IF v_path IS NULL THEN RETURN NULL; ELSEIF v_path LIKE CONCAT(@@global.datadir, IF(SUBSTRING(@@global.datadir, -1) = path_separator, '%', CONCAT(path_separator, '%'))) ESCAPE '|' THEN SET v_path = REPLACE(v_path, @@global.datadir, CONCAT('@@datadir', IF(SUBSTRING(@@global.datadir, -1) = path_separator, path_separator, ''))); ELSEIF v_path LIKE CONCAT(@@global.tmpdir, IF(SUBSTRING(@@global.tmpdir, -1) = path_separator, '%', CONCAT(path_separator, '%'))) ESCAPE '|' THEN SET v_path = REPLACE(v_path, @@global.tmpdir, CONCAT('@@tmpdir', IF(SUBSTRING(@@global.tmpdir, -1) = path_separator, path_separator, ''))); ELSEIF v_path LIKE CONCAT(@@global.slave_load_tmpdir, IF(SUBSTRING(@@global.slave_load_tmpdir, -1) = path_separator, '%', CONCAT(path_separator, '%'))) ESCAPE '|' THEN SET v_path = REPLACE(v_path, @@global.slave_load_tmpdir, CONCAT('@@slave_load_tmpdir', IF(SUBSTRING(@@global.slave_load_tmpdir, -1) = path_separator, path_separator, ''))); ELSEIF v_path LIKE CONCAT(@@global.innodb_data_home_dir, IF(SUBSTRING(@@global.innodb_data_home_dir, -1) = path_separator, '%', CONCAT(path_separator, '%'))) ESCAPE '|' THEN SET v_path = REPLACE(v_path, @@global.innodb_data_home_dir, CONCAT('@@innodb_data_home_dir', IF(SUBSTRING(@@global.innodb_data_home_dir, -1) = path_separator, path_separator, ''))); ELSEIF v_path LIKE CONCAT(@@global.innodb_log_group_home_dir, IF(SUBSTRING(@@global.innodb_log_group_home_dir, -1) = path_separator, '%', CONCAT(path_separator, '%'))) ESCAPE '|' THEN SET v_path = REPLACE(v_path, @@global.innodb_log_group_home_dir, CONCAT('@@innodb_log_group_home_dir', IF(SUBSTRING(@@global.innodb_log_group_home_dir, -1) = path_separator, path_separator, ''))); ELSEIF v_path LIKE CONCAT(v_undo_dir, IF(SUBSTRING(v_undo_dir, -1) = path_separator, '%', CONCAT(path_separator, '%'))) ESCAPE '|' THEN SET v_path = REPLACE(v_path, v_undo_dir, CONCAT('@@innodb_undo_directory', IF(SUBSTRING(v_undo_dir, -1) = path_separator, path_separator, ''))); ELSEIF v_path LIKE CONCAT(@@global.basedir, IF(SUBSTRING(@@global.basedir, -1) = path_separator, '%', CONCAT(path_separator, '%'))) ESCAPE '|' THEN SET v_path = REPLACE(v_path, @@global.basedir, CONCAT('@@basedir', IF(SUBSTRING(@@global.basedir, -1) = path_separator, path_separator, ''))); END IF;  RETURN v_path; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `format_statement` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `format_statement`( statement LONGTEXT ) RETURNS longtext CHARSET utf8
    NO SQL
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Formats a normalized statement, truncating it if it is > 64 characters long by default.\n \n To configure the length to truncate the statement to by default, update the `statement_truncate_len`\n variable with `sys_config` table to a different value. Alternatively, to change it just for just \n your particular session, use `SET @sys.statement_truncate_len := <some new value>`.\n \n Useful for printing statement related data from Performance Schema from \n the command line.\n \n Parameters\n \n statement (LONGTEXT): \n The statement to format.\n \n Returns\n \n LONGTEXT\n \n Example\n \n mysql> SELECT sys.format_statement(digest_text)\n ->   FROM performance_schema.events_statements_summary_by_digest\n ->  ORDER by sum_timer_wait DESC limit 5;\n +-------------------------------------------------------------------+\n | sys.format_statement(digest_text)                                 |\n +-------------------------------------------------------------------+\n | CREATE SQL SECURITY INVOKER VI ... KE ? AND `variable_value` > ?  |\n | CREATE SQL SECURITY INVOKER VI ... ait` IS NOT NULL , `esc` . ... |\n | CREATE SQL SECURITY INVOKER VI ... ait` IS NOT NULL , `sys` . ... |\n | CREATE SQL SECURITY INVOKER VI ...  , `compressed_size` ) ) DESC  |\n | CREATE SQL SECURITY INVOKER VI ... LIKE ? ORDER BY `timer_start`  |\n +-------------------------------------------------------------------+\n 5 rows in set (0.00 sec)\n '
BEGIN IF @sys.statement_truncate_len IS NULL THEN SET @sys.statement_truncate_len = sys_get_config('statement_truncate_len', 64); END IF;  IF CHAR_LENGTH(statement) > @sys.statement_truncate_len THEN RETURN REPLACE(CONCAT(LEFT(statement, (@sys.statement_truncate_len/2)-2), ' ... ', RIGHT(statement, (@sys.statement_truncate_len/2)-2)), '\n', ' '); ELSE  RETURN REPLACE(statement, '\n', ' '); END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `format_time` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `format_time`( picoseconds TEXT ) RETURNS text CHARSET utf8
    NO SQL
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a raw picoseconds value, and converts it to a human readable form.\n \n Picoseconds are the precision that all latency values are printed in \n within Performance Schema, however are not user friendly when wanting\n to scan output from the command line.\n \n Parameters\n \n picoseconds (TEXT): \n The raw picoseconds value to convert.\n \n Returns\n \n TEXT\n \n Example\n \n mysql> select format_time(342342342342345);\n +------------------------------+\n | format_time(342342342342345) |\n +------------------------------+\n | 00:05:42                     |\n +------------------------------+\n 1 row in set (0.00 sec)\n \n mysql> select format_time(342342342);\n +------------------------+\n | format_time(342342342) |\n +------------------------+\n | 342.34 us              |\n +------------------------+\n 1 row in set (0.00 sec)\n \n mysql> select format_time(34234);\n +--------------------+\n | format_time(34234) |\n +--------------------+\n | 34.23 ns           |\n +--------------------+\n 1 row in set (0.00 sec)\n '
BEGIN IF picoseconds IS NULL THEN RETURN NULL; ELSEIF picoseconds >= 604800000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 604800000000000000, 2), ' w'); ELSEIF picoseconds >= 86400000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 86400000000000000, 2), ' d'); ELSEIF picoseconds >= 3600000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 3600000000000000, 2), ' h'); ELSEIF picoseconds >= 60000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 60000000000000, 2), ' m'); ELSEIF picoseconds >= 1000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000000000, 2), ' s'); ELSEIF picoseconds >= 1000000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000000, 2), ' ms'); ELSEIF picoseconds >= 1000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000, 2), ' us'); ELSEIF picoseconds >= 1000 THEN RETURN CONCAT(ROUND(picoseconds / 1000, 2), ' ns'); ELSE RETURN CONCAT(picoseconds, ' ps'); END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `list_add` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `list_add`( in_list TEXT, in_add_value TEXT ) RETURNS text CHARSET utf8
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a list, and a value to add to the list, and returns the resulting list.\n \n Useful for altering certain session variables, like sql_mode or optimizer_switch for instance.\n \n Parameters\n \n in_list (TEXT):\n The comma separated list to add a value to\n \n in_add_value (TEXT):\n The value to add to the input list\n \n Returns\n \n TEXT\n \n Example\n \n mysql> select @@sql_mode;\n +-----------------------------------------------------------------------------------+\n | @@sql_mode                                                                        |\n +-----------------------------------------------------------------------------------+\n | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +-----------------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n mysql> set sql_mode = sys.list_add(@@sql_mode, ''ANSI_QUOTES'');\n Query OK, 0 rows affected (0.06 sec)\n \n mysql> select @@sql_mode;\n +-----------------------------------------------------------------------------------------------+\n | @@sql_mode                                                                                    |\n +-----------------------------------------------------------------------------------------------+\n | ANSI_QUOTES,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +-----------------------------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n '
BEGIN  IF (in_add_value IS NULL) THEN SIGNAL SQLSTATE '02200' SET MESSAGE_TEXT = 'Function sys.list_add: in_add_value input variable should not be NULL', MYSQL_ERRNO = 1138; END IF;  IF (in_list IS NULL OR LENGTH(in_list) = 0) THEN RETURN in_add_value; END IF;  RETURN (SELECT CONCAT(TRIM(BOTH ',' FROM TRIM(in_list)), ',', in_add_value));  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `list_drop` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `list_drop`( in_list TEXT, in_drop_value TEXT ) RETURNS text CHARSET utf8
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a list, and a value to attempt to remove from the list, and returns the resulting list.\n \n Useful for altering certain session variables, like sql_mode or optimizer_switch for instance.\n \n Parameters\n \n in_list (TEXT):\n The comma separated list to drop a value from\n \n in_drop_value (TEXT):\n The value to drop from the input list\n \n Returns\n \n TEXT\n \n Example\n \n mysql> select @@sql_mode;\n +-----------------------------------------------------------------------------------------------+\n | @@sql_mode                                                                                    |\n +-----------------------------------------------------------------------------------------------+\n | ANSI_QUOTES,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +-----------------------------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n mysql> set sql_mode = sys.list_drop(@@sql_mode, ''ONLY_FULL_GROUP_BY'');\n Query OK, 0 rows affected (0.03 sec)\n \n mysql> select @@sql_mode;\n +----------------------------------------------------------------------------+\n | @@sql_mode                                                                 |\n +----------------------------------------------------------------------------+\n | ANSI_QUOTES,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +----------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n '
BEGIN  IF (in_drop_value IS NULL) THEN SIGNAL SQLSTATE '02200' SET MESSAGE_TEXT = 'Function sys.list_drop: in_drop_value input variable should not be NULL', MYSQL_ERRNO = 1138; END IF;  IF (in_list IS NULL OR LENGTH(in_list) = 0) THEN RETURN in_list; END IF;  RETURN (SELECT TRIM(BOTH ',' FROM REPLACE(REPLACE(CONCAT(',', in_list), CONCAT(',', in_drop_value), ''), CONCAT(', ', in_drop_value), '')));  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_is_account_enabled` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_is_account_enabled`( in_host VARCHAR(60),  in_user VARCHAR(32) ) RETURNS enum('YES','NO') CHARSET utf8
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Determines whether instrumentation of an account is enabled \n within Performance Schema.\n \n Parameters\n \n in_host VARCHAR(60): \n The hostname of the account to check.\n in_user VARCHAR(32):\n The username of the account to check.\n \n Returns\n \n ENUM(''YES'', ''NO'', ''PARTIAL'')\n \n Example\n \n mysql> SELECT sys.ps_is_account_enabled(''localhost'', ''root'');\n +------------------------------------------------+\n | sys.ps_is_account_enabled(''localhost'', ''root'') |\n +------------------------------------------------+\n | YES                                            |\n +------------------------------------------------+\n 1 row in set (0.01 sec)\n '
BEGIN RETURN IF(EXISTS(SELECT 1 FROM performance_schema.setup_actors WHERE (`HOST` = '%' OR in_host LIKE `HOST`) AND (`USER` = '%' OR `USER` = in_user) AND (`ENABLED` = 'YES') ), 'YES', 'NO' ); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_is_consumer_enabled` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_is_consumer_enabled`( in_consumer varchar(64) ) RETURNS enum('YES','NO') CHARSET utf8
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Determines whether a consumer is enabled (taking the consumer hierarchy into consideration)\n within the Performance Schema.\n \n Parameters\n \n in_consumer VARCHAR(64): \n The name of the consumer to check.\n \n Returns\n \n ENUM(''YES'', ''NO'')\n \n Example\n \n mysql> SELECT sys.ps_is_consumer_enabled(''events_stages_history'');\n +-----------------------------------------------------+\n | sys.ps_is_consumer_enabled(''events_stages_history'') |\n +-----------------------------------------------------+\n | NO                                                  |\n +-----------------------------------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN ( SELECT (CASE WHEN c.NAME = 'global_instrumentation' THEN c.ENABLED WHEN c.NAME = 'thread_instrumentation' THEN IF(cg.ENABLED = 'YES' AND c.ENABLED = 'YES', 'YES', 'NO') WHEN c.NAME LIKE '%\_digest'           THEN IF(cg.ENABLED = 'YES' AND c.ENABLED = 'YES', 'YES', 'NO') WHEN c.NAME LIKE '%\_current'          THEN IF(cg.ENABLED = 'YES' AND ct.ENABLED = 'YES' AND c.ENABLED = 'YES', 'YES', 'NO') ELSE IF(cg.ENABLED = 'YES' AND ct.ENABLED = 'YES' AND c.ENABLED = 'YES' AND ( SELECT cc.ENABLED FROM performance_schema.setup_consumers cc WHERE NAME = CONCAT(SUBSTRING_INDEX(c.NAME, '_', 2), '_current') ) = 'YES', 'YES', 'NO') END) AS IsEnabled FROM performance_schema.setup_consumers c INNER JOIN performance_schema.setup_consumers cg INNER JOIN performance_schema.setup_consumers ct WHERE cg.NAME       = 'global_instrumentation' AND ct.NAME   = 'thread_instrumentation' AND c.NAME    = in_consumer ); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_is_instrument_default_enabled` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_is_instrument_default_enabled`( in_instrument VARCHAR(128) ) RETURNS enum('YES','NO') CHARSET utf8
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Returns whether an instrument is enabled by default in this version of MySQL.\n \n Parameters\n \n in_instrument VARCHAR(128): \n The instrument to check.\n \n Returns\n \n ENUM(''YES'', ''NO'')\n \n Example\n \n mysql> SELECT sys.ps_is_instrument_default_enabled(''statement/sql/select'');\n +--------------------------------------------------------------+\n | sys.ps_is_instrument_default_enabled(''statement/sql/select'') |\n +--------------------------------------------------------------+\n | YES                                                          |\n +--------------------------------------------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN DECLARE v_enabled ENUM('YES', 'NO');  SET v_enabled = IF(in_instrument LIKE 'wait/io/file/%' OR in_instrument LIKE 'wait/io/table/%' OR in_instrument LIKE 'statement/%' OR in_instrument LIKE 'memory/performance_schema/%' OR in_instrument IN ('wait/lock/table/sql/handler', 'idle')  OR in_instrument LIKE 'stage/innodb/%' OR in_instrument = 'stage/sql/copy to tmp table'  , 'YES', 'NO' );  RETURN v_enabled; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_is_instrument_default_timed` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_is_instrument_default_timed`( in_instrument VARCHAR(128) ) RETURNS enum('YES','NO') CHARSET utf8
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Returns whether an instrument is timed by default in this version of MySQL.\n \n Parameters\n \n in_instrument VARCHAR(128): \n The instrument to check.\n \n Returns\n \n ENUM(''YES'', ''NO'')\n \n Example\n \n mysql> SELECT sys.ps_is_instrument_default_timed(''statement/sql/select'');\n +------------------------------------------------------------+\n | sys.ps_is_instrument_default_timed(''statement/sql/select'') |\n +------------------------------------------------------------+\n | YES                                                        |\n +------------------------------------------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN DECLARE v_timed ENUM('YES', 'NO');  SET v_timed = IF(in_instrument LIKE 'wait/io/file/%' OR in_instrument LIKE 'wait/io/table/%' OR in_instrument LIKE 'statement/%' OR in_instrument IN ('wait/lock/table/sql/handler', 'idle')  OR in_instrument LIKE 'stage/innodb/%' OR in_instrument = 'stage/sql/copy to tmp table'  , 'YES', 'NO' );  RETURN v_timed; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_is_thread_instrumented` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_is_thread_instrumented`( in_connection_id BIGINT UNSIGNED ) RETURNS enum('YES','NO','UNKNOWN') CHARSET utf8
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Checks whether the provided connection id is instrumented within Performance Schema.\n \n Parameters\n \n in_connection_id (BIGINT UNSIGNED):\n The id of the connection to check.\n \n Returns\n \n ENUM(''YES'', ''NO'', ''UNKNOWN'')\n \n Example\n \n mysql> SELECT sys.ps_is_thread_instrumented(CONNECTION_ID());\n +------------------------------------------------+\n | sys.ps_is_thread_instrumented(CONNECTION_ID()) |\n +------------------------------------------------+\n | YES                                            |\n +------------------------------------------------+\n '
BEGIN DECLARE v_enabled ENUM('YES', 'NO', 'UNKNOWN');  IF (in_connection_id IS NULL) THEN RETURN NULL; END IF;  SELECT INSTRUMENTED INTO v_enabled FROM performance_schema.threads  WHERE PROCESSLIST_ID = in_connection_id;  IF (v_enabled IS NULL) THEN RETURN 'UNKNOWN'; ELSE RETURN v_enabled; END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_thread_account` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_thread_account`( in_thread_id BIGINT UNSIGNED ) RETURNS text CHARSET utf8
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Return the user@host account for the given Performance Schema thread id.\n \n Parameters\n \n in_thread_id (BIGINT UNSIGNED):\n The id of the thread to return the account for.\n \n Example\n \n mysql> select thread_id, processlist_user, processlist_host from performance_schema.threads where type = ''foreground'';\n +-----------+------------------+------------------+\n | thread_id | processlist_user | processlist_host |\n +-----------+------------------+------------------+\n |        23 | NULL             | NULL             |\n |        30 | root             | localhost        |\n |        31 | msandbox         | localhost        |\n |        32 | msandbox         | localhost        |\n +-----------+------------------+------------------+\n 4 rows in set (0.00 sec)\n \n mysql> select sys.ps_thread_account(31);\n +---------------------------+\n | sys.ps_thread_account(31) |\n +---------------------------+\n | msandbox@localhost        |\n +---------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN (SELECT IF( type = 'FOREGROUND', CONCAT(processlist_user, '@', processlist_host), type ) AS account FROM `performance_schema`.`threads` WHERE thread_id = in_thread_id); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_thread_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_thread_id`( in_connection_id BIGINT UNSIGNED ) RETURNS bigint(20) unsigned
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Return the Performance Schema THREAD_ID for the specified connection ID.\n \n Parameters\n \n in_connection_id (BIGINT UNSIGNED):\n The id of the connection to return the thread id for. If NULL, the current\n connection thread id is returned.\n \n Example\n \n mysql> SELECT sys.ps_thread_id(79);\n +----------------------+\n | sys.ps_thread_id(79) |\n +----------------------+\n |                   98 |\n +----------------------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.ps_thread_id(CONNECTION_ID());\n +-----------------------------------+\n | sys.ps_thread_id(CONNECTION_ID()) |\n +-----------------------------------+\n |                                98 |\n +-----------------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN (SELECT THREAD_ID FROM `performance_schema`.`threads` WHERE PROCESSLIST_ID = IFNULL(in_connection_id, CONNECTION_ID()) ); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_thread_stack` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_thread_stack`( thd_id BIGINT UNSIGNED, debug BOOLEAN ) RETURNS longtext CHARSET latin1
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Outputs a JSON formatted stack of all statements, stages and events\n within Performance Schema for the specified thread.\n \n Parameters\n \n thd_id (BIGINT UNSIGNED):\n The id of the thread to trace. This should match the thread_id\n column from the performance_schema.threads table.\n in_verbose (BOOLEAN):\n Include file:lineno information in the events.\n \n Example\n \n (line separation added for output)\n \n mysql> SELECT sys.ps_thread_stack(37, FALSE) AS thread_stack\\G\n *************************** 1. row ***************************\n thread_stack: {"rankdir": "LR","nodesep": "0.10","stack_created": "2014-02-19 13:39:03",\n "mysql_version": "5.7.3-m13","mysql_user": "root@localhost","events": \n [{"nesting_event_id": "0", "event_id": "10", "timer_wait": 256.35, "event_info": \n "sql/select", "wait_info": "select @@version_comment limit 1\\nerrors: 0\\nwarnings: 0\\nlock time:\n ...\n '
BEGIN  DECLARE json_objects LONGTEXT;   UPDATE performance_schema.threads SET instrumented = 'NO' WHERE processlist_id = CONNECTION_ID();   SET SESSION group_concat_max_len=@@global.max_allowed_packet;  SELECT GROUP_CONCAT(CONCAT( '{' , CONCAT_WS( ', ' , CONCAT('"nesting_event_id": "', IF(nesting_event_id IS NULL, '0', nesting_event_id), '"') , CONCAT('"event_id": "', event_id, '"') , CONCAT( '"timer_wait": ', ROUND(timer_wait/1000000, 2))   , CONCAT( '"event_info": "' , CASE WHEN event_name NOT LIKE 'wait/io%' THEN REPLACE(SUBSTRING_INDEX(event_name, '/', -2), '\\', '\\\\') WHEN event_name NOT LIKE 'wait/io/file%' OR event_name NOT LIKE 'wait/io/socket%' THEN REPLACE(SUBSTRING_INDEX(event_name, '/', -4), '\\', '\\\\') ELSE event_name END , '"' ) , CONCAT( '"wait_info": "', IFNULL(wait_info, ''), '"') , CONCAT( '"source": "', IF(true AND event_name LIKE 'wait%', IFNULL(wait_info, ''), ''), '"') , CASE  WHEN event_name LIKE 'wait/io/file%'      THEN '"event_type": "io/file"' WHEN event_name LIKE 'wait/io/table%'     THEN '"event_type": "io/table"' WHEN event_name LIKE 'wait/io/socket%'    THEN '"event_type": "io/socket"' WHEN event_name LIKE 'wait/synch/mutex%'  THEN '"event_type": "synch/mutex"' WHEN event_name LIKE 'wait/synch/cond%'   THEN '"event_type": "synch/cond"' WHEN event_name LIKE 'wait/synch/rwlock%' THEN '"event_type": "synch/rwlock"' WHEN event_name LIKE 'wait/lock%'         THEN '"event_type": "lock"' WHEN event_name LIKE 'statement/%'        THEN '"event_type": "stmt"' WHEN event_name LIKE 'stage/%'            THEN '"event_type": "stage"' WHEN event_name LIKE '%idle%'             THEN '"event_type": "idle"' ELSE ''  END                    ) , '}' ) ORDER BY event_id ASC SEPARATOR ',') event INTO json_objects FROM (  (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id,  CONCAT(sql_text, '\\n', 'errors: ', errors, '\\n', 'warnings: ', warnings, '\\n', 'lock time: ', ROUND(lock_time/1000000, 2),'us\\n', 'rows affected: ', rows_affected, '\\n', 'rows sent: ', rows_sent, '\\n', 'rows examined: ', rows_examined, '\\n', 'tmp tables: ', created_tmp_tables, '\\n', 'tmp disk tables: ', created_tmp_disk_tables, '\\n', 'select scan: ', select_scan, '\\n', 'select full join: ', select_full_join, '\\n', 'select full range join: ', select_full_range_join, '\\n', 'select range: ', select_range, '\\n', 'select range check: ', select_range_check, '\\n',  'sort merge passes: ', sort_merge_passes, '\\n', 'sort rows: ', sort_rows, '\\n', 'sort range: ', sort_range, '\\n', 'sort scan: ', sort_scan, '\\n', 'no index used: ', IF(no_index_used, 'TRUE', 'FALSE'), '\\n', 'no good index used: ', IF(no_good_index_used, 'TRUE', 'FALSE'), '\\n' ) AS wait_info FROM performance_schema.events_statements_history_long WHERE thread_id = thd_id) UNION  (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, null AS wait_info FROM performance_schema.events_stages_history_long WHERE thread_id = thd_id)  UNION  (SELECT thread_id, event_id,  CONCAT(event_name ,  IF(event_name NOT LIKE 'wait/synch/mutex%', IFNULL(CONCAT(' - ', operation), ''), ''),  IF(number_of_bytes IS NOT NULL, CONCAT(' ', number_of_bytes, ' bytes'), ''), IF(event_name LIKE 'wait/io/file%', '\\n', ''), IF(object_schema IS NOT NULL, CONCAT('\\nObject: ', object_schema, '.'), ''),  IF(object_name IS NOT NULL,  IF (event_name LIKE 'wait/io/socket%', CONCAT(IF (object_name LIKE ':0%', @@socket, object_name)), object_name), ''),  IF(index_name IS NOT NULL, CONCAT(' Index: ', index_name), ''), '\\n' ) AS event_name, timer_wait, timer_start, nesting_event_id, source AS wait_info FROM performance_schema.events_waits_history_long WHERE thread_id = thd_id)) events  ORDER BY event_id;  RETURN CONCAT('{',  CONCAT_WS(',',  '"rankdir": "LR"', '"nodesep": "0.10"', CONCAT('"stack_created": "', NOW(), '"'), CONCAT('"mysql_version": "', VERSION(), '"'), CONCAT('"mysql_user": "', CURRENT_USER(), '"'), CONCAT('"events": [', IFNULL(json_objects,''), ']') ), '}');  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `ps_thread_trx_info` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `ps_thread_trx_info`( in_thread_id BIGINT UNSIGNED ) RETURNS longtext CHARSET utf8
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Returns a JSON object with info on the given threads current transaction, \n and the statements it has already executed, derived from the\n performance_schema.events_transactions_current and\n performance_schema.events_statements_history tables (so the consumers \n for these also have to be enabled within Performance Schema to get full\n data in the object).\n \n When the output exceeds the default truncation length (65535), a JSON error\n object is returned, such as:\n \n { "error": "Trx info truncated: Row 6 was cut by GROUP_CONCAT()" }\n \n Similar error objects are returned for other warnings/and exceptions raised\n when calling the function.\n \n The max length of the output of this function can be controlled with the\n ps_thread_trx_info.max_length variable set via sys_config, or the\n @sys.ps_thread_trx_info.max_length user variable, as appropriate.\n \n Parameters\n \n in_thread_id (BIGINT UNSIGNED):\n The id of the thread to return the transaction info for.\n \n Example\n \n SELECT sys.ps_thread_trx_info(48)\\G\n *************************** 1. row ***************************\n sys.ps_thread_trx_info(48): [\n {\n "time": "790.70 us",\n "state": "COMMITTED",\n "mode": "READ WRITE",\n "autocommitted": "NO",\n "gtid": "AUTOMATIC",\n "isolation": "REPEATABLE READ",\n "statements_executed": [\n {\n "sql_text": "INSERT INTO info VALUES (1, ''foo'')",\n "time": "471.02 us",\n "schema": "trx",\n "rows_examined": 0,\n "rows_affected": 1,\n "rows_sent": 0,\n "tmp_tables": 0,\n "tmp_disk_tables": 0,\n "sort_rows": 0,\n "sort_merge_passes": 0\n },\n {\n "sql_text": "COMMIT",\n "time": "254.42 us",\n "schema": "trx",\n "rows_examined": 0,\n "rows_affected": 0,\n "rows_sent": 0,\n "tmp_tables": 0,\n "tmp_disk_tables": 0,\n "sort_rows": 0,\n "sort_merge_passes": 0\n }\n ]\n },\n {\n "time": "426.20 us",\n "state": "COMMITTED",\n "mode": "READ WRITE",\n "autocommitted": "NO",\n "gtid": "AUTOMATIC",\n "isolation": "REPEATABLE READ",\n "statements_executed": [\n {\n "sql_text": "INSERT INTO info VALUES (2, ''bar'')",\n "time": "107.33 us",\n "schema": "trx",\n "rows_examined": 0,\n "rows_affected": 1,\n "rows_sent": 0,\n "tmp_tables": 0,\n "tmp_disk_tables": 0,\n "sort_rows": 0,\n "sort_merge_passes": 0\n },\n {\n "sql_text": "COMMIT",\n "time": "213.23 us",\n "schema": "trx",\n "rows_examined": 0,\n "rows_affected": 0,\n "rows_sent": 0,\n "tmp_tables": 0,\n "tmp_disk_tables": 0,\n "sort_rows": 0,\n "sort_merge_passes": 0\n }\n ]\n }\n ]\n 1 row in set (0.03 sec)\n '
BEGIN DECLARE v_output LONGTEXT DEFAULT '{}'; DECLARE v_msg_text TEXT DEFAULT ''; DECLARE v_signal_msg TEXT DEFAULT ''; DECLARE v_mysql_errno INT; DECLARE v_max_output_len BIGINT; DECLARE EXIT HANDLER FOR SQLWARNING, SQLEXCEPTION BEGIN GET DIAGNOSTICS CONDITION 1 v_msg_text = MESSAGE_TEXT, v_mysql_errno = MYSQL_ERRNO;  IF v_mysql_errno = 1260 THEN SET v_signal_msg = CONCAT('{ "error": "Trx info truncated: ', v_msg_text, '" }'); ELSE SET v_signal_msg = CONCAT('{ "error": "', v_msg_text, '" }'); END IF;  RETURN v_signal_msg; END;  IF (@sys.ps_thread_trx_info.max_length IS NULL) THEN SET @sys.ps_thread_trx_info.max_length = sys.sys_get_config('ps_thread_trx_info.max_length', 65535); END IF;  IF (@sys.ps_thread_trx_info.max_length != @@session.group_concat_max_len) THEN SET @old_group_concat_max_len = @@session.group_concat_max_len; SET v_max_output_len = (@sys.ps_thread_trx_info.max_length - 5); SET SESSION group_concat_max_len = v_max_output_len; END IF;  SET v_output = ( SELECT CONCAT('[', IFNULL(GROUP_CONCAT(trx_info ORDER BY event_id), ''), '\n]') AS trx_info FROM (SELECT trxi.thread_id,  trxi.event_id, GROUP_CONCAT( IFNULL( CONCAT('\n  {\n', '    "time": "', IFNULL(sys.format_time(trxi.timer_wait), ''), '",\n', '    "state": "', IFNULL(trxi.state, ''), '",\n', '    "mode": "', IFNULL(trxi.access_mode, ''), '",\n', '    "autocommitted": "', IFNULL(trxi.autocommit, ''), '",\n', '    "gtid": "', IFNULL(trxi.gtid, ''), '",\n', '    "isolation": "', IFNULL(trxi.isolation_level, ''), '",\n', '    "statements_executed": [', IFNULL(s.stmts, ''), IF(s.stmts IS NULL, ' ]\n', '\n    ]\n'), '  }' ),  '')  ORDER BY event_id) AS trx_info  FROM ( (SELECT thread_id, event_id, timer_wait, state,access_mode, autocommit, gtid, isolation_level FROM performance_schema.events_transactions_current WHERE thread_id = in_thread_id AND end_event_id IS NULL) UNION (SELECT thread_id, event_id, timer_wait, state,access_mode, autocommit, gtid, isolation_level FROM performance_schema.events_transactions_history WHERE thread_id = in_thread_id) ) AS trxi LEFT JOIN (SELECT thread_id, nesting_event_id, GROUP_CONCAT( IFNULL( CONCAT('\n      {\n', '        "sql_text": "', IFNULL(sys.format_statement(REPLACE(sql_text, '\\', '\\\\')), ''), '",\n', '        "time": "', IFNULL(sys.format_time(timer_wait), ''), '",\n', '        "schema": "', IFNULL(current_schema, ''), '",\n', '        "rows_examined": ', IFNULL(rows_examined, ''), ',\n', '        "rows_affected": ', IFNULL(rows_affected, ''), ',\n', '        "rows_sent": ', IFNULL(rows_sent, ''), ',\n', '        "tmp_tables": ', IFNULL(created_tmp_tables, ''), ',\n', '        "tmp_disk_tables": ', IFNULL(created_tmp_disk_tables, ''), ',\n', '        "sort_rows": ', IFNULL(sort_rows, ''), ',\n', '        "sort_merge_passes": ', IFNULL(sort_merge_passes, ''), '\n', '      }'), '') ORDER BY event_id) AS stmts FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL AND thread_id = in_thread_id GROUP BY thread_id, nesting_event_id ) AS s  ON trxi.thread_id = s.thread_id  AND trxi.event_id = s.nesting_event_id WHERE trxi.thread_id = in_thread_id GROUP BY trxi.thread_id, trxi.event_id ) trxs GROUP BY thread_id );  IF (@old_group_concat_max_len IS NOT NULL) THEN SET SESSION group_concat_max_len = @old_group_concat_max_len; END IF;  RETURN v_output; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `quote_identifier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `quote_identifier`(in_identifier TEXT) RETURNS text CHARSET utf8
    NO SQL
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes an unquoted identifier (schema name, table name, etc.) and\n returns the identifier quoted with backticks.\n \n Parameters\n \n in_identifier (TEXT):\n The identifier to quote.\n \n Returns\n \n TEXT\n \n Example\n \n mysql> SELECT sys.quote_identifier(''my_identifier'') AS Identifier;\n +-----------------+\n | Identifier      |\n +-----------------+\n | `my_identifier` |\n +-----------------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.quote_identifier(''my`idenfier'') AS Identifier;\n +----------------+\n | Identifier     |\n +----------------+\n | `my``idenfier` |\n +----------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN CONCAT('`', REPLACE(in_identifier, '`', '``'), '`'); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `sys_get_config` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `sys_get_config`( in_variable_name VARCHAR(128), in_default_value VARCHAR(128) ) RETURNS varchar(128) CHARSET utf8
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Returns the value for the requested variable using the following logic:\n \n 1. If the option exists in sys.sys_config return the value from there.\n 2. Else fall back on the provided default value.\n \n Notes for using sys_get_config():\n \n * If the default value argument to sys_get_config() is NULL and case 2. is reached, NULL is returned.\n It is then expected that the caller is able to handle NULL for the given configuration option.\n * The convention is to name the user variables @sys.<name of variable>. It is <name of variable> that\n is stored in the sys_config table and is what is expected as the argument to sys_get_config().\n * If you want to check whether the configuration option has already been set and if not assign with\n the return value of sys_get_config() you can use IFNULL(...) (see example below). However this should\n not be done inside a loop (e.g. for each row in a result set) as for repeated calls where assignment\n is only needed in the first iteration using IFNULL(...) is expected to be significantly slower than\n using an IF (...) THEN ... END IF; block (see example below).\n \n Parameters\n \n in_variable_name (VARCHAR(128)):\n The name of the config option to return the value for.\n \n in_default_value (VARCHAR(128)):\n The default value to return if the variable does not exist in sys.sys_config.\n \n Returns\n \n VARCHAR(128)\n \n Example\n \n mysql> SELECT sys.sys_get_config(''statement_truncate_len'', 128) AS Value;\n +-------+\n | Value |\n +-------+\n | 64    |\n +-------+\n 1 row in set (0.00 sec)\n \n mysql> SET @sys.statement_truncate_len = IFNULL(@sys.statement_truncate_len, sys.sys_get_config(''statement_truncate_len'', 64));\n Query OK, 0 rows affected (0.00 sec)\n \n IF (@sys.statement_truncate_len IS NULL) THEN\n SET @sys.statement_truncate_len = sys.sys_get_config(''statement_truncate_len'', 64);\n END IF;\n '
BEGIN DECLARE v_value VARCHAR(128) DEFAULT NULL;  SET v_value = (SELECT value FROM sys.sys_config WHERE variable = in_variable_name);  IF (v_value IS NULL) THEN SET v_value = in_default_value; END IF;  RETURN v_value; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `version_major` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `version_major`() RETURNS tinyint(3) unsigned
    NO SQL
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Returns the major version of MySQL Server.\n \n Returns\n \n TINYINT UNSIGNED\n \n Example\n \n mysql> SELECT VERSION(), sys.version_major();\n +--------------------------------------+---------------------+\n | VERSION()                            | sys.version_major() |\n +--------------------------------------+---------------------+\n | 5.7.9-enterprise-commercial-advanced | 5                   |\n +--------------------------------------+---------------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), '-', 1), '.', 1); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `version_minor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `version_minor`() RETURNS tinyint(3) unsigned
    NO SQL
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Returns the minor (release series) version of MySQL Server.\n \n Returns\n \n TINYINT UNSIGNED\n \n Example\n \n mysql> SELECT VERSION(), sys.server_minor();\n +--------------------------------------+---------------------+\n | VERSION()                            | sys.version_minor() |\n +--------------------------------------+---------------------+\n | 5.7.9-enterprise-commercial-advanced | 7                   |\n +--------------------------------------+---------------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), '-', 1), '.', 2), '.', -1); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `version_patch` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` FUNCTION `version_patch`() RETURNS tinyint(3) unsigned
    NO SQL
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Returns the patch release version of MySQL Server.\n \n Returns\n \n TINYINT UNSIGNED\n \n Example\n \n mysql> SELECT VERSION(), sys.version_patch();\n +--------------------------------------+---------------------+\n | VERSION()                            | sys.version_patch() |\n +--------------------------------------+---------------------+\n | 5.7.9-enterprise-commercial-advanced | 9                   |\n +--------------------------------------+---------------------+\n 1 row in set (0.00 sec)\n '
BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), '-', 1), '.', -1); END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_synonym_db` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `create_synonym_db`( IN in_db_name VARCHAR(64),  IN in_synonym VARCHAR(64) )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes a source database name and synonym name, and then creates the \n synonym database with views that point to all of the tables within\n the source database.\n \n Useful for creating a "ps" synonym for "performance_schema",\n or "is" instead of "information_schema", for example.\n \n Parameters\n \n in_db_name (VARCHAR(64)):\n The database name that you would like to create a synonym for.\n in_synonym (VARCHAR(64)):\n The database synonym name.\n \n Example\n \n mysql> SHOW DATABASES;\n +--------------------+\n | Database           |\n +--------------------+\n | information_schema |\n | mysql              |\n | performance_schema |\n | sys                |\n | test               |\n +--------------------+\n 5 rows in set (0.00 sec)\n \n mysql> CALL sys.create_synonym_db(''performance_schema'', ''ps'');\n +---------------------------------------+\n | summary                               |\n +---------------------------------------+\n | Created 74 views in the `ps` database |\n +---------------------------------------+\n 1 row in set (8.57 sec)\n \n Query OK, 0 rows affected (8.57 sec)\n \n mysql> SHOW DATABASES;\n +--------------------+\n | Database           |\n +--------------------+\n | information_schema |\n | mysql              |\n | performance_schema |\n | ps                 |\n | sys                |\n | test               |\n +--------------------+\n 6 rows in set (0.00 sec)\n \n mysql> SHOW FULL TABLES FROM ps;\n +------------------------------------------------------+------------+\n | Tables_in_ps                                         | Table_type |\n +------------------------------------------------------+------------+\n | accounts                                             | VIEW       |\n | cond_instances                                       | VIEW       |\n | events_stages_current                                | VIEW       |\n | events_stages_history                                | VIEW       |\n ...\n '
BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_db_name_check VARCHAR(64); DECLARE v_db_err_msg TEXT; DECLARE v_table VARCHAR(64); DECLARE v_views_created INT DEFAULT 0;  DECLARE db_doesnt_exist CONDITION FOR SQLSTATE '42000'; DECLARE db_name_exists CONDITION FOR SQLSTATE 'HY000';  DECLARE c_table_names CURSOR FOR  SELECT TABLE_NAME  FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = in_db_name;  DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SELECT SCHEMA_NAME INTO v_db_name_check FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = in_db_name;  IF v_db_name_check IS NULL THEN SET v_db_err_msg = CONCAT('Unknown database ', in_db_name); SIGNAL SQLSTATE 'HY000' SET MESSAGE_TEXT = v_db_err_msg; END IF;  SELECT SCHEMA_NAME INTO v_db_name_check FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = in_synonym;  IF v_db_name_check = in_synonym THEN SET v_db_err_msg = CONCAT('Can\'t create database ', in_synonym, '; database exists'); SIGNAL SQLSTATE 'HY000' SET MESSAGE_TEXT = v_db_err_msg; END IF;  SET @create_db_stmt := CONCAT('CREATE DATABASE ', sys.quote_identifier(in_synonym)); PREPARE create_db_stmt FROM @create_db_stmt; EXECUTE create_db_stmt; DEALLOCATE PREPARE create_db_stmt;  SET v_done = FALSE; OPEN c_table_names; c_table_names: LOOP FETCH c_table_names INTO v_table; IF v_done THEN LEAVE c_table_names; END IF;  SET @create_view_stmt = CONCAT( 'CREATE SQL SECURITY INVOKER VIEW ', sys.quote_identifier(in_synonym), '.', sys.quote_identifier(v_table), ' AS SELECT * FROM ', sys.quote_identifier(in_db_name), '.', sys.quote_identifier(v_table) ); PREPARE create_view_stmt FROM @create_view_stmt; EXECUTE create_view_stmt; DEALLOCATE PREPARE create_view_stmt;  SET v_views_created = v_views_created + 1; END LOOP; CLOSE c_table_names;  SELECT CONCAT( 'Created ', v_views_created, ' view', IF(v_views_created != 1, 's', ''), ' in the ', sys.quote_identifier(in_synonym), ' database' ) AS summary;  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `diagnostics` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `diagnostics`( IN in_max_runtime int unsigned, IN in_interval int unsigned, IN in_auto_config enum ('current', 'medium', 'full') )
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Create a report of the current status of the server for diagnostics purposes. Data collected includes (some items depends on versions and settings):\n \n * The GLOBAL VARIABLES\n * Several sys schema views including metrics or equivalent (depending on version and settings)\n * Queries in the 95th percentile\n * Several ndbinfo views for MySQL Cluster\n * Replication (both master and slave) information.\n \n Some of the sys schema views are calculated as initial (optional), overall, delta:\n \n * The initial view is the content of the view at the start of this procedure.\n This output will be the same as the the start values used for the delta view.\n The initial view is included if @sys.diagnostics.include_raw = ''ON''.\n * The overall view is the content of the view at the end of this procedure.\n This output is the same as the end values used for the delta view.\n The overall view is always included.\n * The delta view is the difference from the beginning to the end. Note that for min and max values\n they are simply the min or max value from the end view respectively, so does not necessarily reflect\n the minimum/maximum value in the monitored period.\n Note: except for the metrics views the delta is only calculation between the first and last outputs.\n \n Requires the SUPER privilege for "SET sql_log_bin = 0;".\n \n Versions supported:\n * MySQL 5.6: 5.6.10 and later\n * MySQL 5.7: 5.7.9 and later\n \n Parameters\n \n in_max_runtime (INT UNSIGNED):\n The maximum time to keep collecting data.\n Use NULL to get the default which is 60 seconds, otherwise enter a value greater than 0.\n in_interval (INT UNSIGNED):\n How long to sleep between data collections.\n Use NULL to get the default which is 30 seconds, otherwise enter a value greater than 0.\n in_auto_config (ENUM(''current'', ''medium'', ''full''))\n Automatically enable Performance Schema instruments and consumers.\n NOTE: The more that are enabled, the more impact on the performance.\n Supported values are:\n * current - use the current settings.\n * medium - enable some settings.\n * full - enables all settings. This will have a big impact on the\n performance - be careful using this option.\n If another setting the ''current'' is chosen, the current settings\n are restored at the end of the procedure.\n \n \n Configuration Options\n \n sys.diagnostics.allow_i_s_tables\n Specifies whether it is allowed to do table scan queries on information_schema.TABLES. This can be expensive if there\n are many tables. Set to ''ON'' to allow, ''OFF'' to not allow.\n Default is ''OFF''.\n \n sys.diagnostics.include_raw\n Set to ''ON'' to include the raw data (e.g. the original output of "SELECT * FROM sys.metrics").\n Use this to get the initial values of the various views.\n Default is ''OFF''.\n \n sys.statement_truncate_len\n How much of queries in the process list output to include.\n Default is 64.\n \n sys.debug\n Whether to provide debugging output.\n Default is ''OFF''. Set to ''ON'' to include.\n \n \n Example\n \n To create a report and append it to the file diag.out:\n \n mysql> TEE diag.out;\n mysql> CALL sys.diagnostics(120, 30, ''current'');\n ...\n mysql> NOTEE;\n '
BEGIN DECLARE v_start, v_runtime, v_iter_start, v_sleep DECIMAL(20,2) DEFAULT 0.0; DECLARE v_has_innodb, v_has_ndb, v_has_ps, v_has_replication, v_has_ps_replication VARCHAR(8) CHARSET utf8 DEFAULT 'NO'; DECLARE v_this_thread_enabled, v_has_ps_vars, v_has_metrics ENUM('YES', 'NO'); DECLARE v_table_name, v_banner VARCHAR(64) CHARSET utf8; DECLARE v_sql_status_summary_select, v_sql_status_summary_delta, v_sql_status_summary_from, v_no_delta_names TEXT; DECLARE v_output_time, v_output_time_prev DECIMAL(20,3) UNSIGNED; DECLARE v_output_count, v_count, v_old_group_concat_max_len INT UNSIGNED DEFAULT 0; DECLARE v_status_summary_width TINYINT UNSIGNED DEFAULT 50; DECLARE v_done BOOLEAN DEFAULT FALSE; DECLARE c_ndbinfo CURSOR FOR SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'ndbinfo' AND TABLE_NAME NOT IN ( 'blocks', 'config_params', 'dict_obj_types', 'disk_write_speed_base', 'memory_per_fragment', 'memoryusage', 'operations_per_fragment', 'threadblocks' ); DECLARE c_sysviews_w_delta CURSOR FOR SELECT table_name FROM tmp_sys_views_delta ORDER BY table_name;  DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SELECT INSTRUMENTED INTO v_this_thread_enabled FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); IF (v_this_thread_enabled = 'YES') THEN CALL sys.ps_setup_disable_thread(CONNECTION_ID()); END IF;  IF (in_max_runtime < in_interval) THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'in_max_runtime must be greater than or equal to in_interval'; END IF; IF (in_max_runtime = 0) THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'in_max_runtime must be greater than 0'; END IF; IF (in_interval = 0) THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'in_interval must be greater than 0'; END IF;  IF (@sys.diagnostics.allow_i_s_tables IS NULL) THEN SET @sys.diagnostics.allow_i_s_tables = sys.sys_get_config('diagnostics.allow_i_s_tables', 'OFF'); END IF; IF (@sys.diagnostics.include_raw IS NULL) THEN SET @sys.diagnostics.include_raw      = sys.sys_get_config('diagnostics.include_raw'     , 'OFF'); END IF; IF (@sys.debug IS NULL) THEN SET @sys.debug                        = sys.sys_get_config('debug'                       , 'OFF'); END IF; IF (@sys.statement_truncate_len IS NULL) THEN SET @sys.statement_truncate_len       = sys.sys_get_config('statement_truncate_len'      , '64' ); END IF;  SET @log_bin := @@sql_log_bin; IF (@log_bin = 1) THEN SET sql_log_bin = 0; END IF;  SET v_no_delta_names = CONCAT('s%{COUNT}.Variable_name NOT IN (', '''innodb_buffer_pool_pages_total'', ', '''innodb_page_size'', ', '''last_query_cost'', ', '''last_query_partial_plans'', ', '''qcache_total_blocks'', ', '''slave_last_heartbeat'', ', '''ssl_ctx_verify_depth'', ', '''ssl_ctx_verify_mode'', ', '''ssl_session_cache_size'', ', '''ssl_verify_depth'', ', '''ssl_verify_mode'', ', '''ssl_version'', ', '''buffer_flush_lsn_avg_rate'', ', '''buffer_flush_pct_for_dirty'', ', '''buffer_flush_pct_for_lsn'', ', '''buffer_pool_pages_total'', ', '''lock_row_lock_time_avg'', ', '''lock_row_lock_time_max'', ', '''innodb_page_size''', ')');  IF (in_auto_config <> 'current') THEN IF (@sys.debug = 'ON') THEN SELECT CONCAT('Updating Performance Schema configuration to ', in_auto_config) AS 'Debug'; END IF; CALL sys.ps_setup_save(0);  IF (in_auto_config = 'medium') THEN UPDATE performance_schema.setup_consumers SET ENABLED = 'YES' WHERE NAME NOT LIKE '%\_history%';  UPDATE performance_schema.setup_instruments SET ENABLED = 'YES', TIMED   = 'YES' WHERE NAME NOT LIKE 'wait/synch/%'; ELSEIF (in_auto_config = 'full') THEN UPDATE performance_schema.setup_consumers SET ENABLED = 'YES';  UPDATE performance_schema.setup_instruments SET ENABLED = 'YES', TIMED   = 'YES'; END IF;  UPDATE performance_schema.threads SET INSTRUMENTED = 'YES' WHERE PROCESSLIST_ID <> CONNECTION_ID(); END IF;  SET v_start        = UNIX_TIMESTAMP(NOW(2)), in_interval    = IFNULL(in_interval, 30), in_max_runtime = IFNULL(in_max_runtime, 60);  SET v_banner = REPEAT( '-', LEAST( GREATEST( 36, CHAR_LENGTH(VERSION()), CHAR_LENGTH(@@global.version_comment), CHAR_LENGTH(@@global.version_compile_os), CHAR_LENGTH(@@global.version_compile_machine), CHAR_LENGTH(@@global.socket), CHAR_LENGTH(@@global.datadir) ), 64 ) ); SELECT 'Hostname' AS 'Name', @@global.hostname AS 'Value' UNION ALL SELECT 'Port' AS 'Name', @@global.port AS 'Value' UNION ALL SELECT 'Socket' AS 'Name', @@global.socket AS 'Value' UNION ALL SELECT 'Datadir' AS 'Name', @@global.datadir AS 'Value' UNION ALL SELECT 'Server UUID' AS 'Name', @@global.server_uuid AS 'Value' UNION ALL SELECT REPEAT('-', 23) AS 'Name', v_banner AS 'Value' UNION ALL SELECT 'MySQL Version' AS 'Name', VERSION() AS 'Value' UNION ALL SELECT 'Sys Schema Version' AS 'Name', (SELECT sys_version FROM sys.version) AS 'Value' UNION ALL SELECT 'Version Comment' AS 'Name', @@global.version_comment AS 'Value' UNION ALL SELECT 'Version Compile OS' AS 'Name', @@global.version_compile_os AS 'Value' UNION ALL SELECT 'Version Compile Machine' AS 'Name', @@global.version_compile_machine AS 'Value' UNION ALL SELECT REPEAT('-', 23) AS 'Name', v_banner AS 'Value' UNION ALL SELECT 'UTC Time' AS 'Name', UTC_TIMESTAMP() AS 'Value' UNION ALL SELECT 'Local Time' AS 'Name', NOW() AS 'Value' UNION ALL SELECT 'Time Zone' AS 'Name', @@global.time_zone AS 'Value' UNION ALL SELECT 'System Time Zone' AS 'Name', @@global.system_time_zone AS 'Value' UNION ALL SELECT 'Time Zone Offset' AS 'Name', TIMEDIFF(NOW(), UTC_TIMESTAMP()) AS 'Value';  SET v_has_innodb         = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = 'InnoDB'), 'NO'), v_has_ndb            = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = 'NDBCluster'), 'NO'), v_has_ps             = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = 'PERFORMANCE_SCHEMA'), 'NO'), v_has_ps_replication = IF(v_has_ps = 'YES' AND EXISTS(SELECT 1 FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'performance_schema' AND TABLE_NAME = 'replication_applier_status'), 'YES', 'NO' ), v_has_replication    =  IF(v_has_ps_replication = 'YES', IF((SELECT COUNT(*) FROM performance_schema.replication_connection_status) > 0, 'YES', 'NO'), IF(@@master_info_repository = 'TABLE', IF((SELECT COUNT(*) FROM mysql.slave_master_info) > 0, 'YES', 'NO'), IF(@@relay_log_info_repository = 'TABLE', IF((SELECT COUNT(*) FROM mysql.slave_relay_log_info) > 0, 'YES', 'NO'), 'MAYBE')) ) , v_has_metrics        = IF(v_has_ps = 'YES' OR (sys.version_major() = 5 AND sys.version_minor() = 6), 'YES', 'NO'), v_has_ps_vars        = 'NO';   SET v_has_ps_vars = IF(@@global.show_compatibility_56, 'NO', 'YES');  SET v_has_ps_vars = 'YES';  IF (@sys.debug = 'ON') THEN SELECT v_has_innodb AS 'Has_InnoDB', v_has_ndb AS 'Has_NDBCluster', v_has_ps AS 'Has_Performance_Schema', v_has_ps_vars AS 'Has_P_S_SHOW_Variables', v_has_metrics AS 'Has_metrics', v_has_ps_replication 'AS Has_P_S_Replication', v_has_replication AS 'Has_Replication'; END IF;  IF (v_has_innodb IN ('DEFAULT', 'YES')) THEN SET @sys.diagnostics.sql = 'SHOW ENGINE InnoDB STATUS'; PREPARE stmt_innodb_status FROM @sys.diagnostics.sql; END IF;  IF (v_has_ps = 'YES') THEN SET @sys.diagnostics.sql = 'SHOW ENGINE PERFORMANCE_SCHEMA STATUS'; PREPARE stmt_ps_status FROM @sys.diagnostics.sql; END IF;  IF (v_has_ndb IN ('DEFAULT', 'YES')) THEN SET @sys.diagnostics.sql = 'SHOW ENGINE NDBCLUSTER STATUS'; PREPARE stmt_ndbcluster_status FROM @sys.diagnostics.sql; END IF;  SET @sys.diagnostics.sql_gen_query_template = 'SELECT CONCAT( ''SELECT '', GROUP_CONCAT( CASE WHEN (SUBSTRING(TABLE_NAME, 3), COLUMN_NAME) IN ( (''io_global_by_file_by_bytes'', ''total''), (''io_global_by_wait_by_bytes'', ''total_requested'') ) THEN CONCAT(''sys.format_bytes('', COLUMN_NAME, '') AS '', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -8) = ''_latency'' THEN CONCAT(''sys.format_time('', COLUMN_NAME, '') AS '', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -7) = ''_memory'' OR SUBSTRING(COLUMN_NAME, -17) = ''_memory_allocated'' OR ((SUBSTRING(COLUMN_NAME, -5) = ''_read'' OR SUBSTRING(COLUMN_NAME, -8) = ''_written'' OR SUBSTRING(COLUMN_NAME, -6) = ''_write'') AND SUBSTRING(COLUMN_NAME, 1, 6) <> ''COUNT_'') THEN CONCAT(''sys.format_bytes('', COLUMN_NAME, '') AS '', COLUMN_NAME) ELSE COLUMN_NAME END ORDER BY ORDINAL_POSITION SEPARATOR '',\n       '' ), ''\n  FROM tmp_'', SUBSTRING(TABLE_NAME FROM 3), ''_%{OUTPUT}'' ) AS Query INTO @sys.diagnostics.sql_select FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = ''sys'' AND TABLE_NAME = ? GROUP BY TABLE_NAME';  SET @sys.diagnostics.sql_gen_query_delta = 'SELECT CONCAT( ''SELECT '', GROUP_CONCAT( CASE WHEN FIND_IN_SET(COLUMN_NAME, diag.pk) THEN COLUMN_NAME WHEN diag.TABLE_NAME = ''io_global_by_file_by_bytes'' AND COLUMN_NAME = ''write_pct'' THEN CONCAT(''IFNULL(ROUND(100-(((e.total_read-IFNULL(s.total_read, 0))'', ''/NULLIF(((e.total_read-IFNULL(s.total_read, 0))+(e.total_written-IFNULL(s.total_written, 0))), 0))*100), 2), 0.00) AS '', COLUMN_NAME) WHEN (diag.TABLE_NAME, COLUMN_NAME) IN ( (''io_global_by_file_by_bytes'', ''total''), (''io_global_by_wait_by_bytes'', ''total_requested'') ) THEN CONCAT(''sys.format_bytes(e.'', COLUMN_NAME, ''-IFNULL(s.'', COLUMN_NAME, '', 0)) AS '', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, 1, 4) IN (''max_'', ''min_'') AND SUBSTRING(COLUMN_NAME, -8) = ''_latency'' THEN CONCAT(''sys.format_time(e.'', COLUMN_NAME, '') AS '', COLUMN_NAME) WHEN COLUMN_NAME = ''avg_latency'' THEN CONCAT(''sys.format_time((e.total_latency - IFNULL(s.total_latency, 0))'', ''/NULLIF(e.total - IFNULL(s.total, 0), 0)) AS '', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -12) = ''_avg_latency'' THEN CONCAT(''sys.format_time((e.'', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), ''_latency - IFNULL(s.'', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), ''_latency, 0))'', ''/NULLIF(e.'', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), ''s - IFNULL(s.'', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), ''s, 0), 0)) AS '', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -8) = ''_latency'' THEN CONCAT(''sys.format_time(e.'', COLUMN_NAME, '' - IFNULL(s.'', COLUMN_NAME, '', 0)) AS '', COLUMN_NAME) WHEN COLUMN_NAME IN (''avg_read'', ''avg_write'', ''avg_written'') THEN CONCAT(''sys.format_bytes(IFNULL((e.total_'', IF(COLUMN_NAME = ''avg_read'', ''read'', ''written''), ''-IFNULL(s.total_'', IF(COLUMN_NAME = ''avg_read'', ''read'', ''written''), '', 0))'', ''/NULLIF(e.count_'', IF(COLUMN_NAME = ''avg_read'', ''read'', ''write''), ''-IFNULL(s.count_'', IF(COLUMN_NAME = ''avg_read'', ''read'', ''write''), '', 0), 0), 0)) AS '', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -7) = ''_memory'' OR SUBSTRING(COLUMN_NAME, -17) = ''_memory_allocated'' OR ((SUBSTRING(COLUMN_NAME, -5) = ''_read'' OR SUBSTRING(COLUMN_NAME, -8) = ''_written'' OR SUBSTRING(COLUMN_NAME, -6) = ''_write'') AND SUBSTRING(COLUMN_NAME, 1, 6) <> ''COUNT_'') THEN CONCAT(''sys.format_bytes(e.'', COLUMN_NAME, '' - IFNULL(s.'', COLUMN_NAME, '', 0)) AS '', COLUMN_NAME) ELSE CONCAT(''(e.'', COLUMN_NAME, '' - IFNULL(s.'', COLUMN_NAME, '', 0)) AS '', COLUMN_NAME) END ORDER BY ORDINAL_POSITION SEPARATOR '',\n       '' ), ''\n  FROM tmp_'', diag.TABLE_NAME, ''_end e LEFT OUTER JOIN tmp_'', diag.TABLE_NAME, ''_start s USING ('', diag.pk, '')'' ) AS Query INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta diag INNER JOIN information_schema.COLUMNS c ON c.TABLE_NAME = CONCAT(''x$'', diag.TABLE_NAME) WHERE c.TABLE_SCHEMA = ''sys'' AND diag.TABLE_NAME = ? GROUP BY diag.TABLE_NAME';  IF (v_has_ps = 'YES') THEN DROP TEMPORARY TABLE IF EXISTS tmp_sys_views_delta; CREATE TEMPORARY TABLE tmp_sys_views_delta ( TABLE_NAME varchar(64) NOT NULL, order_by text COMMENT 'ORDER BY clause for the initial and overall views', order_by_delta text COMMENT 'ORDER BY clause for the delta views', where_delta text COMMENT 'WHERE clause to use for delta views to only include rows with a "count" > 0', limit_rows int unsigned COMMENT 'The maximum number of rows to include for the view', pk varchar(128) COMMENT 'Used with the FIND_IN_SET() function so use comma separated list without whitespace', PRIMARY KEY (TABLE_NAME) );  IF (@sys.debug = 'ON') THEN SELECT 'Populating tmp_sys_views_delta' AS 'Debug'; END IF; INSERT INTO tmp_sys_views_delta VALUES ('host_summary'                       , '%{TABLE}.statement_latency DESC', '(e.statement_latency-IFNULL(s.statement_latency, 0)) DESC', '(e.statements - IFNULL(s.statements, 0)) > 0', NULL, 'host'), ('host_summary_by_file_io'            , '%{TABLE}.io_latency DESC', '(e.io_latency-IFNULL(s.io_latency, 0)) DESC', '(e.ios - IFNULL(s.ios, 0)) > 0', NULL, 'host'), ('host_summary_by_file_io_type'       , '%{TABLE}.host, %{TABLE}.total_latency DESC', 'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'host,event_name'), ('host_summary_by_stages'             , '%{TABLE}.host, %{TABLE}.total_latency DESC', 'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'host,event_name'), ('host_summary_by_statement_latency'  , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'host'), ('host_summary_by_statement_type'     , '%{TABLE}.host, %{TABLE}.total_latency DESC', 'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'host,statement'), ('io_by_thread_by_latency'            , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'user,thread_id,processlist_id'), ('io_global_by_file_by_bytes'         , '%{TABLE}.total DESC', '(e.total-IFNULL(s.total, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', 100, 'file'), ('io_global_by_file_by_latency'       , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', 100, 'file'), ('io_global_by_wait_by_bytes'         , '%{TABLE}.total_requested DESC', '(e.total_requested-IFNULL(s.total_requested, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'event_name'), ('io_global_by_wait_by_latency'       , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'event_name'), ('schema_index_statistics'            , '(%{TABLE}.select_latency+%{TABLE}.insert_latency+%{TABLE}.update_latency+%{TABLE}.delete_latency) DESC', '((e.select_latency+e.insert_latency+e.update_latency+e.delete_latency)-IFNULL(s.select_latency+s.insert_latency+s.update_latency+s.delete_latency, 0)) DESC', '((e.rows_selected+e.insert_latency+e.rows_updated+e.rows_deleted)-IFNULL(s.rows_selected+s.rows_inserted+s.rows_updated+s.rows_deleted, 0)) > 0', 100, 'table_schema,table_name,index_name'), ('schema_table_statistics'            , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) > 0', 100, 'table_schema,table_name'), ('schema_tables_with_full_table_scans', '%{TABLE}.rows_full_scanned DESC', '(e.rows_full_scanned-IFNULL(s.rows_full_scanned, 0)) DESC', '(e.rows_full_scanned-IFNULL(s.rows_full_scanned, 0)) > 0', 100, 'object_schema,object_name'), ('user_summary'                       , '%{TABLE}.statement_latency DESC', '(e.statement_latency-IFNULL(s.statement_latency, 0)) DESC', '(e.statements - IFNULL(s.statements, 0)) > 0', NULL, 'user'), ('user_summary_by_file_io'            , '%{TABLE}.io_latency DESC', '(e.io_latency-IFNULL(s.io_latency, 0)) DESC', '(e.ios - IFNULL(s.ios, 0)) > 0', NULL, 'user'), ('user_summary_by_file_io_type'       , '%{TABLE}.user, %{TABLE}.latency DESC', 'e.user, (e.latency-IFNULL(s.latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'user,event_name'), ('user_summary_by_stages'             , '%{TABLE}.user, %{TABLE}.total_latency DESC', 'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'user,event_name'), ('user_summary_by_statement_latency'  , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'user'), ('user_summary_by_statement_type'     , '%{TABLE}.user, %{TABLE}.total_latency DESC', 'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'user,statement'), ('wait_classes_global_by_avg_latency' , 'IFNULL(%{TABLE}.total_latency / NULLIF(%{TABLE}.total, 0), 0) DESC', 'IFNULL((e.total_latency-IFNULL(s.total_latency, 0)) / NULLIF((e.total - IFNULL(s.total, 0)), 0), 0) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'event_class'), ('wait_classes_global_by_latency'     , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'event_class'), ('waits_by_host_by_latency'           , '%{TABLE}.host, %{TABLE}.total_latency DESC', 'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'host,event'), ('waits_by_user_by_latency'           , '%{TABLE}.user, %{TABLE}.total_latency DESC', 'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'user,event'), ('waits_global_by_latency'            , '%{TABLE}.total_latency DESC', '(e.total_latency-IFNULL(s.total_latency, 0)) DESC', '(e.total - IFNULL(s.total, 0)) > 0', NULL, 'events') ; END IF;   SELECT '  =======================  Configuration  =======================  ' AS ''; SELECT 'GLOBAL VARIABLES' AS 'The following output is:'; IF (v_has_ps_vars = 'YES') THEN SELECT LOWER(VARIABLE_NAME) AS Variable_name, VARIABLE_VALUE AS Variable_value FROM performance_schema.global_variables ORDER BY VARIABLE_NAME; ELSE SELECT LOWER(VARIABLE_NAME) AS Variable_name, VARIABLE_VALUE AS Variable_value FROM information_schema.GLOBAL_VARIABLES ORDER BY VARIABLE_NAME; END IF;  IF (v_has_ps = 'YES') THEN SELECT 'Performance Schema Setup - Actors' AS 'The following output is:'; SELECT * FROM performance_schema.setup_actors;  SELECT 'Performance Schema Setup - Consumers' AS 'The following output is:'; SELECT NAME AS Consumer, ENABLED, sys.ps_is_consumer_enabled(NAME) AS COLLECTS FROM performance_schema.setup_consumers;  SELECT 'Performance Schema Setup - Instruments' AS 'The following output is:'; SELECT SUBSTRING_INDEX(NAME, '/', 2) AS 'InstrumentClass', ROUND(100*SUM(IF(ENABLED = 'YES', 1, 0))/COUNT(*), 2) AS 'EnabledPct', ROUND(100*SUM(IF(TIMED = 'YES', 1, 0))/COUNT(*), 2) AS 'TimedPct' FROM performance_schema.setup_instruments GROUP BY SUBSTRING_INDEX(NAME, '/', 2) ORDER BY SUBSTRING_INDEX(NAME, '/', 2);  SELECT 'Performance Schema Setup - Objects' AS 'The following output is:'; SELECT * FROM performance_schema.setup_objects;  SELECT 'Performance Schema Setup - Threads' AS 'The following output is:'; SELECT `TYPE` AS ThreadType, COUNT(*) AS 'Total', ROUND(100*SUM(IF(INSTRUMENTED = 'YES', 1, 0))/COUNT(*), 2) AS 'InstrumentedPct' FROM performance_schema.threads GROUP BY TYPE; END IF;   IF (v_has_replication = 'NO') THEN SELECT 'No Replication Configured' AS 'Replication Status'; ELSE SELECT CONCAT('Replication Configured: ', v_has_replication, ' - Performance Schema Replication Tables: ', v_has_ps_replication) AS 'Replication Status';  IF (v_has_ps_replication = 'YES') THEN SELECT 'Replication - Connection Configuration' AS 'The following output is:'; SELECT * FROM performance_schema.replication_connection_configuration ORDER BY CHANNEL_NAME ; END IF;  IF (v_has_ps_replication = 'YES') THEN SELECT 'Replication - Applier Configuration' AS 'The following output is:'; SELECT * FROM performance_schema.replication_applier_configuration ORDER BY CHANNEL_NAME; END IF;  IF (@@master_info_repository = 'TABLE') THEN SELECT 'Replication - Master Info Repository Configuration' AS 'The following output is:'; SELECT  Channel_name, Host, User_name, Port, Connect_retry, Enabled_ssl, Ssl_ca, Ssl_capath, Ssl_cert, Ssl_cipher, Ssl_key, Ssl_verify_server_cert, Heartbeat, Bind, Ignored_server_ids, Uuid, Retry_count, Ssl_crl, Ssl_crlpath, Tls_version, Enabled_auto_position FROM mysql.slave_master_info ORDER BY Channel_name ; END IF;  IF (@@relay_log_info_repository = 'TABLE') THEN SELECT 'Replication - Relay Log Repository Configuration' AS 'The following output is:'; SELECT  Channel_name, Sql_delay, Number_of_workers, Id FROM mysql.slave_relay_log_info ORDER BY Channel_name ; END IF; END IF;   IF (v_has_ndb IN ('DEFAULT', 'YES')) THEN SELECT 'Cluster Thread Blocks' AS 'The following output is:'; SELECT * FROM ndbinfo.threadblocks; END IF;  IF (v_has_ps = 'YES') THEN IF (@sys.diagnostics.include_raw = 'ON') THEN SELECT '  ========================  Initial Status  ========================  ' AS ''; END IF;  DROP TEMPORARY TABLE IF EXISTS tmp_digests_start; CALL sys.statement_performance_analyzer('create_tmp', 'tmp_digests_start', NULL); CALL sys.statement_performance_analyzer('snapshot', NULL, NULL); CALL sys.statement_performance_analyzer('save', 'tmp_digests_start', NULL);  IF (@sys.diagnostics.include_raw = 'ON') THEN SET @sys.diagnostics.sql = REPLACE(@sys.diagnostics.sql_gen_query_template, '%{OUTPUT}', 'start'); IF (@sys.debug = 'ON') THEN SELECT 'The following query will be used to generate the query for each sys view' AS 'Debug'; SELECT @sys.diagnostics.sql AS 'Debug'; END IF; PREPARE stmt_gen_query FROM @sys.diagnostics.sql; END IF; SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  IF (@sys.debug = 'ON') THEN SELECT CONCAT('The following queries are for storing the initial content of ', v_table_name) AS 'Debug'; END IF;  CALL sys.execute_prepared_stmt(CONCAT('DROP TEMPORARY TABLE IF EXISTS `tmp_', v_table_name, '_start`')); CALL sys.execute_prepared_stmt(CONCAT('CREATE TEMPORARY TABLE `tmp_', v_table_name, '_start` SELECT * FROM `sys`.`x$', v_table_name, '`'));  IF (@sys.diagnostics.include_raw = 'ON') THEN SET @sys.diagnostics.table_name = CONCAT('x$', v_table_name); EXECUTE stmt_gen_query USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(order_by IS NOT NULL, CONCAT('\n ORDER BY ', REPLACE(order_by, '%{TABLE}', CONCAT('tmp_', v_table_name, '_start'))), ''), IF(limit_rows IS NOT NULL, CONCAT('\n LIMIT ', limit_rows), '') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name; SELECT CONCAT('Initial ', v_table_name) AS 'The following output is:'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select); END IF; END LOOP; CLOSE c_sysviews_w_delta;  IF (@sys.diagnostics.include_raw = 'ON') THEN DEALLOCATE PREPARE stmt_gen_query; END IF; END IF;  SET v_sql_status_summary_select = 'SELECT Variable_name', v_sql_status_summary_delta  = '', v_sql_status_summary_from   = '';  REPEAT  SET v_output_count = v_output_count + 1; IF (v_output_count > 1) THEN SET v_sleep = in_interval-(UNIX_TIMESTAMP(NOW(2))-v_iter_start); SELECT NOW() AS 'Time', CONCAT('Going to sleep for ', v_sleep, ' seconds. Please do not interrupt') AS 'The following output is:'; DO SLEEP(in_interval); END IF; SET v_iter_start = UNIX_TIMESTAMP(NOW(2));  SELECT NOW(), CONCAT('Iteration Number ', IFNULL(v_output_count, 'NULL')) AS 'The following output is:';  IF (@@log_bin = 1) THEN SELECT 'SHOW MASTER STATUS' AS 'The following output is:'; SHOW MASTER STATUS; END IF;  IF (v_has_replication <> 'NO') THEN SELECT 'SHOW SLAVE STATUS' AS 'The following output is:'; SHOW SLAVE STATUS;  IF (v_has_ps_replication = 'YES') THEN SELECT 'Replication Connection Status' AS 'The following output is:'; SELECT * FROM performance_schema.replication_connection_status;  SELECT 'Replication Applier Status' AS 'The following output is:'; SELECT * FROM performance_schema.replication_applier_status ORDER BY CHANNEL_NAME;  SELECT 'Replication Applier Status - Coordinator' AS 'The following output is:'; SELECT * FROM performance_schema.replication_applier_status_by_coordinator ORDER BY CHANNEL_NAME;  SELECT 'Replication Applier Status - Worker' AS 'The following output is:'; SELECT * FROM performance_schema.replication_applier_status_by_worker ORDER BY CHANNEL_NAME, WORKER_ID; END IF;  IF (@@master_info_repository = 'TABLE') THEN SELECT 'Replication - Master Log Status' AS 'The following output is:'; SELECT Master_log_name, Master_log_pos FROM mysql.slave_master_info; END IF;  IF (@@relay_log_info_repository = 'TABLE') THEN SELECT 'Replication - Relay Log Status' AS 'The following output is:'; SELECT sys.format_path(Relay_log_name) AS Relay_log_name, Relay_log_pos, Master_log_name, Master_log_pos FROM mysql.slave_relay_log_info;  SELECT 'Replication - Worker Status' AS 'The following output is:'; SELECT Id, sys.format_path(Relay_log_name) AS Relay_log_name, Relay_log_pos, Master_log_name, Master_log_pos, sys.format_path(Checkpoint_relay_log_name) AS Checkpoint_relay_log_name, Checkpoint_relay_log_pos, Checkpoint_master_log_name, Checkpoint_master_log_pos, Checkpoint_seqno, Checkpoint_group_size, HEX(Checkpoint_group_bitmap) AS Checkpoint_group_bitmap , Channel_name FROM mysql.slave_worker_info ORDER BY  Channel_name, Id; END IF; END IF;  SET v_table_name = CONCAT('tmp_metrics_', v_output_count); CALL sys.execute_prepared_stmt(CONCAT('DROP TEMPORARY TABLE IF EXISTS ', v_table_name));  CALL sys.execute_prepared_stmt(CONCAT('CREATE TEMPORARY TABLE ', v_table_name, ' ( Variable_name VARCHAR(193) NOT NULL, Variable_value VARCHAR(1024), Type VARCHAR(225) NOT NULL, Enabled ENUM(''YES'', ''NO'', ''PARTIAL'') NOT NULL, PRIMARY KEY (Type, Variable_name) ) ENGINE = InnoDB DEFAULT CHARSET=utf8'));  IF (v_has_metrics) THEN SET @sys.diagnostics.sql = CONCAT( 'INSERT INTO ', v_table_name, ' SELECT Variable_name, REPLACE(Variable_value, ''\n'', ''\\\\n'') AS Variable_value, Type, Enabled FROM sys.metrics' ); ELSE SET @sys.diagnostics.sql = CONCAT( 'INSERT INTO ', v_table_name, '(SELECT LOWER(VARIABLE_NAME) AS Variable_name, REPLACE(VARIABLE_VALUE, ''\n'', ''\\\\n'') AS Variable_value, ''Global Status'' AS Type, ''YES'' AS Enabled FROM performance_schema.global_status ) UNION ALL ( SELECT NAME AS Variable_name, COUNT AS Variable_value, CONCAT(''InnoDB Metrics - '', SUBSYSTEM) AS Type, IF(STATUS = ''enabled'', ''YES'', ''NO'') AS Enabled FROM information_schema.INNODB_METRICS WHERE NAME NOT IN ( ''lock_row_lock_time'', ''lock_row_lock_time_avg'', ''lock_row_lock_time_max'', ''lock_row_lock_waits'', ''buffer_pool_reads'', ''buffer_pool_read_requests'', ''buffer_pool_write_requests'', ''buffer_pool_wait_free'', ''buffer_pool_read_ahead'', ''buffer_pool_read_ahead_evicted'', ''buffer_pool_pages_total'', ''buffer_pool_pages_misc'', ''buffer_pool_pages_data'', ''buffer_pool_bytes_data'', ''buffer_pool_pages_dirty'', ''buffer_pool_bytes_dirty'', ''buffer_pool_pages_free'', ''buffer_pages_created'', ''buffer_pages_written'', ''buffer_pages_read'', ''buffer_data_reads'', ''buffer_data_written'', ''file_num_open_files'', ''os_log_bytes_written'', ''os_log_fsyncs'', ''os_log_pending_fsyncs'', ''os_log_pending_writes'', ''log_waits'', ''log_write_requests'', ''log_writes'', ''innodb_dblwr_writes'', ''innodb_dblwr_pages_written'', ''innodb_page_size'') ) UNION ALL ( SELECT ''NOW()'' AS Variable_name, NOW(3) AS Variable_value, ''System Time'' AS Type, ''YES'' AS Enabled ) UNION ALL ( SELECT ''UNIX_TIMESTAMP()'' AS Variable_name, ROUND(UNIX_TIMESTAMP(NOW(3)), 3) AS Variable_value, ''System Time'' AS Type, ''YES'' AS Enabled ) ORDER BY Type, Variable_name;' ); END IF; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql);  CALL sys.execute_prepared_stmt( CONCAT('(SELECT Variable_value INTO @sys.diagnostics.output_time FROM ', v_table_name, ' WHERE Type = ''System Time'' AND Variable_name = ''UNIX_TIMESTAMP()'')') ); SET v_output_time = @sys.diagnostics.output_time;  SET v_sql_status_summary_select = CONCAT(v_sql_status_summary_select, ', CONCAT( LEFT(s', v_output_count, '.Variable_value, ', v_status_summary_width, '), IF(', REPLACE(v_no_delta_names, '%{COUNT}', v_output_count), ' AND s', v_output_count, '.Variable_value REGEXP ''^[0-9]+(\\\\.[0-9]+)?$'', CONCAT('' ('', ROUND(s', v_output_count, '.Variable_value/', v_output_time, ', 2), ''/sec)''), '''') ) AS ''Output ', v_output_count, ''''), v_sql_status_summary_from   = CONCAT(v_sql_status_summary_from, ' ', IF(v_output_count = 1, '  FROM ', '       INNER JOIN '), v_table_name, ' s', v_output_count, IF (v_output_count = 1, '', ' USING (Type, Variable_name)')); IF (v_output_count > 1) THEN SET v_sql_status_summary_delta  = CONCAT(v_sql_status_summary_delta, ', IF(', REPLACE(v_no_delta_names, '%{COUNT}', v_output_count), ' AND s', (v_output_count-1), '.Variable_value REGEXP ''^[0-9]+(\\\\.[0-9]+)?$'' AND s', v_output_count, '.Variable_value REGEXP ''^[0-9]+(\\\\.[0-9]+)?$'', CONCAT(IF(s', (v_output_count-1), '.Variable_value REGEXP ''^[0-9]+\\\\.[0-9]+$'' OR s', v_output_count, '.Variable_value REGEXP ''^[0-9]+\\\\.[0-9]+$'', ROUND((s', v_output_count, '.Variable_value-s', (v_output_count-1), '.Variable_value), 2), (s', v_output_count, '.Variable_value-s', (v_output_count-1), '.Variable_value) ), '' ('', ROUND((s', v_output_count, '.Variable_value-s', (v_output_count-1), '.Variable_value)/(', v_output_time, '-', v_output_time_prev, '), 2), ''/sec)'' ), '''' ) AS ''Delta (', (v_output_count-1), ' -> ', v_output_count, ')'''); END IF;  SET v_output_time_prev = v_output_time;  IF (@sys.diagnostics.include_raw = 'ON') THEN IF (v_has_metrics) THEN SELECT 'SELECT * FROM sys.metrics' AS 'The following output is:'; ELSE SELECT 'sys.metrics equivalent' AS 'The following output is:'; END IF; CALL sys.execute_prepared_stmt(CONCAT('SELECT Type, Variable_name, Enabled, Variable_value FROM ', v_table_name, ' ORDER BY Type, Variable_name')); END IF;  IF (v_has_innodb IN ('DEFAULT', 'YES')) THEN SELECT 'SHOW ENGINE INNODB STATUS' AS 'The following output is:'; EXECUTE stmt_innodb_status; SELECT 'InnoDB - Transactions' AS 'The following output is:'; SELECT * FROM information_schema.INNODB_TRX; END IF;  IF (v_has_ndb IN ('DEFAULT', 'YES')) THEN SELECT 'SHOW ENGINE NDBCLUSTER STATUS' AS 'The following output is:'; EXECUTE stmt_ndbcluster_status;  SELECT 'ndbinfo.memoryusage' AS 'The following output is:'; SELECT node_id, memory_type, sys.format_bytes(used) AS used, used_pages, sys.format_bytes(total) AS total, total_pages, ROUND(100*(used/total), 2) AS 'Used %' FROM ndbinfo.memoryusage;  SET v_done = FALSE; OPEN c_ndbinfo; c_ndbinfo_loop: LOOP FETCH c_ndbinfo INTO v_table_name; IF v_done THEN LEAVE c_ndbinfo_loop; END IF;  SELECT CONCAT('SELECT * FROM ndbinfo.', v_table_name) AS 'The following output is:'; CALL sys.execute_prepared_stmt(CONCAT('SELECT * FROM `ndbinfo`.`', v_table_name, '`')); END LOOP; CLOSE c_ndbinfo;  SELECT * FROM information_schema.FILES; END IF;  SELECT 'SELECT * FROM sys.processlist' AS 'The following output is:'; SELECT processlist.* FROM sys.processlist;  IF (v_has_ps = 'YES') THEN IF (sys.ps_is_consumer_enabled('events_waits_history_long') = 'YES') THEN SELECT 'SELECT * FROM sys.latest_file_io' AS 'The following output is:'; SELECT * FROM sys.latest_file_io; END IF;  IF (EXISTS(SELECT 1 FROM performance_schema.setup_instruments WHERE NAME LIKE 'memory/%' AND ENABLED = 'YES')) THEN SELECT 'SELECT * FROM sys.memory_by_host_by_current_bytes' AS 'The following output is:'; SELECT * FROM sys.memory_by_host_by_current_bytes;  SELECT 'SELECT * FROM sys.memory_by_thread_by_current_bytes' AS 'The following output is:'; SELECT * FROM sys.memory_by_thread_by_current_bytes;  SELECT 'SELECT * FROM sys.memory_by_user_by_current_bytes' AS 'The following output is:'; SELECT * FROM sys.memory_by_user_by_current_bytes;  SELECT 'SELECT * FROM sys.memory_global_by_current_bytes' AS 'The following output is:'; SELECT * FROM sys.memory_global_by_current_bytes; END IF; END IF;  SET v_runtime = (UNIX_TIMESTAMP(NOW(2)) - v_start); UNTIL (v_runtime + in_interval >= in_max_runtime) END REPEAT;  IF (v_has_ps = 'YES') THEN SELECT 'SHOW ENGINE PERFORMANCE_SCHEMA STATUS' AS 'The following output is:'; EXECUTE stmt_ps_status; END IF;  IF (v_has_innodb IN ('DEFAULT', 'YES')) THEN DEALLOCATE PREPARE stmt_innodb_status; END IF; IF (v_has_ps = 'YES') THEN DEALLOCATE PREPARE stmt_ps_status; END IF; IF (v_has_ndb IN ('DEFAULT', 'YES')) THEN DEALLOCATE PREPARE stmt_ndbcluster_status; END IF;   SELECT '  ============================  Schema Information  ============================  ' AS '';  SELECT COUNT(*) AS 'Total Number of Tables' FROM information_schema.TABLES;  IF (@sys.diagnostics.allow_i_s_tables = 'ON') THEN SELECT 'Storage Engine Usage' AS 'The following output is:'; SELECT ENGINE, COUNT(*) AS NUM_TABLES, sys.format_bytes(SUM(DATA_LENGTH)) AS DATA_LENGTH, sys.format_bytes(SUM(INDEX_LENGTH)) AS INDEX_LENGTH, sys.format_bytes(SUM(DATA_LENGTH+INDEX_LENGTH)) AS TOTAL FROM information_schema.TABLES GROUP BY ENGINE;  SELECT 'Schema Object Overview' AS 'The following output is:'; SELECT * FROM sys.schema_object_overview;  SELECT 'Tables without a PRIMARY KEY' AS 'The following output is:'; SELECT TABLES.TABLE_SCHEMA, ENGINE, COUNT(*) AS NumTables FROM information_schema.TABLES LEFT OUTER JOIN information_schema.STATISTICS ON STATISTICS.TABLE_SCHEMA = TABLES.TABLE_SCHEMA AND STATISTICS.TABLE_NAME = TABLES.TABLE_NAME AND STATISTICS.INDEX_NAME = 'PRIMARY' WHERE STATISTICS.TABLE_NAME IS NULL AND TABLES.TABLE_SCHEMA NOT IN ('mysql', 'information_schema', 'performance_schema', 'sys') AND TABLES.TABLE_TYPE = 'BASE TABLE' GROUP BY TABLES.TABLE_SCHEMA, ENGINE; END IF;  IF (v_has_ps = 'YES') THEN SELECT 'Unused Indexes' AS 'The following output is:'; SELECT object_schema, COUNT(*) AS NumUnusedIndexes FROM performance_schema.table_io_waits_summary_by_index_usage  WHERE index_name IS NOT NULL AND count_star = 0 AND object_schema NOT IN ('mysql', 'sys') AND index_name != 'PRIMARY' GROUP BY object_schema; END IF;  IF (v_has_ps = 'YES') THEN SELECT '  =========================  Overall Status  =========================  ' AS '';  SELECT 'CALL sys.ps_statement_avg_latency_histogram()' AS 'The following output is:'; CALL sys.ps_statement_avg_latency_histogram();  CALL sys.statement_performance_analyzer('snapshot', NULL, NULL); CALL sys.statement_performance_analyzer('overall', NULL, 'with_runtimes_in_95th_percentile');  SET @sys.diagnostics.sql = REPLACE(@sys.diagnostics.sql_gen_query_template, '%{OUTPUT}', 'end'); IF (@sys.debug = 'ON') THEN SELECT 'The following query will be used to generate the query for each sys view' AS 'Debug'; SELECT @sys.diagnostics.sql AS 'Debug'; END IF; PREPARE stmt_gen_query FROM @sys.diagnostics.sql;  SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  IF (@sys.debug = 'ON') THEN SELECT CONCAT('The following queries are for storing the final content of ', v_table_name) AS 'Debug'; END IF;  CALL sys.execute_prepared_stmt(CONCAT('DROP TEMPORARY TABLE IF EXISTS `tmp_', v_table_name, '_end`')); CALL sys.execute_prepared_stmt(CONCAT('CREATE TEMPORARY TABLE `tmp_', v_table_name, '_end` SELECT * FROM `sys`.`x$', v_table_name, '`'));  IF (@sys.diagnostics.include_raw = 'ON') THEN SET @sys.diagnostics.table_name = CONCAT('x$', v_table_name); EXECUTE stmt_gen_query USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(order_by IS NOT NULL, CONCAT('\n ORDER BY ', REPLACE(order_by, '%{TABLE}', CONCAT('tmp_', v_table_name, '_end'))), ''), IF(limit_rows IS NOT NULL, CONCAT('\n LIMIT ', limit_rows), '') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name; SELECT CONCAT('Overall ', v_table_name) AS 'The following output is:'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select); END IF; END LOOP; CLOSE c_sysviews_w_delta;  DEALLOCATE PREPARE stmt_gen_query;   SELECT '  ======================  Delta Status  ======================  ' AS '';  CALL sys.statement_performance_analyzer('delta', 'tmp_digests_start', 'with_runtimes_in_95th_percentile'); CALL sys.statement_performance_analyzer('cleanup', NULL, NULL);  DROP TEMPORARY TABLE tmp_digests_start;  IF (@sys.debug = 'ON') THEN SELECT 'The following query will be used to generate the query for each sys view delta' AS 'Debug'; SELECT @sys.diagnostics.sql_gen_query_delta AS 'Debug'; END IF; PREPARE stmt_gen_query_delta FROM @sys.diagnostics.sql_gen_query_delta;  SET v_old_group_concat_max_len = @@session.group_concat_max_len; SET @@session.group_concat_max_len = 2048; SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  SET @sys.diagnostics.table_name = v_table_name; EXECUTE stmt_gen_query_delta USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(where_delta IS NOT NULL, CONCAT('\n WHERE ', where_delta), ''), IF(order_by_delta IS NOT NULL, CONCAT('\n ORDER BY ', order_by_delta), ''), IF(limit_rows IS NOT NULL, CONCAT('\n LIMIT ', limit_rows), '') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name;  SELECT CONCAT('Delta ', v_table_name) AS 'The following output is:'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select);  CALL sys.execute_prepared_stmt(CONCAT('DROP TEMPORARY TABLE `tmp_', v_table_name, '_end`')); CALL sys.execute_prepared_stmt(CONCAT('DROP TEMPORARY TABLE `tmp_', v_table_name, '_start`')); END LOOP; CLOSE c_sysviews_w_delta; SET @@session.group_concat_max_len = v_old_group_concat_max_len;  DEALLOCATE PREPARE stmt_gen_query_delta; DROP TEMPORARY TABLE tmp_sys_views_delta; END IF;  IF (v_has_metrics) THEN SELECT 'SELECT * FROM sys.metrics' AS 'The following output is:'; ELSE SELECT 'sys.metrics equivalent' AS 'The following output is:'; END IF; CALL sys.execute_prepared_stmt( CONCAT(v_sql_status_summary_select, v_sql_status_summary_delta, ', Type, s1.Enabled', v_sql_status_summary_from, ' ORDER BY Type, Variable_name' ) );  SET v_count = 0; WHILE (v_count < v_output_count) DO SET v_count = v_count + 1; SET v_table_name = CONCAT('tmp_metrics_', v_count); CALL sys.execute_prepared_stmt(CONCAT('DROP TEMPORARY TABLE IF EXISTS ', v_table_name)); END WHILE;  IF (in_auto_config <> 'current') THEN CALL sys.ps_setup_reload_saved(); SET sql_log_bin = @log_bin; END IF;  SET @sys.diagnostics.output_time            = NULL, @sys.diagnostics.sql                    = NULL, @sys.diagnostics.sql_gen_query_delta    = NULL, @sys.diagnostics.sql_gen_query_template = NULL, @sys.diagnostics.sql_select             = NULL, @sys.diagnostics.table_name             = NULL;  IF (v_this_thread_enabled = 'YES') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  IF (@log_bin = 1) THEN SET sql_log_bin = @log_bin; END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `execute_prepared_stmt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `execute_prepared_stmt`( IN in_query longtext CHARACTER SET UTF8 )
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Takes the query in the argument and executes it using a prepared statement. The prepared statement is deallocated,\n so the procedure is mainly useful for executing one off dynamically created queries.\n \n The sys_execute_prepared_stmt prepared statement name is used for the query and is required not to exist.\n \n \n Parameters\n \n in_query (longtext CHARACTER SET UTF8):\n The query to execute.\n \n \n Configuration Options\n \n sys.debug\n Whether to provide debugging output.\n Default is ''OFF''. Set to ''ON'' to include.\n \n \n Example\n \n mysql> CALL sys.execute_prepared_stmt(''SELECT * FROM sys.sys_config'');\n +------------------------+-------+---------------------+--------+\n | variable               | value | set_time            | set_by |\n +------------------------+-------+---------------------+--------+\n | statement_truncate_len | 64    | 2015-06-30 13:06:00 | NULL   |\n +------------------------+-------+---------------------+--------+\n 1 row in set (0.00 sec)\n \n Query OK, 0 rows affected (0.00 sec)\n '
BEGIN IF (@sys.debug IS NULL) THEN SET @sys.debug = sys.sys_get_config('debug', 'OFF'); END IF;  IF (in_query IS NULL OR LENGTH(in_query) < 4) THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "The @sys.execute_prepared_stmt.sql must contain a query"; END IF;  SET @sys.execute_prepared_stmt.sql = in_query;  IF (@sys.debug = 'ON') THEN SELECT @sys.execute_prepared_stmt.sql AS 'Debug'; END IF; PREPARE sys_execute_prepared_stmt FROM @sys.execute_prepared_stmt.sql; EXECUTE sys_execute_prepared_stmt; DEALLOCATE PREPARE sys_execute_prepared_stmt;  SET @sys.execute_prepared_stmt.sql = NULL; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_disable_background_threads` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_disable_background_threads`()
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Disable all background thread instrumentation within Performance Schema.\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_setup_disable_background_threads();\n +--------------------------------+\n | summary                        |\n +--------------------------------+\n | Disabled 18 background threads |\n +--------------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN UPDATE performance_schema.threads SET instrumented = 'NO' WHERE type = 'BACKGROUND';  SELECT CONCAT('Disabled ', @rows := ROW_COUNT(), ' background thread', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_disable_consumer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_disable_consumer`( IN consumer VARCHAR(128) )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Disables consumers within Performance Schema \n matching the input pattern.\n \n Parameters\n \n consumer (VARCHAR(128)):\n A LIKE pattern match (using "%consumer%") of consumers to disable\n \n Example\n \n To disable all consumers:\n \n mysql> CALL sys.ps_setup_disable_consumer('''');\n +--------------------------+\n | summary                  |\n +--------------------------+\n | Disabled 15 consumers    |\n +--------------------------+\n 1 row in set (0.02 sec)\n \n To disable just the event_stage consumers:\n \n mysql> CALL sys.ps_setup_disable_comsumers(''stage'');\n +------------------------+\n | summary                |\n +------------------------+\n | Disabled 3 consumers   |\n +------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN UPDATE performance_schema.setup_consumers SET enabled = 'NO' WHERE name LIKE CONCAT('%', consumer, '%');  SELECT CONCAT('Disabled ', @rows := ROW_COUNT(), ' consumer', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_disable_instrument` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_disable_instrument`( IN in_pattern VARCHAR(128) )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Disables instruments within Performance Schema \n matching the input pattern.\n \n Parameters\n \n in_pattern (VARCHAR(128)):\n A LIKE pattern match (using "%in_pattern%") of events to disable\n \n Example\n \n To disable all mutex instruments:\n \n mysql> CALL sys.ps_setup_disable_instrument(''wait/synch/mutex'');\n +--------------------------+\n | summary                  |\n +--------------------------+\n | Disabled 155 instruments |\n +--------------------------+\n 1 row in set (0.02 sec)\n \n To disable just a specific TCP/IP based network IO instrument:\n \n mysql> CALL sys.ps_setup_disable_instrument(''wait/io/socket/sql/server_tcpip_socket'');\n +------------------------+\n | summary                |\n +------------------------+\n | Disabled 1 instruments |\n +------------------------+\n 1 row in set (0.00 sec)\n \n To disable all instruments:\n \n mysql> CALL sys.ps_setup_disable_instrument('''');\n +--------------------------+\n | summary                  |\n +--------------------------+\n | Disabled 547 instruments |\n +--------------------------+\n 1 row in set (0.01 sec)\n '
BEGIN UPDATE performance_schema.setup_instruments SET enabled = 'NO', timed = 'NO' WHERE name LIKE CONCAT('%', in_pattern, '%');  SELECT CONCAT('Disabled ', @rows := ROW_COUNT(), ' instrument', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_disable_thread` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_disable_thread`( IN in_connection_id BIGINT )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Disable the given connection/thread in Performance Schema.\n \n Parameters\n \n in_connection_id (BIGINT):\n The connection ID (PROCESSLIST_ID from performance_schema.threads\n or the ID shown within SHOW PROCESSLIST)\n \n Example\n \n mysql> CALL sys.ps_setup_disable_thread(3);\n +-------------------+\n | summary           |\n +-------------------+\n | Disabled 1 thread |\n +-------------------+\n 1 row in set (0.01 sec)\n \n To disable the current connection:\n \n mysql> CALL sys.ps_setup_disable_thread(CONNECTION_ID());\n +-------------------+\n | summary           |\n +-------------------+\n | Disabled 1 thread |\n +-------------------+\n 1 row in set (0.00 sec)\n '
BEGIN UPDATE performance_schema.threads SET instrumented = 'NO' WHERE processlist_id = in_connection_id;  SELECT CONCAT('Disabled ', @rows := ROW_COUNT(), ' thread', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_enable_background_threads` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_enable_background_threads`()
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Enable all background thread instrumentation within Performance Schema.\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_setup_enable_background_threads();\n +-------------------------------+\n | summary                       |\n +-------------------------------+\n | Enabled 18 background threads |\n +-------------------------------+\n 1 row in set (0.00 sec)\n '
BEGIN UPDATE performance_schema.threads SET instrumented = 'YES' WHERE type = 'BACKGROUND';  SELECT CONCAT('Enabled ', @rows := ROW_COUNT(), ' background thread', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_enable_consumer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_enable_consumer`( IN consumer VARCHAR(128) )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Enables consumers within Performance Schema \n matching the input pattern.\n \n Parameters\n \n consumer (VARCHAR(128)):\n A LIKE pattern match (using "%consumer%") of consumers to enable\n \n Example\n \n To enable all consumers:\n \n mysql> CALL sys.ps_setup_enable_consumer('''');\n +-------------------------+\n | summary                 |\n +-------------------------+\n | Enabled 10 consumers    |\n +-------------------------+\n 1 row in set (0.02 sec)\n \n Query OK, 0 rows affected (0.02 sec)\n \n To enable just "waits" consumers:\n \n mysql> CALL sys.ps_setup_enable_consumer(''waits'');\n +-----------------------+\n | summary               |\n +-----------------------+\n | Enabled 3 consumers   |\n +-----------------------+\n 1 row in set (0.00 sec)\n \n Query OK, 0 rows affected (0.00 sec)\n '
BEGIN UPDATE performance_schema.setup_consumers SET enabled = 'YES' WHERE name LIKE CONCAT('%', consumer, '%');  SELECT CONCAT('Enabled ', @rows := ROW_COUNT(), ' consumer', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_enable_instrument` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_enable_instrument`( IN in_pattern VARCHAR(128) )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Enables instruments within Performance Schema \n matching the input pattern.\n \n Parameters\n \n in_pattern (VARCHAR(128)):\n A LIKE pattern match (using "%in_pattern%") of events to enable\n \n Example\n \n To enable all mutex instruments:\n \n mysql> CALL sys.ps_setup_enable_instrument(''wait/synch/mutex'');\n +-------------------------+\n | summary                 |\n +-------------------------+\n | Enabled 155 instruments |\n +-------------------------+\n 1 row in set (0.02 sec)\n \n Query OK, 0 rows affected (0.02 sec)\n \n To enable just a specific TCP/IP based network IO instrument:\n \n mysql> CALL sys.ps_setup_enable_instrument(''wait/io/socket/sql/server_tcpip_socket'');\n +-----------------------+\n | summary               |\n +-----------------------+\n | Enabled 1 instruments |\n +-----------------------+\n 1 row in set (0.00 sec)\n \n Query OK, 0 rows affected (0.00 sec)\n \n To enable all instruments:\n \n mysql> CALL sys.ps_setup_enable_instrument('''');\n +-------------------------+\n | summary                 |\n +-------------------------+\n | Enabled 547 instruments |\n +-------------------------+\n 1 row in set (0.01 sec)\n \n Query OK, 0 rows affected (0.01 sec)\n '
BEGIN UPDATE performance_schema.setup_instruments SET enabled = 'YES', timed = 'YES' WHERE name LIKE CONCAT('%', in_pattern, '%');  SELECT CONCAT('Enabled ', @rows := ROW_COUNT(), ' instrument', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_enable_thread` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_enable_thread`( IN in_connection_id BIGINT )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Enable the given connection/thread in Performance Schema.\n \n Parameters\n \n in_connection_id (BIGINT):\n The connection ID (PROCESSLIST_ID from performance_schema.threads\n or the ID shown within SHOW PROCESSLIST)\n \n Example\n \n mysql> CALL sys.ps_setup_enable_thread(3);\n +------------------+\n | summary          |\n +------------------+\n | Enabled 1 thread |\n +------------------+\n 1 row in set (0.01 sec)\n \n To enable the current connection:\n \n mysql> CALL sys.ps_setup_enable_thread(CONNECTION_ID());\n +------------------+\n | summary          |\n +------------------+\n | Enabled 1 thread |\n +------------------+\n 1 row in set (0.00 sec)\n '
BEGIN UPDATE performance_schema.threads SET instrumented = 'YES' WHERE processlist_id = in_connection_id;  SELECT CONCAT('Enabled ', @rows := ROW_COUNT(), ' thread', IF(@rows != 1, 's', '')) AS summary; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_reload_saved` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_reload_saved`()
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Reloads a saved Performance Schema configuration,\n so that you can alter the setup for debugging purposes, \n but restore it to a previous state.\n \n Use the companion procedure - ps_setup_save(), to \n save a configuration.\n \n Requires the SUPER privilege for "SET sql_log_bin = 0;".\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_setup_save();\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> UPDATE performance_schema.setup_instruments SET enabled = ''YES'', timed = ''YES'';\n Query OK, 547 rows affected (0.40 sec)\n Rows matched: 784  Changed: 547  Warnings: 0\n \n /* Run some tests that need more detailed instrumentation here */\n \n mysql> CALL sys.ps_setup_reload_saved();\n Query OK, 0 rows affected (0.32 sec)\n '
BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_lock_result INT; DECLARE v_lock_used_by BIGINT; DECLARE v_signal_message TEXT; DECLARE EXIT HANDLER FOR SQLEXCEPTION BEGIN SIGNAL SQLSTATE VALUE '90001' SET MESSAGE_TEXT = 'An error occurred, was sys.ps_setup_save() run before this procedure?'; END;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT IS_USED_LOCK('sys.ps_setup_save') INTO v_lock_used_by;  IF (v_lock_used_by != CONNECTION_ID()) THEN SET v_signal_message = CONCAT('The sys.ps_setup_save lock is currently owned by ', v_lock_used_by); SIGNAL SQLSTATE VALUE '90002' SET MESSAGE_TEXT = v_signal_message; END IF;  DELETE FROM performance_schema.setup_actors; INSERT INTO performance_schema.setup_actors SELECT * FROM tmp_setup_actors;  BEGIN DECLARE v_name varchar(64); DECLARE v_enabled enum('YES', 'NO'); DECLARE c_consumers CURSOR FOR SELECT NAME, ENABLED FROM tmp_setup_consumers; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET v_done = FALSE; OPEN c_consumers; c_consumers_loop: LOOP FETCH c_consumers INTO v_name, v_enabled; IF v_done THEN LEAVE c_consumers_loop; END IF;  UPDATE performance_schema.setup_consumers SET ENABLED = v_enabled WHERE NAME = v_name; END LOOP; CLOSE c_consumers; END;  UPDATE performance_schema.setup_instruments INNER JOIN tmp_setup_instruments USING (NAME) SET performance_schema.setup_instruments.ENABLED = tmp_setup_instruments.ENABLED, performance_schema.setup_instruments.TIMED   = tmp_setup_instruments.TIMED; BEGIN DECLARE v_thread_id bigint unsigned; DECLARE v_instrumented enum('YES', 'NO'); DECLARE c_threads CURSOR FOR SELECT THREAD_ID, INSTRUMENTED FROM tmp_threads; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET v_done = FALSE; OPEN c_threads; c_threads_loop: LOOP FETCH c_threads INTO v_thread_id, v_instrumented; IF v_done THEN LEAVE c_threads_loop; END IF;  UPDATE performance_schema.threads SET INSTRUMENTED = v_instrumented WHERE THREAD_ID = v_thread_id; END LOOP; CLOSE c_threads; END;  UPDATE performance_schema.threads SET INSTRUMENTED = IF(PROCESSLIST_USER IS NOT NULL, sys.ps_is_account_enabled(PROCESSLIST_HOST, PROCESSLIST_USER), 'YES') WHERE THREAD_ID NOT IN (SELECT THREAD_ID FROM tmp_threads);  DROP TEMPORARY TABLE tmp_setup_actors; DROP TEMPORARY TABLE tmp_setup_consumers; DROP TEMPORARY TABLE tmp_setup_instruments; DROP TEMPORARY TABLE tmp_threads;  SELECT RELEASE_LOCK('sys.ps_setup_save') INTO v_lock_result;  SET sql_log_bin = @log_bin;  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_reset_to_default` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_reset_to_default`( IN in_verbose BOOLEAN )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Resets the Performance Schema setup to the default settings.\n \n Parameters\n \n in_verbose (BOOLEAN):\n Whether to print each setup stage (including the SQL) whilst running.\n \n Example\n \n mysql> CALL sys.ps_setup_reset_to_default(true)\\G\n *************************** 1. row ***************************\n status: Resetting: setup_actors\n DELETE\n FROM performance_schema.setup_actors\n WHERE NOT (HOST = ''%'' AND USER = ''%'' AND ROLE = ''%'')\n 1 row in set (0.00 sec)\n \n *************************** 1. row ***************************\n status: Resetting: setup_actors\n INSERT IGNORE INTO performance_schema.setup_actors\n VALUES (''%'', ''%'', ''%'')\n 1 row in set (0.00 sec)\n ...\n \n mysql> CALL sys.ps_setup_reset_to_default(false)\\G\n Query OK, 0 rows affected (0.00 sec)\n '
BEGIN SET @query = 'DELETE FROM performance_schema.setup_actors WHERE NOT (HOST = ''%'' AND USER = ''%'' AND ROLE = ''%'')';  IF (in_verbose) THEN SELECT CONCAT('Resetting: setup_actors\n', REPLACE(@query, '  ', '')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = 'INSERT IGNORE INTO performance_schema.setup_actors VALUES (''%'', ''%'', ''%'', ''YES'', ''YES'')';  IF (in_verbose) THEN SELECT CONCAT('Resetting: setup_actors\n', REPLACE(@query, '  ', '')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = 'UPDATE performance_schema.setup_instruments SET ENABLED = sys.ps_is_instrument_default_enabled(NAME), TIMED   = sys.ps_is_instrument_default_timed(NAME)';  IF (in_verbose) THEN SELECT CONCAT('Resetting: setup_instruments\n', REPLACE(@query, '  ', '')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = 'UPDATE performance_schema.setup_consumers SET ENABLED = IF(NAME IN (''events_statements_current'', ''events_transactions_current'', ''global_instrumentation'', ''thread_instrumentation'', ''statements_digest''), ''YES'', ''NO'')';  IF (in_verbose) THEN SELECT CONCAT('Resetting: setup_consumers\n', REPLACE(@query, '  ', '')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = 'DELETE FROM performance_schema.setup_objects WHERE NOT (OBJECT_TYPE IN (''EVENT'', ''FUNCTION'', ''PROCEDURE'', ''TABLE'', ''TRIGGER'') AND OBJECT_NAME = ''%''  AND (OBJECT_SCHEMA = ''mysql''              AND ENABLED = ''NO''  AND TIMED = ''NO'' ) OR (OBJECT_SCHEMA = ''performance_schema'' AND ENABLED = ''NO''  AND TIMED = ''NO'' ) OR (OBJECT_SCHEMA = ''information_schema'' AND ENABLED = ''NO''  AND TIMED = ''NO'' ) OR (OBJECT_SCHEMA = ''%''                  AND ENABLED = ''YES'' AND TIMED = ''YES''))';  IF (in_verbose) THEN SELECT CONCAT('Resetting: setup_objects\n', REPLACE(@query, '  ', '')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = 'INSERT IGNORE INTO performance_schema.setup_objects VALUES (''EVENT''    , ''mysql''             , ''%'', ''NO'' , ''NO'' ), (''EVENT''    , ''performance_schema'', ''%'', ''NO'' , ''NO'' ), (''EVENT''    , ''information_schema'', ''%'', ''NO'' , ''NO'' ), (''EVENT''    , ''%''                 , ''%'', ''YES'', ''YES''), (''FUNCTION'' , ''mysql''             , ''%'', ''NO'' , ''NO'' ), (''FUNCTION'' , ''performance_schema'', ''%'', ''NO'' , ''NO'' ), (''FUNCTION'' , ''information_schema'', ''%'', ''NO'' , ''NO'' ), (''FUNCTION'' , ''%''                 , ''%'', ''YES'', ''YES''), (''PROCEDURE'', ''mysql''             , ''%'', ''NO'' , ''NO'' ), (''PROCEDURE'', ''performance_schema'', ''%'', ''NO'' , ''NO'' ), (''PROCEDURE'', ''information_schema'', ''%'', ''NO'' , ''NO'' ), (''PROCEDURE'', ''%''                 , ''%'', ''YES'', ''YES''), (''TABLE''    , ''mysql''             , ''%'', ''NO'' , ''NO'' ), (''TABLE''    , ''performance_schema'', ''%'', ''NO'' , ''NO'' ), (''TABLE''    , ''information_schema'', ''%'', ''NO'' , ''NO'' ), (''TABLE''    , ''%''                 , ''%'', ''YES'', ''YES''), (''TRIGGER''  , ''mysql''             , ''%'', ''NO'' , ''NO'' ), (''TRIGGER''  , ''performance_schema'', ''%'', ''NO'' , ''NO'' ), (''TRIGGER''  , ''information_schema'', ''%'', ''NO'' , ''NO'' ), (''TRIGGER''  , ''%''                 , ''%'', ''YES'', ''YES'')';  IF (in_verbose) THEN SELECT CONCAT('Resetting: setup_objects\n', REPLACE(@query, '  ', '')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = 'UPDATE performance_schema.threads SET INSTRUMENTED = ''YES''';  IF (in_verbose) THEN SELECT CONCAT('Resetting: threads\n', REPLACE(@query, '  ', '')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_save` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_save`( IN in_timeout INT )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Saves the current configuration of Performance Schema, \n so that you can alter the setup for debugging purposes, \n but restore it to a previous state.\n \n Use the companion procedure - ps_setup_reload_saved(), to \n restore the saved config.\n \n The named lock "sys.ps_setup_save" is taken before the\n current configuration is saved. If the attempt to get the named\n lock times out, an error occurs.\n \n The lock is released after the settings have been restored by\n calling ps_setup_reload_saved().\n \n Requires the SUPER privilege for "SET sql_log_bin = 0;".\n \n Parameters\n \n in_timeout INT\n The timeout in seconds used when trying to obtain the lock.\n A negative timeout means infinite timeout.\n \n Example\n \n mysql> CALL sys.ps_setup_save(-1);\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> UPDATE performance_schema.setup_instruments \n ->    SET enabled = ''YES'', timed = ''YES'';\n Query OK, 547 rows affected (0.40 sec)\n Rows matched: 784  Changed: 547  Warnings: 0\n \n /* Run some tests that need more detailed instrumentation here */\n \n mysql> CALL sys.ps_setup_reload_saved();\n Query OK, 0 rows affected (0.32 sec)\n '
BEGIN DECLARE v_lock_result INT;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT GET_LOCK('sys.ps_setup_save', in_timeout) INTO v_lock_result;  IF v_lock_result THEN DROP TEMPORARY TABLE IF EXISTS tmp_setup_actors; DROP TEMPORARY TABLE IF EXISTS tmp_setup_consumers; DROP TEMPORARY TABLE IF EXISTS tmp_setup_instruments; DROP TEMPORARY TABLE IF EXISTS tmp_threads;  CREATE TEMPORARY TABLE tmp_setup_actors LIKE performance_schema.setup_actors; CREATE TEMPORARY TABLE tmp_setup_consumers LIKE performance_schema.setup_consumers; CREATE TEMPORARY TABLE tmp_setup_instruments LIKE performance_schema.setup_instruments; CREATE TEMPORARY TABLE tmp_threads (THREAD_ID bigint unsigned NOT NULL PRIMARY KEY, INSTRUMENTED enum('YES','NO') NOT NULL);  INSERT INTO tmp_setup_actors SELECT * FROM performance_schema.setup_actors; INSERT INTO tmp_setup_consumers SELECT * FROM performance_schema.setup_consumers; INSERT INTO tmp_setup_instruments SELECT * FROM performance_schema.setup_instruments; INSERT INTO tmp_threads SELECT THREAD_ID, INSTRUMENTED FROM performance_schema.threads; ELSE SIGNAL SQLSTATE VALUE '90000' SET MESSAGE_TEXT = 'Could not lock the sys.ps_setup_save user lock, another thread has a saved configuration'; END IF;  SET sql_log_bin = @log_bin; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_show_disabled` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_show_disabled`( IN in_show_instruments BOOLEAN, IN in_show_threads BOOLEAN )
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Shows all currently disable Performance Schema configuration.\n \n Disabled users is only available for MySQL 5.7.6 and later.\n In earlier versions it was only possible to enable users.\n \n Parameters\n \n in_show_instruments (BOOLEAN):\n Whether to print disabled instruments (can print many items)\n \n in_show_threads (BOOLEAN):\n Whether to print disabled threads\n \n Example\n \n mysql> CALL sys.ps_setup_show_disabled(TRUE, TRUE);\n +----------------------------+\n | performance_schema_enabled |\n +----------------------------+\n |                          1 |\n +----------------------------+\n 1 row in set (0.00 sec)\n \n +--------------------+\n | disabled_users     |\n +--------------------+\n | ''mark''@''localhost'' |\n +--------------------+\n 1 row in set (0.00 sec)\n \n +-------------+----------------------+---------+-------+\n | object_type | objects              | enabled | timed |\n +-------------+----------------------+---------+-------+\n | EVENT       | mysql.%              | NO      | NO    |\n | EVENT       | performance_schema.% | NO      | NO    |\n | EVENT       | information_schema.% | NO      | NO    |\n | FUNCTION    | mysql.%              | NO      | NO    |\n | FUNCTION    | performance_schema.% | NO      | NO    |\n | FUNCTION    | information_schema.% | NO      | NO    |\n | PROCEDURE   | mysql.%              | NO      | NO    |\n | PROCEDURE   | performance_schema.% | NO      | NO    |\n | PROCEDURE   | information_schema.% | NO      | NO    |\n | TABLE       | mysql.%              | NO      | NO    |\n | TABLE       | performance_schema.% | NO      | NO    |\n | TABLE       | information_schema.% | NO      | NO    |\n | TRIGGER     | mysql.%              | NO      | NO    |\n | TRIGGER     | performance_schema.% | NO      | NO    |\n | TRIGGER     | information_schema.% | NO      | NO    |\n +-------------+----------------------+---------+-------+\n 15 rows in set (0.00 sec)\n \n +----------------------------------+\n | disabled_consumers               |\n +----------------------------------+\n | events_stages_current            |\n | events_stages_history            |\n | events_stages_history_long       |\n | events_statements_history        |\n | events_statements_history_long   |\n | events_transactions_history      |\n | events_transactions_history_long |\n | events_waits_current             |\n | events_waits_history             |\n | events_waits_history_long        |\n +----------------------------------+\n 10 rows in set (0.00 sec)\n \n Empty set (0.00 sec)\n \n +---------------------------------------------------------------------------------------+-------+\n | disabled_instruments                                                                  | timed |\n +---------------------------------------------------------------------------------------+-------+\n | wait/synch/mutex/sql/TC_LOG_MMAP::LOCK_tc                                             | NO    |\n | wait/synch/mutex/sql/LOCK_des_key_file                                                | NO    |\n | wait/synch/mutex/sql/MYSQL_BIN_LOG::LOCK_commit                                       | NO    |\n ...\n | memory/sql/servers_cache                                                              | NO    |\n | memory/sql/udf_mem                                                                    | NO    |\n | wait/lock/metadata/sql/mdl                                                            | NO    |\n +---------------------------------------------------------------------------------------+-------+\n 547 rows in set (0.00 sec)\n \n Query OK, 0 rows affected (0.01 sec)\n '
BEGIN SELECT @@performance_schema AS performance_schema_enabled;   SELECT CONCAT('\'', user, '\'@\'', host, '\'') AS disabled_users FROM performance_schema.setup_actors WHERE enabled = 'NO' ORDER BY disabled_users;   SELECT object_type, CONCAT(object_schema, '.', object_name) AS objects, enabled, timed FROM performance_schema.setup_objects WHERE enabled = 'NO' ORDER BY object_type, objects;  SELECT name AS disabled_consumers FROM performance_schema.setup_consumers WHERE enabled = 'NO' ORDER BY disabled_consumers;  IF (in_show_threads) THEN SELECT IF(name = 'thread/sql/one_connection',  CONCAT(processlist_user, '@', processlist_host),  REPLACE(name, 'thread/', '')) AS disabled_threads, TYPE AS thread_type FROM performance_schema.threads WHERE INSTRUMENTED = 'NO' ORDER BY disabled_threads; END IF;  IF (in_show_instruments) THEN SELECT name AS disabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = 'NO' ORDER BY disabled_instruments; END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_show_disabled_consumers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_show_disabled_consumers`()
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Shows all currently disabled consumers.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_disabled_consumers();\n \n +---------------------------+\n | disabled_consumers        |\n +---------------------------+\n | events_statements_current |\n | global_instrumentation    |\n | thread_instrumentation    |\n | statements_digest         |\n +---------------------------+\n 4 rows in set (0.05 sec)\n '
BEGIN SELECT name AS disabled_consumers FROM performance_schema.setup_consumers WHERE enabled = 'NO' ORDER BY disabled_consumers; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_show_disabled_instruments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_show_disabled_instruments`()
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Shows all currently disabled instruments.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_disabled_instruments();\n '
BEGIN SELECT name AS disabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = 'NO' ORDER BY disabled_instruments; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_show_enabled` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_show_enabled`( IN in_show_instruments BOOLEAN, IN in_show_threads BOOLEAN )
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Shows all currently enabled Performance Schema configuration.\n \n Parameters\n \n in_show_instruments (BOOLEAN):\n Whether to print enabled instruments (can print many items)\n \n in_show_threads (BOOLEAN):\n Whether to print enabled threads\n \n Example\n \n mysql> CALL sys.ps_setup_show_enabled(TRUE, TRUE);\n +----------------------------+\n | performance_schema_enabled |\n +----------------------------+\n |                          1 |\n +----------------------------+\n 1 row in set (0.00 sec)\n \n +---------------+\n | enabled_users |\n +---------------+\n | ''%''@''%''       |\n +---------------+\n 1 row in set (0.01 sec)\n \n +-------------+---------+---------+-------+\n | object_type | objects | enabled | timed |\n +-------------+---------+---------+-------+\n | EVENT       | %.%     | YES     | YES   |\n | FUNCTION    | %.%     | YES     | YES   |\n | PROCEDURE   | %.%     | YES     | YES   |\n | TABLE       | %.%     | YES     | YES   |\n | TRIGGER     | %.%     | YES     | YES   |\n +-------------+---------+---------+-------+\n 5 rows in set (0.01 sec)\n \n +---------------------------+\n | enabled_consumers         |\n +---------------------------+\n | events_statements_current |\n | global_instrumentation    |\n | thread_instrumentation    |\n | statements_digest         |\n +---------------------------+\n 4 rows in set (0.05 sec)\n \n +---------------------------------+-------------+\n | enabled_threads                 | thread_type |\n +---------------------------------+-------------+\n | sql/main                        | BACKGROUND  |\n | sql/thread_timer_notifier       | BACKGROUND  |\n | innodb/io_ibuf_thread           | BACKGROUND  |\n | innodb/io_log_thread            | BACKGROUND  |\n | innodb/io_read_thread           | BACKGROUND  |\n | innodb/io_read_thread           | BACKGROUND  |\n | innodb/io_write_thread          | BACKGROUND  |\n | innodb/io_write_thread          | BACKGROUND  |\n | innodb/page_cleaner_thread      | BACKGROUND  |\n | innodb/srv_lock_timeout_thread  | BACKGROUND  |\n | innodb/srv_error_monitor_thread | BACKGROUND  |\n | innodb/srv_monitor_thread       | BACKGROUND  |\n | innodb/srv_master_thread        | BACKGROUND  |\n | innodb/srv_purge_thread         | BACKGROUND  |\n | innodb/srv_worker_thread        | BACKGROUND  |\n | innodb/srv_worker_thread        | BACKGROUND  |\n | innodb/srv_worker_thread        | BACKGROUND  |\n | innodb/buf_dump_thread          | BACKGROUND  |\n | innodb/dict_stats_thread        | BACKGROUND  |\n | sql/signal_handler              | BACKGROUND  |\n | sql/compress_gtid_table         | FOREGROUND  |\n | root@localhost                  | FOREGROUND  |\n +---------------------------------+-------------+\n 22 rows in set (0.01 sec)\n \n +-------------------------------------+-------+\n | enabled_instruments                 | timed |\n +-------------------------------------+-------+\n | wait/io/file/sql/map                | YES   |\n | wait/io/file/sql/binlog             | YES   |\n ...\n | statement/com/Error                 | YES   |\n | statement/com/                      | YES   |\n | idle                                | YES   |\n +-------------------------------------+-------+\n 210 rows in set (0.08 sec)\n \n Query OK, 0 rows affected (0.89 sec)\n '
BEGIN SELECT @@performance_schema AS performance_schema_enabled;  SELECT CONCAT('\'', user, '\'@\'', host, '\'') AS enabled_users FROM performance_schema.setup_actors  WHERE enabled = 'YES'  ORDER BY enabled_users;  SELECT object_type, CONCAT(object_schema, '.', object_name) AS objects, enabled, timed FROM performance_schema.setup_objects WHERE enabled = 'YES' ORDER BY object_type, objects;  SELECT name AS enabled_consumers FROM performance_schema.setup_consumers WHERE enabled = 'YES' ORDER BY enabled_consumers;  IF (in_show_threads) THEN SELECT IF(name = 'thread/sql/one_connection',  CONCAT(processlist_user, '@', processlist_host),  REPLACE(name, 'thread/', '')) AS enabled_threads, TYPE AS thread_type FROM performance_schema.threads WHERE INSTRUMENTED = 'YES' ORDER BY enabled_threads; END IF;  IF (in_show_instruments) THEN SELECT name AS enabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = 'YES' ORDER BY enabled_instruments; END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_show_enabled_consumers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_show_enabled_consumers`()
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Shows all currently enabled consumers.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_enabled_consumers();\n \n +---------------------------+\n | enabled_consumers         |\n +---------------------------+\n | events_statements_current |\n | global_instrumentation    |\n | thread_instrumentation    |\n | statements_digest         |\n +---------------------------+\n 4 rows in set (0.05 sec)\n '
BEGIN SELECT name AS enabled_consumers FROM performance_schema.setup_consumers WHERE enabled = 'YES' ORDER BY enabled_consumers; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_setup_show_enabled_instruments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_setup_show_enabled_instruments`()
    READS SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Shows all currently enabled instruments.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_enabled_instruments();\n '
BEGIN SELECT name AS enabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = 'YES' ORDER BY enabled_instruments; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_statement_avg_latency_histogram` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_statement_avg_latency_histogram`()
    READS SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Outputs a textual histogram graph of the average latency values\n across all normalized queries tracked within the Performance Schema\n events_statements_summary_by_digest table.\n \n Can be used to show a very high level picture of what kind of \n latency distribution statements running within this instance have.\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_statement_avg_latency_histogram()\\G\n *************************** 1. row ***************************\n Performance Schema Statement Digest Average Latency Histogram:\n \n . = 1 unit\n * = 2 units\n # = 3 units\n \n (0 - 38ms)     240 | ################################################################################\n (38 - 77ms)    38  | ......................................\n (77 - 115ms)   3   | ...\n (115 - 154ms)  62  | *******************************\n (154 - 192ms)  3   | ...\n (192 - 231ms)  0   |\n (231 - 269ms)  0   |\n (269 - 307ms)  0   |\n (307 - 346ms)  0   |\n (346 - 384ms)  1   | .\n (384 - 423ms)  1   | .\n (423 - 461ms)  0   |\n (461 - 499ms)  0   |\n (499 - 538ms)  0   |\n (538 - 576ms)  0   |\n (576 - 615ms)  1   | .\n \n Total Statements: 350; Buckets: 16; Bucket Size: 38 ms;\n '
BEGIN SELECT CONCAT('\n', '\n  . = 1 unit', '\n  * = 2 units', '\n  # = 3 units\n', @label := CONCAT(@label_inner := CONCAT('\n(0 - ', ROUND((@bucket_size := (SELECT ROUND((MAX(avg_us) - MIN(avg_us)) / (@buckets := 16)) AS size FROM sys.x$ps_digest_avg_latency_distribution)) / (@unit_div := 1000)), (@unit := 'ms'), ')'), REPEAT(' ', (@max_label_size := ((1 + LENGTH(ROUND((@bucket_size * 15) / @unit_div)) + 3 + LENGTH(ROUND(@bucket_size * 16) / @unit_div)) + 1)) - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us <= @bucket_size), 0)), REPEAT(' ', (@max_label_len := (@max_label_size + LENGTH((@total_queries := (SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution)))) + 1) - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < (@one_unit := 40), '.', IF(@count_in_bucket < (@two_unit := 80), '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''),  @label := CONCAT(@label_inner := CONCAT('\n(', ROUND(@bucket_size / @unit_div), ' - ', ROUND((@bucket_size * 2) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size AND b1.avg_us <= @bucket_size * 2), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 2) / @unit_div), ' - ', ROUND((@bucket_size * 3) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 2 AND b1.avg_us <= @bucket_size * 3), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 3) / @unit_div), ' - ', ROUND((@bucket_size * 4) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 3 AND b1.avg_us <= @bucket_size * 4), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 4) / @unit_div), ' - ', ROUND((@bucket_size * 5) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 4 AND b1.avg_us <= @bucket_size * 5), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 5) / @unit_div), ' - ', ROUND((@bucket_size * 6) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 5 AND b1.avg_us <= @bucket_size * 6), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 6) / @unit_div), ' - ', ROUND((@bucket_size * 7) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 6 AND b1.avg_us <= @bucket_size * 7), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 7) / @unit_div), ' - ', ROUND((@bucket_size * 8) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 7 AND b1.avg_us <= @bucket_size * 8), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 8) / @unit_div), ' - ', ROUND((@bucket_size * 9) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 8 AND b1.avg_us <= @bucket_size * 9), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 9) / @unit_div), ' - ', ROUND((@bucket_size * 10) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 9 AND b1.avg_us <= @bucket_size * 10), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 10) / @unit_div), ' - ', ROUND((@bucket_size * 11) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 10 AND b1.avg_us <= @bucket_size * 11), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 11) / @unit_div), ' - ', ROUND((@bucket_size * 12) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 11 AND b1.avg_us <= @bucket_size * 12), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 12) / @unit_div), ' - ', ROUND((@bucket_size * 13) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 12 AND b1.avg_us <= @bucket_size * 13), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 13) / @unit_div), ' - ', ROUND((@bucket_size * 14) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 13 AND b1.avg_us <= @bucket_size * 14), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 14) / @unit_div), ' - ', ROUND((@bucket_size * 15) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 14 AND b1.avg_us <= @bucket_size * 15), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''), @label := CONCAT(@label_inner := CONCAT('\n(', ROUND((@bucket_size * 15) / @unit_div), ' - ', ROUND((@bucket_size * 16) / @unit_div), @unit, ')'), REPEAT(' ', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 15 AND b1.avg_us <= @bucket_size * 16), 0)), REPEAT(' ', @max_label_len - LENGTH(@label)), '| ', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, '.', IF(@count_in_bucket < @two_unit, '*', '#')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), ''),  '\n\n  Total Statements: ', @total_queries, '; Buckets: ', @buckets , '; Bucket Size: ', ROUND(@bucket_size / @unit_div) , ' ', @unit, ';\n'  ) AS `Performance Schema Statement Digest Average Latency Histogram`;  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_trace_statement_digest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_trace_statement_digest`( IN in_digest VARCHAR(32), IN in_runtime INT,  IN in_interval DECIMAL(2,2), IN in_start_fresh BOOLEAN, IN in_auto_enable BOOLEAN )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Traces all instrumentation within Performance Schema for a specific\n Statement Digest. \n \n When finding a statement of interest within the \n performance_schema.events_statements_summary_by_digest table, feed\n the DIGEST MD5 value in to this procedure, set how long to poll for, \n and at what interval to poll, and it will generate a report of all \n statistics tracked within Performance Schema for that digest for the\n interval.\n \n It will also attempt to generate an EXPLAIN for the longest running \n example of the digest during the interval. Note this may fail, as:\n \n * Performance Schema truncates long SQL_TEXT values (and hence the \n EXPLAIN will fail due to parse errors)\n * the default schema is sys (so tables that are not fully qualified\n in the query may not be found)\n * some queries such as SHOW are not supported in EXPLAIN.\n \n When the EXPLAIN fails, the error will be ignored and no EXPLAIN\n output generated.\n \n Requires the SUPER privilege for "SET sql_log_bin = 0;".\n \n Parameters\n \n in_digest (VARCHAR(32)):\n The statement digest identifier you would like to analyze\n in_runtime (INT):\n The number of seconds to run analysis for\n in_interval (DECIMAL(2,2)):\n The interval (in seconds, may be fractional) at which to try\n and take snapshots\n in_start_fresh (BOOLEAN):\n Whether to TRUNCATE the events_statements_history_long and\n events_stages_history_long tables before starting\n in_auto_enable (BOOLEAN):\n Whether to automatically turn on required consumers\n \n Example\n \n mysql> call ps_trace_statement_digest(''891ec6860f98ba46d89dd20b0c03652c'', 10, 0.1, true, true);\n +--------------------+\n | SUMMARY STATISTICS |\n +--------------------+\n | SUMMARY STATISTICS |\n +--------------------+\n 1 row in set (9.11 sec)\n \n +------------+-----------+-----------+-----------+---------------+------------+------------+\n | executions | exec_time | lock_time | rows_sent | rows_examined | tmp_tables | full_scans |\n +------------+-----------+-----------+-----------+---------------+------------+------------+\n |         21 | 4.11 ms   | 2.00 ms   |         0 |            21 |          0 |          0 |\n +------------+-----------+-----------+-----------+---------------+------------+------------+\n 1 row in set (9.11 sec)\n \n +------------------------------------------+-------+-----------+\n | event_name                               | count | latency   |\n +------------------------------------------+-------+-----------+\n | stage/sql/checking query cache for query |    16 | 724.37 us |\n | stage/sql/statistics                     |    16 | 546.92 us |\n | stage/sql/freeing items                  |    18 | 520.11 us |\n | stage/sql/init                           |    51 | 466.80 us |\n ...\n | stage/sql/cleaning up                    |    18 | 11.92 us  |\n | stage/sql/executing                      |    16 | 6.95 us   |\n +------------------------------------------+-------+-----------+\n 17 rows in set (9.12 sec)\n \n +---------------------------+\n | LONGEST RUNNING STATEMENT |\n +---------------------------+\n | LONGEST RUNNING STATEMENT |\n +---------------------------+\n 1 row in set (9.16 sec)\n \n +-----------+-----------+-----------+-----------+---------------+------------+-----------+\n | thread_id | exec_time | lock_time | rows_sent | rows_examined | tmp_tables | full_scan |\n +-----------+-----------+-----------+-----------+---------------+------------+-----------+\n |    166646 | 618.43 us | 1.00 ms   |         0 |             1 |          0 |         0 |\n +-----------+-----------+-----------+-----------+---------------+------------+-----------+\n 1 row in set (9.16 sec)\n \n // Truncated for clarity...\n +-----------------------------------------------------------------+\n | sql_text                                                        |\n +-----------------------------------------------------------------+\n | select hibeventhe0_.id as id1382_, hibeventhe0_.createdTime ... |\n +-----------------------------------------------------------------+\n 1 row in set (9.17 sec)\n \n +------------------------------------------+-----------+\n | event_name                               | latency   |\n +------------------------------------------+-----------+\n | stage/sql/init                           | 8.61 us   |\n | stage/sql/Waiting for query cache lock   | 453.23 us |\n | stage/sql/init                           | 331.07 ns |\n | stage/sql/checking query cache for query | 43.04 us  |\n ...\n | stage/sql/freeing items                  | 30.46 us  |\n | stage/sql/cleaning up                    | 662.13 ns |\n +------------------------------------------+-----------+\n 18 rows in set (9.23 sec)\n \n +----+-------------+--------------+-------+---------------+-----------+---------+-------------+------+-------+\n | id | select_type | table        | type  | possible_keys | key       | key_len | ref         | rows | Extra |\n +----+-------------+--------------+-------+---------------+-----------+---------+-------------+------+-------+\n |  1 | SIMPLE      | hibeventhe0_ | const | fixedTime     | fixedTime | 775     | const,const |    1 | NULL  |\n +----+-------------+--------------+-------+---------------+-----------+---------+-------------+------+-------+\n 1 row in set (9.27 sec)\n \n Query OK, 0 rows affected (9.28 sec)\n '
BEGIN  DECLARE v_start_fresh BOOLEAN DEFAULT false; DECLARE v_auto_enable BOOLEAN DEFAULT false; DECLARE v_explain     BOOLEAN DEFAULT true; DECLARE v_this_thread_enabed ENUM('YES', 'NO'); DECLARE v_runtime INT DEFAULT 0; DECLARE v_start INT DEFAULT 0; DECLARE v_found_stmts INT;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT INSTRUMENTED INTO v_this_thread_enabed FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); CALL sys.ps_setup_disable_thread(CONNECTION_ID());  DROP TEMPORARY TABLE IF EXISTS stmt_trace; CREATE TEMPORARY TABLE stmt_trace ( thread_id BIGINT UNSIGNED, timer_start BIGINT UNSIGNED, event_id BIGINT UNSIGNED, sql_text longtext, timer_wait BIGINT UNSIGNED, lock_time BIGINT UNSIGNED, errors BIGINT UNSIGNED, mysql_errno INT, rows_sent BIGINT UNSIGNED, rows_affected BIGINT UNSIGNED, rows_examined BIGINT UNSIGNED, created_tmp_tables BIGINT UNSIGNED, created_tmp_disk_tables BIGINT UNSIGNED, no_index_used BIGINT UNSIGNED, PRIMARY KEY (thread_id, timer_start) );  DROP TEMPORARY TABLE IF EXISTS stmt_stages; CREATE TEMPORARY TABLE stmt_stages ( event_id BIGINT UNSIGNED, stmt_id BIGINT UNSIGNED, event_name VARCHAR(128), timer_wait BIGINT UNSIGNED, PRIMARY KEY (event_id) );  SET v_start_fresh = in_start_fresh; IF v_start_fresh THEN TRUNCATE TABLE performance_schema.events_statements_history_long; TRUNCATE TABLE performance_schema.events_stages_history_long; END IF;  SET v_auto_enable = in_auto_enable; IF v_auto_enable THEN CALL sys.ps_setup_save(0);  UPDATE performance_schema.threads SET INSTRUMENTED = IF(PROCESSLIST_ID IS NOT NULL, 'YES', 'NO');  UPDATE performance_schema.setup_consumers SET ENABLED = 'YES' WHERE NAME NOT LIKE '%\_history' AND NAME NOT LIKE 'events_wait%' AND NAME NOT LIKE 'events_transactions%' AND NAME <> 'statements_digest';  UPDATE performance_schema.setup_instruments SET ENABLED = 'YES', TIMED   = 'YES' WHERE NAME LIKE 'statement/%' OR NAME LIKE 'stage/%'; END IF;  WHILE v_runtime < in_runtime DO SELECT UNIX_TIMESTAMP() INTO v_start;  INSERT IGNORE INTO stmt_trace SELECT thread_id, timer_start, event_id, sql_text, timer_wait, lock_time, errors, mysql_errno,  rows_sent, rows_affected, rows_examined, created_tmp_tables, created_tmp_disk_tables, no_index_used FROM performance_schema.events_statements_history_long WHERE digest = in_digest;  INSERT IGNORE INTO stmt_stages SELECT stages.event_id, stmt_trace.event_id, stages.event_name, stages.timer_wait FROM performance_schema.events_stages_history_long AS stages JOIN stmt_trace ON stages.nesting_event_id = stmt_trace.event_id;  SELECT SLEEP(in_interval) INTO @sleep; SET v_runtime = v_runtime + (UNIX_TIMESTAMP() - v_start); END WHILE;  SELECT "SUMMARY STATISTICS";  SELECT COUNT(*) executions, sys.format_time(SUM(timer_wait)) AS exec_time, sys.format_time(SUM(lock_time)) AS lock_time, SUM(rows_sent) AS rows_sent, SUM(rows_affected) AS rows_affected, SUM(rows_examined) AS rows_examined, SUM(created_tmp_tables) AS tmp_tables, SUM(no_index_used) AS full_scans FROM stmt_trace;  SELECT event_name, COUNT(*) as count, sys.format_time(SUM(timer_wait)) as latency FROM stmt_stages GROUP BY event_name ORDER BY SUM(timer_wait) DESC;  SELECT "LONGEST RUNNING STATEMENT";  SELECT thread_id, sys.format_time(timer_wait) AS exec_time, sys.format_time(lock_time) AS lock_time, rows_sent, rows_affected, rows_examined, created_tmp_tables AS tmp_tables, no_index_used AS full_scan FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  SELECT sql_text FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  SELECT sql_text, event_id INTO @sql, @sql_id FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  IF (@sql_id IS NOT NULL) THEN SELECT event_name, sys.format_time(timer_wait) as latency FROM stmt_stages WHERE stmt_id = @sql_id ORDER BY event_id; END IF;  DROP TEMPORARY TABLE stmt_trace; DROP TEMPORARY TABLE stmt_stages;  IF (@sql IS NOT NULL) THEN SET @stmt := CONCAT("EXPLAIN FORMAT=JSON ", @sql); BEGIN DECLARE CONTINUE HANDLER FOR 1064, 1146 SET v_explain = false;  PREPARE explain_stmt FROM @stmt; END;  IF (v_explain) THEN EXECUTE explain_stmt; DEALLOCATE PREPARE explain_stmt; END IF; END IF;  IF v_auto_enable THEN CALL sys.ps_setup_reload_saved(); END IF; IF (v_this_thread_enabed = 'YES') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  SET sql_log_bin = @log_bin; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_trace_thread` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_trace_thread`( IN in_thread_id BIGINT UNSIGNED, IN in_outfile VARCHAR(255), IN in_max_runtime DECIMAL(20,2), IN in_interval DECIMAL(20,2), IN in_start_fresh BOOLEAN, IN in_auto_setup BOOLEAN, IN in_debug BOOLEAN )
    MODIFIES SQL DATA
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Dumps all data within Performance Schema for an instrumented thread,\n to create a DOT formatted graph file. \n \n Each resultset returned from the procedure should be used for a complete graph\n \n Requires the SUPER privilege for "SET sql_log_bin = 0;".\n \n Parameters\n \n in_thread_id (BIGINT UNSIGNED):\n The thread that you would like a stack trace for\n in_outfile  (VARCHAR(255)):\n The filename the dot file will be written to\n in_max_runtime (DECIMAL(20,2)):\n The maximum time to keep collecting data.\n Use NULL to get the default which is 60 seconds.\n in_interval (DECIMAL(20,2)): \n How long to sleep between data collections. \n Use NULL to get the default which is 1 second.\n in_start_fresh (BOOLEAN):\n Whether to reset all Performance Schema data before tracing.\n in_auto_setup (BOOLEAN):\n Whether to disable all other threads and enable all consumers/instruments. \n This will also reset the settings at the end of the run.\n in_debug (BOOLEAN):\n Whether you would like to include file:lineno in the graph\n \n Example\n \n mysql> CALL sys.ps_trace_thread(25, CONCAT(''/tmp/stack-'', REPLACE(NOW(), '' '', ''-''), ''.dot''), NULL, NULL, TRUE, TRUE, TRUE);\n +-------------------+\n | summary           |\n +-------------------+\n | Disabled 1 thread |\n +-------------------+\n 1 row in set (0.00 sec)\n \n +---------------------------------------------+\n | Info                                        |\n +---------------------------------------------+\n | Data collection starting for THREAD_ID = 25 |\n +---------------------------------------------+\n 1 row in set (0.03 sec)\n \n +-----------------------------------------------------------+\n | Info                                                      |\n +-----------------------------------------------------------+\n | Stack trace written to /tmp/stack-2014-02-16-21:18:41.dot |\n +-----------------------------------------------------------+\n 1 row in set (60.07 sec)\n \n +-------------------------------------------------------------------+\n | Convert to PDF                                                    |\n +-------------------------------------------------------------------+\n | dot -Tpdf -o /tmp/stack_25.pdf /tmp/stack-2014-02-16-21:18:41.dot |\n +-------------------------------------------------------------------+\n 1 row in set (60.07 sec)\n \n +-------------------------------------------------------------------+\n | Convert to PNG                                                    |\n +-------------------------------------------------------------------+\n | dot -Tpng -o /tmp/stack_25.png /tmp/stack-2014-02-16-21:18:41.dot |\n +-------------------------------------------------------------------+\n 1 row in set (60.07 sec)\n \n +------------------+\n | summary          |\n +------------------+\n | Enabled 1 thread |\n +------------------+\n 1 row in set (60.32 sec)\n '
BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_start, v_runtime DECIMAL(20,2) DEFAULT 0.0; DECLARE v_min_event_id bigint unsigned DEFAULT 0; DECLARE v_this_thread_enabed ENUM('YES', 'NO'); DECLARE v_event longtext; DECLARE c_stack CURSOR FOR SELECT CONCAT(IF(nesting_event_id IS NOT NULL, CONCAT(nesting_event_id, ' -> '), ''),  event_id, '; ', event_id, ' [label="', '(', sys.format_time(timer_wait), ') ', IF (event_name NOT LIKE 'wait/io%',  SUBSTRING_INDEX(event_name, '/', -2),  IF (event_name NOT LIKE 'wait/io/file%' OR event_name NOT LIKE 'wait/io/socket%', SUBSTRING_INDEX(event_name, '/', -4), event_name) ), IF (event_name LIKE 'transaction', IFNULL(CONCAT('\\n', wait_info), ''), ''), IF (event_name LIKE 'statement/%', IFNULL(CONCAT('\\n', wait_info), ''), ''), IF (in_debug AND event_name LIKE 'wait%', wait_info, ''), '", ',  CASE WHEN event_name LIKE 'wait/io/file%' THEN  'shape=box, style=filled, color=red' WHEN event_name LIKE 'wait/io/table%' THEN  'shape=box, style=filled, color=green' WHEN event_name LIKE 'wait/io/socket%' THEN 'shape=box, style=filled, color=yellow' WHEN event_name LIKE 'wait/synch/mutex%' THEN 'style=filled, color=lightskyblue' WHEN event_name LIKE 'wait/synch/cond%' THEN 'style=filled, color=darkseagreen3' WHEN event_name LIKE 'wait/synch/rwlock%' THEN 'style=filled, color=orchid' WHEN event_name LIKE 'wait/synch/sxlock%' THEN 'style=filled, color=palevioletred'  WHEN event_name LIKE 'wait/lock%' THEN 'shape=box, style=filled, color=tan' WHEN event_name LIKE 'statement/%' THEN CONCAT('shape=box, style=bold', CASE WHEN event_name LIKE 'statement/com/%' THEN ' style=filled, color=darkseagreen' ELSE IF((timer_wait/1000000000000) > @@long_query_time,  ' style=filled, color=red',  ' style=filled, color=lightblue') END ) WHEN event_name LIKE 'transaction' THEN 'shape=box, style=filled, color=lightblue3' WHEN event_name LIKE 'stage/%' THEN 'style=filled, color=slategray3' WHEN event_name LIKE '%idle%' THEN 'shape=box, style=filled, color=firebrick3' ELSE '' END, '];\n' ) event, event_id FROM ( (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, CONCAT('trx_id: ',  IFNULL(trx_id, ''), '\\n', 'gtid: ', IFNULL(gtid, ''), '\\n', 'state: ', state, '\\n', 'mode: ', access_mode, '\\n', 'isolation: ', isolation_level, '\\n', 'autocommit: ', autocommit, '\\n', 'savepoints: ', number_of_savepoints, '\\n' ) AS wait_info FROM performance_schema.events_transactions_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id,  CONCAT('statement: ', sql_text, '\\n', 'errors: ', errors, '\\n', 'warnings: ', warnings, '\\n', 'lock time: ', sys.format_time(lock_time),'\\n', 'rows affected: ', rows_affected, '\\n', 'rows sent: ', rows_sent, '\\n', 'rows examined: ', rows_examined, '\\n', 'tmp tables: ', created_tmp_tables, '\\n', 'tmp disk tables: ', created_tmp_disk_tables, '\\n' 'select scan: ', select_scan, '\\n', 'select full join: ', select_full_join, '\\n', 'select full range join: ', select_full_range_join, '\\n', 'select range: ', select_range, '\\n', 'select range check: ', select_range_check, '\\n',  'sort merge passes: ', sort_merge_passes, '\\n', 'sort rows: ', sort_rows, '\\n', 'sort range: ', sort_range, '\\n', 'sort scan: ', sort_scan, '\\n', 'no index used: ', IF(no_index_used, 'TRUE', 'FALSE'), '\\n', 'no good index used: ', IF(no_good_index_used, 'TRUE', 'FALSE'), '\\n' ) AS wait_info FROM performance_schema.events_statements_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, null AS wait_info FROM performance_schema.events_stages_history_long  WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION  (SELECT thread_id, event_id,  CONCAT(event_name,  IF(event_name NOT LIKE 'wait/synch/mutex%', IFNULL(CONCAT(' - ', operation), ''), ''),  IF(number_of_bytes IS NOT NULL, CONCAT(' ', number_of_bytes, ' bytes'), ''), IF(event_name LIKE 'wait/io/file%', '\\n', ''), IF(object_schema IS NOT NULL, CONCAT('\\nObject: ', object_schema, '.'), ''),  IF(object_name IS NOT NULL,  IF (event_name LIKE 'wait/io/socket%', CONCAT('\\n', IF (object_name LIKE ':0%', @@socket, object_name)), object_name), '' ), IF(index_name IS NOT NULL, CONCAT(' Index: ', index_name), ''), '\\n' ) AS event_name, timer_wait, timer_start, nesting_event_id, source AS wait_info FROM performance_schema.events_waits_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) ) events  ORDER BY event_id; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT INSTRUMENTED INTO v_this_thread_enabed FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); CALL sys.ps_setup_disable_thread(CONNECTION_ID());  IF (in_auto_setup) THEN CALL sys.ps_setup_save(0);  DELETE FROM performance_schema.setup_actors;  UPDATE performance_schema.threads SET INSTRUMENTED = IF(THREAD_ID = in_thread_id, 'YES', 'NO');  UPDATE performance_schema.setup_consumers SET ENABLED = 'YES' WHERE NAME NOT LIKE '%\_history';  UPDATE performance_schema.setup_instruments SET ENABLED = 'YES', TIMED   = 'YES'; END IF;  IF (in_start_fresh) THEN TRUNCATE performance_schema.events_transactions_history_long; TRUNCATE performance_schema.events_statements_history_long; TRUNCATE performance_schema.events_stages_history_long; TRUNCATE performance_schema.events_waits_history_long; END IF;  DROP TEMPORARY TABLE IF EXISTS tmp_events; CREATE TEMPORARY TABLE tmp_events ( event_id bigint unsigned NOT NULL, event longblob, PRIMARY KEY (event_id) );  INSERT INTO tmp_events VALUES (0, CONCAT('digraph events { rankdir=LR; nodesep=0.10;\n', '// Stack created .....: ', NOW(), '\n', '// MySQL version .....: ', VERSION(), '\n', '// MySQL hostname ....: ', @@hostname, '\n', '// MySQL port ........: ', @@port, '\n', '// MySQL socket ......: ', @@socket, '\n', '// MySQL user ........: ', CURRENT_USER(), '\n'));  SELECT CONCAT('Data collection starting for THREAD_ID = ', in_thread_id) AS 'Info';  SET v_min_event_id = 0, v_start        = UNIX_TIMESTAMP(), in_interval    = IFNULL(in_interval, 1.00), in_max_runtime = IFNULL(in_max_runtime, 60.00);  WHILE (v_runtime < in_max_runtime AND (SELECT INSTRUMENTED FROM performance_schema.threads WHERE THREAD_ID = in_thread_id) = 'YES') DO SET v_done = FALSE; OPEN c_stack; c_stack_loop: LOOP FETCH c_stack INTO v_event, v_min_event_id; IF v_done THEN LEAVE c_stack_loop; END IF;  IF (LENGTH(v_event) > 0) THEN INSERT INTO tmp_events VALUES (v_min_event_id, v_event); END IF; END LOOP; CLOSE c_stack;  SELECT SLEEP(in_interval) INTO @sleep; SET v_runtime = (UNIX_TIMESTAMP() - v_start); END WHILE;  INSERT INTO tmp_events VALUES (v_min_event_id+1, '}');  SET @query = CONCAT('SELECT event FROM tmp_events ORDER BY event_id INTO OUTFILE ''', in_outfile, ''' FIELDS ESCAPED BY '''' LINES TERMINATED BY '''''); PREPARE stmt_output FROM @query; EXECUTE stmt_output; DEALLOCATE PREPARE stmt_output;  SELECT CONCAT('Stack trace written to ', in_outfile) AS 'Info'; SELECT CONCAT('dot -Tpdf -o /tmp/stack_', in_thread_id, '.pdf ', in_outfile) AS 'Convert to PDF'; SELECT CONCAT('dot -Tpng -o /tmp/stack_', in_thread_id, '.png ', in_outfile) AS 'Convert to PNG'; DROP TEMPORARY TABLE tmp_events;  IF (in_auto_setup) THEN CALL sys.ps_setup_reload_saved(); END IF; IF (v_this_thread_enabed = 'YES') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  SET sql_log_bin = @log_bin; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ps_truncate_all_tables` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `ps_truncate_all_tables`( IN in_verbose BOOLEAN )
    MODIFIES SQL DATA
    DETERMINISTIC
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Truncates all summary tables within Performance Schema, \n resetting all aggregated instrumentation as a snapshot.\n \n Parameters\n \n in_verbose (BOOLEAN):\n Whether to print each TRUNCATE statement before running\n \n Example\n \n mysql> CALL sys.ps_truncate_all_tables(false);\n +---------------------+\n | summary             |\n +---------------------+\n | Truncated 44 tables |\n +---------------------+\n 1 row in set (0.10 sec)\n \n Query OK, 0 rows affected (0.10 sec)\n '
BEGIN DECLARE v_done INT DEFAULT FALSE; DECLARE v_total_tables INT DEFAULT 0; DECLARE v_ps_table VARCHAR(64); DECLARE ps_tables CURSOR FOR SELECT table_name  FROM INFORMATION_SCHEMA.TABLES  WHERE table_schema = 'performance_schema'  AND (table_name LIKE '%summary%'  OR table_name LIKE '%history%'); DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  OPEN ps_tables;  ps_tables_loop: LOOP FETCH ps_tables INTO v_ps_table; IF v_done THEN LEAVE ps_tables_loop; END IF;  SET @truncate_stmt := CONCAT('TRUNCATE TABLE performance_schema.', v_ps_table); IF in_verbose THEN SELECT CONCAT('Running: ', @truncate_stmt) AS status; END IF;  PREPARE truncate_stmt FROM @truncate_stmt; EXECUTE truncate_stmt; DEALLOCATE PREPARE truncate_stmt;  SET v_total_tables = v_total_tables + 1; END LOOP;  CLOSE ps_tables;  SELECT CONCAT('Truncated ', v_total_tables, ' tables') AS summary;  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `statement_performance_analyzer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `statement_performance_analyzer`( IN in_action ENUM('snapshot', 'overall', 'delta', 'create_table', 'create_tmp', 'save', 'cleanup'), IN in_table VARCHAR(129), IN in_views SET ('with_runtimes_in_95th_percentile', 'analysis', 'with_errors_or_warnings', 'with_full_table_scans', 'with_sorting', 'with_temp_tables', 'custom') )
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Create a report of the statements running on the server.\n \n The views are calculated based on the overall and/or delta activity.\n \n Requires the SUPER privilege for "SET sql_log_bin = 0;".\n \n Parameters\n \n in_action (ENUM(''snapshot'', ''overall'', ''delta'', ''create_tmp'', ''create_table'', ''save'', ''cleanup'')):\n The action to take. Supported actions are:\n * snapshot      Store a snapshot. The default is to make a snapshot of the current content of\n performance_schema.events_statements_summary_by_digest, but by setting in_table\n this can be overwritten to copy the content of the specified table.\n The snapshot is stored in the sys.tmp_digests temporary table.\n * overall       Generate analyzis based on the content specified by in_table. For the overall analyzis,\n in_table can be NOW() to use a fresh snapshot. This will overwrite an existing snapshot.\n Use NULL for in_table to use the existing snapshot. If in_table IS NULL and no snapshot\n exists, a new will be created.\n See also in_views and @sys.statement_performance_analyzer.limit.\n * delta         Generate a delta analysis. The delta will be calculated between the reference table in\n in_table and the snapshot. An existing snapshot must exist.\n The action uses the sys.tmp_digests_delta temporary table.\n See also in_views and @sys.statement_performance_analyzer.limit.\n * create_table  Create a regular table suitable for storing the snapshot for later use, e.g. for\n calculating deltas.\n * create_tmp    Create a temporary table suitable for storing the snapshot for later use, e.g. for\n calculating deltas.\n * save          Save the snapshot in the table specified by in_table. The table must exists and have\n the correct structure.\n If no snapshot exists, a new is created.\n * cleanup       Remove the temporary tables used for the snapshot and delta.\n \n in_table (VARCHAR(129)):\n The table argument used for some actions. Use the format ''db1.t1'' or ''t1'' without using any backticks (`)\n for quoting. Periods (.) are not supported in the database and table names.\n \n The meaning of the table for each action supporting the argument is:\n \n * snapshot      The snapshot is created based on the specified table. Set to NULL or NOW() to use\n the current content of performance_schema.events_statements_summary_by_digest.\n * overall       The table with the content to create the overall analyzis for. The following values\n can be used:\n - A table name - use the content of that table.\n - NOW()        - create a fresh snapshot and overwrite the existing snapshot.\n - NULL         - use the last stored snapshot.\n * delta         The table name is mandatory and specified the reference view to compare the currently\n stored snapshot against. If no snapshot exists, a new will be created.\n * create_table  The name of the regular table to create.\n * create_tmp    The name of the temporary table to create.\n * save          The name of the table to save the currently stored snapshot into.\n \n in_views (SET (''with_runtimes_in_95th_percentile'', ''analysis'', ''with_errors_or_warnings'',\n ''with_full_table_scans'', ''with_sorting'', ''with_temp_tables'', ''custom''))\n Which views to include:  * with_runtimes_in_95th_percentile  Based on the sys.statements_with_runtimes_in_95th_percentile view * analysis                          Based on the sys.statement_analysis view * with_errors_or_warnings           Based on the sys.statements_with_errors_or_warnings view * with_full_table_scans             Based on the sys.statements_with_full_table_scans view * with_sorting                      Based on the sys.statements_with_sorting view * with_temp_tables                  Based on the sys.statements_with_temp_tables view * custom                            Use a custom view. This view must be specified in @sys.statement_performance_analyzer.view to an existing view or a query  Default is to include all except ''custom''.   Configuration Options  sys.statement_performance_analyzer.limit The maximum number of rows to include for the views that does not have a built-in limit (e.g. the 95th percentile view). If not set the limit is 100.  sys.statement_performance_analyzer.view Used together with the ''custom'' view. If the value contains a space, it is considered a query, otherwise it must be an existing view querying the performance_schema.events_statements_summary_by_digest table. There cannot be any limit clause including in the query or view definition if @sys.statement_performance_analyzer.limit > 0. If specifying a view, use the same format as for in_table.  sys.debug Whether to provide debugging output. Default is ''OFF''. Set to ''ON'' to include.   Example  To create a report with the queries in the 95th percentile since last truncate of performance_schema.events_statements_summary_by_digest and the delta for a 1 minute period:  1. Create a temporary table to store the initial snapshot. 2. Create the initial snapshot. 3. Save the initial snapshot in the temporary table. 4. Wait one minute. 5. Create a new snapshot. 6. Perform analyzis based on the new snapshot. 7. Perform analyzis based on the delta between the initial and new snapshots.  mysql> CALL sys.statement_performance_analyzer(''create_tmp'', ''mydb.tmp_digests_ini'', NULL); Query OK, 0 rows affected (0.08 sec)  mysql> CALL sys.statement_performance_analyzer(''snapshot'', NULL, NULL); Query OK, 0 rows affected (0.02 sec)  mysql> CALL sys.statement_performance_analyzer(''save'', ''mydb.tmp_digests_ini'', NULL); Query OK, 0 rows affected (0.00 sec)  mysql> DO SLEEP(60); Query OK, 0 rows affected (1 min 0.00 sec)  mysql> CALL sys.statement_performance_analyzer(''snapshot'', NULL, NULL); Query OK, 0 rows affected (0.02 sec)  mysql> CALL sys.statement_performance_analyzer(''overall'', NULL, ''with_runtimes_in_95th_percentile''); +-----------------------------------------+ | Next Output                             | +-----------------------------------------+ | Queries with Runtime in 95th Percentile | +-----------------------------------------+ 1 row in set (0.05 sec)  ...  mysql> CALL sys.statement_performance_analyzer(''delta'', ''mydb.tmp_digests_ini'', ''with_runtimes_in_95th_percentile''); +-----------------------------------------+ | Next Output                             | +-----------------------------------------+ | Queries with Runtime in 95th Percentile | +-----------------------------------------+ 1 row in set (0.03 sec)  ...   To create an overall report of the 95th percentile queries and the top 10 queries with full table scans:  mysql> CALL sys.statement_performance_analyzer(''snapshot'', NULL, NULL); Query OK, 0 rows affected (0.01 sec)                                     mysql> SET @sys.statement_performance_analyzer.limit = 10; Query OK, 0 rows affected (0.00 sec)            mysql> CALL sys.statement_performance_analyzer(''overall'', NULL, ''with_runtimes_in_95th_percentile,with_full_table_scans''); +-----------------------------------------+ | Next Output                             | +-----------------------------------------+ | Queries with Runtime in 95th Percentile | +-----------------------------------------+ 1 row in set (0.01 sec)  ...  +-------------------------------------+ | Next Output                         | +-------------------------------------+ | Top 10 Queries with Full Table Scan | +-------------------------------------+ 1 row in set (0.09 sec)  ...   Use a custom view showing the top 10 query sorted by total execution time refreshing the view every minute using the watch command in Linux.  mysql> CREATE OR REPLACE VIEW mydb.my_statements AS -> SELECT sys.format_statement(DIGEST_TEXT) AS query, ->        SCHEMA_NAME AS db, ->        COUNT_STAR AS exec_count, ->        sys.format_time(SUM_TIMER_WAIT) AS total_latency, ->        sys.format_time(AVG_TIMER_WAIT) AS avg_latency, ->        ROUND(IFNULL(SUM_ROWS_SENT / NULLIF(COUNT_STAR, 0), 0)) AS rows_sent_avg, ->        ROUND(IFNULL(SUM_ROWS_EXAMINED / NULLIF(COUNT_STAR, 0), 0)) AS rows_examined_avg, ->        ROUND(IFNULL(SUM_ROWS_AFFECTED / NULLIF(COUNT_STAR, 0), 0)) AS rows_affected_avg, ->        DIGEST AS digest ->   FROM performance_schema.events_statements_summary_by_digest -> ORDER BY SUM_TIMER_WAIT DESC; Query OK, 0 rows affected (0.01 sec)  mysql> CALL sys.statement_performance_analyzer(''create_table'', ''mydb.digests_prev'', NULL); Query OK, 0 rows affected (0.10 sec)  shell$ watch -n 60 "mysql sys --table -e " > SET @sys.statement_performance_analyzer.view = ''mydb.my_statements''; > SET @sys.statement_performance_analyzer.limit = 10; > CALL statement_performance_analyzer(''snapshot'', NULL, NULL); > CALL statement_performance_analyzer(''delta'', ''mydb.digests_prev'', ''custom''); > CALL statement_performance_analyzer(''save'', ''mydb.digests_prev'', NULL); > ""  Every 60.0s: mysql sys --table -e "                                                                                                   ...  Mon Dec 22 10:58:51 2014  +----------------------------------+ | Next Output                      | +----------------------------------+ | Top 10 Queries Using Custom View | +----------------------------------+ +-------------------+-------+------------+---------------+-------------+---------------+-------------------+-------------------+----------------------------------+ | query             | db    | exec_count | total_latency | avg_latency | rows_sent_avg | rows_examined_avg | rows_affected_avg | digest                           | +-------------------+-------+------------+---------------+-------------+---------------+-------------------+-------------------+----------------------------------+ ... '
BEGIN DECLARE v_table_exists, v_tmp_digests_table_exists, v_custom_view_exists ENUM('', 'BASE TABLE', 'VIEW', 'TEMPORARY') DEFAULT ''; DECLARE v_this_thread_enabled ENUM('YES', 'NO'); DECLARE v_force_new_snapshot BOOLEAN DEFAULT FALSE; DECLARE v_digests_table VARCHAR(133); DECLARE v_quoted_table, v_quoted_custom_view VARCHAR(133) DEFAULT ''; DECLARE v_table_db, v_table_name, v_custom_db, v_custom_name VARCHAR(64); DECLARE v_digest_table_template, v_checksum_ref, v_checksum_table text; DECLARE v_sql longtext; DECLARE v_error_msg VARCHAR(128);   SELECT INSTRUMENTED INTO v_this_thread_enabled FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); IF (v_this_thread_enabled = 'YES') THEN CALL sys.ps_setup_disable_thread(CONNECTION_ID()); END IF;  SET @log_bin := @@sql_log_bin; IF (@log_bin = 1) THEN SET sql_log_bin = 0; END IF;   IF (@sys.statement_performance_analyzer.limit IS NULL) THEN SET @sys.statement_performance_analyzer.limit = sys.sys_get_config('statement_performance_analyzer.limit', '100'); END IF; IF (@sys.debug IS NULL) THEN SET @sys.debug                                = sys.sys_get_config('debug'                               , 'OFF'); END IF;   IF (in_table = 'NOW()') THEN SET v_force_new_snapshot = TRUE, in_table             = NULL; ELSEIF (in_table IS NOT NULL) THEN IF (NOT INSTR(in_table, '.')) THEN SET v_table_db   = DATABASE(), v_table_name = in_table; ELSE SET v_table_db   = SUBSTRING_INDEX(in_table, '.', 1); SET v_table_name = SUBSTRING(in_table, CHAR_LENGTH(v_table_db)+2); END IF;  SET v_quoted_table = CONCAT('`', v_table_db, '`.`', v_table_name, '`');  IF (@sys.debug = 'ON') THEN SELECT CONCAT('in_table is: db = ''', v_table_db, ''', table = ''', v_table_name, '''') AS 'Debug'; END IF;  IF (v_table_db = DATABASE() AND (v_table_name = 'tmp_digests' OR v_table_name = 'tmp_digests_delta')) THEN SET v_error_msg = CONCAT('Invalid value for in_table: ', v_quoted_table, ' is reserved table name.'); SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = v_error_msg; END IF;  CALL sys.table_exists(v_table_db, v_table_name, v_table_exists); IF (@sys.debug = 'ON') THEN SELECT CONCAT('v_table_exists = ', v_table_exists) AS 'Debug'; END IF;  IF (v_table_exists = 'BASE TABLE') THEN SET v_checksum_ref = ( SELECT GROUP_CONCAT(CONCAT(COLUMN_NAME, COLUMN_TYPE) ORDER BY ORDINAL_POSITION) AS Checksum FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = 'performance_schema' AND TABLE_NAME = 'events_statements_summary_by_digest' ), v_checksum_table = ( SELECT GROUP_CONCAT(CONCAT(COLUMN_NAME, COLUMN_TYPE) ORDER BY ORDINAL_POSITION) AS Checksum FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = v_table_db AND TABLE_NAME = v_table_name );  IF (v_checksum_ref <> v_checksum_table) THEN SET v_error_msg = CONCAT('The table ', IF(CHAR_LENGTH(v_quoted_table) > 93, CONCAT('...', SUBSTRING(v_quoted_table, -90)), v_quoted_table), ' has the wrong definition.'); SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = v_error_msg; END IF; END IF; END IF;   IF (in_views IS NULL OR in_views = '') THEN SET in_views = 'with_runtimes_in_95th_percentile,analysis,with_errors_or_warnings,with_full_table_scans,with_sorting,with_temp_tables'; END IF;   CALL sys.table_exists(DATABASE(), 'tmp_digests', v_tmp_digests_table_exists); IF (@sys.debug = 'ON') THEN SELECT CONCAT('v_tmp_digests_table_exists = ', v_tmp_digests_table_exists) AS 'Debug'; END IF;  CASE WHEN in_action IN ('snapshot', 'overall') THEN IF (in_table IS NOT NULL) THEN IF (NOT v_table_exists IN ('TEMPORARY', 'BASE TABLE')) THEN SET v_error_msg = CONCAT('The ', in_action, ' action requires in_table to be NULL, NOW() or specify an existing table.', ' The table ', IF(CHAR_LENGTH(v_quoted_table) > 16, CONCAT('...', SUBSTRING(v_quoted_table, -13)), v_quoted_table), ' does not exist.'); SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = v_error_msg; END IF; END IF;  WHEN in_action IN ('delta', 'save') THEN IF (v_table_exists NOT IN ('TEMPORARY', 'BASE TABLE')) THEN SET v_error_msg = CONCAT('The ', in_action, ' action requires in_table to be an existing table.', IF(in_table IS NOT NULL, CONCAT(' The table ', IF(CHAR_LENGTH(v_quoted_table) > 39, CONCAT('...', SUBSTRING(v_quoted_table, -36)), v_quoted_table), ' does not exist.'), '')); SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = v_error_msg; END IF;  IF (in_action = 'delta' AND v_tmp_digests_table_exists <> 'TEMPORARY') THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'An existing snapshot generated with the statement_performance_analyzer() must exist.'; END IF; WHEN in_action = 'create_tmp' THEN IF (v_table_exists = 'TEMPORARY') THEN SET v_error_msg = CONCAT('Cannot create the table ', IF(CHAR_LENGTH(v_quoted_table) > 72, CONCAT('...', SUBSTRING(v_quoted_table, -69)), v_quoted_table), ' as it already exists.'); SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = v_error_msg; END IF;  WHEN in_action = 'create_table' THEN IF (v_table_exists <> '') THEN SET v_error_msg = CONCAT('Cannot create the table ', IF(CHAR_LENGTH(v_quoted_table) > 52, CONCAT('...', SUBSTRING(v_quoted_table, -49)), v_quoted_table), ' as it already exists', IF(v_table_exists = 'TEMPORARY', ' as a temporary table.', '.')); SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = v_error_msg; END IF;  WHEN in_action = 'cleanup' THEN DO (SELECT 1); ELSE SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unknown action. Supported actions are: cleanup, create_table, create_tmp, delta, overall, save, snapshot'; END CASE;  SET v_digest_table_template = 'CREATE %{TEMPORARY}TABLE %{TABLE_NAME} ( `SCHEMA_NAME` varchar(64) DEFAULT NULL, `DIGEST` varchar(32) DEFAULT NULL, `DIGEST_TEXT` longtext, `COUNT_STAR` bigint(20) unsigned NOT NULL, `SUM_TIMER_WAIT` bigint(20) unsigned NOT NULL, `MIN_TIMER_WAIT` bigint(20) unsigned NOT NULL, `AVG_TIMER_WAIT` bigint(20) unsigned NOT NULL, `MAX_TIMER_WAIT` bigint(20) unsigned NOT NULL, `SUM_LOCK_TIME` bigint(20) unsigned NOT NULL, `SUM_ERRORS` bigint(20) unsigned NOT NULL, `SUM_WARNINGS` bigint(20) unsigned NOT NULL, `SUM_ROWS_AFFECTED` bigint(20) unsigned NOT NULL, `SUM_ROWS_SENT` bigint(20) unsigned NOT NULL, `SUM_ROWS_EXAMINED` bigint(20) unsigned NOT NULL, `SUM_CREATED_TMP_DISK_TABLES` bigint(20) unsigned NOT NULL, `SUM_CREATED_TMP_TABLES` bigint(20) unsigned NOT NULL, `SUM_SELECT_FULL_JOIN` bigint(20) unsigned NOT NULL, `SUM_SELECT_FULL_RANGE_JOIN` bigint(20) unsigned NOT NULL, `SUM_SELECT_RANGE` bigint(20) unsigned NOT NULL, `SUM_SELECT_RANGE_CHECK` bigint(20) unsigned NOT NULL, `SUM_SELECT_SCAN` bigint(20) unsigned NOT NULL, `SUM_SORT_MERGE_PASSES` bigint(20) unsigned NOT NULL, `SUM_SORT_RANGE` bigint(20) unsigned NOT NULL, `SUM_SORT_ROWS` bigint(20) unsigned NOT NULL, `SUM_SORT_SCAN` bigint(20) unsigned NOT NULL, `SUM_NO_INDEX_USED` bigint(20) unsigned NOT NULL, `SUM_NO_GOOD_INDEX_USED` bigint(20) unsigned NOT NULL, `FIRST_SEEN` timestamp NULL DEFAULT NULL, `LAST_SEEN` timestamp NULL DEFAULT NULL, INDEX (SCHEMA_NAME, DIGEST) ) DEFAULT CHARSET=utf8';  IF (v_force_new_snapshot OR in_action = 'snapshot' OR (in_action = 'overall' AND in_table IS NULL) OR (in_action = 'save' AND v_tmp_digests_table_exists <> 'TEMPORARY') ) THEN IF (v_tmp_digests_table_exists = 'TEMPORARY') THEN IF (@sys.debug = 'ON') THEN SELECT 'DROP TEMPORARY TABLE IF EXISTS tmp_digests' AS 'Debug'; END IF; DROP TEMPORARY TABLE IF EXISTS tmp_digests; END IF; CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, '%{TEMPORARY}', 'TEMPORARY '), '%{TABLE_NAME}', 'tmp_digests'));  SET v_sql = CONCAT('INSERT INTO tmp_digests SELECT * FROM ', IF(in_table IS NULL OR in_action = 'save', 'performance_schema.events_statements_summary_by_digest', v_quoted_table)); CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (in_action IN ('create_table', 'create_tmp')) THEN IF (in_action = 'create_table') THEN CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, '%{TEMPORARY}', ''), '%{TABLE_NAME}', v_quoted_table)); ELSE CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, '%{TEMPORARY}', 'TEMPORARY '), '%{TABLE_NAME}', v_quoted_table)); END IF; ELSEIF (in_action = 'save') THEN CALL sys.execute_prepared_stmt(CONCAT('DELETE FROM ', v_quoted_table)); CALL sys.execute_prepared_stmt(CONCAT('INSERT INTO ', v_quoted_table, ' SELECT * FROM tmp_digests')); ELSEIF (in_action = 'cleanup') THEN DROP TEMPORARY TABLE IF EXISTS sys.tmp_digests; DROP TEMPORARY TABLE IF EXISTS sys.tmp_digests_delta; ELSEIF (in_action IN ('overall', 'delta')) THEN IF (in_action = 'overall') THEN IF (in_table IS NULL) THEN SET v_digests_table = 'tmp_digests'; ELSE SET v_digests_table = v_quoted_table; END IF; ELSE SET v_digests_table = 'tmp_digests_delta'; DROP TEMPORARY TABLE IF EXISTS tmp_digests_delta; CREATE TEMPORARY TABLE tmp_digests_delta LIKE tmp_digests; SET v_sql = CONCAT('INSERT INTO tmp_digests_delta SELECT `d_end`.`SCHEMA_NAME`, `d_end`.`DIGEST`, `d_end`.`DIGEST_TEXT`, `d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0) AS ''COUNT_STAR'', `d_end`.`SUM_TIMER_WAIT`-IFNULL(`d_start`.`SUM_TIMER_WAIT`, 0) AS ''SUM_TIMER_WAIT'', `d_end`.`MIN_TIMER_WAIT` AS ''MIN_TIMER_WAIT'', IFNULL((`d_end`.`SUM_TIMER_WAIT`-IFNULL(`d_start`.`SUM_TIMER_WAIT`, 0))/NULLIF(`d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0), 0), 0) AS ''AVG_TIMER_WAIT'', `d_end`.`MAX_TIMER_WAIT` AS ''MAX_TIMER_WAIT'', `d_end`.`SUM_LOCK_TIME`-IFNULL(`d_start`.`SUM_LOCK_TIME`, 0) AS ''SUM_LOCK_TIME'', `d_end`.`SUM_ERRORS`-IFNULL(`d_start`.`SUM_ERRORS`, 0) AS ''SUM_ERRORS'', `d_end`.`SUM_WARNINGS`-IFNULL(`d_start`.`SUM_WARNINGS`, 0) AS ''SUM_WARNINGS'', `d_end`.`SUM_ROWS_AFFECTED`-IFNULL(`d_start`.`SUM_ROWS_AFFECTED`, 0) AS ''SUM_ROWS_AFFECTED'', `d_end`.`SUM_ROWS_SENT`-IFNULL(`d_start`.`SUM_ROWS_SENT`, 0) AS ''SUM_ROWS_SENT'', `d_end`.`SUM_ROWS_EXAMINED`-IFNULL(`d_start`.`SUM_ROWS_EXAMINED`, 0) AS ''SUM_ROWS_EXAMINED'', `d_end`.`SUM_CREATED_TMP_DISK_TABLES`-IFNULL(`d_start`.`SUM_CREATED_TMP_DISK_TABLES`, 0) AS ''SUM_CREATED_TMP_DISK_TABLES'', `d_end`.`SUM_CREATED_TMP_TABLES`-IFNULL(`d_start`.`SUM_CREATED_TMP_TABLES`, 0) AS ''SUM_CREATED_TMP_TABLES'', `d_end`.`SUM_SELECT_FULL_JOIN`-IFNULL(`d_start`.`SUM_SELECT_FULL_JOIN`, 0) AS ''SUM_SELECT_FULL_JOIN'', `d_end`.`SUM_SELECT_FULL_RANGE_JOIN`-IFNULL(`d_start`.`SUM_SELECT_FULL_RANGE_JOIN`, 0) AS ''SUM_SELECT_FULL_RANGE_JOIN'', `d_end`.`SUM_SELECT_RANGE`-IFNULL(`d_start`.`SUM_SELECT_RANGE`, 0) AS ''SUM_SELECT_RANGE'', `d_end`.`SUM_SELECT_RANGE_CHECK`-IFNULL(`d_start`.`SUM_SELECT_RANGE_CHECK`, 0) AS ''SUM_SELECT_RANGE_CHECK'', `d_end`.`SUM_SELECT_SCAN`-IFNULL(`d_start`.`SUM_SELECT_SCAN`, 0) AS ''SUM_SELECT_SCAN'', `d_end`.`SUM_SORT_MERGE_PASSES`-IFNULL(`d_start`.`SUM_SORT_MERGE_PASSES`, 0) AS ''SUM_SORT_MERGE_PASSES'', `d_end`.`SUM_SORT_RANGE`-IFNULL(`d_start`.`SUM_SORT_RANGE`, 0) AS ''SUM_SORT_RANGE'', `d_end`.`SUM_SORT_ROWS`-IFNULL(`d_start`.`SUM_SORT_ROWS`, 0) AS ''SUM_SORT_ROWS'', `d_end`.`SUM_SORT_SCAN`-IFNULL(`d_start`.`SUM_SORT_SCAN`, 0) AS ''SUM_SORT_SCAN'', `d_end`.`SUM_NO_INDEX_USED`-IFNULL(`d_start`.`SUM_NO_INDEX_USED`, 0) AS ''SUM_NO_INDEX_USED'', `d_end`.`SUM_NO_GOOD_INDEX_USED`-IFNULL(`d_start`.`SUM_NO_GOOD_INDEX_USED`, 0) AS ''SUM_NO_GOOD_INDEX_USED'', `d_end`.`FIRST_SEEN`, `d_end`.`LAST_SEEN` FROM tmp_digests d_end LEFT OUTER JOIN ', v_quoted_table, ' d_start ON `d_start`.`DIGEST` = `d_end`.`DIGEST` AND (`d_start`.`SCHEMA_NAME` = `d_end`.`SCHEMA_NAME` OR (`d_start`.`SCHEMA_NAME` IS NULL AND `d_end`.`SCHEMA_NAME` IS NULL) ) WHERE `d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0) > 0'); CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET('with_runtimes_in_95th_percentile', in_views)) THEN SELECT 'Queries with Runtime in 95th Percentile' AS 'Next Output';  DROP TEMPORARY TABLE IF EXISTS tmp_digest_avg_latency_distribution1; DROP TEMPORARY TABLE IF EXISTS tmp_digest_avg_latency_distribution2; DROP TEMPORARY TABLE IF EXISTS tmp_digest_95th_percentile_by_avg_us;  CREATE TEMPORARY TABLE tmp_digest_avg_latency_distribution1 ( cnt bigint unsigned NOT NULL, avg_us decimal(21,0) NOT NULL, PRIMARY KEY (avg_us) ) ENGINE=InnoDB;  SET v_sql = CONCAT('INSERT INTO tmp_digest_avg_latency_distribution1 SELECT COUNT(*) cnt,  ROUND(avg_timer_wait/1000000) AS avg_us FROM ', v_digests_table, ' GROUP BY avg_us'); CALL sys.execute_prepared_stmt(v_sql);  CREATE TEMPORARY TABLE tmp_digest_avg_latency_distribution2 LIKE tmp_digest_avg_latency_distribution1; INSERT INTO tmp_digest_avg_latency_distribution2 SELECT * FROM tmp_digest_avg_latency_distribution1;  CREATE TEMPORARY TABLE tmp_digest_95th_percentile_by_avg_us ( avg_us decimal(21,0) NOT NULL, percentile decimal(46,4) NOT NULL, PRIMARY KEY (avg_us) ) ENGINE=InnoDB;  SET v_sql = CONCAT('INSERT INTO tmp_digest_95th_percentile_by_avg_us SELECT s2.avg_us avg_us, IFNULL(SUM(s1.cnt)/NULLIF((SELECT COUNT(*) FROM ', v_digests_table, '), 0), 0) percentile FROM tmp_digest_avg_latency_distribution1 AS s1 JOIN tmp_digest_avg_latency_distribution2 AS s2 ON s1.avg_us <= s2.avg_us GROUP BY s2.avg_us HAVING percentile > 0.95 ORDER BY percentile LIMIT 1'); CALL sys.execute_prepared_stmt(v_sql);  SET v_sql = REPLACE( REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'statements_with_runtimes_in_95th_percentile' ), '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table ), 'sys.x$ps_digest_95th_percentile_by_avg_us', '`sys`.`x$ps_digest_95th_percentile_by_avg_us`' ); CALL sys.execute_prepared_stmt(v_sql);  DROP TEMPORARY TABLE tmp_digest_avg_latency_distribution1; DROP TEMPORARY TABLE tmp_digest_avg_latency_distribution2; DROP TEMPORARY TABLE tmp_digest_95th_percentile_by_avg_us; END IF;  IF (FIND_IN_SET('analysis', in_views)) THEN SELECT CONCAT('Top ', @sys.statement_performance_analyzer.limit, ' Queries Ordered by Total Latency') AS 'Next Output'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'statement_analysis' ), '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, ' LIMIT ', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET('with_errors_or_warnings', in_views)) THEN SELECT CONCAT('Top ', @sys.statement_performance_analyzer.limit, ' Queries with Errors') AS 'Next Output'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'statements_with_errors_or_warnings' ), '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, ' LIMIT ', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET('with_full_table_scans', in_views)) THEN SELECT CONCAT('Top ', @sys.statement_performance_analyzer.limit, ' Queries with Full Table Scan') AS 'Next Output'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'statements_with_full_table_scans' ), '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, ' LIMIT ', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET('with_sorting', in_views)) THEN SELECT CONCAT('Top ', @sys.statement_performance_analyzer.limit, ' Queries with Sorting') AS 'Next Output'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'statements_with_sorting' ), '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, ' LIMIT ', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET('with_temp_tables', in_views)) THEN SELECT CONCAT('Top ', @sys.statement_performance_analyzer.limit, ' Queries with Internal Temporary Tables') AS 'Next Output'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'statements_with_temp_tables' ), '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, ' LIMIT ', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET('custom', in_views)) THEN SELECT CONCAT('Top ', @sys.statement_performance_analyzer.limit, ' Queries Using Custom View') AS 'Next Output';  IF (@sys.statement_performance_analyzer.view IS NULL) THEN SET @sys.statement_performance_analyzer.view = sys.sys_get_config('statement_performance_analyzer.view', NULL); END IF; IF (@sys.statement_performance_analyzer.view IS NULL) THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'The @sys.statement_performance_analyzer.view user variable must be set with the view or query to use.'; END IF;  IF (NOT INSTR(@sys.statement_performance_analyzer.view, ' ')) THEN IF (NOT INSTR(@sys.statement_performance_analyzer.view, '.')) THEN SET v_custom_db   = DATABASE(), v_custom_name = @sys.statement_performance_analyzer.view; ELSE SET v_custom_db   = SUBSTRING_INDEX(@sys.statement_performance_analyzer.view, '.', 1); SET v_custom_name = SUBSTRING(@sys.statement_performance_analyzer.view, CHAR_LENGTH(v_custom_db)+2); END IF;  CALL sys.table_exists(v_custom_db, v_custom_name, v_custom_view_exists); IF (v_custom_view_exists <> 'VIEW') THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'The @sys.statement_performance_analyzer.view user variable is set but specified neither an existing view nor a query.'; END IF;  SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = v_custom_db AND TABLE_NAME = v_custom_name ), '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table ); ELSE SET v_sql = REPLACE(@sys.statement_performance_analyzer.view, '`performance_schema`.`events_statements_summary_by_digest`', v_digests_table); END IF;  IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, ' LIMIT ', @sys.statement_performance_analyzer.limit); END IF;  CALL sys.execute_prepared_stmt(v_sql); END IF; END IF;  IF (v_this_thread_enabled = 'YES') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  IF (@log_bin = 1) THEN SET sql_log_bin = @log_bin; END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `table_exists` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`mysql.sys`@`localhost` PROCEDURE `table_exists`( IN in_db VARCHAR(64), IN in_table VARCHAR(64), OUT out_exists ENUM('', 'BASE TABLE', 'VIEW', 'TEMPORARY') )
    SQL SECURITY INVOKER
    COMMENT '\n Description\n \n Tests whether the table specified in in_db and in_table exists either as a regular\n table, or as a temporary table. The returned value corresponds to the table that\n will be used, so if there''s both a temporary and a permanent table with the given\n name, then ''TEMPORARY'' will be returned.\n \n Parameters\n \n in_db (VARCHAR(64)):\n The database name to check for the existance of the table in.\n \n in_table (VARCHAR(64)):\n The name of the table to check the existance of.\n \n out_exists ENUM('''', ''BASE TABLE'', ''VIEW'', ''TEMPORARY''):\n The return value: whether the table exists. The value is one of:\n * ''''           - the table does not exist neither as a base table, view, nor temporary table.\n * ''BASE TABLE'' - the table name exists as a permanent base table table.\n * ''VIEW''       - the table name exists as a view.\n * ''TEMPORARY''  - the table name exists as a temporary table.\n \n Example\n \n mysql> CREATE DATABASE db1;\n Query OK, 1 row affected (0.07 sec)\n \n mysql> use db1;\n Database changed\n mysql> CREATE TABLE t1 (id INT PRIMARY KEY);\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> CREATE TABLE t2 (id INT PRIMARY KEY);\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> CREATE view v_t1 AS SELECT * FROM t1;\n Query OK, 0 rows affected (0.00 sec)\n \n mysql> CREATE TEMPORARY TABLE t1 (id INT PRIMARY KEY);\n Query OK, 0 rows affected (0.00 sec)\n \n mysql> CALL sys.table_exists(''db1'', ''t1'', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.00 sec)\n \n +------------+\n | @exists    |\n +------------+\n | TEMPORARY  |\n +------------+\n 1 row in set (0.00 sec)\n \n mysql> CALL sys.table_exists(''db1'', ''t2'', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.00 sec)\n \n +------------+\n | @exists    |\n +------------+\n | BASE TABLE |\n +------------+\n 1 row in set (0.01 sec)\n \n mysql> CALL sys.table_exists(''db1'', ''v_t1'', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.00 sec)\n \n +---------+\n | @exists |\n +---------+\n | VIEW    |\n +---------+\n 1 row in set (0.00 sec)\n \n mysql> CALL sys.table_exists(''db1'', ''t3'', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.01 sec)\n \n +---------+\n | @exists |\n +---------+\n |         |\n +---------+\n 1 row in set (0.00 sec)\n '
BEGIN DECLARE v_error BOOLEAN DEFAULT FALSE; DECLARE CONTINUE HANDLER FOR 1050 SET v_error = TRUE; DECLARE CONTINUE HANDLER FOR 1146 SET v_error = TRUE;  SET out_exists = '';  IF (EXISTS(SELECT 1 FROM information_schema.TABLES WHERE TABLE_SCHEMA = in_db AND TABLE_NAME = in_table)) THEN SET @sys.tmp.table_exists.SQL = CONCAT('CREATE TEMPORARY TABLE `', in_db, '`.`', in_table, '` (id INT PRIMARY KEY)'); PREPARE stmt_create_table FROM @sys.tmp.table_exists.SQL; EXECUTE stmt_create_table; DEALLOCATE PREPARE stmt_create_table; IF (v_error) THEN SET out_exists = 'TEMPORARY'; ELSE SET @sys.tmp.table_exists.SQL = CONCAT('DROP TEMPORARY TABLE `', in_db, '`.`', in_table, '`'); PREPARE stmt_drop_table FROM @sys.tmp.table_exists.SQL; EXECUTE stmt_drop_table; DEALLOCATE PREPARE stmt_drop_table; SET out_exists = (SELECT TABLE_TYPE FROM information_schema.TABLES WHERE TABLE_SCHEMA = in_db AND TABLE_NAME = in_table); END IF; ELSE SET @sys.tmp.table_exists.SQL = CONCAT('SELECT COUNT(*) FROM `', in_db, '`.`', in_table, '`'); PREPARE stmt_select FROM @sys.tmp.table_exists.SQL; IF (NOT v_error) THEN DEALLOCATE PREPARE stmt_select; SET out_exists = 'TEMPORARY'; END IF; END IF; END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `host_summary`
--

/*!50001 DROP TABLE IF EXISTS `host_summary`*/;
/*!50001 DROP VIEW IF EXISTS `host_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `host_summary` AS select if(isnull(`performance_schema`.`accounts`.`HOST`),'background',`performance_schema`.`accounts`.`HOST`) AS `host`,sum(`stmt`.`total`) AS `statements`,`sys`.`format_time`(sum(`stmt`.`total_latency`)) AS `statement_latency`,`sys`.`format_time`(ifnull((sum(`stmt`.`total_latency`) / nullif(sum(`stmt`.`total`),0)),0)) AS `statement_avg_latency`,sum(`stmt`.`full_scans`) AS `table_scans`,sum(`io`.`ios`) AS `file_ios`,`sys`.`format_time`(sum(`io`.`io_latency`)) AS `file_io_latency`,sum(`performance_schema`.`accounts`.`CURRENT_CONNECTIONS`) AS `current_connections`,sum(`performance_schema`.`accounts`.`TOTAL_CONNECTIONS`) AS `total_connections`,count(distinct `performance_schema`.`accounts`.`USER`) AS `unique_users`,`sys`.`format_bytes`(sum(`mem`.`current_allocated`)) AS `current_memory`,`sys`.`format_bytes`(sum(`mem`.`total_allocated`)) AS `total_memory_allocated` from (((`performance_schema`.`accounts` join `sys`.`x$host_summary_by_statement_latency` `stmt` on((`performance_schema`.`accounts`.`HOST` = `stmt`.`host`))) join `sys`.`x$host_summary_by_file_io` `io` on((`performance_schema`.`accounts`.`HOST` = `io`.`host`))) join `sys`.`x$memory_by_host_by_current_bytes` `mem` on((`performance_schema`.`accounts`.`HOST` = `mem`.`host`))) group by if(isnull(`performance_schema`.`accounts`.`HOST`),'background',`performance_schema`.`accounts`.`HOST`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `host_summary_by_file_io`
--

/*!50001 DROP TABLE IF EXISTS `host_summary_by_file_io`*/;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_file_io`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `host_summary_by_file_io` AS select if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) AS `host`,sum(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR`) AS `ios`,`sys`.`format_time`(sum(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`)) AS `io_latency` from `performance_schema`.`events_waits_summary_by_host_by_event_name` where (`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') group by if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) order by sum(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `host_summary_by_file_io_type`
--

/*!50001 DROP TABLE IF EXISTS `host_summary_by_file_io_type`*/;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_file_io_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `host_summary_by_file_io_type` AS select if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) AS `host`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency` from `performance_schema`.`events_waits_summary_by_host_by_event_name` where ((`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` like 'wait/io/file%') and (`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `host_summary_by_stages`
--

/*!50001 DROP TABLE IF EXISTS `host_summary_by_stages`*/;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_stages`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `host_summary_by_stages` AS select if(isnull(`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`) AS `host`,`performance_schema`.`events_stages_summary_by_host_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_stages_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_stages_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_stages_summary_by_host_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency` from `performance_schema`.`events_stages_summary_by_host_by_event_name` where (`performance_schema`.`events_stages_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_stages_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `host_summary_by_statement_latency`
--

/*!50001 DROP TABLE IF EXISTS `host_summary_by_statement_latency`*/;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_statement_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `host_summary_by_statement_latency` AS select if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`) AS `host`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`COUNT_STAR`) AS `total`,`sys`.`format_time`(sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`)) AS `total_latency`,`sys`.`format_time`(max(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`MAX_TIMER_WAIT`)) AS `max_latency`,`sys`.`format_time`(sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_LOCK_TIME`)) AS `lock_latency`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_SENT`) AS `rows_sent`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_EXAMINED`) AS `rows_examined`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_AFFECTED`) AS `rows_affected`,(sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_INDEX_USED`) + sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_GOOD_INDEX_USED`)) AS `full_scans` from `performance_schema`.`events_statements_summary_by_host_by_event_name` group by if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`) order by sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `host_summary_by_statement_type`
--

/*!50001 DROP TABLE IF EXISTS `host_summary_by_statement_type`*/;
/*!50001 DROP VIEW IF EXISTS `host_summary_by_statement_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `host_summary_by_statement_type` AS select if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`) AS `host`,substring_index(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`EVENT_NAME`,'/',-(1)) AS `statement`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_LOCK_TIME`) AS `lock_latency`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_SENT` AS `rows_sent`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_EXAMINED` AS `rows_examined`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_AFFECTED` AS `rows_affected`,(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_INDEX_USED` + `performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_GOOD_INDEX_USED`) AS `full_scans` from `performance_schema`.`events_statements_summary_by_host_by_event_name` where (`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `innodb_buffer_stats_by_schema`
--

/*!50001 DROP TABLE IF EXISTS `innodb_buffer_stats_by_schema`*/;
/*!50001 DROP VIEW IF EXISTS `innodb_buffer_stats_by_schema`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `innodb_buffer_stats_by_schema` AS select if((locate('.',`ibp`.`TABLE_NAME`) = 0),'InnoDB System',replace(substring_index(`ibp`.`TABLE_NAME`,'.',1),'`','')) AS `object_schema`,`sys`.`format_bytes`(sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`))) AS `allocated`,`sys`.`format_bytes`(sum(`ibp`.`DATA_SIZE`)) AS `data`,count(`ibp`.`PAGE_NUMBER`) AS `pages`,count(if((`ibp`.`IS_HASHED` = 'YES'),1,NULL)) AS `pages_hashed`,count(if((`ibp`.`IS_OLD` = 'YES'),1,NULL)) AS `pages_old`,round((sum(`ibp`.`NUMBER_RECORDS`) / count(distinct `ibp`.`INDEX_NAME`)),0) AS `rows_cached` from `information_schema`.`innodb_buffer_page` `ibp` where (`ibp`.`TABLE_NAME` is not null) group by `object_schema` order by sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`)) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `innodb_buffer_stats_by_table`
--

/*!50001 DROP TABLE IF EXISTS `innodb_buffer_stats_by_table`*/;
/*!50001 DROP VIEW IF EXISTS `innodb_buffer_stats_by_table`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `innodb_buffer_stats_by_table` AS select if((locate('.',`ibp`.`TABLE_NAME`) = 0),'InnoDB System',replace(substring_index(`ibp`.`TABLE_NAME`,'.',1),'`','')) AS `object_schema`,replace(substring_index(`ibp`.`TABLE_NAME`,'.',-(1)),'`','') AS `object_name`,`sys`.`format_bytes`(sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`))) AS `allocated`,`sys`.`format_bytes`(sum(`ibp`.`DATA_SIZE`)) AS `data`,count(`ibp`.`PAGE_NUMBER`) AS `pages`,count(if((`ibp`.`IS_HASHED` = 'YES'),1,NULL)) AS `pages_hashed`,count(if((`ibp`.`IS_OLD` = 'YES'),1,NULL)) AS `pages_old`,round((sum(`ibp`.`NUMBER_RECORDS`) / count(distinct `ibp`.`INDEX_NAME`)),0) AS `rows_cached` from `information_schema`.`innodb_buffer_page` `ibp` where (`ibp`.`TABLE_NAME` is not null) group by `object_schema`,`object_name` order by sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`)) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `innodb_lock_waits`
--

/*!50001 DROP TABLE IF EXISTS `innodb_lock_waits`*/;
/*!50001 DROP VIEW IF EXISTS `innodb_lock_waits`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `innodb_lock_waits` AS select `r`.`trx_wait_started` AS `wait_started`,timediff(now(),`r`.`trx_wait_started`) AS `wait_age`,timestampdiff(SECOND,`r`.`trx_wait_started`,now()) AS `wait_age_secs`,`rl`.`lock_table` AS `locked_table`,`rl`.`lock_index` AS `locked_index`,`rl`.`lock_type` AS `locked_type`,`r`.`trx_id` AS `waiting_trx_id`,`r`.`trx_started` AS `waiting_trx_started`,timediff(now(),`r`.`trx_started`) AS `waiting_trx_age`,`r`.`trx_rows_locked` AS `waiting_trx_rows_locked`,`r`.`trx_rows_modified` AS `waiting_trx_rows_modified`,`r`.`trx_mysql_thread_id` AS `waiting_pid`,`sys`.`format_statement`(`r`.`trx_query`) AS `waiting_query`,`rl`.`lock_id` AS `waiting_lock_id`,`rl`.`lock_mode` AS `waiting_lock_mode`,`b`.`trx_id` AS `blocking_trx_id`,`b`.`trx_mysql_thread_id` AS `blocking_pid`,`sys`.`format_statement`(`b`.`trx_query`) AS `blocking_query`,`bl`.`lock_id` AS `blocking_lock_id`,`bl`.`lock_mode` AS `blocking_lock_mode`,`b`.`trx_started` AS `blocking_trx_started`,timediff(now(),`b`.`trx_started`) AS `blocking_trx_age`,`b`.`trx_rows_locked` AS `blocking_trx_rows_locked`,`b`.`trx_rows_modified` AS `blocking_trx_rows_modified`,concat('KILL QUERY ',`b`.`trx_mysql_thread_id`) AS `sql_kill_blocking_query`,concat('KILL ',`b`.`trx_mysql_thread_id`) AS `sql_kill_blocking_connection` from ((((`information_schema`.`innodb_lock_waits` `w` join `information_schema`.`innodb_trx` `b` on((`b`.`trx_id` = `w`.`blocking_trx_id`))) join `information_schema`.`innodb_trx` `r` on((`r`.`trx_id` = `w`.`requesting_trx_id`))) join `information_schema`.`innodb_locks` `bl` on((`bl`.`lock_id` = `w`.`blocking_lock_id`))) join `information_schema`.`innodb_locks` `rl` on((`rl`.`lock_id` = `w`.`requested_lock_id`))) order by `r`.`trx_wait_started` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `io_by_thread_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `io_by_thread_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `io_by_thread_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `io_by_thread_by_latency` AS select if(isnull(`performance_schema`.`threads`.`PROCESSLIST_ID`),substring_index(`performance_schema`.`threads`.`NAME`,'/',-(1)),concat(`performance_schema`.`threads`.`PROCESSLIST_USER`,'@',`performance_schema`.`threads`.`PROCESSLIST_HOST`)) AS `user`,sum(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`COUNT_STAR`) AS `total`,`sys`.`format_time`(sum(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`SUM_TIMER_WAIT`)) AS `total_latency`,`sys`.`format_time`(min(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`MIN_TIMER_WAIT`)) AS `min_latency`,`sys`.`format_time`(avg(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`AVG_TIMER_WAIT`)) AS `avg_latency`,`sys`.`format_time`(max(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`MAX_TIMER_WAIT`)) AS `max_latency`,`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`THREAD_ID` AS `thread_id`,`performance_schema`.`threads`.`PROCESSLIST_ID` AS `processlist_id` from (`performance_schema`.`events_waits_summary_by_thread_by_event_name` left join `performance_schema`.`threads` on((`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`THREAD_ID` = `performance_schema`.`threads`.`THREAD_ID`))) where ((`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') and (`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`SUM_TIMER_WAIT` > 0)) group by `performance_schema`.`events_waits_summary_by_thread_by_event_name`.`THREAD_ID`,`performance_schema`.`threads`.`PROCESSLIST_ID`,`user` order by sum(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `io_global_by_file_by_bytes`
--

/*!50001 DROP TABLE IF EXISTS `io_global_by_file_by_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `io_global_by_file_by_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `io_global_by_file_by_bytes` AS select `sys`.`format_path`(`performance_schema`.`file_summary_by_instance`.`FILE_NAME`) AS `file`,`performance_schema`.`file_summary_by_instance`.`COUNT_READ` AS `count_read`,`sys`.`format_bytes`(`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ`) AS `total_read`,`sys`.`format_bytes`(ifnull((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` / nullif(`performance_schema`.`file_summary_by_instance`.`COUNT_READ`,0)),0)) AS `avg_read`,`performance_schema`.`file_summary_by_instance`.`COUNT_WRITE` AS `count_write`,`sys`.`format_bytes`(`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`) AS `total_written`,`sys`.`format_bytes`(ifnull((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE` / nullif(`performance_schema`.`file_summary_by_instance`.`COUNT_WRITE`,0)),0.00)) AS `avg_write`,`sys`.`format_bytes`((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` + `performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`)) AS `total`,ifnull(round((100 - ((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` / nullif((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` + `performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`),0)) * 100)),2),0.00) AS `write_pct` from `performance_schema`.`file_summary_by_instance` order by (`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` + `performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `io_global_by_file_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `io_global_by_file_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `io_global_by_file_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `io_global_by_file_by_latency` AS select `sys`.`format_path`(`performance_schema`.`file_summary_by_instance`.`FILE_NAME`) AS `file`,`performance_schema`.`file_summary_by_instance`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_WAIT`) AS `total_latency`,`performance_schema`.`file_summary_by_instance`.`COUNT_READ` AS `count_read`,`sys`.`format_time`(`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_READ`) AS `read_latency`,`performance_schema`.`file_summary_by_instance`.`COUNT_WRITE` AS `count_write`,`sys`.`format_time`(`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_WRITE`) AS `write_latency`,`performance_schema`.`file_summary_by_instance`.`COUNT_MISC` AS `count_misc`,`sys`.`format_time`(`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_MISC`) AS `misc_latency` from `performance_schema`.`file_summary_by_instance` order by `performance_schema`.`file_summary_by_instance`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `io_global_by_wait_by_bytes`
--

/*!50001 DROP TABLE IF EXISTS `io_global_by_wait_by_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `io_global_by_wait_by_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `io_global_by_wait_by_bytes` AS select substring_index(`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME`,'/',-(2)) AS `event_name`,`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`MIN_TIMER_WAIT`) AS `min_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency`,`performance_schema`.`file_summary_by_event_name`.`COUNT_READ` AS `count_read`,`sys`.`format_bytes`(`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ`) AS `total_read`,`sys`.`format_bytes`(ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_READ`,0)),0)) AS `avg_read`,`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE` AS `count_write`,`sys`.`format_bytes`(`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE`) AS `total_written`,`sys`.`format_bytes`(ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE`,0)),0)) AS `avg_written`,`sys`.`format_bytes`((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` + `performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ`)) AS `total_requested` from `performance_schema`.`file_summary_by_event_name` where ((`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') and (`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` > 0)) order by (`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` + `performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `io_global_by_wait_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `io_global_by_wait_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `io_global_by_wait_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `io_global_by_wait_by_latency` AS select substring_index(`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME`,'/',-(2)) AS `event_name`,`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_READ`) AS `read_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WRITE`) AS `write_latency`,`sys`.`format_time`(`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_MISC`) AS `misc_latency`,`performance_schema`.`file_summary_by_event_name`.`COUNT_READ` AS `count_read`,`sys`.`format_bytes`(`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ`) AS `total_read`,`sys`.`format_bytes`(ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_READ`,0)),0)) AS `avg_read`,`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE` AS `count_write`,`sys`.`format_bytes`(`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE`) AS `total_written`,`sys`.`format_bytes`(ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE`,0)),0)) AS `avg_written` from `performance_schema`.`file_summary_by_event_name` where ((`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') and (`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` > 0)) order by `performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `latest_file_io`
--

/*!50001 DROP TABLE IF EXISTS `latest_file_io`*/;
/*!50001 DROP VIEW IF EXISTS `latest_file_io`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `latest_file_io` AS select if(isnull(`information_schema`.`processlist`.`ID`),concat(substring_index(`performance_schema`.`threads`.`NAME`,'/',-(1)),':',`performance_schema`.`events_waits_history_long`.`THREAD_ID`),concat(`information_schema`.`processlist`.`USER`,'@',`information_schema`.`processlist`.`HOST`,':',`information_schema`.`processlist`.`ID`)) AS `thread`,`sys`.`format_path`(`performance_schema`.`events_waits_history_long`.`OBJECT_NAME`) AS `file`,`sys`.`format_time`(`performance_schema`.`events_waits_history_long`.`TIMER_WAIT`) AS `latency`,`performance_schema`.`events_waits_history_long`.`OPERATION` AS `operation`,`sys`.`format_bytes`(`performance_schema`.`events_waits_history_long`.`NUMBER_OF_BYTES`) AS `requested` from ((`performance_schema`.`events_waits_history_long` join `performance_schema`.`threads` on((`performance_schema`.`events_waits_history_long`.`THREAD_ID` = `performance_schema`.`threads`.`THREAD_ID`))) left join `information_schema`.`processlist` on((`performance_schema`.`threads`.`PROCESSLIST_ID` = `information_schema`.`processlist`.`ID`))) where ((`performance_schema`.`events_waits_history_long`.`OBJECT_NAME` is not null) and (`performance_schema`.`events_waits_history_long`.`EVENT_NAME` like 'wait/io/file/%')) order by `performance_schema`.`events_waits_history_long`.`TIMER_START` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `memory_by_host_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `memory_by_host_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `memory_by_host_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `memory_by_host_by_current_bytes` AS select if(isnull(`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`) AS `host`,sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_COUNT_USED`) AS `current_count_used`,`sys`.`format_bytes`(sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`)) AS `current_allocated`,`sys`.`format_bytes`(ifnull((sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) / nullif(sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_COUNT_USED`),0)),0)) AS `current_avg_alloc`,`sys`.`format_bytes`(max(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`)) AS `current_max_alloc`,`sys`.`format_bytes`(sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`SUM_NUMBER_OF_BYTES_ALLOC`)) AS `total_allocated` from `performance_schema`.`memory_summary_by_host_by_event_name` group by if(isnull(`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`) order by sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `memory_by_thread_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `memory_by_thread_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `memory_by_thread_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `memory_by_thread_by_current_bytes` AS select `mt`.`THREAD_ID` AS `thread_id`,if((`t`.`NAME` = 'thread/sql/one_connection'),concat(`t`.`PROCESSLIST_USER`,'@',`t`.`PROCESSLIST_HOST`),replace(`t`.`NAME`,'thread/','')) AS `user`,sum(`mt`.`CURRENT_COUNT_USED`) AS `current_count_used`,`sys`.`format_bytes`(sum(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`)) AS `current_allocated`,`sys`.`format_bytes`(ifnull((sum(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`) / nullif(sum(`mt`.`CURRENT_COUNT_USED`),0)),0)) AS `current_avg_alloc`,`sys`.`format_bytes`(max(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`)) AS `current_max_alloc`,`sys`.`format_bytes`(sum(`mt`.`SUM_NUMBER_OF_BYTES_ALLOC`)) AS `total_allocated` from (`performance_schema`.`memory_summary_by_thread_by_event_name` `mt` join `performance_schema`.`threads` `t` on((`mt`.`THREAD_ID` = `t`.`THREAD_ID`))) group by `mt`.`THREAD_ID`,if((`t`.`NAME` = 'thread/sql/one_connection'),concat(`t`.`PROCESSLIST_USER`,'@',`t`.`PROCESSLIST_HOST`),replace(`t`.`NAME`,'thread/','')) order by sum(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `memory_by_user_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `memory_by_user_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `memory_by_user_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `memory_by_user_by_current_bytes` AS select if(isnull(`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`) AS `user`,sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_COUNT_USED`) AS `current_count_used`,`sys`.`format_bytes`(sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`)) AS `current_allocated`,`sys`.`format_bytes`(ifnull((sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) / nullif(sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_COUNT_USED`),0)),0)) AS `current_avg_alloc`,`sys`.`format_bytes`(max(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`)) AS `current_max_alloc`,`sys`.`format_bytes`(sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`SUM_NUMBER_OF_BYTES_ALLOC`)) AS `total_allocated` from `performance_schema`.`memory_summary_by_user_by_event_name` group by if(isnull(`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`) order by sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `memory_global_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `memory_global_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `memory_global_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `memory_global_by_current_bytes` AS select `performance_schema`.`memory_summary_global_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_COUNT_USED` AS `current_count`,`sys`.`format_bytes`(`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `current_alloc`,`sys`.`format_bytes`(ifnull((`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED` / nullif(`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_COUNT_USED`,0)),0)) AS `current_avg_alloc`,`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_COUNT_USED` AS `high_count`,`sys`.`format_bytes`(`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_NUMBER_OF_BYTES_USED`) AS `high_alloc`,`sys`.`format_bytes`(ifnull((`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_NUMBER_OF_BYTES_USED` / nullif(`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_COUNT_USED`,0)),0)) AS `high_avg_alloc` from `performance_schema`.`memory_summary_global_by_event_name` where (`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED` > 0) order by `performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `memory_global_total`
--

/*!50001 DROP TABLE IF EXISTS `memory_global_total`*/;
/*!50001 DROP VIEW IF EXISTS `memory_global_total`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `memory_global_total` AS select `sys`.`format_bytes`(sum(`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`)) AS `total_allocated` from `performance_schema`.`memory_summary_global_by_event_name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `metrics`
--

/*!50001 DROP TABLE IF EXISTS `metrics`*/;
/*!50001 DROP VIEW IF EXISTS `metrics`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `metrics` AS (select lower(`performance_schema`.`global_status`.`VARIABLE_NAME`) AS `Variable_name`,`performance_schema`.`global_status`.`VARIABLE_VALUE` AS `Variable_value`,'Global Status' AS `Type`,'YES' AS `Enabled` from `performance_schema`.`global_status`) union all (select `information_schema`.`innodb_metrics`.`NAME` AS `Variable_name`,`information_schema`.`innodb_metrics`.`COUNT` AS `Variable_value`,concat('InnoDB Metrics - ',`information_schema`.`innodb_metrics`.`SUBSYSTEM`) AS `Type`,if((`information_schema`.`innodb_metrics`.`STATUS` = 'enabled'),'YES','NO') AS `Enabled` from `information_schema`.`innodb_metrics` where (`information_schema`.`innodb_metrics`.`NAME` not in ('lock_row_lock_time','lock_row_lock_time_avg','lock_row_lock_time_max','lock_row_lock_waits','buffer_pool_reads','buffer_pool_read_requests','buffer_pool_write_requests','buffer_pool_wait_free','buffer_pool_read_ahead','buffer_pool_read_ahead_evicted','buffer_pool_pages_total','buffer_pool_pages_misc','buffer_pool_pages_data','buffer_pool_bytes_data','buffer_pool_pages_dirty','buffer_pool_bytes_dirty','buffer_pool_pages_free','buffer_pages_created','buffer_pages_written','buffer_pages_read','buffer_data_reads','buffer_data_written','file_num_open_files','os_log_bytes_written','os_log_fsyncs','os_log_pending_fsyncs','os_log_pending_writes','log_waits','log_write_requests','log_writes','innodb_dblwr_writes','innodb_dblwr_pages_written','innodb_page_size'))) union all (select 'memory_current_allocated' AS `Variable_name`,sum(`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `Variable_value`,'Performance Schema' AS `Type`,if(((select count(0) from `performance_schema`.`setup_instruments` where ((`performance_schema`.`setup_instruments`.`NAME` like 'memory/%') and (`performance_schema`.`setup_instruments`.`ENABLED` = 'YES'))) = 0),'NO',if(((select count(0) from `performance_schema`.`setup_instruments` where ((`performance_schema`.`setup_instruments`.`NAME` like 'memory/%') and (`performance_schema`.`setup_instruments`.`ENABLED` = 'YES'))) = (select count(0) from `performance_schema`.`setup_instruments` where (`performance_schema`.`setup_instruments`.`NAME` like 'memory/%'))),'YES','PARTIAL')) AS `Enabled` from `performance_schema`.`memory_summary_global_by_event_name`) union all (select 'memory_total_allocated' AS `Variable_name`,sum(`performance_schema`.`memory_summary_global_by_event_name`.`SUM_NUMBER_OF_BYTES_ALLOC`) AS `Variable_value`,'Performance Schema' AS `Type`,if(((select count(0) from `performance_schema`.`setup_instruments` where ((`performance_schema`.`setup_instruments`.`NAME` like 'memory/%') and (`performance_schema`.`setup_instruments`.`ENABLED` = 'YES'))) = 0),'NO',if(((select count(0) from `performance_schema`.`setup_instruments` where ((`performance_schema`.`setup_instruments`.`NAME` like 'memory/%') and (`performance_schema`.`setup_instruments`.`ENABLED` = 'YES'))) = (select count(0) from `performance_schema`.`setup_instruments` where (`performance_schema`.`setup_instruments`.`NAME` like 'memory/%'))),'YES','PARTIAL')) AS `Enabled` from `performance_schema`.`memory_summary_global_by_event_name`) union all (select 'NOW()' AS `Variable_name`,now(3) AS `Variable_value`,'System Time' AS `Type`,'YES' AS `Enabled`) union all (select 'UNIX_TIMESTAMP()' AS `Variable_name`,round(unix_timestamp(now(3)),3) AS `Variable_value`,'System Time' AS `Type`,'YES' AS `Enabled`) order by `Type`,`Variable_name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `processlist`
--

/*!50001 DROP TABLE IF EXISTS `processlist`*/;
/*!50001 DROP VIEW IF EXISTS `processlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `processlist` AS select `pps`.`THREAD_ID` AS `thd_id`,`pps`.`PROCESSLIST_ID` AS `conn_id`,if((`pps`.`NAME` = 'thread/sql/one_connection'),concat(`pps`.`PROCESSLIST_USER`,'@',`pps`.`PROCESSLIST_HOST`),replace(`pps`.`NAME`,'thread/','')) AS `user`,`pps`.`PROCESSLIST_DB` AS `db`,`pps`.`PROCESSLIST_COMMAND` AS `command`,`pps`.`PROCESSLIST_STATE` AS `state`,`pps`.`PROCESSLIST_TIME` AS `time`,`sys`.`format_statement`(`pps`.`PROCESSLIST_INFO`) AS `current_statement`,if(isnull(`esc`.`END_EVENT_ID`),`sys`.`format_time`(`esc`.`TIMER_WAIT`),NULL) AS `statement_latency`,if(isnull(`esc`.`END_EVENT_ID`),round((100 * (`estc`.`WORK_COMPLETED` / `estc`.`WORK_ESTIMATED`)),2),NULL) AS `progress`,`sys`.`format_time`(`esc`.`LOCK_TIME`) AS `lock_latency`,`esc`.`ROWS_EXAMINED` AS `rows_examined`,`esc`.`ROWS_SENT` AS `rows_sent`,`esc`.`ROWS_AFFECTED` AS `rows_affected`,`esc`.`CREATED_TMP_TABLES` AS `tmp_tables`,`esc`.`CREATED_TMP_DISK_TABLES` AS `tmp_disk_tables`,if(((`esc`.`NO_GOOD_INDEX_USED` > 0) or (`esc`.`NO_INDEX_USED` > 0)),'YES','NO') AS `full_scan`,if((`esc`.`END_EVENT_ID` is not null),`sys`.`format_statement`(`esc`.`SQL_TEXT`),NULL) AS `last_statement`,if((`esc`.`END_EVENT_ID` is not null),`sys`.`format_time`(`esc`.`TIMER_WAIT`),NULL) AS `last_statement_latency`,`sys`.`format_bytes`(`mem`.`current_allocated`) AS `current_memory`,`ewc`.`EVENT_NAME` AS `last_wait`,if((isnull(`ewc`.`END_EVENT_ID`) and (`ewc`.`EVENT_NAME` is not null)),'Still Waiting',`sys`.`format_time`(`ewc`.`TIMER_WAIT`)) AS `last_wait_latency`,`ewc`.`SOURCE` AS `source`,`sys`.`format_time`(`etc`.`TIMER_WAIT`) AS `trx_latency`,`etc`.`STATE` AS `trx_state`,`etc`.`AUTOCOMMIT` AS `trx_autocommit`,`conattr_pid`.`ATTR_VALUE` AS `pid`,`conattr_progname`.`ATTR_VALUE` AS `program_name` from (((((((`performance_schema`.`threads` `pps` left join `performance_schema`.`events_waits_current` `ewc` on((`pps`.`THREAD_ID` = `ewc`.`THREAD_ID`))) left join `performance_schema`.`events_stages_current` `estc` on((`pps`.`THREAD_ID` = `estc`.`THREAD_ID`))) left join `performance_schema`.`events_statements_current` `esc` on((`pps`.`THREAD_ID` = `esc`.`THREAD_ID`))) left join `performance_schema`.`events_transactions_current` `etc` on((`pps`.`THREAD_ID` = `etc`.`THREAD_ID`))) left join `sys`.`x$memory_by_thread_by_current_bytes` `mem` on((`pps`.`THREAD_ID` = `mem`.`thread_id`))) left join `performance_schema`.`session_connect_attrs` `conattr_pid` on(((`conattr_pid`.`PROCESSLIST_ID` = `pps`.`PROCESSLIST_ID`) and (`conattr_pid`.`ATTR_NAME` = '_pid')))) left join `performance_schema`.`session_connect_attrs` `conattr_progname` on(((`conattr_progname`.`PROCESSLIST_ID` = `pps`.`PROCESSLIST_ID`) and (`conattr_progname`.`ATTR_NAME` = 'program_name')))) order by `pps`.`PROCESSLIST_TIME` desc,`last_wait_latency` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `ps_check_lost_instrumentation`
--

/*!50001 DROP TABLE IF EXISTS `ps_check_lost_instrumentation`*/;
/*!50001 DROP VIEW IF EXISTS `ps_check_lost_instrumentation`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `ps_check_lost_instrumentation` AS select `performance_schema`.`global_status`.`VARIABLE_NAME` AS `variable_name`,`performance_schema`.`global_status`.`VARIABLE_VALUE` AS `variable_value` from `performance_schema`.`global_status` where ((`performance_schema`.`global_status`.`VARIABLE_NAME` like 'perf%lost') and (`performance_schema`.`global_status`.`VARIABLE_VALUE` > 0)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_auto_increment_columns`
--

/*!50001 DROP TABLE IF EXISTS `schema_auto_increment_columns`*/;
/*!50001 DROP VIEW IF EXISTS `schema_auto_increment_columns`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_auto_increment_columns` AS select `information_schema`.`columns`.`TABLE_SCHEMA` AS `table_schema`,`information_schema`.`columns`.`TABLE_NAME` AS `table_name`,`information_schema`.`columns`.`COLUMN_NAME` AS `column_name`,`information_schema`.`columns`.`DATA_TYPE` AS `data_type`,`information_schema`.`columns`.`COLUMN_TYPE` AS `column_type`,(locate('unsigned',`information_schema`.`columns`.`COLUMN_TYPE`) = 0) AS `is_signed`,(locate('unsigned',`information_schema`.`columns`.`COLUMN_TYPE`) > 0) AS `is_unsigned`,((case `information_schema`.`columns`.`DATA_TYPE` when 'tinyint' then 255 when 'smallint' then 65535 when 'mediumint' then 16777215 when 'int' then 4294967295 when 'bigint' then 18446744073709551615 end) >> if((locate('unsigned',`information_schema`.`columns`.`COLUMN_TYPE`) > 0),0,1)) AS `max_value`,`information_schema`.`tables`.`AUTO_INCREMENT` AS `auto_increment`,(`information_schema`.`tables`.`AUTO_INCREMENT` / ((case `information_schema`.`columns`.`DATA_TYPE` when 'tinyint' then 255 when 'smallint' then 65535 when 'mediumint' then 16777215 when 'int' then 4294967295 when 'bigint' then 18446744073709551615 end) >> if((locate('unsigned',`information_schema`.`columns`.`COLUMN_TYPE`) > 0),0,1))) AS `auto_increment_ratio` from (`information_schema`.`columns` join `information_schema`.`tables` on(((`information_schema`.`columns`.`TABLE_SCHEMA` = `information_schema`.`tables`.`TABLE_SCHEMA`) and (`information_schema`.`columns`.`TABLE_NAME` = `information_schema`.`tables`.`TABLE_NAME`)))) where ((`information_schema`.`columns`.`TABLE_SCHEMA` not in ('mysql','sys','INFORMATION_SCHEMA','performance_schema')) and (`information_schema`.`tables`.`TABLE_TYPE` = 'BASE TABLE') and (`information_schema`.`columns`.`EXTRA` = 'auto_increment')) order by (`information_schema`.`tables`.`AUTO_INCREMENT` / ((case `information_schema`.`columns`.`DATA_TYPE` when 'tinyint' then 255 when 'smallint' then 65535 when 'mediumint' then 16777215 when 'int' then 4294967295 when 'bigint' then 18446744073709551615 end) >> if((locate('unsigned',`information_schema`.`columns`.`COLUMN_TYPE`) > 0),0,1))) desc,((case `information_schema`.`columns`.`DATA_TYPE` when 'tinyint' then 255 when 'smallint' then 65535 when 'mediumint' then 16777215 when 'int' then 4294967295 when 'bigint' then 18446744073709551615 end) >> if((locate('unsigned',`information_schema`.`columns`.`COLUMN_TYPE`) > 0),0,1)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_index_statistics`
--

/*!50001 DROP TABLE IF EXISTS `schema_index_statistics`*/;
/*!50001 DROP VIEW IF EXISTS `schema_index_statistics`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_index_statistics` AS select `performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_SCHEMA` AS `table_schema`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_NAME` AS `table_name`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME` AS `index_name`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_FETCH` AS `rows_selected`,`sys`.`format_time`(`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_FETCH`) AS `select_latency`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_INSERT` AS `rows_inserted`,`sys`.`format_time`(`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_INSERT`) AS `insert_latency`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_UPDATE` AS `rows_updated`,`sys`.`format_time`(`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_UPDATE`) AS `update_latency`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_DELETE` AS `rows_deleted`,`sys`.`format_time`(`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_INSERT`) AS `delete_latency` from `performance_schema`.`table_io_waits_summary_by_index_usage` where (`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME` is not null) order by `performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_object_overview`
--

/*!50001 DROP TABLE IF EXISTS `schema_object_overview`*/;
/*!50001 DROP VIEW IF EXISTS `schema_object_overview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_object_overview` AS select `information_schema`.`routines`.`ROUTINE_SCHEMA` AS `db`,`information_schema`.`routines`.`ROUTINE_TYPE` AS `object_type`,count(0) AS `count` from `information_schema`.`routines` group by `information_schema`.`routines`.`ROUTINE_SCHEMA`,`information_schema`.`routines`.`ROUTINE_TYPE` union select `information_schema`.`tables`.`TABLE_SCHEMA` AS `TABLE_SCHEMA`,`information_schema`.`tables`.`TABLE_TYPE` AS `TABLE_TYPE`,count(0) AS `COUNT(*)` from `information_schema`.`tables` group by `information_schema`.`tables`.`TABLE_SCHEMA`,`information_schema`.`tables`.`TABLE_TYPE` union select `information_schema`.`statistics`.`TABLE_SCHEMA` AS `TABLE_SCHEMA`,concat('INDEX (',`information_schema`.`statistics`.`INDEX_TYPE`,')') AS `CONCAT('INDEX (', INDEX_TYPE, ')')`,count(0) AS `COUNT(*)` from `information_schema`.`statistics` group by `information_schema`.`statistics`.`TABLE_SCHEMA`,`information_schema`.`statistics`.`INDEX_TYPE` union select `information_schema`.`triggers`.`TRIGGER_SCHEMA` AS `TRIGGER_SCHEMA`,'TRIGGER' AS `TRIGGER`,count(0) AS `COUNT(*)` from `information_schema`.`triggers` group by `information_schema`.`triggers`.`TRIGGER_SCHEMA` union select `information_schema`.`events`.`EVENT_SCHEMA` AS `EVENT_SCHEMA`,'EVENT' AS `EVENT`,count(0) AS `COUNT(*)` from `information_schema`.`events` group by `information_schema`.`events`.`EVENT_SCHEMA` order by `db`,`object_type` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_redundant_indexes`
--

/*!50001 DROP TABLE IF EXISTS `schema_redundant_indexes`*/;
/*!50001 DROP VIEW IF EXISTS `schema_redundant_indexes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_redundant_indexes` AS select `redundant_keys`.`table_schema` AS `table_schema`,`redundant_keys`.`table_name` AS `table_name`,`redundant_keys`.`index_name` AS `redundant_index_name`,`redundant_keys`.`index_columns` AS `redundant_index_columns`,`redundant_keys`.`non_unique` AS `redundant_index_non_unique`,`dominant_keys`.`index_name` AS `dominant_index_name`,`dominant_keys`.`index_columns` AS `dominant_index_columns`,`dominant_keys`.`non_unique` AS `dominant_index_non_unique`,if((`redundant_keys`.`subpart_exists` or `dominant_keys`.`subpart_exists`),1,0) AS `subpart_exists`,concat('ALTER TABLE `',`redundant_keys`.`table_schema`,'`.`',`redundant_keys`.`table_name`,'` DROP INDEX `',`redundant_keys`.`index_name`,'`') AS `sql_drop_index` from (`sys`.`x$schema_flattened_keys` `redundant_keys` join `sys`.`x$schema_flattened_keys` `dominant_keys` on(((`redundant_keys`.`table_schema` = `dominant_keys`.`table_schema`) and (`redundant_keys`.`table_name` = `dominant_keys`.`table_name`)))) where ((`redundant_keys`.`index_name` <> `dominant_keys`.`index_name`) and (((`redundant_keys`.`index_columns` = `dominant_keys`.`index_columns`) and ((`redundant_keys`.`non_unique` > `dominant_keys`.`non_unique`) or ((`redundant_keys`.`non_unique` = `dominant_keys`.`non_unique`) and (if((`redundant_keys`.`index_name` = 'PRIMARY'),'',`redundant_keys`.`index_name`) > if((`dominant_keys`.`index_name` = 'PRIMARY'),'',`dominant_keys`.`index_name`))))) or ((locate(concat(`redundant_keys`.`index_columns`,','),`dominant_keys`.`index_columns`) = 1) and (`redundant_keys`.`non_unique` = 1)) or ((locate(concat(`dominant_keys`.`index_columns`,','),`redundant_keys`.`index_columns`) = 1) and (`dominant_keys`.`non_unique` = 0)))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_table_lock_waits`
--

/*!50001 DROP TABLE IF EXISTS `schema_table_lock_waits`*/;
/*!50001 DROP VIEW IF EXISTS `schema_table_lock_waits`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_table_lock_waits` AS select `g`.`OBJECT_SCHEMA` AS `object_schema`,`g`.`OBJECT_NAME` AS `object_name`,`pt`.`THREAD_ID` AS `waiting_thread_id`,`pt`.`PROCESSLIST_ID` AS `waiting_pid`,`sys`.`ps_thread_account`(`p`.`OWNER_THREAD_ID`) AS `waiting_account`,`p`.`LOCK_TYPE` AS `waiting_lock_type`,`p`.`LOCK_DURATION` AS `waiting_lock_duration`,`sys`.`format_statement`(`pt`.`PROCESSLIST_INFO`) AS `waiting_query`,`pt`.`PROCESSLIST_TIME` AS `waiting_query_secs`,`ps`.`ROWS_AFFECTED` AS `waiting_query_rows_affected`,`ps`.`ROWS_EXAMINED` AS `waiting_query_rows_examined`,`gt`.`THREAD_ID` AS `blocking_thread_id`,`gt`.`PROCESSLIST_ID` AS `blocking_pid`,`sys`.`ps_thread_account`(`g`.`OWNER_THREAD_ID`) AS `blocking_account`,`g`.`LOCK_TYPE` AS `blocking_lock_type`,`g`.`LOCK_DURATION` AS `blocking_lock_duration`,concat('KILL QUERY ',`gt`.`PROCESSLIST_ID`) AS `sql_kill_blocking_query`,concat('KILL ',`gt`.`PROCESSLIST_ID`) AS `sql_kill_blocking_connection` from (((((`performance_schema`.`metadata_locks` `g` join `performance_schema`.`metadata_locks` `p` on(((`g`.`OBJECT_TYPE` = `p`.`OBJECT_TYPE`) and (`g`.`OBJECT_SCHEMA` = `p`.`OBJECT_SCHEMA`) and (`g`.`OBJECT_NAME` = `p`.`OBJECT_NAME`) and (`g`.`LOCK_STATUS` = 'GRANTED') and (`p`.`LOCK_STATUS` = 'PENDING')))) join `performance_schema`.`threads` `gt` on((`g`.`OWNER_THREAD_ID` = `gt`.`THREAD_ID`))) join `performance_schema`.`threads` `pt` on((`p`.`OWNER_THREAD_ID` = `pt`.`THREAD_ID`))) left join `performance_schema`.`events_statements_current` `gs` on((`g`.`OWNER_THREAD_ID` = `gs`.`THREAD_ID`))) left join `performance_schema`.`events_statements_current` `ps` on((`p`.`OWNER_THREAD_ID` = `ps`.`THREAD_ID`))) where (`g`.`OBJECT_TYPE` = 'TABLE') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_table_statistics`
--

/*!50001 DROP TABLE IF EXISTS `schema_table_statistics`*/;
/*!50001 DROP VIEW IF EXISTS `schema_table_statistics`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_table_statistics` AS select `pst`.`OBJECT_SCHEMA` AS `table_schema`,`pst`.`OBJECT_NAME` AS `table_name`,`sys`.`format_time`(`pst`.`SUM_TIMER_WAIT`) AS `total_latency`,`pst`.`COUNT_FETCH` AS `rows_fetched`,`sys`.`format_time`(`pst`.`SUM_TIMER_FETCH`) AS `fetch_latency`,`pst`.`COUNT_INSERT` AS `rows_inserted`,`sys`.`format_time`(`pst`.`SUM_TIMER_INSERT`) AS `insert_latency`,`pst`.`COUNT_UPDATE` AS `rows_updated`,`sys`.`format_time`(`pst`.`SUM_TIMER_UPDATE`) AS `update_latency`,`pst`.`COUNT_DELETE` AS `rows_deleted`,`sys`.`format_time`(`pst`.`SUM_TIMER_DELETE`) AS `delete_latency`,`fsbi`.`count_read` AS `io_read_requests`,`sys`.`format_bytes`(`fsbi`.`sum_number_of_bytes_read`) AS `io_read`,`sys`.`format_time`(`fsbi`.`sum_timer_read`) AS `io_read_latency`,`fsbi`.`count_write` AS `io_write_requests`,`sys`.`format_bytes`(`fsbi`.`sum_number_of_bytes_write`) AS `io_write`,`sys`.`format_time`(`fsbi`.`sum_timer_write`) AS `io_write_latency`,`fsbi`.`count_misc` AS `io_misc_requests`,`sys`.`format_time`(`fsbi`.`sum_timer_misc`) AS `io_misc_latency` from (`performance_schema`.`table_io_waits_summary_by_table` `pst` left join `sys`.`x$ps_schema_table_statistics_io` `fsbi` on(((`pst`.`OBJECT_SCHEMA` = `fsbi`.`table_schema`) and (`pst`.`OBJECT_NAME` = `fsbi`.`table_name`)))) order by `pst`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_table_statistics_with_buffer`
--

/*!50001 DROP TABLE IF EXISTS `schema_table_statistics_with_buffer`*/;
/*!50001 DROP VIEW IF EXISTS `schema_table_statistics_with_buffer`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_table_statistics_with_buffer` AS select `pst`.`OBJECT_SCHEMA` AS `table_schema`,`pst`.`OBJECT_NAME` AS `table_name`,`pst`.`COUNT_FETCH` AS `rows_fetched`,`sys`.`format_time`(`pst`.`SUM_TIMER_FETCH`) AS `fetch_latency`,`pst`.`COUNT_INSERT` AS `rows_inserted`,`sys`.`format_time`(`pst`.`SUM_TIMER_INSERT`) AS `insert_latency`,`pst`.`COUNT_UPDATE` AS `rows_updated`,`sys`.`format_time`(`pst`.`SUM_TIMER_UPDATE`) AS `update_latency`,`pst`.`COUNT_DELETE` AS `rows_deleted`,`sys`.`format_time`(`pst`.`SUM_TIMER_DELETE`) AS `delete_latency`,`fsbi`.`count_read` AS `io_read_requests`,`sys`.`format_bytes`(`fsbi`.`sum_number_of_bytes_read`) AS `io_read`,`sys`.`format_time`(`fsbi`.`sum_timer_read`) AS `io_read_latency`,`fsbi`.`count_write` AS `io_write_requests`,`sys`.`format_bytes`(`fsbi`.`sum_number_of_bytes_write`) AS `io_write`,`sys`.`format_time`(`fsbi`.`sum_timer_write`) AS `io_write_latency`,`fsbi`.`count_misc` AS `io_misc_requests`,`sys`.`format_time`(`fsbi`.`sum_timer_misc`) AS `io_misc_latency`,`sys`.`format_bytes`(`ibp`.`allocated`) AS `innodb_buffer_allocated`,`sys`.`format_bytes`(`ibp`.`data`) AS `innodb_buffer_data`,`sys`.`format_bytes`((`ibp`.`allocated` - `ibp`.`data`)) AS `innodb_buffer_free`,`ibp`.`pages` AS `innodb_buffer_pages`,`ibp`.`pages_hashed` AS `innodb_buffer_pages_hashed`,`ibp`.`pages_old` AS `innodb_buffer_pages_old`,`ibp`.`rows_cached` AS `innodb_buffer_rows_cached` from ((`performance_schema`.`table_io_waits_summary_by_table` `pst` left join `sys`.`x$ps_schema_table_statistics_io` `fsbi` on(((`pst`.`OBJECT_SCHEMA` = `fsbi`.`table_schema`) and (`pst`.`OBJECT_NAME` = `fsbi`.`table_name`)))) left join `sys`.`x$innodb_buffer_stats_by_table` `ibp` on(((`pst`.`OBJECT_SCHEMA` = `ibp`.`object_schema`) and (`pst`.`OBJECT_NAME` = `ibp`.`object_name`)))) order by `pst`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_tables_with_full_table_scans`
--

/*!50001 DROP TABLE IF EXISTS `schema_tables_with_full_table_scans`*/;
/*!50001 DROP VIEW IF EXISTS `schema_tables_with_full_table_scans`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_tables_with_full_table_scans` AS select `performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_SCHEMA` AS `object_schema`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_NAME` AS `object_name`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_READ` AS `rows_full_scanned`,`sys`.`format_time`(`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_WAIT`) AS `latency` from `performance_schema`.`table_io_waits_summary_by_index_usage` where (isnull(`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME`) and (`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_READ` > 0)) order by `performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_READ` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `schema_unused_indexes`
--

/*!50001 DROP TABLE IF EXISTS `schema_unused_indexes`*/;
/*!50001 DROP VIEW IF EXISTS `schema_unused_indexes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `schema_unused_indexes` AS select `performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_SCHEMA` AS `object_schema`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_NAME` AS `object_name`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME` AS `index_name` from `performance_schema`.`table_io_waits_summary_by_index_usage` where ((`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME` is not null) and (`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_STAR` = 0) and (`performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_SCHEMA` <> 'mysql') and (`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME` <> 'PRIMARY')) order by `performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_SCHEMA`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_NAME` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `session`
--

/*!50001 DROP TABLE IF EXISTS `session`*/;
/*!50001 DROP VIEW IF EXISTS `session`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `session` AS select `processlist`.`thd_id` AS `thd_id`,`processlist`.`conn_id` AS `conn_id`,`processlist`.`user` AS `user`,`processlist`.`db` AS `db`,`processlist`.`command` AS `command`,`processlist`.`state` AS `state`,`processlist`.`time` AS `time`,`processlist`.`current_statement` AS `current_statement`,`processlist`.`statement_latency` AS `statement_latency`,`processlist`.`progress` AS `progress`,`processlist`.`lock_latency` AS `lock_latency`,`processlist`.`rows_examined` AS `rows_examined`,`processlist`.`rows_sent` AS `rows_sent`,`processlist`.`rows_affected` AS `rows_affected`,`processlist`.`tmp_tables` AS `tmp_tables`,`processlist`.`tmp_disk_tables` AS `tmp_disk_tables`,`processlist`.`full_scan` AS `full_scan`,`processlist`.`last_statement` AS `last_statement`,`processlist`.`last_statement_latency` AS `last_statement_latency`,`processlist`.`current_memory` AS `current_memory`,`processlist`.`last_wait` AS `last_wait`,`processlist`.`last_wait_latency` AS `last_wait_latency`,`processlist`.`source` AS `source`,`processlist`.`trx_latency` AS `trx_latency`,`processlist`.`trx_state` AS `trx_state`,`processlist`.`trx_autocommit` AS `trx_autocommit`,`processlist`.`pid` AS `pid`,`processlist`.`program_name` AS `program_name` from `sys`.`processlist` where ((`processlist`.`conn_id` is not null) and (`processlist`.`command` <> 'Daemon')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `session_ssl_status`
--

/*!50001 DROP TABLE IF EXISTS `session_ssl_status`*/;
/*!50001 DROP VIEW IF EXISTS `session_ssl_status`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `session_ssl_status` AS select `sslver`.`THREAD_ID` AS `thread_id`,`sslver`.`VARIABLE_VALUE` AS `ssl_version`,`sslcip`.`VARIABLE_VALUE` AS `ssl_cipher`,`sslreuse`.`VARIABLE_VALUE` AS `ssl_sessions_reused` from ((`performance_schema`.`status_by_thread` `sslver` left join `performance_schema`.`status_by_thread` `sslcip` on(((`sslcip`.`THREAD_ID` = `sslver`.`THREAD_ID`) and (`sslcip`.`VARIABLE_NAME` = 'Ssl_cipher')))) left join `performance_schema`.`status_by_thread` `sslreuse` on(((`sslreuse`.`THREAD_ID` = `sslver`.`THREAD_ID`) and (`sslreuse`.`VARIABLE_NAME` = 'Ssl_sessions_reused')))) where (`sslver`.`VARIABLE_NAME` = 'Ssl_version') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statement_analysis`
--

/*!50001 DROP TABLE IF EXISTS `statement_analysis`*/;
/*!50001 DROP VIEW IF EXISTS `statement_analysis`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `statement_analysis` AS select `sys`.`format_statement`(`performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT`) AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,if(((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_GOOD_INDEX_USED` > 0) or (`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` > 0)),'*','') AS `full_scan`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` AS `err_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` AS `warn_count`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`MAX_TIMER_WAIT`) AS `max_latency`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`AVG_TIMER_WAIT`) AS `avg_latency`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`SUM_LOCK_TIME`) AS `lock_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` AS `rows_sent`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `rows_sent_avg`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` AS `rows_examined`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `rows_examined_avg`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_AFFECTED` AS `rows_affected`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_AFFECTED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `rows_affected_avg`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` AS `tmp_tables`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` AS `tmp_disk_tables`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` AS `rows_sorted`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_MERGE_PASSES` AS `sort_merge_passes`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen` from `performance_schema`.`events_statements_summary_by_digest` order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statements_with_errors_or_warnings`
--

/*!50001 DROP TABLE IF EXISTS `statements_with_errors_or_warnings`*/;
/*!50001 DROP VIEW IF EXISTS `statements_with_errors_or_warnings`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `statements_with_errors_or_warnings` AS select `sys`.`format_statement`(`performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT`) AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` AS `errors`,(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100) AS `error_pct`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` AS `warnings`,(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100) AS `warning_pct`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where ((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` > 0) or (`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` > 0)) order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` desc,`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statements_with_full_table_scans`
--

/*!50001 DROP TABLE IF EXISTS `statements_with_full_table_scans`*/;
/*!50001 DROP VIEW IF EXISTS `statements_with_full_table_scans`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `statements_with_full_table_scans` AS select `sys`.`format_statement`(`performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT`) AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT`) AS `total_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` AS `no_index_used_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_GOOD_INDEX_USED` AS `no_good_index_used_count`,round((ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100),0) AS `no_index_used_pct`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` AS `rows_sent`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` AS `rows_examined`,round((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` / `performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`),0) AS `rows_sent_avg`,round((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` / `performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`),0) AS `rows_examined_avg`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where (((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` > 0) or (`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_GOOD_INDEX_USED` > 0)) and (not((`performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT` like 'SHOW%')))) order by round((ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100),0) desc,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statements_with_runtimes_in_95th_percentile`
--

/*!50001 DROP TABLE IF EXISTS `statements_with_runtimes_in_95th_percentile`*/;
/*!50001 DROP VIEW IF EXISTS `statements_with_runtimes_in_95th_percentile`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `statements_with_runtimes_in_95th_percentile` AS select `sys`.`format_statement`(`stmts`.`DIGEST_TEXT`) AS `query`,`stmts`.`SCHEMA_NAME` AS `db`,if(((`stmts`.`SUM_NO_GOOD_INDEX_USED` > 0) or (`stmts`.`SUM_NO_INDEX_USED` > 0)),'*','') AS `full_scan`,`stmts`.`COUNT_STAR` AS `exec_count`,`stmts`.`SUM_ERRORS` AS `err_count`,`stmts`.`SUM_WARNINGS` AS `warn_count`,`sys`.`format_time`(`stmts`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`stmts`.`MAX_TIMER_WAIT`) AS `max_latency`,`sys`.`format_time`(`stmts`.`AVG_TIMER_WAIT`) AS `avg_latency`,`stmts`.`SUM_ROWS_SENT` AS `rows_sent`,round(ifnull((`stmts`.`SUM_ROWS_SENT` / nullif(`stmts`.`COUNT_STAR`,0)),0),0) AS `rows_sent_avg`,`stmts`.`SUM_ROWS_EXAMINED` AS `rows_examined`,round(ifnull((`stmts`.`SUM_ROWS_EXAMINED` / nullif(`stmts`.`COUNT_STAR`,0)),0),0) AS `rows_examined_avg`,`stmts`.`FIRST_SEEN` AS `first_seen`,`stmts`.`LAST_SEEN` AS `last_seen`,`stmts`.`DIGEST` AS `digest` from (`performance_schema`.`events_statements_summary_by_digest` `stmts` join `sys`.`x$ps_digest_95th_percentile_by_avg_us` `top_percentile` on((round((`stmts`.`AVG_TIMER_WAIT` / 1000000),0) >= `top_percentile`.`avg_us`))) order by `stmts`.`AVG_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statements_with_sorting`
--

/*!50001 DROP TABLE IF EXISTS `statements_with_sorting`*/;
/*!50001 DROP VIEW IF EXISTS `statements_with_sorting`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `statements_with_sorting` AS select `sys`.`format_statement`(`performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT`) AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT`) AS `total_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_MERGE_PASSES` AS `sort_merge_passes`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_MERGE_PASSES` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `avg_sort_merges`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_SCAN` AS `sorts_using_scans`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_RANGE` AS `sort_using_range`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` AS `rows_sorted`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `avg_rows_sorted`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where (`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` > 0) order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statements_with_temp_tables`
--

/*!50001 DROP TABLE IF EXISTS `statements_with_temp_tables`*/;
/*!50001 DROP VIEW IF EXISTS `statements_with_temp_tables`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `statements_with_temp_tables` AS select `sys`.`format_statement`(`performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT`) AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT`) AS `total_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` AS `memory_tmp_tables`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` AS `disk_tmp_tables`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `avg_tmp_tables_per_query`,round((ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES`,0)),0) * 100),0) AS `tmp_tables_to_disk_pct`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where (`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` > 0) order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` desc,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_summary`
--

/*!50001 DROP TABLE IF EXISTS `user_summary`*/;
/*!50001 DROP VIEW IF EXISTS `user_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `user_summary` AS select if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) AS `user`,sum(`stmt`.`total`) AS `statements`,`sys`.`format_time`(sum(`stmt`.`total_latency`)) AS `statement_latency`,`sys`.`format_time`(ifnull((sum(`stmt`.`total_latency`) / nullif(sum(`stmt`.`total`),0)),0)) AS `statement_avg_latency`,sum(`stmt`.`full_scans`) AS `table_scans`,sum(`io`.`ios`) AS `file_ios`,`sys`.`format_time`(sum(`io`.`io_latency`)) AS `file_io_latency`,sum(`performance_schema`.`accounts`.`CURRENT_CONNECTIONS`) AS `current_connections`,sum(`performance_schema`.`accounts`.`TOTAL_CONNECTIONS`) AS `total_connections`,count(distinct `performance_schema`.`accounts`.`HOST`) AS `unique_hosts`,`sys`.`format_bytes`(sum(`mem`.`current_allocated`)) AS `current_memory`,`sys`.`format_bytes`(sum(`mem`.`total_allocated`)) AS `total_memory_allocated` from (((`performance_schema`.`accounts` left join `sys`.`x$user_summary_by_statement_latency` `stmt` on((if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) = `stmt`.`user`))) left join `sys`.`x$user_summary_by_file_io` `io` on((if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) = `io`.`user`))) left join `sys`.`x$memory_by_user_by_current_bytes` `mem` on((if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) = `mem`.`user`))) group by if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) order by sum(`stmt`.`total_latency`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_summary_by_file_io`
--

/*!50001 DROP TABLE IF EXISTS `user_summary_by_file_io`*/;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_file_io`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `user_summary_by_file_io` AS select if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) AS `user`,sum(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR`) AS `ios`,`sys`.`format_time`(sum(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`)) AS `io_latency` from `performance_schema`.`events_waits_summary_by_user_by_event_name` where (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') group by if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) order by sum(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_summary_by_file_io_type`
--

/*!50001 DROP TABLE IF EXISTS `user_summary_by_file_io_type`*/;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_file_io_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `user_summary_by_file_io_type` AS select if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) AS `user`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) AS `latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency` from `performance_schema`.`events_waits_summary_by_user_by_event_name` where ((`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` like 'wait/io/file%') and (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_summary_by_stages`
--

/*!50001 DROP TABLE IF EXISTS `user_summary_by_stages`*/;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_stages`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `user_summary_by_stages` AS select if(isnull(`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`) AS `user`,`performance_schema`.`events_stages_summary_by_user_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_stages_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_stages_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_stages_summary_by_user_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency` from `performance_schema`.`events_stages_summary_by_user_by_event_name` where (`performance_schema`.`events_stages_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_stages_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_summary_by_statement_latency`
--

/*!50001 DROP TABLE IF EXISTS `user_summary_by_statement_latency`*/;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_statement_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `user_summary_by_statement_latency` AS select if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`) AS `user`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`COUNT_STAR`) AS `total`,`sys`.`format_time`(sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`)) AS `total_latency`,`sys`.`format_time`(sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`MAX_TIMER_WAIT`)) AS `max_latency`,`sys`.`format_time`(sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_LOCK_TIME`)) AS `lock_latency`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_SENT`) AS `rows_sent`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_EXAMINED`) AS `rows_examined`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_AFFECTED`) AS `rows_affected`,(sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_INDEX_USED`) + sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_GOOD_INDEX_USED`)) AS `full_scans` from `performance_schema`.`events_statements_summary_by_user_by_event_name` group by if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`) order by sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_summary_by_statement_type`
--

/*!50001 DROP TABLE IF EXISTS `user_summary_by_statement_type`*/;
/*!50001 DROP VIEW IF EXISTS `user_summary_by_statement_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `user_summary_by_statement_type` AS select if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`) AS `user`,substring_index(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`EVENT_NAME`,'/',-(1)) AS `statement`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency`,`sys`.`format_time`(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_LOCK_TIME`) AS `lock_latency`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_SENT` AS `rows_sent`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_EXAMINED` AS `rows_examined`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_AFFECTED` AS `rows_affected`,(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_INDEX_USED` + `performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_GOOD_INDEX_USED`) AS `full_scans` from `performance_schema`.`events_statements_summary_by_user_by_event_name` where (`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `version`
--

/*!50001 DROP TABLE IF EXISTS `version`*/;
/*!50001 DROP VIEW IF EXISTS `version`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `version` AS select '1.5.1' AS `sys_version`,version() AS `mysql_version` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `wait_classes_global_by_avg_latency`
--

/*!50001 DROP TABLE IF EXISTS `wait_classes_global_by_avg_latency`*/;
/*!50001 DROP VIEW IF EXISTS `wait_classes_global_by_avg_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `wait_classes_global_by_avg_latency` AS select substring_index(`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME`,'/',3) AS `event_class`,sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`) AS `total`,`sys`.`format_time`(cast(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) as unsigned)) AS `total_latency`,`sys`.`format_time`(min(`performance_schema`.`events_waits_summary_global_by_event_name`.`MIN_TIMER_WAIT`)) AS `min_latency`,`sys`.`format_time`(ifnull((sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) / nullif(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`),0)),0)) AS `avg_latency`,`sys`.`format_time`(cast(max(`performance_schema`.`events_waits_summary_global_by_event_name`.`MAX_TIMER_WAIT`) as unsigned)) AS `max_latency` from `performance_schema`.`events_waits_summary_global_by_event_name` where ((`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` > 0) and (`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` <> 'idle')) group by `event_class` order by ifnull((sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) / nullif(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`),0)),0) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `wait_classes_global_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `wait_classes_global_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `wait_classes_global_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `wait_classes_global_by_latency` AS select substring_index(`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME`,'/',3) AS `event_class`,sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`) AS `total`,`sys`.`format_time`(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`)) AS `total_latency`,`sys`.`format_time`(min(`performance_schema`.`events_waits_summary_global_by_event_name`.`MIN_TIMER_WAIT`)) AS `min_latency`,`sys`.`format_time`(ifnull((sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) / nullif(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`),0)),0)) AS `avg_latency`,`sys`.`format_time`(max(`performance_schema`.`events_waits_summary_global_by_event_name`.`MAX_TIMER_WAIT`)) AS `max_latency` from `performance_schema`.`events_waits_summary_global_by_event_name` where ((`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` > 0) and (`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` <> 'idle')) group by substring_index(`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME`,'/',3) order by sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `waits_by_host_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `waits_by_host_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `waits_by_host_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `waits_by_host_by_latency` AS select if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) AS `host`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` AS `event`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency` from `performance_schema`.`events_waits_summary_by_host_by_event_name` where ((`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` <> 'idle') and (`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `waits_by_user_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `waits_by_user_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `waits_by_user_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `waits_by_user_by_latency` AS select if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) AS `user`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` AS `event`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency` from `performance_schema`.`events_waits_summary_by_user_by_event_name` where ((`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` <> 'idle') and (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER` is not null) and (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `waits_global_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `waits_global_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `waits_global_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `waits_global_by_latency` AS select `performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` AS `events`,`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR` AS `total`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_global_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency`,`sys`.`format_time`(`performance_schema`.`events_waits_summary_global_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency` from `performance_schema`.`events_waits_summary_global_by_event_name` where ((`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` <> 'idle') and (`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` > 0)) order by `performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$host_summary`
--

/*!50001 DROP TABLE IF EXISTS `x$host_summary`*/;
/*!50001 DROP VIEW IF EXISTS `x$host_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$host_summary` AS select if(isnull(`performance_schema`.`accounts`.`HOST`),'background',`performance_schema`.`accounts`.`HOST`) AS `host`,sum(`stmt`.`total`) AS `statements`,sum(`stmt`.`total_latency`) AS `statement_latency`,(sum(`stmt`.`total_latency`) / sum(`stmt`.`total`)) AS `statement_avg_latency`,sum(`stmt`.`full_scans`) AS `table_scans`,sum(`io`.`ios`) AS `file_ios`,sum(`io`.`io_latency`) AS `file_io_latency`,sum(`performance_schema`.`accounts`.`CURRENT_CONNECTIONS`) AS `current_connections`,sum(`performance_schema`.`accounts`.`TOTAL_CONNECTIONS`) AS `total_connections`,count(distinct `performance_schema`.`accounts`.`USER`) AS `unique_users`,sum(`mem`.`current_allocated`) AS `current_memory`,sum(`mem`.`total_allocated`) AS `total_memory_allocated` from (((`performance_schema`.`accounts` join `sys`.`x$host_summary_by_statement_latency` `stmt` on((`performance_schema`.`accounts`.`HOST` = `stmt`.`host`))) join `sys`.`x$host_summary_by_file_io` `io` on((`performance_schema`.`accounts`.`HOST` = `io`.`host`))) join `sys`.`x$memory_by_host_by_current_bytes` `mem` on((`performance_schema`.`accounts`.`HOST` = `mem`.`host`))) group by if(isnull(`performance_schema`.`accounts`.`HOST`),'background',`performance_schema`.`accounts`.`HOST`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$host_summary_by_file_io`
--

/*!50001 DROP TABLE IF EXISTS `x$host_summary_by_file_io`*/;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_file_io`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$host_summary_by_file_io` AS select if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) AS `host`,sum(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR`) AS `ios`,sum(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) AS `io_latency` from `performance_schema`.`events_waits_summary_by_host_by_event_name` where (`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') group by if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) order by sum(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$host_summary_by_file_io_type`
--

/*!50001 DROP TABLE IF EXISTS `x$host_summary_by_file_io_type`*/;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_file_io_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$host_summary_by_file_io_type` AS select if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) AS `host`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency` from `performance_schema`.`events_waits_summary_by_host_by_event_name` where ((`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` like 'wait/io/file%') and (`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$host_summary_by_stages`
--

/*!50001 DROP TABLE IF EXISTS `x$host_summary_by_stages`*/;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_stages`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$host_summary_by_stages` AS select if(isnull(`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`) AS `host`,`performance_schema`.`events_stages_summary_by_host_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_stages_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_stages_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_stages_summary_by_host_by_event_name`.`AVG_TIMER_WAIT` AS `avg_latency` from `performance_schema`.`events_stages_summary_by_host_by_event_name` where (`performance_schema`.`events_stages_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_stages_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_stages_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$host_summary_by_statement_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$host_summary_by_statement_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_statement_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$host_summary_by_statement_latency` AS select if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`) AS `host`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`COUNT_STAR`) AS `total`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,max(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_LOCK_TIME`) AS `lock_latency`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_SENT`) AS `rows_sent`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_EXAMINED`) AS `rows_examined`,sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_AFFECTED`) AS `rows_affected`,(sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_INDEX_USED`) + sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_GOOD_INDEX_USED`)) AS `full_scans` from `performance_schema`.`events_statements_summary_by_host_by_event_name` group by if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`) order by sum(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$host_summary_by_statement_type`
--

/*!50001 DROP TABLE IF EXISTS `x$host_summary_by_statement_type`*/;
/*!50001 DROP VIEW IF EXISTS `x$host_summary_by_statement_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$host_summary_by_statement_type` AS select if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`) AS `host`,substring_index(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`EVENT_NAME`,'/',-(1)) AS `statement`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_LOCK_TIME` AS `lock_latency`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_SENT` AS `rows_sent`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_EXAMINED` AS `rows_examined`,`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_ROWS_AFFECTED` AS `rows_affected`,(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_INDEX_USED` + `performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_NO_GOOD_INDEX_USED`) AS `full_scans` from `performance_schema`.`events_statements_summary_by_host_by_event_name` where (`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_statements_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_statements_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$innodb_buffer_stats_by_schema`
--

/*!50001 DROP TABLE IF EXISTS `x$innodb_buffer_stats_by_schema`*/;
/*!50001 DROP VIEW IF EXISTS `x$innodb_buffer_stats_by_schema`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$innodb_buffer_stats_by_schema` AS select if((locate('.',`ibp`.`TABLE_NAME`) = 0),'InnoDB System',replace(substring_index(`ibp`.`TABLE_NAME`,'.',1),'`','')) AS `object_schema`,sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`)) AS `allocated`,sum(`ibp`.`DATA_SIZE`) AS `data`,count(`ibp`.`PAGE_NUMBER`) AS `pages`,count(if((`ibp`.`IS_HASHED` = 'YES'),1,NULL)) AS `pages_hashed`,count(if((`ibp`.`IS_OLD` = 'YES'),1,NULL)) AS `pages_old`,round(ifnull((sum(`ibp`.`NUMBER_RECORDS`) / nullif(count(distinct `ibp`.`INDEX_NAME`),0)),0),0) AS `rows_cached` from `information_schema`.`innodb_buffer_page` `ibp` where (`ibp`.`TABLE_NAME` is not null) group by `object_schema` order by sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`)) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$innodb_buffer_stats_by_table`
--

/*!50001 DROP TABLE IF EXISTS `x$innodb_buffer_stats_by_table`*/;
/*!50001 DROP VIEW IF EXISTS `x$innodb_buffer_stats_by_table`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$innodb_buffer_stats_by_table` AS select if((locate('.',`ibp`.`TABLE_NAME`) = 0),'InnoDB System',replace(substring_index(`ibp`.`TABLE_NAME`,'.',1),'`','')) AS `object_schema`,replace(substring_index(`ibp`.`TABLE_NAME`,'.',-(1)),'`','') AS `object_name`,sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`)) AS `allocated`,sum(`ibp`.`DATA_SIZE`) AS `data`,count(`ibp`.`PAGE_NUMBER`) AS `pages`,count(if((`ibp`.`IS_HASHED` = 'YES'),1,NULL)) AS `pages_hashed`,count(if((`ibp`.`IS_OLD` = 'YES'),1,NULL)) AS `pages_old`,round(ifnull((sum(`ibp`.`NUMBER_RECORDS`) / nullif(count(distinct `ibp`.`INDEX_NAME`),0)),0),0) AS `rows_cached` from `information_schema`.`innodb_buffer_page` `ibp` where (`ibp`.`TABLE_NAME` is not null) group by `object_schema`,`object_name` order by sum(if((`ibp`.`COMPRESSED_SIZE` = 0),16384,`ibp`.`COMPRESSED_SIZE`)) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$innodb_lock_waits`
--

/*!50001 DROP TABLE IF EXISTS `x$innodb_lock_waits`*/;
/*!50001 DROP VIEW IF EXISTS `x$innodb_lock_waits`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$innodb_lock_waits` AS select `r`.`trx_wait_started` AS `wait_started`,timediff(now(),`r`.`trx_wait_started`) AS `wait_age`,timestampdiff(SECOND,`r`.`trx_wait_started`,now()) AS `wait_age_secs`,`rl`.`lock_table` AS `locked_table`,`rl`.`lock_index` AS `locked_index`,`rl`.`lock_type` AS `locked_type`,`r`.`trx_id` AS `waiting_trx_id`,`r`.`trx_started` AS `waiting_trx_started`,timediff(now(),`r`.`trx_started`) AS `waiting_trx_age`,`r`.`trx_rows_locked` AS `waiting_trx_rows_locked`,`r`.`trx_rows_modified` AS `waiting_trx_rows_modified`,`r`.`trx_mysql_thread_id` AS `waiting_pid`,`r`.`trx_query` AS `waiting_query`,`rl`.`lock_id` AS `waiting_lock_id`,`rl`.`lock_mode` AS `waiting_lock_mode`,`b`.`trx_id` AS `blocking_trx_id`,`b`.`trx_mysql_thread_id` AS `blocking_pid`,`b`.`trx_query` AS `blocking_query`,`bl`.`lock_id` AS `blocking_lock_id`,`bl`.`lock_mode` AS `blocking_lock_mode`,`b`.`trx_started` AS `blocking_trx_started`,timediff(now(),`b`.`trx_started`) AS `blocking_trx_age`,`b`.`trx_rows_locked` AS `blocking_trx_rows_locked`,`b`.`trx_rows_modified` AS `blocking_trx_rows_modified`,concat('KILL QUERY ',`b`.`trx_mysql_thread_id`) AS `sql_kill_blocking_query`,concat('KILL ',`b`.`trx_mysql_thread_id`) AS `sql_kill_blocking_connection` from ((((`information_schema`.`innodb_lock_waits` `w` join `information_schema`.`innodb_trx` `b` on((`b`.`trx_id` = `w`.`blocking_trx_id`))) join `information_schema`.`innodb_trx` `r` on((`r`.`trx_id` = `w`.`requesting_trx_id`))) join `information_schema`.`innodb_locks` `bl` on((`bl`.`lock_id` = `w`.`blocking_lock_id`))) join `information_schema`.`innodb_locks` `rl` on((`rl`.`lock_id` = `w`.`requested_lock_id`))) order by `r`.`trx_wait_started` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$io_by_thread_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$io_by_thread_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$io_by_thread_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$io_by_thread_by_latency` AS select if(isnull(`performance_schema`.`threads`.`PROCESSLIST_ID`),substring_index(`performance_schema`.`threads`.`NAME`,'/',-(1)),concat(`performance_schema`.`threads`.`PROCESSLIST_USER`,'@',`performance_schema`.`threads`.`PROCESSLIST_HOST`)) AS `user`,sum(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`COUNT_STAR`) AS `total`,sum(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,min(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`MIN_TIMER_WAIT`) AS `min_latency`,avg(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`AVG_TIMER_WAIT`) AS `avg_latency`,max(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency`,`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`THREAD_ID` AS `thread_id`,`performance_schema`.`threads`.`PROCESSLIST_ID` AS `processlist_id` from (`performance_schema`.`events_waits_summary_by_thread_by_event_name` left join `performance_schema`.`threads` on((`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`THREAD_ID` = `performance_schema`.`threads`.`THREAD_ID`))) where ((`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') and (`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`SUM_TIMER_WAIT` > 0)) group by `performance_schema`.`events_waits_summary_by_thread_by_event_name`.`THREAD_ID`,`performance_schema`.`threads`.`PROCESSLIST_ID`,`user` order by sum(`performance_schema`.`events_waits_summary_by_thread_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$io_global_by_file_by_bytes`
--

/*!50001 DROP TABLE IF EXISTS `x$io_global_by_file_by_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_file_by_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$io_global_by_file_by_bytes` AS select `performance_schema`.`file_summary_by_instance`.`FILE_NAME` AS `file`,`performance_schema`.`file_summary_by_instance`.`COUNT_READ` AS `count_read`,`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` AS `total_read`,ifnull((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` / nullif(`performance_schema`.`file_summary_by_instance`.`COUNT_READ`,0)),0) AS `avg_read`,`performance_schema`.`file_summary_by_instance`.`COUNT_WRITE` AS `count_write`,`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE` AS `total_written`,ifnull((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE` / nullif(`performance_schema`.`file_summary_by_instance`.`COUNT_WRITE`,0)),0.00) AS `avg_write`,(`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` + `performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`) AS `total`,ifnull(round((100 - ((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` / nullif((`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` + `performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`),0)) * 100)),2),0.00) AS `write_pct` from `performance_schema`.`file_summary_by_instance` order by (`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ` + `performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$io_global_by_file_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$io_global_by_file_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_file_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$io_global_by_file_by_latency` AS select `performance_schema`.`file_summary_by_instance`.`FILE_NAME` AS `file`,`performance_schema`.`file_summary_by_instance`.`COUNT_STAR` AS `total`,`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`file_summary_by_instance`.`COUNT_READ` AS `count_read`,`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_READ` AS `read_latency`,`performance_schema`.`file_summary_by_instance`.`COUNT_WRITE` AS `count_write`,`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_WRITE` AS `write_latency`,`performance_schema`.`file_summary_by_instance`.`COUNT_MISC` AS `count_misc`,`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_MISC` AS `misc_latency` from `performance_schema`.`file_summary_by_instance` order by `performance_schema`.`file_summary_by_instance`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$io_global_by_wait_by_bytes`
--

/*!50001 DROP TABLE IF EXISTS `x$io_global_by_wait_by_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_wait_by_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$io_global_by_wait_by_bytes` AS select substring_index(`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME`,'/',-(2)) AS `event_name`,`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`file_summary_by_event_name`.`MIN_TIMER_WAIT` AS `min_latency`,`performance_schema`.`file_summary_by_event_name`.`AVG_TIMER_WAIT` AS `avg_latency`,`performance_schema`.`file_summary_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency`,`performance_schema`.`file_summary_by_event_name`.`COUNT_READ` AS `count_read`,`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ` AS `total_read`,ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_READ`,0)),0) AS `avg_read`,`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE` AS `count_write`,`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` AS `total_written`,ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE`,0)),0) AS `avg_written`,(`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` + `performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ`) AS `total_requested` from `performance_schema`.`file_summary_by_event_name` where ((`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') and (`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` > 0)) order by (`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` + `performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$io_global_by_wait_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$io_global_by_wait_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$io_global_by_wait_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$io_global_by_wait_by_latency` AS select substring_index(`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME`,'/',-(2)) AS `event_name`,`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`file_summary_by_event_name`.`AVG_TIMER_WAIT` AS `avg_latency`,`performance_schema`.`file_summary_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency`,`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_READ` AS `read_latency`,`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WRITE` AS `write_latency`,`performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_MISC` AS `misc_latency`,`performance_schema`.`file_summary_by_event_name`.`COUNT_READ` AS `count_read`,`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ` AS `total_read`,ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_READ` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_READ`,0)),0) AS `avg_read`,`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE` AS `count_write`,`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` AS `total_written`,ifnull((`performance_schema`.`file_summary_by_event_name`.`SUM_NUMBER_OF_BYTES_WRITE` / nullif(`performance_schema`.`file_summary_by_event_name`.`COUNT_WRITE`,0)),0) AS `avg_written` from `performance_schema`.`file_summary_by_event_name` where ((`performance_schema`.`file_summary_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') and (`performance_schema`.`file_summary_by_event_name`.`COUNT_STAR` > 0)) order by `performance_schema`.`file_summary_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$latest_file_io`
--

/*!50001 DROP TABLE IF EXISTS `x$latest_file_io`*/;
/*!50001 DROP VIEW IF EXISTS `x$latest_file_io`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$latest_file_io` AS select if(isnull(`information_schema`.`processlist`.`ID`),concat(substring_index(`performance_schema`.`threads`.`NAME`,'/',-(1)),':',`performance_schema`.`events_waits_history_long`.`THREAD_ID`),concat(`information_schema`.`processlist`.`USER`,'@',`information_schema`.`processlist`.`HOST`,':',`information_schema`.`processlist`.`ID`)) AS `thread`,`performance_schema`.`events_waits_history_long`.`OBJECT_NAME` AS `file`,`performance_schema`.`events_waits_history_long`.`TIMER_WAIT` AS `latency`,`performance_schema`.`events_waits_history_long`.`OPERATION` AS `operation`,`performance_schema`.`events_waits_history_long`.`NUMBER_OF_BYTES` AS `requested` from ((`performance_schema`.`events_waits_history_long` join `performance_schema`.`threads` on((`performance_schema`.`events_waits_history_long`.`THREAD_ID` = `performance_schema`.`threads`.`THREAD_ID`))) left join `information_schema`.`processlist` on((`performance_schema`.`threads`.`PROCESSLIST_ID` = `information_schema`.`processlist`.`ID`))) where ((`performance_schema`.`events_waits_history_long`.`OBJECT_NAME` is not null) and (`performance_schema`.`events_waits_history_long`.`EVENT_NAME` like 'wait/io/file/%')) order by `performance_schema`.`events_waits_history_long`.`TIMER_START` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$memory_by_host_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `x$memory_by_host_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `x$memory_by_host_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$memory_by_host_by_current_bytes` AS select if(isnull(`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`) AS `host`,sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_COUNT_USED`) AS `current_count_used`,sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `current_allocated`,ifnull((sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) / nullif(sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_COUNT_USED`),0)),0) AS `current_avg_alloc`,max(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `current_max_alloc`,sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`SUM_NUMBER_OF_BYTES_ALLOC`) AS `total_allocated` from `performance_schema`.`memory_summary_by_host_by_event_name` group by if(isnull(`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`memory_summary_by_host_by_event_name`.`HOST`) order by sum(`performance_schema`.`memory_summary_by_host_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$memory_by_thread_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `x$memory_by_thread_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `x$memory_by_thread_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$memory_by_thread_by_current_bytes` AS select `t`.`THREAD_ID` AS `thread_id`,if((`t`.`NAME` = 'thread/sql/one_connection'),concat(`t`.`PROCESSLIST_USER`,'@',`t`.`PROCESSLIST_HOST`),replace(`t`.`NAME`,'thread/','')) AS `user`,sum(`mt`.`CURRENT_COUNT_USED`) AS `current_count_used`,sum(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `current_allocated`,ifnull((sum(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`) / nullif(sum(`mt`.`CURRENT_COUNT_USED`),0)),0) AS `current_avg_alloc`,max(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `current_max_alloc`,sum(`mt`.`SUM_NUMBER_OF_BYTES_ALLOC`) AS `total_allocated` from (`performance_schema`.`memory_summary_by_thread_by_event_name` `mt` join `performance_schema`.`threads` `t` on((`mt`.`THREAD_ID` = `t`.`THREAD_ID`))) group by `t`.`THREAD_ID`,if((`t`.`NAME` = 'thread/sql/one_connection'),concat(`t`.`PROCESSLIST_USER`,'@',`t`.`PROCESSLIST_HOST`),replace(`t`.`NAME`,'thread/','')) order by sum(`mt`.`CURRENT_NUMBER_OF_BYTES_USED`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$memory_by_user_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `x$memory_by_user_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `x$memory_by_user_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$memory_by_user_by_current_bytes` AS select if(isnull(`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`) AS `user`,sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_COUNT_USED`) AS `current_count_used`,sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `current_allocated`,ifnull((sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) / nullif(sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_COUNT_USED`),0)),0) AS `current_avg_alloc`,max(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `current_max_alloc`,sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`SUM_NUMBER_OF_BYTES_ALLOC`) AS `total_allocated` from `performance_schema`.`memory_summary_by_user_by_event_name` group by if(isnull(`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`memory_summary_by_user_by_event_name`.`USER`) order by sum(`performance_schema`.`memory_summary_by_user_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$memory_global_by_current_bytes`
--

/*!50001 DROP TABLE IF EXISTS `x$memory_global_by_current_bytes`*/;
/*!50001 DROP VIEW IF EXISTS `x$memory_global_by_current_bytes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$memory_global_by_current_bytes` AS select `performance_schema`.`memory_summary_global_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_COUNT_USED` AS `current_count`,`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED` AS `current_alloc`,ifnull((`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED` / nullif(`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_COUNT_USED`,0)),0) AS `current_avg_alloc`,`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_COUNT_USED` AS `high_count`,`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_NUMBER_OF_BYTES_USED` AS `high_alloc`,ifnull((`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_NUMBER_OF_BYTES_USED` / nullif(`performance_schema`.`memory_summary_global_by_event_name`.`HIGH_COUNT_USED`,0)),0) AS `high_avg_alloc` from `performance_schema`.`memory_summary_global_by_event_name` where (`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED` > 0) order by `performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$memory_global_total`
--

/*!50001 DROP TABLE IF EXISTS `x$memory_global_total`*/;
/*!50001 DROP VIEW IF EXISTS `x$memory_global_total`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$memory_global_total` AS select sum(`performance_schema`.`memory_summary_global_by_event_name`.`CURRENT_NUMBER_OF_BYTES_USED`) AS `total_allocated` from `performance_schema`.`memory_summary_global_by_event_name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$processlist`
--

/*!50001 DROP TABLE IF EXISTS `x$processlist`*/;
/*!50001 DROP VIEW IF EXISTS `x$processlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$processlist` AS select `pps`.`THREAD_ID` AS `thd_id`,`pps`.`PROCESSLIST_ID` AS `conn_id`,if((`pps`.`NAME` = 'thread/sql/one_connection'),concat(`pps`.`PROCESSLIST_USER`,'@',`pps`.`PROCESSLIST_HOST`),replace(`pps`.`NAME`,'thread/','')) AS `user`,`pps`.`PROCESSLIST_DB` AS `db`,`pps`.`PROCESSLIST_COMMAND` AS `command`,`pps`.`PROCESSLIST_STATE` AS `state`,`pps`.`PROCESSLIST_TIME` AS `time`,`pps`.`PROCESSLIST_INFO` AS `current_statement`,if(isnull(`esc`.`END_EVENT_ID`),`esc`.`TIMER_WAIT`,NULL) AS `statement_latency`,if(isnull(`esc`.`END_EVENT_ID`),round((100 * (`estc`.`WORK_COMPLETED` / `estc`.`WORK_ESTIMATED`)),2),NULL) AS `progress`,`esc`.`LOCK_TIME` AS `lock_latency`,`esc`.`ROWS_EXAMINED` AS `rows_examined`,`esc`.`ROWS_SENT` AS `rows_sent`,`esc`.`ROWS_AFFECTED` AS `rows_affected`,`esc`.`CREATED_TMP_TABLES` AS `tmp_tables`,`esc`.`CREATED_TMP_DISK_TABLES` AS `tmp_disk_tables`,if(((`esc`.`NO_GOOD_INDEX_USED` > 0) or (`esc`.`NO_INDEX_USED` > 0)),'YES','NO') AS `full_scan`,if((`esc`.`END_EVENT_ID` is not null),`esc`.`SQL_TEXT`,NULL) AS `last_statement`,if((`esc`.`END_EVENT_ID` is not null),`esc`.`TIMER_WAIT`,NULL) AS `last_statement_latency`,`mem`.`current_allocated` AS `current_memory`,`ewc`.`EVENT_NAME` AS `last_wait`,if((isnull(`ewc`.`END_EVENT_ID`) and (`ewc`.`EVENT_NAME` is not null)),'Still Waiting',`ewc`.`TIMER_WAIT`) AS `last_wait_latency`,`ewc`.`SOURCE` AS `source`,`etc`.`TIMER_WAIT` AS `trx_latency`,`etc`.`STATE` AS `trx_state`,`etc`.`AUTOCOMMIT` AS `trx_autocommit`,`conattr_pid`.`ATTR_VALUE` AS `pid`,`conattr_progname`.`ATTR_VALUE` AS `program_name` from (((((((`performance_schema`.`threads` `pps` left join `performance_schema`.`events_waits_current` `ewc` on((`pps`.`THREAD_ID` = `ewc`.`THREAD_ID`))) left join `performance_schema`.`events_stages_current` `estc` on((`pps`.`THREAD_ID` = `estc`.`THREAD_ID`))) left join `performance_schema`.`events_statements_current` `esc` on((`pps`.`THREAD_ID` = `esc`.`THREAD_ID`))) left join `performance_schema`.`events_transactions_current` `etc` on((`pps`.`THREAD_ID` = `etc`.`THREAD_ID`))) left join `sys`.`x$memory_by_thread_by_current_bytes` `mem` on((`pps`.`THREAD_ID` = `mem`.`thread_id`))) left join `performance_schema`.`session_connect_attrs` `conattr_pid` on(((`conattr_pid`.`PROCESSLIST_ID` = `pps`.`PROCESSLIST_ID`) and (`conattr_pid`.`ATTR_NAME` = '_pid')))) left join `performance_schema`.`session_connect_attrs` `conattr_progname` on(((`conattr_progname`.`PROCESSLIST_ID` = `pps`.`PROCESSLIST_ID`) and (`conattr_progname`.`ATTR_NAME` = 'program_name')))) order by `pps`.`PROCESSLIST_TIME` desc,`last_wait_latency` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$ps_digest_95th_percentile_by_avg_us`
--

/*!50001 DROP TABLE IF EXISTS `x$ps_digest_95th_percentile_by_avg_us`*/;
/*!50001 DROP VIEW IF EXISTS `x$ps_digest_95th_percentile_by_avg_us`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$ps_digest_95th_percentile_by_avg_us` AS select `s2`.`avg_us` AS `avg_us`,ifnull((sum(`s1`.`cnt`) / nullif((select count(0) from `performance_schema`.`events_statements_summary_by_digest`),0)),0) AS `percentile` from (`sys`.`x$ps_digest_avg_latency_distribution` `s1` join `sys`.`x$ps_digest_avg_latency_distribution` `s2` on((`s1`.`avg_us` <= `s2`.`avg_us`))) group by `s2`.`avg_us` having (ifnull((sum(`s1`.`cnt`) / nullif((select count(0) from `performance_schema`.`events_statements_summary_by_digest`),0)),0) > 0.95) order by `percentile` limit 1 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$ps_digest_avg_latency_distribution`
--

/*!50001 DROP TABLE IF EXISTS `x$ps_digest_avg_latency_distribution`*/;
/*!50001 DROP VIEW IF EXISTS `x$ps_digest_avg_latency_distribution`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$ps_digest_avg_latency_distribution` AS select count(0) AS `cnt`,round((`performance_schema`.`events_statements_summary_by_digest`.`AVG_TIMER_WAIT` / 1000000),0) AS `avg_us` from `performance_schema`.`events_statements_summary_by_digest` group by `avg_us` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$ps_schema_table_statistics_io`
--

/*!50001 DROP TABLE IF EXISTS `x$ps_schema_table_statistics_io`*/;
/*!50001 DROP VIEW IF EXISTS `x$ps_schema_table_statistics_io`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$ps_schema_table_statistics_io` AS select `extract_schema_from_file_name`(`performance_schema`.`file_summary_by_instance`.`FILE_NAME`) AS `table_schema`,`extract_table_from_file_name`(`performance_schema`.`file_summary_by_instance`.`FILE_NAME`) AS `table_name`,sum(`performance_schema`.`file_summary_by_instance`.`COUNT_READ`) AS `count_read`,sum(`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_READ`) AS `sum_number_of_bytes_read`,sum(`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_READ`) AS `sum_timer_read`,sum(`performance_schema`.`file_summary_by_instance`.`COUNT_WRITE`) AS `count_write`,sum(`performance_schema`.`file_summary_by_instance`.`SUM_NUMBER_OF_BYTES_WRITE`) AS `sum_number_of_bytes_write`,sum(`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_WRITE`) AS `sum_timer_write`,sum(`performance_schema`.`file_summary_by_instance`.`COUNT_MISC`) AS `count_misc`,sum(`performance_schema`.`file_summary_by_instance`.`SUM_TIMER_MISC`) AS `sum_timer_misc` from `performance_schema`.`file_summary_by_instance` group by `table_schema`,`table_name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$schema_flattened_keys`
--

/*!50001 DROP TABLE IF EXISTS `x$schema_flattened_keys`*/;
/*!50001 DROP VIEW IF EXISTS `x$schema_flattened_keys`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$schema_flattened_keys` AS select `information_schema`.`statistics`.`TABLE_SCHEMA` AS `table_schema`,`information_schema`.`statistics`.`TABLE_NAME` AS `table_name`,`information_schema`.`statistics`.`INDEX_NAME` AS `index_name`,max(`information_schema`.`statistics`.`NON_UNIQUE`) AS `non_unique`,max(if(isnull(`information_schema`.`statistics`.`SUB_PART`),0,1)) AS `subpart_exists`,group_concat(`information_schema`.`statistics`.`COLUMN_NAME` order by `information_schema`.`statistics`.`SEQ_IN_INDEX` ASC separator ',') AS `index_columns` from `information_schema`.`statistics` where ((`information_schema`.`statistics`.`INDEX_TYPE` = 'BTREE') and (`information_schema`.`statistics`.`TABLE_SCHEMA` not in ('mysql','sys','INFORMATION_SCHEMA','PERFORMANCE_SCHEMA'))) group by `information_schema`.`statistics`.`TABLE_SCHEMA`,`information_schema`.`statistics`.`TABLE_NAME`,`information_schema`.`statistics`.`INDEX_NAME` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$schema_index_statistics`
--

/*!50001 DROP TABLE IF EXISTS `x$schema_index_statistics`*/;
/*!50001 DROP VIEW IF EXISTS `x$schema_index_statistics`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$schema_index_statistics` AS select `performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_SCHEMA` AS `table_schema`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_NAME` AS `table_name`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME` AS `index_name`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_FETCH` AS `rows_selected`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_FETCH` AS `select_latency`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_INSERT` AS `rows_inserted`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_INSERT` AS `insert_latency`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_UPDATE` AS `rows_updated`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_UPDATE` AS `update_latency`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_DELETE` AS `rows_deleted`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_INSERT` AS `delete_latency` from `performance_schema`.`table_io_waits_summary_by_index_usage` where (`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME` is not null) order by `performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$schema_table_lock_waits`
--

/*!50001 DROP TABLE IF EXISTS `x$schema_table_lock_waits`*/;
/*!50001 DROP VIEW IF EXISTS `x$schema_table_lock_waits`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$schema_table_lock_waits` AS select `g`.`OBJECT_SCHEMA` AS `object_schema`,`g`.`OBJECT_NAME` AS `object_name`,`pt`.`THREAD_ID` AS `waiting_thread_id`,`pt`.`PROCESSLIST_ID` AS `waiting_pid`,`sys`.`ps_thread_account`(`p`.`OWNER_THREAD_ID`) AS `waiting_account`,`p`.`LOCK_TYPE` AS `waiting_lock_type`,`p`.`LOCK_DURATION` AS `waiting_lock_duration`,`pt`.`PROCESSLIST_INFO` AS `waiting_query`,`pt`.`PROCESSLIST_TIME` AS `waiting_query_secs`,`ps`.`ROWS_AFFECTED` AS `waiting_query_rows_affected`,`ps`.`ROWS_EXAMINED` AS `waiting_query_rows_examined`,`gt`.`THREAD_ID` AS `blocking_thread_id`,`gt`.`PROCESSLIST_ID` AS `blocking_pid`,`sys`.`ps_thread_account`(`g`.`OWNER_THREAD_ID`) AS `blocking_account`,`g`.`LOCK_TYPE` AS `blocking_lock_type`,`g`.`LOCK_DURATION` AS `blocking_lock_duration`,concat('KILL QUERY ',`gt`.`PROCESSLIST_ID`) AS `sql_kill_blocking_query`,concat('KILL ',`gt`.`PROCESSLIST_ID`) AS `sql_kill_blocking_connection` from (((((`performance_schema`.`metadata_locks` `g` join `performance_schema`.`metadata_locks` `p` on(((`g`.`OBJECT_TYPE` = `p`.`OBJECT_TYPE`) and (`g`.`OBJECT_SCHEMA` = `p`.`OBJECT_SCHEMA`) and (`g`.`OBJECT_NAME` = `p`.`OBJECT_NAME`) and (`g`.`LOCK_STATUS` = 'GRANTED') and (`p`.`LOCK_STATUS` = 'PENDING')))) join `performance_schema`.`threads` `gt` on((`g`.`OWNER_THREAD_ID` = `gt`.`THREAD_ID`))) join `performance_schema`.`threads` `pt` on((`p`.`OWNER_THREAD_ID` = `pt`.`THREAD_ID`))) left join `performance_schema`.`events_statements_current` `gs` on((`g`.`OWNER_THREAD_ID` = `gs`.`THREAD_ID`))) left join `performance_schema`.`events_statements_current` `ps` on((`p`.`OWNER_THREAD_ID` = `ps`.`THREAD_ID`))) where (`g`.`OBJECT_TYPE` = 'TABLE') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$schema_table_statistics`
--

/*!50001 DROP TABLE IF EXISTS `x$schema_table_statistics`*/;
/*!50001 DROP VIEW IF EXISTS `x$schema_table_statistics`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$schema_table_statistics` AS select `pst`.`OBJECT_SCHEMA` AS `table_schema`,`pst`.`OBJECT_NAME` AS `table_name`,`pst`.`SUM_TIMER_WAIT` AS `total_latency`,`pst`.`COUNT_FETCH` AS `rows_fetched`,`pst`.`SUM_TIMER_FETCH` AS `fetch_latency`,`pst`.`COUNT_INSERT` AS `rows_inserted`,`pst`.`SUM_TIMER_INSERT` AS `insert_latency`,`pst`.`COUNT_UPDATE` AS `rows_updated`,`pst`.`SUM_TIMER_UPDATE` AS `update_latency`,`pst`.`COUNT_DELETE` AS `rows_deleted`,`pst`.`SUM_TIMER_DELETE` AS `delete_latency`,`fsbi`.`count_read` AS `io_read_requests`,`fsbi`.`sum_number_of_bytes_read` AS `io_read`,`fsbi`.`sum_timer_read` AS `io_read_latency`,`fsbi`.`count_write` AS `io_write_requests`,`fsbi`.`sum_number_of_bytes_write` AS `io_write`,`fsbi`.`sum_timer_write` AS `io_write_latency`,`fsbi`.`count_misc` AS `io_misc_requests`,`fsbi`.`sum_timer_misc` AS `io_misc_latency` from (`performance_schema`.`table_io_waits_summary_by_table` `pst` left join `sys`.`x$ps_schema_table_statistics_io` `fsbi` on(((`pst`.`OBJECT_SCHEMA` = `fsbi`.`table_schema`) and (`pst`.`OBJECT_NAME` = `fsbi`.`table_name`)))) order by `pst`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$schema_table_statistics_with_buffer`
--

/*!50001 DROP TABLE IF EXISTS `x$schema_table_statistics_with_buffer`*/;
/*!50001 DROP VIEW IF EXISTS `x$schema_table_statistics_with_buffer`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$schema_table_statistics_with_buffer` AS select `pst`.`OBJECT_SCHEMA` AS `table_schema`,`pst`.`OBJECT_NAME` AS `table_name`,`pst`.`COUNT_FETCH` AS `rows_fetched`,`pst`.`SUM_TIMER_FETCH` AS `fetch_latency`,`pst`.`COUNT_INSERT` AS `rows_inserted`,`pst`.`SUM_TIMER_INSERT` AS `insert_latency`,`pst`.`COUNT_UPDATE` AS `rows_updated`,`pst`.`SUM_TIMER_UPDATE` AS `update_latency`,`pst`.`COUNT_DELETE` AS `rows_deleted`,`pst`.`SUM_TIMER_DELETE` AS `delete_latency`,`fsbi`.`count_read` AS `io_read_requests`,`fsbi`.`sum_number_of_bytes_read` AS `io_read`,`fsbi`.`sum_timer_read` AS `io_read_latency`,`fsbi`.`count_write` AS `io_write_requests`,`fsbi`.`sum_number_of_bytes_write` AS `io_write`,`fsbi`.`sum_timer_write` AS `io_write_latency`,`fsbi`.`count_misc` AS `io_misc_requests`,`fsbi`.`sum_timer_misc` AS `io_misc_latency`,`ibp`.`allocated` AS `innodb_buffer_allocated`,`ibp`.`data` AS `innodb_buffer_data`,(`ibp`.`allocated` - `ibp`.`data`) AS `innodb_buffer_free`,`ibp`.`pages` AS `innodb_buffer_pages`,`ibp`.`pages_hashed` AS `innodb_buffer_pages_hashed`,`ibp`.`pages_old` AS `innodb_buffer_pages_old`,`ibp`.`rows_cached` AS `innodb_buffer_rows_cached` from ((`performance_schema`.`table_io_waits_summary_by_table` `pst` left join `sys`.`x$ps_schema_table_statistics_io` `fsbi` on(((`pst`.`OBJECT_SCHEMA` = `fsbi`.`table_schema`) and (`pst`.`OBJECT_NAME` = `fsbi`.`table_name`)))) left join `sys`.`x$innodb_buffer_stats_by_table` `ibp` on(((`pst`.`OBJECT_SCHEMA` = `ibp`.`object_schema`) and (`pst`.`OBJECT_NAME` = `ibp`.`object_name`)))) order by `pst`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$schema_tables_with_full_table_scans`
--

/*!50001 DROP TABLE IF EXISTS `x$schema_tables_with_full_table_scans`*/;
/*!50001 DROP VIEW IF EXISTS `x$schema_tables_with_full_table_scans`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$schema_tables_with_full_table_scans` AS select `performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_SCHEMA` AS `object_schema`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`OBJECT_NAME` AS `object_name`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_READ` AS `rows_full_scanned`,`performance_schema`.`table_io_waits_summary_by_index_usage`.`SUM_TIMER_WAIT` AS `latency` from `performance_schema`.`table_io_waits_summary_by_index_usage` where (isnull(`performance_schema`.`table_io_waits_summary_by_index_usage`.`INDEX_NAME`) and (`performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_READ` > 0)) order by `performance_schema`.`table_io_waits_summary_by_index_usage`.`COUNT_READ` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$session`
--

/*!50001 DROP TABLE IF EXISTS `x$session`*/;
/*!50001 DROP VIEW IF EXISTS `x$session`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$session` AS select `x$processlist`.`thd_id` AS `thd_id`,`x$processlist`.`conn_id` AS `conn_id`,`x$processlist`.`user` AS `user`,`x$processlist`.`db` AS `db`,`x$processlist`.`command` AS `command`,`x$processlist`.`state` AS `state`,`x$processlist`.`time` AS `time`,`x$processlist`.`current_statement` AS `current_statement`,`x$processlist`.`statement_latency` AS `statement_latency`,`x$processlist`.`progress` AS `progress`,`x$processlist`.`lock_latency` AS `lock_latency`,`x$processlist`.`rows_examined` AS `rows_examined`,`x$processlist`.`rows_sent` AS `rows_sent`,`x$processlist`.`rows_affected` AS `rows_affected`,`x$processlist`.`tmp_tables` AS `tmp_tables`,`x$processlist`.`tmp_disk_tables` AS `tmp_disk_tables`,`x$processlist`.`full_scan` AS `full_scan`,`x$processlist`.`last_statement` AS `last_statement`,`x$processlist`.`last_statement_latency` AS `last_statement_latency`,`x$processlist`.`current_memory` AS `current_memory`,`x$processlist`.`last_wait` AS `last_wait`,`x$processlist`.`last_wait_latency` AS `last_wait_latency`,`x$processlist`.`source` AS `source`,`x$processlist`.`trx_latency` AS `trx_latency`,`x$processlist`.`trx_state` AS `trx_state`,`x$processlist`.`trx_autocommit` AS `trx_autocommit`,`x$processlist`.`pid` AS `pid`,`x$processlist`.`program_name` AS `program_name` from `sys`.`x$processlist` where ((`x$processlist`.`conn_id` is not null) and (`x$processlist`.`command` <> 'Daemon')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$statement_analysis`
--

/*!50001 DROP TABLE IF EXISTS `x$statement_analysis`*/;
/*!50001 DROP VIEW IF EXISTS `x$statement_analysis`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$statement_analysis` AS select `performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT` AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,if(((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_GOOD_INDEX_USED` > 0) or (`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` > 0)),'*','') AS `full_scan`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` AS `err_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` AS `warn_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_statements_summary_by_digest`.`MAX_TIMER_WAIT` AS `max_latency`,`performance_schema`.`events_statements_summary_by_digest`.`AVG_TIMER_WAIT` AS `avg_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_LOCK_TIME` AS `lock_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` AS `rows_sent`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `rows_sent_avg`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` AS `rows_examined`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `rows_examined_avg`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_AFFECTED` AS `rows_affected`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_AFFECTED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `rows_affected_avg`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` AS `tmp_tables`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` AS `tmp_disk_tables`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` AS `rows_sorted`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_MERGE_PASSES` AS `sort_merge_passes`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen` from `performance_schema`.`events_statements_summary_by_digest` order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$statements_with_errors_or_warnings`
--

/*!50001 DROP TABLE IF EXISTS `x$statements_with_errors_or_warnings`*/;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_errors_or_warnings`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$statements_with_errors_or_warnings` AS select `performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT` AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` AS `errors`,(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100) AS `error_pct`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` AS `warnings`,(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100) AS `warning_pct`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where ((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` > 0) or (`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` > 0)) order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_ERRORS` desc,`performance_schema`.`events_statements_summary_by_digest`.`SUM_WARNINGS` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$statements_with_full_table_scans`
--

/*!50001 DROP TABLE IF EXISTS `x$statements_with_full_table_scans`*/;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_full_table_scans`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$statements_with_full_table_scans` AS select `performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT` AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` AS `no_index_used_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_GOOD_INDEX_USED` AS `no_good_index_used_count`,round((ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100),0) AS `no_index_used_pct`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` AS `rows_sent`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` AS `rows_examined`,round((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_SENT` / `performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`),0) AS `rows_sent_avg`,round((`performance_schema`.`events_statements_summary_by_digest`.`SUM_ROWS_EXAMINED` / `performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`),0) AS `rows_examined_avg`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where (((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` > 0) or (`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_GOOD_INDEX_USED` > 0)) and (not((`performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT` like 'SHOW%')))) order by round((ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_NO_INDEX_USED` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0) * 100),0) desc,`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$statements_with_runtimes_in_95th_percentile`
--

/*!50001 DROP TABLE IF EXISTS `x$statements_with_runtimes_in_95th_percentile`*/;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_runtimes_in_95th_percentile`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$statements_with_runtimes_in_95th_percentile` AS select `stmts`.`DIGEST_TEXT` AS `query`,`stmts`.`SCHEMA_NAME` AS `db`,if(((`stmts`.`SUM_NO_GOOD_INDEX_USED` > 0) or (`stmts`.`SUM_NO_INDEX_USED` > 0)),'*','') AS `full_scan`,`stmts`.`COUNT_STAR` AS `exec_count`,`stmts`.`SUM_ERRORS` AS `err_count`,`stmts`.`SUM_WARNINGS` AS `warn_count`,`stmts`.`SUM_TIMER_WAIT` AS `total_latency`,`stmts`.`MAX_TIMER_WAIT` AS `max_latency`,`stmts`.`AVG_TIMER_WAIT` AS `avg_latency`,`stmts`.`SUM_ROWS_SENT` AS `rows_sent`,round(ifnull((`stmts`.`SUM_ROWS_SENT` / nullif(`stmts`.`COUNT_STAR`,0)),0),0) AS `rows_sent_avg`,`stmts`.`SUM_ROWS_EXAMINED` AS `rows_examined`,round(ifnull((`stmts`.`SUM_ROWS_EXAMINED` / nullif(`stmts`.`COUNT_STAR`,0)),0),0) AS `rows_examined_avg`,`stmts`.`FIRST_SEEN` AS `first_seen`,`stmts`.`LAST_SEEN` AS `last_seen`,`stmts`.`DIGEST` AS `digest` from (`performance_schema`.`events_statements_summary_by_digest` `stmts` join `sys`.`x$ps_digest_95th_percentile_by_avg_us` `top_percentile` on((round((`stmts`.`AVG_TIMER_WAIT` / 1000000),0) >= `top_percentile`.`avg_us`))) order by `stmts`.`AVG_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$statements_with_sorting`
--

/*!50001 DROP TABLE IF EXISTS `x$statements_with_sorting`*/;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_sorting`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$statements_with_sorting` AS select `performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT` AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_MERGE_PASSES` AS `sort_merge_passes`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_MERGE_PASSES` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `avg_sort_merges`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_SCAN` AS `sorts_using_scans`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_RANGE` AS `sort_using_range`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` AS `rows_sorted`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `avg_rows_sorted`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where (`performance_schema`.`events_statements_summary_by_digest`.`SUM_SORT_ROWS` > 0) order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$statements_with_temp_tables`
--

/*!50001 DROP TABLE IF EXISTS `x$statements_with_temp_tables`*/;
/*!50001 DROP VIEW IF EXISTS `x$statements_with_temp_tables`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$statements_with_temp_tables` AS select `performance_schema`.`events_statements_summary_by_digest`.`DIGEST_TEXT` AS `query`,`performance_schema`.`events_statements_summary_by_digest`.`SCHEMA_NAME` AS `db`,`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR` AS `exec_count`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` AS `memory_tmp_tables`,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` AS `disk_tmp_tables`,round(ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`COUNT_STAR`,0)),0),0) AS `avg_tmp_tables_per_query`,round((ifnull((`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` / nullif(`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES`,0)),0) * 100),0) AS `tmp_tables_to_disk_pct`,`performance_schema`.`events_statements_summary_by_digest`.`FIRST_SEEN` AS `first_seen`,`performance_schema`.`events_statements_summary_by_digest`.`LAST_SEEN` AS `last_seen`,`performance_schema`.`events_statements_summary_by_digest`.`DIGEST` AS `digest` from `performance_schema`.`events_statements_summary_by_digest` where (`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` > 0) order by `performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_DISK_TABLES` desc,`performance_schema`.`events_statements_summary_by_digest`.`SUM_CREATED_TMP_TABLES` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$user_summary`
--

/*!50001 DROP TABLE IF EXISTS `x$user_summary`*/;
/*!50001 DROP VIEW IF EXISTS `x$user_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$user_summary` AS select if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) AS `user`,sum(`stmt`.`total`) AS `statements`,sum(`stmt`.`total_latency`) AS `statement_latency`,ifnull((sum(`stmt`.`total_latency`) / nullif(sum(`stmt`.`total`),0)),0) AS `statement_avg_latency`,sum(`stmt`.`full_scans`) AS `table_scans`,sum(`io`.`ios`) AS `file_ios`,sum(`io`.`io_latency`) AS `file_io_latency`,sum(`performance_schema`.`accounts`.`CURRENT_CONNECTIONS`) AS `current_connections`,sum(`performance_schema`.`accounts`.`TOTAL_CONNECTIONS`) AS `total_connections`,count(distinct `performance_schema`.`accounts`.`HOST`) AS `unique_hosts`,sum(`mem`.`current_allocated`) AS `current_memory`,sum(`mem`.`total_allocated`) AS `total_memory_allocated` from (((`performance_schema`.`accounts` left join `sys`.`x$user_summary_by_statement_latency` `stmt` on((if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) = `stmt`.`user`))) left join `sys`.`x$user_summary_by_file_io` `io` on((if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) = `io`.`user`))) left join `sys`.`x$memory_by_user_by_current_bytes` `mem` on((if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) = `mem`.`user`))) group by if(isnull(`performance_schema`.`accounts`.`USER`),'background',`performance_schema`.`accounts`.`USER`) order by sum(`stmt`.`total_latency`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$user_summary_by_file_io`
--

/*!50001 DROP TABLE IF EXISTS `x$user_summary_by_file_io`*/;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_file_io`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$user_summary_by_file_io` AS select if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) AS `user`,sum(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR`) AS `ios`,sum(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) AS `io_latency` from `performance_schema`.`events_waits_summary_by_user_by_event_name` where (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` like 'wait/io/file/%') group by if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) order by sum(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$user_summary_by_file_io_type`
--

/*!50001 DROP TABLE IF EXISTS `x$user_summary_by_file_io_type`*/;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_file_io_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$user_summary_by_file_io_type` AS select if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) AS `user`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` AS `latency`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency` from `performance_schema`.`events_waits_summary_by_user_by_event_name` where ((`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` like 'wait/io/file%') and (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$user_summary_by_stages`
--

/*!50001 DROP TABLE IF EXISTS `x$user_summary_by_stages`*/;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_stages`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$user_summary_by_stages` AS select if(isnull(`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`) AS `user`,`performance_schema`.`events_stages_summary_by_user_by_event_name`.`EVENT_NAME` AS `event_name`,`performance_schema`.`events_stages_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_stages_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_stages_summary_by_user_by_event_name`.`AVG_TIMER_WAIT` AS `avg_latency` from `performance_schema`.`events_stages_summary_by_user_by_event_name` where (`performance_schema`.`events_stages_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_stages_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_stages_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$user_summary_by_statement_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$user_summary_by_statement_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_statement_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$user_summary_by_statement_latency` AS select if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`) AS `user`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`COUNT_STAR`) AS `total`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_LOCK_TIME`) AS `lock_latency`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_SENT`) AS `rows_sent`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_EXAMINED`) AS `rows_examined`,sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_AFFECTED`) AS `rows_affected`,(sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_INDEX_USED`) + sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_GOOD_INDEX_USED`)) AS `full_scans` from `performance_schema`.`events_statements_summary_by_user_by_event_name` group by if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`) order by sum(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$user_summary_by_statement_type`
--

/*!50001 DROP TABLE IF EXISTS `x$user_summary_by_statement_type`*/;
/*!50001 DROP VIEW IF EXISTS `x$user_summary_by_statement_type`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$user_summary_by_statement_type` AS select if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`) AS `user`,substring_index(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`EVENT_NAME`,'/',-(1)) AS `statement`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_LOCK_TIME` AS `lock_latency`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_SENT` AS `rows_sent`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_EXAMINED` AS `rows_examined`,`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_ROWS_AFFECTED` AS `rows_affected`,(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_INDEX_USED` + `performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_NO_GOOD_INDEX_USED`) AS `full_scans` from `performance_schema`.`events_statements_summary_by_user_by_event_name` where (`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` <> 0) order by if(isnull(`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_statements_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_statements_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$wait_classes_global_by_avg_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$wait_classes_global_by_avg_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$wait_classes_global_by_avg_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$wait_classes_global_by_avg_latency` AS select substring_index(`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME`,'/',3) AS `event_class`,sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`) AS `total`,sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,min(`performance_schema`.`events_waits_summary_global_by_event_name`.`MIN_TIMER_WAIT`) AS `min_latency`,ifnull((sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) / nullif(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`),0)),0) AS `avg_latency`,max(`performance_schema`.`events_waits_summary_global_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency` from `performance_schema`.`events_waits_summary_global_by_event_name` where ((`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` > 0) and (`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` <> 'idle')) group by `event_class` order by ifnull((sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) / nullif(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`),0)),0) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$wait_classes_global_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$wait_classes_global_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$wait_classes_global_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=TEMPTABLE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$wait_classes_global_by_latency` AS select substring_index(`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME`,'/',3) AS `event_class`,sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`) AS `total`,sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) AS `total_latency`,min(`performance_schema`.`events_waits_summary_global_by_event_name`.`MIN_TIMER_WAIT`) AS `min_latency`,ifnull((sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) / nullif(sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR`),0)),0) AS `avg_latency`,max(`performance_schema`.`events_waits_summary_global_by_event_name`.`MAX_TIMER_WAIT`) AS `max_latency` from `performance_schema`.`events_waits_summary_global_by_event_name` where ((`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` > 0) and (`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` <> 'idle')) group by substring_index(`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME`,'/',3) order by sum(`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT`) desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$waits_by_host_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$waits_by_host_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$waits_by_host_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$waits_by_host_by_latency` AS select if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`) AS `host`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` AS `event`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`AVG_TIMER_WAIT` AS `avg_latency`,`performance_schema`.`events_waits_summary_by_host_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency` from `performance_schema`.`events_waits_summary_by_host_by_event_name` where ((`performance_schema`.`events_waits_summary_by_host_by_event_name`.`EVENT_NAME` <> 'idle') and (`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),'background',`performance_schema`.`events_waits_summary_by_host_by_event_name`.`HOST`),`performance_schema`.`events_waits_summary_by_host_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$waits_by_user_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$waits_by_user_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$waits_by_user_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$waits_by_user_by_latency` AS select if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`) AS `user`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` AS `event`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`AVG_TIMER_WAIT` AS `avg_latency`,`performance_schema`.`events_waits_summary_by_user_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency` from `performance_schema`.`events_waits_summary_by_user_by_event_name` where ((`performance_schema`.`events_waits_summary_by_user_by_event_name`.`EVENT_NAME` <> 'idle') and (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER` is not null) and (`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` > 0)) order by if(isnull(`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),'background',`performance_schema`.`events_waits_summary_by_user_by_event_name`.`USER`),`performance_schema`.`events_waits_summary_by_user_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `x$waits_global_by_latency`
--

/*!50001 DROP TABLE IF EXISTS `x$waits_global_by_latency`*/;
/*!50001 DROP VIEW IF EXISTS `x$waits_global_by_latency`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=MERGE */
/*!50013 DEFINER=`mysql.sys`@`localhost` SQL SECURITY INVOKER */
/*!50001 VIEW `x$waits_global_by_latency` AS select `performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` AS `events`,`performance_schema`.`events_waits_summary_global_by_event_name`.`COUNT_STAR` AS `total`,`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` AS `total_latency`,`performance_schema`.`events_waits_summary_global_by_event_name`.`AVG_TIMER_WAIT` AS `avg_latency`,`performance_schema`.`events_waits_summary_global_by_event_name`.`MAX_TIMER_WAIT` AS `max_latency` from `performance_schema`.`events_waits_summary_global_by_event_name` where ((`performance_schema`.`events_waits_summary_global_by_event_name`.`EVENT_NAME` <> 'idle') and (`performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` > 0)) order by `performance_schema`.`events_waits_summary_global_by_event_name`.`SUM_TIMER_WAIT` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:24:36
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
-- Table structure for table `columns_priv`
--

DROP TABLE IF EXISTS `columns_priv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `columns_priv` (
  `Host` char(60) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Db` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `User` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Table_name` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Column_name` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Column_priv` set('Select','Insert','Update','References') CHARACTER SET utf8 NOT NULL DEFAULT '',
  PRIMARY KEY (`Host`,`Db`,`User`,`Table_name`,`Column_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column privileges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `columns_priv`
--

LOCK TABLES `columns_priv` WRITE;
/*!40000 ALTER TABLE `columns_priv` DISABLE KEYS */;
/*!40000 ALTER TABLE `columns_priv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `db`
--

DROP TABLE IF EXISTS `db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `db` (
  `Host` char(60) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Db` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `User` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Select_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Insert_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Update_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Delete_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Drop_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Grant_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `References_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Index_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Alter_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_tmp_table_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Lock_tables_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_view_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Show_view_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_routine_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Alter_routine_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Execute_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Event_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Trigger_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  PRIMARY KEY (`Host`,`Db`,`User`),
  KEY `User` (`User`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database privileges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `db`
--

LOCK TABLES `db` WRITE;
/*!40000 ALTER TABLE `db` DISABLE KEYS */;
INSERT INTO `db` VALUES ('localhost','performance_schema','mysql.session','Y','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N'),('localhost','sys','mysql.sys','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','Y'),('%','xchat','xchat','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','N','Y');
/*!40000 ALTER TABLE `db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `engine_cost`
--

DROP TABLE IF EXISTS `engine_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `engine_cost` (
  `engine_name` varchar(64) NOT NULL,
  `device_type` int(11) NOT NULL,
  `cost_name` varchar(64) NOT NULL,
  `cost_value` float DEFAULT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comment` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`cost_name`,`engine_name`,`device_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `engine_cost`
--

LOCK TABLES `engine_cost` WRITE;
/*!40000 ALTER TABLE `engine_cost` DISABLE KEYS */;
INSERT INTO `engine_cost` VALUES ('default',0,'io_block_read_cost',NULL,'2018-12-28 10:43:30',NULL),('default',0,'memory_block_read_cost',NULL,'2018-12-28 10:43:30',NULL);
/*!40000 ALTER TABLE `engine_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event` (
  `db` char(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `name` char(64) NOT NULL DEFAULT '',
  `body` longblob NOT NULL,
  `definer` char(93) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `execute_at` datetime DEFAULT NULL,
  `interval_value` int(11) DEFAULT NULL,
  `interval_field` enum('YEAR','QUARTER','MONTH','DAY','HOUR','MINUTE','WEEK','SECOND','MICROSECOND','YEAR_MONTH','DAY_HOUR','DAY_MINUTE','DAY_SECOND','HOUR_MINUTE','HOUR_SECOND','MINUTE_SECOND','DAY_MICROSECOND','HOUR_MICROSECOND','MINUTE_MICROSECOND','SECOND_MICROSECOND') DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `last_executed` datetime DEFAULT NULL,
  `starts` datetime DEFAULT NULL,
  `ends` datetime DEFAULT NULL,
  `status` enum('ENABLED','DISABLED','SLAVESIDE_DISABLED') NOT NULL DEFAULT 'ENABLED',
  `on_completion` enum('DROP','PRESERVE') NOT NULL DEFAULT 'DROP',
  `sql_mode` set('REAL_AS_FLOAT','PIPES_AS_CONCAT','ANSI_QUOTES','IGNORE_SPACE','NOT_USED','ONLY_FULL_GROUP_BY','NO_UNSIGNED_SUBTRACTION','NO_DIR_IN_CREATE','POSTGRESQL','ORACLE','MSSQL','DB2','MAXDB','NO_KEY_OPTIONS','NO_TABLE_OPTIONS','NO_FIELD_OPTIONS','MYSQL323','MYSQL40','ANSI','NO_AUTO_VALUE_ON_ZERO','NO_BACKSLASH_ESCAPES','STRICT_TRANS_TABLES','STRICT_ALL_TABLES','NO_ZERO_IN_DATE','NO_ZERO_DATE','INVALID_DATES','ERROR_FOR_DIVISION_BY_ZERO','TRADITIONAL','NO_AUTO_CREATE_USER','HIGH_NOT_PRECEDENCE','NO_ENGINE_SUBSTITUTION','PAD_CHAR_TO_FULL_LENGTH') NOT NULL DEFAULT '',
  `comment` char(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `originator` int(10) unsigned NOT NULL,
  `time_zone` char(64) CHARACTER SET latin1 NOT NULL DEFAULT 'SYSTEM',
  `character_set_client` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `collation_connection` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `db_collation` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `body_utf8` longblob,
  PRIMARY KEY (`db`,`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Events';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `func`
--

DROP TABLE IF EXISTS `func`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `func` (
  `name` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `ret` tinyint(1) NOT NULL DEFAULT '0',
  `dl` char(128) COLLATE utf8_bin NOT NULL DEFAULT '',
  `type` enum('function','aggregate') CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User defined functions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `func`
--

LOCK TABLES `func` WRITE;
/*!40000 ALTER TABLE `func` DISABLE KEYS */;
/*!40000 ALTER TABLE `func` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gtid_executed`
--

DROP TABLE IF EXISTS `gtid_executed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gtid_executed` (
  `source_uuid` char(36) NOT NULL COMMENT 'uuid of the source where the transaction was originally executed.',
  `interval_start` bigint(20) NOT NULL COMMENT 'First number of interval.',
  `interval_end` bigint(20) NOT NULL COMMENT 'Last number of interval.',
  PRIMARY KEY (`source_uuid`,`interval_start`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gtid_executed`
--

LOCK TABLES `gtid_executed` WRITE;
/*!40000 ALTER TABLE `gtid_executed` DISABLE KEYS */;
/*!40000 ALTER TABLE `gtid_executed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `help_category`
--

DROP TABLE IF EXISTS `help_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `help_category` (
  `help_category_id` smallint(5) unsigned NOT NULL,
  `name` char(64) NOT NULL,
  `parent_category_id` smallint(5) unsigned DEFAULT NULL,
  `url` text NOT NULL,
  PRIMARY KEY (`help_category_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='help categories';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `help_category`
--

LOCK TABLES `help_category` WRITE;
/*!40000 ALTER TABLE `help_category` DISABLE KEYS */;
INSERT INTO `help_category` VALUES (1,'Geographic',0,''),(2,'Polygon properties',35,''),(3,'Numeric Functions',39,''),(4,'WKT',35,''),(5,'Plugins',36,''),(6,'Control flow functions',39,''),(7,'MBR',35,''),(8,'Transactions',36,''),(9,'Help Metadata',36,''),(10,'Account Management',36,''),(11,'Point properties',35,''),(12,'Encryption Functions',39,''),(13,'LineString properties',35,''),(14,'Miscellaneous Functions',39,''),(15,'Logical operators',39,''),(16,'Functions and Modifiers for Use with GROUP BY',36,''),(17,'Information Functions',39,''),(18,'Storage Engines',36,''),(19,'Bit Functions',39,''),(20,'Comparison operators',39,''),(21,'Table Maintenance',36,''),(22,'User-Defined Functions',36,''),(23,'Data Types',36,''),(24,'Compound Statements',36,''),(25,'Geometry constructors',35,''),(26,'GeometryCollection properties',1,''),(27,'Administration',36,''),(28,'Data Manipulation',36,''),(29,'Utility',36,''),(30,'Language Structure',36,''),(31,'Geometry relations',35,''),(32,'Date and Time Functions',39,''),(33,'WKB',35,''),(34,'Procedures',36,''),(35,'Geographic Features',36,''),(36,'Contents',0,''),(37,'Geometry properties',35,''),(38,'String Functions',39,''),(39,'Functions',36,''),(40,'Data Definition',36,'');
/*!40000 ALTER TABLE `help_category` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `help_relation`
--

DROP TABLE IF EXISTS `help_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `help_relation` (
  `help_topic_id` int(10) unsigned NOT NULL,
  `help_keyword_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`help_keyword_id`,`help_topic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='keyword-topic relation';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `help_relation`
--

LOCK TABLES `help_relation` WRITE;
/*!40000 ALTER TABLE `help_relation` DISABLE KEYS */;
INSERT INTO `help_relation` VALUES (0,0),(535,0),(294,1),(277,2),(2,3),(3,4),(370,5),(370,6),(566,6),(64,7),(432,8),(432,9),(266,10),(277,11),(410,11),(587,11),(6,12),(7,13),(410,14),(14,15),(69,15),(402,15),(528,15),(15,16),(238,17),(78,18),(107,18),(263,18),(235,19),(52,20),(21,21),(380,22),(23,23),(125,24),(328,24),(29,25),(364,25),(559,25),(292,26),(610,26),(292,27),(528,27),(328,28),(235,29),(26,30),(28,31),(461,31),(587,31),(29,32),(208,32),(364,32),(535,32),(559,32),(610,32),(292,33),(313,34),(31,35),(235,36),(536,37),(35,38),(292,38),(617,38),(36,39),(0,40),(370,40),(566,40),(617,40),(111,41),(161,41),(292,41),(610,41),(37,42),(69,42),(432,43),(0,44),(39,44),(121,44),(120,45),(125,45),(156,45),(208,45),(130,46),(610,46),(535,47),(208,48),(125,49),(121,50),(47,51),(292,52),(296,53),(277,54),(30,55),(142,55),(171,55),(208,55),(370,56),(566,56),(235,57),(53,58),(380,58),(535,58),(617,58),(370,59),(566,59),(55,60),(322,61),(380,61),(497,61),(535,61),(60,62),(509,63),(396,64),(410,65),(587,65),(605,65),(65,66),(433,66),(578,67),(610,67),(249,68),(292,68),(610,68),(24,69),(40,69),(54,69),(483,70),(528,70),(69,71),(503,71),(235,72),(70,73),(331,74),(369,74),(73,75),(74,76),(427,76),(75,77),(197,78),(231,78),(604,78),(79,79),(80,80),(81,81),(370,81),(566,81),(629,81),(83,82),(142,82),(235,82),(473,82),(130,83),(292,83),(610,83),(121,84),(130,84),(292,84),(370,84),(566,84),(610,84),(610,85),(84,86),(432,87),(85,88),(432,89),(504,90),(125,91),(364,91),(559,91),(84,92),(487,93),(161,94),(125,95),(156,95),(610,96),(40,97),(54,97),(90,98),(91,99),(292,100),(610,100),(35,101),(78,101),(263,101),(330,101),(500,101),(528,101),(535,101),(602,101),(93,102),(0,103),(24,104),(95,105),(292,106),(446,107),(138,108),(161,108),(208,108),(263,108),(339,108),(348,108),(429,108),(432,108),(503,108),(509,108),(528,108),(535,108),(577,108),(511,109),(528,109),(102,110),(193,111),(64,112),(429,113),(578,114),(64,115),(197,116),(330,117),(528,117),(578,117),(108,118),(109,119),(207,120),(111,121),(112,122),(121,123),(259,123),(610,123),(619,123),(114,124),(398,125),(578,125),(116,126),(118,127),(35,128),(53,128),(535,128),(536,128),(610,128),(432,129),(122,130),(0,131),(35,131),(56,131),(328,132),(158,133),(125,134),(156,134),(126,135),(129,136),(132,137),(133,138),(570,139),(509,140),(292,141),(294,141),(610,141),(617,141),(67,142),(96,142),(208,142),(391,142),(497,142),(197,143),(231,143),(604,143),(104,144),(528,144),(602,145),(197,146),(231,146),(604,146),(142,147),(546,147),(292,148),(144,149),(557,150),(148,151),(149,152),(535,153),(578,154),(125,155),(151,156),(410,157),(155,158),(156,159),(159,160),(161,161),(292,162),(578,162),(535,163),(29,164),(35,164),(53,164),(322,164),(380,164),(398,164),(578,164),(125,165),(169,166),(121,167),(131,168),(412,168),(434,168),(501,168),(528,168),(173,169),(176,170),(255,171),(178,172),(609,173),(264,174),(161,175),(288,175),(0,176),(121,177),(345,177),(455,177),(535,177),(164,178),(266,178),(182,179),(581,180),(183,181),(432,182),(432,183),(187,184),(188,185),(459,186),(192,187),(208,188),(294,189),(242,190),(131,191),(164,191),(212,191),(266,191),(292,191),(308,191),(398,191),(412,191),(528,191),(535,191),(578,191),(610,191),(197,192),(231,192),(604,192),(44,193),(71,193),(135,193),(177,193),(249,193),(260,193),(288,193),(292,193),(387,193),(481,193),(507,193),(528,193),(610,193),(614,193),(193,194),(292,195),(334,195),(481,195),(617,195),(432,196),(187,197),(199,198),(200,199),(610,200),(369,201),(432,202),(535,203),(202,204),(577,205),(207,206),(205,207),(204,208),(207,209),(467,210),(410,211),(96,212),(208,212),(13,213),(17,213),(44,213),(64,213),(121,213),(130,213),(177,213),(196,213),(223,213),(245,213),(290,213),(292,213),(294,213),(345,213),(364,213),(370,213),(412,213),(447,213),(501,213),(528,213),(601,213),(161,214),(528,215),(598,215),(610,216),(547,217),(292,218),(610,218),(383,219),(213,220),(260,221),(197,222),(328,223),(214,224),(164,225),(171,226),(125,227),(156,227),(339,227),(498,227),(535,227),(292,228),(208,229),(292,230),(24,231),(40,231),(54,231),(143,231),(209,231),(214,231),(587,231),(629,231),(217,232),(235,233),(504,234),(69,235),(220,236),(224,237),(125,238),(364,238),(398,238),(559,238),(226,239),(432,240),(115,241),(602,242),(235,243),(610,244),(20,245),(528,245),(231,246),(233,247),(432,248),(235,249),(236,250),(237,251),(330,252),(528,252),(547,252),(186,253),(528,253),(576,253),(239,254),(241,255),(243,256),(610,257),(125,258),(535,259),(437,260),(96,261),(111,261),(208,261),(369,261),(391,261),(246,262),(248,263),(398,264),(578,264),(509,265),(348,266),(509,266),(251,267),(250,268),(328,269),(125,270),(364,270),(559,270),(255,271),(277,272),(410,272),(256,273),(359,274),(331,275),(0,276),(292,277),(610,277),(44,278),(103,278),(125,278),(131,278),(216,278),(230,278),(271,278),(455,278),(460,278),(559,278),(566,278),(610,278),(619,278),(0,279),(262,280),(528,281),(529,281),(578,282),(292,283),(610,283),(264,284),(142,285),(611,285),(131,286),(260,286),(610,286),(235,287),(364,287),(370,287),(559,287),(131,288),(273,289),(125,290),(292,290),(617,290),(274,291),(275,292),(483,293),(277,294),(370,295),(393,296),(279,297),(280,298),(334,299),(481,299),(617,299),(281,300),(277,301),(350,302),(127,303),(229,303),(283,303),(368,303),(285,304),(127,305),(364,305),(368,305),(370,305),(412,305),(502,305),(328,306),(121,307),(619,307),(117,308),(208,309),(292,310),(410,311),(509,311),(587,311),(610,312),(5,313),(24,313),(302,313),(334,313),(364,313),(370,313),(412,313),(434,313),(481,313),(495,313),(513,313),(559,313),(398,314),(171,315),(290,316),(294,316),(364,316),(453,316),(509,316),(513,316),(559,316),(503,317),(612,318),(292,319),(291,320),(535,321),(519,322),(322,323),(380,323),(623,323),(156,324),(295,325),(296,326),(208,327),(29,328),(277,328),(410,328),(587,328),(292,329),(300,330),(364,331),(559,331),(131,332),(294,332),(412,332),(434,332),(501,332),(528,332),(229,333),(368,333),(617,333),(304,334),(303,335),(288,336),(578,337),(164,338),(309,339),(131,340),(292,340),(610,340),(311,341),(314,342),(125,343),(315,343),(316,344),(317,345),(197,346),(231,346),(604,346),(121,347),(292,348),(446,348),(318,349),(441,350),(143,351),(322,352),(398,352),(578,352),(324,353),(370,354),(406,355),(370,356),(566,356),(292,357),(330,357),(528,357),(578,357),(610,357),(142,358),(369,359),(535,359),(64,360),(142,360),(313,360),(231,361),(322,361),(380,361),(465,361),(604,361),(428,362),(432,363),(384,364),(5,365),(57,365),(166,365),(254,365),(259,365),(334,365),(336,365),(434,365),(461,365),(481,365),(495,365),(513,365),(573,365),(610,365),(619,365),(535,366),(125,367),(364,367),(559,367),(432,368),(337,369),(260,370),(292,370),(610,370),(189,371),(292,371),(330,371),(528,371),(598,371),(35,372),(53,372),(125,372),(292,372),(364,372),(398,372),(535,372),(536,372),(559,372),(578,372),(610,372),(340,373),(292,374),(617,374),(235,375),(131,376),(292,376),(294,376),(578,376),(610,376),(0,377),(35,377),(292,377),(322,377),(380,377),(535,377),(578,377),(610,377),(64,378),(504,378),(535,379),(343,380),(197,381),(231,381),(604,381),(432,382),(197,383),(231,383),(604,383),(125,384),(364,384),(559,384),(350,385),(197,386),(231,386),(604,386),(35,387),(53,387),(69,387),(330,387),(500,387),(223,388),(370,388),(495,388),(566,388),(125,389),(0,390),(53,390),(380,390),(398,390),(535,390),(578,390),(355,391),(292,392),(35,393),(260,393),(288,393),(142,394),(610,395),(362,396),(242,397),(60,398),(0,399),(171,400),(432,400),(605,400),(328,401),(432,401),(610,401),(365,402),(367,403),(197,404),(231,404),(604,404),(208,405),(164,406),(292,407),(121,408),(235,409),(372,410),(208,411),(161,412),(373,413),(362,414),(375,415),(13,416),(117,416),(196,416),(210,416),(271,416),(528,416),(535,416),(573,416),(624,416),(369,417),(378,418),(509,419),(379,420),(487,421),(123,422),(195,422),(380,422),(623,422),(267,423),(358,423),(511,423),(382,424),(294,425),(383,426),(5,427),(334,427),(364,427),(370,427),(412,427),(434,427),(481,427),(495,427),(513,427),(559,427),(528,428),(539,428),(384,429),(410,430),(587,430),(605,430),(131,431),(292,431),(322,431),(364,431),(380,431),(412,431),(440,431),(465,431),(559,431),(610,431),(617,431),(610,432),(208,433),(288,433),(387,433),(614,433),(389,434),(387,435),(610,435),(231,436),(604,436),(96,437),(167,437),(339,437),(391,437),(576,438),(137,439),(395,440),(53,441),(115,441),(131,441),(212,441),(231,441),(292,441),(299,441),(308,441),(310,441),(322,441),(359,441),(380,441),(396,441),(398,441),(410,441),(412,441),(528,441),(535,441),(578,441),(604,441),(610,441),(617,441),(397,442),(125,443),(364,443),(559,443),(400,444),(41,445),(135,445),(138,445),(208,445),(210,445),(405,445),(516,445),(528,445),(539,445),(0,446),(263,447),(348,448),(292,449),(602,450),(161,451),(406,452),(407,453),(461,454),(348,455),(509,455),(40,456),(54,456),(125,457),(364,457),(559,457),(503,458),(29,459),(69,459),(208,459),(277,459),(410,459),(587,459),(235,460),(400,461),(292,462),(610,462),(197,463),(64,464),(196,464),(245,464),(254,464),(336,464),(357,464),(447,464),(460,464),(516,464),(528,464),(573,464),(580,465),(308,466),(158,467),(425,468),(44,469),(121,469),(610,469),(619,469),(292,470),(610,470),(292,471),(421,472),(428,473),(431,474),(610,475),(103,476),(334,476),(601,476),(277,477),(436,478),(437,479),(197,480),(231,480),(604,480),(439,481),(441,482),(142,483),(313,483),(331,483),(393,483),(421,483),(446,483),(504,483),(64,484),(100,484),(142,484),(528,485),(452,486),(208,487),(409,487),(528,487),(410,488),(587,488),(410,489),(587,489),(429,490),(440,490),(503,490),(577,490),(454,491),(216,492),(497,493),(578,493),(535,494),(459,495),(131,496),(292,496),(412,496),(610,496),(122,497),(138,498),(208,498),(263,498),(339,498),(348,498),(432,498),(509,498),(611,499),(115,500),(277,500),(396,500),(405,500),(529,500),(599,501),(40,502),(54,502),(463,503),(464,504),(0,505),(29,505),(364,505),(535,505),(559,505),(512,506),(610,507),(467,508),(468,509),(435,510),(528,510),(328,511),(0,512),(197,513),(231,513),(604,513),(364,514),(559,514),(509,515),(137,516),(125,517),(130,517),(208,517),(292,517),(364,517),(369,517),(559,517),(610,517),(472,518),(610,519),(370,520),(566,520),(610,520),(186,521),(476,522),(64,523),(480,524),(0,525),(44,525),(57,525),(67,525),(130,525),(292,525),(497,525),(500,525),(528,525),(610,525),(370,526),(566,526),(432,527),(610,528),(176,529),(484,530),(485,531),(364,532),(559,532),(488,533),(503,534),(491,535),(313,536),(331,536),(393,536),(421,536),(446,536),(504,536),(125,537),(432,538),(432,539),(432,540),(494,541),(121,542),(208,542),(259,542),(292,542),(528,542),(539,542),(610,542),(619,542),(292,543),(610,543),(535,544),(498,545),(610,545),(292,546),(161,547),(535,547),(536,547),(142,548),(234,548),(505,548),(369,549),(446,550),(357,551),(624,551),(510,552),(121,553),(345,553),(455,553),(121,554),(512,555),(125,556),(364,556),(559,556),(145,557),(370,558),(30,559),(171,559),(208,559),(528,559),(587,560),(515,561),(292,562),(197,563),(610,564),(92,565),(518,566),(288,567),(610,567),(519,568),(521,569),(520,570),(322,571),(380,571),(525,572),(507,573),(610,573),(13,574),(20,574),(27,574),(30,574),(41,574),(52,574),(78,574),(104,574),(107,574),(120,574),(135,574),(138,574),(177,574),(189,574),(210,574),(212,574),(223,574),(245,574),(263,574),(290,574),(306,574),(330,574),(357,574),(358,574),(402,574),(405,574),(409,574),(435,574),(483,574),(500,574),(501,574),(511,574),(516,574),(528,574),(529,574),(539,574),(598,574),(624,574),(626,574),(78,575),(530,575),(531,576),(92,577),(533,577),(235,578),(161,579),(195,579),(322,579),(380,579),(535,579),(104,580),(528,580),(294,581),(72,582),(331,582),(432,583),(398,584),(578,584),(76,585),(553,585),(125,586),(230,587),(294,587),(410,588),(587,588),(125,589),(364,589),(559,589),(78,590),(263,590),(330,590),(369,590),(500,590),(535,590),(197,591),(554,592),(535,593),(557,594),(56,595),(125,595),(558,596),(142,597),(161,597),(561,598),(188,599),(432,600),(565,601),(5,602),(230,602),(294,602),(432,603),(79,604),(235,605),(235,606),(328,607),(610,608),(91,609),(570,610),(71,611),(453,611),(566,611),(610,611),(130,612),(292,612),(610,612),(375,613),(294,614),(574,615),(575,616),(0,617),(535,617),(7,618),(580,619),(581,620),(125,621),(294,621),(299,621),(364,621),(509,621),(559,621),(610,621),(535,622),(69,623),(358,624),(528,624),(310,625),(481,626),(277,627),(585,628),(535,629),(129,630),(328,631),(587,632),(588,633),(292,634),(610,634),(209,635),(410,635),(587,635),(306,636),(260,637),(589,638),(125,639),(364,639),(559,639),(235,640),(592,641),(597,642),(599,643),(600,644),(292,645),(610,645),(604,646),(27,647),(605,648),(606,649),(610,650),(607,651),(69,652),(609,653),(500,654),(528,654),(610,654),(35,655),(53,655),(69,655),(78,655),(263,655),(535,655),(44,656),(292,656),(380,656),(610,656),(617,656),(143,657),(612,658),(197,659),(231,659),(604,659),(615,660),(610,661),(614,661),(292,662),(610,662),(292,663),(465,663),(292,664),(617,664),(121,665),(619,665),(277,666),(396,666),(405,666),(529,666),(138,667),(339,667),(348,667),(370,667),(391,667),(409,667),(509,667),(566,667),(535,668),(536,668),(370,669),(566,669),(610,669),(578,670),(125,671),(364,671),(559,671),(629,672),(63,673),(267,673),(321,673),(490,673),(498,673),(535,673),(536,673),(549,673),(29,674),(208,674),(288,674),(387,674),(398,674),(578,674),(614,674),(432,675),(630,676),(631,677),(125,678),(29,679),(189,679),(208,679),(402,679),(528,679),(628,680),(208,681),(22,682),(17,683),(166,683),(528,683),(528,684),(626,684),(380,685),(535,685),(130,686),(69,687),(292,687),(610,687),(610,688),(121,689),(619,689),(30,690),(41,690),(167,690),(171,690),(391,690),(432,690),(292,691),(610,691),(207,692),(459,692);
/*!40000 ALTER TABLE `help_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `help_topic`
--

DROP TABLE IF EXISTS `help_topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `help_topic` (
  `help_topic_id` int(10) unsigned NOT NULL,
  `name` char(64) NOT NULL,
  `help_category_id` smallint(5) unsigned NOT NULL,
  `description` text NOT NULL,
  `example` text NOT NULL,
  `url` text NOT NULL,
  PRIMARY KEY (`help_topic_id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='help topics';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `help_topic`
--

LOCK TABLES `help_topic` WRITE;
/*!40000 ALTER TABLE `help_topic` DISABLE KEYS */;
/*!40000 ALTER TABLE `help_topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `innodb_index_stats`
--

DROP TABLE IF EXISTS `innodb_index_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `innodb_index_stats` (
  `database_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `index_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `stat_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `stat_value` bigint(20) unsigned NOT NULL,
  `sample_size` bigint(20) unsigned DEFAULT NULL,
  `stat_description` varchar(1024) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`database_name`,`table_name`,`index_name`,`stat_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin STATS_PERSISTENT=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `innodb_index_stats`
--

LOCK TABLES `innodb_index_stats` WRITE;
/*!40000 ALTER TABLE `innodb_index_stats` DISABLE KEYS */;
INSERT INTO `innodb_index_stats` VALUES ('mysql','gtid_executed','PRIMARY','2018-12-28 10:43:30','n_diff_pfx01',0,1,'source_uuid'),('mysql','gtid_executed','PRIMARY','2018-12-28 10:43:30','n_diff_pfx02',0,1,'source_uuid,interval_start'),('mysql','gtid_executed','PRIMARY','2018-12-28 10:43:30','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('mysql','gtid_executed','PRIMARY','2018-12-28 10:43:30','size',1,NULL,'Number of pages in the index'),('sakila','actor','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',5,1,'actor_id'),('sakila','actor','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','actor','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','actor','idx_actor_last_name','2018-12-28 10:59:56','n_diff_pfx01',5,1,'last_name'),('sakila','actor','idx_actor_last_name','2018-12-28 10:59:56','n_diff_pfx02',5,1,'last_name,actor_id'),('sakila','actor','idx_actor_last_name','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','actor','idx_actor_last_name','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','address','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',603,5,'address_id'),('sakila','address','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',5,NULL,'Number of leaf pages in the index'),('sakila','address','PRIMARY','2018-12-28 10:59:56','size',6,NULL,'Number of pages in the index'),('sakila','address','idx_fk_city_id','2018-12-28 10:59:56','n_diff_pfx01',599,1,'city_id'),('sakila','address','idx_fk_city_id','2018-12-28 10:59:56','n_diff_pfx02',603,1,'city_id,address_id'),('sakila','address','idx_fk_city_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','address','idx_fk_city_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','category','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',16,1,'category_id'),('sakila','category','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','category','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','city','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',600,2,'city_id'),('sakila','city','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',2,NULL,'Number of leaf pages in the index'),('sakila','city','PRIMARY','2018-12-28 10:59:56','size',3,NULL,'Number of pages in the index'),('sakila','city','idx_fk_country_id','2018-12-28 10:59:56','n_diff_pfx01',109,1,'country_id'),('sakila','city','idx_fk_country_id','2018-12-28 10:59:56','n_diff_pfx02',600,1,'country_id,city_id'),('sakila','city','idx_fk_country_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','city','idx_fk_country_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','country','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',109,1,'country_id'),('sakila','country','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','country','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','customer','PRIMARY','2018-12-28 10:59:57','n_diff_pfx01',599,4,'customer_id'),('sakila','customer','PRIMARY','2018-12-28 10:59:57','n_leaf_pages',4,NULL,'Number of leaf pages in the index'),('sakila','customer','PRIMARY','2018-12-28 10:59:57','size',5,NULL,'Number of pages in the index'),('sakila','customer','idx_fk_address_id','2018-12-28 10:59:57','n_diff_pfx01',599,1,'address_id'),('sakila','customer','idx_fk_address_id','2018-12-28 10:59:57','n_diff_pfx02',599,1,'address_id,customer_id'),('sakila','customer','idx_fk_address_id','2018-12-28 10:59:57','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','customer','idx_fk_address_id','2018-12-28 10:59:57','size',1,NULL,'Number of pages in the index'),('sakila','customer','idx_fk_store_id','2018-12-28 10:59:57','n_diff_pfx01',2,1,'store_id'),('sakila','customer','idx_fk_store_id','2018-12-28 10:59:57','n_diff_pfx02',599,1,'store_id,customer_id'),('sakila','customer','idx_fk_store_id','2018-12-28 10:59:57','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','customer','idx_fk_store_id','2018-12-28 10:59:57','size',1,NULL,'Number of pages in the index'),('sakila','customer','idx_last_name','2018-12-28 10:59:57','n_diff_pfx01',599,1,'last_name'),('sakila','customer','idx_last_name','2018-12-28 10:59:57','n_diff_pfx02',599,1,'last_name,customer_id'),('sakila','customer','idx_last_name','2018-12-28 10:59:57','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','customer','idx_last_name','2018-12-28 10:59:57','size',1,NULL,'Number of pages in the index'),('sakila','film','PRIMARY','2018-12-28 10:59:57','n_diff_pfx01',1000,11,'film_id'),('sakila','film','PRIMARY','2018-12-28 10:59:57','n_leaf_pages',11,NULL,'Number of leaf pages in the index'),('sakila','film','PRIMARY','2018-12-28 10:59:57','size',12,NULL,'Number of pages in the index'),('sakila','film','idx_fk_language_id','2018-12-28 10:59:57','n_diff_pfx01',1,1,'language_id'),('sakila','film','idx_fk_language_id','2018-12-28 10:59:57','n_diff_pfx02',1000,1,'language_id,film_id'),('sakila','film','idx_fk_language_id','2018-12-28 10:59:57','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','film','idx_fk_language_id','2018-12-28 10:59:57','size',1,NULL,'Number of pages in the index'),('sakila','film','idx_fk_original_language_id','2018-12-28 10:59:57','n_diff_pfx01',1,1,'original_language_id'),('sakila','film','idx_fk_original_language_id','2018-12-28 10:59:57','n_diff_pfx02',1000,1,'original_language_id,film_id'),('sakila','film','idx_fk_original_language_id','2018-12-28 10:59:57','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','film','idx_fk_original_language_id','2018-12-28 10:59:57','size',1,NULL,'Number of pages in the index'),('sakila','film','idx_title','2018-12-28 10:59:57','n_diff_pfx01',1000,2,'title'),('sakila','film','idx_title','2018-12-28 10:59:57','n_diff_pfx02',1000,2,'title,film_id'),('sakila','film','idx_title','2018-12-28 10:59:57','n_leaf_pages',2,NULL,'Number of leaf pages in the index'),('sakila','film','idx_title','2018-12-28 10:59:57','size',3,NULL,'Number of pages in the index'),('sakila','film_actor','PRIMARY','2018-12-28 10:59:57','n_diff_pfx01',200,11,'actor_id'),('sakila','film_actor','PRIMARY','2018-12-28 10:59:57','n_diff_pfx02',5462,11,'actor_id,film_id'),('sakila','film_actor','PRIMARY','2018-12-28 10:59:57','n_leaf_pages',11,NULL,'Number of leaf pages in the index'),('sakila','film_actor','PRIMARY','2018-12-28 10:59:57','size',12,NULL,'Number of pages in the index'),('sakila','film_actor','idx_fk_film_id','2018-12-28 10:59:57','n_diff_pfx01',997,4,'film_id'),('sakila','film_actor','idx_fk_film_id','2018-12-28 10:59:57','n_diff_pfx02',5462,4,'film_id,actor_id'),('sakila','film_actor','idx_fk_film_id','2018-12-28 10:59:57','n_leaf_pages',4,NULL,'Number of leaf pages in the index'),('sakila','film_actor','idx_fk_film_id','2018-12-28 10:59:57','size',5,NULL,'Number of pages in the index'),('sakila','film_category','PRIMARY','2018-12-28 10:59:58','n_diff_pfx01',1000,3,'film_id'),('sakila','film_category','PRIMARY','2018-12-28 10:59:58','n_diff_pfx02',1000,3,'film_id,category_id'),('sakila','film_category','PRIMARY','2018-12-28 10:59:58','n_leaf_pages',3,NULL,'Number of leaf pages in the index'),('sakila','film_category','PRIMARY','2018-12-28 10:59:58','size',4,NULL,'Number of pages in the index'),('sakila','film_category','fk_film_category_category','2018-12-28 10:59:58','n_diff_pfx01',16,1,'category_id'),('sakila','film_category','fk_film_category_category','2018-12-28 10:59:58','n_diff_pfx02',1000,1,'category_id,film_id'),('sakila','film_category','fk_film_category_category','2018-12-28 10:59:58','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','film_category','fk_film_category_category','2018-12-28 10:59:58','size',1,NULL,'Number of pages in the index'),('sakila','film_text','FTS_DOC_ID_INDEX','2018-12-28 10:59:57','n_diff_pfx01',1000,1,'FTS_DOC_ID'),('sakila','film_text','FTS_DOC_ID_INDEX','2018-12-28 10:59:57','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','film_text','FTS_DOC_ID_INDEX','2018-12-28 10:59:57','size',1,NULL,'Number of pages in the index'),('sakila','film_text','PRIMARY','2018-12-28 10:59:57','n_diff_pfx01',1000,10,'film_id'),('sakila','film_text','PRIMARY','2018-12-28 10:59:57','n_leaf_pages',10,NULL,'Number of leaf pages in the index'),('sakila','film_text','PRIMARY','2018-12-28 10:59:57','size',11,NULL,'Number of pages in the index'),('sakila','inventory','PRIMARY','2018-12-28 11:00:08','n_diff_pfx01',4581,10,'inventory_id'),('sakila','inventory','PRIMARY','2018-12-28 11:00:08','n_leaf_pages',10,NULL,'Number of leaf pages in the index'),('sakila','inventory','PRIMARY','2018-12-28 11:00:08','size',11,NULL,'Number of pages in the index'),('sakila','inventory','idx_fk_film_id','2018-12-28 11:00:08','n_diff_pfx01',958,4,'film_id'),('sakila','inventory','idx_fk_film_id','2018-12-28 11:00:08','n_diff_pfx02',4581,4,'film_id,inventory_id'),('sakila','inventory','idx_fk_film_id','2018-12-28 11:00:08','n_leaf_pages',4,NULL,'Number of leaf pages in the index'),('sakila','inventory','idx_fk_film_id','2018-12-28 11:00:08','size',5,NULL,'Number of pages in the index'),('sakila','inventory','idx_store_id_film_id','2018-12-28 11:00:08','n_diff_pfx01',2,6,'store_id'),('sakila','inventory','idx_store_id_film_id','2018-12-28 11:00:08','n_diff_pfx02',1521,6,'store_id,film_id'),('sakila','inventory','idx_store_id_film_id','2018-12-28 11:00:08','n_diff_pfx03',4581,6,'store_id,film_id,inventory_id'),('sakila','inventory','idx_store_id_film_id','2018-12-28 11:00:08','n_leaf_pages',6,NULL,'Number of leaf pages in the index'),('sakila','inventory','idx_store_id_film_id','2018-12-28 11:00:08','size',7,NULL,'Number of pages in the index'),('sakila','language','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',0,1,'language_id'),('sakila','language','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','language','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','payment','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',0,1,'payment_id'),('sakila','payment','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','payment','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','payment','fk_payment_rental','2018-12-28 10:59:56','n_diff_pfx01',0,1,'rental_id'),('sakila','payment','fk_payment_rental','2018-12-28 10:59:56','n_diff_pfx02',0,1,'rental_id,payment_id'),('sakila','payment','fk_payment_rental','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','payment','fk_payment_rental','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','payment','idx_fk_customer_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'customer_id'),('sakila','payment','idx_fk_customer_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'customer_id,payment_id'),('sakila','payment','idx_fk_customer_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','payment','idx_fk_customer_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','payment','idx_fk_staff_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'staff_id'),('sakila','payment','idx_fk_staff_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'staff_id,payment_id'),('sakila','payment','idx_fk_staff_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','payment','idx_fk_staff_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','rental','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',0,1,'rental_id'),('sakila','rental','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','rental','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','rental','idx_fk_customer_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'customer_id'),('sakila','rental','idx_fk_customer_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'customer_id,rental_id'),('sakila','rental','idx_fk_customer_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','rental','idx_fk_customer_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','rental','idx_fk_inventory_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'inventory_id'),('sakila','rental','idx_fk_inventory_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'inventory_id,rental_id'),('sakila','rental','idx_fk_inventory_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','rental','idx_fk_inventory_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','rental','idx_fk_staff_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'staff_id'),('sakila','rental','idx_fk_staff_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'staff_id,rental_id'),('sakila','rental','idx_fk_staff_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','rental','idx_fk_staff_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','rental','rental_date','2018-12-28 10:59:56','n_diff_pfx01',0,1,'rental_date'),('sakila','rental','rental_date','2018-12-28 10:59:56','n_diff_pfx02',0,1,'rental_date,inventory_id'),('sakila','rental','rental_date','2018-12-28 10:59:56','n_diff_pfx03',0,1,'rental_date,inventory_id,customer_id'),('sakila','rental','rental_date','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','rental','rental_date','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','staff','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',0,1,'staff_id'),('sakila','staff','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','staff','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','staff','idx_fk_address_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'address_id'),('sakila','staff','idx_fk_address_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'address_id,staff_id'),('sakila','staff','idx_fk_address_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','staff','idx_fk_address_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','staff','idx_fk_store_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'store_id'),('sakila','staff','idx_fk_store_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'store_id,staff_id'),('sakila','staff','idx_fk_store_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','staff','idx_fk_store_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','store','PRIMARY','2018-12-28 10:59:56','n_diff_pfx01',0,1,'store_id'),('sakila','store','PRIMARY','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','store','PRIMARY','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','store','idx_fk_address_id','2018-12-28 10:59:56','n_diff_pfx01',0,1,'address_id'),('sakila','store','idx_fk_address_id','2018-12-28 10:59:56','n_diff_pfx02',0,1,'address_id,store_id'),('sakila','store','idx_fk_address_id','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','store','idx_fk_address_id','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sakila','store','idx_unique_manager','2018-12-28 10:59:56','n_diff_pfx01',0,1,'manager_staff_id'),('sakila','store','idx_unique_manager','2018-12-28 10:59:56','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sakila','store','idx_unique_manager','2018-12-28 10:59:56','size',1,NULL,'Number of pages in the index'),('sys','sys_config','PRIMARY','2018-12-28 10:43:31','n_diff_pfx01',6,1,'variable'),('sys','sys_config','PRIMARY','2018-12-28 10:43:31','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('sys','sys_config','PRIMARY','2018-12-28 10:43:31','size',1,NULL,'Number of pages in the index'),('world','city','CountryCode','2018-12-28 10:59:58','n_diff_pfx01',0,1,'CountryCode'),('world','city','CountryCode','2018-12-28 10:59:58','n_diff_pfx02',0,1,'CountryCode,ID'),('world','city','CountryCode','2018-12-28 10:59:58','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('world','city','CountryCode','2018-12-28 10:59:58','size',1,NULL,'Number of pages in the index'),('world','city','PRIMARY','2018-12-28 10:59:58','n_diff_pfx01',0,1,'ID'),('world','city','PRIMARY','2018-12-28 10:59:58','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('world','city','PRIMARY','2018-12-28 10:59:58','size',1,NULL,'Number of pages in the index'),('xchat','tblauthenticate','PRIMARY','2019-01-07 20:56:35','n_diff_pfx01',0,1,'id'),('xchat','tblauthenticate','PRIMARY','2019-01-07 20:56:35','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('xchat','tblauthenticate','PRIMARY','2019-01-07 20:56:35','size',1,NULL,'Number of pages in the index'),('xchat','tblroommessages','PRIMARY','2019-01-07 20:57:20','n_diff_pfx01',33,1,'id'),('xchat','tblroommessages','PRIMARY','2019-01-07 20:57:20','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('xchat','tblroommessages','PRIMARY','2019-01-07 20:57:20','size',1,NULL,'Number of pages in the index'),('xchat','tblrooms','PRIMARY','2019-01-07 20:56:27','n_diff_pfx01',0,1,'id'),('xchat','tblrooms','PRIMARY','2019-01-07 20:56:27','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('xchat','tblrooms','PRIMARY','2019-01-07 20:56:27','size',1,NULL,'Number of pages in the index'),('xchat','tblusers','PRIMARY','2019-01-07 08:20:43','n_diff_pfx01',422,1,'id'),('xchat','tblusers','PRIMARY','2019-01-07 08:20:43','n_leaf_pages',1,NULL,'Number of leaf pages in the index'),('xchat','tblusers','PRIMARY','2019-01-07 08:20:43','size',1,NULL,'Number of pages in the index');
/*!40000 ALTER TABLE `innodb_index_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `innodb_table_stats`
--

DROP TABLE IF EXISTS `innodb_table_stats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `innodb_table_stats` (
  `database_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `n_rows` bigint(20) unsigned NOT NULL,
  `clustered_index_size` bigint(20) unsigned NOT NULL,
  `sum_of_other_index_sizes` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`database_name`,`table_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin STATS_PERSISTENT=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `innodb_table_stats`
--

LOCK TABLES `innodb_table_stats` WRITE;
/*!40000 ALTER TABLE `innodb_table_stats` DISABLE KEYS */;
INSERT INTO `innodb_table_stats` VALUES ('mysql','gtid_executed','2018-12-28 10:43:30',0,1,0),('sakila','actor','2018-12-28 10:59:56',6,1,1),('sakila','address','2018-12-28 10:59:56',603,6,1),('sakila','category','2018-12-28 10:59:56',16,1,0),('sakila','city','2018-12-28 10:59:56',600,3,1),('sakila','country','2018-12-28 10:59:56',109,1,0),('sakila','customer','2018-12-28 10:59:57',599,5,3),('sakila','film','2018-12-28 10:59:57',1000,12,5),('sakila','film_actor','2018-12-28 10:59:57',5462,12,5),('sakila','film_category','2018-12-28 10:59:58',1000,4,1),('sakila','film_text','2018-12-28 10:59:57',1000,11,1),('sakila','inventory','2018-12-28 11:00:08',4581,11,12),('sakila','language','2018-12-28 10:59:56',0,1,0),('sakila','payment','2018-12-28 10:59:56',0,1,3),('sakila','rental','2018-12-28 10:59:56',0,1,4),('sakila','staff','2018-12-28 10:59:56',0,1,2),('sakila','store','2018-12-28 10:59:56',0,1,2),('sys','sys_config','2018-12-28 10:43:31',6,1,0),('world','city','2018-12-28 10:59:58',0,1,1),('xchat','tblauthenticate','2019-01-07 20:56:35',0,1,0),('xchat','tblroommessages','2019-01-07 20:57:20',33,1,0),('xchat','tblrooms','2019-01-07 20:56:27',0,1,0),('xchat','tblusers','2019-01-07 08:20:43',422,1,0);
/*!40000 ALTER TABLE `innodb_table_stats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ndb_binlog_index`
--

DROP TABLE IF EXISTS `ndb_binlog_index`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ndb_binlog_index` (
  `Position` bigint(20) unsigned NOT NULL,
  `File` varchar(255) NOT NULL,
  `epoch` bigint(20) unsigned NOT NULL,
  `inserts` int(10) unsigned NOT NULL,
  `updates` int(10) unsigned NOT NULL,
  `deletes` int(10) unsigned NOT NULL,
  `schemaops` int(10) unsigned NOT NULL,
  `orig_server_id` int(10) unsigned NOT NULL,
  `orig_epoch` bigint(20) unsigned NOT NULL,
  `gci` int(10) unsigned NOT NULL,
  `next_position` bigint(20) unsigned NOT NULL,
  `next_file` varchar(255) NOT NULL,
  PRIMARY KEY (`epoch`,`orig_server_id`,`orig_epoch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ndb_binlog_index`
--

LOCK TABLES `ndb_binlog_index` WRITE;
/*!40000 ALTER TABLE `ndb_binlog_index` DISABLE KEYS */;
/*!40000 ALTER TABLE `ndb_binlog_index` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plugin`
--

DROP TABLE IF EXISTS `plugin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plugin` (
  `name` varchar(64) NOT NULL DEFAULT '',
  `dl` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='MySQL plugins';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plugin`
--

LOCK TABLES `plugin` WRITE;
/*!40000 ALTER TABLE `plugin` DISABLE KEYS */;
/*!40000 ALTER TABLE `plugin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proc`
--

DROP TABLE IF EXISTS `proc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proc` (
  `db` char(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `name` char(64) NOT NULL DEFAULT '',
  `type` enum('FUNCTION','PROCEDURE') NOT NULL,
  `specific_name` char(64) NOT NULL DEFAULT '',
  `language` enum('SQL') NOT NULL DEFAULT 'SQL',
  `sql_data_access` enum('CONTAINS_SQL','NO_SQL','READS_SQL_DATA','MODIFIES_SQL_DATA') NOT NULL DEFAULT 'CONTAINS_SQL',
  `is_deterministic` enum('YES','NO') NOT NULL DEFAULT 'NO',
  `security_type` enum('INVOKER','DEFINER') NOT NULL DEFAULT 'DEFINER',
  `param_list` blob NOT NULL,
  `returns` longblob NOT NULL,
  `body` longblob NOT NULL,
  `definer` char(93) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '',
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `sql_mode` set('REAL_AS_FLOAT','PIPES_AS_CONCAT','ANSI_QUOTES','IGNORE_SPACE','NOT_USED','ONLY_FULL_GROUP_BY','NO_UNSIGNED_SUBTRACTION','NO_DIR_IN_CREATE','POSTGRESQL','ORACLE','MSSQL','DB2','MAXDB','NO_KEY_OPTIONS','NO_TABLE_OPTIONS','NO_FIELD_OPTIONS','MYSQL323','MYSQL40','ANSI','NO_AUTO_VALUE_ON_ZERO','NO_BACKSLASH_ESCAPES','STRICT_TRANS_TABLES','STRICT_ALL_TABLES','NO_ZERO_IN_DATE','NO_ZERO_DATE','INVALID_DATES','ERROR_FOR_DIVISION_BY_ZERO','TRADITIONAL','NO_AUTO_CREATE_USER','HIGH_NOT_PRECEDENCE','NO_ENGINE_SUBSTITUTION','PAD_CHAR_TO_FULL_LENGTH') NOT NULL DEFAULT '',
  `comment` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `character_set_client` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `collation_connection` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `db_collation` char(32) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `body_utf8` longblob,
  PRIMARY KEY (`db`,`name`,`type`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Stored Procedures';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proc`
--

LOCK TABLES `proc` WRITE;
/*!40000 ALTER TABLE `proc` DISABLE KEYS */;
INSERT INTO `proc` VALUES ('sys','extract_schema_from_file_name','FUNCTION','extract_schema_from_file_name','SQL','NO_SQL','YES','INVOKER',' path VARCHAR(512) ','varchar(64) CHARSET utf8','BEGIN RETURN LEFT(SUBSTRING_INDEX(SUBSTRING_INDEX(REPLACE(path, \'\\\\\', \'/\'), \'/\', -2), \'/\', 1), 64); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a raw file path, and attempts to extract the schema name from it.\n \n Useful for when interacting with Performance Schema data \n concerning IO statistics, for example.\n \n Currently relies on the fact that a table data file will be within a \n specified database directory (will not work with partitions or tables\n that specify an individual DATA_DIRECTORY).\n \n Parameters\n \n path (VARCHAR(512)):\n The full file path to a data file to extract the schema name from.\n \n Returns\n \n VARCHAR(64)\n \n Example\n \n mysql> SELECT sys.extract_schema_from_file_name(\'/var/lib/mysql/employees/employee.ibd\');\n +----------------------------------------------------------------------------+\n | sys.extract_schema_from_file_name(\'/var/lib/mysql/employees/employee.ibd\') |\n +----------------------------------------------------------------------------+\n | employees                                                                  |\n +----------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN LEFT(SUBSTRING_INDEX(SUBSTRING_INDEX(REPLACE(path, \'\\\', \'/\'), \'/\', -2), \'/\', 1), 64); END'),('sys','extract_table_from_file_name','FUNCTION','extract_table_from_file_name','SQL','NO_SQL','YES','INVOKER',' path VARCHAR(512) ','varchar(64) CHARSET utf8','BEGIN RETURN LEFT(SUBSTRING_INDEX(REPLACE(SUBSTRING_INDEX(REPLACE(path, \'\\\\\', \'/\'), \'/\', -1), \'@0024\', \'$\'), \'.\', 1), 64); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a raw file path, and extracts the table name from it.\n \n Useful for when interacting with Performance Schema data \n concerning IO statistics, for example.\n \n Parameters\n \n path (VARCHAR(512)):\n The full file path to a data file to extract the table name from.\n \n Returns\n \n VARCHAR(64)\n \n Example\n \n mysql> SELECT sys.extract_table_from_file_name(\'/var/lib/mysql/employees/employee.ibd\');\n +---------------------------------------------------------------------------+\n | sys.extract_table_from_file_name(\'/var/lib/mysql/employees/employee.ibd\') |\n +---------------------------------------------------------------------------+\n | employee                                                                  |\n +---------------------------------------------------------------------------+\n 1 row in set (0.02 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN LEFT(SUBSTRING_INDEX(REPLACE(SUBSTRING_INDEX(REPLACE(path, \'\\\', \'/\'), \'/\', -1), \'@0024\', \'$\'), \'.\', 1), 64); END'),('sys','format_bytes','FUNCTION','format_bytes','SQL','NO_SQL','YES','INVOKER',' bytes TEXT ','text CHARSET utf8','BEGIN IF bytes IS NULL THEN RETURN NULL; ELSEIF bytes >= 1125899906842624 THEN RETURN CONCAT(ROUND(bytes / 1125899906842624, 2), \' PiB\'); ELSEIF bytes >= 1099511627776 THEN RETURN CONCAT(ROUND(bytes / 1099511627776, 2), \' TiB\'); ELSEIF bytes >= 1073741824 THEN RETURN CONCAT(ROUND(bytes / 1073741824, 2), \' GiB\'); ELSEIF bytes >= 1048576 THEN RETURN CONCAT(ROUND(bytes / 1048576, 2), \' MiB\'); ELSEIF bytes >= 1024 THEN RETURN CONCAT(ROUND(bytes / 1024, 2), \' KiB\'); ELSE RETURN CONCAT(ROUND(bytes, 0), \' bytes\'); END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a raw bytes value, and converts it to a human readable format.\n \n Parameters\n \n bytes (TEXT):\n A raw bytes value.\n \n Returns\n \n TEXT\n \n Example\n \n mysql> SELECT sys.format_bytes(2348723492723746) AS size;\n +----------+\n | size     |\n +----------+\n | 2.09 PiB |\n +----------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.format_bytes(2348723492723) AS size;\n +----------+\n | size     |\n +----------+\n | 2.14 TiB |\n +----------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.format_bytes(23487234) AS size;\n +-----------+\n | size      |\n +-----------+\n | 22.40 MiB |\n +-----------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN IF bytes IS NULL THEN RETURN NULL; ELSEIF bytes >= 1125899906842624 THEN RETURN CONCAT(ROUND(bytes / 1125899906842624, 2), \' PiB\'); ELSEIF bytes >= 1099511627776 THEN RETURN CONCAT(ROUND(bytes / 1099511627776, 2), \' TiB\'); ELSEIF bytes >= 1073741824 THEN RETURN CONCAT(ROUND(bytes / 1073741824, 2), \' GiB\'); ELSEIF bytes >= 1048576 THEN RETURN CONCAT(ROUND(bytes / 1048576, 2), \' MiB\'); ELSEIF bytes >= 1024 THEN RETURN CONCAT(ROUND(bytes / 1024, 2), \' KiB\'); ELSE RETURN CONCAT(ROUND(bytes, 0), \' bytes\'); END IF; END'),('sys','format_path','FUNCTION','format_path','SQL','NO_SQL','YES','INVOKER',' in_path VARCHAR(512) ','varchar(512) CHARSET utf8','BEGIN DECLARE v_path VARCHAR(512); DECLARE v_undo_dir VARCHAR(1024);  DECLARE path_separator CHAR(1) DEFAULT \'/\';  IF @@global.version_compile_os LIKE \'win%\' THEN SET path_separator = \'\\\\\'; END IF;  IF in_path LIKE \'/private/%\' THEN SET v_path = REPLACE(in_path, \'/private\', \'\'); ELSE SET v_path = in_path; END IF;  SET v_undo_dir = IFNULL((SELECT VARIABLE_VALUE FROM performance_schema.global_variables WHERE VARIABLE_NAME = \'innodb_undo_directory\'), \'\');  IF v_path IS NULL THEN RETURN NULL; ELSEIF v_path LIKE CONCAT(@@global.datadir, IF(SUBSTRING(@@global.datadir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.datadir, CONCAT(\'@@datadir\', IF(SUBSTRING(@@global.datadir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.tmpdir, IF(SUBSTRING(@@global.tmpdir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.tmpdir, CONCAT(\'@@tmpdir\', IF(SUBSTRING(@@global.tmpdir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.slave_load_tmpdir, IF(SUBSTRING(@@global.slave_load_tmpdir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.slave_load_tmpdir, CONCAT(\'@@slave_load_tmpdir\', IF(SUBSTRING(@@global.slave_load_tmpdir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.innodb_data_home_dir, IF(SUBSTRING(@@global.innodb_data_home_dir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.innodb_data_home_dir, CONCAT(\'@@innodb_data_home_dir\', IF(SUBSTRING(@@global.innodb_data_home_dir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.innodb_log_group_home_dir, IF(SUBSTRING(@@global.innodb_log_group_home_dir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.innodb_log_group_home_dir, CONCAT(\'@@innodb_log_group_home_dir\', IF(SUBSTRING(@@global.innodb_log_group_home_dir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(v_undo_dir, IF(SUBSTRING(v_undo_dir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, v_undo_dir, CONCAT(\'@@innodb_undo_directory\', IF(SUBSTRING(v_undo_dir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.basedir, IF(SUBSTRING(@@global.basedir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.basedir, CONCAT(\'@@basedir\', IF(SUBSTRING(@@global.basedir, -1) = path_separator, path_separator, \'\'))); END IF;  RETURN v_path; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a raw path value, and strips out the datadir or tmpdir\n replacing with @@datadir and @@tmpdir respectively. \n \n Also normalizes the paths across operating systems, so backslashes\n on Windows are converted to forward slashes\n \n Parameters\n \n path (VARCHAR(512)):\n The raw file path value to format.\n \n Returns\n \n VARCHAR(512) CHARSET UTF8\n \n Example\n \n mysql> select @@datadir;\n +-----------------------------------------------+\n | @@datadir                                     |\n +-----------------------------------------------+\n | /Users/mark/sandboxes/SmallTree/AMaster/data/ |\n +-----------------------------------------------+\n 1 row in set (0.06 sec)\n \n mysql> select format_path(\'/Users/mark/sandboxes/SmallTree/AMaster/data/mysql/proc.MYD\') AS path;\n +--------------------------+\n | path                     |\n +--------------------------+\n | @@datadir/mysql/proc.MYD |\n +--------------------------+\n 1 row in set (0.03 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_path VARCHAR(512); DECLARE v_undo_dir VARCHAR(1024);  DECLARE path_separator CHAR(1) DEFAULT \'/\';  IF @@global.version_compile_os LIKE \'win%\' THEN SET path_separator = \'\\\'; END IF;  IF in_path LIKE \'/private/%\' THEN SET v_path = REPLACE(in_path, \'/private\', \'\'); ELSE SET v_path = in_path; END IF;  SET v_undo_dir = IFNULL((SELECT VARIABLE_VALUE FROM performance_schema.global_variables WHERE VARIABLE_NAME = \'innodb_undo_directory\'), \'\');  IF v_path IS NULL THEN RETURN NULL; ELSEIF v_path LIKE CONCAT(@@global.datadir, IF(SUBSTRING(@@global.datadir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.datadir, CONCAT(\'@@datadir\', IF(SUBSTRING(@@global.datadir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.tmpdir, IF(SUBSTRING(@@global.tmpdir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.tmpdir, CONCAT(\'@@tmpdir\', IF(SUBSTRING(@@global.tmpdir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.slave_load_tmpdir, IF(SUBSTRING(@@global.slave_load_tmpdir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.slave_load_tmpdir, CONCAT(\'@@slave_load_tmpdir\', IF(SUBSTRING(@@global.slave_load_tmpdir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.innodb_data_home_dir, IF(SUBSTRING(@@global.innodb_data_home_dir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.innodb_data_home_dir, CONCAT(\'@@innodb_data_home_dir\', IF(SUBSTRING(@@global.innodb_data_home_dir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.innodb_log_group_home_dir, IF(SUBSTRING(@@global.innodb_log_group_home_dir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.innodb_log_group_home_dir, CONCAT(\'@@innodb_log_group_home_dir\', IF(SUBSTRING(@@global.innodb_log_group_home_dir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(v_undo_dir, IF(SUBSTRING(v_undo_dir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, v_undo_dir, CONCAT(\'@@innodb_undo_directory\', IF(SUBSTRING(v_undo_dir, -1) = path_separator, path_separator, \'\'))); ELSEIF v_path LIKE CONCAT(@@global.basedir, IF(SUBSTRING(@@global.basedir, -1) = path_separator, \'%\', CONCAT(path_separator, \'%\'))) ESCAPE \'|\' THEN SET v_path = REPLACE(v_path, @@global.basedir, CONCAT(\'@@basedir\', IF(SUBSTRING(@@global.basedir, -1) = path_separator, path_separator, \'\'))); END IF;  RETURN v_path; END'),('sys','format_statement','FUNCTION','format_statement','SQL','NO_SQL','YES','INVOKER',' statement LONGTEXT ','longtext CHARSET utf8','BEGIN IF @sys.statement_truncate_len IS NULL THEN SET @sys.statement_truncate_len = sys_get_config(\'statement_truncate_len\', 64); END IF;  IF CHAR_LENGTH(statement) > @sys.statement_truncate_len THEN RETURN REPLACE(CONCAT(LEFT(statement, (@sys.statement_truncate_len/2)-2), \' ... \', RIGHT(statement, (@sys.statement_truncate_len/2)-2)), \'\\n\', \' \'); ELSE  RETURN REPLACE(statement, \'\\n\', \' \'); END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Formats a normalized statement, truncating it if it is > 64 characters long by default.\n \n To configure the length to truncate the statement to by default, update the `statement_truncate_len`\n variable with `sys_config` table to a different value. Alternatively, to change it just for just \n your particular session, use `SET @sys.statement_truncate_len := <some new value>`.\n \n Useful for printing statement related data from Performance Schema from \n the command line.\n \n Parameters\n \n statement (LONGTEXT): \n The statement to format.\n \n Returns\n \n LONGTEXT\n \n Example\n \n mysql> SELECT sys.format_statement(digest_text)\n ->   FROM performance_schema.events_statements_summary_by_digest\n ->  ORDER by sum_timer_wait DESC limit 5;\n +-------------------------------------------------------------------+\n | sys.format_statement(digest_text)                                 |\n +-------------------------------------------------------------------+\n | CREATE SQL SECURITY INVOKER VI ... KE ? AND `variable_value` > ?  |\n | CREATE SQL SECURITY INVOKER VI ... ait` IS NOT NULL , `esc` . ... |\n | CREATE SQL SECURITY INVOKER VI ... ait` IS NOT NULL , `sys` . ... |\n | CREATE SQL SECURITY INVOKER VI ...  , `compressed_size` ) ) DESC  |\n | CREATE SQL SECURITY INVOKER VI ... LIKE ? ORDER BY `timer_start`  |\n +-------------------------------------------------------------------+\n 5 rows in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN IF @sys.statement_truncate_len IS NULL THEN SET @sys.statement_truncate_len = sys_get_config(\'statement_truncate_len\', 64); END IF;  IF CHAR_LENGTH(statement) > @sys.statement_truncate_len THEN RETURN REPLACE(CONCAT(LEFT(statement, (@sys.statement_truncate_len/2)-2), \' ... \', RIGHT(statement, (@sys.statement_truncate_len/2)-2)), \'\n\', \' \'); ELSE  RETURN REPLACE(statement, \'\n\', \' \'); END IF; END'),('sys','format_time','FUNCTION','format_time','SQL','NO_SQL','YES','INVOKER',' picoseconds TEXT ','text CHARSET utf8','BEGIN IF picoseconds IS NULL THEN RETURN NULL; ELSEIF picoseconds >= 604800000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 604800000000000000, 2), \' w\'); ELSEIF picoseconds >= 86400000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 86400000000000000, 2), \' d\'); ELSEIF picoseconds >= 3600000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 3600000000000000, 2), \' h\'); ELSEIF picoseconds >= 60000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 60000000000000, 2), \' m\'); ELSEIF picoseconds >= 1000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000000000, 2), \' s\'); ELSEIF picoseconds >= 1000000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000000, 2), \' ms\'); ELSEIF picoseconds >= 1000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000, 2), \' us\'); ELSEIF picoseconds >= 1000 THEN RETURN CONCAT(ROUND(picoseconds / 1000, 2), \' ns\'); ELSE RETURN CONCAT(picoseconds, \' ps\'); END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a raw picoseconds value, and converts it to a human readable form.\n \n Picoseconds are the precision that all latency values are printed in \n within Performance Schema, however are not user friendly when wanting\n to scan output from the command line.\n \n Parameters\n \n picoseconds (TEXT): \n The raw picoseconds value to convert.\n \n Returns\n \n TEXT\n \n Example\n \n mysql> select format_time(342342342342345);\n +------------------------------+\n | format_time(342342342342345) |\n +------------------------------+\n | 00:05:42                     |\n +------------------------------+\n 1 row in set (0.00 sec)\n \n mysql> select format_time(342342342);\n +------------------------+\n | format_time(342342342) |\n +------------------------+\n | 342.34 us              |\n +------------------------+\n 1 row in set (0.00 sec)\n \n mysql> select format_time(34234);\n +--------------------+\n | format_time(34234) |\n +--------------------+\n | 34.23 ns           |\n +--------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN IF picoseconds IS NULL THEN RETURN NULL; ELSEIF picoseconds >= 604800000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 604800000000000000, 2), \' w\'); ELSEIF picoseconds >= 86400000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 86400000000000000, 2), \' d\'); ELSEIF picoseconds >= 3600000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 3600000000000000, 2), \' h\'); ELSEIF picoseconds >= 60000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 60000000000000, 2), \' m\'); ELSEIF picoseconds >= 1000000000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000000000, 2), \' s\'); ELSEIF picoseconds >= 1000000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000000, 2), \' ms\'); ELSEIF picoseconds >= 1000000 THEN RETURN CONCAT(ROUND(picoseconds / 1000000, 2), \' us\'); ELSEIF picoseconds >= 1000 THEN RETURN CONCAT(ROUND(picoseconds / 1000, 2), \' ns\'); ELSE RETURN CONCAT(picoseconds, \' ps\'); END IF; END'),('sys','list_add','FUNCTION','list_add','SQL','CONTAINS_SQL','YES','INVOKER',' in_list TEXT, in_add_value TEXT ','text CHARSET utf8','BEGIN  IF (in_add_value IS NULL) THEN SIGNAL SQLSTATE \'02200\' SET MESSAGE_TEXT = \'Function sys.list_add: in_add_value input variable should not be NULL\', MYSQL_ERRNO = 1138; END IF;  IF (in_list IS NULL OR LENGTH(in_list) = 0) THEN RETURN in_add_value; END IF;  RETURN (SELECT CONCAT(TRIM(BOTH \',\' FROM TRIM(in_list)), \',\', in_add_value));  END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a list, and a value to add to the list, and returns the resulting list.\n \n Useful for altering certain session variables, like sql_mode or optimizer_switch for instance.\n \n Parameters\n \n in_list (TEXT):\n The comma separated list to add a value to\n \n in_add_value (TEXT):\n The value to add to the input list\n \n Returns\n \n TEXT\n \n Example\n \n mysql> select @@sql_mode;\n +-----------------------------------------------------------------------------------+\n | @@sql_mode                                                                        |\n +-----------------------------------------------------------------------------------+\n | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +-----------------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n mysql> set sql_mode = sys.list_add(@@sql_mode, \'ANSI_QUOTES\');\n Query OK, 0 rows affected (0.06 sec)\n \n mysql> select @@sql_mode;\n +-----------------------------------------------------------------------------------------------+\n | @@sql_mode                                                                                    |\n +-----------------------------------------------------------------------------------------------+\n | ANSI_QUOTES,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +-----------------------------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN  IF (in_add_value IS NULL) THEN SIGNAL SQLSTATE \'02200\' SET MESSAGE_TEXT = \'Function sys.list_add: in_add_value input variable should not be NULL\', MYSQL_ERRNO = 1138; END IF;  IF (in_list IS NULL OR LENGTH(in_list) = 0) THEN RETURN in_add_value; END IF;  RETURN (SELECT CONCAT(TRIM(BOTH \',\' FROM TRIM(in_list)), \',\', in_add_value));  END'),('sys','list_drop','FUNCTION','list_drop','SQL','CONTAINS_SQL','YES','INVOKER',' in_list TEXT, in_drop_value TEXT ','text CHARSET utf8','BEGIN  IF (in_drop_value IS NULL) THEN SIGNAL SQLSTATE \'02200\' SET MESSAGE_TEXT = \'Function sys.list_drop: in_drop_value input variable should not be NULL\', MYSQL_ERRNO = 1138; END IF;  IF (in_list IS NULL OR LENGTH(in_list) = 0) THEN RETURN in_list; END IF;  RETURN (SELECT TRIM(BOTH \',\' FROM REPLACE(REPLACE(CONCAT(\',\', in_list), CONCAT(\',\', in_drop_value), \'\'), CONCAT(\', \', in_drop_value), \'\')));  END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a list, and a value to attempt to remove from the list, and returns the resulting list.\n \n Useful for altering certain session variables, like sql_mode or optimizer_switch for instance.\n \n Parameters\n \n in_list (TEXT):\n The comma separated list to drop a value from\n \n in_drop_value (TEXT):\n The value to drop from the input list\n \n Returns\n \n TEXT\n \n Example\n \n mysql> select @@sql_mode;\n +-----------------------------------------------------------------------------------------------+\n | @@sql_mode                                                                                    |\n +-----------------------------------------------------------------------------------------------+\n | ANSI_QUOTES,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +-----------------------------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n mysql> set sql_mode = sys.list_drop(@@sql_mode, \'ONLY_FULL_GROUP_BY\');\n Query OK, 0 rows affected (0.03 sec)\n \n mysql> select @@sql_mode;\n +----------------------------------------------------------------------------+\n | @@sql_mode                                                                 |\n +----------------------------------------------------------------------------+\n | ANSI_QUOTES,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |\n +----------------------------------------------------------------------------+\n 1 row in set (0.00 sec)\n \n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN  IF (in_drop_value IS NULL) THEN SIGNAL SQLSTATE \'02200\' SET MESSAGE_TEXT = \'Function sys.list_drop: in_drop_value input variable should not be NULL\', MYSQL_ERRNO = 1138; END IF;  IF (in_list IS NULL OR LENGTH(in_list) = 0) THEN RETURN in_list; END IF;  RETURN (SELECT TRIM(BOTH \',\' FROM REPLACE(REPLACE(CONCAT(\',\', in_list), CONCAT(\',\', in_drop_value), \'\'), CONCAT(\', \', in_drop_value), \'\')));  END'),('sys','ps_is_account_enabled','FUNCTION','ps_is_account_enabled','SQL','READS_SQL_DATA','YES','INVOKER',' in_host VARCHAR(60),  in_user VARCHAR(32) ','enum(\'YES\',\'NO\') CHARSET utf8','BEGIN RETURN IF(EXISTS(SELECT 1 FROM performance_schema.setup_actors WHERE (`HOST` = \'%\' OR in_host LIKE `HOST`) AND (`USER` = \'%\' OR `USER` = in_user) AND (`ENABLED` = \'YES\') ), \'YES\', \'NO\' ); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Determines whether instrumentation of an account is enabled \n within Performance Schema.\n \n Parameters\n \n in_host VARCHAR(60): \n The hostname of the account to check.\n in_user VARCHAR(32):\n The username of the account to check.\n \n Returns\n \n ENUM(\'YES\', \'NO\', \'PARTIAL\')\n \n Example\n \n mysql> SELECT sys.ps_is_account_enabled(\'localhost\', \'root\');\n +------------------------------------------------+\n | sys.ps_is_account_enabled(\'localhost\', \'root\') |\n +------------------------------------------------+\n | YES                                            |\n +------------------------------------------------+\n 1 row in set (0.01 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN IF(EXISTS(SELECT 1 FROM performance_schema.setup_actors WHERE (`HOST` = \'%\' OR in_host LIKE `HOST`) AND (`USER` = \'%\' OR `USER` = in_user) AND (`ENABLED` = \'YES\') ), \'YES\', \'NO\' ); END'),('sys','ps_is_consumer_enabled','FUNCTION','ps_is_consumer_enabled','SQL','READS_SQL_DATA','YES','INVOKER',' in_consumer varchar(64) ','enum(\'YES\',\'NO\') CHARSET utf8','BEGIN RETURN ( SELECT (CASE WHEN c.NAME = \'global_instrumentation\' THEN c.ENABLED WHEN c.NAME = \'thread_instrumentation\' THEN IF(cg.ENABLED = \'YES\' AND c.ENABLED = \'YES\', \'YES\', \'NO\') WHEN c.NAME LIKE \'%\\_digest\'           THEN IF(cg.ENABLED = \'YES\' AND c.ENABLED = \'YES\', \'YES\', \'NO\') WHEN c.NAME LIKE \'%\\_current\'          THEN IF(cg.ENABLED = \'YES\' AND ct.ENABLED = \'YES\' AND c.ENABLED = \'YES\', \'YES\', \'NO\') ELSE IF(cg.ENABLED = \'YES\' AND ct.ENABLED = \'YES\' AND c.ENABLED = \'YES\' AND ( SELECT cc.ENABLED FROM performance_schema.setup_consumers cc WHERE NAME = CONCAT(SUBSTRING_INDEX(c.NAME, \'_\', 2), \'_current\') ) = \'YES\', \'YES\', \'NO\') END) AS IsEnabled FROM performance_schema.setup_consumers c INNER JOIN performance_schema.setup_consumers cg INNER JOIN performance_schema.setup_consumers ct WHERE cg.NAME       = \'global_instrumentation\' AND ct.NAME   = \'thread_instrumentation\' AND c.NAME    = in_consumer ); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Determines whether a consumer is enabled (taking the consumer hierarchy into consideration)\n within the Performance Schema.\n \n Parameters\n \n in_consumer VARCHAR(64): \n The name of the consumer to check.\n \n Returns\n \n ENUM(\'YES\', \'NO\')\n \n Example\n \n mysql> SELECT sys.ps_is_consumer_enabled(\'events_stages_history\');\n +-----------------------------------------------------+\n | sys.ps_is_consumer_enabled(\'events_stages_history\') |\n +-----------------------------------------------------+\n | NO                                                  |\n +-----------------------------------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN ( SELECT (CASE WHEN c.NAME = \'global_instrumentation\' THEN c.ENABLED WHEN c.NAME = \'thread_instrumentation\' THEN IF(cg.ENABLED = \'YES\' AND c.ENABLED = \'YES\', \'YES\', \'NO\') WHEN c.NAME LIKE \'%\\_digest\'           THEN IF(cg.ENABLED = \'YES\' AND c.ENABLED = \'YES\', \'YES\', \'NO\') WHEN c.NAME LIKE \'%\\_current\'          THEN IF(cg.ENABLED = \'YES\' AND ct.ENABLED = \'YES\' AND c.ENABLED = \'YES\', \'YES\', \'NO\') ELSE IF(cg.ENABLED = \'YES\' AND ct.ENABLED = \'YES\' AND c.ENABLED = \'YES\' AND ( SELECT cc.ENABLED FROM performance_schema.setup_consumers cc WHERE NAME = CONCAT(SUBSTRING_INDEX(c.NAME, \'_\', 2), \'_current\') ) = \'YES\', \'YES\', \'NO\') END) AS IsEnabled FROM performance_schema.setup_consumers c INNER JOIN performance_schema.setup_consumers cg INNER JOIN performance_schema.setup_consumers ct WHERE cg.NAME       = \'global_instrumentation\' AND ct.NAME   = \'thread_instrumentation\' AND c.NAME    = in_consumer ); END'),('sys','ps_is_instrument_default_enabled','FUNCTION','ps_is_instrument_default_enabled','SQL','READS_SQL_DATA','YES','INVOKER',' in_instrument VARCHAR(128) ','enum(\'YES\',\'NO\') CHARSET utf8','BEGIN DECLARE v_enabled ENUM(\'YES\', \'NO\');  SET v_enabled = IF(in_instrument LIKE \'wait/io/file/%\' OR in_instrument LIKE \'wait/io/table/%\' OR in_instrument LIKE \'statement/%\' OR in_instrument LIKE \'memory/performance_schema/%\' OR in_instrument IN (\'wait/lock/table/sql/handler\', \'idle\')  OR in_instrument LIKE \'stage/innodb/%\' OR in_instrument = \'stage/sql/copy to tmp table\'  , \'YES\', \'NO\' );  RETURN v_enabled; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Returns whether an instrument is enabled by default in this version of MySQL.\n \n Parameters\n \n in_instrument VARCHAR(128): \n The instrument to check.\n \n Returns\n \n ENUM(\'YES\', \'NO\')\n \n Example\n \n mysql> SELECT sys.ps_is_instrument_default_enabled(\'statement/sql/select\');\n +--------------------------------------------------------------+\n | sys.ps_is_instrument_default_enabled(\'statement/sql/select\') |\n +--------------------------------------------------------------+\n | YES                                                          |\n +--------------------------------------------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_enabled ENUM(\'YES\', \'NO\');  SET v_enabled = IF(in_instrument LIKE \'wait/io/file/%\' OR in_instrument LIKE \'wait/io/table/%\' OR in_instrument LIKE \'statement/%\' OR in_instrument LIKE \'memory/performance_schema/%\' OR in_instrument IN (\'wait/lock/table/sql/handler\', \'idle\')  OR in_instrument LIKE \'stage/innodb/%\' OR in_instrument = \'stage/sql/copy to tmp table\'  , \'YES\', \'NO\' );  RETURN v_enabled; END'),('sys','ps_is_instrument_default_timed','FUNCTION','ps_is_instrument_default_timed','SQL','READS_SQL_DATA','YES','INVOKER',' in_instrument VARCHAR(128) ','enum(\'YES\',\'NO\') CHARSET utf8','BEGIN DECLARE v_timed ENUM(\'YES\', \'NO\');  SET v_timed = IF(in_instrument LIKE \'wait/io/file/%\' OR in_instrument LIKE \'wait/io/table/%\' OR in_instrument LIKE \'statement/%\' OR in_instrument IN (\'wait/lock/table/sql/handler\', \'idle\')  OR in_instrument LIKE \'stage/innodb/%\' OR in_instrument = \'stage/sql/copy to tmp table\'  , \'YES\', \'NO\' );  RETURN v_timed; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Returns whether an instrument is timed by default in this version of MySQL.\n \n Parameters\n \n in_instrument VARCHAR(128): \n The instrument to check.\n \n Returns\n \n ENUM(\'YES\', \'NO\')\n \n Example\n \n mysql> SELECT sys.ps_is_instrument_default_timed(\'statement/sql/select\');\n +------------------------------------------------------------+\n | sys.ps_is_instrument_default_timed(\'statement/sql/select\') |\n +------------------------------------------------------------+\n | YES                                                        |\n +------------------------------------------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_timed ENUM(\'YES\', \'NO\');  SET v_timed = IF(in_instrument LIKE \'wait/io/file/%\' OR in_instrument LIKE \'wait/io/table/%\' OR in_instrument LIKE \'statement/%\' OR in_instrument IN (\'wait/lock/table/sql/handler\', \'idle\')  OR in_instrument LIKE \'stage/innodb/%\' OR in_instrument = \'stage/sql/copy to tmp table\'  , \'YES\', \'NO\' );  RETURN v_timed; END'),('sys','ps_is_thread_instrumented','FUNCTION','ps_is_thread_instrumented','SQL','READS_SQL_DATA','NO','INVOKER',' in_connection_id BIGINT UNSIGNED ','enum(\'YES\',\'NO\',\'UNKNOWN\') CHARSET utf8','BEGIN DECLARE v_enabled ENUM(\'YES\', \'NO\', \'UNKNOWN\');  IF (in_connection_id IS NULL) THEN RETURN NULL; END IF;  SELECT INSTRUMENTED INTO v_enabled FROM performance_schema.threads  WHERE PROCESSLIST_ID = in_connection_id;  IF (v_enabled IS NULL) THEN RETURN \'UNKNOWN\'; ELSE RETURN v_enabled; END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Checks whether the provided connection id is instrumented within Performance Schema.\n \n Parameters\n \n in_connection_id (BIGINT UNSIGNED):\n The id of the connection to check.\n \n Returns\n \n ENUM(\'YES\', \'NO\', \'UNKNOWN\')\n \n Example\n \n mysql> SELECT sys.ps_is_thread_instrumented(CONNECTION_ID());\n +------------------------------------------------+\n | sys.ps_is_thread_instrumented(CONNECTION_ID()) |\n +------------------------------------------------+\n | YES                                            |\n +------------------------------------------------+\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_enabled ENUM(\'YES\', \'NO\', \'UNKNOWN\');  IF (in_connection_id IS NULL) THEN RETURN NULL; END IF;  SELECT INSTRUMENTED INTO v_enabled FROM performance_schema.threads  WHERE PROCESSLIST_ID = in_connection_id;  IF (v_enabled IS NULL) THEN RETURN \'UNKNOWN\'; ELSE RETURN v_enabled; END IF; END'),('sys','ps_thread_id','FUNCTION','ps_thread_id','SQL','READS_SQL_DATA','NO','INVOKER',' in_connection_id BIGINT UNSIGNED ','bigint(20) unsigned','BEGIN RETURN (SELECT THREAD_ID FROM `performance_schema`.`threads` WHERE PROCESSLIST_ID = IFNULL(in_connection_id, CONNECTION_ID()) ); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Return the Performance Schema THREAD_ID for the specified connection ID.\n \n Parameters\n \n in_connection_id (BIGINT UNSIGNED):\n The id of the connection to return the thread id for. If NULL, the current\n connection thread id is returned.\n \n Example\n \n mysql> SELECT sys.ps_thread_id(79);\n +----------------------+\n | sys.ps_thread_id(79) |\n +----------------------+\n |                   98 |\n +----------------------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.ps_thread_id(CONNECTION_ID());\n +-----------------------------------+\n | sys.ps_thread_id(CONNECTION_ID()) |\n +-----------------------------------+\n |                                98 |\n +-----------------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN (SELECT THREAD_ID FROM `performance_schema`.`threads` WHERE PROCESSLIST_ID = IFNULL(in_connection_id, CONNECTION_ID()) ); END'),('sys','ps_thread_account','FUNCTION','ps_thread_account','SQL','READS_SQL_DATA','NO','INVOKER',' in_thread_id BIGINT UNSIGNED ','text CHARSET utf8','BEGIN RETURN (SELECT IF( type = \'FOREGROUND\', CONCAT(processlist_user, \'@\', processlist_host), type ) AS account FROM `performance_schema`.`threads` WHERE thread_id = in_thread_id); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Return the user@host account for the given Performance Schema thread id.\n \n Parameters\n \n in_thread_id (BIGINT UNSIGNED):\n The id of the thread to return the account for.\n \n Example\n \n mysql> select thread_id, processlist_user, processlist_host from performance_schema.threads where type = \'foreground\';\n +-----------+------------------+------------------+\n | thread_id | processlist_user | processlist_host |\n +-----------+------------------+------------------+\n |        23 | NULL             | NULL             |\n |        30 | root             | localhost        |\n |        31 | msandbox         | localhost        |\n |        32 | msandbox         | localhost        |\n +-----------+------------------+------------------+\n 4 rows in set (0.00 sec)\n \n mysql> select sys.ps_thread_account(31);\n +---------------------------+\n | sys.ps_thread_account(31) |\n +---------------------------+\n | msandbox@localhost        |\n +---------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN (SELECT IF( type = \'FOREGROUND\', CONCAT(processlist_user, \'@\', processlist_host), type ) AS account FROM `performance_schema`.`threads` WHERE thread_id = in_thread_id); END'),('sys','ps_thread_stack','FUNCTION','ps_thread_stack','SQL','READS_SQL_DATA','NO','INVOKER',' thd_id BIGINT UNSIGNED, debug BOOLEAN ','longtext CHARSET latin1','BEGIN  DECLARE json_objects LONGTEXT;   UPDATE performance_schema.threads SET instrumented = \'NO\' WHERE processlist_id = CONNECTION_ID();   SET SESSION group_concat_max_len=@@global.max_allowed_packet;  SELECT GROUP_CONCAT(CONCAT( \'{\' , CONCAT_WS( \', \' , CONCAT(\'\"nesting_event_id\": \"\', IF(nesting_event_id IS NULL, \'0\', nesting_event_id), \'\"\') , CONCAT(\'\"event_id\": \"\', event_id, \'\"\') , CONCAT( \'\"timer_wait\": \', ROUND(timer_wait/1000000, 2))   , CONCAT( \'\"event_info\": \"\' , CASE WHEN event_name NOT LIKE \'wait/io%\' THEN REPLACE(SUBSTRING_INDEX(event_name, \'/\', -2), \'\\\\\', \'\\\\\\\\\') WHEN event_name NOT LIKE \'wait/io/file%\' OR event_name NOT LIKE \'wait/io/socket%\' THEN REPLACE(SUBSTRING_INDEX(event_name, \'/\', -4), \'\\\\\', \'\\\\\\\\\') ELSE event_name END , \'\"\' ) , CONCAT( \'\"wait_info\": \"\', IFNULL(wait_info, \'\'), \'\"\') , CONCAT( \'\"source\": \"\', IF(true AND event_name LIKE \'wait%\', IFNULL(wait_info, \'\'), \'\'), \'\"\') , CASE  WHEN event_name LIKE \'wait/io/file%\'      THEN \'\"event_type\": \"io/file\"\' WHEN event_name LIKE \'wait/io/table%\'     THEN \'\"event_type\": \"io/table\"\' WHEN event_name LIKE \'wait/io/socket%\'    THEN \'\"event_type\": \"io/socket\"\' WHEN event_name LIKE \'wait/synch/mutex%\'  THEN \'\"event_type\": \"synch/mutex\"\' WHEN event_name LIKE \'wait/synch/cond%\'   THEN \'\"event_type\": \"synch/cond\"\' WHEN event_name LIKE \'wait/synch/rwlock%\' THEN \'\"event_type\": \"synch/rwlock\"\' WHEN event_name LIKE \'wait/lock%\'         THEN \'\"event_type\": \"lock\"\' WHEN event_name LIKE \'statement/%\'        THEN \'\"event_type\": \"stmt\"\' WHEN event_name LIKE \'stage/%\'            THEN \'\"event_type\": \"stage\"\' WHEN event_name LIKE \'%idle%\'             THEN \'\"event_type\": \"idle\"\' ELSE \'\'  END                    ) , \'}\' ) ORDER BY event_id ASC SEPARATOR \',\') event INTO json_objects FROM (  (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id,  CONCAT(sql_text, \'\\\\n\', \'errors: \', errors, \'\\\\n\', \'warnings: \', warnings, \'\\\\n\', \'lock time: \', ROUND(lock_time/1000000, 2),\'us\\\\n\', \'rows affected: \', rows_affected, \'\\\\n\', \'rows sent: \', rows_sent, \'\\\\n\', \'rows examined: \', rows_examined, \'\\\\n\', \'tmp tables: \', created_tmp_tables, \'\\\\n\', \'tmp disk tables: \', created_tmp_disk_tables, \'\\\\n\', \'select scan: \', select_scan, \'\\\\n\', \'select full join: \', select_full_join, \'\\\\n\', \'select full range join: \', select_full_range_join, \'\\\\n\', \'select range: \', select_range, \'\\\\n\', \'select range check: \', select_range_check, \'\\\\n\',  \'sort merge passes: \', sort_merge_passes, \'\\\\n\', \'sort rows: \', sort_rows, \'\\\\n\', \'sort range: \', sort_range, \'\\\\n\', \'sort scan: \', sort_scan, \'\\\\n\', \'no index used: \', IF(no_index_used, \'TRUE\', \'FALSE\'), \'\\\\n\', \'no good index used: \', IF(no_good_index_used, \'TRUE\', \'FALSE\'), \'\\\\n\' ) AS wait_info FROM performance_schema.events_statements_history_long WHERE thread_id = thd_id) UNION  (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, null AS wait_info FROM performance_schema.events_stages_history_long WHERE thread_id = thd_id)  UNION  (SELECT thread_id, event_id,  CONCAT(event_name ,  IF(event_name NOT LIKE \'wait/synch/mutex%\', IFNULL(CONCAT(\' - \', operation), \'\'), \'\'),  IF(number_of_bytes IS NOT NULL, CONCAT(\' \', number_of_bytes, \' bytes\'), \'\'), IF(event_name LIKE \'wait/io/file%\', \'\\\\n\', \'\'), IF(object_schema IS NOT NULL, CONCAT(\'\\\\nObject: \', object_schema, \'.\'), \'\'),  IF(object_name IS NOT NULL,  IF (event_name LIKE \'wait/io/socket%\', CONCAT(IF (object_name LIKE \':0%\', @@socket, object_name)), object_name), \'\'),  IF(index_name IS NOT NULL, CONCAT(\' Index: \', index_name), \'\'), \'\\\\n\' ) AS event_name, timer_wait, timer_start, nesting_event_id, source AS wait_info FROM performance_schema.events_waits_history_long WHERE thread_id = thd_id)) events  ORDER BY event_id;  RETURN CONCAT(\'{\',  CONCAT_WS(\',\',  \'\"rankdir\": \"LR\"\', \'\"nodesep\": \"0.10\"\', CONCAT(\'\"stack_created\": \"\', NOW(), \'\"\'), CONCAT(\'\"mysql_version\": \"\', VERSION(), \'\"\'), CONCAT(\'\"mysql_user\": \"\', CURRENT_USER(), \'\"\'), CONCAT(\'\"events\": [\', IFNULL(json_objects,\'\'), \']\') ), \'}\');  END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Outputs a JSON formatted stack of all statements, stages and events\n within Performance Schema for the specified thread.\n \n Parameters\n \n thd_id (BIGINT UNSIGNED):\n The id of the thread to trace. This should match the thread_id\n column from the performance_schema.threads table.\n in_verbose (BOOLEAN):\n Include file:lineno information in the events.\n \n Example\n \n (line separation added for output)\n \n mysql> SELECT sys.ps_thread_stack(37, FALSE) AS thread_stack\\G\n *************************** 1. row ***************************\n thread_stack: {\"rankdir\": \"LR\",\"nodesep\": \"0.10\",\"stack_created\": \"2014-02-19 13:39:03\",\n \"mysql_version\": \"5.7.3-m13\",\"mysql_user\": \"root@localhost\",\"events\": \n [{\"nesting_event_id\": \"0\", \"event_id\": \"10\", \"timer_wait\": 256.35, \"event_info\": \n \"sql/select\", \"wait_info\": \"select @@version_comment limit 1\\nerrors: 0\\nwarnings: 0\\nlock time:\n ...\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN  DECLARE json_objects LONGTEXT;   UPDATE performance_schema.threads SET instrumented = \'NO\' WHERE processlist_id = CONNECTION_ID();   SET SESSION group_concat_max_len=@@global.max_allowed_packet;  SELECT GROUP_CONCAT(CONCAT( \'{\' , CONCAT_WS( \', \' , CONCAT(\'\"nesting_event_id\": \"\', IF(nesting_event_id IS NULL, \'0\', nesting_event_id), \'\"\') , CONCAT(\'\"event_id\": \"\', event_id, \'\"\') , CONCAT( \'\"timer_wait\": \', ROUND(timer_wait/1000000, 2))   , CONCAT( \'\"event_info\": \"\' , CASE WHEN event_name NOT LIKE \'wait/io%\' THEN REPLACE(SUBSTRING_INDEX(event_name, \'/\', -2), \'\\\', \'\\\\\') WHEN event_name NOT LIKE \'wait/io/file%\' OR event_name NOT LIKE \'wait/io/socket%\' THEN REPLACE(SUBSTRING_INDEX(event_name, \'/\', -4), \'\\\', \'\\\\\') ELSE event_name END , \'\"\' ) , CONCAT( \'\"wait_info\": \"\', IFNULL(wait_info, \'\'), \'\"\') , CONCAT( \'\"source\": \"\', IF(true AND event_name LIKE \'wait%\', IFNULL(wait_info, \'\'), \'\'), \'\"\') , CASE  WHEN event_name LIKE \'wait/io/file%\'      THEN \'\"event_type\": \"io/file\"\' WHEN event_name LIKE \'wait/io/table%\'     THEN \'\"event_type\": \"io/table\"\' WHEN event_name LIKE \'wait/io/socket%\'    THEN \'\"event_type\": \"io/socket\"\' WHEN event_name LIKE \'wait/synch/mutex%\'  THEN \'\"event_type\": \"synch/mutex\"\' WHEN event_name LIKE \'wait/synch/cond%\'   THEN \'\"event_type\": \"synch/cond\"\' WHEN event_name LIKE \'wait/synch/rwlock%\' THEN \'\"event_type\": \"synch/rwlock\"\' WHEN event_name LIKE \'wait/lock%\'         THEN \'\"event_type\": \"lock\"\' WHEN event_name LIKE \'statement/%\'        THEN \'\"event_type\": \"stmt\"\' WHEN event_name LIKE \'stage/%\'            THEN \'\"event_type\": \"stage\"\' WHEN event_name LIKE \'%idle%\'             THEN \'\"event_type\": \"idle\"\' ELSE \'\'  END                    ) , \'}\' ) ORDER BY event_id ASC SEPARATOR \',\') event INTO json_objects FROM (  (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id,  CONCAT(sql_text, \'\\n\', \'errors: \', errors, \'\\n\', \'warnings: \', warnings, \'\\n\', \'lock time: \', ROUND(lock_time/1000000, 2),\'us\\n\', \'rows affected: \', rows_affected, \'\\n\', \'rows sent: \', rows_sent, \'\\n\', \'rows examined: \', rows_examined, \'\\n\', \'tmp tables: \', created_tmp_tables, \'\\n\', \'tmp disk tables: \', created_tmp_disk_tables, \'\\n\', \'select scan: \', select_scan, \'\\n\', \'select full join: \', select_full_join, \'\\n\', \'select full range join: \', select_full_range_join, \'\\n\', \'select range: \', select_range, \'\\n\', \'select range check: \', select_range_check, \'\\n\',  \'sort merge passes: \', sort_merge_passes, \'\\n\', \'sort rows: \', sort_rows, \'\\n\', \'sort range: \', sort_range, \'\\n\', \'sort scan: \', sort_scan, \'\\n\', \'no index used: \', IF(no_index_used, \'TRUE\', \'FALSE\'), \'\\n\', \'no good index used: \', IF(no_good_index_used, \'TRUE\', \'FALSE\'), \'\\n\' ) AS wait_info FROM performance_schema.events_statements_history_long WHERE thread_id = thd_id) UNION  (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, null AS wait_info FROM performance_schema.events_stages_history_long WHERE thread_id = thd_id)  UNION  (SELECT thread_id, event_id,  CONCAT(event_name ,  IF(event_name NOT LIKE \'wait/synch/mutex%\', IFNULL(CONCAT(\' - \', operation), \'\'), \'\'),  IF(number_of_bytes IS NOT NULL, CONCAT(\' \', number_of_bytes, \' bytes\'), \'\'), IF(event_name LIKE \'wait/io/file%\', \'\\n\', \'\'), IF(object_schema IS NOT NULL, CONCAT(\'\\nObject: \', object_schema, \'.\'), \'\'),  IF(object_name IS NOT NULL,  IF (event_name LIKE \'wait/io/socket%\', CONCAT(IF (object_name LIKE \':0%\', @@socket, object_name)), object_name), \'\'),  IF(index_name IS NOT NULL, CONCAT(\' Index: \', index_name), \'\'), \'\\n\' ) AS event_name, timer_wait, timer_start, nesting_event_id, source AS wait_info FROM performance_schema.events_waits_history_long WHERE thread_id = thd_id)) events  ORDER BY event_id;  RETURN CONCAT(\'{\',  CONCAT_WS(\',\',  \'\"rankdir\": \"LR\"\', \'\"nodesep\": \"0.10\"\', CONCAT(\'\"stack_created\": \"\', NOW(), \'\"\'), CONCAT(\'\"mysql_version\": \"\', VERSION(), \'\"\'), CONCAT(\'\"mysql_user\": \"\', CURRENT_USER(), \'\"\'), CONCAT(\'\"events\": [\', IFNULL(json_objects,\'\'), \']\') ), \'}\');  END'),('sys','ps_thread_trx_info','FUNCTION','ps_thread_trx_info','SQL','READS_SQL_DATA','NO','INVOKER',' in_thread_id BIGINT UNSIGNED ','longtext CHARSET utf8','BEGIN DECLARE v_output LONGTEXT DEFAULT \'{}\'; DECLARE v_msg_text TEXT DEFAULT \'\'; DECLARE v_signal_msg TEXT DEFAULT \'\'; DECLARE v_mysql_errno INT; DECLARE v_max_output_len BIGINT; DECLARE EXIT HANDLER FOR SQLWARNING, SQLEXCEPTION BEGIN GET DIAGNOSTICS CONDITION 1 v_msg_text = MESSAGE_TEXT, v_mysql_errno = MYSQL_ERRNO;  IF v_mysql_errno = 1260 THEN SET v_signal_msg = CONCAT(\'{ \"error\": \"Trx info truncated: \', v_msg_text, \'\" }\'); ELSE SET v_signal_msg = CONCAT(\'{ \"error\": \"\', v_msg_text, \'\" }\'); END IF;  RETURN v_signal_msg; END;  IF (@sys.ps_thread_trx_info.max_length IS NULL) THEN SET @sys.ps_thread_trx_info.max_length = sys.sys_get_config(\'ps_thread_trx_info.max_length\', 65535); END IF;  IF (@sys.ps_thread_trx_info.max_length != @@session.group_concat_max_len) THEN SET @old_group_concat_max_len = @@session.group_concat_max_len; SET v_max_output_len = (@sys.ps_thread_trx_info.max_length - 5); SET SESSION group_concat_max_len = v_max_output_len; END IF;  SET v_output = ( SELECT CONCAT(\'[\', IFNULL(GROUP_CONCAT(trx_info ORDER BY event_id), \'\'), \'\\n]\') AS trx_info FROM (SELECT trxi.thread_id,  trxi.event_id, GROUP_CONCAT( IFNULL( CONCAT(\'\\n  {\\n\', \'    \"time\": \"\', IFNULL(sys.format_time(trxi.timer_wait), \'\'), \'\",\\n\', \'    \"state\": \"\', IFNULL(trxi.state, \'\'), \'\",\\n\', \'    \"mode\": \"\', IFNULL(trxi.access_mode, \'\'), \'\",\\n\', \'    \"autocommitted\": \"\', IFNULL(trxi.autocommit, \'\'), \'\",\\n\', \'    \"gtid\": \"\', IFNULL(trxi.gtid, \'\'), \'\",\\n\', \'    \"isolation\": \"\', IFNULL(trxi.isolation_level, \'\'), \'\",\\n\', \'    \"statements_executed\": [\', IFNULL(s.stmts, \'\'), IF(s.stmts IS NULL, \' ]\\n\', \'\\n    ]\\n\'), \'  }\' ),  \'\')  ORDER BY event_id) AS trx_info  FROM ( (SELECT thread_id, event_id, timer_wait, state,access_mode, autocommit, gtid, isolation_level FROM performance_schema.events_transactions_current WHERE thread_id = in_thread_id AND end_event_id IS NULL) UNION (SELECT thread_id, event_id, timer_wait, state,access_mode, autocommit, gtid, isolation_level FROM performance_schema.events_transactions_history WHERE thread_id = in_thread_id) ) AS trxi LEFT JOIN (SELECT thread_id, nesting_event_id, GROUP_CONCAT( IFNULL( CONCAT(\'\\n      {\\n\', \'        \"sql_text\": \"\', IFNULL(sys.format_statement(REPLACE(sql_text, \'\\\\\', \'\\\\\\\\\')), \'\'), \'\",\\n\', \'        \"time\": \"\', IFNULL(sys.format_time(timer_wait), \'\'), \'\",\\n\', \'        \"schema\": \"\', IFNULL(current_schema, \'\'), \'\",\\n\', \'        \"rows_examined\": \', IFNULL(rows_examined, \'\'), \',\\n\', \'        \"rows_affected\": \', IFNULL(rows_affected, \'\'), \',\\n\', \'        \"rows_sent\": \', IFNULL(rows_sent, \'\'), \',\\n\', \'        \"tmp_tables\": \', IFNULL(created_tmp_tables, \'\'), \',\\n\', \'        \"tmp_disk_tables\": \', IFNULL(created_tmp_disk_tables, \'\'), \',\\n\', \'        \"sort_rows\": \', IFNULL(sort_rows, \'\'), \',\\n\', \'        \"sort_merge_passes\": \', IFNULL(sort_merge_passes, \'\'), \'\\n\', \'      }\'), \'\') ORDER BY event_id) AS stmts FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL AND thread_id = in_thread_id GROUP BY thread_id, nesting_event_id ) AS s  ON trxi.thread_id = s.thread_id  AND trxi.event_id = s.nesting_event_id WHERE trxi.thread_id = in_thread_id GROUP BY trxi.thread_id, trxi.event_id ) trxs GROUP BY thread_id );  IF (@old_group_concat_max_len IS NOT NULL) THEN SET SESSION group_concat_max_len = @old_group_concat_max_len; END IF;  RETURN v_output; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Returns a JSON object with info on the given threads current transaction, \n and the statements it has already executed, derived from the\n performance_schema.events_transactions_current and\n performance_schema.events_statements_history tables (so the consumers \n for these also have to be enabled within Performance Schema to get full\n data in the object).\n \n When the output exceeds the default truncation length (65535), a JSON error\n object is returned, such as:\n \n { \"error\": \"Trx info truncated: Row 6 was cut by GROUP_CONCAT()\" }\n \n Similar error objects are returned for other warnings/and exceptions raised\n when calling the function.\n \n The max length of the output of this function can be controlled with the\n ps_thread_trx_info.max_length variable set via sys_config, or the\n @sys.ps_thread_trx_info.max_length user variable, as appropriate.\n \n Parameters\n \n in_thread_id (BIGINT UNSIGNED):\n The id of the thread to return the transaction info for.\n \n Example\n \n SELECT sys.ps_thread_trx_info(48)\\G\n *************************** 1. row ***************************\n sys.ps_thread_trx_info(48): [\n {\n \"time\": \"790.70 us\",\n \"state\": \"COMMITTED\",\n \"mode\": \"READ WRITE\",\n \"autocommitted\": \"NO\",\n \"gtid\": \"AUTOMATIC\",\n \"isolation\": \"REPEATABLE READ\",\n \"statements_executed\": [\n {\n \"sql_text\": \"INSERT INTO info VALUES (1, \'foo\')\",\n \"time\": \"471.02 us\",\n \"schema\": \"trx\",\n \"rows_examined\": 0,\n \"rows_affected\": 1,\n \"rows_sent\": 0,\n \"tmp_tables\": 0,\n \"tmp_disk_tables\": 0,\n \"sort_rows\": 0,\n \"sort_merge_passes\": 0\n },\n {\n \"sql_text\": \"COMMIT\",\n \"time\": \"254.42 us\",\n \"schema\": \"trx\",\n \"rows_examined\": 0,\n \"rows_affected\": 0,\n \"rows_sent\": 0,\n \"tmp_tables\": 0,\n \"tmp_disk_tables\": 0,\n \"sort_rows\": 0,\n \"sort_merge_passes\": 0\n }\n ]\n },\n {\n \"time\": \"426.20 us\",\n \"state\": \"COMMITTED\",\n \"mode\": \"READ WRITE\",\n \"autocommitted\": \"NO\",\n \"gtid\": \"AUTOMATIC\",\n \"isolation\": \"REPEATABLE READ\",\n \"statements_executed\": [\n {\n \"sql_text\": \"INSERT INTO info VALUES (2, \'bar\')\",\n \"time\": \"107.33 us\",\n \"schema\": \"trx\",\n \"rows_examined\": 0,\n \"rows_affected\": 1,\n \"rows_sent\": 0,\n \"tmp_tables\": 0,\n \"tmp_disk_tables\": 0,\n \"sort_rows\": 0,\n \"sort_merge_passes\": 0\n },\n {\n \"sql_text\": \"COMMIT\",\n \"time\": \"213.23 us\",\n \"schema\": \"trx\",\n \"rows_examined\": 0,\n \"rows_affected\": 0,\n \"rows_sent\": 0,\n \"tmp_tables\": 0,\n \"tmp_disk_tables\": 0,\n \"sort_rows\": 0,\n \"sort_merge_passes\": 0\n }\n ]\n }\n ]\n 1 row in set (0.03 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_output LONGTEXT DEFAULT \'{}\'; DECLARE v_msg_text TEXT DEFAULT \'\'; DECLARE v_signal_msg TEXT DEFAULT \'\'; DECLARE v_mysql_errno INT; DECLARE v_max_output_len BIGINT; DECLARE EXIT HANDLER FOR SQLWARNING, SQLEXCEPTION BEGIN GET DIAGNOSTICS CONDITION 1 v_msg_text = MESSAGE_TEXT, v_mysql_errno = MYSQL_ERRNO;  IF v_mysql_errno = 1260 THEN SET v_signal_msg = CONCAT(\'{ \"error\": \"Trx info truncated: \', v_msg_text, \'\" }\'); ELSE SET v_signal_msg = CONCAT(\'{ \"error\": \"\', v_msg_text, \'\" }\'); END IF;  RETURN v_signal_msg; END;  IF (@sys.ps_thread_trx_info.max_length IS NULL) THEN SET @sys.ps_thread_trx_info.max_length = sys.sys_get_config(\'ps_thread_trx_info.max_length\', 65535); END IF;  IF (@sys.ps_thread_trx_info.max_length != @@session.group_concat_max_len) THEN SET @old_group_concat_max_len = @@session.group_concat_max_len; SET v_max_output_len = (@sys.ps_thread_trx_info.max_length - 5); SET SESSION group_concat_max_len = v_max_output_len; END IF;  SET v_output = ( SELECT CONCAT(\'[\', IFNULL(GROUP_CONCAT(trx_info ORDER BY event_id), \'\'), \'\n]\') AS trx_info FROM (SELECT trxi.thread_id,  trxi.event_id, GROUP_CONCAT( IFNULL( CONCAT(\'\n  {\n\', \'    \"time\": \"\', IFNULL(sys.format_time(trxi.timer_wait), \'\'), \'\",\n\', \'    \"state\": \"\', IFNULL(trxi.state, \'\'), \'\",\n\', \'    \"mode\": \"\', IFNULL(trxi.access_mode, \'\'), \'\",\n\', \'    \"autocommitted\": \"\', IFNULL(trxi.autocommit, \'\'), \'\",\n\', \'    \"gtid\": \"\', IFNULL(trxi.gtid, \'\'), \'\",\n\', \'    \"isolation\": \"\', IFNULL(trxi.isolation_level, \'\'), \'\",\n\', \'    \"statements_executed\": [\', IFNULL(s.stmts, \'\'), IF(s.stmts IS NULL, \' ]\n\', \'\n    ]\n\'), \'  }\' ),  \'\')  ORDER BY event_id) AS trx_info  FROM ( (SELECT thread_id, event_id, timer_wait, state,access_mode, autocommit, gtid, isolation_level FROM performance_schema.events_transactions_current WHERE thread_id = in_thread_id AND end_event_id IS NULL) UNION (SELECT thread_id, event_id, timer_wait, state,access_mode, autocommit, gtid, isolation_level FROM performance_schema.events_transactions_history WHERE thread_id = in_thread_id) ) AS trxi LEFT JOIN (SELECT thread_id, nesting_event_id, GROUP_CONCAT( IFNULL( CONCAT(\'\n      {\n\', \'        \"sql_text\": \"\', IFNULL(sys.format_statement(REPLACE(sql_text, \'\\\', \'\\\\\')), \'\'), \'\",\n\', \'        \"time\": \"\', IFNULL(sys.format_time(timer_wait), \'\'), \'\",\n\', \'        \"schema\": \"\', IFNULL(current_schema, \'\'), \'\",\n\', \'        \"rows_examined\": \', IFNULL(rows_examined, \'\'), \',\n\', \'        \"rows_affected\": \', IFNULL(rows_affected, \'\'), \',\n\', \'        \"rows_sent\": \', IFNULL(rows_sent, \'\'), \',\n\', \'        \"tmp_tables\": \', IFNULL(created_tmp_tables, \'\'), \',\n\', \'        \"tmp_disk_tables\": \', IFNULL(created_tmp_disk_tables, \'\'), \',\n\', \'        \"sort_rows\": \', IFNULL(sort_rows, \'\'), \',\n\', \'        \"sort_merge_passes\": \', IFNULL(sort_merge_passes, \'\'), \'\n\', \'      }\'), \'\') ORDER BY event_id) AS stmts FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL AND thread_id = in_thread_id GROUP BY thread_id, nesting_event_id ) AS s  ON trxi.thread_id = s.thread_id  AND trxi.event_id = s.nesting_event_id WHERE trxi.thread_id = in_thread_id GROUP BY trxi.thread_id, trxi.event_id ) trxs GROUP BY thread_id );  IF (@old_group_concat_max_len IS NOT NULL) THEN SET SESSION group_concat_max_len = @old_group_concat_max_len; END IF;  RETURN v_output; END'),('sys','quote_identifier','FUNCTION','quote_identifier','SQL','NO_SQL','YES','INVOKER','in_identifier TEXT','text CHARSET utf8','BEGIN RETURN CONCAT(\'`\', REPLACE(in_identifier, \'`\', \'``\'), \'`\'); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes an unquoted identifier (schema name, table name, etc.) and\n returns the identifier quoted with backticks.\n \n Parameters\n \n in_identifier (TEXT):\n The identifier to quote.\n \n Returns\n \n TEXT\n \n Example\n \n mysql> SELECT sys.quote_identifier(\'my_identifier\') AS Identifier;\n +-----------------+\n | Identifier      |\n +-----------------+\n | `my_identifier` |\n +-----------------+\n 1 row in set (0.00 sec)\n \n mysql> SELECT sys.quote_identifier(\'my`idenfier\') AS Identifier;\n +----------------+\n | Identifier     |\n +----------------+\n | `my``idenfier` |\n +----------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN CONCAT(\'`\', REPLACE(in_identifier, \'`\', \'``\'), \'`\'); END'),('sys','sys_get_config','FUNCTION','sys_get_config','SQL','READS_SQL_DATA','YES','INVOKER',' in_variable_name VARCHAR(128), in_default_value VARCHAR(128) ','varchar(128) CHARSET utf8','BEGIN DECLARE v_value VARCHAR(128) DEFAULT NULL;  SET v_value = (SELECT value FROM sys.sys_config WHERE variable = in_variable_name);  IF (v_value IS NULL) THEN SET v_value = in_default_value; END IF;  RETURN v_value; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Returns the value for the requested variable using the following logic:\n \n 1. If the option exists in sys.sys_config return the value from there.\n 2. Else fall back on the provided default value.\n \n Notes for using sys_get_config():\n \n * If the default value argument to sys_get_config() is NULL and case 2. is reached, NULL is returned.\n It is then expected that the caller is able to handle NULL for the given configuration option.\n * The convention is to name the user variables @sys.<name of variable>. It is <name of variable> that\n is stored in the sys_config table and is what is expected as the argument to sys_get_config().\n * If you want to check whether the configuration option has already been set and if not assign with\n the return value of sys_get_config() you can use IFNULL(...) (see example below). However this should\n not be done inside a loop (e.g. for each row in a result set) as for repeated calls where assignment\n is only needed in the first iteration using IFNULL(...) is expected to be significantly slower than\n using an IF (...) THEN ... END IF; block (see example below).\n \n Parameters\n \n in_variable_name (VARCHAR(128)):\n The name of the config option to return the value for.\n \n in_default_value (VARCHAR(128)):\n The default value to return if the variable does not exist in sys.sys_config.\n \n Returns\n \n VARCHAR(128)\n \n Example\n \n mysql> SELECT sys.sys_get_config(\'statement_truncate_len\', 128) AS Value;\n +-------+\n | Value |\n +-------+\n | 64    |\n +-------+\n 1 row in set (0.00 sec)\n \n mysql> SET @sys.statement_truncate_len = IFNULL(@sys.statement_truncate_len, sys.sys_get_config(\'statement_truncate_len\', 64));\n Query OK, 0 rows affected (0.00 sec)\n \n IF (@sys.statement_truncate_len IS NULL) THEN\n SET @sys.statement_truncate_len = sys.sys_get_config(\'statement_truncate_len\', 64);\n END IF;\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_value VARCHAR(128) DEFAULT NULL;  SET v_value = (SELECT value FROM sys.sys_config WHERE variable = in_variable_name);  IF (v_value IS NULL) THEN SET v_value = in_default_value; END IF;  RETURN v_value; END'),('sys','version_major','FUNCTION','version_major','SQL','NO_SQL','NO','INVOKER','','tinyint(3) unsigned','BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), \'-\', 1), \'.\', 1); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Returns the major version of MySQL Server.\n \n Returns\n \n TINYINT UNSIGNED\n \n Example\n \n mysql> SELECT VERSION(), sys.version_major();\n +--------------------------------------+---------------------+\n | VERSION()                            | sys.version_major() |\n +--------------------------------------+---------------------+\n | 5.7.9-enterprise-commercial-advanced | 5                   |\n +--------------------------------------+---------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), \'-\', 1), \'.\', 1); END'),('sys','version_minor','FUNCTION','version_minor','SQL','NO_SQL','NO','INVOKER','','tinyint(3) unsigned','BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), \'-\', 1), \'.\', 2), \'.\', -1); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Returns the minor (release series) version of MySQL Server.\n \n Returns\n \n TINYINT UNSIGNED\n \n Example\n \n mysql> SELECT VERSION(), sys.server_minor();\n +--------------------------------------+---------------------+\n | VERSION()                            | sys.version_minor() |\n +--------------------------------------+---------------------+\n | 5.7.9-enterprise-commercial-advanced | 7                   |\n +--------------------------------------+---------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), \'-\', 1), \'.\', 2), \'.\', -1); END'),('sys','version_patch','FUNCTION','version_patch','SQL','NO_SQL','NO','INVOKER','','tinyint(3) unsigned','BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), \'-\', 1), \'.\', -1); END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Returns the patch release version of MySQL Server.\n \n Returns\n \n TINYINT UNSIGNED\n \n Example\n \n mysql> SELECT VERSION(), sys.version_patch();\n +--------------------------------------+---------------------+\n | VERSION()                            | sys.version_patch() |\n +--------------------------------------+---------------------+\n | 5.7.9-enterprise-commercial-advanced | 9                   |\n +--------------------------------------+---------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN RETURN SUBSTRING_INDEX(SUBSTRING_INDEX(VERSION(), \'-\', 1), \'.\', -1); END'),('sys','create_synonym_db','PROCEDURE','create_synonym_db','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_db_name VARCHAR(64),  IN in_synonym VARCHAR(64) ','','BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_db_name_check VARCHAR(64); DECLARE v_db_err_msg TEXT; DECLARE v_table VARCHAR(64); DECLARE v_views_created INT DEFAULT 0;  DECLARE db_doesnt_exist CONDITION FOR SQLSTATE \'42000\'; DECLARE db_name_exists CONDITION FOR SQLSTATE \'HY000\';  DECLARE c_table_names CURSOR FOR  SELECT TABLE_NAME  FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = in_db_name;  DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SELECT SCHEMA_NAME INTO v_db_name_check FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = in_db_name;  IF v_db_name_check IS NULL THEN SET v_db_err_msg = CONCAT(\'Unknown database \', in_db_name); SIGNAL SQLSTATE \'HY000\' SET MESSAGE_TEXT = v_db_err_msg; END IF;  SELECT SCHEMA_NAME INTO v_db_name_check FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = in_synonym;  IF v_db_name_check = in_synonym THEN SET v_db_err_msg = CONCAT(\'Can\\\'t create database \', in_synonym, \'; database exists\'); SIGNAL SQLSTATE \'HY000\' SET MESSAGE_TEXT = v_db_err_msg; END IF;  SET @create_db_stmt := CONCAT(\'CREATE DATABASE \', sys.quote_identifier(in_synonym)); PREPARE create_db_stmt FROM @create_db_stmt; EXECUTE create_db_stmt; DEALLOCATE PREPARE create_db_stmt;  SET v_done = FALSE; OPEN c_table_names; c_table_names: LOOP FETCH c_table_names INTO v_table; IF v_done THEN LEAVE c_table_names; END IF;  SET @create_view_stmt = CONCAT( \'CREATE SQL SECURITY INVOKER VIEW \', sys.quote_identifier(in_synonym), \'.\', sys.quote_identifier(v_table), \' AS SELECT * FROM \', sys.quote_identifier(in_db_name), \'.\', sys.quote_identifier(v_table) ); PREPARE create_view_stmt FROM @create_view_stmt; EXECUTE create_view_stmt; DEALLOCATE PREPARE create_view_stmt;  SET v_views_created = v_views_created + 1; END LOOP; CLOSE c_table_names;  SELECT CONCAT( \'Created \', v_views_created, \' view\', IF(v_views_created != 1, \'s\', \'\'), \' in the \', sys.quote_identifier(in_synonym), \' database\' ) AS summary;  END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes a source database name and synonym name, and then creates the \n synonym database with views that point to all of the tables within\n the source database.\n \n Useful for creating a \"ps\" synonym for \"performance_schema\",\n or \"is\" instead of \"information_schema\", for example.\n \n Parameters\n \n in_db_name (VARCHAR(64)):\n The database name that you would like to create a synonym for.\n in_synonym (VARCHAR(64)):\n The database synonym name.\n \n Example\n \n mysql> SHOW DATABASES;\n +--------------------+\n | Database           |\n +--------------------+\n | information_schema |\n | mysql              |\n | performance_schema |\n | sys                |\n | test               |\n +--------------------+\n 5 rows in set (0.00 sec)\n \n mysql> CALL sys.create_synonym_db(\'performance_schema\', \'ps\');\n +---------------------------------------+\n | summary                               |\n +---------------------------------------+\n | Created 74 views in the `ps` database |\n +---------------------------------------+\n 1 row in set (8.57 sec)\n \n Query OK, 0 rows affected (8.57 sec)\n \n mysql> SHOW DATABASES;\n +--------------------+\n | Database           |\n +--------------------+\n | information_schema |\n | mysql              |\n | performance_schema |\n | ps                 |\n | sys                |\n | test               |\n +--------------------+\n 6 rows in set (0.00 sec)\n \n mysql> SHOW FULL TABLES FROM ps;\n +------------------------------------------------------+------------+\n | Tables_in_ps                                         | Table_type |\n +------------------------------------------------------+------------+\n | accounts                                             | VIEW       |\n | cond_instances                                       | VIEW       |\n | events_stages_current                                | VIEW       |\n | events_stages_history                                | VIEW       |\n ...\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_db_name_check VARCHAR(64); DECLARE v_db_err_msg TEXT; DECLARE v_table VARCHAR(64); DECLARE v_views_created INT DEFAULT 0;  DECLARE db_doesnt_exist CONDITION FOR SQLSTATE \'42000\'; DECLARE db_name_exists CONDITION FOR SQLSTATE \'HY000\';  DECLARE c_table_names CURSOR FOR  SELECT TABLE_NAME  FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = in_db_name;  DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SELECT SCHEMA_NAME INTO v_db_name_check FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = in_db_name;  IF v_db_name_check IS NULL THEN SET v_db_err_msg = CONCAT(\'Unknown database \', in_db_name); SIGNAL SQLSTATE \'HY000\' SET MESSAGE_TEXT = v_db_err_msg; END IF;  SELECT SCHEMA_NAME INTO v_db_name_check FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = in_synonym;  IF v_db_name_check = in_synonym THEN SET v_db_err_msg = CONCAT(\'Can\'t create database \', in_synonym, \'; database exists\'); SIGNAL SQLSTATE \'HY000\' SET MESSAGE_TEXT = v_db_err_msg; END IF;  SET @create_db_stmt := CONCAT(\'CREATE DATABASE \', sys.quote_identifier(in_synonym)); PREPARE create_db_stmt FROM @create_db_stmt; EXECUTE create_db_stmt; DEALLOCATE PREPARE create_db_stmt;  SET v_done = FALSE; OPEN c_table_names; c_table_names: LOOP FETCH c_table_names INTO v_table; IF v_done THEN LEAVE c_table_names; END IF;  SET @create_view_stmt = CONCAT( \'CREATE SQL SECURITY INVOKER VIEW \', sys.quote_identifier(in_synonym), \'.\', sys.quote_identifier(v_table), \' AS SELECT * FROM \', sys.quote_identifier(in_db_name), \'.\', sys.quote_identifier(v_table) ); PREPARE create_view_stmt FROM @create_view_stmt; EXECUTE create_view_stmt; DEALLOCATE PREPARE create_view_stmt;  SET v_views_created = v_views_created + 1; END LOOP; CLOSE c_table_names;  SELECT CONCAT( \'Created \', v_views_created, \' view\', IF(v_views_created != 1, \'s\', \'\'), \' in the \', sys.quote_identifier(in_synonym), \' database\' ) AS summary;  END'),('sys','execute_prepared_stmt','PROCEDURE','execute_prepared_stmt','SQL','READS_SQL_DATA','NO','INVOKER',' IN in_query longtext CHARACTER SET UTF8 ','','BEGIN IF (@sys.debug IS NULL) THEN SET @sys.debug = sys.sys_get_config(\'debug\', \'OFF\'); END IF;  IF (in_query IS NULL OR LENGTH(in_query) < 4) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \"The @sys.execute_prepared_stmt.sql must contain a query\"; END IF;  SET @sys.execute_prepared_stmt.sql = in_query;  IF (@sys.debug = \'ON\') THEN SELECT @sys.execute_prepared_stmt.sql AS \'Debug\'; END IF; PREPARE sys_execute_prepared_stmt FROM @sys.execute_prepared_stmt.sql; EXECUTE sys_execute_prepared_stmt; DEALLOCATE PREPARE sys_execute_prepared_stmt;  SET @sys.execute_prepared_stmt.sql = NULL; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Takes the query in the argument and executes it using a prepared statement. The prepared statement is deallocated,\n so the procedure is mainly useful for executing one off dynamically created queries.\n \n The sys_execute_prepared_stmt prepared statement name is used for the query and is required not to exist.\n \n \n Parameters\n \n in_query (longtext CHARACTER SET UTF8):\n The query to execute.\n \n \n Configuration Options\n \n sys.debug\n Whether to provide debugging output.\n Default is \'OFF\'. Set to \'ON\' to include.\n \n \n Example\n \n mysql> CALL sys.execute_prepared_stmt(\'SELECT * FROM sys.sys_config\');\n +------------------------+-------+---------------------+--------+\n | variable               | value | set_time            | set_by |\n +------------------------+-------+---------------------+--------+\n | statement_truncate_len | 64    | 2015-06-30 13:06:00 | NULL   |\n +------------------------+-------+---------------------+--------+\n 1 row in set (0.00 sec)\n \n Query OK, 0 rows affected (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN IF (@sys.debug IS NULL) THEN SET @sys.debug = sys.sys_get_config(\'debug\', \'OFF\'); END IF;  IF (in_query IS NULL OR LENGTH(in_query) < 4) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \"The @sys.execute_prepared_stmt.sql must contain a query\"; END IF;  SET @sys.execute_prepared_stmt.sql = in_query;  IF (@sys.debug = \'ON\') THEN SELECT @sys.execute_prepared_stmt.sql AS \'Debug\'; END IF; PREPARE sys_execute_prepared_stmt FROM @sys.execute_prepared_stmt.sql; EXECUTE sys_execute_prepared_stmt; DEALLOCATE PREPARE sys_execute_prepared_stmt;  SET @sys.execute_prepared_stmt.sql = NULL; END'),('sys','diagnostics','PROCEDURE','diagnostics','SQL','READS_SQL_DATA','NO','INVOKER',' IN in_max_runtime int unsigned, IN in_interval int unsigned, IN in_auto_config enum (\'current\', \'medium\', \'full\') ','','BEGIN DECLARE v_start, v_runtime, v_iter_start, v_sleep DECIMAL(20,2) DEFAULT 0.0; DECLARE v_has_innodb, v_has_ndb, v_has_ps, v_has_replication, v_has_ps_replication VARCHAR(8) CHARSET utf8 DEFAULT \'NO\'; DECLARE v_this_thread_enabled, v_has_ps_vars, v_has_metrics ENUM(\'YES\', \'NO\'); DECLARE v_table_name, v_banner VARCHAR(64) CHARSET utf8; DECLARE v_sql_status_summary_select, v_sql_status_summary_delta, v_sql_status_summary_from, v_no_delta_names TEXT; DECLARE v_output_time, v_output_time_prev DECIMAL(20,3) UNSIGNED; DECLARE v_output_count, v_count, v_old_group_concat_max_len INT UNSIGNED DEFAULT 0; DECLARE v_status_summary_width TINYINT UNSIGNED DEFAULT 50; DECLARE v_done BOOLEAN DEFAULT FALSE; DECLARE c_ndbinfo CURSOR FOR SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = \'ndbinfo\' AND TABLE_NAME NOT IN ( \'blocks\', \'config_params\', \'dict_obj_types\', \'disk_write_speed_base\', \'memory_per_fragment\', \'memoryusage\', \'operations_per_fragment\', \'threadblocks\' ); DECLARE c_sysviews_w_delta CURSOR FOR SELECT table_name FROM tmp_sys_views_delta ORDER BY table_name;  DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SELECT INSTRUMENTED INTO v_this_thread_enabled FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_disable_thread(CONNECTION_ID()); END IF;  IF (in_max_runtime < in_interval) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'in_max_runtime must be greater than or equal to in_interval\'; END IF; IF (in_max_runtime = 0) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'in_max_runtime must be greater than 0\'; END IF; IF (in_interval = 0) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'in_interval must be greater than 0\'; END IF;  IF (@sys.diagnostics.allow_i_s_tables IS NULL) THEN SET @sys.diagnostics.allow_i_s_tables = sys.sys_get_config(\'diagnostics.allow_i_s_tables\', \'OFF\'); END IF; IF (@sys.diagnostics.include_raw IS NULL) THEN SET @sys.diagnostics.include_raw      = sys.sys_get_config(\'diagnostics.include_raw\'     , \'OFF\'); END IF; IF (@sys.debug IS NULL) THEN SET @sys.debug                        = sys.sys_get_config(\'debug\'                       , \'OFF\'); END IF; IF (@sys.statement_truncate_len IS NULL) THEN SET @sys.statement_truncate_len       = sys.sys_get_config(\'statement_truncate_len\'      , \'64\' ); END IF;  SET @log_bin := @@sql_log_bin; IF (@log_bin = 1) THEN SET sql_log_bin = 0; END IF;  SET v_no_delta_names = CONCAT(\'s%{COUNT}.Variable_name NOT IN (\', \'\'\'innodb_buffer_pool_pages_total\'\', \', \'\'\'innodb_page_size\'\', \', \'\'\'last_query_cost\'\', \', \'\'\'last_query_partial_plans\'\', \', \'\'\'qcache_total_blocks\'\', \', \'\'\'slave_last_heartbeat\'\', \', \'\'\'ssl_ctx_verify_depth\'\', \', \'\'\'ssl_ctx_verify_mode\'\', \', \'\'\'ssl_session_cache_size\'\', \', \'\'\'ssl_verify_depth\'\', \', \'\'\'ssl_verify_mode\'\', \', \'\'\'ssl_version\'\', \', \'\'\'buffer_flush_lsn_avg_rate\'\', \', \'\'\'buffer_flush_pct_for_dirty\'\', \', \'\'\'buffer_flush_pct_for_lsn\'\', \', \'\'\'buffer_pool_pages_total\'\', \', \'\'\'lock_row_lock_time_avg\'\', \', \'\'\'lock_row_lock_time_max\'\', \', \'\'\'innodb_page_size\'\'\', \')\');  IF (in_auto_config <> \'current\') THEN IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'Updating Performance Schema configuration to \', in_auto_config) AS \'Debug\'; END IF; CALL sys.ps_setup_save(0);  IF (in_auto_config = \'medium\') THEN UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\' WHERE NAME NOT LIKE \'%\\_history%\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\' WHERE NAME NOT LIKE \'wait/synch/%\'; ELSEIF (in_auto_config = \'full\') THEN UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\'; END IF;  UPDATE performance_schema.threads SET INSTRUMENTED = \'YES\' WHERE PROCESSLIST_ID <> CONNECTION_ID(); END IF;  SET v_start        = UNIX_TIMESTAMP(NOW(2)), in_interval    = IFNULL(in_interval, 30), in_max_runtime = IFNULL(in_max_runtime, 60);  SET v_banner = REPEAT( \'-\', LEAST( GREATEST( 36, CHAR_LENGTH(VERSION()), CHAR_LENGTH(@@global.version_comment), CHAR_LENGTH(@@global.version_compile_os), CHAR_LENGTH(@@global.version_compile_machine), CHAR_LENGTH(@@global.socket), CHAR_LENGTH(@@global.datadir) ), 64 ) ); SELECT \'Hostname\' AS \'Name\', @@global.hostname AS \'Value\' UNION ALL SELECT \'Port\' AS \'Name\', @@global.port AS \'Value\' UNION ALL SELECT \'Socket\' AS \'Name\', @@global.socket AS \'Value\' UNION ALL SELECT \'Datadir\' AS \'Name\', @@global.datadir AS \'Value\' UNION ALL SELECT \'Server UUID\' AS \'Name\', @@global.server_uuid AS \'Value\' UNION ALL SELECT REPEAT(\'-\', 23) AS \'Name\', v_banner AS \'Value\' UNION ALL SELECT \'MySQL Version\' AS \'Name\', VERSION() AS \'Value\' UNION ALL SELECT \'Sys Schema Version\' AS \'Name\', (SELECT sys_version FROM sys.version) AS \'Value\' UNION ALL SELECT \'Version Comment\' AS \'Name\', @@global.version_comment AS \'Value\' UNION ALL SELECT \'Version Compile OS\' AS \'Name\', @@global.version_compile_os AS \'Value\' UNION ALL SELECT \'Version Compile Machine\' AS \'Name\', @@global.version_compile_machine AS \'Value\' UNION ALL SELECT REPEAT(\'-\', 23) AS \'Name\', v_banner AS \'Value\' UNION ALL SELECT \'UTC Time\' AS \'Name\', UTC_TIMESTAMP() AS \'Value\' UNION ALL SELECT \'Local Time\' AS \'Name\', NOW() AS \'Value\' UNION ALL SELECT \'Time Zone\' AS \'Name\', @@global.time_zone AS \'Value\' UNION ALL SELECT \'System Time Zone\' AS \'Name\', @@global.system_time_zone AS \'Value\' UNION ALL SELECT \'Time Zone Offset\' AS \'Name\', TIMEDIFF(NOW(), UTC_TIMESTAMP()) AS \'Value\';  SET v_has_innodb         = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = \'InnoDB\'), \'NO\'), v_has_ndb            = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = \'NDBCluster\'), \'NO\'), v_has_ps             = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = \'PERFORMANCE_SCHEMA\'), \'NO\'), v_has_ps_replication = IF(v_has_ps = \'YES\' AND EXISTS(SELECT 1 FROM information_schema.TABLES WHERE TABLE_SCHEMA = \'performance_schema\' AND TABLE_NAME = \'replication_applier_status\'), \'YES\', \'NO\' ), v_has_replication    =  IF(v_has_ps_replication = \'YES\', IF((SELECT COUNT(*) FROM performance_schema.replication_connection_status) > 0, \'YES\', \'NO\'), IF(@@master_info_repository = \'TABLE\', IF((SELECT COUNT(*) FROM mysql.slave_master_info) > 0, \'YES\', \'NO\'), IF(@@relay_log_info_repository = \'TABLE\', IF((SELECT COUNT(*) FROM mysql.slave_relay_log_info) > 0, \'YES\', \'NO\'), \'MAYBE\')) ) , v_has_metrics        = IF(v_has_ps = \'YES\' OR (sys.version_major() = 5 AND sys.version_minor() = 6), \'YES\', \'NO\'), v_has_ps_vars        = \'NO\';   SET v_has_ps_vars = IF(@@global.show_compatibility_56, \'NO\', \'YES\');  SET v_has_ps_vars = \'YES\';  IF (@sys.debug = \'ON\') THEN SELECT v_has_innodb AS \'Has_InnoDB\', v_has_ndb AS \'Has_NDBCluster\', v_has_ps AS \'Has_Performance_Schema\', v_has_ps_vars AS \'Has_P_S_SHOW_Variables\', v_has_metrics AS \'Has_metrics\', v_has_ps_replication \'AS Has_P_S_Replication\', v_has_replication AS \'Has_Replication\'; END IF;  IF (v_has_innodb IN (\'DEFAULT\', \'YES\')) THEN SET @sys.diagnostics.sql = \'SHOW ENGINE InnoDB STATUS\'; PREPARE stmt_innodb_status FROM @sys.diagnostics.sql; END IF;  IF (v_has_ps = \'YES\') THEN SET @sys.diagnostics.sql = \'SHOW ENGINE PERFORMANCE_SCHEMA STATUS\'; PREPARE stmt_ps_status FROM @sys.diagnostics.sql; END IF;  IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN SET @sys.diagnostics.sql = \'SHOW ENGINE NDBCLUSTER STATUS\'; PREPARE stmt_ndbcluster_status FROM @sys.diagnostics.sql; END IF;  SET @sys.diagnostics.sql_gen_query_template = \'SELECT CONCAT( \'\'SELECT \'\', GROUP_CONCAT( CASE WHEN (SUBSTRING(TABLE_NAME, 3), COLUMN_NAME) IN ( (\'\'io_global_by_file_by_bytes\'\', \'\'total\'\'), (\'\'io_global_by_wait_by_bytes\'\', \'\'total_requested\'\') ) THEN CONCAT(\'\'sys.format_bytes(\'\', COLUMN_NAME, \'\') AS \'\', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -8) = \'\'_latency\'\' THEN CONCAT(\'\'sys.format_time(\'\', COLUMN_NAME, \'\') AS \'\', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -7) = \'\'_memory\'\' OR SUBSTRING(COLUMN_NAME, -17) = \'\'_memory_allocated\'\' OR ((SUBSTRING(COLUMN_NAME, -5) = \'\'_read\'\' OR SUBSTRING(COLUMN_NAME, -8) = \'\'_written\'\' OR SUBSTRING(COLUMN_NAME, -6) = \'\'_write\'\') AND SUBSTRING(COLUMN_NAME, 1, 6) <> \'\'COUNT_\'\') THEN CONCAT(\'\'sys.format_bytes(\'\', COLUMN_NAME, \'\') AS \'\', COLUMN_NAME) ELSE COLUMN_NAME END ORDER BY ORDINAL_POSITION SEPARATOR \'\',\\n       \'\' ), \'\'\\n  FROM tmp_\'\', SUBSTRING(TABLE_NAME FROM 3), \'\'_%{OUTPUT}\'\' ) AS Query INTO @sys.diagnostics.sql_select FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = \'\'sys\'\' AND TABLE_NAME = ? GROUP BY TABLE_NAME\';  SET @sys.diagnostics.sql_gen_query_delta = \'SELECT CONCAT( \'\'SELECT \'\', GROUP_CONCAT( CASE WHEN FIND_IN_SET(COLUMN_NAME, diag.pk) THEN COLUMN_NAME WHEN diag.TABLE_NAME = \'\'io_global_by_file_by_bytes\'\' AND COLUMN_NAME = \'\'write_pct\'\' THEN CONCAT(\'\'IFNULL(ROUND(100-(((e.total_read-IFNULL(s.total_read, 0))\'\', \'\'/NULLIF(((e.total_read-IFNULL(s.total_read, 0))+(e.total_written-IFNULL(s.total_written, 0))), 0))*100), 2), 0.00) AS \'\', COLUMN_NAME) WHEN (diag.TABLE_NAME, COLUMN_NAME) IN ( (\'\'io_global_by_file_by_bytes\'\', \'\'total\'\'), (\'\'io_global_by_wait_by_bytes\'\', \'\'total_requested\'\') ) THEN CONCAT(\'\'sys.format_bytes(e.\'\', COLUMN_NAME, \'\'-IFNULL(s.\'\', COLUMN_NAME, \'\', 0)) AS \'\', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, 1, 4) IN (\'\'max_\'\', \'\'min_\'\') AND SUBSTRING(COLUMN_NAME, -8) = \'\'_latency\'\' THEN CONCAT(\'\'sys.format_time(e.\'\', COLUMN_NAME, \'\') AS \'\', COLUMN_NAME) WHEN COLUMN_NAME = \'\'avg_latency\'\' THEN CONCAT(\'\'sys.format_time((e.total_latency - IFNULL(s.total_latency, 0))\'\', \'\'/NULLIF(e.total - IFNULL(s.total, 0), 0)) AS \'\', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -12) = \'\'_avg_latency\'\' THEN CONCAT(\'\'sys.format_time((e.\'\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'\'_latency - IFNULL(s.\'\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'\'_latency, 0))\'\', \'\'/NULLIF(e.\'\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'\'s - IFNULL(s.\'\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'\'s, 0), 0)) AS \'\', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -8) = \'\'_latency\'\' THEN CONCAT(\'\'sys.format_time(e.\'\', COLUMN_NAME, \'\' - IFNULL(s.\'\', COLUMN_NAME, \'\', 0)) AS \'\', COLUMN_NAME) WHEN COLUMN_NAME IN (\'\'avg_read\'\', \'\'avg_write\'\', \'\'avg_written\'\') THEN CONCAT(\'\'sys.format_bytes(IFNULL((e.total_\'\', IF(COLUMN_NAME = \'\'avg_read\'\', \'\'read\'\', \'\'written\'\'), \'\'-IFNULL(s.total_\'\', IF(COLUMN_NAME = \'\'avg_read\'\', \'\'read\'\', \'\'written\'\'), \'\', 0))\'\', \'\'/NULLIF(e.count_\'\', IF(COLUMN_NAME = \'\'avg_read\'\', \'\'read\'\', \'\'write\'\'), \'\'-IFNULL(s.count_\'\', IF(COLUMN_NAME = \'\'avg_read\'\', \'\'read\'\', \'\'write\'\'), \'\', 0), 0), 0)) AS \'\', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -7) = \'\'_memory\'\' OR SUBSTRING(COLUMN_NAME, -17) = \'\'_memory_allocated\'\' OR ((SUBSTRING(COLUMN_NAME, -5) = \'\'_read\'\' OR SUBSTRING(COLUMN_NAME, -8) = \'\'_written\'\' OR SUBSTRING(COLUMN_NAME, -6) = \'\'_write\'\') AND SUBSTRING(COLUMN_NAME, 1, 6) <> \'\'COUNT_\'\') THEN CONCAT(\'\'sys.format_bytes(e.\'\', COLUMN_NAME, \'\' - IFNULL(s.\'\', COLUMN_NAME, \'\', 0)) AS \'\', COLUMN_NAME) ELSE CONCAT(\'\'(e.\'\', COLUMN_NAME, \'\' - IFNULL(s.\'\', COLUMN_NAME, \'\', 0)) AS \'\', COLUMN_NAME) END ORDER BY ORDINAL_POSITION SEPARATOR \'\',\\n       \'\' ), \'\'\\n  FROM tmp_\'\', diag.TABLE_NAME, \'\'_end e LEFT OUTER JOIN tmp_\'\', diag.TABLE_NAME, \'\'_start s USING (\'\', diag.pk, \'\')\'\' ) AS Query INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta diag INNER JOIN information_schema.COLUMNS c ON c.TABLE_NAME = CONCAT(\'\'x$\'\', diag.TABLE_NAME) WHERE c.TABLE_SCHEMA = \'\'sys\'\' AND diag.TABLE_NAME = ? GROUP BY diag.TABLE_NAME\';  IF (v_has_ps = \'YES\') THEN DROP TEMPORARY TABLE IF EXISTS tmp_sys_views_delta; CREATE TEMPORARY TABLE tmp_sys_views_delta ( TABLE_NAME varchar(64) NOT NULL, order_by text COMMENT \'ORDER BY clause for the initial and overall views\', order_by_delta text COMMENT \'ORDER BY clause for the delta views\', where_delta text COMMENT \'WHERE clause to use for delta views to only include rows with a \"count\" > 0\', limit_rows int unsigned COMMENT \'The maximum number of rows to include for the view\', pk varchar(128) COMMENT \'Used with the FIND_IN_SET() function so use comma separated list without whitespace\', PRIMARY KEY (TABLE_NAME) );  IF (@sys.debug = \'ON\') THEN SELECT \'Populating tmp_sys_views_delta\' AS \'Debug\'; END IF; INSERT INTO tmp_sys_views_delta VALUES (\'host_summary\'                       , \'%{TABLE}.statement_latency DESC\', \'(e.statement_latency-IFNULL(s.statement_latency, 0)) DESC\', \'(e.statements - IFNULL(s.statements, 0)) > 0\', NULL, \'host\'), (\'host_summary_by_file_io\'            , \'%{TABLE}.io_latency DESC\', \'(e.io_latency-IFNULL(s.io_latency, 0)) DESC\', \'(e.ios - IFNULL(s.ios, 0)) > 0\', NULL, \'host\'), (\'host_summary_by_file_io_type\'       , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,event_name\'), (\'host_summary_by_stages\'             , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,event_name\'), (\'host_summary_by_statement_latency\'  , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host\'), (\'host_summary_by_statement_type\'     , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,statement\'), (\'io_by_thread_by_latency\'            , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,thread_id,processlist_id\'), (\'io_global_by_file_by_bytes\'         , \'%{TABLE}.total DESC\', \'(e.total-IFNULL(s.total, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', 100, \'file\'), (\'io_global_by_file_by_latency\'       , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', 100, \'file\'), (\'io_global_by_wait_by_bytes\'         , \'%{TABLE}.total_requested DESC\', \'(e.total_requested-IFNULL(s.total_requested, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_name\'), (\'io_global_by_wait_by_latency\'       , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_name\'), (\'schema_index_statistics\'            , \'(%{TABLE}.select_latency+%{TABLE}.insert_latency+%{TABLE}.update_latency+%{TABLE}.delete_latency) DESC\', \'((e.select_latency+e.insert_latency+e.update_latency+e.delete_latency)-IFNULL(s.select_latency+s.insert_latency+s.update_latency+s.delete_latency, 0)) DESC\', \'((e.rows_selected+e.insert_latency+e.rows_updated+e.rows_deleted)-IFNULL(s.rows_selected+s.rows_inserted+s.rows_updated+s.rows_deleted, 0)) > 0\', 100, \'table_schema,table_name,index_name\'), (\'schema_table_statistics\'            , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) > 0\', 100, \'table_schema,table_name\'), (\'schema_tables_with_full_table_scans\', \'%{TABLE}.rows_full_scanned DESC\', \'(e.rows_full_scanned-IFNULL(s.rows_full_scanned, 0)) DESC\', \'(e.rows_full_scanned-IFNULL(s.rows_full_scanned, 0)) > 0\', 100, \'object_schema,object_name\'), (\'user_summary\'                       , \'%{TABLE}.statement_latency DESC\', \'(e.statement_latency-IFNULL(s.statement_latency, 0)) DESC\', \'(e.statements - IFNULL(s.statements, 0)) > 0\', NULL, \'user\'), (\'user_summary_by_file_io\'            , \'%{TABLE}.io_latency DESC\', \'(e.io_latency-IFNULL(s.io_latency, 0)) DESC\', \'(e.ios - IFNULL(s.ios, 0)) > 0\', NULL, \'user\'), (\'user_summary_by_file_io_type\'       , \'%{TABLE}.user, %{TABLE}.latency DESC\', \'e.user, (e.latency-IFNULL(s.latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,event_name\'), (\'user_summary_by_stages\'             , \'%{TABLE}.user, %{TABLE}.total_latency DESC\', \'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,event_name\'), (\'user_summary_by_statement_latency\'  , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user\'), (\'user_summary_by_statement_type\'     , \'%{TABLE}.user, %{TABLE}.total_latency DESC\', \'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,statement\'), (\'wait_classes_global_by_avg_latency\' , \'IFNULL(%{TABLE}.total_latency / NULLIF(%{TABLE}.total, 0), 0) DESC\', \'IFNULL((e.total_latency-IFNULL(s.total_latency, 0)) / NULLIF((e.total - IFNULL(s.total, 0)), 0), 0) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_class\'), (\'wait_classes_global_by_latency\'     , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_class\'), (\'waits_by_host_by_latency\'           , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,event\'), (\'waits_by_user_by_latency\'           , \'%{TABLE}.user, %{TABLE}.total_latency DESC\', \'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,event\'), (\'waits_global_by_latency\'            , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'events\') ; END IF;   SELECT \'  =======================  Configuration  =======================  \' AS \'\'; SELECT \'GLOBAL VARIABLES\' AS \'The following output is:\'; IF (v_has_ps_vars = \'YES\') THEN SELECT LOWER(VARIABLE_NAME) AS Variable_name, VARIABLE_VALUE AS Variable_value FROM performance_schema.global_variables ORDER BY VARIABLE_NAME; ELSE SELECT LOWER(VARIABLE_NAME) AS Variable_name, VARIABLE_VALUE AS Variable_value FROM information_schema.GLOBAL_VARIABLES ORDER BY VARIABLE_NAME; END IF;  IF (v_has_ps = \'YES\') THEN SELECT \'Performance Schema Setup - Actors\' AS \'The following output is:\'; SELECT * FROM performance_schema.setup_actors;  SELECT \'Performance Schema Setup - Consumers\' AS \'The following output is:\'; SELECT NAME AS Consumer, ENABLED, sys.ps_is_consumer_enabled(NAME) AS COLLECTS FROM performance_schema.setup_consumers;  SELECT \'Performance Schema Setup - Instruments\' AS \'The following output is:\'; SELECT SUBSTRING_INDEX(NAME, \'/\', 2) AS \'InstrumentClass\', ROUND(100*SUM(IF(ENABLED = \'YES\', 1, 0))/COUNT(*), 2) AS \'EnabledPct\', ROUND(100*SUM(IF(TIMED = \'YES\', 1, 0))/COUNT(*), 2) AS \'TimedPct\' FROM performance_schema.setup_instruments GROUP BY SUBSTRING_INDEX(NAME, \'/\', 2) ORDER BY SUBSTRING_INDEX(NAME, \'/\', 2);  SELECT \'Performance Schema Setup - Objects\' AS \'The following output is:\'; SELECT * FROM performance_schema.setup_objects;  SELECT \'Performance Schema Setup - Threads\' AS \'The following output is:\'; SELECT `TYPE` AS ThreadType, COUNT(*) AS \'Total\', ROUND(100*SUM(IF(INSTRUMENTED = \'YES\', 1, 0))/COUNT(*), 2) AS \'InstrumentedPct\' FROM performance_schema.threads GROUP BY TYPE; END IF;   IF (v_has_replication = \'NO\') THEN SELECT \'No Replication Configured\' AS \'Replication Status\'; ELSE SELECT CONCAT(\'Replication Configured: \', v_has_replication, \' - Performance Schema Replication Tables: \', v_has_ps_replication) AS \'Replication Status\';  IF (v_has_ps_replication = \'YES\') THEN SELECT \'Replication - Connection Configuration\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_connection_configuration ORDER BY CHANNEL_NAME ; END IF;  IF (v_has_ps_replication = \'YES\') THEN SELECT \'Replication - Applier Configuration\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_configuration ORDER BY CHANNEL_NAME; END IF;  IF (@@master_info_repository = \'TABLE\') THEN SELECT \'Replication - Master Info Repository Configuration\' AS \'The following output is:\'; SELECT  Channel_name, Host, User_name, Port, Connect_retry, Enabled_ssl, Ssl_ca, Ssl_capath, Ssl_cert, Ssl_cipher, Ssl_key, Ssl_verify_server_cert, Heartbeat, Bind, Ignored_server_ids, Uuid, Retry_count, Ssl_crl, Ssl_crlpath, Tls_version, Enabled_auto_position FROM mysql.slave_master_info ORDER BY Channel_name ; END IF;  IF (@@relay_log_info_repository = \'TABLE\') THEN SELECT \'Replication - Relay Log Repository Configuration\' AS \'The following output is:\'; SELECT  Channel_name, Sql_delay, Number_of_workers, Id FROM mysql.slave_relay_log_info ORDER BY Channel_name ; END IF; END IF;   IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN SELECT \'Cluster Thread Blocks\' AS \'The following output is:\'; SELECT * FROM ndbinfo.threadblocks; END IF;  IF (v_has_ps = \'YES\') THEN IF (@sys.diagnostics.include_raw = \'ON\') THEN SELECT \'  ========================  Initial Status  ========================  \' AS \'\'; END IF;  DROP TEMPORARY TABLE IF EXISTS tmp_digests_start; CALL sys.statement_performance_analyzer(\'create_tmp\', \'tmp_digests_start\', NULL); CALL sys.statement_performance_analyzer(\'snapshot\', NULL, NULL); CALL sys.statement_performance_analyzer(\'save\', \'tmp_digests_start\', NULL);  IF (@sys.diagnostics.include_raw = \'ON\') THEN SET @sys.diagnostics.sql = REPLACE(@sys.diagnostics.sql_gen_query_template, \'%{OUTPUT}\', \'start\'); IF (@sys.debug = \'ON\') THEN SELECT \'The following query will be used to generate the query for each sys view\' AS \'Debug\'; SELECT @sys.diagnostics.sql AS \'Debug\'; END IF; PREPARE stmt_gen_query FROM @sys.diagnostics.sql; END IF; SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'The following queries are for storing the initial content of \', v_table_name) AS \'Debug\'; END IF;  CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS `tmp_\', v_table_name, \'_start`\')); CALL sys.execute_prepared_stmt(CONCAT(\'CREATE TEMPORARY TABLE `tmp_\', v_table_name, \'_start` SELECT * FROM `sys`.`x$\', v_table_name, \'`\'));  IF (@sys.diagnostics.include_raw = \'ON\') THEN SET @sys.diagnostics.table_name = CONCAT(\'x$\', v_table_name); EXECUTE stmt_gen_query USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(order_by IS NOT NULL, CONCAT(\'\\n ORDER BY \', REPLACE(order_by, \'%{TABLE}\', CONCAT(\'tmp_\', v_table_name, \'_start\'))), \'\'), IF(limit_rows IS NOT NULL, CONCAT(\'\\n LIMIT \', limit_rows), \'\') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name; SELECT CONCAT(\'Initial \', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select); END IF; END LOOP; CLOSE c_sysviews_w_delta;  IF (@sys.diagnostics.include_raw = \'ON\') THEN DEALLOCATE PREPARE stmt_gen_query; END IF; END IF;  SET v_sql_status_summary_select = \'SELECT Variable_name\', v_sql_status_summary_delta  = \'\', v_sql_status_summary_from   = \'\';  REPEAT  SET v_output_count = v_output_count + 1; IF (v_output_count > 1) THEN SET v_sleep = in_interval-(UNIX_TIMESTAMP(NOW(2))-v_iter_start); SELECT NOW() AS \'Time\', CONCAT(\'Going to sleep for \', v_sleep, \' seconds. Please do not interrupt\') AS \'The following output is:\'; DO SLEEP(in_interval); END IF; SET v_iter_start = UNIX_TIMESTAMP(NOW(2));  SELECT NOW(), CONCAT(\'Iteration Number \', IFNULL(v_output_count, \'NULL\')) AS \'The following output is:\';  IF (@@log_bin = 1) THEN SELECT \'SHOW MASTER STATUS\' AS \'The following output is:\'; SHOW MASTER STATUS; END IF;  IF (v_has_replication <> \'NO\') THEN SELECT \'SHOW SLAVE STATUS\' AS \'The following output is:\'; SHOW SLAVE STATUS;  IF (v_has_ps_replication = \'YES\') THEN SELECT \'Replication Connection Status\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_connection_status;  SELECT \'Replication Applier Status\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_status ORDER BY CHANNEL_NAME;  SELECT \'Replication Applier Status - Coordinator\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_status_by_coordinator ORDER BY CHANNEL_NAME;  SELECT \'Replication Applier Status - Worker\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_status_by_worker ORDER BY CHANNEL_NAME, WORKER_ID; END IF;  IF (@@master_info_repository = \'TABLE\') THEN SELECT \'Replication - Master Log Status\' AS \'The following output is:\'; SELECT Master_log_name, Master_log_pos FROM mysql.slave_master_info; END IF;  IF (@@relay_log_info_repository = \'TABLE\') THEN SELECT \'Replication - Relay Log Status\' AS \'The following output is:\'; SELECT sys.format_path(Relay_log_name) AS Relay_log_name, Relay_log_pos, Master_log_name, Master_log_pos FROM mysql.slave_relay_log_info;  SELECT \'Replication - Worker Status\' AS \'The following output is:\'; SELECT Id, sys.format_path(Relay_log_name) AS Relay_log_name, Relay_log_pos, Master_log_name, Master_log_pos, sys.format_path(Checkpoint_relay_log_name) AS Checkpoint_relay_log_name, Checkpoint_relay_log_pos, Checkpoint_master_log_name, Checkpoint_master_log_pos, Checkpoint_seqno, Checkpoint_group_size, HEX(Checkpoint_group_bitmap) AS Checkpoint_group_bitmap , Channel_name FROM mysql.slave_worker_info ORDER BY  Channel_name, Id; END IF; END IF;  SET v_table_name = CONCAT(\'tmp_metrics_\', v_output_count); CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS \', v_table_name));  CALL sys.execute_prepared_stmt(CONCAT(\'CREATE TEMPORARY TABLE \', v_table_name, \' ( Variable_name VARCHAR(193) NOT NULL, Variable_value VARCHAR(1024), Type VARCHAR(225) NOT NULL, Enabled ENUM(\'\'YES\'\', \'\'NO\'\', \'\'PARTIAL\'\') NOT NULL, PRIMARY KEY (Type, Variable_name) ) ENGINE = InnoDB DEFAULT CHARSET=utf8\'));  IF (v_has_metrics) THEN SET @sys.diagnostics.sql = CONCAT( \'INSERT INTO \', v_table_name, \' SELECT Variable_name, REPLACE(Variable_value, \'\'\\n\'\', \'\'\\\\\\\\n\'\') AS Variable_value, Type, Enabled FROM sys.metrics\' ); ELSE SET @sys.diagnostics.sql = CONCAT( \'INSERT INTO \', v_table_name, \'(SELECT LOWER(VARIABLE_NAME) AS Variable_name, REPLACE(VARIABLE_VALUE, \'\'\\n\'\', \'\'\\\\\\\\n\'\') AS Variable_value, \'\'Global Status\'\' AS Type, \'\'YES\'\' AS Enabled FROM performance_schema.global_status ) UNION ALL ( SELECT NAME AS Variable_name, COUNT AS Variable_value, CONCAT(\'\'InnoDB Metrics - \'\', SUBSYSTEM) AS Type, IF(STATUS = \'\'enabled\'\', \'\'YES\'\', \'\'NO\'\') AS Enabled FROM information_schema.INNODB_METRICS WHERE NAME NOT IN ( \'\'lock_row_lock_time\'\', \'\'lock_row_lock_time_avg\'\', \'\'lock_row_lock_time_max\'\', \'\'lock_row_lock_waits\'\', \'\'buffer_pool_reads\'\', \'\'buffer_pool_read_requests\'\', \'\'buffer_pool_write_requests\'\', \'\'buffer_pool_wait_free\'\', \'\'buffer_pool_read_ahead\'\', \'\'buffer_pool_read_ahead_evicted\'\', \'\'buffer_pool_pages_total\'\', \'\'buffer_pool_pages_misc\'\', \'\'buffer_pool_pages_data\'\', \'\'buffer_pool_bytes_data\'\', \'\'buffer_pool_pages_dirty\'\', \'\'buffer_pool_bytes_dirty\'\', \'\'buffer_pool_pages_free\'\', \'\'buffer_pages_created\'\', \'\'buffer_pages_written\'\', \'\'buffer_pages_read\'\', \'\'buffer_data_reads\'\', \'\'buffer_data_written\'\', \'\'file_num_open_files\'\', \'\'os_log_bytes_written\'\', \'\'os_log_fsyncs\'\', \'\'os_log_pending_fsyncs\'\', \'\'os_log_pending_writes\'\', \'\'log_waits\'\', \'\'log_write_requests\'\', \'\'log_writes\'\', \'\'innodb_dblwr_writes\'\', \'\'innodb_dblwr_pages_written\'\', \'\'innodb_page_size\'\') ) UNION ALL ( SELECT \'\'NOW()\'\' AS Variable_name, NOW(3) AS Variable_value, \'\'System Time\'\' AS Type, \'\'YES\'\' AS Enabled ) UNION ALL ( SELECT \'\'UNIX_TIMESTAMP()\'\' AS Variable_name, ROUND(UNIX_TIMESTAMP(NOW(3)), 3) AS Variable_value, \'\'System Time\'\' AS Type, \'\'YES\'\' AS Enabled ) ORDER BY Type, Variable_name;\' ); END IF; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql);  CALL sys.execute_prepared_stmt( CONCAT(\'(SELECT Variable_value INTO @sys.diagnostics.output_time FROM \', v_table_name, \' WHERE Type = \'\'System Time\'\' AND Variable_name = \'\'UNIX_TIMESTAMP()\'\')\') ); SET v_output_time = @sys.diagnostics.output_time;  SET v_sql_status_summary_select = CONCAT(v_sql_status_summary_select, \', CONCAT( LEFT(s\', v_output_count, \'.Variable_value, \', v_status_summary_width, \'), IF(\', REPLACE(v_no_delta_names, \'%{COUNT}\', v_output_count), \' AND s\', v_output_count, \'.Variable_value REGEXP \'\'^[0-9]+(\\\\\\\\.[0-9]+)?$\'\', CONCAT(\'\' (\'\', ROUND(s\', v_output_count, \'.Variable_value/\', v_output_time, \', 2), \'\'/sec)\'\'), \'\'\'\') ) AS \'\'Output \', v_output_count, \'\'\'\'), v_sql_status_summary_from   = CONCAT(v_sql_status_summary_from, \' \', IF(v_output_count = 1, \'  FROM \', \'       INNER JOIN \'), v_table_name, \' s\', v_output_count, IF (v_output_count = 1, \'\', \' USING (Type, Variable_name)\')); IF (v_output_count > 1) THEN SET v_sql_status_summary_delta  = CONCAT(v_sql_status_summary_delta, \', IF(\', REPLACE(v_no_delta_names, \'%{COUNT}\', v_output_count), \' AND s\', (v_output_count-1), \'.Variable_value REGEXP \'\'^[0-9]+(\\\\\\\\.[0-9]+)?$\'\' AND s\', v_output_count, \'.Variable_value REGEXP \'\'^[0-9]+(\\\\\\\\.[0-9]+)?$\'\', CONCAT(IF(s\', (v_output_count-1), \'.Variable_value REGEXP \'\'^[0-9]+\\\\\\\\.[0-9]+$\'\' OR s\', v_output_count, \'.Variable_value REGEXP \'\'^[0-9]+\\\\\\\\.[0-9]+$\'\', ROUND((s\', v_output_count, \'.Variable_value-s\', (v_output_count-1), \'.Variable_value), 2), (s\', v_output_count, \'.Variable_value-s\', (v_output_count-1), \'.Variable_value) ), \'\' (\'\', ROUND((s\', v_output_count, \'.Variable_value-s\', (v_output_count-1), \'.Variable_value)/(\', v_output_time, \'-\', v_output_time_prev, \'), 2), \'\'/sec)\'\' ), \'\'\'\' ) AS \'\'Delta (\', (v_output_count-1), \' -> \', v_output_count, \')\'\'\'); END IF;  SET v_output_time_prev = v_output_time;  IF (@sys.diagnostics.include_raw = \'ON\') THEN IF (v_has_metrics) THEN SELECT \'SELECT * FROM sys.metrics\' AS \'The following output is:\'; ELSE SELECT \'sys.metrics equivalent\' AS \'The following output is:\'; END IF; CALL sys.execute_prepared_stmt(CONCAT(\'SELECT Type, Variable_name, Enabled, Variable_value FROM \', v_table_name, \' ORDER BY Type, Variable_name\')); END IF;  IF (v_has_innodb IN (\'DEFAULT\', \'YES\')) THEN SELECT \'SHOW ENGINE INNODB STATUS\' AS \'The following output is:\'; EXECUTE stmt_innodb_status; SELECT \'InnoDB - Transactions\' AS \'The following output is:\'; SELECT * FROM information_schema.INNODB_TRX; END IF;  IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN SELECT \'SHOW ENGINE NDBCLUSTER STATUS\' AS \'The following output is:\'; EXECUTE stmt_ndbcluster_status;  SELECT \'ndbinfo.memoryusage\' AS \'The following output is:\'; SELECT node_id, memory_type, sys.format_bytes(used) AS used, used_pages, sys.format_bytes(total) AS total, total_pages, ROUND(100*(used/total), 2) AS \'Used %\' FROM ndbinfo.memoryusage;  SET v_done = FALSE; OPEN c_ndbinfo; c_ndbinfo_loop: LOOP FETCH c_ndbinfo INTO v_table_name; IF v_done THEN LEAVE c_ndbinfo_loop; END IF;  SELECT CONCAT(\'SELECT * FROM ndbinfo.\', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(CONCAT(\'SELECT * FROM `ndbinfo`.`\', v_table_name, \'`\')); END LOOP; CLOSE c_ndbinfo;  SELECT * FROM information_schema.FILES; END IF;  SELECT \'SELECT * FROM sys.processlist\' AS \'The following output is:\'; SELECT processlist.* FROM sys.processlist;  IF (v_has_ps = \'YES\') THEN IF (sys.ps_is_consumer_enabled(\'events_waits_history_long\') = \'YES\') THEN SELECT \'SELECT * FROM sys.latest_file_io\' AS \'The following output is:\'; SELECT * FROM sys.latest_file_io; END IF;  IF (EXISTS(SELECT 1 FROM performance_schema.setup_instruments WHERE NAME LIKE \'memory/%\' AND ENABLED = \'YES\')) THEN SELECT \'SELECT * FROM sys.memory_by_host_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_by_host_by_current_bytes;  SELECT \'SELECT * FROM sys.memory_by_thread_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_by_thread_by_current_bytes;  SELECT \'SELECT * FROM sys.memory_by_user_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_by_user_by_current_bytes;  SELECT \'SELECT * FROM sys.memory_global_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_global_by_current_bytes; END IF; END IF;  SET v_runtime = (UNIX_TIMESTAMP(NOW(2)) - v_start); UNTIL (v_runtime + in_interval >= in_max_runtime) END REPEAT;  IF (v_has_ps = \'YES\') THEN SELECT \'SHOW ENGINE PERFORMANCE_SCHEMA STATUS\' AS \'The following output is:\'; EXECUTE stmt_ps_status; END IF;  IF (v_has_innodb IN (\'DEFAULT\', \'YES\')) THEN DEALLOCATE PREPARE stmt_innodb_status; END IF; IF (v_has_ps = \'YES\') THEN DEALLOCATE PREPARE stmt_ps_status; END IF; IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN DEALLOCATE PREPARE stmt_ndbcluster_status; END IF;   SELECT \'  ============================  Schema Information  ============================  \' AS \'\';  SELECT COUNT(*) AS \'Total Number of Tables\' FROM information_schema.TABLES;  IF (@sys.diagnostics.allow_i_s_tables = \'ON\') THEN SELECT \'Storage Engine Usage\' AS \'The following output is:\'; SELECT ENGINE, COUNT(*) AS NUM_TABLES, sys.format_bytes(SUM(DATA_LENGTH)) AS DATA_LENGTH, sys.format_bytes(SUM(INDEX_LENGTH)) AS INDEX_LENGTH, sys.format_bytes(SUM(DATA_LENGTH+INDEX_LENGTH)) AS TOTAL FROM information_schema.TABLES GROUP BY ENGINE;  SELECT \'Schema Object Overview\' AS \'The following output is:\'; SELECT * FROM sys.schema_object_overview;  SELECT \'Tables without a PRIMARY KEY\' AS \'The following output is:\'; SELECT TABLES.TABLE_SCHEMA, ENGINE, COUNT(*) AS NumTables FROM information_schema.TABLES LEFT OUTER JOIN information_schema.STATISTICS ON STATISTICS.TABLE_SCHEMA = TABLES.TABLE_SCHEMA AND STATISTICS.TABLE_NAME = TABLES.TABLE_NAME AND STATISTICS.INDEX_NAME = \'PRIMARY\' WHERE STATISTICS.TABLE_NAME IS NULL AND TABLES.TABLE_SCHEMA NOT IN (\'mysql\', \'information_schema\', \'performance_schema\', \'sys\') AND TABLES.TABLE_TYPE = \'BASE TABLE\' GROUP BY TABLES.TABLE_SCHEMA, ENGINE; END IF;  IF (v_has_ps = \'YES\') THEN SELECT \'Unused Indexes\' AS \'The following output is:\'; SELECT object_schema, COUNT(*) AS NumUnusedIndexes FROM performance_schema.table_io_waits_summary_by_index_usage  WHERE index_name IS NOT NULL AND count_star = 0 AND object_schema NOT IN (\'mysql\', \'sys\') AND index_name != \'PRIMARY\' GROUP BY object_schema; END IF;  IF (v_has_ps = \'YES\') THEN SELECT \'  =========================  Overall Status  =========================  \' AS \'\';  SELECT \'CALL sys.ps_statement_avg_latency_histogram()\' AS \'The following output is:\'; CALL sys.ps_statement_avg_latency_histogram();  CALL sys.statement_performance_analyzer(\'snapshot\', NULL, NULL); CALL sys.statement_performance_analyzer(\'overall\', NULL, \'with_runtimes_in_95th_percentile\');  SET @sys.diagnostics.sql = REPLACE(@sys.diagnostics.sql_gen_query_template, \'%{OUTPUT}\', \'end\'); IF (@sys.debug = \'ON\') THEN SELECT \'The following query will be used to generate the query for each sys view\' AS \'Debug\'; SELECT @sys.diagnostics.sql AS \'Debug\'; END IF; PREPARE stmt_gen_query FROM @sys.diagnostics.sql;  SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'The following queries are for storing the final content of \', v_table_name) AS \'Debug\'; END IF;  CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS `tmp_\', v_table_name, \'_end`\')); CALL sys.execute_prepared_stmt(CONCAT(\'CREATE TEMPORARY TABLE `tmp_\', v_table_name, \'_end` SELECT * FROM `sys`.`x$\', v_table_name, \'`\'));  IF (@sys.diagnostics.include_raw = \'ON\') THEN SET @sys.diagnostics.table_name = CONCAT(\'x$\', v_table_name); EXECUTE stmt_gen_query USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(order_by IS NOT NULL, CONCAT(\'\\n ORDER BY \', REPLACE(order_by, \'%{TABLE}\', CONCAT(\'tmp_\', v_table_name, \'_end\'))), \'\'), IF(limit_rows IS NOT NULL, CONCAT(\'\\n LIMIT \', limit_rows), \'\') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name; SELECT CONCAT(\'Overall \', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select); END IF; END LOOP; CLOSE c_sysviews_w_delta;  DEALLOCATE PREPARE stmt_gen_query;   SELECT \'  ======================  Delta Status  ======================  \' AS \'\';  CALL sys.statement_performance_analyzer(\'delta\', \'tmp_digests_start\', \'with_runtimes_in_95th_percentile\'); CALL sys.statement_performance_analyzer(\'cleanup\', NULL, NULL);  DROP TEMPORARY TABLE tmp_digests_start;  IF (@sys.debug = \'ON\') THEN SELECT \'The following query will be used to generate the query for each sys view delta\' AS \'Debug\'; SELECT @sys.diagnostics.sql_gen_query_delta AS \'Debug\'; END IF; PREPARE stmt_gen_query_delta FROM @sys.diagnostics.sql_gen_query_delta;  SET v_old_group_concat_max_len = @@session.group_concat_max_len; SET @@session.group_concat_max_len = 2048; SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  SET @sys.diagnostics.table_name = v_table_name; EXECUTE stmt_gen_query_delta USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(where_delta IS NOT NULL, CONCAT(\'\\n WHERE \', where_delta), \'\'), IF(order_by_delta IS NOT NULL, CONCAT(\'\\n ORDER BY \', order_by_delta), \'\'), IF(limit_rows IS NOT NULL, CONCAT(\'\\n LIMIT \', limit_rows), \'\') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name;  SELECT CONCAT(\'Delta \', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select);  CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE `tmp_\', v_table_name, \'_end`\')); CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE `tmp_\', v_table_name, \'_start`\')); END LOOP; CLOSE c_sysviews_w_delta; SET @@session.group_concat_max_len = v_old_group_concat_max_len;  DEALLOCATE PREPARE stmt_gen_query_delta; DROP TEMPORARY TABLE tmp_sys_views_delta; END IF;  IF (v_has_metrics) THEN SELECT \'SELECT * FROM sys.metrics\' AS \'The following output is:\'; ELSE SELECT \'sys.metrics equivalent\' AS \'The following output is:\'; END IF; CALL sys.execute_prepared_stmt( CONCAT(v_sql_status_summary_select, v_sql_status_summary_delta, \', Type, s1.Enabled\', v_sql_status_summary_from, \' ORDER BY Type, Variable_name\' ) );  SET v_count = 0; WHILE (v_count < v_output_count) DO SET v_count = v_count + 1; SET v_table_name = CONCAT(\'tmp_metrics_\', v_count); CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS \', v_table_name)); END WHILE;  IF (in_auto_config <> \'current\') THEN CALL sys.ps_setup_reload_saved(); SET sql_log_bin = @log_bin; END IF;  SET @sys.diagnostics.output_time            = NULL, @sys.diagnostics.sql                    = NULL, @sys.diagnostics.sql_gen_query_delta    = NULL, @sys.diagnostics.sql_gen_query_template = NULL, @sys.diagnostics.sql_select             = NULL, @sys.diagnostics.table_name             = NULL;  IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  IF (@log_bin = 1) THEN SET sql_log_bin = @log_bin; END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Create a report of the current status of the server for diagnostics purposes. Data collected includes (some items depends on versions and settings):\n \n * The GLOBAL VARIABLES\n * Several sys schema views including metrics or equivalent (depending on version and settings)\n * Queries in the 95th percentile\n * Several ndbinfo views for MySQL Cluster\n * Replication (both master and slave) information.\n \n Some of the sys schema views are calculated as initial (optional), overall, delta:\n \n * The initial view is the content of the view at the start of this procedure.\n This output will be the same as the the start values used for the delta view.\n The initial view is included if @sys.diagnostics.include_raw = \'ON\'.\n * The overall view is the content of the view at the end of this procedure.\n This output is the same as the end values used for the delta view.\n The overall view is always included.\n * The delta view is the difference from the beginning to the end. Note that for min and max values\n they are simply the min or max value from the end view respectively, so does not necessarily reflect\n the minimum/maximum value in the monitored period.\n Note: except for the metrics views the delta is only calculation between the first and last outputs.\n \n Requires the SUPER privilege for \"SET sql_log_bin = 0;\".\n \n Versions supported:\n * MySQL 5.6: 5.6.10 and later\n * MySQL 5.7: 5.7.9 and later\n \n Parameters\n \n in_max_runtime (INT UNSIGNED):\n The maximum time to keep collecting data.\n Use NULL to get the default which is 60 seconds, otherwise enter a value greater than 0.\n in_interval (INT UNSIGNED):\n How long to sleep between data collections.\n Use NULL to get the default which is 30 seconds, otherwise enter a value greater than 0.\n in_auto_config (ENUM(\'current\', \'medium\', \'full\'))\n Automatically enable Performance Schema instruments and consumers.\n NOTE: The more that are enabled, the more impact on the performance.\n Supported values are:\n * current - use the current settings.\n * medium - enable some settings.\n * full - enables all settings. This will have a big impact on the\n performance - be careful using this option.\n If another setting the \'current\' is chosen, the current settings\n are restored at the end of the procedure.\n \n \n Configuration Options\n \n sys.diagnostics.allow_i_s_tables\n Specifies whether it is allowed to do table scan queries on information_schema.TABLES. This can be expensive if there\n are many tables. Set to \'ON\' to allow, \'OFF\' to not allow.\n Default is \'OFF\'.\n \n sys.diagnostics.include_raw\n Set to \'ON\' to include the raw data (e.g. the original output of \"SELECT * FROM sys.metrics\").\n Use this to get the initial values of the various views.\n Default is \'OFF\'.\n \n sys.statement_truncate_len\n How much of queries in the process list output to include.\n Default is 64.\n \n sys.debug\n Whether to provide debugging output.\n Default is \'OFF\'. Set to \'ON\' to include.\n \n \n Example\n \n To create a report and append it to the file diag.out:\n \n mysql> TEE diag.out;\n mysql> CALL sys.diagnostics(120, 30, \'current\');\n ...\n mysql> NOTEE;\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_start, v_runtime, v_iter_start, v_sleep DECIMAL(20,2) DEFAULT 0.0; DECLARE v_has_innodb, v_has_ndb, v_has_ps, v_has_replication, v_has_ps_replication VARCHAR(8) CHARSET utf8 DEFAULT \'NO\'; DECLARE v_this_thread_enabled, v_has_ps_vars, v_has_metrics ENUM(\'YES\', \'NO\'); DECLARE v_table_name, v_banner VARCHAR(64) CHARSET utf8; DECLARE v_sql_status_summary_select, v_sql_status_summary_delta, v_sql_status_summary_from, v_no_delta_names TEXT; DECLARE v_output_time, v_output_time_prev DECIMAL(20,3) UNSIGNED; DECLARE v_output_count, v_count, v_old_group_concat_max_len INT UNSIGNED DEFAULT 0; DECLARE v_status_summary_width TINYINT UNSIGNED DEFAULT 50; DECLARE v_done BOOLEAN DEFAULT FALSE; DECLARE c_ndbinfo CURSOR FOR SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = \'ndbinfo\' AND TABLE_NAME NOT IN ( \'blocks\', \'config_params\', \'dict_obj_types\', \'disk_write_speed_base\', \'memory_per_fragment\', \'memoryusage\', \'operations_per_fragment\', \'threadblocks\' ); DECLARE c_sysviews_w_delta CURSOR FOR SELECT table_name FROM tmp_sys_views_delta ORDER BY table_name;  DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SELECT INSTRUMENTED INTO v_this_thread_enabled FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_disable_thread(CONNECTION_ID()); END IF;  IF (in_max_runtime < in_interval) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'in_max_runtime must be greater than or equal to in_interval\'; END IF; IF (in_max_runtime = 0) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'in_max_runtime must be greater than 0\'; END IF; IF (in_interval = 0) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'in_interval must be greater than 0\'; END IF;  IF (@sys.diagnostics.allow_i_s_tables IS NULL) THEN SET @sys.diagnostics.allow_i_s_tables = sys.sys_get_config(\'diagnostics.allow_i_s_tables\', \'OFF\'); END IF; IF (@sys.diagnostics.include_raw IS NULL) THEN SET @sys.diagnostics.include_raw      = sys.sys_get_config(\'diagnostics.include_raw\'     , \'OFF\'); END IF; IF (@sys.debug IS NULL) THEN SET @sys.debug                        = sys.sys_get_config(\'debug\'                       , \'OFF\'); END IF; IF (@sys.statement_truncate_len IS NULL) THEN SET @sys.statement_truncate_len       = sys.sys_get_config(\'statement_truncate_len\'      , \'64\' ); END IF;  SET @log_bin := @@sql_log_bin; IF (@log_bin = 1) THEN SET sql_log_bin = 0; END IF;  SET v_no_delta_names = CONCAT(\'s%{COUNT}.Variable_name NOT IN (\', \'\'innodb_buffer_pool_pages_total\', \', \'\'innodb_page_size\', \', \'\'last_query_cost\', \', \'\'last_query_partial_plans\', \', \'\'qcache_total_blocks\', \', \'\'slave_last_heartbeat\', \', \'\'ssl_ctx_verify_depth\', \', \'\'ssl_ctx_verify_mode\', \', \'\'ssl_session_cache_size\', \', \'\'ssl_verify_depth\', \', \'\'ssl_verify_mode\', \', \'\'ssl_version\', \', \'\'buffer_flush_lsn_avg_rate\', \', \'\'buffer_flush_pct_for_dirty\', \', \'\'buffer_flush_pct_for_lsn\', \', \'\'buffer_pool_pages_total\', \', \'\'lock_row_lock_time_avg\', \', \'\'lock_row_lock_time_max\', \', \'\'innodb_page_size\'\', \')\');  IF (in_auto_config <> \'current\') THEN IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'Updating Performance Schema configuration to \', in_auto_config) AS \'Debug\'; END IF; CALL sys.ps_setup_save(0);  IF (in_auto_config = \'medium\') THEN UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\' WHERE NAME NOT LIKE \'%\\_history%\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\' WHERE NAME NOT LIKE \'wait/synch/%\'; ELSEIF (in_auto_config = \'full\') THEN UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\'; END IF;  UPDATE performance_schema.threads SET INSTRUMENTED = \'YES\' WHERE PROCESSLIST_ID <> CONNECTION_ID(); END IF;  SET v_start        = UNIX_TIMESTAMP(NOW(2)), in_interval    = IFNULL(in_interval, 30), in_max_runtime = IFNULL(in_max_runtime, 60);  SET v_banner = REPEAT( \'-\', LEAST( GREATEST( 36, CHAR_LENGTH(VERSION()), CHAR_LENGTH(@@global.version_comment), CHAR_LENGTH(@@global.version_compile_os), CHAR_LENGTH(@@global.version_compile_machine), CHAR_LENGTH(@@global.socket), CHAR_LENGTH(@@global.datadir) ), 64 ) ); SELECT \'Hostname\' AS \'Name\', @@global.hostname AS \'Value\' UNION ALL SELECT \'Port\' AS \'Name\', @@global.port AS \'Value\' UNION ALL SELECT \'Socket\' AS \'Name\', @@global.socket AS \'Value\' UNION ALL SELECT \'Datadir\' AS \'Name\', @@global.datadir AS \'Value\' UNION ALL SELECT \'Server UUID\' AS \'Name\', @@global.server_uuid AS \'Value\' UNION ALL SELECT REPEAT(\'-\', 23) AS \'Name\', v_banner AS \'Value\' UNION ALL SELECT \'MySQL Version\' AS \'Name\', VERSION() AS \'Value\' UNION ALL SELECT \'Sys Schema Version\' AS \'Name\', (SELECT sys_version FROM sys.version) AS \'Value\' UNION ALL SELECT \'Version Comment\' AS \'Name\', @@global.version_comment AS \'Value\' UNION ALL SELECT \'Version Compile OS\' AS \'Name\', @@global.version_compile_os AS \'Value\' UNION ALL SELECT \'Version Compile Machine\' AS \'Name\', @@global.version_compile_machine AS \'Value\' UNION ALL SELECT REPEAT(\'-\', 23) AS \'Name\', v_banner AS \'Value\' UNION ALL SELECT \'UTC Time\' AS \'Name\', UTC_TIMESTAMP() AS \'Value\' UNION ALL SELECT \'Local Time\' AS \'Name\', NOW() AS \'Value\' UNION ALL SELECT \'Time Zone\' AS \'Name\', @@global.time_zone AS \'Value\' UNION ALL SELECT \'System Time Zone\' AS \'Name\', @@global.system_time_zone AS \'Value\' UNION ALL SELECT \'Time Zone Offset\' AS \'Name\', TIMEDIFF(NOW(), UTC_TIMESTAMP()) AS \'Value\';  SET v_has_innodb         = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = \'InnoDB\'), \'NO\'), v_has_ndb            = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = \'NDBCluster\'), \'NO\'), v_has_ps             = IFNULL((SELECT SUPPORT FROM information_schema.ENGINES WHERE ENGINE = \'PERFORMANCE_SCHEMA\'), \'NO\'), v_has_ps_replication = IF(v_has_ps = \'YES\' AND EXISTS(SELECT 1 FROM information_schema.TABLES WHERE TABLE_SCHEMA = \'performance_schema\' AND TABLE_NAME = \'replication_applier_status\'), \'YES\', \'NO\' ), v_has_replication    =  IF(v_has_ps_replication = \'YES\', IF((SELECT COUNT(*) FROM performance_schema.replication_connection_status) > 0, \'YES\', \'NO\'), IF(@@master_info_repository = \'TABLE\', IF((SELECT COUNT(*) FROM mysql.slave_master_info) > 0, \'YES\', \'NO\'), IF(@@relay_log_info_repository = \'TABLE\', IF((SELECT COUNT(*) FROM mysql.slave_relay_log_info) > 0, \'YES\', \'NO\'), \'MAYBE\')) ) , v_has_metrics        = IF(v_has_ps = \'YES\' OR (sys.version_major() = 5 AND sys.version_minor() = 6), \'YES\', \'NO\'), v_has_ps_vars        = \'NO\';   SET v_has_ps_vars = IF(@@global.show_compatibility_56, \'NO\', \'YES\');  SET v_has_ps_vars = \'YES\';  IF (@sys.debug = \'ON\') THEN SELECT v_has_innodb AS \'Has_InnoDB\', v_has_ndb AS \'Has_NDBCluster\', v_has_ps AS \'Has_Performance_Schema\', v_has_ps_vars AS \'Has_P_S_SHOW_Variables\', v_has_metrics AS \'Has_metrics\', v_has_ps_replication \'AS Has_P_S_Replication\', v_has_replication AS \'Has_Replication\'; END IF;  IF (v_has_innodb IN (\'DEFAULT\', \'YES\')) THEN SET @sys.diagnostics.sql = \'SHOW ENGINE InnoDB STATUS\'; PREPARE stmt_innodb_status FROM @sys.diagnostics.sql; END IF;  IF (v_has_ps = \'YES\') THEN SET @sys.diagnostics.sql = \'SHOW ENGINE PERFORMANCE_SCHEMA STATUS\'; PREPARE stmt_ps_status FROM @sys.diagnostics.sql; END IF;  IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN SET @sys.diagnostics.sql = \'SHOW ENGINE NDBCLUSTER STATUS\'; PREPARE stmt_ndbcluster_status FROM @sys.diagnostics.sql; END IF;  SET @sys.diagnostics.sql_gen_query_template = \'SELECT CONCAT( \'SELECT \', GROUP_CONCAT( CASE WHEN (SUBSTRING(TABLE_NAME, 3), COLUMN_NAME) IN ( (\'io_global_by_file_by_bytes\', \'total\'), (\'io_global_by_wait_by_bytes\', \'total_requested\') ) THEN CONCAT(\'sys.format_bytes(\', COLUMN_NAME, \') AS \', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -8) = \'_latency\' THEN CONCAT(\'sys.format_time(\', COLUMN_NAME, \') AS \', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -7) = \'_memory\' OR SUBSTRING(COLUMN_NAME, -17) = \'_memory_allocated\' OR ((SUBSTRING(COLUMN_NAME, -5) = \'_read\' OR SUBSTRING(COLUMN_NAME, -8) = \'_written\' OR SUBSTRING(COLUMN_NAME, -6) = \'_write\') AND SUBSTRING(COLUMN_NAME, 1, 6) <> \'COUNT_\') THEN CONCAT(\'sys.format_bytes(\', COLUMN_NAME, \') AS \', COLUMN_NAME) ELSE COLUMN_NAME END ORDER BY ORDINAL_POSITION SEPARATOR \',\n       \' ), \'\n  FROM tmp_\', SUBSTRING(TABLE_NAME FROM 3), \'_%{OUTPUT}\' ) AS Query INTO @sys.diagnostics.sql_select FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = \'sys\' AND TABLE_NAME = ? GROUP BY TABLE_NAME\';  SET @sys.diagnostics.sql_gen_query_delta = \'SELECT CONCAT( \'SELECT \', GROUP_CONCAT( CASE WHEN FIND_IN_SET(COLUMN_NAME, diag.pk) THEN COLUMN_NAME WHEN diag.TABLE_NAME = \'io_global_by_file_by_bytes\' AND COLUMN_NAME = \'write_pct\' THEN CONCAT(\'IFNULL(ROUND(100-(((e.total_read-IFNULL(s.total_read, 0))\', \'/NULLIF(((e.total_read-IFNULL(s.total_read, 0))+(e.total_written-IFNULL(s.total_written, 0))), 0))*100), 2), 0.00) AS \', COLUMN_NAME) WHEN (diag.TABLE_NAME, COLUMN_NAME) IN ( (\'io_global_by_file_by_bytes\', \'total\'), (\'io_global_by_wait_by_bytes\', \'total_requested\') ) THEN CONCAT(\'sys.format_bytes(e.\', COLUMN_NAME, \'-IFNULL(s.\', COLUMN_NAME, \', 0)) AS \', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, 1, 4) IN (\'max_\', \'min_\') AND SUBSTRING(COLUMN_NAME, -8) = \'_latency\' THEN CONCAT(\'sys.format_time(e.\', COLUMN_NAME, \') AS \', COLUMN_NAME) WHEN COLUMN_NAME = \'avg_latency\' THEN CONCAT(\'sys.format_time((e.total_latency - IFNULL(s.total_latency, 0))\', \'/NULLIF(e.total - IFNULL(s.total, 0), 0)) AS \', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -12) = \'_avg_latency\' THEN CONCAT(\'sys.format_time((e.\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'_latency - IFNULL(s.\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'_latency, 0))\', \'/NULLIF(e.\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'s - IFNULL(s.\', SUBSTRING(COLUMN_NAME FROM 1 FOR CHAR_LENGTH(COLUMN_NAME)-12), \'s, 0), 0)) AS \', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -8) = \'_latency\' THEN CONCAT(\'sys.format_time(e.\', COLUMN_NAME, \' - IFNULL(s.\', COLUMN_NAME, \', 0)) AS \', COLUMN_NAME) WHEN COLUMN_NAME IN (\'avg_read\', \'avg_write\', \'avg_written\') THEN CONCAT(\'sys.format_bytes(IFNULL((e.total_\', IF(COLUMN_NAME = \'avg_read\', \'read\', \'written\'), \'-IFNULL(s.total_\', IF(COLUMN_NAME = \'avg_read\', \'read\', \'written\'), \', 0))\', \'/NULLIF(e.count_\', IF(COLUMN_NAME = \'avg_read\', \'read\', \'write\'), \'-IFNULL(s.count_\', IF(COLUMN_NAME = \'avg_read\', \'read\', \'write\'), \', 0), 0), 0)) AS \', COLUMN_NAME) WHEN SUBSTRING(COLUMN_NAME, -7) = \'_memory\' OR SUBSTRING(COLUMN_NAME, -17) = \'_memory_allocated\' OR ((SUBSTRING(COLUMN_NAME, -5) = \'_read\' OR SUBSTRING(COLUMN_NAME, -8) = \'_written\' OR SUBSTRING(COLUMN_NAME, -6) = \'_write\') AND SUBSTRING(COLUMN_NAME, 1, 6) <> \'COUNT_\') THEN CONCAT(\'sys.format_bytes(e.\', COLUMN_NAME, \' - IFNULL(s.\', COLUMN_NAME, \', 0)) AS \', COLUMN_NAME) ELSE CONCAT(\'(e.\', COLUMN_NAME, \' - IFNULL(s.\', COLUMN_NAME, \', 0)) AS \', COLUMN_NAME) END ORDER BY ORDINAL_POSITION SEPARATOR \',\n       \' ), \'\n  FROM tmp_\', diag.TABLE_NAME, \'_end e LEFT OUTER JOIN tmp_\', diag.TABLE_NAME, \'_start s USING (\', diag.pk, \')\' ) AS Query INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta diag INNER JOIN information_schema.COLUMNS c ON c.TABLE_NAME = CONCAT(\'x$\', diag.TABLE_NAME) WHERE c.TABLE_SCHEMA = \'sys\' AND diag.TABLE_NAME = ? GROUP BY diag.TABLE_NAME\';  IF (v_has_ps = \'YES\') THEN DROP TEMPORARY TABLE IF EXISTS tmp_sys_views_delta; CREATE TEMPORARY TABLE tmp_sys_views_delta ( TABLE_NAME varchar(64) NOT NULL, order_by text COMMENT \'ORDER BY clause for the initial and overall views\', order_by_delta text COMMENT \'ORDER BY clause for the delta views\', where_delta text COMMENT \'WHERE clause to use for delta views to only include rows with a \"count\" > 0\', limit_rows int unsigned COMMENT \'The maximum number of rows to include for the view\', pk varchar(128) COMMENT \'Used with the FIND_IN_SET() function so use comma separated list without whitespace\', PRIMARY KEY (TABLE_NAME) );  IF (@sys.debug = \'ON\') THEN SELECT \'Populating tmp_sys_views_delta\' AS \'Debug\'; END IF; INSERT INTO tmp_sys_views_delta VALUES (\'host_summary\'                       , \'%{TABLE}.statement_latency DESC\', \'(e.statement_latency-IFNULL(s.statement_latency, 0)) DESC\', \'(e.statements - IFNULL(s.statements, 0)) > 0\', NULL, \'host\'), (\'host_summary_by_file_io\'            , \'%{TABLE}.io_latency DESC\', \'(e.io_latency-IFNULL(s.io_latency, 0)) DESC\', \'(e.ios - IFNULL(s.ios, 0)) > 0\', NULL, \'host\'), (\'host_summary_by_file_io_type\'       , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,event_name\'), (\'host_summary_by_stages\'             , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,event_name\'), (\'host_summary_by_statement_latency\'  , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host\'), (\'host_summary_by_statement_type\'     , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,statement\'), (\'io_by_thread_by_latency\'            , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,thread_id,processlist_id\'), (\'io_global_by_file_by_bytes\'         , \'%{TABLE}.total DESC\', \'(e.total-IFNULL(s.total, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', 100, \'file\'), (\'io_global_by_file_by_latency\'       , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', 100, \'file\'), (\'io_global_by_wait_by_bytes\'         , \'%{TABLE}.total_requested DESC\', \'(e.total_requested-IFNULL(s.total_requested, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_name\'), (\'io_global_by_wait_by_latency\'       , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_name\'), (\'schema_index_statistics\'            , \'(%{TABLE}.select_latency+%{TABLE}.insert_latency+%{TABLE}.update_latency+%{TABLE}.delete_latency) DESC\', \'((e.select_latency+e.insert_latency+e.update_latency+e.delete_latency)-IFNULL(s.select_latency+s.insert_latency+s.update_latency+s.delete_latency, 0)) DESC\', \'((e.rows_selected+e.insert_latency+e.rows_updated+e.rows_deleted)-IFNULL(s.rows_selected+s.rows_inserted+s.rows_updated+s.rows_deleted, 0)) > 0\', 100, \'table_schema,table_name,index_name\'), (\'schema_table_statistics\'            , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) > 0\', 100, \'table_schema,table_name\'), (\'schema_tables_with_full_table_scans\', \'%{TABLE}.rows_full_scanned DESC\', \'(e.rows_full_scanned-IFNULL(s.rows_full_scanned, 0)) DESC\', \'(e.rows_full_scanned-IFNULL(s.rows_full_scanned, 0)) > 0\', 100, \'object_schema,object_name\'), (\'user_summary\'                       , \'%{TABLE}.statement_latency DESC\', \'(e.statement_latency-IFNULL(s.statement_latency, 0)) DESC\', \'(e.statements - IFNULL(s.statements, 0)) > 0\', NULL, \'user\'), (\'user_summary_by_file_io\'            , \'%{TABLE}.io_latency DESC\', \'(e.io_latency-IFNULL(s.io_latency, 0)) DESC\', \'(e.ios - IFNULL(s.ios, 0)) > 0\', NULL, \'user\'), (\'user_summary_by_file_io_type\'       , \'%{TABLE}.user, %{TABLE}.latency DESC\', \'e.user, (e.latency-IFNULL(s.latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,event_name\'), (\'user_summary_by_stages\'             , \'%{TABLE}.user, %{TABLE}.total_latency DESC\', \'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,event_name\'), (\'user_summary_by_statement_latency\'  , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user\'), (\'user_summary_by_statement_type\'     , \'%{TABLE}.user, %{TABLE}.total_latency DESC\', \'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,statement\'), (\'wait_classes_global_by_avg_latency\' , \'IFNULL(%{TABLE}.total_latency / NULLIF(%{TABLE}.total, 0), 0) DESC\', \'IFNULL((e.total_latency-IFNULL(s.total_latency, 0)) / NULLIF((e.total - IFNULL(s.total, 0)), 0), 0) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_class\'), (\'wait_classes_global_by_latency\'     , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'event_class\'), (\'waits_by_host_by_latency\'           , \'%{TABLE}.host, %{TABLE}.total_latency DESC\', \'e.host, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'host,event\'), (\'waits_by_user_by_latency\'           , \'%{TABLE}.user, %{TABLE}.total_latency DESC\', \'e.user, (e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'user,event\'), (\'waits_global_by_latency\'            , \'%{TABLE}.total_latency DESC\', \'(e.total_latency-IFNULL(s.total_latency, 0)) DESC\', \'(e.total - IFNULL(s.total, 0)) > 0\', NULL, \'events\') ; END IF;   SELECT \'  =======================  Configuration  =======================  \' AS \'\'; SELECT \'GLOBAL VARIABLES\' AS \'The following output is:\'; IF (v_has_ps_vars = \'YES\') THEN SELECT LOWER(VARIABLE_NAME) AS Variable_name, VARIABLE_VALUE AS Variable_value FROM performance_schema.global_variables ORDER BY VARIABLE_NAME; ELSE SELECT LOWER(VARIABLE_NAME) AS Variable_name, VARIABLE_VALUE AS Variable_value FROM information_schema.GLOBAL_VARIABLES ORDER BY VARIABLE_NAME; END IF;  IF (v_has_ps = \'YES\') THEN SELECT \'Performance Schema Setup - Actors\' AS \'The following output is:\'; SELECT * FROM performance_schema.setup_actors;  SELECT \'Performance Schema Setup - Consumers\' AS \'The following output is:\'; SELECT NAME AS Consumer, ENABLED, sys.ps_is_consumer_enabled(NAME) AS COLLECTS FROM performance_schema.setup_consumers;  SELECT \'Performance Schema Setup - Instruments\' AS \'The following output is:\'; SELECT SUBSTRING_INDEX(NAME, \'/\', 2) AS \'InstrumentClass\', ROUND(100*SUM(IF(ENABLED = \'YES\', 1, 0))/COUNT(*), 2) AS \'EnabledPct\', ROUND(100*SUM(IF(TIMED = \'YES\', 1, 0))/COUNT(*), 2) AS \'TimedPct\' FROM performance_schema.setup_instruments GROUP BY SUBSTRING_INDEX(NAME, \'/\', 2) ORDER BY SUBSTRING_INDEX(NAME, \'/\', 2);  SELECT \'Performance Schema Setup - Objects\' AS \'The following output is:\'; SELECT * FROM performance_schema.setup_objects;  SELECT \'Performance Schema Setup - Threads\' AS \'The following output is:\'; SELECT `TYPE` AS ThreadType, COUNT(*) AS \'Total\', ROUND(100*SUM(IF(INSTRUMENTED = \'YES\', 1, 0))/COUNT(*), 2) AS \'InstrumentedPct\' FROM performance_schema.threads GROUP BY TYPE; END IF;   IF (v_has_replication = \'NO\') THEN SELECT \'No Replication Configured\' AS \'Replication Status\'; ELSE SELECT CONCAT(\'Replication Configured: \', v_has_replication, \' - Performance Schema Replication Tables: \', v_has_ps_replication) AS \'Replication Status\';  IF (v_has_ps_replication = \'YES\') THEN SELECT \'Replication - Connection Configuration\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_connection_configuration ORDER BY CHANNEL_NAME ; END IF;  IF (v_has_ps_replication = \'YES\') THEN SELECT \'Replication - Applier Configuration\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_configuration ORDER BY CHANNEL_NAME; END IF;  IF (@@master_info_repository = \'TABLE\') THEN SELECT \'Replication - Master Info Repository Configuration\' AS \'The following output is:\'; SELECT  Channel_name, Host, User_name, Port, Connect_retry, Enabled_ssl, Ssl_ca, Ssl_capath, Ssl_cert, Ssl_cipher, Ssl_key, Ssl_verify_server_cert, Heartbeat, Bind, Ignored_server_ids, Uuid, Retry_count, Ssl_crl, Ssl_crlpath, Tls_version, Enabled_auto_position FROM mysql.slave_master_info ORDER BY Channel_name ; END IF;  IF (@@relay_log_info_repository = \'TABLE\') THEN SELECT \'Replication - Relay Log Repository Configuration\' AS \'The following output is:\'; SELECT  Channel_name, Sql_delay, Number_of_workers, Id FROM mysql.slave_relay_log_info ORDER BY Channel_name ; END IF; END IF;   IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN SELECT \'Cluster Thread Blocks\' AS \'The following output is:\'; SELECT * FROM ndbinfo.threadblocks; END IF;  IF (v_has_ps = \'YES\') THEN IF (@sys.diagnostics.include_raw = \'ON\') THEN SELECT \'  ========================  Initial Status  ========================  \' AS \'\'; END IF;  DROP TEMPORARY TABLE IF EXISTS tmp_digests_start; CALL sys.statement_performance_analyzer(\'create_tmp\', \'tmp_digests_start\', NULL); CALL sys.statement_performance_analyzer(\'snapshot\', NULL, NULL); CALL sys.statement_performance_analyzer(\'save\', \'tmp_digests_start\', NULL);  IF (@sys.diagnostics.include_raw = \'ON\') THEN SET @sys.diagnostics.sql = REPLACE(@sys.diagnostics.sql_gen_query_template, \'%{OUTPUT}\', \'start\'); IF (@sys.debug = \'ON\') THEN SELECT \'The following query will be used to generate the query for each sys view\' AS \'Debug\'; SELECT @sys.diagnostics.sql AS \'Debug\'; END IF; PREPARE stmt_gen_query FROM @sys.diagnostics.sql; END IF; SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'The following queries are for storing the initial content of \', v_table_name) AS \'Debug\'; END IF;  CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS `tmp_\', v_table_name, \'_start`\')); CALL sys.execute_prepared_stmt(CONCAT(\'CREATE TEMPORARY TABLE `tmp_\', v_table_name, \'_start` SELECT * FROM `sys`.`x$\', v_table_name, \'`\'));  IF (@sys.diagnostics.include_raw = \'ON\') THEN SET @sys.diagnostics.table_name = CONCAT(\'x$\', v_table_name); EXECUTE stmt_gen_query USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(order_by IS NOT NULL, CONCAT(\'\n ORDER BY \', REPLACE(order_by, \'%{TABLE}\', CONCAT(\'tmp_\', v_table_name, \'_start\'))), \'\'), IF(limit_rows IS NOT NULL, CONCAT(\'\n LIMIT \', limit_rows), \'\') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name; SELECT CONCAT(\'Initial \', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select); END IF; END LOOP; CLOSE c_sysviews_w_delta;  IF (@sys.diagnostics.include_raw = \'ON\') THEN DEALLOCATE PREPARE stmt_gen_query; END IF; END IF;  SET v_sql_status_summary_select = \'SELECT Variable_name\', v_sql_status_summary_delta  = \'\', v_sql_status_summary_from   = \'\';  REPEAT  SET v_output_count = v_output_count + 1; IF (v_output_count > 1) THEN SET v_sleep = in_interval-(UNIX_TIMESTAMP(NOW(2))-v_iter_start); SELECT NOW() AS \'Time\', CONCAT(\'Going to sleep for \', v_sleep, \' seconds. Please do not interrupt\') AS \'The following output is:\'; DO SLEEP(in_interval); END IF; SET v_iter_start = UNIX_TIMESTAMP(NOW(2));  SELECT NOW(), CONCAT(\'Iteration Number \', IFNULL(v_output_count, \'NULL\')) AS \'The following output is:\';  IF (@@log_bin = 1) THEN SELECT \'SHOW MASTER STATUS\' AS \'The following output is:\'; SHOW MASTER STATUS; END IF;  IF (v_has_replication <> \'NO\') THEN SELECT \'SHOW SLAVE STATUS\' AS \'The following output is:\'; SHOW SLAVE STATUS;  IF (v_has_ps_replication = \'YES\') THEN SELECT \'Replication Connection Status\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_connection_status;  SELECT \'Replication Applier Status\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_status ORDER BY CHANNEL_NAME;  SELECT \'Replication Applier Status - Coordinator\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_status_by_coordinator ORDER BY CHANNEL_NAME;  SELECT \'Replication Applier Status - Worker\' AS \'The following output is:\'; SELECT * FROM performance_schema.replication_applier_status_by_worker ORDER BY CHANNEL_NAME, WORKER_ID; END IF;  IF (@@master_info_repository = \'TABLE\') THEN SELECT \'Replication - Master Log Status\' AS \'The following output is:\'; SELECT Master_log_name, Master_log_pos FROM mysql.slave_master_info; END IF;  IF (@@relay_log_info_repository = \'TABLE\') THEN SELECT \'Replication - Relay Log Status\' AS \'The following output is:\'; SELECT sys.format_path(Relay_log_name) AS Relay_log_name, Relay_log_pos, Master_log_name, Master_log_pos FROM mysql.slave_relay_log_info;  SELECT \'Replication - Worker Status\' AS \'The following output is:\'; SELECT Id, sys.format_path(Relay_log_name) AS Relay_log_name, Relay_log_pos, Master_log_name, Master_log_pos, sys.format_path(Checkpoint_relay_log_name) AS Checkpoint_relay_log_name, Checkpoint_relay_log_pos, Checkpoint_master_log_name, Checkpoint_master_log_pos, Checkpoint_seqno, Checkpoint_group_size, HEX(Checkpoint_group_bitmap) AS Checkpoint_group_bitmap , Channel_name FROM mysql.slave_worker_info ORDER BY  Channel_name, Id; END IF; END IF;  SET v_table_name = CONCAT(\'tmp_metrics_\', v_output_count); CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS \', v_table_name));  CALL sys.execute_prepared_stmt(CONCAT(\'CREATE TEMPORARY TABLE \', v_table_name, \' ( Variable_name VARCHAR(193) NOT NULL, Variable_value VARCHAR(1024), Type VARCHAR(225) NOT NULL, Enabled ENUM(\'YES\', \'NO\', \'PARTIAL\') NOT NULL, PRIMARY KEY (Type, Variable_name) ) ENGINE = InnoDB DEFAULT CHARSET=utf8\'));  IF (v_has_metrics) THEN SET @sys.diagnostics.sql = CONCAT( \'INSERT INTO \', v_table_name, \' SELECT Variable_name, REPLACE(Variable_value, \'\n\', \'\\\\n\') AS Variable_value, Type, Enabled FROM sys.metrics\' ); ELSE SET @sys.diagnostics.sql = CONCAT( \'INSERT INTO \', v_table_name, \'(SELECT LOWER(VARIABLE_NAME) AS Variable_name, REPLACE(VARIABLE_VALUE, \'\n\', \'\\\\n\') AS Variable_value, \'Global Status\' AS Type, \'YES\' AS Enabled FROM performance_schema.global_status ) UNION ALL ( SELECT NAME AS Variable_name, COUNT AS Variable_value, CONCAT(\'InnoDB Metrics - \', SUBSYSTEM) AS Type, IF(STATUS = \'enabled\', \'YES\', \'NO\') AS Enabled FROM information_schema.INNODB_METRICS WHERE NAME NOT IN ( \'lock_row_lock_time\', \'lock_row_lock_time_avg\', \'lock_row_lock_time_max\', \'lock_row_lock_waits\', \'buffer_pool_reads\', \'buffer_pool_read_requests\', \'buffer_pool_write_requests\', \'buffer_pool_wait_free\', \'buffer_pool_read_ahead\', \'buffer_pool_read_ahead_evicted\', \'buffer_pool_pages_total\', \'buffer_pool_pages_misc\', \'buffer_pool_pages_data\', \'buffer_pool_bytes_data\', \'buffer_pool_pages_dirty\', \'buffer_pool_bytes_dirty\', \'buffer_pool_pages_free\', \'buffer_pages_created\', \'buffer_pages_written\', \'buffer_pages_read\', \'buffer_data_reads\', \'buffer_data_written\', \'file_num_open_files\', \'os_log_bytes_written\', \'os_log_fsyncs\', \'os_log_pending_fsyncs\', \'os_log_pending_writes\', \'log_waits\', \'log_write_requests\', \'log_writes\', \'innodb_dblwr_writes\', \'innodb_dblwr_pages_written\', \'innodb_page_size\') ) UNION ALL ( SELECT \'NOW()\' AS Variable_name, NOW(3) AS Variable_value, \'System Time\' AS Type, \'YES\' AS Enabled ) UNION ALL ( SELECT \'UNIX_TIMESTAMP()\' AS Variable_name, ROUND(UNIX_TIMESTAMP(NOW(3)), 3) AS Variable_value, \'System Time\' AS Type, \'YES\' AS Enabled ) ORDER BY Type, Variable_name;\' ); END IF; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql);  CALL sys.execute_prepared_stmt( CONCAT(\'(SELECT Variable_value INTO @sys.diagnostics.output_time FROM \', v_table_name, \' WHERE Type = \'System Time\' AND Variable_name = \'UNIX_TIMESTAMP()\')\') ); SET v_output_time = @sys.diagnostics.output_time;  SET v_sql_status_summary_select = CONCAT(v_sql_status_summary_select, \', CONCAT( LEFT(s\', v_output_count, \'.Variable_value, \', v_status_summary_width, \'), IF(\', REPLACE(v_no_delta_names, \'%{COUNT}\', v_output_count), \' AND s\', v_output_count, \'.Variable_value REGEXP \'^[0-9]+(\\\\.[0-9]+)?$\', CONCAT(\' (\', ROUND(s\', v_output_count, \'.Variable_value/\', v_output_time, \', 2), \'/sec)\'), \'\') ) AS \'Output \', v_output_count, \'\'\'), v_sql_status_summary_from   = CONCAT(v_sql_status_summary_from, \' \', IF(v_output_count = 1, \'  FROM \', \'       INNER JOIN \'), v_table_name, \' s\', v_output_count, IF (v_output_count = 1, \'\', \' USING (Type, Variable_name)\')); IF (v_output_count > 1) THEN SET v_sql_status_summary_delta  = CONCAT(v_sql_status_summary_delta, \', IF(\', REPLACE(v_no_delta_names, \'%{COUNT}\', v_output_count), \' AND s\', (v_output_count-1), \'.Variable_value REGEXP \'^[0-9]+(\\\\.[0-9]+)?$\' AND s\', v_output_count, \'.Variable_value REGEXP \'^[0-9]+(\\\\.[0-9]+)?$\', CONCAT(IF(s\', (v_output_count-1), \'.Variable_value REGEXP \'^[0-9]+\\\\.[0-9]+$\' OR s\', v_output_count, \'.Variable_value REGEXP \'^[0-9]+\\\\.[0-9]+$\', ROUND((s\', v_output_count, \'.Variable_value-s\', (v_output_count-1), \'.Variable_value), 2), (s\', v_output_count, \'.Variable_value-s\', (v_output_count-1), \'.Variable_value) ), \' (\', ROUND((s\', v_output_count, \'.Variable_value-s\', (v_output_count-1), \'.Variable_value)/(\', v_output_time, \'-\', v_output_time_prev, \'), 2), \'/sec)\' ), \'\' ) AS \'Delta (\', (v_output_count-1), \' -> \', v_output_count, \')\'\'); END IF;  SET v_output_time_prev = v_output_time;  IF (@sys.diagnostics.include_raw = \'ON\') THEN IF (v_has_metrics) THEN SELECT \'SELECT * FROM sys.metrics\' AS \'The following output is:\'; ELSE SELECT \'sys.metrics equivalent\' AS \'The following output is:\'; END IF; CALL sys.execute_prepared_stmt(CONCAT(\'SELECT Type, Variable_name, Enabled, Variable_value FROM \', v_table_name, \' ORDER BY Type, Variable_name\')); END IF;  IF (v_has_innodb IN (\'DEFAULT\', \'YES\')) THEN SELECT \'SHOW ENGINE INNODB STATUS\' AS \'The following output is:\'; EXECUTE stmt_innodb_status; SELECT \'InnoDB - Transactions\' AS \'The following output is:\'; SELECT * FROM information_schema.INNODB_TRX; END IF;  IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN SELECT \'SHOW ENGINE NDBCLUSTER STATUS\' AS \'The following output is:\'; EXECUTE stmt_ndbcluster_status;  SELECT \'ndbinfo.memoryusage\' AS \'The following output is:\'; SELECT node_id, memory_type, sys.format_bytes(used) AS used, used_pages, sys.format_bytes(total) AS total, total_pages, ROUND(100*(used/total), 2) AS \'Used %\' FROM ndbinfo.memoryusage;  SET v_done = FALSE; OPEN c_ndbinfo; c_ndbinfo_loop: LOOP FETCH c_ndbinfo INTO v_table_name; IF v_done THEN LEAVE c_ndbinfo_loop; END IF;  SELECT CONCAT(\'SELECT * FROM ndbinfo.\', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(CONCAT(\'SELECT * FROM `ndbinfo`.`\', v_table_name, \'`\')); END LOOP; CLOSE c_ndbinfo;  SELECT * FROM information_schema.FILES; END IF;  SELECT \'SELECT * FROM sys.processlist\' AS \'The following output is:\'; SELECT processlist.* FROM sys.processlist;  IF (v_has_ps = \'YES\') THEN IF (sys.ps_is_consumer_enabled(\'events_waits_history_long\') = \'YES\') THEN SELECT \'SELECT * FROM sys.latest_file_io\' AS \'The following output is:\'; SELECT * FROM sys.latest_file_io; END IF;  IF (EXISTS(SELECT 1 FROM performance_schema.setup_instruments WHERE NAME LIKE \'memory/%\' AND ENABLED = \'YES\')) THEN SELECT \'SELECT * FROM sys.memory_by_host_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_by_host_by_current_bytes;  SELECT \'SELECT * FROM sys.memory_by_thread_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_by_thread_by_current_bytes;  SELECT \'SELECT * FROM sys.memory_by_user_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_by_user_by_current_bytes;  SELECT \'SELECT * FROM sys.memory_global_by_current_bytes\' AS \'The following output is:\'; SELECT * FROM sys.memory_global_by_current_bytes; END IF; END IF;  SET v_runtime = (UNIX_TIMESTAMP(NOW(2)) - v_start); UNTIL (v_runtime + in_interval >= in_max_runtime) END REPEAT;  IF (v_has_ps = \'YES\') THEN SELECT \'SHOW ENGINE PERFORMANCE_SCHEMA STATUS\' AS \'The following output is:\'; EXECUTE stmt_ps_status; END IF;  IF (v_has_innodb IN (\'DEFAULT\', \'YES\')) THEN DEALLOCATE PREPARE stmt_innodb_status; END IF; IF (v_has_ps = \'YES\') THEN DEALLOCATE PREPARE stmt_ps_status; END IF; IF (v_has_ndb IN (\'DEFAULT\', \'YES\')) THEN DEALLOCATE PREPARE stmt_ndbcluster_status; END IF;   SELECT \'  ============================  Schema Information  ============================  \' AS \'\';  SELECT COUNT(*) AS \'Total Number of Tables\' FROM information_schema.TABLES;  IF (@sys.diagnostics.allow_i_s_tables = \'ON\') THEN SELECT \'Storage Engine Usage\' AS \'The following output is:\'; SELECT ENGINE, COUNT(*) AS NUM_TABLES, sys.format_bytes(SUM(DATA_LENGTH)) AS DATA_LENGTH, sys.format_bytes(SUM(INDEX_LENGTH)) AS INDEX_LENGTH, sys.format_bytes(SUM(DATA_LENGTH+INDEX_LENGTH)) AS TOTAL FROM information_schema.TABLES GROUP BY ENGINE;  SELECT \'Schema Object Overview\' AS \'The following output is:\'; SELECT * FROM sys.schema_object_overview;  SELECT \'Tables without a PRIMARY KEY\' AS \'The following output is:\'; SELECT TABLES.TABLE_SCHEMA, ENGINE, COUNT(*) AS NumTables FROM information_schema.TABLES LEFT OUTER JOIN information_schema.STATISTICS ON STATISTICS.TABLE_SCHEMA = TABLES.TABLE_SCHEMA AND STATISTICS.TABLE_NAME = TABLES.TABLE_NAME AND STATISTICS.INDEX_NAME = \'PRIMARY\' WHERE STATISTICS.TABLE_NAME IS NULL AND TABLES.TABLE_SCHEMA NOT IN (\'mysql\', \'information_schema\', \'performance_schema\', \'sys\') AND TABLES.TABLE_TYPE = \'BASE TABLE\' GROUP BY TABLES.TABLE_SCHEMA, ENGINE; END IF;  IF (v_has_ps = \'YES\') THEN SELECT \'Unused Indexes\' AS \'The following output is:\'; SELECT object_schema, COUNT(*) AS NumUnusedIndexes FROM performance_schema.table_io_waits_summary_by_index_usage  WHERE index_name IS NOT NULL AND count_star = 0 AND object_schema NOT IN (\'mysql\', \'sys\') AND index_name != \'PRIMARY\' GROUP BY object_schema; END IF;  IF (v_has_ps = \'YES\') THEN SELECT \'  =========================  Overall Status  =========================  \' AS \'\';  SELECT \'CALL sys.ps_statement_avg_latency_histogram()\' AS \'The following output is:\'; CALL sys.ps_statement_avg_latency_histogram();  CALL sys.statement_performance_analyzer(\'snapshot\', NULL, NULL); CALL sys.statement_performance_analyzer(\'overall\', NULL, \'with_runtimes_in_95th_percentile\');  SET @sys.diagnostics.sql = REPLACE(@sys.diagnostics.sql_gen_query_template, \'%{OUTPUT}\', \'end\'); IF (@sys.debug = \'ON\') THEN SELECT \'The following query will be used to generate the query for each sys view\' AS \'Debug\'; SELECT @sys.diagnostics.sql AS \'Debug\'; END IF; PREPARE stmt_gen_query FROM @sys.diagnostics.sql;  SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'The following queries are for storing the final content of \', v_table_name) AS \'Debug\'; END IF;  CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS `tmp_\', v_table_name, \'_end`\')); CALL sys.execute_prepared_stmt(CONCAT(\'CREATE TEMPORARY TABLE `tmp_\', v_table_name, \'_end` SELECT * FROM `sys`.`x$\', v_table_name, \'`\'));  IF (@sys.diagnostics.include_raw = \'ON\') THEN SET @sys.diagnostics.table_name = CONCAT(\'x$\', v_table_name); EXECUTE stmt_gen_query USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(order_by IS NOT NULL, CONCAT(\'\n ORDER BY \', REPLACE(order_by, \'%{TABLE}\', CONCAT(\'tmp_\', v_table_name, \'_end\'))), \'\'), IF(limit_rows IS NOT NULL, CONCAT(\'\n LIMIT \', limit_rows), \'\') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name; SELECT CONCAT(\'Overall \', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select); END IF; END LOOP; CLOSE c_sysviews_w_delta;  DEALLOCATE PREPARE stmt_gen_query;   SELECT \'  ======================  Delta Status  ======================  \' AS \'\';  CALL sys.statement_performance_analyzer(\'delta\', \'tmp_digests_start\', \'with_runtimes_in_95th_percentile\'); CALL sys.statement_performance_analyzer(\'cleanup\', NULL, NULL);  DROP TEMPORARY TABLE tmp_digests_start;  IF (@sys.debug = \'ON\') THEN SELECT \'The following query will be used to generate the query for each sys view delta\' AS \'Debug\'; SELECT @sys.diagnostics.sql_gen_query_delta AS \'Debug\'; END IF; PREPARE stmt_gen_query_delta FROM @sys.diagnostics.sql_gen_query_delta;  SET v_old_group_concat_max_len = @@session.group_concat_max_len; SET @@session.group_concat_max_len = 2048; SET v_done = FALSE; OPEN c_sysviews_w_delta; c_sysviews_w_delta_loop: LOOP FETCH c_sysviews_w_delta INTO v_table_name; IF v_done THEN LEAVE c_sysviews_w_delta_loop; END IF;  SET @sys.diagnostics.table_name = v_table_name; EXECUTE stmt_gen_query_delta USING @sys.diagnostics.table_name; SELECT CONCAT(@sys.diagnostics.sql_select, IF(where_delta IS NOT NULL, CONCAT(\'\n WHERE \', where_delta), \'\'), IF(order_by_delta IS NOT NULL, CONCAT(\'\n ORDER BY \', order_by_delta), \'\'), IF(limit_rows IS NOT NULL, CONCAT(\'\n LIMIT \', limit_rows), \'\') ) INTO @sys.diagnostics.sql_select FROM tmp_sys_views_delta WHERE TABLE_NAME = v_table_name;  SELECT CONCAT(\'Delta \', v_table_name) AS \'The following output is:\'; CALL sys.execute_prepared_stmt(@sys.diagnostics.sql_select);  CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE `tmp_\', v_table_name, \'_end`\')); CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE `tmp_\', v_table_name, \'_start`\')); END LOOP; CLOSE c_sysviews_w_delta; SET @@session.group_concat_max_len = v_old_group_concat_max_len;  DEALLOCATE PREPARE stmt_gen_query_delta; DROP TEMPORARY TABLE tmp_sys_views_delta; END IF;  IF (v_has_metrics) THEN SELECT \'SELECT * FROM sys.metrics\' AS \'The following output is:\'; ELSE SELECT \'sys.metrics equivalent\' AS \'The following output is:\'; END IF; CALL sys.execute_prepared_stmt( CONCAT(v_sql_status_summary_select, v_sql_status_summary_delta, \', Type, s1.Enabled\', v_sql_status_summary_from, \' ORDER BY Type, Variable_name\' ) );  SET v_count = 0; WHILE (v_count < v_output_count) DO SET v_count = v_count + 1; SET v_table_name = CONCAT(\'tmp_metrics_\', v_count); CALL sys.execute_prepared_stmt(CONCAT(\'DROP TEMPORARY TABLE IF EXISTS \', v_table_name)); END WHILE;  IF (in_auto_config <> \'current\') THEN CALL sys.ps_setup_reload_saved(); SET sql_log_bin = @log_bin; END IF;  SET @sys.diagnostics.output_time            = NULL, @sys.diagnostics.sql                    = NULL, @sys.diagnostics.sql_gen_query_delta    = NULL, @sys.diagnostics.sql_gen_query_template = NULL, @sys.diagnostics.sql_select             = NULL, @sys.diagnostics.table_name             = NULL;  IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  IF (@log_bin = 1) THEN SET sql_log_bin = @log_bin; END IF; END'),('sys','ps_statement_avg_latency_histogram','PROCEDURE','ps_statement_avg_latency_histogram','SQL','READS_SQL_DATA','NO','INVOKER','','','BEGIN SELECT CONCAT(\'\\n\', \'\\n  . = 1 unit\', \'\\n  * = 2 units\', \'\\n  # = 3 units\\n\', @label := CONCAT(@label_inner := CONCAT(\'\\n(0 - \', ROUND((@bucket_size := (SELECT ROUND((MAX(avg_us) - MIN(avg_us)) / (@buckets := 16)) AS size FROM sys.x$ps_digest_avg_latency_distribution)) / (@unit_div := 1000)), (@unit := \'ms\'), \')\'), REPEAT(\' \', (@max_label_size := ((1 + LENGTH(ROUND((@bucket_size * 15) / @unit_div)) + 3 + LENGTH(ROUND(@bucket_size * 16) / @unit_div)) + 1)) - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us <= @bucket_size), 0)), REPEAT(\' \', (@max_label_len := (@max_label_size + LENGTH((@total_queries := (SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution)))) + 1) - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < (@one_unit := 40), \'.\', IF(@count_in_bucket < (@two_unit := 80), \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'),  @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND(@bucket_size / @unit_div), \' - \', ROUND((@bucket_size * 2) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size AND b1.avg_us <= @bucket_size * 2), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 2) / @unit_div), \' - \', ROUND((@bucket_size * 3) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 2 AND b1.avg_us <= @bucket_size * 3), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 3) / @unit_div), \' - \', ROUND((@bucket_size * 4) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 3 AND b1.avg_us <= @bucket_size * 4), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 4) / @unit_div), \' - \', ROUND((@bucket_size * 5) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 4 AND b1.avg_us <= @bucket_size * 5), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 5) / @unit_div), \' - \', ROUND((@bucket_size * 6) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 5 AND b1.avg_us <= @bucket_size * 6), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 6) / @unit_div), \' - \', ROUND((@bucket_size * 7) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 6 AND b1.avg_us <= @bucket_size * 7), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 7) / @unit_div), \' - \', ROUND((@bucket_size * 8) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 7 AND b1.avg_us <= @bucket_size * 8), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 8) / @unit_div), \' - \', ROUND((@bucket_size * 9) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 8 AND b1.avg_us <= @bucket_size * 9), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 9) / @unit_div), \' - \', ROUND((@bucket_size * 10) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 9 AND b1.avg_us <= @bucket_size * 10), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 10) / @unit_div), \' - \', ROUND((@bucket_size * 11) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 10 AND b1.avg_us <= @bucket_size * 11), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 11) / @unit_div), \' - \', ROUND((@bucket_size * 12) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 11 AND b1.avg_us <= @bucket_size * 12), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 12) / @unit_div), \' - \', ROUND((@bucket_size * 13) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 12 AND b1.avg_us <= @bucket_size * 13), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 13) / @unit_div), \' - \', ROUND((@bucket_size * 14) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 13 AND b1.avg_us <= @bucket_size * 14), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 14) / @unit_div), \' - \', ROUND((@bucket_size * 15) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 14 AND b1.avg_us <= @bucket_size * 15), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\\n(\', ROUND((@bucket_size * 15) / @unit_div), \' - \', ROUND((@bucket_size * 16) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 15 AND b1.avg_us <= @bucket_size * 16), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'),  \'\\n\\n  Total Statements: \', @total_queries, \'; Buckets: \', @buckets , \'; Bucket Size: \', ROUND(@bucket_size / @unit_div) , \' \', @unit, \';\\n\'  ) AS `Performance Schema Statement Digest Average Latency Histogram`;  END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Outputs a textual histogram graph of the average latency values\n across all normalized queries tracked within the Performance Schema\n events_statements_summary_by_digest table.\n \n Can be used to show a very high level picture of what kind of \n latency distribution statements running within this instance have.\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_statement_avg_latency_histogram()\\G\n *************************** 1. row ***************************\n Performance Schema Statement Digest Average Latency Histogram:\n \n . = 1 unit\n * = 2 units\n # = 3 units\n \n (0 - 38ms)     240 | ################################################################################\n (38 - 77ms)    38  | ......................................\n (77 - 115ms)   3   | ...\n (115 - 154ms)  62  | *******************************\n (154 - 192ms)  3   | ...\n (192 - 231ms)  0   |\n (231 - 269ms)  0   |\n (269 - 307ms)  0   |\n (307 - 346ms)  0   |\n (346 - 384ms)  1   | .\n (384 - 423ms)  1   | .\n (423 - 461ms)  0   |\n (461 - 499ms)  0   |\n (499 - 538ms)  0   |\n (538 - 576ms)  0   |\n (576 - 615ms)  1   | .\n \n Total Statements: 350; Buckets: 16; Bucket Size: 38 ms;\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SELECT CONCAT(\'\n\', \'\n  . = 1 unit\', \'\n  * = 2 units\', \'\n  # = 3 units\n\', @label := CONCAT(@label_inner := CONCAT(\'\n(0 - \', ROUND((@bucket_size := (SELECT ROUND((MAX(avg_us) - MIN(avg_us)) / (@buckets := 16)) AS size FROM sys.x$ps_digest_avg_latency_distribution)) / (@unit_div := 1000)), (@unit := \'ms\'), \')\'), REPEAT(\' \', (@max_label_size := ((1 + LENGTH(ROUND((@bucket_size * 15) / @unit_div)) + 3 + LENGTH(ROUND(@bucket_size * 16) / @unit_div)) + 1)) - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us <= @bucket_size), 0)), REPEAT(\' \', (@max_label_len := (@max_label_size + LENGTH((@total_queries := (SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution)))) + 1) - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < (@one_unit := 40), \'.\', IF(@count_in_bucket < (@two_unit := 80), \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'),  @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND(@bucket_size / @unit_div), \' - \', ROUND((@bucket_size * 2) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size AND b1.avg_us <= @bucket_size * 2), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 2) / @unit_div), \' - \', ROUND((@bucket_size * 3) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 2 AND b1.avg_us <= @bucket_size * 3), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 3) / @unit_div), \' - \', ROUND((@bucket_size * 4) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 3 AND b1.avg_us <= @bucket_size * 4), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 4) / @unit_div), \' - \', ROUND((@bucket_size * 5) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 4 AND b1.avg_us <= @bucket_size * 5), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 5) / @unit_div), \' - \', ROUND((@bucket_size * 6) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 5 AND b1.avg_us <= @bucket_size * 6), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 6) / @unit_div), \' - \', ROUND((@bucket_size * 7) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 6 AND b1.avg_us <= @bucket_size * 7), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 7) / @unit_div), \' - \', ROUND((@bucket_size * 8) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 7 AND b1.avg_us <= @bucket_size * 8), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 8) / @unit_div), \' - \', ROUND((@bucket_size * 9) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 8 AND b1.avg_us <= @bucket_size * 9), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 9) / @unit_div), \' - \', ROUND((@bucket_size * 10) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 9 AND b1.avg_us <= @bucket_size * 10), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 10) / @unit_div), \' - \', ROUND((@bucket_size * 11) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 10 AND b1.avg_us <= @bucket_size * 11), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 11) / @unit_div), \' - \', ROUND((@bucket_size * 12) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 11 AND b1.avg_us <= @bucket_size * 12), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 12) / @unit_div), \' - \', ROUND((@bucket_size * 13) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 12 AND b1.avg_us <= @bucket_size * 13), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 13) / @unit_div), \' - \', ROUND((@bucket_size * 14) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 13 AND b1.avg_us <= @bucket_size * 14), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 14) / @unit_div), \' - \', ROUND((@bucket_size * 15) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 14 AND b1.avg_us <= @bucket_size * 15), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'), @label := CONCAT(@label_inner := CONCAT(\'\n(\', ROUND((@bucket_size * 15) / @unit_div), \' - \', ROUND((@bucket_size * 16) / @unit_div), @unit, \')\'), REPEAT(\' \', @max_label_size - LENGTH(@label_inner)), @count_in_bucket := IFNULL((SELECT SUM(cnt) FROM sys.x$ps_digest_avg_latency_distribution AS b1  WHERE b1.avg_us > @bucket_size * 15 AND b1.avg_us <= @bucket_size * 16), 0)), REPEAT(\' \', @max_label_len - LENGTH(@label)), \'| \', IFNULL(REPEAT(IF(@count_in_bucket < @one_unit, \'.\', IF(@count_in_bucket < @two_unit, \'*\', \'#\')),  	             IF(@count_in_bucket < @one_unit, @count_in_bucket, 	             	IF(@count_in_bucket < @two_unit, @count_in_bucket / 2, @count_in_bucket / 3))), \'\'),  \'\n\n  Total Statements: \', @total_queries, \'; Buckets: \', @buckets , \'; Bucket Size: \', ROUND(@bucket_size / @unit_div) , \' \', @unit, \';\n\'  ) AS `Performance Schema Statement Digest Average Latency Histogram`;  END'),('sys','ps_trace_statement_digest','PROCEDURE','ps_trace_statement_digest','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_digest VARCHAR(32), IN in_runtime INT,  IN in_interval DECIMAL(2,2), IN in_start_fresh BOOLEAN, IN in_auto_enable BOOLEAN ','','BEGIN  DECLARE v_start_fresh BOOLEAN DEFAULT false; DECLARE v_auto_enable BOOLEAN DEFAULT false; DECLARE v_explain     BOOLEAN DEFAULT true; DECLARE v_this_thread_enabed ENUM(\'YES\', \'NO\'); DECLARE v_runtime INT DEFAULT 0; DECLARE v_start INT DEFAULT 0; DECLARE v_found_stmts INT;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT INSTRUMENTED INTO v_this_thread_enabed FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); CALL sys.ps_setup_disable_thread(CONNECTION_ID());  DROP TEMPORARY TABLE IF EXISTS stmt_trace; CREATE TEMPORARY TABLE stmt_trace ( thread_id BIGINT UNSIGNED, timer_start BIGINT UNSIGNED, event_id BIGINT UNSIGNED, sql_text longtext, timer_wait BIGINT UNSIGNED, lock_time BIGINT UNSIGNED, errors BIGINT UNSIGNED, mysql_errno INT, rows_sent BIGINT UNSIGNED, rows_affected BIGINT UNSIGNED, rows_examined BIGINT UNSIGNED, created_tmp_tables BIGINT UNSIGNED, created_tmp_disk_tables BIGINT UNSIGNED, no_index_used BIGINT UNSIGNED, PRIMARY KEY (thread_id, timer_start) );  DROP TEMPORARY TABLE IF EXISTS stmt_stages; CREATE TEMPORARY TABLE stmt_stages ( event_id BIGINT UNSIGNED, stmt_id BIGINT UNSIGNED, event_name VARCHAR(128), timer_wait BIGINT UNSIGNED, PRIMARY KEY (event_id) );  SET v_start_fresh = in_start_fresh; IF v_start_fresh THEN TRUNCATE TABLE performance_schema.events_statements_history_long; TRUNCATE TABLE performance_schema.events_stages_history_long; END IF;  SET v_auto_enable = in_auto_enable; IF v_auto_enable THEN CALL sys.ps_setup_save(0);  UPDATE performance_schema.threads SET INSTRUMENTED = IF(PROCESSLIST_ID IS NOT NULL, \'YES\', \'NO\');  UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\' WHERE NAME NOT LIKE \'%\\_history\' AND NAME NOT LIKE \'events_wait%\' AND NAME NOT LIKE \'events_transactions%\' AND NAME <> \'statements_digest\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\' WHERE NAME LIKE \'statement/%\' OR NAME LIKE \'stage/%\'; END IF;  WHILE v_runtime < in_runtime DO SELECT UNIX_TIMESTAMP() INTO v_start;  INSERT IGNORE INTO stmt_trace SELECT thread_id, timer_start, event_id, sql_text, timer_wait, lock_time, errors, mysql_errno,  rows_sent, rows_affected, rows_examined, created_tmp_tables, created_tmp_disk_tables, no_index_used FROM performance_schema.events_statements_history_long WHERE digest = in_digest;  INSERT IGNORE INTO stmt_stages SELECT stages.event_id, stmt_trace.event_id, stages.event_name, stages.timer_wait FROM performance_schema.events_stages_history_long AS stages JOIN stmt_trace ON stages.nesting_event_id = stmt_trace.event_id;  SELECT SLEEP(in_interval) INTO @sleep; SET v_runtime = v_runtime + (UNIX_TIMESTAMP() - v_start); END WHILE;  SELECT \"SUMMARY STATISTICS\";  SELECT COUNT(*) executions, sys.format_time(SUM(timer_wait)) AS exec_time, sys.format_time(SUM(lock_time)) AS lock_time, SUM(rows_sent) AS rows_sent, SUM(rows_affected) AS rows_affected, SUM(rows_examined) AS rows_examined, SUM(created_tmp_tables) AS tmp_tables, SUM(no_index_used) AS full_scans FROM stmt_trace;  SELECT event_name, COUNT(*) as count, sys.format_time(SUM(timer_wait)) as latency FROM stmt_stages GROUP BY event_name ORDER BY SUM(timer_wait) DESC;  SELECT \"LONGEST RUNNING STATEMENT\";  SELECT thread_id, sys.format_time(timer_wait) AS exec_time, sys.format_time(lock_time) AS lock_time, rows_sent, rows_affected, rows_examined, created_tmp_tables AS tmp_tables, no_index_used AS full_scan FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  SELECT sql_text FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  SELECT sql_text, event_id INTO @sql, @sql_id FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  IF (@sql_id IS NOT NULL) THEN SELECT event_name, sys.format_time(timer_wait) as latency FROM stmt_stages WHERE stmt_id = @sql_id ORDER BY event_id; END IF;  DROP TEMPORARY TABLE stmt_trace; DROP TEMPORARY TABLE stmt_stages;  IF (@sql IS NOT NULL) THEN SET @stmt := CONCAT(\"EXPLAIN FORMAT=JSON \", @sql); BEGIN DECLARE CONTINUE HANDLER FOR 1064, 1146 SET v_explain = false;  PREPARE explain_stmt FROM @stmt; END;  IF (v_explain) THEN EXECUTE explain_stmt; DEALLOCATE PREPARE explain_stmt; END IF; END IF;  IF v_auto_enable THEN CALL sys.ps_setup_reload_saved(); END IF; IF (v_this_thread_enabed = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  SET sql_log_bin = @log_bin; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Traces all instrumentation within Performance Schema for a specific\n Statement Digest. \n \n When finding a statement of interest within the \n performance_schema.events_statements_summary_by_digest table, feed\n the DIGEST MD5 value in to this procedure, set how long to poll for, \n and at what interval to poll, and it will generate a report of all \n statistics tracked within Performance Schema for that digest for the\n interval.\n \n It will also attempt to generate an EXPLAIN for the longest running \n example of the digest during the interval. Note this may fail, as:\n \n * Performance Schema truncates long SQL_TEXT values (and hence the \n EXPLAIN will fail due to parse errors)\n * the default schema is sys (so tables that are not fully qualified\n in the query may not be found)\n * some queries such as SHOW are not supported in EXPLAIN.\n \n When the EXPLAIN fails, the error will be ignored and no EXPLAIN\n output generated.\n \n Requires the SUPER privilege for \"SET sql_log_bin = 0;\".\n \n Parameters\n \n in_digest (VARCHAR(32)):\n The statement digest identifier you would like to analyze\n in_runtime (INT):\n The number of seconds to run analysis for\n in_interval (DECIMAL(2,2)):\n The interval (in seconds, may be fractional) at which to try\n and take snapshots\n in_start_fresh (BOOLEAN):\n Whether to TRUNCATE the events_statements_history_long and\n events_stages_history_long tables before starting\n in_auto_enable (BOOLEAN):\n Whether to automatically turn on required consumers\n \n Example\n \n mysql> call ps_trace_statement_digest(\'891ec6860f98ba46d89dd20b0c03652c\', 10, 0.1, true, true);\n +--------------------+\n | SUMMARY STATISTICS |\n +--------------------+\n | SUMMARY STATISTICS |\n +--------------------+\n 1 row in set (9.11 sec)\n \n +------------+-----------+-----------+-----------+---------------+------------+------------+\n | executions | exec_time | lock_time | rows_sent | rows_examined | tmp_tables | full_scans |\n +------------+-----------+-----------+-----------+---------------+------------+------------+\n |         21 | 4.11 ms   | 2.00 ms   |         0 |            21 |          0 |          0 |\n +------------+-----------+-----------+-----------+---------------+------------+------------+\n 1 row in set (9.11 sec)\n \n +------------------------------------------+-------+-----------+\n | event_name                               | count | latency   |\n +------------------------------------------+-------+-----------+\n | stage/sql/checking query cache for query |    16 | 724.37 us |\n | stage/sql/statistics                     |    16 | 546.92 us |\n | stage/sql/freeing items                  |    18 | 520.11 us |\n | stage/sql/init                           |    51 | 466.80 us |\n ...\n | stage/sql/cleaning up                    |    18 | 11.92 us  |\n | stage/sql/executing                      |    16 | 6.95 us   |\n +------------------------------------------+-------+-----------+\n 17 rows in set (9.12 sec)\n \n +---------------------------+\n | LONGEST RUNNING STATEMENT |\n +---------------------------+\n | LONGEST RUNNING STATEMENT |\n +---------------------------+\n 1 row in set (9.16 sec)\n \n +-----------+-----------+-----------+-----------+---------------+------------+-----------+\n | thread_id | exec_time | lock_time | rows_sent | rows_examined | tmp_tables | full_scan |\n +-----------+-----------+-----------+-----------+---------------+------------+-----------+\n |    166646 | 618.43 us | 1.00 ms   |         0 |             1 |          0 |         0 |\n +-----------+-----------+-----------+-----------+---------------+------------+-----------+\n 1 row in set (9.16 sec)\n \n // Truncated for clarity...\n +-----------------------------------------------------------------+\n | sql_text                                                        |\n +-----------------------------------------------------------------+\n | select hibeventhe0_.id as id1382_, hibeventhe0_.createdTime ... |\n +-----------------------------------------------------------------+\n 1 row in set (9.17 sec)\n \n +------------------------------------------+-----------+\n | event_name                               | latency   |\n +------------------------------------------+-----------+\n | stage/sql/init                           | 8.61 us   |\n | stage/sql/Waiting for query cache lock   | 453.23 us |\n | stage/sql/init                           | 331.07 ns |\n | stage/sql/checking query cache for query | 43.04 us  |\n ...\n | stage/sql/freeing items                  | 30.46 us  |\n | stage/sql/cleaning up                    | 662.13 ns |\n +------------------------------------------+-----------+\n 18 rows in set (9.23 sec)\n \n +----+-------------+--------------+-------+---------------+-----------+---------+-------------+------+-------+\n | id | select_type | table        | type  | possible_keys | key       | key_len | ref         | rows | Extra |\n +----+-------------+--------------+-------+---------------+-----------+---------+-------------+------+-------+\n |  1 | SIMPLE      | hibeventhe0_ | const | fixedTime     | fixedTime | 775     | const,const |    1 | NULL  |\n +----+-------------+--------------+-------+---------------+-----------+---------+-------------+------+-------+\n 1 row in set (9.27 sec)\n \n Query OK, 0 rows affected (9.28 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN  DECLARE v_start_fresh BOOLEAN DEFAULT false; DECLARE v_auto_enable BOOLEAN DEFAULT false; DECLARE v_explain     BOOLEAN DEFAULT true; DECLARE v_this_thread_enabed ENUM(\'YES\', \'NO\'); DECLARE v_runtime INT DEFAULT 0; DECLARE v_start INT DEFAULT 0; DECLARE v_found_stmts INT;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT INSTRUMENTED INTO v_this_thread_enabed FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); CALL sys.ps_setup_disable_thread(CONNECTION_ID());  DROP TEMPORARY TABLE IF EXISTS stmt_trace; CREATE TEMPORARY TABLE stmt_trace ( thread_id BIGINT UNSIGNED, timer_start BIGINT UNSIGNED, event_id BIGINT UNSIGNED, sql_text longtext, timer_wait BIGINT UNSIGNED, lock_time BIGINT UNSIGNED, errors BIGINT UNSIGNED, mysql_errno INT, rows_sent BIGINT UNSIGNED, rows_affected BIGINT UNSIGNED, rows_examined BIGINT UNSIGNED, created_tmp_tables BIGINT UNSIGNED, created_tmp_disk_tables BIGINT UNSIGNED, no_index_used BIGINT UNSIGNED, PRIMARY KEY (thread_id, timer_start) );  DROP TEMPORARY TABLE IF EXISTS stmt_stages; CREATE TEMPORARY TABLE stmt_stages ( event_id BIGINT UNSIGNED, stmt_id BIGINT UNSIGNED, event_name VARCHAR(128), timer_wait BIGINT UNSIGNED, PRIMARY KEY (event_id) );  SET v_start_fresh = in_start_fresh; IF v_start_fresh THEN TRUNCATE TABLE performance_schema.events_statements_history_long; TRUNCATE TABLE performance_schema.events_stages_history_long; END IF;  SET v_auto_enable = in_auto_enable; IF v_auto_enable THEN CALL sys.ps_setup_save(0);  UPDATE performance_schema.threads SET INSTRUMENTED = IF(PROCESSLIST_ID IS NOT NULL, \'YES\', \'NO\');  UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\' WHERE NAME NOT LIKE \'%\\_history\' AND NAME NOT LIKE \'events_wait%\' AND NAME NOT LIKE \'events_transactions%\' AND NAME <> \'statements_digest\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\' WHERE NAME LIKE \'statement/%\' OR NAME LIKE \'stage/%\'; END IF;  WHILE v_runtime < in_runtime DO SELECT UNIX_TIMESTAMP() INTO v_start;  INSERT IGNORE INTO stmt_trace SELECT thread_id, timer_start, event_id, sql_text, timer_wait, lock_time, errors, mysql_errno,  rows_sent, rows_affected, rows_examined, created_tmp_tables, created_tmp_disk_tables, no_index_used FROM performance_schema.events_statements_history_long WHERE digest = in_digest;  INSERT IGNORE INTO stmt_stages SELECT stages.event_id, stmt_trace.event_id, stages.event_name, stages.timer_wait FROM performance_schema.events_stages_history_long AS stages JOIN stmt_trace ON stages.nesting_event_id = stmt_trace.event_id;  SELECT SLEEP(in_interval) INTO @sleep; SET v_runtime = v_runtime + (UNIX_TIMESTAMP() - v_start); END WHILE;  SELECT \"SUMMARY STATISTICS\";  SELECT COUNT(*) executions, sys.format_time(SUM(timer_wait)) AS exec_time, sys.format_time(SUM(lock_time)) AS lock_time, SUM(rows_sent) AS rows_sent, SUM(rows_affected) AS rows_affected, SUM(rows_examined) AS rows_examined, SUM(created_tmp_tables) AS tmp_tables, SUM(no_index_used) AS full_scans FROM stmt_trace;  SELECT event_name, COUNT(*) as count, sys.format_time(SUM(timer_wait)) as latency FROM stmt_stages GROUP BY event_name ORDER BY SUM(timer_wait) DESC;  SELECT \"LONGEST RUNNING STATEMENT\";  SELECT thread_id, sys.format_time(timer_wait) AS exec_time, sys.format_time(lock_time) AS lock_time, rows_sent, rows_affected, rows_examined, created_tmp_tables AS tmp_tables, no_index_used AS full_scan FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  SELECT sql_text FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  SELECT sql_text, event_id INTO @sql, @sql_id FROM stmt_trace ORDER BY timer_wait DESC LIMIT 1;  IF (@sql_id IS NOT NULL) THEN SELECT event_name, sys.format_time(timer_wait) as latency FROM stmt_stages WHERE stmt_id = @sql_id ORDER BY event_id; END IF;  DROP TEMPORARY TABLE stmt_trace; DROP TEMPORARY TABLE stmt_stages;  IF (@sql IS NOT NULL) THEN SET @stmt := CONCAT(\"EXPLAIN FORMAT=JSON \", @sql); BEGIN DECLARE CONTINUE HANDLER FOR 1064, 1146 SET v_explain = false;  PREPARE explain_stmt FROM @stmt; END;  IF (v_explain) THEN EXECUTE explain_stmt; DEALLOCATE PREPARE explain_stmt; END IF; END IF;  IF v_auto_enable THEN CALL sys.ps_setup_reload_saved(); END IF; IF (v_this_thread_enabed = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  SET sql_log_bin = @log_bin; END'),('sys','ps_trace_thread','PROCEDURE','ps_trace_thread','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_thread_id BIGINT UNSIGNED, IN in_outfile VARCHAR(255), IN in_max_runtime DECIMAL(20,2), IN in_interval DECIMAL(20,2), IN in_start_fresh BOOLEAN, IN in_auto_setup BOOLEAN, IN in_debug BOOLEAN ','','BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_start, v_runtime DECIMAL(20,2) DEFAULT 0.0; DECLARE v_min_event_id bigint unsigned DEFAULT 0; DECLARE v_this_thread_enabed ENUM(\'YES\', \'NO\'); DECLARE v_event longtext; DECLARE c_stack CURSOR FOR SELECT CONCAT(IF(nesting_event_id IS NOT NULL, CONCAT(nesting_event_id, \' -> \'), \'\'),  event_id, \'; \', event_id, \' [label=\"\', \'(\', sys.format_time(timer_wait), \') \', IF (event_name NOT LIKE \'wait/io%\',  SUBSTRING_INDEX(event_name, \'/\', -2),  IF (event_name NOT LIKE \'wait/io/file%\' OR event_name NOT LIKE \'wait/io/socket%\', SUBSTRING_INDEX(event_name, \'/\', -4), event_name) ), IF (event_name LIKE \'transaction\', IFNULL(CONCAT(\'\\\\n\', wait_info), \'\'), \'\'), IF (event_name LIKE \'statement/%\', IFNULL(CONCAT(\'\\\\n\', wait_info), \'\'), \'\'), IF (in_debug AND event_name LIKE \'wait%\', wait_info, \'\'), \'\", \',  CASE WHEN event_name LIKE \'wait/io/file%\' THEN  \'shape=box, style=filled, color=red\' WHEN event_name LIKE \'wait/io/table%\' THEN  \'shape=box, style=filled, color=green\' WHEN event_name LIKE \'wait/io/socket%\' THEN \'shape=box, style=filled, color=yellow\' WHEN event_name LIKE \'wait/synch/mutex%\' THEN \'style=filled, color=lightskyblue\' WHEN event_name LIKE \'wait/synch/cond%\' THEN \'style=filled, color=darkseagreen3\' WHEN event_name LIKE \'wait/synch/rwlock%\' THEN \'style=filled, color=orchid\' WHEN event_name LIKE \'wait/synch/sxlock%\' THEN \'style=filled, color=palevioletred\'  WHEN event_name LIKE \'wait/lock%\' THEN \'shape=box, style=filled, color=tan\' WHEN event_name LIKE \'statement/%\' THEN CONCAT(\'shape=box, style=bold\', CASE WHEN event_name LIKE \'statement/com/%\' THEN \' style=filled, color=darkseagreen\' ELSE IF((timer_wait/1000000000000) > @@long_query_time,  \' style=filled, color=red\',  \' style=filled, color=lightblue\') END ) WHEN event_name LIKE \'transaction\' THEN \'shape=box, style=filled, color=lightblue3\' WHEN event_name LIKE \'stage/%\' THEN \'style=filled, color=slategray3\' WHEN event_name LIKE \'%idle%\' THEN \'shape=box, style=filled, color=firebrick3\' ELSE \'\' END, \'];\\n\' ) event, event_id FROM ( (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, CONCAT(\'trx_id: \',  IFNULL(trx_id, \'\'), \'\\\\n\', \'gtid: \', IFNULL(gtid, \'\'), \'\\\\n\', \'state: \', state, \'\\\\n\', \'mode: \', access_mode, \'\\\\n\', \'isolation: \', isolation_level, \'\\\\n\', \'autocommit: \', autocommit, \'\\\\n\', \'savepoints: \', number_of_savepoints, \'\\\\n\' ) AS wait_info FROM performance_schema.events_transactions_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id,  CONCAT(\'statement: \', sql_text, \'\\\\n\', \'errors: \', errors, \'\\\\n\', \'warnings: \', warnings, \'\\\\n\', \'lock time: \', sys.format_time(lock_time),\'\\\\n\', \'rows affected: \', rows_affected, \'\\\\n\', \'rows sent: \', rows_sent, \'\\\\n\', \'rows examined: \', rows_examined, \'\\\\n\', \'tmp tables: \', created_tmp_tables, \'\\\\n\', \'tmp disk tables: \', created_tmp_disk_tables, \'\\\\n\' \'select scan: \', select_scan, \'\\\\n\', \'select full join: \', select_full_join, \'\\\\n\', \'select full range join: \', select_full_range_join, \'\\\\n\', \'select range: \', select_range, \'\\\\n\', \'select range check: \', select_range_check, \'\\\\n\',  \'sort merge passes: \', sort_merge_passes, \'\\\\n\', \'sort rows: \', sort_rows, \'\\\\n\', \'sort range: \', sort_range, \'\\\\n\', \'sort scan: \', sort_scan, \'\\\\n\', \'no index used: \', IF(no_index_used, \'TRUE\', \'FALSE\'), \'\\\\n\', \'no good index used: \', IF(no_good_index_used, \'TRUE\', \'FALSE\'), \'\\\\n\' ) AS wait_info FROM performance_schema.events_statements_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, null AS wait_info FROM performance_schema.events_stages_history_long  WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION  (SELECT thread_id, event_id,  CONCAT(event_name,  IF(event_name NOT LIKE \'wait/synch/mutex%\', IFNULL(CONCAT(\' - \', operation), \'\'), \'\'),  IF(number_of_bytes IS NOT NULL, CONCAT(\' \', number_of_bytes, \' bytes\'), \'\'), IF(event_name LIKE \'wait/io/file%\', \'\\\\n\', \'\'), IF(object_schema IS NOT NULL, CONCAT(\'\\\\nObject: \', object_schema, \'.\'), \'\'),  IF(object_name IS NOT NULL,  IF (event_name LIKE \'wait/io/socket%\', CONCAT(\'\\\\n\', IF (object_name LIKE \':0%\', @@socket, object_name)), object_name), \'\' ), IF(index_name IS NOT NULL, CONCAT(\' Index: \', index_name), \'\'), \'\\\\n\' ) AS event_name, timer_wait, timer_start, nesting_event_id, source AS wait_info FROM performance_schema.events_waits_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) ) events  ORDER BY event_id; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT INSTRUMENTED INTO v_this_thread_enabed FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); CALL sys.ps_setup_disable_thread(CONNECTION_ID());  IF (in_auto_setup) THEN CALL sys.ps_setup_save(0);  DELETE FROM performance_schema.setup_actors;  UPDATE performance_schema.threads SET INSTRUMENTED = IF(THREAD_ID = in_thread_id, \'YES\', \'NO\');  UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\' WHERE NAME NOT LIKE \'%\\_history\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\'; END IF;  IF (in_start_fresh) THEN TRUNCATE performance_schema.events_transactions_history_long; TRUNCATE performance_schema.events_statements_history_long; TRUNCATE performance_schema.events_stages_history_long; TRUNCATE performance_schema.events_waits_history_long; END IF;  DROP TEMPORARY TABLE IF EXISTS tmp_events; CREATE TEMPORARY TABLE tmp_events ( event_id bigint unsigned NOT NULL, event longblob, PRIMARY KEY (event_id) );  INSERT INTO tmp_events VALUES (0, CONCAT(\'digraph events { rankdir=LR; nodesep=0.10;\\n\', \'// Stack created .....: \', NOW(), \'\\n\', \'// MySQL version .....: \', VERSION(), \'\\n\', \'// MySQL hostname ....: \', @@hostname, \'\\n\', \'// MySQL port ........: \', @@port, \'\\n\', \'// MySQL socket ......: \', @@socket, \'\\n\', \'// MySQL user ........: \', CURRENT_USER(), \'\\n\'));  SELECT CONCAT(\'Data collection starting for THREAD_ID = \', in_thread_id) AS \'Info\';  SET v_min_event_id = 0, v_start        = UNIX_TIMESTAMP(), in_interval    = IFNULL(in_interval, 1.00), in_max_runtime = IFNULL(in_max_runtime, 60.00);  WHILE (v_runtime < in_max_runtime AND (SELECT INSTRUMENTED FROM performance_schema.threads WHERE THREAD_ID = in_thread_id) = \'YES\') DO SET v_done = FALSE; OPEN c_stack; c_stack_loop: LOOP FETCH c_stack INTO v_event, v_min_event_id; IF v_done THEN LEAVE c_stack_loop; END IF;  IF (LENGTH(v_event) > 0) THEN INSERT INTO tmp_events VALUES (v_min_event_id, v_event); END IF; END LOOP; CLOSE c_stack;  SELECT SLEEP(in_interval) INTO @sleep; SET v_runtime = (UNIX_TIMESTAMP() - v_start); END WHILE;  INSERT INTO tmp_events VALUES (v_min_event_id+1, \'}\');  SET @query = CONCAT(\'SELECT event FROM tmp_events ORDER BY event_id INTO OUTFILE \'\'\', in_outfile, \'\'\' FIELDS ESCAPED BY \'\'\'\' LINES TERMINATED BY \'\'\'\'\'); PREPARE stmt_output FROM @query; EXECUTE stmt_output; DEALLOCATE PREPARE stmt_output;  SELECT CONCAT(\'Stack trace written to \', in_outfile) AS \'Info\'; SELECT CONCAT(\'dot -Tpdf -o /tmp/stack_\', in_thread_id, \'.pdf \', in_outfile) AS \'Convert to PDF\'; SELECT CONCAT(\'dot -Tpng -o /tmp/stack_\', in_thread_id, \'.png \', in_outfile) AS \'Convert to PNG\'; DROP TEMPORARY TABLE tmp_events;  IF (in_auto_setup) THEN CALL sys.ps_setup_reload_saved(); END IF; IF (v_this_thread_enabed = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  SET sql_log_bin = @log_bin; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Dumps all data within Performance Schema for an instrumented thread,\n to create a DOT formatted graph file. \n \n Each resultset returned from the procedure should be used for a complete graph\n \n Requires the SUPER privilege for \"SET sql_log_bin = 0;\".\n \n Parameters\n \n in_thread_id (BIGINT UNSIGNED):\n The thread that you would like a stack trace for\n in_outfile  (VARCHAR(255)):\n The filename the dot file will be written to\n in_max_runtime (DECIMAL(20,2)):\n The maximum time to keep collecting data.\n Use NULL to get the default which is 60 seconds.\n in_interval (DECIMAL(20,2)): \n How long to sleep between data collections. \n Use NULL to get the default which is 1 second.\n in_start_fresh (BOOLEAN):\n Whether to reset all Performance Schema data before tracing.\n in_auto_setup (BOOLEAN):\n Whether to disable all other threads and enable all consumers/instruments. \n This will also reset the settings at the end of the run.\n in_debug (BOOLEAN):\n Whether you would like to include file:lineno in the graph\n \n Example\n \n mysql> CALL sys.ps_trace_thread(25, CONCAT(\'/tmp/stack-\', REPLACE(NOW(), \' \', \'-\'), \'.dot\'), NULL, NULL, TRUE, TRUE, TRUE);\n +-------------------+\n | summary           |\n +-------------------+\n | Disabled 1 thread |\n +-------------------+\n 1 row in set (0.00 sec)\n \n +---------------------------------------------+\n | Info                                        |\n +---------------------------------------------+\n | Data collection starting for THREAD_ID = 25 |\n +---------------------------------------------+\n 1 row in set (0.03 sec)\n \n +-----------------------------------------------------------+\n | Info                                                      |\n +-----------------------------------------------------------+\n | Stack trace written to /tmp/stack-2014-02-16-21:18:41.dot |\n +-----------------------------------------------------------+\n 1 row in set (60.07 sec)\n \n +-------------------------------------------------------------------+\n | Convert to PDF                                                    |\n +-------------------------------------------------------------------+\n | dot -Tpdf -o /tmp/stack_25.pdf /tmp/stack-2014-02-16-21:18:41.dot |\n +-------------------------------------------------------------------+\n 1 row in set (60.07 sec)\n \n +-------------------------------------------------------------------+\n | Convert to PNG                                                    |\n +-------------------------------------------------------------------+\n | dot -Tpng -o /tmp/stack_25.png /tmp/stack-2014-02-16-21:18:41.dot |\n +-------------------------------------------------------------------+\n 1 row in set (60.07 sec)\n \n +------------------+\n | summary          |\n +------------------+\n | Enabled 1 thread |\n +------------------+\n 1 row in set (60.32 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_start, v_runtime DECIMAL(20,2) DEFAULT 0.0; DECLARE v_min_event_id bigint unsigned DEFAULT 0; DECLARE v_this_thread_enabed ENUM(\'YES\', \'NO\'); DECLARE v_event longtext; DECLARE c_stack CURSOR FOR SELECT CONCAT(IF(nesting_event_id IS NOT NULL, CONCAT(nesting_event_id, \' -> \'), \'\'),  event_id, \'; \', event_id, \' [label=\"\', \'(\', sys.format_time(timer_wait), \') \', IF (event_name NOT LIKE \'wait/io%\',  SUBSTRING_INDEX(event_name, \'/\', -2),  IF (event_name NOT LIKE \'wait/io/file%\' OR event_name NOT LIKE \'wait/io/socket%\', SUBSTRING_INDEX(event_name, \'/\', -4), event_name) ), IF (event_name LIKE \'transaction\', IFNULL(CONCAT(\'\\n\', wait_info), \'\'), \'\'), IF (event_name LIKE \'statement/%\', IFNULL(CONCAT(\'\\n\', wait_info), \'\'), \'\'), IF (in_debug AND event_name LIKE \'wait%\', wait_info, \'\'), \'\", \',  CASE WHEN event_name LIKE \'wait/io/file%\' THEN  \'shape=box, style=filled, color=red\' WHEN event_name LIKE \'wait/io/table%\' THEN  \'shape=box, style=filled, color=green\' WHEN event_name LIKE \'wait/io/socket%\' THEN \'shape=box, style=filled, color=yellow\' WHEN event_name LIKE \'wait/synch/mutex%\' THEN \'style=filled, color=lightskyblue\' WHEN event_name LIKE \'wait/synch/cond%\' THEN \'style=filled, color=darkseagreen3\' WHEN event_name LIKE \'wait/synch/rwlock%\' THEN \'style=filled, color=orchid\' WHEN event_name LIKE \'wait/synch/sxlock%\' THEN \'style=filled, color=palevioletred\'  WHEN event_name LIKE \'wait/lock%\' THEN \'shape=box, style=filled, color=tan\' WHEN event_name LIKE \'statement/%\' THEN CONCAT(\'shape=box, style=bold\', CASE WHEN event_name LIKE \'statement/com/%\' THEN \' style=filled, color=darkseagreen\' ELSE IF((timer_wait/1000000000000) > @@long_query_time,  \' style=filled, color=red\',  \' style=filled, color=lightblue\') END ) WHEN event_name LIKE \'transaction\' THEN \'shape=box, style=filled, color=lightblue3\' WHEN event_name LIKE \'stage/%\' THEN \'style=filled, color=slategray3\' WHEN event_name LIKE \'%idle%\' THEN \'shape=box, style=filled, color=firebrick3\' ELSE \'\' END, \'];\n\' ) event, event_id FROM ( (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, CONCAT(\'trx_id: \',  IFNULL(trx_id, \'\'), \'\\n\', \'gtid: \', IFNULL(gtid, \'\'), \'\\n\', \'state: \', state, \'\\n\', \'mode: \', access_mode, \'\\n\', \'isolation: \', isolation_level, \'\\n\', \'autocommit: \', autocommit, \'\\n\', \'savepoints: \', number_of_savepoints, \'\\n\' ) AS wait_info FROM performance_schema.events_transactions_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id,  CONCAT(\'statement: \', sql_text, \'\\n\', \'errors: \', errors, \'\\n\', \'warnings: \', warnings, \'\\n\', \'lock time: \', sys.format_time(lock_time),\'\\n\', \'rows affected: \', rows_affected, \'\\n\', \'rows sent: \', rows_sent, \'\\n\', \'rows examined: \', rows_examined, \'\\n\', \'tmp tables: \', created_tmp_tables, \'\\n\', \'tmp disk tables: \', created_tmp_disk_tables, \'\\n\' \'select scan: \', select_scan, \'\\n\', \'select full join: \', select_full_join, \'\\n\', \'select full range join: \', select_full_range_join, \'\\n\', \'select range: \', select_range, \'\\n\', \'select range check: \', select_range_check, \'\\n\',  \'sort merge passes: \', sort_merge_passes, \'\\n\', \'sort rows: \', sort_rows, \'\\n\', \'sort range: \', sort_range, \'\\n\', \'sort scan: \', sort_scan, \'\\n\', \'no index used: \', IF(no_index_used, \'TRUE\', \'FALSE\'), \'\\n\', \'no good index used: \', IF(no_good_index_used, \'TRUE\', \'FALSE\'), \'\\n\' ) AS wait_info FROM performance_schema.events_statements_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION (SELECT thread_id, event_id, event_name, timer_wait, timer_start, nesting_event_id, null AS wait_info FROM performance_schema.events_stages_history_long  WHERE thread_id = in_thread_id AND event_id > v_min_event_id) UNION  (SELECT thread_id, event_id,  CONCAT(event_name,  IF(event_name NOT LIKE \'wait/synch/mutex%\', IFNULL(CONCAT(\' - \', operation), \'\'), \'\'),  IF(number_of_bytes IS NOT NULL, CONCAT(\' \', number_of_bytes, \' bytes\'), \'\'), IF(event_name LIKE \'wait/io/file%\', \'\\n\', \'\'), IF(object_schema IS NOT NULL, CONCAT(\'\\nObject: \', object_schema, \'.\'), \'\'),  IF(object_name IS NOT NULL,  IF (event_name LIKE \'wait/io/socket%\', CONCAT(\'\\n\', IF (object_name LIKE \':0%\', @@socket, object_name)), object_name), \'\' ), IF(index_name IS NOT NULL, CONCAT(\' Index: \', index_name), \'\'), \'\\n\' ) AS event_name, timer_wait, timer_start, nesting_event_id, source AS wait_info FROM performance_schema.events_waits_history_long WHERE thread_id = in_thread_id AND event_id > v_min_event_id) ) events  ORDER BY event_id; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT INSTRUMENTED INTO v_this_thread_enabed FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); CALL sys.ps_setup_disable_thread(CONNECTION_ID());  IF (in_auto_setup) THEN CALL sys.ps_setup_save(0);  DELETE FROM performance_schema.setup_actors;  UPDATE performance_schema.threads SET INSTRUMENTED = IF(THREAD_ID = in_thread_id, \'YES\', \'NO\');  UPDATE performance_schema.setup_consumers SET ENABLED = \'YES\' WHERE NAME NOT LIKE \'%\\_history\';  UPDATE performance_schema.setup_instruments SET ENABLED = \'YES\', TIMED   = \'YES\'; END IF;  IF (in_start_fresh) THEN TRUNCATE performance_schema.events_transactions_history_long; TRUNCATE performance_schema.events_statements_history_long; TRUNCATE performance_schema.events_stages_history_long; TRUNCATE performance_schema.events_waits_history_long; END IF;  DROP TEMPORARY TABLE IF EXISTS tmp_events; CREATE TEMPORARY TABLE tmp_events ( event_id bigint unsigned NOT NULL, event longblob, PRIMARY KEY (event_id) );  INSERT INTO tmp_events VALUES (0, CONCAT(\'digraph events { rankdir=LR; nodesep=0.10;\n\', \'// Stack created .....: \', NOW(), \'\n\', \'// MySQL version .....: \', VERSION(), \'\n\', \'// MySQL hostname ....: \', @@hostname, \'\n\', \'// MySQL port ........: \', @@port, \'\n\', \'// MySQL socket ......: \', @@socket, \'\n\', \'// MySQL user ........: \', CURRENT_USER(), \'\n\'));  SELECT CONCAT(\'Data collection starting for THREAD_ID = \', in_thread_id) AS \'Info\';  SET v_min_event_id = 0, v_start        = UNIX_TIMESTAMP(), in_interval    = IFNULL(in_interval, 1.00), in_max_runtime = IFNULL(in_max_runtime, 60.00);  WHILE (v_runtime < in_max_runtime AND (SELECT INSTRUMENTED FROM performance_schema.threads WHERE THREAD_ID = in_thread_id) = \'YES\') DO SET v_done = FALSE; OPEN c_stack; c_stack_loop: LOOP FETCH c_stack INTO v_event, v_min_event_id; IF v_done THEN LEAVE c_stack_loop; END IF;  IF (LENGTH(v_event) > 0) THEN INSERT INTO tmp_events VALUES (v_min_event_id, v_event); END IF; END LOOP; CLOSE c_stack;  SELECT SLEEP(in_interval) INTO @sleep; SET v_runtime = (UNIX_TIMESTAMP() - v_start); END WHILE;  INSERT INTO tmp_events VALUES (v_min_event_id+1, \'}\');  SET @query = CONCAT(\'SELECT event FROM tmp_events ORDER BY event_id INTO OUTFILE \'\', in_outfile, \'\' FIELDS ESCAPED BY \'\' LINES TERMINATED BY \'\'\'); PREPARE stmt_output FROM @query; EXECUTE stmt_output; DEALLOCATE PREPARE stmt_output;  SELECT CONCAT(\'Stack trace written to \', in_outfile) AS \'Info\'; SELECT CONCAT(\'dot -Tpdf -o /tmp/stack_\', in_thread_id, \'.pdf \', in_outfile) AS \'Convert to PDF\'; SELECT CONCAT(\'dot -Tpng -o /tmp/stack_\', in_thread_id, \'.png \', in_outfile) AS \'Convert to PNG\'; DROP TEMPORARY TABLE tmp_events;  IF (in_auto_setup) THEN CALL sys.ps_setup_reload_saved(); END IF; IF (v_this_thread_enabed = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  SET sql_log_bin = @log_bin; END'),('sys','ps_setup_disable_background_threads','PROCEDURE','ps_setup_disable_background_threads','SQL','MODIFIES_SQL_DATA','NO','INVOKER','','','BEGIN UPDATE performance_schema.threads SET instrumented = \'NO\' WHERE type = \'BACKGROUND\';  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' background thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Disable all background thread instrumentation within Performance Schema.\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_setup_disable_background_threads();\n +--------------------------------+\n | summary                        |\n +--------------------------------+\n | Disabled 18 background threads |\n +--------------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.threads SET instrumented = \'NO\' WHERE type = \'BACKGROUND\';  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' background thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_disable_consumer','PROCEDURE','ps_setup_disable_consumer','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN consumer VARCHAR(128) ','','BEGIN UPDATE performance_schema.setup_consumers SET enabled = \'NO\' WHERE name LIKE CONCAT(\'%\', consumer, \'%\');  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' consumer\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Disables consumers within Performance Schema \n matching the input pattern.\n \n Parameters\n \n consumer (VARCHAR(128)):\n A LIKE pattern match (using \"%consumer%\") of consumers to disable\n \n Example\n \n To disable all consumers:\n \n mysql> CALL sys.ps_setup_disable_consumer(\'\');\n +--------------------------+\n | summary                  |\n +--------------------------+\n | Disabled 15 consumers    |\n +--------------------------+\n 1 row in set (0.02 sec)\n \n To disable just the event_stage consumers:\n \n mysql> CALL sys.ps_setup_disable_comsumers(\'stage\');\n +------------------------+\n | summary                |\n +------------------------+\n | Disabled 3 consumers   |\n +------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.setup_consumers SET enabled = \'NO\' WHERE name LIKE CONCAT(\'%\', consumer, \'%\');  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' consumer\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_disable_instrument','PROCEDURE','ps_setup_disable_instrument','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_pattern VARCHAR(128) ','','BEGIN UPDATE performance_schema.setup_instruments SET enabled = \'NO\', timed = \'NO\' WHERE name LIKE CONCAT(\'%\', in_pattern, \'%\');  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' instrument\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Disables instruments within Performance Schema \n matching the input pattern.\n \n Parameters\n \n in_pattern (VARCHAR(128)):\n A LIKE pattern match (using \"%in_pattern%\") of events to disable\n \n Example\n \n To disable all mutex instruments:\n \n mysql> CALL sys.ps_setup_disable_instrument(\'wait/synch/mutex\');\n +--------------------------+\n | summary                  |\n +--------------------------+\n | Disabled 155 instruments |\n +--------------------------+\n 1 row in set (0.02 sec)\n \n To disable just a specific TCP/IP based network IO instrument:\n \n mysql> CALL sys.ps_setup_disable_instrument(\'wait/io/socket/sql/server_tcpip_socket\');\n +------------------------+\n | summary                |\n +------------------------+\n | Disabled 1 instruments |\n +------------------------+\n 1 row in set (0.00 sec)\n \n To disable all instruments:\n \n mysql> CALL sys.ps_setup_disable_instrument(\'\');\n +--------------------------+\n | summary                  |\n +--------------------------+\n | Disabled 547 instruments |\n +--------------------------+\n 1 row in set (0.01 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.setup_instruments SET enabled = \'NO\', timed = \'NO\' WHERE name LIKE CONCAT(\'%\', in_pattern, \'%\');  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' instrument\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_disable_thread','PROCEDURE','ps_setup_disable_thread','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_connection_id BIGINT ','','BEGIN UPDATE performance_schema.threads SET instrumented = \'NO\' WHERE processlist_id = in_connection_id;  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Disable the given connection/thread in Performance Schema.\n \n Parameters\n \n in_connection_id (BIGINT):\n The connection ID (PROCESSLIST_ID from performance_schema.threads\n or the ID shown within SHOW PROCESSLIST)\n \n Example\n \n mysql> CALL sys.ps_setup_disable_thread(3);\n +-------------------+\n | summary           |\n +-------------------+\n | Disabled 1 thread |\n +-------------------+\n 1 row in set (0.01 sec)\n \n To disable the current connection:\n \n mysql> CALL sys.ps_setup_disable_thread(CONNECTION_ID());\n +-------------------+\n | summary           |\n +-------------------+\n | Disabled 1 thread |\n +-------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.threads SET instrumented = \'NO\' WHERE processlist_id = in_connection_id;  SELECT CONCAT(\'Disabled \', @rows := ROW_COUNT(), \' thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_enable_background_threads','PROCEDURE','ps_setup_enable_background_threads','SQL','MODIFIES_SQL_DATA','NO','INVOKER','','','BEGIN UPDATE performance_schema.threads SET instrumented = \'YES\' WHERE type = \'BACKGROUND\';  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' background thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Enable all background thread instrumentation within Performance Schema.\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_setup_enable_background_threads();\n +-------------------------------+\n | summary                       |\n +-------------------------------+\n | Enabled 18 background threads |\n +-------------------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.threads SET instrumented = \'YES\' WHERE type = \'BACKGROUND\';  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' background thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_enable_consumer','PROCEDURE','ps_setup_enable_consumer','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN consumer VARCHAR(128) ','','BEGIN UPDATE performance_schema.setup_consumers SET enabled = \'YES\' WHERE name LIKE CONCAT(\'%\', consumer, \'%\');  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' consumer\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Enables consumers within Performance Schema \n matching the input pattern.\n \n Parameters\n \n consumer (VARCHAR(128)):\n A LIKE pattern match (using \"%consumer%\") of consumers to enable\n \n Example\n \n To enable all consumers:\n \n mysql> CALL sys.ps_setup_enable_consumer(\'\');\n +-------------------------+\n | summary                 |\n +-------------------------+\n | Enabled 10 consumers    |\n +-------------------------+\n 1 row in set (0.02 sec)\n \n Query OK, 0 rows affected (0.02 sec)\n \n To enable just \"waits\" consumers:\n \n mysql> CALL sys.ps_setup_enable_consumer(\'waits\');\n +-----------------------+\n | summary               |\n +-----------------------+\n | Enabled 3 consumers   |\n +-----------------------+\n 1 row in set (0.00 sec)\n \n Query OK, 0 rows affected (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.setup_consumers SET enabled = \'YES\' WHERE name LIKE CONCAT(\'%\', consumer, \'%\');  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' consumer\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_enable_instrument','PROCEDURE','ps_setup_enable_instrument','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_pattern VARCHAR(128) ','','BEGIN UPDATE performance_schema.setup_instruments SET enabled = \'YES\', timed = \'YES\' WHERE name LIKE CONCAT(\'%\', in_pattern, \'%\');  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' instrument\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Enables instruments within Performance Schema \n matching the input pattern.\n \n Parameters\n \n in_pattern (VARCHAR(128)):\n A LIKE pattern match (using \"%in_pattern%\") of events to enable\n \n Example\n \n To enable all mutex instruments:\n \n mysql> CALL sys.ps_setup_enable_instrument(\'wait/synch/mutex\');\n +-------------------------+\n | summary                 |\n +-------------------------+\n | Enabled 155 instruments |\n +-------------------------+\n 1 row in set (0.02 sec)\n \n Query OK, 0 rows affected (0.02 sec)\n \n To enable just a specific TCP/IP based network IO instrument:\n \n mysql> CALL sys.ps_setup_enable_instrument(\'wait/io/socket/sql/server_tcpip_socket\');\n +-----------------------+\n | summary               |\n +-----------------------+\n | Enabled 1 instruments |\n +-----------------------+\n 1 row in set (0.00 sec)\n \n Query OK, 0 rows affected (0.00 sec)\n \n To enable all instruments:\n \n mysql> CALL sys.ps_setup_enable_instrument(\'\');\n +-------------------------+\n | summary                 |\n +-------------------------+\n | Enabled 547 instruments |\n +-------------------------+\n 1 row in set (0.01 sec)\n \n Query OK, 0 rows affected (0.01 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.setup_instruments SET enabled = \'YES\', timed = \'YES\' WHERE name LIKE CONCAT(\'%\', in_pattern, \'%\');  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' instrument\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_enable_thread','PROCEDURE','ps_setup_enable_thread','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_connection_id BIGINT ','','BEGIN UPDATE performance_schema.threads SET instrumented = \'YES\' WHERE processlist_id = in_connection_id;  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Enable the given connection/thread in Performance Schema.\n \n Parameters\n \n in_connection_id (BIGINT):\n The connection ID (PROCESSLIST_ID from performance_schema.threads\n or the ID shown within SHOW PROCESSLIST)\n \n Example\n \n mysql> CALL sys.ps_setup_enable_thread(3);\n +------------------+\n | summary          |\n +------------------+\n | Enabled 1 thread |\n +------------------+\n 1 row in set (0.01 sec)\n \n To enable the current connection:\n \n mysql> CALL sys.ps_setup_enable_thread(CONNECTION_ID());\n +------------------+\n | summary          |\n +------------------+\n | Enabled 1 thread |\n +------------------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN UPDATE performance_schema.threads SET instrumented = \'YES\' WHERE processlist_id = in_connection_id;  SELECT CONCAT(\'Enabled \', @rows := ROW_COUNT(), \' thread\', IF(@rows != 1, \'s\', \'\')) AS summary; END'),('sys','ps_setup_reload_saved','PROCEDURE','ps_setup_reload_saved','SQL','MODIFIES_SQL_DATA','NO','INVOKER','','','BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_lock_result INT; DECLARE v_lock_used_by BIGINT; DECLARE v_signal_message TEXT; DECLARE EXIT HANDLER FOR SQLEXCEPTION BEGIN SIGNAL SQLSTATE VALUE \'90001\' SET MESSAGE_TEXT = \'An error occurred, was sys.ps_setup_save() run before this procedure?\'; END;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT IS_USED_LOCK(\'sys.ps_setup_save\') INTO v_lock_used_by;  IF (v_lock_used_by != CONNECTION_ID()) THEN SET v_signal_message = CONCAT(\'The sys.ps_setup_save lock is currently owned by \', v_lock_used_by); SIGNAL SQLSTATE VALUE \'90002\' SET MESSAGE_TEXT = v_signal_message; END IF;  DELETE FROM performance_schema.setup_actors; INSERT INTO performance_schema.setup_actors SELECT * FROM tmp_setup_actors;  BEGIN DECLARE v_name varchar(64); DECLARE v_enabled enum(\'YES\', \'NO\'); DECLARE c_consumers CURSOR FOR SELECT NAME, ENABLED FROM tmp_setup_consumers; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET v_done = FALSE; OPEN c_consumers; c_consumers_loop: LOOP FETCH c_consumers INTO v_name, v_enabled; IF v_done THEN LEAVE c_consumers_loop; END IF;  UPDATE performance_schema.setup_consumers SET ENABLED = v_enabled WHERE NAME = v_name; END LOOP; CLOSE c_consumers; END;  UPDATE performance_schema.setup_instruments INNER JOIN tmp_setup_instruments USING (NAME) SET performance_schema.setup_instruments.ENABLED = tmp_setup_instruments.ENABLED, performance_schema.setup_instruments.TIMED   = tmp_setup_instruments.TIMED; BEGIN DECLARE v_thread_id bigint unsigned; DECLARE v_instrumented enum(\'YES\', \'NO\'); DECLARE c_threads CURSOR FOR SELECT THREAD_ID, INSTRUMENTED FROM tmp_threads; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET v_done = FALSE; OPEN c_threads; c_threads_loop: LOOP FETCH c_threads INTO v_thread_id, v_instrumented; IF v_done THEN LEAVE c_threads_loop; END IF;  UPDATE performance_schema.threads SET INSTRUMENTED = v_instrumented WHERE THREAD_ID = v_thread_id; END LOOP; CLOSE c_threads; END;  UPDATE performance_schema.threads SET INSTRUMENTED = IF(PROCESSLIST_USER IS NOT NULL, sys.ps_is_account_enabled(PROCESSLIST_HOST, PROCESSLIST_USER), \'YES\') WHERE THREAD_ID NOT IN (SELECT THREAD_ID FROM tmp_threads);  DROP TEMPORARY TABLE tmp_setup_actors; DROP TEMPORARY TABLE tmp_setup_consumers; DROP TEMPORARY TABLE tmp_setup_instruments; DROP TEMPORARY TABLE tmp_threads;  SELECT RELEASE_LOCK(\'sys.ps_setup_save\') INTO v_lock_result;  SET sql_log_bin = @log_bin;  END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Reloads a saved Performance Schema configuration,\n so that you can alter the setup for debugging purposes, \n but restore it to a previous state.\n \n Use the companion procedure - ps_setup_save(), to \n save a configuration.\n \n Requires the SUPER privilege for \"SET sql_log_bin = 0;\".\n \n Parameters\n \n None.\n \n Example\n \n mysql> CALL sys.ps_setup_save();\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> UPDATE performance_schema.setup_instruments SET enabled = \'YES\', timed = \'YES\';\n Query OK, 547 rows affected (0.40 sec)\n Rows matched: 784  Changed: 547  Warnings: 0\n \n /* Run some tests that need more detailed instrumentation here */\n \n mysql> CALL sys.ps_setup_reload_saved();\n Query OK, 0 rows affected (0.32 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_done bool DEFAULT FALSE; DECLARE v_lock_result INT; DECLARE v_lock_used_by BIGINT; DECLARE v_signal_message TEXT; DECLARE EXIT HANDLER FOR SQLEXCEPTION BEGIN SIGNAL SQLSTATE VALUE \'90001\' SET MESSAGE_TEXT = \'An error occurred, was sys.ps_setup_save() run before this procedure?\'; END;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT IS_USED_LOCK(\'sys.ps_setup_save\') INTO v_lock_used_by;  IF (v_lock_used_by != CONNECTION_ID()) THEN SET v_signal_message = CONCAT(\'The sys.ps_setup_save lock is currently owned by \', v_lock_used_by); SIGNAL SQLSTATE VALUE \'90002\' SET MESSAGE_TEXT = v_signal_message; END IF;  DELETE FROM performance_schema.setup_actors; INSERT INTO performance_schema.setup_actors SELECT * FROM tmp_setup_actors;  BEGIN DECLARE v_name varchar(64); DECLARE v_enabled enum(\'YES\', \'NO\'); DECLARE c_consumers CURSOR FOR SELECT NAME, ENABLED FROM tmp_setup_consumers; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET v_done = FALSE; OPEN c_consumers; c_consumers_loop: LOOP FETCH c_consumers INTO v_name, v_enabled; IF v_done THEN LEAVE c_consumers_loop; END IF;  UPDATE performance_schema.setup_consumers SET ENABLED = v_enabled WHERE NAME = v_name; END LOOP; CLOSE c_consumers; END;  UPDATE performance_schema.setup_instruments INNER JOIN tmp_setup_instruments USING (NAME) SET performance_schema.setup_instruments.ENABLED = tmp_setup_instruments.ENABLED, performance_schema.setup_instruments.TIMED   = tmp_setup_instruments.TIMED; BEGIN DECLARE v_thread_id bigint unsigned; DECLARE v_instrumented enum(\'YES\', \'NO\'); DECLARE c_threads CURSOR FOR SELECT THREAD_ID, INSTRUMENTED FROM tmp_threads; DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  SET v_done = FALSE; OPEN c_threads; c_threads_loop: LOOP FETCH c_threads INTO v_thread_id, v_instrumented; IF v_done THEN LEAVE c_threads_loop; END IF;  UPDATE performance_schema.threads SET INSTRUMENTED = v_instrumented WHERE THREAD_ID = v_thread_id; END LOOP; CLOSE c_threads; END;  UPDATE performance_schema.threads SET INSTRUMENTED = IF(PROCESSLIST_USER IS NOT NULL, sys.ps_is_account_enabled(PROCESSLIST_HOST, PROCESSLIST_USER), \'YES\') WHERE THREAD_ID NOT IN (SELECT THREAD_ID FROM tmp_threads);  DROP TEMPORARY TABLE tmp_setup_actors; DROP TEMPORARY TABLE tmp_setup_consumers; DROP TEMPORARY TABLE tmp_setup_instruments; DROP TEMPORARY TABLE tmp_threads;  SELECT RELEASE_LOCK(\'sys.ps_setup_save\') INTO v_lock_result;  SET sql_log_bin = @log_bin;  END'),('sys','ps_setup_reset_to_default','PROCEDURE','ps_setup_reset_to_default','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_verbose BOOLEAN ','','BEGIN SET @query = \'DELETE FROM performance_schema.setup_actors WHERE NOT (HOST = \'\'%\'\' AND USER = \'\'%\'\' AND ROLE = \'\'%\'\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_actors\\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'INSERT IGNORE INTO performance_schema.setup_actors VALUES (\'\'%\'\', \'\'%\'\', \'\'%\'\', \'\'YES\'\', \'\'YES\'\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_actors\\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'UPDATE performance_schema.setup_instruments SET ENABLED = sys.ps_is_instrument_default_enabled(NAME), TIMED   = sys.ps_is_instrument_default_timed(NAME)\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_instruments\\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'UPDATE performance_schema.setup_consumers SET ENABLED = IF(NAME IN (\'\'events_statements_current\'\', \'\'events_transactions_current\'\', \'\'global_instrumentation\'\', \'\'thread_instrumentation\'\', \'\'statements_digest\'\'), \'\'YES\'\', \'\'NO\'\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_consumers\\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'DELETE FROM performance_schema.setup_objects WHERE NOT (OBJECT_TYPE IN (\'\'EVENT\'\', \'\'FUNCTION\'\', \'\'PROCEDURE\'\', \'\'TABLE\'\', \'\'TRIGGER\'\') AND OBJECT_NAME = \'\'%\'\'  AND (OBJECT_SCHEMA = \'\'mysql\'\'              AND ENABLED = \'\'NO\'\'  AND TIMED = \'\'NO\'\' ) OR (OBJECT_SCHEMA = \'\'performance_schema\'\' AND ENABLED = \'\'NO\'\'  AND TIMED = \'\'NO\'\' ) OR (OBJECT_SCHEMA = \'\'information_schema\'\' AND ENABLED = \'\'NO\'\'  AND TIMED = \'\'NO\'\' ) OR (OBJECT_SCHEMA = \'\'%\'\'                  AND ENABLED = \'\'YES\'\' AND TIMED = \'\'YES\'\'))\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_objects\\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'INSERT IGNORE INTO performance_schema.setup_objects VALUES (\'\'EVENT\'\'    , \'\'mysql\'\'             , \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'EVENT\'\'    , \'\'performance_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'EVENT\'\'    , \'\'information_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'EVENT\'\'    , \'\'%\'\'                 , \'\'%\'\', \'\'YES\'\', \'\'YES\'\'), (\'\'FUNCTION\'\' , \'\'mysql\'\'             , \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'FUNCTION\'\' , \'\'performance_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'FUNCTION\'\' , \'\'information_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'FUNCTION\'\' , \'\'%\'\'                 , \'\'%\'\', \'\'YES\'\', \'\'YES\'\'), (\'\'PROCEDURE\'\', \'\'mysql\'\'             , \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'PROCEDURE\'\', \'\'performance_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'PROCEDURE\'\', \'\'information_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'PROCEDURE\'\', \'\'%\'\'                 , \'\'%\'\', \'\'YES\'\', \'\'YES\'\'), (\'\'TABLE\'\'    , \'\'mysql\'\'             , \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'TABLE\'\'    , \'\'performance_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'TABLE\'\'    , \'\'information_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'TABLE\'\'    , \'\'%\'\'                 , \'\'%\'\', \'\'YES\'\', \'\'YES\'\'), (\'\'TRIGGER\'\'  , \'\'mysql\'\'             , \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'TRIGGER\'\'  , \'\'performance_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'TRIGGER\'\'  , \'\'information_schema\'\', \'\'%\'\', \'\'NO\'\' , \'\'NO\'\' ), (\'\'TRIGGER\'\'  , \'\'%\'\'                 , \'\'%\'\', \'\'YES\'\', \'\'YES\'\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_objects\\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'UPDATE performance_schema.threads SET INSTRUMENTED = \'\'YES\'\'\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: threads\\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Resets the Performance Schema setup to the default settings.\n \n Parameters\n \n in_verbose (BOOLEAN):\n Whether to print each setup stage (including the SQL) whilst running.\n \n Example\n \n mysql> CALL sys.ps_setup_reset_to_default(true)\\G\n *************************** 1. row ***************************\n status: Resetting: setup_actors\n DELETE\n FROM performance_schema.setup_actors\n WHERE NOT (HOST = \'%\' AND USER = \'%\' AND ROLE = \'%\')\n 1 row in set (0.00 sec)\n \n *************************** 1. row ***************************\n status: Resetting: setup_actors\n INSERT IGNORE INTO performance_schema.setup_actors\n VALUES (\'%\', \'%\', \'%\')\n 1 row in set (0.00 sec)\n ...\n \n mysql> CALL sys.ps_setup_reset_to_default(false)\\G\n Query OK, 0 rows affected (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SET @query = \'DELETE FROM performance_schema.setup_actors WHERE NOT (HOST = \'%\' AND USER = \'%\' AND ROLE = \'%\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_actors\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'INSERT IGNORE INTO performance_schema.setup_actors VALUES (\'%\', \'%\', \'%\', \'YES\', \'YES\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_actors\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'UPDATE performance_schema.setup_instruments SET ENABLED = sys.ps_is_instrument_default_enabled(NAME), TIMED   = sys.ps_is_instrument_default_timed(NAME)\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_instruments\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'UPDATE performance_schema.setup_consumers SET ENABLED = IF(NAME IN (\'events_statements_current\', \'events_transactions_current\', \'global_instrumentation\', \'thread_instrumentation\', \'statements_digest\'), \'YES\', \'NO\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_consumers\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'DELETE FROM performance_schema.setup_objects WHERE NOT (OBJECT_TYPE IN (\'EVENT\', \'FUNCTION\', \'PROCEDURE\', \'TABLE\', \'TRIGGER\') AND OBJECT_NAME = \'%\'  AND (OBJECT_SCHEMA = \'mysql\'              AND ENABLED = \'NO\'  AND TIMED = \'NO\' ) OR (OBJECT_SCHEMA = \'performance_schema\' AND ENABLED = \'NO\'  AND TIMED = \'NO\' ) OR (OBJECT_SCHEMA = \'information_schema\' AND ENABLED = \'NO\'  AND TIMED = \'NO\' ) OR (OBJECT_SCHEMA = \'%\'                  AND ENABLED = \'YES\' AND TIMED = \'YES\'))\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_objects\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'INSERT IGNORE INTO performance_schema.setup_objects VALUES (\'EVENT\'    , \'mysql\'             , \'%\', \'NO\' , \'NO\' ), (\'EVENT\'    , \'performance_schema\', \'%\', \'NO\' , \'NO\' ), (\'EVENT\'    , \'information_schema\', \'%\', \'NO\' , \'NO\' ), (\'EVENT\'    , \'%\'                 , \'%\', \'YES\', \'YES\'), (\'FUNCTION\' , \'mysql\'             , \'%\', \'NO\' , \'NO\' ), (\'FUNCTION\' , \'performance_schema\', \'%\', \'NO\' , \'NO\' ), (\'FUNCTION\' , \'information_schema\', \'%\', \'NO\' , \'NO\' ), (\'FUNCTION\' , \'%\'                 , \'%\', \'YES\', \'YES\'), (\'PROCEDURE\', \'mysql\'             , \'%\', \'NO\' , \'NO\' ), (\'PROCEDURE\', \'performance_schema\', \'%\', \'NO\' , \'NO\' ), (\'PROCEDURE\', \'information_schema\', \'%\', \'NO\' , \'NO\' ), (\'PROCEDURE\', \'%\'                 , \'%\', \'YES\', \'YES\'), (\'TABLE\'    , \'mysql\'             , \'%\', \'NO\' , \'NO\' ), (\'TABLE\'    , \'performance_schema\', \'%\', \'NO\' , \'NO\' ), (\'TABLE\'    , \'information_schema\', \'%\', \'NO\' , \'NO\' ), (\'TABLE\'    , \'%\'                 , \'%\', \'YES\', \'YES\'), (\'TRIGGER\'  , \'mysql\'             , \'%\', \'NO\' , \'NO\' ), (\'TRIGGER\'  , \'performance_schema\', \'%\', \'NO\' , \'NO\' ), (\'TRIGGER\'  , \'information_schema\', \'%\', \'NO\' , \'NO\' ), (\'TRIGGER\'  , \'%\'                 , \'%\', \'YES\', \'YES\')\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: setup_objects\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt;  SET @query = \'UPDATE performance_schema.threads SET INSTRUMENTED = \'YES\'\';  IF (in_verbose) THEN SELECT CONCAT(\'Resetting: threads\n\', REPLACE(@query, \'  \', \'\')) AS status; END IF;  PREPARE reset_stmt FROM @query; EXECUTE reset_stmt; DEALLOCATE PREPARE reset_stmt; END'),('sys','ps_setup_save','PROCEDURE','ps_setup_save','SQL','MODIFIES_SQL_DATA','NO','INVOKER',' IN in_timeout INT ','','BEGIN DECLARE v_lock_result INT;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT GET_LOCK(\'sys.ps_setup_save\', in_timeout) INTO v_lock_result;  IF v_lock_result THEN DROP TEMPORARY TABLE IF EXISTS tmp_setup_actors; DROP TEMPORARY TABLE IF EXISTS tmp_setup_consumers; DROP TEMPORARY TABLE IF EXISTS tmp_setup_instruments; DROP TEMPORARY TABLE IF EXISTS tmp_threads;  CREATE TEMPORARY TABLE tmp_setup_actors LIKE performance_schema.setup_actors; CREATE TEMPORARY TABLE tmp_setup_consumers LIKE performance_schema.setup_consumers; CREATE TEMPORARY TABLE tmp_setup_instruments LIKE performance_schema.setup_instruments; CREATE TEMPORARY TABLE tmp_threads (THREAD_ID bigint unsigned NOT NULL PRIMARY KEY, INSTRUMENTED enum(\'YES\',\'NO\') NOT NULL);  INSERT INTO tmp_setup_actors SELECT * FROM performance_schema.setup_actors; INSERT INTO tmp_setup_consumers SELECT * FROM performance_schema.setup_consumers; INSERT INTO tmp_setup_instruments SELECT * FROM performance_schema.setup_instruments; INSERT INTO tmp_threads SELECT THREAD_ID, INSTRUMENTED FROM performance_schema.threads; ELSE SIGNAL SQLSTATE VALUE \'90000\' SET MESSAGE_TEXT = \'Could not lock the sys.ps_setup_save user lock, another thread has a saved configuration\'; END IF;  SET sql_log_bin = @log_bin; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Saves the current configuration of Performance Schema, \n so that you can alter the setup for debugging purposes, \n but restore it to a previous state.\n \n Use the companion procedure - ps_setup_reload_saved(), to \n restore the saved config.\n \n The named lock \"sys.ps_setup_save\" is taken before the\n current configuration is saved. If the attempt to get the named\n lock times out, an error occurs.\n \n The lock is released after the settings have been restored by\n calling ps_setup_reload_saved().\n \n Requires the SUPER privilege for \"SET sql_log_bin = 0;\".\n \n Parameters\n \n in_timeout INT\n The timeout in seconds used when trying to obtain the lock.\n A negative timeout means infinite timeout.\n \n Example\n \n mysql> CALL sys.ps_setup_save(-1);\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> UPDATE performance_schema.setup_instruments \n ->    SET enabled = \'YES\', timed = \'YES\';\n Query OK, 547 rows affected (0.40 sec)\n Rows matched: 784  Changed: 547  Warnings: 0\n \n /* Run some tests that need more detailed instrumentation here */\n \n mysql> CALL sys.ps_setup_reload_saved();\n Query OK, 0 rows affected (0.32 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_lock_result INT;  SET @log_bin := @@sql_log_bin; SET sql_log_bin = 0;  SELECT GET_LOCK(\'sys.ps_setup_save\', in_timeout) INTO v_lock_result;  IF v_lock_result THEN DROP TEMPORARY TABLE IF EXISTS tmp_setup_actors; DROP TEMPORARY TABLE IF EXISTS tmp_setup_consumers; DROP TEMPORARY TABLE IF EXISTS tmp_setup_instruments; DROP TEMPORARY TABLE IF EXISTS tmp_threads;  CREATE TEMPORARY TABLE tmp_setup_actors LIKE performance_schema.setup_actors; CREATE TEMPORARY TABLE tmp_setup_consumers LIKE performance_schema.setup_consumers; CREATE TEMPORARY TABLE tmp_setup_instruments LIKE performance_schema.setup_instruments; CREATE TEMPORARY TABLE tmp_threads (THREAD_ID bigint unsigned NOT NULL PRIMARY KEY, INSTRUMENTED enum(\'YES\',\'NO\') NOT NULL);  INSERT INTO tmp_setup_actors SELECT * FROM performance_schema.setup_actors; INSERT INTO tmp_setup_consumers SELECT * FROM performance_schema.setup_consumers; INSERT INTO tmp_setup_instruments SELECT * FROM performance_schema.setup_instruments; INSERT INTO tmp_threads SELECT THREAD_ID, INSTRUMENTED FROM performance_schema.threads; ELSE SIGNAL SQLSTATE VALUE \'90000\' SET MESSAGE_TEXT = \'Could not lock the sys.ps_setup_save user lock, another thread has a saved configuration\'; END IF;  SET sql_log_bin = @log_bin; END'),('sys','ps_setup_show_disabled','PROCEDURE','ps_setup_show_disabled','SQL','READS_SQL_DATA','NO','INVOKER',' IN in_show_instruments BOOLEAN, IN in_show_threads BOOLEAN ','','BEGIN SELECT @@performance_schema AS performance_schema_enabled;   SELECT CONCAT(\'\\\'\', user, \'\\\'@\\\'\', host, \'\\\'\') AS disabled_users FROM performance_schema.setup_actors WHERE enabled = \'NO\' ORDER BY disabled_users;   SELECT object_type, CONCAT(object_schema, \'.\', object_name) AS objects, enabled, timed FROM performance_schema.setup_objects WHERE enabled = \'NO\' ORDER BY object_type, objects;  SELECT name AS disabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'NO\' ORDER BY disabled_consumers;  IF (in_show_threads) THEN SELECT IF(name = \'thread/sql/one_connection\',  CONCAT(processlist_user, \'@\', processlist_host),  REPLACE(name, \'thread/\', \'\')) AS disabled_threads, TYPE AS thread_type FROM performance_schema.threads WHERE INSTRUMENTED = \'NO\' ORDER BY disabled_threads; END IF;  IF (in_show_instruments) THEN SELECT name AS disabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'NO\' ORDER BY disabled_instruments; END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Shows all currently disable Performance Schema configuration.\n \n Disabled users is only available for MySQL 5.7.6 and later.\n In earlier versions it was only possible to enable users.\n \n Parameters\n \n in_show_instruments (BOOLEAN):\n Whether to print disabled instruments (can print many items)\n \n in_show_threads (BOOLEAN):\n Whether to print disabled threads\n \n Example\n \n mysql> CALL sys.ps_setup_show_disabled(TRUE, TRUE);\n +----------------------------+\n | performance_schema_enabled |\n +----------------------------+\n |                          1 |\n +----------------------------+\n 1 row in set (0.00 sec)\n \n +--------------------+\n | disabled_users     |\n +--------------------+\n | \'mark\'@\'localhost\' |\n +--------------------+\n 1 row in set (0.00 sec)\n \n +-------------+----------------------+---------+-------+\n | object_type | objects              | enabled | timed |\n +-------------+----------------------+---------+-------+\n | EVENT       | mysql.%              | NO      | NO    |\n | EVENT       | performance_schema.% | NO      | NO    |\n | EVENT       | information_schema.% | NO      | NO    |\n | FUNCTION    | mysql.%              | NO      | NO    |\n | FUNCTION    | performance_schema.% | NO      | NO    |\n | FUNCTION    | information_schema.% | NO      | NO    |\n | PROCEDURE   | mysql.%              | NO      | NO    |\n | PROCEDURE   | performance_schema.% | NO      | NO    |\n | PROCEDURE   | information_schema.% | NO      | NO    |\n | TABLE       | mysql.%              | NO      | NO    |\n | TABLE       | performance_schema.% | NO      | NO    |\n | TABLE       | information_schema.% | NO      | NO    |\n | TRIGGER     | mysql.%              | NO      | NO    |\n | TRIGGER     | performance_schema.% | NO      | NO    |\n | TRIGGER     | information_schema.% | NO      | NO    |\n +-------------+----------------------+---------+-------+\n 15 rows in set (0.00 sec)\n \n +----------------------------------+\n | disabled_consumers               |\n +----------------------------------+\n | events_stages_current            |\n | events_stages_history            |\n | events_stages_history_long       |\n | events_statements_history        |\n | events_statements_history_long   |\n | events_transactions_history      |\n | events_transactions_history_long |\n | events_waits_current             |\n | events_waits_history             |\n | events_waits_history_long        |\n +----------------------------------+\n 10 rows in set (0.00 sec)\n \n Empty set (0.00 sec)\n \n +---------------------------------------------------------------------------------------+-------+\n | disabled_instruments                                                                  | timed |\n +---------------------------------------------------------------------------------------+-------+\n | wait/synch/mutex/sql/TC_LOG_MMAP::LOCK_tc                                             | NO    |\n | wait/synch/mutex/sql/LOCK_des_key_file                                                | NO    |\n | wait/synch/mutex/sql/MYSQL_BIN_LOG::LOCK_commit                                       | NO    |\n ...\n | memory/sql/servers_cache                                                              | NO    |\n | memory/sql/udf_mem                                                                    | NO    |\n | wait/lock/metadata/sql/mdl                                                            | NO    |\n +---------------------------------------------------------------------------------------+-------+\n 547 rows in set (0.00 sec)\n \n Query OK, 0 rows affected (0.01 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SELECT @@performance_schema AS performance_schema_enabled;   SELECT CONCAT(\'\'\', user, \'\'@\'\', host, \'\'\') AS disabled_users FROM performance_schema.setup_actors WHERE enabled = \'NO\' ORDER BY disabled_users;   SELECT object_type, CONCAT(object_schema, \'.\', object_name) AS objects, enabled, timed FROM performance_schema.setup_objects WHERE enabled = \'NO\' ORDER BY object_type, objects;  SELECT name AS disabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'NO\' ORDER BY disabled_consumers;  IF (in_show_threads) THEN SELECT IF(name = \'thread/sql/one_connection\',  CONCAT(processlist_user, \'@\', processlist_host),  REPLACE(name, \'thread/\', \'\')) AS disabled_threads, TYPE AS thread_type FROM performance_schema.threads WHERE INSTRUMENTED = \'NO\' ORDER BY disabled_threads; END IF;  IF (in_show_instruments) THEN SELECT name AS disabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'NO\' ORDER BY disabled_instruments; END IF; END'),('sys','ps_setup_show_disabled_consumers','PROCEDURE','ps_setup_show_disabled_consumers','SQL','READS_SQL_DATA','YES','INVOKER','','','BEGIN SELECT name AS disabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'NO\' ORDER BY disabled_consumers; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Shows all currently disabled consumers.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_disabled_consumers();\n \n +---------------------------+\n | disabled_consumers        |\n +---------------------------+\n | events_statements_current |\n | global_instrumentation    |\n | thread_instrumentation    |\n | statements_digest         |\n +---------------------------+\n 4 rows in set (0.05 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SELECT name AS disabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'NO\' ORDER BY disabled_consumers; END'),('sys','ps_setup_show_disabled_instruments','PROCEDURE','ps_setup_show_disabled_instruments','SQL','READS_SQL_DATA','YES','INVOKER','','','BEGIN SELECT name AS disabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'NO\' ORDER BY disabled_instruments; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Shows all currently disabled instruments.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_disabled_instruments();\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SELECT name AS disabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'NO\' ORDER BY disabled_instruments; END'),('sys','ps_setup_show_enabled','PROCEDURE','ps_setup_show_enabled','SQL','READS_SQL_DATA','YES','INVOKER',' IN in_show_instruments BOOLEAN, IN in_show_threads BOOLEAN ','','BEGIN SELECT @@performance_schema AS performance_schema_enabled;  SELECT CONCAT(\'\\\'\', user, \'\\\'@\\\'\', host, \'\\\'\') AS enabled_users FROM performance_schema.setup_actors  WHERE enabled = \'YES\'  ORDER BY enabled_users;  SELECT object_type, CONCAT(object_schema, \'.\', object_name) AS objects, enabled, timed FROM performance_schema.setup_objects WHERE enabled = \'YES\' ORDER BY object_type, objects;  SELECT name AS enabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'YES\' ORDER BY enabled_consumers;  IF (in_show_threads) THEN SELECT IF(name = \'thread/sql/one_connection\',  CONCAT(processlist_user, \'@\', processlist_host),  REPLACE(name, \'thread/\', \'\')) AS enabled_threads, TYPE AS thread_type FROM performance_schema.threads WHERE INSTRUMENTED = \'YES\' ORDER BY enabled_threads; END IF;  IF (in_show_instruments) THEN SELECT name AS enabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'YES\' ORDER BY enabled_instruments; END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Shows all currently enabled Performance Schema configuration.\n \n Parameters\n \n in_show_instruments (BOOLEAN):\n Whether to print enabled instruments (can print many items)\n \n in_show_threads (BOOLEAN):\n Whether to print enabled threads\n \n Example\n \n mysql> CALL sys.ps_setup_show_enabled(TRUE, TRUE);\n +----------------------------+\n | performance_schema_enabled |\n +----------------------------+\n |                          1 |\n +----------------------------+\n 1 row in set (0.00 sec)\n \n +---------------+\n | enabled_users |\n +---------------+\n | \'%\'@\'%\'       |\n +---------------+\n 1 row in set (0.01 sec)\n \n +-------------+---------+---------+-------+\n | object_type | objects | enabled | timed |\n +-------------+---------+---------+-------+\n | EVENT       | %.%     | YES     | YES   |\n | FUNCTION    | %.%     | YES     | YES   |\n | PROCEDURE   | %.%     | YES     | YES   |\n | TABLE       | %.%     | YES     | YES   |\n | TRIGGER     | %.%     | YES     | YES   |\n +-------------+---------+---------+-------+\n 5 rows in set (0.01 sec)\n \n +---------------------------+\n | enabled_consumers         |\n +---------------------------+\n | events_statements_current |\n | global_instrumentation    |\n | thread_instrumentation    |\n | statements_digest         |\n +---------------------------+\n 4 rows in set (0.05 sec)\n \n +---------------------------------+-------------+\n | enabled_threads                 | thread_type |\n +---------------------------------+-------------+\n | sql/main                        | BACKGROUND  |\n | sql/thread_timer_notifier       | BACKGROUND  |\n | innodb/io_ibuf_thread           | BACKGROUND  |\n | innodb/io_log_thread            | BACKGROUND  |\n | innodb/io_read_thread           | BACKGROUND  |\n | innodb/io_read_thread           | BACKGROUND  |\n | innodb/io_write_thread          | BACKGROUND  |\n | innodb/io_write_thread          | BACKGROUND  |\n | innodb/page_cleaner_thread      | BACKGROUND  |\n | innodb/srv_lock_timeout_thread  | BACKGROUND  |\n | innodb/srv_error_monitor_thread | BACKGROUND  |\n | innodb/srv_monitor_thread       | BACKGROUND  |\n | innodb/srv_master_thread        | BACKGROUND  |\n | innodb/srv_purge_thread         | BACKGROUND  |\n | innodb/srv_worker_thread        | BACKGROUND  |\n | innodb/srv_worker_thread        | BACKGROUND  |\n | innodb/srv_worker_thread        | BACKGROUND  |\n | innodb/buf_dump_thread          | BACKGROUND  |\n | innodb/dict_stats_thread        | BACKGROUND  |\n | sql/signal_handler              | BACKGROUND  |\n | sql/compress_gtid_table         | FOREGROUND  |\n | root@localhost                  | FOREGROUND  |\n +---------------------------------+-------------+\n 22 rows in set (0.01 sec)\n \n +-------------------------------------+-------+\n | enabled_instruments                 | timed |\n +-------------------------------------+-------+\n | wait/io/file/sql/map                | YES   |\n | wait/io/file/sql/binlog             | YES   |\n ...\n | statement/com/Error                 | YES   |\n | statement/com/                      | YES   |\n | idle                                | YES   |\n +-------------------------------------+-------+\n 210 rows in set (0.08 sec)\n \n Query OK, 0 rows affected (0.89 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SELECT @@performance_schema AS performance_schema_enabled;  SELECT CONCAT(\'\'\', user, \'\'@\'\', host, \'\'\') AS enabled_users FROM performance_schema.setup_actors  WHERE enabled = \'YES\'  ORDER BY enabled_users;  SELECT object_type, CONCAT(object_schema, \'.\', object_name) AS objects, enabled, timed FROM performance_schema.setup_objects WHERE enabled = \'YES\' ORDER BY object_type, objects;  SELECT name AS enabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'YES\' ORDER BY enabled_consumers;  IF (in_show_threads) THEN SELECT IF(name = \'thread/sql/one_connection\',  CONCAT(processlist_user, \'@\', processlist_host),  REPLACE(name, \'thread/\', \'\')) AS enabled_threads, TYPE AS thread_type FROM performance_schema.threads WHERE INSTRUMENTED = \'YES\' ORDER BY enabled_threads; END IF;  IF (in_show_instruments) THEN SELECT name AS enabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'YES\' ORDER BY enabled_instruments; END IF; END'),('sys','ps_setup_show_enabled_consumers','PROCEDURE','ps_setup_show_enabled_consumers','SQL','READS_SQL_DATA','YES','INVOKER','','','BEGIN SELECT name AS enabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'YES\' ORDER BY enabled_consumers; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Shows all currently enabled consumers.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_enabled_consumers();\n \n +---------------------------+\n | enabled_consumers         |\n +---------------------------+\n | events_statements_current |\n | global_instrumentation    |\n | thread_instrumentation    |\n | statements_digest         |\n +---------------------------+\n 4 rows in set (0.05 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SELECT name AS enabled_consumers FROM performance_schema.setup_consumers WHERE enabled = \'YES\' ORDER BY enabled_consumers; END'),('sys','ps_setup_show_enabled_instruments','PROCEDURE','ps_setup_show_enabled_instruments','SQL','READS_SQL_DATA','YES','INVOKER','','','BEGIN SELECT name AS enabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'YES\' ORDER BY enabled_instruments; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Shows all currently enabled instruments.\n \n Parameters\n \n None\n \n Example\n \n mysql> CALL sys.ps_setup_show_enabled_instruments();\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN SELECT name AS enabled_instruments, timed FROM performance_schema.setup_instruments WHERE enabled = \'YES\' ORDER BY enabled_instruments; END'),('sys','ps_truncate_all_tables','PROCEDURE','ps_truncate_all_tables','SQL','MODIFIES_SQL_DATA','YES','INVOKER',' IN in_verbose BOOLEAN ','','BEGIN DECLARE v_done INT DEFAULT FALSE; DECLARE v_total_tables INT DEFAULT 0; DECLARE v_ps_table VARCHAR(64); DECLARE ps_tables CURSOR FOR SELECT table_name  FROM INFORMATION_SCHEMA.TABLES  WHERE table_schema = \'performance_schema\'  AND (table_name LIKE \'%summary%\'  OR table_name LIKE \'%history%\'); DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  OPEN ps_tables;  ps_tables_loop: LOOP FETCH ps_tables INTO v_ps_table; IF v_done THEN LEAVE ps_tables_loop; END IF;  SET @truncate_stmt := CONCAT(\'TRUNCATE TABLE performance_schema.\', v_ps_table); IF in_verbose THEN SELECT CONCAT(\'Running: \', @truncate_stmt) AS status; END IF;  PREPARE truncate_stmt FROM @truncate_stmt; EXECUTE truncate_stmt; DEALLOCATE PREPARE truncate_stmt;  SET v_total_tables = v_total_tables + 1; END LOOP;  CLOSE ps_tables;  SELECT CONCAT(\'Truncated \', v_total_tables, \' tables\') AS summary;  END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Truncates all summary tables within Performance Schema, \n resetting all aggregated instrumentation as a snapshot.\n \n Parameters\n \n in_verbose (BOOLEAN):\n Whether to print each TRUNCATE statement before running\n \n Example\n \n mysql> CALL sys.ps_truncate_all_tables(false);\n +---------------------+\n | summary             |\n +---------------------+\n | Truncated 44 tables |\n +---------------------+\n 1 row in set (0.10 sec)\n \n Query OK, 0 rows affected (0.10 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_done INT DEFAULT FALSE; DECLARE v_total_tables INT DEFAULT 0; DECLARE v_ps_table VARCHAR(64); DECLARE ps_tables CURSOR FOR SELECT table_name  FROM INFORMATION_SCHEMA.TABLES  WHERE table_schema = \'performance_schema\'  AND (table_name LIKE \'%summary%\'  OR table_name LIKE \'%history%\'); DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = TRUE;  OPEN ps_tables;  ps_tables_loop: LOOP FETCH ps_tables INTO v_ps_table; IF v_done THEN LEAVE ps_tables_loop; END IF;  SET @truncate_stmt := CONCAT(\'TRUNCATE TABLE performance_schema.\', v_ps_table); IF in_verbose THEN SELECT CONCAT(\'Running: \', @truncate_stmt) AS status; END IF;  PREPARE truncate_stmt FROM @truncate_stmt; EXECUTE truncate_stmt; DEALLOCATE PREPARE truncate_stmt;  SET v_total_tables = v_total_tables + 1; END LOOP;  CLOSE ps_tables;  SELECT CONCAT(\'Truncated \', v_total_tables, \' tables\') AS summary;  END'),('sys','statement_performance_analyzer','PROCEDURE','statement_performance_analyzer','SQL','CONTAINS_SQL','NO','INVOKER',' IN in_action ENUM(\'snapshot\', \'overall\', \'delta\', \'create_table\', \'create_tmp\', \'save\', \'cleanup\'), IN in_table VARCHAR(129), IN in_views SET (\'with_runtimes_in_95th_percentile\', \'analysis\', \'with_errors_or_warnings\', \'with_full_table_scans\', \'with_sorting\', \'with_temp_tables\', \'custom\') ','','BEGIN DECLARE v_table_exists, v_tmp_digests_table_exists, v_custom_view_exists ENUM(\'\', \'BASE TABLE\', \'VIEW\', \'TEMPORARY\') DEFAULT \'\'; DECLARE v_this_thread_enabled ENUM(\'YES\', \'NO\'); DECLARE v_force_new_snapshot BOOLEAN DEFAULT FALSE; DECLARE v_digests_table VARCHAR(133); DECLARE v_quoted_table, v_quoted_custom_view VARCHAR(133) DEFAULT \'\'; DECLARE v_table_db, v_table_name, v_custom_db, v_custom_name VARCHAR(64); DECLARE v_digest_table_template, v_checksum_ref, v_checksum_table text; DECLARE v_sql longtext; DECLARE v_error_msg VARCHAR(128);   SELECT INSTRUMENTED INTO v_this_thread_enabled FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_disable_thread(CONNECTION_ID()); END IF;  SET @log_bin := @@sql_log_bin; IF (@log_bin = 1) THEN SET sql_log_bin = 0; END IF;   IF (@sys.statement_performance_analyzer.limit IS NULL) THEN SET @sys.statement_performance_analyzer.limit = sys.sys_get_config(\'statement_performance_analyzer.limit\', \'100\'); END IF; IF (@sys.debug IS NULL) THEN SET @sys.debug                                = sys.sys_get_config(\'debug\'                               , \'OFF\'); END IF;   IF (in_table = \'NOW()\') THEN SET v_force_new_snapshot = TRUE, in_table             = NULL; ELSEIF (in_table IS NOT NULL) THEN IF (NOT INSTR(in_table, \'.\')) THEN SET v_table_db   = DATABASE(), v_table_name = in_table; ELSE SET v_table_db   = SUBSTRING_INDEX(in_table, \'.\', 1); SET v_table_name = SUBSTRING(in_table, CHAR_LENGTH(v_table_db)+2); END IF;  SET v_quoted_table = CONCAT(\'`\', v_table_db, \'`.`\', v_table_name, \'`\');  IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'in_table is: db = \'\'\', v_table_db, \'\'\', table = \'\'\', v_table_name, \'\'\'\') AS \'Debug\'; END IF;  IF (v_table_db = DATABASE() AND (v_table_name = \'tmp_digests\' OR v_table_name = \'tmp_digests_delta\')) THEN SET v_error_msg = CONCAT(\'Invalid value for in_table: \', v_quoted_table, \' is reserved table name.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  CALL sys.table_exists(v_table_db, v_table_name, v_table_exists); IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'v_table_exists = \', v_table_exists) AS \'Debug\'; END IF;  IF (v_table_exists = \'BASE TABLE\') THEN SET v_checksum_ref = ( SELECT GROUP_CONCAT(CONCAT(COLUMN_NAME, COLUMN_TYPE) ORDER BY ORDINAL_POSITION) AS Checksum FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = \'performance_schema\' AND TABLE_NAME = \'events_statements_summary_by_digest\' ), v_checksum_table = ( SELECT GROUP_CONCAT(CONCAT(COLUMN_NAME, COLUMN_TYPE) ORDER BY ORDINAL_POSITION) AS Checksum FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = v_table_db AND TABLE_NAME = v_table_name );  IF (v_checksum_ref <> v_checksum_table) THEN SET v_error_msg = CONCAT(\'The table \', IF(CHAR_LENGTH(v_quoted_table) > 93, CONCAT(\'...\', SUBSTRING(v_quoted_table, -90)), v_quoted_table), \' has the wrong definition.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF; END IF; END IF;   IF (in_views IS NULL OR in_views = \'\') THEN SET in_views = \'with_runtimes_in_95th_percentile,analysis,with_errors_or_warnings,with_full_table_scans,with_sorting,with_temp_tables\'; END IF;   CALL sys.table_exists(DATABASE(), \'tmp_digests\', v_tmp_digests_table_exists); IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'v_tmp_digests_table_exists = \', v_tmp_digests_table_exists) AS \'Debug\'; END IF;  CASE WHEN in_action IN (\'snapshot\', \'overall\') THEN IF (in_table IS NOT NULL) THEN IF (NOT v_table_exists IN (\'TEMPORARY\', \'BASE TABLE\')) THEN SET v_error_msg = CONCAT(\'The \', in_action, \' action requires in_table to be NULL, NOW() or specify an existing table.\', \' The table \', IF(CHAR_LENGTH(v_quoted_table) > 16, CONCAT(\'...\', SUBSTRING(v_quoted_table, -13)), v_quoted_table), \' does not exist.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF; END IF;  WHEN in_action IN (\'delta\', \'save\') THEN IF (v_table_exists NOT IN (\'TEMPORARY\', \'BASE TABLE\')) THEN SET v_error_msg = CONCAT(\'The \', in_action, \' action requires in_table to be an existing table.\', IF(in_table IS NOT NULL, CONCAT(\' The table \', IF(CHAR_LENGTH(v_quoted_table) > 39, CONCAT(\'...\', SUBSTRING(v_quoted_table, -36)), v_quoted_table), \' does not exist.\'), \'\')); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  IF (in_action = \'delta\' AND v_tmp_digests_table_exists <> \'TEMPORARY\') THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'An existing snapshot generated with the statement_performance_analyzer() must exist.\'; END IF; WHEN in_action = \'create_tmp\' THEN IF (v_table_exists = \'TEMPORARY\') THEN SET v_error_msg = CONCAT(\'Cannot create the table \', IF(CHAR_LENGTH(v_quoted_table) > 72, CONCAT(\'...\', SUBSTRING(v_quoted_table, -69)), v_quoted_table), \' as it already exists.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  WHEN in_action = \'create_table\' THEN IF (v_table_exists <> \'\') THEN SET v_error_msg = CONCAT(\'Cannot create the table \', IF(CHAR_LENGTH(v_quoted_table) > 52, CONCAT(\'...\', SUBSTRING(v_quoted_table, -49)), v_quoted_table), \' as it already exists\', IF(v_table_exists = \'TEMPORARY\', \' as a temporary table.\', \'.\')); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  WHEN in_action = \'cleanup\' THEN DO (SELECT 1); ELSE SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'Unknown action. Supported actions are: cleanup, create_table, create_tmp, delta, overall, save, snapshot\'; END CASE;  SET v_digest_table_template = \'CREATE %{TEMPORARY}TABLE %{TABLE_NAME} ( `SCHEMA_NAME` varchar(64) DEFAULT NULL, `DIGEST` varchar(32) DEFAULT NULL, `DIGEST_TEXT` longtext, `COUNT_STAR` bigint(20) unsigned NOT NULL, `SUM_TIMER_WAIT` bigint(20) unsigned NOT NULL, `MIN_TIMER_WAIT` bigint(20) unsigned NOT NULL, `AVG_TIMER_WAIT` bigint(20) unsigned NOT NULL, `MAX_TIMER_WAIT` bigint(20) unsigned NOT NULL, `SUM_LOCK_TIME` bigint(20) unsigned NOT NULL, `SUM_ERRORS` bigint(20) unsigned NOT NULL, `SUM_WARNINGS` bigint(20) unsigned NOT NULL, `SUM_ROWS_AFFECTED` bigint(20) unsigned NOT NULL, `SUM_ROWS_SENT` bigint(20) unsigned NOT NULL, `SUM_ROWS_EXAMINED` bigint(20) unsigned NOT NULL, `SUM_CREATED_TMP_DISK_TABLES` bigint(20) unsigned NOT NULL, `SUM_CREATED_TMP_TABLES` bigint(20) unsigned NOT NULL, `SUM_SELECT_FULL_JOIN` bigint(20) unsigned NOT NULL, `SUM_SELECT_FULL_RANGE_JOIN` bigint(20) unsigned NOT NULL, `SUM_SELECT_RANGE` bigint(20) unsigned NOT NULL, `SUM_SELECT_RANGE_CHECK` bigint(20) unsigned NOT NULL, `SUM_SELECT_SCAN` bigint(20) unsigned NOT NULL, `SUM_SORT_MERGE_PASSES` bigint(20) unsigned NOT NULL, `SUM_SORT_RANGE` bigint(20) unsigned NOT NULL, `SUM_SORT_ROWS` bigint(20) unsigned NOT NULL, `SUM_SORT_SCAN` bigint(20) unsigned NOT NULL, `SUM_NO_INDEX_USED` bigint(20) unsigned NOT NULL, `SUM_NO_GOOD_INDEX_USED` bigint(20) unsigned NOT NULL, `FIRST_SEEN` timestamp NULL DEFAULT NULL, `LAST_SEEN` timestamp NULL DEFAULT NULL, INDEX (SCHEMA_NAME, DIGEST) ) DEFAULT CHARSET=utf8\';  IF (v_force_new_snapshot OR in_action = \'snapshot\' OR (in_action = \'overall\' AND in_table IS NULL) OR (in_action = \'save\' AND v_tmp_digests_table_exists <> \'TEMPORARY\') ) THEN IF (v_tmp_digests_table_exists = \'TEMPORARY\') THEN IF (@sys.debug = \'ON\') THEN SELECT \'DROP TEMPORARY TABLE IF EXISTS tmp_digests\' AS \'Debug\'; END IF; DROP TEMPORARY TABLE IF EXISTS tmp_digests; END IF; CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, \'%{TEMPORARY}\', \'TEMPORARY \'), \'%{TABLE_NAME}\', \'tmp_digests\'));  SET v_sql = CONCAT(\'INSERT INTO tmp_digests SELECT * FROM \', IF(in_table IS NULL OR in_action = \'save\', \'performance_schema.events_statements_summary_by_digest\', v_quoted_table)); CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (in_action IN (\'create_table\', \'create_tmp\')) THEN IF (in_action = \'create_table\') THEN CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, \'%{TEMPORARY}\', \'\'), \'%{TABLE_NAME}\', v_quoted_table)); ELSE CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, \'%{TEMPORARY}\', \'TEMPORARY \'), \'%{TABLE_NAME}\', v_quoted_table)); END IF; ELSEIF (in_action = \'save\') THEN CALL sys.execute_prepared_stmt(CONCAT(\'DELETE FROM \', v_quoted_table)); CALL sys.execute_prepared_stmt(CONCAT(\'INSERT INTO \', v_quoted_table, \' SELECT * FROM tmp_digests\')); ELSEIF (in_action = \'cleanup\') THEN DROP TEMPORARY TABLE IF EXISTS sys.tmp_digests; DROP TEMPORARY TABLE IF EXISTS sys.tmp_digests_delta; ELSEIF (in_action IN (\'overall\', \'delta\')) THEN IF (in_action = \'overall\') THEN IF (in_table IS NULL) THEN SET v_digests_table = \'tmp_digests\'; ELSE SET v_digests_table = v_quoted_table; END IF; ELSE SET v_digests_table = \'tmp_digests_delta\'; DROP TEMPORARY TABLE IF EXISTS tmp_digests_delta; CREATE TEMPORARY TABLE tmp_digests_delta LIKE tmp_digests; SET v_sql = CONCAT(\'INSERT INTO tmp_digests_delta SELECT `d_end`.`SCHEMA_NAME`, `d_end`.`DIGEST`, `d_end`.`DIGEST_TEXT`, `d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0) AS \'\'COUNT_STAR\'\', `d_end`.`SUM_TIMER_WAIT`-IFNULL(`d_start`.`SUM_TIMER_WAIT`, 0) AS \'\'SUM_TIMER_WAIT\'\', `d_end`.`MIN_TIMER_WAIT` AS \'\'MIN_TIMER_WAIT\'\', IFNULL((`d_end`.`SUM_TIMER_WAIT`-IFNULL(`d_start`.`SUM_TIMER_WAIT`, 0))/NULLIF(`d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0), 0), 0) AS \'\'AVG_TIMER_WAIT\'\', `d_end`.`MAX_TIMER_WAIT` AS \'\'MAX_TIMER_WAIT\'\', `d_end`.`SUM_LOCK_TIME`-IFNULL(`d_start`.`SUM_LOCK_TIME`, 0) AS \'\'SUM_LOCK_TIME\'\', `d_end`.`SUM_ERRORS`-IFNULL(`d_start`.`SUM_ERRORS`, 0) AS \'\'SUM_ERRORS\'\', `d_end`.`SUM_WARNINGS`-IFNULL(`d_start`.`SUM_WARNINGS`, 0) AS \'\'SUM_WARNINGS\'\', `d_end`.`SUM_ROWS_AFFECTED`-IFNULL(`d_start`.`SUM_ROWS_AFFECTED`, 0) AS \'\'SUM_ROWS_AFFECTED\'\', `d_end`.`SUM_ROWS_SENT`-IFNULL(`d_start`.`SUM_ROWS_SENT`, 0) AS \'\'SUM_ROWS_SENT\'\', `d_end`.`SUM_ROWS_EXAMINED`-IFNULL(`d_start`.`SUM_ROWS_EXAMINED`, 0) AS \'\'SUM_ROWS_EXAMINED\'\', `d_end`.`SUM_CREATED_TMP_DISK_TABLES`-IFNULL(`d_start`.`SUM_CREATED_TMP_DISK_TABLES`, 0) AS \'\'SUM_CREATED_TMP_DISK_TABLES\'\', `d_end`.`SUM_CREATED_TMP_TABLES`-IFNULL(`d_start`.`SUM_CREATED_TMP_TABLES`, 0) AS \'\'SUM_CREATED_TMP_TABLES\'\', `d_end`.`SUM_SELECT_FULL_JOIN`-IFNULL(`d_start`.`SUM_SELECT_FULL_JOIN`, 0) AS \'\'SUM_SELECT_FULL_JOIN\'\', `d_end`.`SUM_SELECT_FULL_RANGE_JOIN`-IFNULL(`d_start`.`SUM_SELECT_FULL_RANGE_JOIN`, 0) AS \'\'SUM_SELECT_FULL_RANGE_JOIN\'\', `d_end`.`SUM_SELECT_RANGE`-IFNULL(`d_start`.`SUM_SELECT_RANGE`, 0) AS \'\'SUM_SELECT_RANGE\'\', `d_end`.`SUM_SELECT_RANGE_CHECK`-IFNULL(`d_start`.`SUM_SELECT_RANGE_CHECK`, 0) AS \'\'SUM_SELECT_RANGE_CHECK\'\', `d_end`.`SUM_SELECT_SCAN`-IFNULL(`d_start`.`SUM_SELECT_SCAN`, 0) AS \'\'SUM_SELECT_SCAN\'\', `d_end`.`SUM_SORT_MERGE_PASSES`-IFNULL(`d_start`.`SUM_SORT_MERGE_PASSES`, 0) AS \'\'SUM_SORT_MERGE_PASSES\'\', `d_end`.`SUM_SORT_RANGE`-IFNULL(`d_start`.`SUM_SORT_RANGE`, 0) AS \'\'SUM_SORT_RANGE\'\', `d_end`.`SUM_SORT_ROWS`-IFNULL(`d_start`.`SUM_SORT_ROWS`, 0) AS \'\'SUM_SORT_ROWS\'\', `d_end`.`SUM_SORT_SCAN`-IFNULL(`d_start`.`SUM_SORT_SCAN`, 0) AS \'\'SUM_SORT_SCAN\'\', `d_end`.`SUM_NO_INDEX_USED`-IFNULL(`d_start`.`SUM_NO_INDEX_USED`, 0) AS \'\'SUM_NO_INDEX_USED\'\', `d_end`.`SUM_NO_GOOD_INDEX_USED`-IFNULL(`d_start`.`SUM_NO_GOOD_INDEX_USED`, 0) AS \'\'SUM_NO_GOOD_INDEX_USED\'\', `d_end`.`FIRST_SEEN`, `d_end`.`LAST_SEEN` FROM tmp_digests d_end LEFT OUTER JOIN \', v_quoted_table, \' d_start ON `d_start`.`DIGEST` = `d_end`.`DIGEST` AND (`d_start`.`SCHEMA_NAME` = `d_end`.`SCHEMA_NAME` OR (`d_start`.`SCHEMA_NAME` IS NULL AND `d_end`.`SCHEMA_NAME` IS NULL) ) WHERE `d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0) > 0\'); CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_runtimes_in_95th_percentile\', in_views)) THEN SELECT \'Queries with Runtime in 95th Percentile\' AS \'Next Output\';  DROP TEMPORARY TABLE IF EXISTS tmp_digest_avg_latency_distribution1; DROP TEMPORARY TABLE IF EXISTS tmp_digest_avg_latency_distribution2; DROP TEMPORARY TABLE IF EXISTS tmp_digest_95th_percentile_by_avg_us;  CREATE TEMPORARY TABLE tmp_digest_avg_latency_distribution1 ( cnt bigint unsigned NOT NULL, avg_us decimal(21,0) NOT NULL, PRIMARY KEY (avg_us) ) ENGINE=InnoDB;  SET v_sql = CONCAT(\'INSERT INTO tmp_digest_avg_latency_distribution1 SELECT COUNT(*) cnt,  ROUND(avg_timer_wait/1000000) AS avg_us FROM \', v_digests_table, \' GROUP BY avg_us\'); CALL sys.execute_prepared_stmt(v_sql);  CREATE TEMPORARY TABLE tmp_digest_avg_latency_distribution2 LIKE tmp_digest_avg_latency_distribution1; INSERT INTO tmp_digest_avg_latency_distribution2 SELECT * FROM tmp_digest_avg_latency_distribution1;  CREATE TEMPORARY TABLE tmp_digest_95th_percentile_by_avg_us ( avg_us decimal(21,0) NOT NULL, percentile decimal(46,4) NOT NULL, PRIMARY KEY (avg_us) ) ENGINE=InnoDB;  SET v_sql = CONCAT(\'INSERT INTO tmp_digest_95th_percentile_by_avg_us SELECT s2.avg_us avg_us, IFNULL(SUM(s1.cnt)/NULLIF((SELECT COUNT(*) FROM \', v_digests_table, \'), 0), 0) percentile FROM tmp_digest_avg_latency_distribution1 AS s1 JOIN tmp_digest_avg_latency_distribution2 AS s2 ON s1.avg_us <= s2.avg_us GROUP BY s2.avg_us HAVING percentile > 0.95 ORDER BY percentile LIMIT 1\'); CALL sys.execute_prepared_stmt(v_sql);  SET v_sql = REPLACE( REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_runtimes_in_95th_percentile\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ), \'sys.x$ps_digest_95th_percentile_by_avg_us\', \'`sys`.`x$ps_digest_95th_percentile_by_avg_us`\' ); CALL sys.execute_prepared_stmt(v_sql);  DROP TEMPORARY TABLE tmp_digest_avg_latency_distribution1; DROP TEMPORARY TABLE tmp_digest_avg_latency_distribution2; DROP TEMPORARY TABLE tmp_digest_95th_percentile_by_avg_us; END IF;  IF (FIND_IN_SET(\'analysis\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries Ordered by Total Latency\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statement_analysis\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_errors_or_warnings\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Errors\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_errors_or_warnings\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_full_table_scans\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Full Table Scan\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_full_table_scans\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_sorting\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Sorting\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_sorting\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_temp_tables\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Internal Temporary Tables\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_temp_tables\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'custom\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries Using Custom View\') AS \'Next Output\';  IF (@sys.statement_performance_analyzer.view IS NULL) THEN SET @sys.statement_performance_analyzer.view = sys.sys_get_config(\'statement_performance_analyzer.view\', NULL); END IF; IF (@sys.statement_performance_analyzer.view IS NULL) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'The @sys.statement_performance_analyzer.view user variable must be set with the view or query to use.\'; END IF;  IF (NOT INSTR(@sys.statement_performance_analyzer.view, \' \')) THEN IF (NOT INSTR(@sys.statement_performance_analyzer.view, \'.\')) THEN SET v_custom_db   = DATABASE(), v_custom_name = @sys.statement_performance_analyzer.view; ELSE SET v_custom_db   = SUBSTRING_INDEX(@sys.statement_performance_analyzer.view, \'.\', 1); SET v_custom_name = SUBSTRING(@sys.statement_performance_analyzer.view, CHAR_LENGTH(v_custom_db)+2); END IF;  CALL sys.table_exists(v_custom_db, v_custom_name, v_custom_view_exists); IF (v_custom_view_exists <> \'VIEW\') THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'The @sys.statement_performance_analyzer.view user variable is set but specified neither an existing view nor a query.\'; END IF;  SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = v_custom_db AND TABLE_NAME = v_custom_name ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); ELSE SET v_sql = REPLACE(@sys.statement_performance_analyzer.view, \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table); END IF;  IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF;  CALL sys.execute_prepared_stmt(v_sql); END IF; END IF;  IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  IF (@log_bin = 1) THEN SET sql_log_bin = @log_bin; END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Create a report of the statements running on the server.\n \n The views are calculated based on the overall and/or delta activity.\n \n Requires the SUPER privilege for \"SET sql_log_bin = 0;\".\n \n Parameters\n \n in_action (ENUM(\'snapshot\', \'overall\', \'delta\', \'create_tmp\', \'create_table\', \'save\', \'cleanup\')):\n The action to take. Supported actions are:\n * snapshot      Store a snapshot. The default is to make a snapshot of the current content of\n performance_schema.events_statements_summary_by_digest, but by setting in_table\n this can be overwritten to copy the content of the specified table.\n The snapshot is stored in the sys.tmp_digests temporary table.\n * overall       Generate analyzis based on the content specified by in_table. For the overall analyzis,\n in_table can be NOW() to use a fresh snapshot. This will overwrite an existing snapshot.\n Use NULL for in_table to use the existing snapshot. If in_table IS NULL and no snapshot\n exists, a new will be created.\n See also in_views and @sys.statement_performance_analyzer.limit.\n * delta         Generate a delta analysis. The delta will be calculated between the reference table in\n in_table and the snapshot. An existing snapshot must exist.\n The action uses the sys.tmp_digests_delta temporary table.\n See also in_views and @sys.statement_performance_analyzer.limit.\n * create_table  Create a regular table suitable for storing the snapshot for later use, e.g. for\n calculating deltas.\n * create_tmp    Create a temporary table suitable for storing the snapshot for later use, e.g. for\n calculating deltas.\n * save          Save the snapshot in the table specified by in_table. The table must exists and have\n the correct structure.\n If no snapshot exists, a new is created.\n * cleanup       Remove the temporary tables used for the snapshot and delta.\n \n in_table (VARCHAR(129)):\n The table argument used for some actions. Use the format \'db1.t1\' or \'t1\' without using any backticks (`)\n for quoting. Periods (.) are not supported in the database and table names.\n \n The meaning of the table for each action supporting the argument is:\n \n * snapshot      The snapshot is created based on the specified table. Set to NULL or NOW() to use\n the current content of performance_schema.events_statements_summary_by_digest.\n * overall       The table with the content to create the overall analyzis for. The following values\n can be used:\n - A table name - use the content of that table.\n - NOW()        - create a fresh snapshot and overwrite the existing snapshot.\n - NULL         - use the last stored snapshot.\n * delta         The table name is mandatory and specified the reference view to compare the currently\n stored snapshot against. If no snapshot exists, a new will be created.\n * create_table  The name of the regular table to create.\n * create_tmp    The name of the temporary table to create.\n * save          The name of the table to save the currently stored snapshot into.\n \n in_views (SET (\'with_runtimes_in_95th_percentile\', \'analysis\', \'with_errors_or_warnings\',\n \'with_full_table_scans\', \'with_sorting\', \'with_temp_tables\', \'custom\'))\n Which views to include:  * with_runtimes_in_95th_percentile  Based on the sys.statements_with_runtimes_in_95th_percentile view * analysis                          Based on the sys.statement_analysis view * with_errors_or_warnings           Based on the sys.statements_with_errors_or_warnings view * with_full_table_scans             Based on the sys.statements_with_full_table_scans view * with_sorting                      Based on the sys.statements_with_sorting view * with_temp_tables                  Based on the sys.statements_with_temp_tables view * custom                            Use a custom view. This view must be specified in @sys.statement_performance_analyzer.view to an existing view or a query  Default is to include all except \'custom\'.   Configuration Options  sys.statement_performance_analyzer.limit The maximum number of rows to include for the views that does not have a built-in limit (e.g. the 95th percentile view). If not set the limit is 100.  sys.statement_performance_analyzer.view Used together with the \'custom\' view. If the value contains a space, it is considered a query, otherwise it must be an existing view querying the performance_schema.events_statements_summary_by_digest table. There cannot be any limit clause including in the query or view definition if @sys.statement_performance_analyzer.limit > 0. If specifying a view, use the same format as for in_table.  sys.debug Whether to provide debugging output. Default is \'OFF\'. Set to \'ON\' to include.   Example  To create a report with the queries in the 95th percentile since last truncate of performance_schema.events_statements_summary_by_digest and the delta for a 1 minute period:  1. Create a temporary table to store the initial snapshot. 2. Create the initial snapshot. 3. Save the initial snapshot in the temporary table. 4. Wait one minute. 5. Create a new snapshot. 6. Perform analyzis based on the new snapshot. 7. Perform analyzis based on the delta between the initial and new snapshots.  mysql> CALL sys.statement_performance_analyzer(\'create_tmp\', \'mydb.tmp_digests_ini\', NULL); Query OK, 0 rows affected (0.08 sec)  mysql> CALL sys.statement_performance_analyzer(\'snapshot\', NULL, NULL); Query OK, 0 rows affected (0.02 sec)  mysql> CALL sys.statement_performance_analyzer(\'save\', \'mydb.tmp_digests_ini\', NULL); Query OK, 0 rows affected (0.00 sec)  mysql> DO SLEEP(60); Query OK, 0 rows affected (1 min 0.00 sec)  mysql> CALL sys.statement_performance_analyzer(\'snapshot\', NULL, NULL); Query OK, 0 rows affected (0.02 sec)  mysql> CALL sys.statement_performance_analyzer(\'overall\', NULL, \'with_runtimes_in_95th_percentile\'); +-----------------------------------------+ | Next Output                             | +-----------------------------------------+ | Queries with Runtime in 95th Percentile | +-----------------------------------------+ 1 row in set (0.05 sec)  ...  mysql> CALL sys.statement_performance_analyzer(\'delta\', \'mydb.tmp_digests_ini\', \'with_runtimes_in_95th_percentile\'); +-----------------------------------------+ | Next Output                             | +-----------------------------------------+ | Queries with Runtime in 95th Percentile | +-----------------------------------------+ 1 row in set (0.03 sec)  ...   To create an overall report of the 95th percentile queries and the top 10 queries with full table scans:  mysql> CALL sys.statement_performance_analyzer(\'snapshot\', NULL, NULL); Query OK, 0 rows affected (0.01 sec)                                     mysql> SET @sys.statement_performance_analyzer.limit = 10; Query OK, 0 rows affected (0.00 sec)            mysql> CALL sys.statement_performance_analyzer(\'overall\', NULL, \'with_runtimes_in_95th_percentile,with_full_table_scans\'); +-----------------------------------------+ | Next Output                             | +-----------------------------------------+ | Queries with Runtime in 95th Percentile | +-----------------------------------------+ 1 row in set (0.01 sec)  ...  +-------------------------------------+ | Next Output                         | +-------------------------------------+ | Top 10 Queries with Full Table Scan | +-------------------------------------+ 1 row in set (0.09 sec)  ...   Use a custom view showing the top 10 query sorted by total execution time refreshing the view every minute using the watch command in Linux.  mysql> CREATE OR REPLACE VIEW mydb.my_statements AS -> SELECT sys.format_statement(DIGEST_TEXT) AS query, ->        SCHEMA_NAME AS db, ->        COUNT_STAR AS exec_count, ->        sys.format_time(SUM_TIMER_WAIT) AS total_latency, ->        sys.format_time(AVG_TIMER_WAIT) AS avg_latency, ->        ROUND(IFNULL(SUM_ROWS_SENT / NULLIF(COUNT_STAR, 0), 0)) AS rows_sent_avg, ->        ROUND(IFNULL(SUM_ROWS_EXAMINED / NULLIF(COUNT_STAR, 0), 0)) AS rows_examined_avg, ->        ROUND(IFNULL(SUM_ROWS_AFFECTED / NULLIF(COUNT_STAR, 0), 0)) AS rows_affected_avg, ->        DIGEST AS digest ->   FROM performance_schema.events_statements_summary_by_digest -> ORDER BY SUM_TIMER_WAIT DESC; Query OK, 0 rows affected (0.01 sec)  mysql> CALL sys.statement_performance_analyzer(\'create_table\', \'mydb.digests_prev\', NULL); Query OK, 0 rows affected (0.10 sec)  shell$ watch -n 60 \"mysql sys --table -e \" > SET @sys.statement_performance_analyzer.view = \'mydb.my_statements\'; > SET @sys.statement_performance_analyzer.limit = 10; > CALL statement_performance_analyzer(\'snapshot\', NULL, NULL); > CALL statement_performance_analyzer(\'delta\', \'mydb.digests_prev\', \'custom\'); > CALL statement_performance_analyzer(\'save\', \'mydb.digests_prev\', NULL); > \"\"  Every 60.0s: mysql sys --table -e \"                                                                                                   ...  Mon Dec 22 10:58:51 2014  +----------------------------------+ | Next Output                      | +----------------------------------+ | Top 10 Queries Using Custom View | +----------------------------------+ +-------------------+-------+------------+---------------+-------------+---------------+-------------------+-------------------+----------------------------------+ | query             | db    | exec_count | total_latency | avg_latency | rows_sent_avg | rows_examined_avg | rows_affected_avg | digest                           | +-------------------+-------+------------+---------------+-------------+---------------+-------------------+-------------------+----------------------------------+ ... ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_table_exists, v_tmp_digests_table_exists, v_custom_view_exists ENUM(\'\', \'BASE TABLE\', \'VIEW\', \'TEMPORARY\') DEFAULT \'\'; DECLARE v_this_thread_enabled ENUM(\'YES\', \'NO\'); DECLARE v_force_new_snapshot BOOLEAN DEFAULT FALSE; DECLARE v_digests_table VARCHAR(133); DECLARE v_quoted_table, v_quoted_custom_view VARCHAR(133) DEFAULT \'\'; DECLARE v_table_db, v_table_name, v_custom_db, v_custom_name VARCHAR(64); DECLARE v_digest_table_template, v_checksum_ref, v_checksum_table text; DECLARE v_sql longtext; DECLARE v_error_msg VARCHAR(128);   SELECT INSTRUMENTED INTO v_this_thread_enabled FROM performance_schema.threads WHERE PROCESSLIST_ID = CONNECTION_ID(); IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_disable_thread(CONNECTION_ID()); END IF;  SET @log_bin := @@sql_log_bin; IF (@log_bin = 1) THEN SET sql_log_bin = 0; END IF;   IF (@sys.statement_performance_analyzer.limit IS NULL) THEN SET @sys.statement_performance_analyzer.limit = sys.sys_get_config(\'statement_performance_analyzer.limit\', \'100\'); END IF; IF (@sys.debug IS NULL) THEN SET @sys.debug                                = sys.sys_get_config(\'debug\'                               , \'OFF\'); END IF;   IF (in_table = \'NOW()\') THEN SET v_force_new_snapshot = TRUE, in_table             = NULL; ELSEIF (in_table IS NOT NULL) THEN IF (NOT INSTR(in_table, \'.\')) THEN SET v_table_db   = DATABASE(), v_table_name = in_table; ELSE SET v_table_db   = SUBSTRING_INDEX(in_table, \'.\', 1); SET v_table_name = SUBSTRING(in_table, CHAR_LENGTH(v_table_db)+2); END IF;  SET v_quoted_table = CONCAT(\'`\', v_table_db, \'`.`\', v_table_name, \'`\');  IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'in_table is: db = \'\', v_table_db, \'\', table = \'\', v_table_name, \'\'\') AS \'Debug\'; END IF;  IF (v_table_db = DATABASE() AND (v_table_name = \'tmp_digests\' OR v_table_name = \'tmp_digests_delta\')) THEN SET v_error_msg = CONCAT(\'Invalid value for in_table: \', v_quoted_table, \' is reserved table name.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  CALL sys.table_exists(v_table_db, v_table_name, v_table_exists); IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'v_table_exists = \', v_table_exists) AS \'Debug\'; END IF;  IF (v_table_exists = \'BASE TABLE\') THEN SET v_checksum_ref = ( SELECT GROUP_CONCAT(CONCAT(COLUMN_NAME, COLUMN_TYPE) ORDER BY ORDINAL_POSITION) AS Checksum FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = \'performance_schema\' AND TABLE_NAME = \'events_statements_summary_by_digest\' ), v_checksum_table = ( SELECT GROUP_CONCAT(CONCAT(COLUMN_NAME, COLUMN_TYPE) ORDER BY ORDINAL_POSITION) AS Checksum FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = v_table_db AND TABLE_NAME = v_table_name );  IF (v_checksum_ref <> v_checksum_table) THEN SET v_error_msg = CONCAT(\'The table \', IF(CHAR_LENGTH(v_quoted_table) > 93, CONCAT(\'...\', SUBSTRING(v_quoted_table, -90)), v_quoted_table), \' has the wrong definition.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF; END IF; END IF;   IF (in_views IS NULL OR in_views = \'\') THEN SET in_views = \'with_runtimes_in_95th_percentile,analysis,with_errors_or_warnings,with_full_table_scans,with_sorting,with_temp_tables\'; END IF;   CALL sys.table_exists(DATABASE(), \'tmp_digests\', v_tmp_digests_table_exists); IF (@sys.debug = \'ON\') THEN SELECT CONCAT(\'v_tmp_digests_table_exists = \', v_tmp_digests_table_exists) AS \'Debug\'; END IF;  CASE WHEN in_action IN (\'snapshot\', \'overall\') THEN IF (in_table IS NOT NULL) THEN IF (NOT v_table_exists IN (\'TEMPORARY\', \'BASE TABLE\')) THEN SET v_error_msg = CONCAT(\'The \', in_action, \' action requires in_table to be NULL, NOW() or specify an existing table.\', \' The table \', IF(CHAR_LENGTH(v_quoted_table) > 16, CONCAT(\'...\', SUBSTRING(v_quoted_table, -13)), v_quoted_table), \' does not exist.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF; END IF;  WHEN in_action IN (\'delta\', \'save\') THEN IF (v_table_exists NOT IN (\'TEMPORARY\', \'BASE TABLE\')) THEN SET v_error_msg = CONCAT(\'The \', in_action, \' action requires in_table to be an existing table.\', IF(in_table IS NOT NULL, CONCAT(\' The table \', IF(CHAR_LENGTH(v_quoted_table) > 39, CONCAT(\'...\', SUBSTRING(v_quoted_table, -36)), v_quoted_table), \' does not exist.\'), \'\')); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  IF (in_action = \'delta\' AND v_tmp_digests_table_exists <> \'TEMPORARY\') THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'An existing snapshot generated with the statement_performance_analyzer() must exist.\'; END IF; WHEN in_action = \'create_tmp\' THEN IF (v_table_exists = \'TEMPORARY\') THEN SET v_error_msg = CONCAT(\'Cannot create the table \', IF(CHAR_LENGTH(v_quoted_table) > 72, CONCAT(\'...\', SUBSTRING(v_quoted_table, -69)), v_quoted_table), \' as it already exists.\'); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  WHEN in_action = \'create_table\' THEN IF (v_table_exists <> \'\') THEN SET v_error_msg = CONCAT(\'Cannot create the table \', IF(CHAR_LENGTH(v_quoted_table) > 52, CONCAT(\'...\', SUBSTRING(v_quoted_table, -49)), v_quoted_table), \' as it already exists\', IF(v_table_exists = \'TEMPORARY\', \' as a temporary table.\', \'.\')); SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = v_error_msg; END IF;  WHEN in_action = \'cleanup\' THEN DO (SELECT 1); ELSE SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'Unknown action. Supported actions are: cleanup, create_table, create_tmp, delta, overall, save, snapshot\'; END CASE;  SET v_digest_table_template = \'CREATE %{TEMPORARY}TABLE %{TABLE_NAME} ( `SCHEMA_NAME` varchar(64) DEFAULT NULL, `DIGEST` varchar(32) DEFAULT NULL, `DIGEST_TEXT` longtext, `COUNT_STAR` bigint(20) unsigned NOT NULL, `SUM_TIMER_WAIT` bigint(20) unsigned NOT NULL, `MIN_TIMER_WAIT` bigint(20) unsigned NOT NULL, `AVG_TIMER_WAIT` bigint(20) unsigned NOT NULL, `MAX_TIMER_WAIT` bigint(20) unsigned NOT NULL, `SUM_LOCK_TIME` bigint(20) unsigned NOT NULL, `SUM_ERRORS` bigint(20) unsigned NOT NULL, `SUM_WARNINGS` bigint(20) unsigned NOT NULL, `SUM_ROWS_AFFECTED` bigint(20) unsigned NOT NULL, `SUM_ROWS_SENT` bigint(20) unsigned NOT NULL, `SUM_ROWS_EXAMINED` bigint(20) unsigned NOT NULL, `SUM_CREATED_TMP_DISK_TABLES` bigint(20) unsigned NOT NULL, `SUM_CREATED_TMP_TABLES` bigint(20) unsigned NOT NULL, `SUM_SELECT_FULL_JOIN` bigint(20) unsigned NOT NULL, `SUM_SELECT_FULL_RANGE_JOIN` bigint(20) unsigned NOT NULL, `SUM_SELECT_RANGE` bigint(20) unsigned NOT NULL, `SUM_SELECT_RANGE_CHECK` bigint(20) unsigned NOT NULL, `SUM_SELECT_SCAN` bigint(20) unsigned NOT NULL, `SUM_SORT_MERGE_PASSES` bigint(20) unsigned NOT NULL, `SUM_SORT_RANGE` bigint(20) unsigned NOT NULL, `SUM_SORT_ROWS` bigint(20) unsigned NOT NULL, `SUM_SORT_SCAN` bigint(20) unsigned NOT NULL, `SUM_NO_INDEX_USED` bigint(20) unsigned NOT NULL, `SUM_NO_GOOD_INDEX_USED` bigint(20) unsigned NOT NULL, `FIRST_SEEN` timestamp NULL DEFAULT NULL, `LAST_SEEN` timestamp NULL DEFAULT NULL, INDEX (SCHEMA_NAME, DIGEST) ) DEFAULT CHARSET=utf8\';  IF (v_force_new_snapshot OR in_action = \'snapshot\' OR (in_action = \'overall\' AND in_table IS NULL) OR (in_action = \'save\' AND v_tmp_digests_table_exists <> \'TEMPORARY\') ) THEN IF (v_tmp_digests_table_exists = \'TEMPORARY\') THEN IF (@sys.debug = \'ON\') THEN SELECT \'DROP TEMPORARY TABLE IF EXISTS tmp_digests\' AS \'Debug\'; END IF; DROP TEMPORARY TABLE IF EXISTS tmp_digests; END IF; CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, \'%{TEMPORARY}\', \'TEMPORARY \'), \'%{TABLE_NAME}\', \'tmp_digests\'));  SET v_sql = CONCAT(\'INSERT INTO tmp_digests SELECT * FROM \', IF(in_table IS NULL OR in_action = \'save\', \'performance_schema.events_statements_summary_by_digest\', v_quoted_table)); CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (in_action IN (\'create_table\', \'create_tmp\')) THEN IF (in_action = \'create_table\') THEN CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, \'%{TEMPORARY}\', \'\'), \'%{TABLE_NAME}\', v_quoted_table)); ELSE CALL sys.execute_prepared_stmt(REPLACE(REPLACE(v_digest_table_template, \'%{TEMPORARY}\', \'TEMPORARY \'), \'%{TABLE_NAME}\', v_quoted_table)); END IF; ELSEIF (in_action = \'save\') THEN CALL sys.execute_prepared_stmt(CONCAT(\'DELETE FROM \', v_quoted_table)); CALL sys.execute_prepared_stmt(CONCAT(\'INSERT INTO \', v_quoted_table, \' SELECT * FROM tmp_digests\')); ELSEIF (in_action = \'cleanup\') THEN DROP TEMPORARY TABLE IF EXISTS sys.tmp_digests; DROP TEMPORARY TABLE IF EXISTS sys.tmp_digests_delta; ELSEIF (in_action IN (\'overall\', \'delta\')) THEN IF (in_action = \'overall\') THEN IF (in_table IS NULL) THEN SET v_digests_table = \'tmp_digests\'; ELSE SET v_digests_table = v_quoted_table; END IF; ELSE SET v_digests_table = \'tmp_digests_delta\'; DROP TEMPORARY TABLE IF EXISTS tmp_digests_delta; CREATE TEMPORARY TABLE tmp_digests_delta LIKE tmp_digests; SET v_sql = CONCAT(\'INSERT INTO tmp_digests_delta SELECT `d_end`.`SCHEMA_NAME`, `d_end`.`DIGEST`, `d_end`.`DIGEST_TEXT`, `d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0) AS \'COUNT_STAR\', `d_end`.`SUM_TIMER_WAIT`-IFNULL(`d_start`.`SUM_TIMER_WAIT`, 0) AS \'SUM_TIMER_WAIT\', `d_end`.`MIN_TIMER_WAIT` AS \'MIN_TIMER_WAIT\', IFNULL((`d_end`.`SUM_TIMER_WAIT`-IFNULL(`d_start`.`SUM_TIMER_WAIT`, 0))/NULLIF(`d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0), 0), 0) AS \'AVG_TIMER_WAIT\', `d_end`.`MAX_TIMER_WAIT` AS \'MAX_TIMER_WAIT\', `d_end`.`SUM_LOCK_TIME`-IFNULL(`d_start`.`SUM_LOCK_TIME`, 0) AS \'SUM_LOCK_TIME\', `d_end`.`SUM_ERRORS`-IFNULL(`d_start`.`SUM_ERRORS`, 0) AS \'SUM_ERRORS\', `d_end`.`SUM_WARNINGS`-IFNULL(`d_start`.`SUM_WARNINGS`, 0) AS \'SUM_WARNINGS\', `d_end`.`SUM_ROWS_AFFECTED`-IFNULL(`d_start`.`SUM_ROWS_AFFECTED`, 0) AS \'SUM_ROWS_AFFECTED\', `d_end`.`SUM_ROWS_SENT`-IFNULL(`d_start`.`SUM_ROWS_SENT`, 0) AS \'SUM_ROWS_SENT\', `d_end`.`SUM_ROWS_EXAMINED`-IFNULL(`d_start`.`SUM_ROWS_EXAMINED`, 0) AS \'SUM_ROWS_EXAMINED\', `d_end`.`SUM_CREATED_TMP_DISK_TABLES`-IFNULL(`d_start`.`SUM_CREATED_TMP_DISK_TABLES`, 0) AS \'SUM_CREATED_TMP_DISK_TABLES\', `d_end`.`SUM_CREATED_TMP_TABLES`-IFNULL(`d_start`.`SUM_CREATED_TMP_TABLES`, 0) AS \'SUM_CREATED_TMP_TABLES\', `d_end`.`SUM_SELECT_FULL_JOIN`-IFNULL(`d_start`.`SUM_SELECT_FULL_JOIN`, 0) AS \'SUM_SELECT_FULL_JOIN\', `d_end`.`SUM_SELECT_FULL_RANGE_JOIN`-IFNULL(`d_start`.`SUM_SELECT_FULL_RANGE_JOIN`, 0) AS \'SUM_SELECT_FULL_RANGE_JOIN\', `d_end`.`SUM_SELECT_RANGE`-IFNULL(`d_start`.`SUM_SELECT_RANGE`, 0) AS \'SUM_SELECT_RANGE\', `d_end`.`SUM_SELECT_RANGE_CHECK`-IFNULL(`d_start`.`SUM_SELECT_RANGE_CHECK`, 0) AS \'SUM_SELECT_RANGE_CHECK\', `d_end`.`SUM_SELECT_SCAN`-IFNULL(`d_start`.`SUM_SELECT_SCAN`, 0) AS \'SUM_SELECT_SCAN\', `d_end`.`SUM_SORT_MERGE_PASSES`-IFNULL(`d_start`.`SUM_SORT_MERGE_PASSES`, 0) AS \'SUM_SORT_MERGE_PASSES\', `d_end`.`SUM_SORT_RANGE`-IFNULL(`d_start`.`SUM_SORT_RANGE`, 0) AS \'SUM_SORT_RANGE\', `d_end`.`SUM_SORT_ROWS`-IFNULL(`d_start`.`SUM_SORT_ROWS`, 0) AS \'SUM_SORT_ROWS\', `d_end`.`SUM_SORT_SCAN`-IFNULL(`d_start`.`SUM_SORT_SCAN`, 0) AS \'SUM_SORT_SCAN\', `d_end`.`SUM_NO_INDEX_USED`-IFNULL(`d_start`.`SUM_NO_INDEX_USED`, 0) AS \'SUM_NO_INDEX_USED\', `d_end`.`SUM_NO_GOOD_INDEX_USED`-IFNULL(`d_start`.`SUM_NO_GOOD_INDEX_USED`, 0) AS \'SUM_NO_GOOD_INDEX_USED\', `d_end`.`FIRST_SEEN`, `d_end`.`LAST_SEEN` FROM tmp_digests d_end LEFT OUTER JOIN \', v_quoted_table, \' d_start ON `d_start`.`DIGEST` = `d_end`.`DIGEST` AND (`d_start`.`SCHEMA_NAME` = `d_end`.`SCHEMA_NAME` OR (`d_start`.`SCHEMA_NAME` IS NULL AND `d_end`.`SCHEMA_NAME` IS NULL) ) WHERE `d_end`.`COUNT_STAR`-IFNULL(`d_start`.`COUNT_STAR`, 0) > 0\'); CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_runtimes_in_95th_percentile\', in_views)) THEN SELECT \'Queries with Runtime in 95th Percentile\' AS \'Next Output\';  DROP TEMPORARY TABLE IF EXISTS tmp_digest_avg_latency_distribution1; DROP TEMPORARY TABLE IF EXISTS tmp_digest_avg_latency_distribution2; DROP TEMPORARY TABLE IF EXISTS tmp_digest_95th_percentile_by_avg_us;  CREATE TEMPORARY TABLE tmp_digest_avg_latency_distribution1 ( cnt bigint unsigned NOT NULL, avg_us decimal(21,0) NOT NULL, PRIMARY KEY (avg_us) ) ENGINE=InnoDB;  SET v_sql = CONCAT(\'INSERT INTO tmp_digest_avg_latency_distribution1 SELECT COUNT(*) cnt,  ROUND(avg_timer_wait/1000000) AS avg_us FROM \', v_digests_table, \' GROUP BY avg_us\'); CALL sys.execute_prepared_stmt(v_sql);  CREATE TEMPORARY TABLE tmp_digest_avg_latency_distribution2 LIKE tmp_digest_avg_latency_distribution1; INSERT INTO tmp_digest_avg_latency_distribution2 SELECT * FROM tmp_digest_avg_latency_distribution1;  CREATE TEMPORARY TABLE tmp_digest_95th_percentile_by_avg_us ( avg_us decimal(21,0) NOT NULL, percentile decimal(46,4) NOT NULL, PRIMARY KEY (avg_us) ) ENGINE=InnoDB;  SET v_sql = CONCAT(\'INSERT INTO tmp_digest_95th_percentile_by_avg_us SELECT s2.avg_us avg_us, IFNULL(SUM(s1.cnt)/NULLIF((SELECT COUNT(*) FROM \', v_digests_table, \'), 0), 0) percentile FROM tmp_digest_avg_latency_distribution1 AS s1 JOIN tmp_digest_avg_latency_distribution2 AS s2 ON s1.avg_us <= s2.avg_us GROUP BY s2.avg_us HAVING percentile > 0.95 ORDER BY percentile LIMIT 1\'); CALL sys.execute_prepared_stmt(v_sql);  SET v_sql = REPLACE( REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_runtimes_in_95th_percentile\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ), \'sys.x$ps_digest_95th_percentile_by_avg_us\', \'`sys`.`x$ps_digest_95th_percentile_by_avg_us`\' ); CALL sys.execute_prepared_stmt(v_sql);  DROP TEMPORARY TABLE tmp_digest_avg_latency_distribution1; DROP TEMPORARY TABLE tmp_digest_avg_latency_distribution2; DROP TEMPORARY TABLE tmp_digest_95th_percentile_by_avg_us; END IF;  IF (FIND_IN_SET(\'analysis\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries Ordered by Total Latency\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statement_analysis\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_errors_or_warnings\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Errors\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_errors_or_warnings\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_full_table_scans\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Full Table Scan\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_full_table_scans\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_sorting\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Sorting\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_sorting\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'with_temp_tables\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries with Internal Temporary Tables\') AS \'Next Output\'; SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'statements_with_temp_tables\' ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF; CALL sys.execute_prepared_stmt(v_sql); END IF;  IF (FIND_IN_SET(\'custom\', in_views)) THEN SELECT CONCAT(\'Top \', @sys.statement_performance_analyzer.limit, \' Queries Using Custom View\') AS \'Next Output\';  IF (@sys.statement_performance_analyzer.view IS NULL) THEN SET @sys.statement_performance_analyzer.view = sys.sys_get_config(\'statement_performance_analyzer.view\', NULL); END IF; IF (@sys.statement_performance_analyzer.view IS NULL) THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'The @sys.statement_performance_analyzer.view user variable must be set with the view or query to use.\'; END IF;  IF (NOT INSTR(@sys.statement_performance_analyzer.view, \' \')) THEN IF (NOT INSTR(@sys.statement_performance_analyzer.view, \'.\')) THEN SET v_custom_db   = DATABASE(), v_custom_name = @sys.statement_performance_analyzer.view; ELSE SET v_custom_db   = SUBSTRING_INDEX(@sys.statement_performance_analyzer.view, \'.\', 1); SET v_custom_name = SUBSTRING(@sys.statement_performance_analyzer.view, CHAR_LENGTH(v_custom_db)+2); END IF;  CALL sys.table_exists(v_custom_db, v_custom_name, v_custom_view_exists); IF (v_custom_view_exists <> \'VIEW\') THEN SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'The @sys.statement_performance_analyzer.view user variable is set but specified neither an existing view nor a query.\'; END IF;  SET v_sql = REPLACE( (SELECT VIEW_DEFINITION FROM information_schema.VIEWS WHERE TABLE_SCHEMA = v_custom_db AND TABLE_NAME = v_custom_name ), \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table ); ELSE SET v_sql = REPLACE(@sys.statement_performance_analyzer.view, \'`performance_schema`.`events_statements_summary_by_digest`\', v_digests_table); END IF;  IF (@sys.statement_performance_analyzer.limit > 0) THEN SET v_sql = CONCAT(v_sql, \' LIMIT \', @sys.statement_performance_analyzer.limit); END IF;  CALL sys.execute_prepared_stmt(v_sql); END IF; END IF;  IF (v_this_thread_enabled = \'YES\') THEN CALL sys.ps_setup_enable_thread(CONNECTION_ID()); END IF;  IF (@log_bin = 1) THEN SET sql_log_bin = @log_bin; END IF; END'),('sys','table_exists','PROCEDURE','table_exists','SQL','CONTAINS_SQL','NO','INVOKER',' IN in_db VARCHAR(64), IN in_table VARCHAR(64), OUT out_exists ENUM(\'\', \'BASE TABLE\', \'VIEW\', \'TEMPORARY\') ','','BEGIN DECLARE v_error BOOLEAN DEFAULT FALSE; DECLARE CONTINUE HANDLER FOR 1050 SET v_error = TRUE; DECLARE CONTINUE HANDLER FOR 1146 SET v_error = TRUE;  SET out_exists = \'\';  IF (EXISTS(SELECT 1 FROM information_schema.TABLES WHERE TABLE_SCHEMA = in_db AND TABLE_NAME = in_table)) THEN SET @sys.tmp.table_exists.SQL = CONCAT(\'CREATE TEMPORARY TABLE `\', in_db, \'`.`\', in_table, \'` (id INT PRIMARY KEY)\'); PREPARE stmt_create_table FROM @sys.tmp.table_exists.SQL; EXECUTE stmt_create_table; DEALLOCATE PREPARE stmt_create_table; IF (v_error) THEN SET out_exists = \'TEMPORARY\'; ELSE SET @sys.tmp.table_exists.SQL = CONCAT(\'DROP TEMPORARY TABLE `\', in_db, \'`.`\', in_table, \'`\'); PREPARE stmt_drop_table FROM @sys.tmp.table_exists.SQL; EXECUTE stmt_drop_table; DEALLOCATE PREPARE stmt_drop_table; SET out_exists = (SELECT TABLE_TYPE FROM information_schema.TABLES WHERE TABLE_SCHEMA = in_db AND TABLE_NAME = in_table); END IF; ELSE SET @sys.tmp.table_exists.SQL = CONCAT(\'SELECT COUNT(*) FROM `\', in_db, \'`.`\', in_table, \'`\'); PREPARE stmt_select FROM @sys.tmp.table_exists.SQL; IF (NOT v_error) THEN DEALLOCATE PREPARE stmt_select; SET out_exists = \'TEMPORARY\'; END IF; END IF; END','mysql.sys@localhost','2018-12-28 10:43:31','2018-12-28 10:43:31','','\n Description\n \n Tests whether the table specified in in_db and in_table exists either as a regular\n table, or as a temporary table. The returned value corresponds to the table that\n will be used, so if there\'s both a temporary and a permanent table with the given\n name, then \'TEMPORARY\' will be returned.\n \n Parameters\n \n in_db (VARCHAR(64)):\n The database name to check for the existance of the table in.\n \n in_table (VARCHAR(64)):\n The name of the table to check the existance of.\n \n out_exists ENUM(\'\', \'BASE TABLE\', \'VIEW\', \'TEMPORARY\'):\n The return value: whether the table exists. The value is one of:\n * \'\'           - the table does not exist neither as a base table, view, nor temporary table.\n * \'BASE TABLE\' - the table name exists as a permanent base table table.\n * \'VIEW\'       - the table name exists as a view.\n * \'TEMPORARY\'  - the table name exists as a temporary table.\n \n Example\n \n mysql> CREATE DATABASE db1;\n Query OK, 1 row affected (0.07 sec)\n \n mysql> use db1;\n Database changed\n mysql> CREATE TABLE t1 (id INT PRIMARY KEY);\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> CREATE TABLE t2 (id INT PRIMARY KEY);\n Query OK, 0 rows affected (0.08 sec)\n \n mysql> CREATE view v_t1 AS SELECT * FROM t1;\n Query OK, 0 rows affected (0.00 sec)\n \n mysql> CREATE TEMPORARY TABLE t1 (id INT PRIMARY KEY);\n Query OK, 0 rows affected (0.00 sec)\n \n mysql> CALL sys.table_exists(\'db1\', \'t1\', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.00 sec)\n \n +------------+\n | @exists    |\n +------------+\n | TEMPORARY  |\n +------------+\n 1 row in set (0.00 sec)\n \n mysql> CALL sys.table_exists(\'db1\', \'t2\', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.00 sec)\n \n +------------+\n | @exists    |\n +------------+\n | BASE TABLE |\n +------------+\n 1 row in set (0.01 sec)\n \n mysql> CALL sys.table_exists(\'db1\', \'v_t1\', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.00 sec)\n \n +---------+\n | @exists |\n +---------+\n | VIEW    |\n +---------+\n 1 row in set (0.00 sec)\n \n mysql> CALL sys.table_exists(\'db1\', \'t3\', @exists); SELECT @exists;\n Query OK, 0 rows affected (0.01 sec)\n \n +---------+\n | @exists |\n +---------+\n |         |\n +---------+\n 1 row in set (0.00 sec)\n ','utf8','utf8_general_ci','utf8_general_ci','BEGIN DECLARE v_error BOOLEAN DEFAULT FALSE; DECLARE CONTINUE HANDLER FOR 1050 SET v_error = TRUE; DECLARE CONTINUE HANDLER FOR 1146 SET v_error = TRUE;  SET out_exists = \'\';  IF (EXISTS(SELECT 1 FROM information_schema.TABLES WHERE TABLE_SCHEMA = in_db AND TABLE_NAME = in_table)) THEN SET @sys.tmp.table_exists.SQL = CONCAT(\'CREATE TEMPORARY TABLE `\', in_db, \'`.`\', in_table, \'` (id INT PRIMARY KEY)\'); PREPARE stmt_create_table FROM @sys.tmp.table_exists.SQL; EXECUTE stmt_create_table; DEALLOCATE PREPARE stmt_create_table; IF (v_error) THEN SET out_exists = \'TEMPORARY\'; ELSE SET @sys.tmp.table_exists.SQL = CONCAT(\'DROP TEMPORARY TABLE `\', in_db, \'`.`\', in_table, \'`\'); PREPARE stmt_drop_table FROM @sys.tmp.table_exists.SQL; EXECUTE stmt_drop_table; DEALLOCATE PREPARE stmt_drop_table; SET out_exists = (SELECT TABLE_TYPE FROM information_schema.TABLES WHERE TABLE_SCHEMA = in_db AND TABLE_NAME = in_table); END IF; ELSE SET @sys.tmp.table_exists.SQL = CONCAT(\'SELECT COUNT(*) FROM `\', in_db, \'`.`\', in_table, \'`\'); PREPARE stmt_select FROM @sys.tmp.table_exists.SQL; IF (NOT v_error) THEN DEALLOCATE PREPARE stmt_select; SET out_exists = \'TEMPORARY\'; END IF; END IF; END'),('sakila','rewards_report','PROCEDURE','rewards_report','SQL','READS_SQL_DATA','NO','DEFINER','\n    IN min_monthly_purchases TINYINT UNSIGNED\n    , IN min_dollar_amount_purchased DECIMAL(10,2) UNSIGNED\n    , OUT count_rewardees INT\n','','proc: BEGIN\n\n    DECLARE last_month_start DATE;\n    DECLARE last_month_end DATE;\n\n    /* Some sanity checks... */\n    IF min_monthly_purchases = 0 THEN\n        SELECT \'Minimum monthly purchases parameter must be > 0\';\n        LEAVE proc;\n    END IF;\n    IF min_dollar_amount_purchased = 0.00 THEN\n        SELECT \'Minimum monthly dollar amount purchased parameter must be > $0.00\';\n        LEAVE proc;\n    END IF;\n\n    /* Determine start and end time periods */\n    SET last_month_start = DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH);\n    SET last_month_start = STR_TO_DATE(CONCAT(YEAR(last_month_start),\'-\',MONTH(last_month_start),\'-01\'),\'%Y-%m-%d\');\n    SET last_month_end = LAST_DAY(last_month_start);\n\n    /*\n        Create a temporary storage area for\n        Customer IDs.\n    */\n    CREATE TEMPORARY TABLE tmpCustomer (customer_id SMALLINT UNSIGNED NOT NULL PRIMARY KEY);\n\n    /*\n        Find all customers meeting the\n        monthly purchase requirements\n    */\n    INSERT INTO tmpCustomer (customer_id)\n    SELECT p.customer_id\n    FROM payment AS p\n    WHERE DATE(p.payment_date) BETWEEN last_month_start AND last_month_end\n    GROUP BY customer_id\n    HAVING SUM(p.amount) > min_dollar_amount_purchased\n    AND COUNT(customer_id) > min_monthly_purchases;\n\n    /* Populate OUT parameter with count of found customers */\n    SELECT COUNT(*) FROM tmpCustomer INTO count_rewardees;\n\n    /*\n        Output ALL customer information of matching rewardees.\n        Customize output as needed.\n    */\n    SELECT c.*\n    FROM tmpCustomer AS t\n    INNER JOIN customer AS c ON t.customer_id = c.customer_id;\n\n    /* Clean up */\n    DROP TABLE tmpCustomer;\nEND','root@localhost','2018-12-28 10:59:56','2018-12-28 10:59:56','STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','Provides a customizable report on best customers','utf8','utf8_general_ci','utf8_general_ci','proc: BEGIN\n\n    DECLARE last_month_start DATE;\n    DECLARE last_month_end DATE;\n\n    /* Some sanity checks... */\n    IF min_monthly_purchases = 0 THEN\n        SELECT \'Minimum monthly purchases parameter must be > 0\';\n        LEAVE proc;\n    END IF;\n    IF min_dollar_amount_purchased = 0.00 THEN\n        SELECT \'Minimum monthly dollar amount purchased parameter must be > $0.00\';\n        LEAVE proc;\n    END IF;\n\n    /* Determine start and end time periods */\n    SET last_month_start = DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH);\n    SET last_month_start = STR_TO_DATE(CONCAT(YEAR(last_month_start),\'-\',MONTH(last_month_start),\'-01\'),\'%Y-%m-%d\');\n    SET last_month_end = LAST_DAY(last_month_start);\n\n    /*\n        Create a temporary storage area for\n        Customer IDs.\n    */\n    CREATE TEMPORARY TABLE tmpCustomer (customer_id SMALLINT UNSIGNED NOT NULL PRIMARY KEY);\n\n    /*\n        Find all customers meeting the\n        monthly purchase requirements\n    */\n    INSERT INTO tmpCustomer (customer_id)\n    SELECT p.customer_id\n    FROM payment AS p\n    WHERE DATE(p.payment_date) BETWEEN last_month_start AND last_month_end\n    GROUP BY customer_id\n    HAVING SUM(p.amount) > min_dollar_amount_purchased\n    AND COUNT(customer_id) > min_monthly_purchases;\n\n    /* Populate OUT parameter with count of found customers */\n    SELECT COUNT(*) FROM tmpCustomer INTO count_rewardees;\n\n    /*\n        Output ALL customer information of matching rewardees.\n        Customize output as needed.\n    */\n    SELECT c.*\n    FROM tmpCustomer AS t\n    INNER JOIN customer AS c ON t.customer_id = c.customer_id;\n\n    /* Clean up */\n    DROP TABLE tmpCustomer;\nEND'),('sakila','get_customer_balance','FUNCTION','get_customer_balance','SQL','READS_SQL_DATA','YES','DEFINER','p_customer_id INT, p_effective_date DATETIME','decimal(5,2)','BEGIN\n\n       #OK, WE NEED TO CALCULATE THE CURRENT BALANCE GIVEN A CUSTOMER_ID AND A DATE\n       #THAT WE WANT THE BALANCE TO BE EFFECTIVE FOR. THE BALANCE IS:\n       #   1) RENTAL FEES FOR ALL PREVIOUS RENTALS\n       #   2) ONE DOLLAR FOR EVERY DAY THE PREVIOUS RENTALS ARE OVERDUE\n       #   3) IF A FILM IS MORE THAN RENTAL_DURATION * 2 OVERDUE, CHARGE THE REPLACEMENT_COST\n       #   4) SUBTRACT ALL PAYMENTS MADE BEFORE THE DATE SPECIFIED\n\n  DECLARE v_rentfees DECIMAL(5,2); #FEES PAID TO RENT THE VIDEOS INITIALLY\n  DECLARE v_overfees INTEGER;      #LATE FEES FOR PRIOR RENTALS\n  DECLARE v_payments DECIMAL(5,2); #SUM OF PAYMENTS MADE PREVIOUSLY\n\n  SELECT IFNULL(SUM(film.rental_rate),0) INTO v_rentfees\n    FROM film, inventory, rental\n    WHERE film.film_id = inventory.film_id\n      AND inventory.inventory_id = rental.inventory_id\n      AND rental.rental_date <= p_effective_date\n      AND rental.customer_id = p_customer_id;\n\n  SELECT IFNULL(SUM(IF((TO_DAYS(rental.return_date) - TO_DAYS(rental.rental_date)) > film.rental_duration,\n        ((TO_DAYS(rental.return_date) - TO_DAYS(rental.rental_date)) - film.rental_duration),0)),0) INTO v_overfees\n    FROM rental, inventory, film\n    WHERE film.film_id = inventory.film_id\n      AND inventory.inventory_id = rental.inventory_id\n      AND rental.rental_date <= p_effective_date\n      AND rental.customer_id = p_customer_id;\n\n\n  SELECT IFNULL(SUM(payment.amount),0) INTO v_payments\n    FROM payment\n\n    WHERE payment.payment_date <= p_effective_date\n    AND payment.customer_id = p_customer_id;\n\n  RETURN v_rentfees + v_overfees - v_payments;\nEND','root@localhost','2018-12-28 10:59:56','2018-12-28 10:59:56','STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8_general_ci','BEGIN\n\n       #OK, WE NEED TO CALCULATE THE CURRENT BALANCE GIVEN A CUSTOMER_ID AND A DATE\n       #THAT WE WANT THE BALANCE TO BE EFFECTIVE FOR. THE BALANCE IS:\n       #   1) RENTAL FEES FOR ALL PREVIOUS RENTALS\n       #   2) ONE DOLLAR FOR EVERY DAY THE PREVIOUS RENTALS ARE OVERDUE\n       #   3) IF A FILM IS MORE THAN RENTAL_DURATION * 2 OVERDUE, CHARGE THE REPLACEMENT_COST\n       #   4) SUBTRACT ALL PAYMENTS MADE BEFORE THE DATE SPECIFIED\n\n  DECLARE v_rentfees DECIMAL(5,2); #FEES PAID TO RENT THE VIDEOS INITIALLY\n  DECLARE v_overfees INTEGER;      #LATE FEES FOR PRIOR RENTALS\n  DECLARE v_payments DECIMAL(5,2); #SUM OF PAYMENTS MADE PREVIOUSLY\n\n  SELECT IFNULL(SUM(film.rental_rate),0) INTO v_rentfees\n    FROM film, inventory, rental\n    WHERE film.film_id = inventory.film_id\n      AND inventory.inventory_id = rental.inventory_id\n      AND rental.rental_date <= p_effective_date\n      AND rental.customer_id = p_customer_id;\n\n  SELECT IFNULL(SUM(IF((TO_DAYS(rental.return_date) - TO_DAYS(rental.rental_date)) > film.rental_duration,\n        ((TO_DAYS(rental.return_date) - TO_DAYS(rental.rental_date)) - film.rental_duration),0)),0) INTO v_overfees\n    FROM rental, inventory, film\n    WHERE film.film_id = inventory.film_id\n      AND inventory.inventory_id = rental.inventory_id\n      AND rental.rental_date <= p_effective_date\n      AND rental.customer_id = p_customer_id;\n\n\n  SELECT IFNULL(SUM(payment.amount),0) INTO v_payments\n    FROM payment\n\n    WHERE payment.payment_date <= p_effective_date\n    AND payment.customer_id = p_customer_id;\n\n  RETURN v_rentfees + v_overfees - v_payments;\nEND'),('sakila','film_in_stock','PROCEDURE','film_in_stock','SQL','READS_SQL_DATA','NO','DEFINER','IN p_film_id INT, IN p_store_id INT, OUT p_film_count INT','','BEGIN\n     SELECT inventory_id\n     FROM inventory\n     WHERE film_id = p_film_id\n     AND store_id = p_store_id\n     AND inventory_in_stock(inventory_id);\n\n     SELECT FOUND_ROWS() INTO p_film_count;\nEND','root@localhost','2018-12-28 10:59:56','2018-12-28 10:59:56','STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8_general_ci','BEGIN\n     SELECT inventory_id\n     FROM inventory\n     WHERE film_id = p_film_id\n     AND store_id = p_store_id\n     AND inventory_in_stock(inventory_id);\n\n     SELECT FOUND_ROWS() INTO p_film_count;\nEND'),('sakila','film_not_in_stock','PROCEDURE','film_not_in_stock','SQL','READS_SQL_DATA','NO','DEFINER','IN p_film_id INT, IN p_store_id INT, OUT p_film_count INT','','BEGIN\n     SELECT inventory_id\n     FROM inventory\n     WHERE film_id = p_film_id\n     AND store_id = p_store_id\n     AND NOT inventory_in_stock(inventory_id);\n\n     SELECT FOUND_ROWS() INTO p_film_count;\nEND','root@localhost','2018-12-28 10:59:56','2018-12-28 10:59:56','STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8_general_ci','BEGIN\n     SELECT inventory_id\n     FROM inventory\n     WHERE film_id = p_film_id\n     AND store_id = p_store_id\n     AND NOT inventory_in_stock(inventory_id);\n\n     SELECT FOUND_ROWS() INTO p_film_count;\nEND'),('sakila','inventory_held_by_customer','FUNCTION','inventory_held_by_customer','SQL','READS_SQL_DATA','NO','DEFINER','p_inventory_id INT','int(11)','BEGIN\n  DECLARE v_customer_id INT;\n  DECLARE EXIT HANDLER FOR NOT FOUND RETURN NULL;\n\n  SELECT customer_id INTO v_customer_id\n  FROM rental\n  WHERE return_date IS NULL\n  AND inventory_id = p_inventory_id;\n\n  RETURN v_customer_id;\nEND','root@localhost','2018-12-28 10:59:56','2018-12-28 10:59:56','STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8_general_ci','BEGIN\n  DECLARE v_customer_id INT;\n  DECLARE EXIT HANDLER FOR NOT FOUND RETURN NULL;\n\n  SELECT customer_id INTO v_customer_id\n  FROM rental\n  WHERE return_date IS NULL\n  AND inventory_id = p_inventory_id;\n\n  RETURN v_customer_id;\nEND'),('sakila','inventory_in_stock','FUNCTION','inventory_in_stock','SQL','READS_SQL_DATA','NO','DEFINER','p_inventory_id INT','tinyint(1)','BEGIN\n    DECLARE v_rentals INT;\n    DECLARE v_out     INT;\n\n    #AN ITEM IS IN-STOCK IF THERE ARE EITHER NO ROWS IN THE rental TABLE\n    #FOR THE ITEM OR ALL ROWS HAVE return_date POPULATED\n\n    SELECT COUNT(*) INTO v_rentals\n    FROM rental\n    WHERE inventory_id = p_inventory_id;\n\n    IF v_rentals = 0 THEN\n      RETURN TRUE;\n    END IF;\n\n    SELECT COUNT(rental_id) INTO v_out\n    FROM inventory LEFT JOIN rental USING(inventory_id)\n    WHERE inventory.inventory_id = p_inventory_id\n    AND rental.return_date IS NULL;\n\n    IF v_out > 0 THEN\n      RETURN FALSE;\n    ELSE\n      RETURN TRUE;\n    END IF;\nEND','root@localhost','2018-12-28 10:59:56','2018-12-28 10:59:56','STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8_general_ci','BEGIN\n    DECLARE v_rentals INT;\n    DECLARE v_out     INT;\n\n    #AN ITEM IS IN-STOCK IF THERE ARE EITHER NO ROWS IN THE rental TABLE\n    #FOR THE ITEM OR ALL ROWS HAVE return_date POPULATED\n\n    SELECT COUNT(*) INTO v_rentals\n    FROM rental\n    WHERE inventory_id = p_inventory_id;\n\n    IF v_rentals = 0 THEN\n      RETURN TRUE;\n    END IF;\n\n    SELECT COUNT(rental_id) INTO v_out\n    FROM inventory LEFT JOIN rental USING(inventory_id)\n    WHERE inventory.inventory_id = p_inventory_id\n    AND rental.return_date IS NULL;\n\n    IF v_out > 0 THEN\n      RETURN FALSE;\n    ELSE\n      RETURN TRUE;\n    END IF;\nEND'),('xchat','xchat_rooms_get','PROCEDURE','xchat_rooms_get','SQL','CONTAINS_SQL','NO','DEFINER','\n','','BEGIN\n	select * from tblRooms;\nEND','root@localhost','2018-12-29 16:31:08','2018-12-29 16:31:08','STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8_general_ci','BEGIN\n	select * from tblRooms;\nEND'),('xchat','xchat_hash_get','PROCEDURE','xchat_hash_get','SQL','CONTAINS_SQL','NO','DEFINER','\nin userId int\n','','BEGIN\nSET NAMES utf8mb4;\n	select hash from tblAuthenticate where userId = `useId`;\nEND','root@localhost','2019-01-07 21:15:17','2019-01-07 21:15:17','STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8mb4_unicode_ci','BEGIN\nSET NAMES utf8mb4;\n	select hash from tblAuthenticate where userId = `useId`;\nEND'),('xchat','xchat_username_count','PROCEDURE','xchat_username_count','SQL','CONTAINS_SQL','NO','DEFINER','\nin username varchar(45)','','BEGIN\n\n        select count(*) as count from tblUsers where tblUsers.username =username;\nEND','root@localhost','2018-12-30 17:27:02','2018-12-30 17:27:02','STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8_general_ci','BEGIN\n\n        select count(*) as count from tblUsers where tblUsers.username =username;\nEND'),('xchat','xchat_register','PROCEDURE','xchat_register','SQL','CONTAINS_SQL','NO','DEFINER','\nin email varchar(200),\nin username varchar(100),\nin hash varchar(100),\nin gender int,\nin birthday datetime,\nin isGuest bit','','BEGIN\ndeclare userId int;\nSET NAMES utf8mb4;\ninsert into tblUsers(email, username, gender, birthday, isGuest) values(email, username, gender, birthday, isGuest);\nset userId = LAST_INSERT_ID();\nif(isGuest=0) then\ninsert into tblAuthenticate(userId, hash) values(userId, hash);\nend if;\nselect * from tblUsers where tblUsers.id = userId;\nEND','root@localhost','2019-01-07 21:15:03','2019-01-07 21:15:03','STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8mb4_unicode_ci','BEGIN\ndeclare userId int;\nSET NAMES utf8mb4;\ninsert into tblUsers(email, username, gender, birthday, isGuest) values(email, username, gender, birthday, isGuest);\nset userId = LAST_INSERT_ID();\nif(isGuest=0) then\ninsert into tblAuthenticate(userId, hash) values(userId, hash);\nend if;\nselect * from tblUsers where tblUsers.id = userId;\nEND'),('xchat','xchat_room_message_add','PROCEDURE','xchat_room_message_add','SQL','CONTAINS_SQL','NO','DEFINER','\nin roomId int,\nin userId int,\nin content text,\nin serverAssignedNMessage int','','BEGIN\nSET NAMES utf8mb4;\ninsert into tblRoomMESSAGES (roomId, userId, content, serverAssignedNMessage) values(roomId, userId, content, serverAssignedNMessage);\nEND','root@localhost','2019-01-07 21:13:50','2019-01-07 21:13:50','STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8mb4_unicode_ci','BEGIN\nSET NAMES utf8mb4;\ninsert into tblRoomMESSAGES (roomId, userId, content, serverAssignedNMessage) values(roomId, userId, content, serverAssignedNMessage);\nEND'),('xchat','xchat_room_messages_get','PROCEDURE','xchat_room_messages_get','SQL','CONTAINS_SQL','NO','DEFINER','\nin roomId Integer,\nin nMessages Integer','','BEGIN\nSET NAMES utf8mb4;\n	select tblRoomMessages.id, roomId, userId, content, username, serverAssignedNMessage from tblRoomMessages \nINNER JOIN tblUsers on tblRoomMessages.userId = tblUsers.id where roomId=`roomId` order by id limit nMessages;	\nEND','root@localhost','2019-01-07 21:14:01','2019-01-07 21:14:01','STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION','','utf8','utf8_general_ci','utf8mb4_unicode_ci','BEGIN\nSET NAMES utf8mb4;\n	select tblRoomMessages.id, roomId, userId, content, username, serverAssignedNMessage from tblRoomMessages \nINNER JOIN tblUsers on tblRoomMessages.userId = tblUsers.id where roomId=`roomId` order by id limit nMessages;	\nEND');
/*!40000 ALTER TABLE `proc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `procs_priv`
--

DROP TABLE IF EXISTS `procs_priv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `procs_priv` (
  `Host` char(60) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Db` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `User` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Routine_name` char(64) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `Routine_type` enum('FUNCTION','PROCEDURE') COLLATE utf8_bin NOT NULL,
  `Grantor` char(93) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Proc_priv` set('Execute','Alter Routine','Grant') CHARACTER SET utf8 NOT NULL DEFAULT '',
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Host`,`Db`,`User`,`Routine_name`,`Routine_type`),
  KEY `Grantor` (`Grantor`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Procedure privileges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procs_priv`
--

LOCK TABLES `procs_priv` WRITE;
/*!40000 ALTER TABLE `procs_priv` DISABLE KEYS */;
/*!40000 ALTER TABLE `procs_priv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proxies_priv`
--

DROP TABLE IF EXISTS `proxies_priv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proxies_priv` (
  `Host` char(60) COLLATE utf8_bin NOT NULL DEFAULT '',
  `User` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Proxied_host` char(60) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Proxied_user` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `With_grant` tinyint(1) NOT NULL DEFAULT '0',
  `Grantor` char(93) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Host`,`User`,`Proxied_host`,`Proxied_user`),
  KEY `Grantor` (`Grantor`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User proxy privileges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proxies_priv`
--

LOCK TABLES `proxies_priv` WRITE;
/*!40000 ALTER TABLE `proxies_priv` DISABLE KEYS */;
INSERT INTO `proxies_priv` VALUES ('localhost','root','','',1,'boot@connecting host','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `proxies_priv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_cost`
--

DROP TABLE IF EXISTS `server_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_cost` (
  `cost_name` varchar(64) NOT NULL,
  `cost_value` float DEFAULT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `comment` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`cost_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_cost`
--

LOCK TABLES `server_cost` WRITE;
/*!40000 ALTER TABLE `server_cost` DISABLE KEYS */;
INSERT INTO `server_cost` VALUES ('disk_temptable_create_cost',NULL,'2018-12-28 10:43:30',NULL),('disk_temptable_row_cost',NULL,'2018-12-28 10:43:30',NULL),('key_compare_cost',NULL,'2018-12-28 10:43:30',NULL),('memory_temptable_create_cost',NULL,'2018-12-28 10:43:30',NULL),('memory_temptable_row_cost',NULL,'2018-12-28 10:43:30',NULL),('row_evaluate_cost',NULL,'2018-12-28 10:43:30',NULL);
/*!40000 ALTER TABLE `server_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servers`
--

DROP TABLE IF EXISTS `servers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servers` (
  `Server_name` char(64) NOT NULL DEFAULT '',
  `Host` char(64) NOT NULL DEFAULT '',
  `Db` char(64) NOT NULL DEFAULT '',
  `Username` char(64) NOT NULL DEFAULT '',
  `Password` char(64) NOT NULL DEFAULT '',
  `Port` int(4) NOT NULL DEFAULT '0',
  `Socket` char(64) NOT NULL DEFAULT '',
  `Wrapper` char(64) NOT NULL DEFAULT '',
  `Owner` char(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`Server_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='MySQL Foreign Servers table';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servers`
--

LOCK TABLES `servers` WRITE;
/*!40000 ALTER TABLE `servers` DISABLE KEYS */;
/*!40000 ALTER TABLE `servers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slave_master_info`
--

DROP TABLE IF EXISTS `slave_master_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slave_master_info` (
  `Number_of_lines` int(10) unsigned NOT NULL COMMENT 'Number of lines in the file.',
  `Master_log_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT 'The name of the master binary log currently being read from the master.',
  `Master_log_pos` bigint(20) unsigned NOT NULL COMMENT 'The master log position of the last read event.',
  `Host` char(64) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT 'The host name of the master.',
  `User_name` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The user name used to connect to the master.',
  `User_password` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The password used to connect to the master.',
  `Port` int(10) unsigned NOT NULL COMMENT 'The network port used to connect to the master.',
  `Connect_retry` int(10) unsigned NOT NULL COMMENT 'The period (in seconds) that the slave will wait before trying to reconnect to the master.',
  `Enabled_ssl` tinyint(1) NOT NULL COMMENT 'Indicates whether the server supports SSL connections.',
  `Ssl_ca` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The file used for the Certificate Authority (CA) certificate.',
  `Ssl_capath` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The path to the Certificate Authority (CA) certificates.',
  `Ssl_cert` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The name of the SSL certificate file.',
  `Ssl_cipher` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The name of the cipher in use for the SSL connection.',
  `Ssl_key` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The name of the SSL key file.',
  `Ssl_verify_server_cert` tinyint(1) NOT NULL COMMENT 'Whether to verify the server certificate.',
  `Heartbeat` float NOT NULL,
  `Bind` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'Displays which interface is employed when connecting to the MySQL server',
  `Ignored_server_ids` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The number of server IDs to be ignored, followed by the actual server IDs',
  `Uuid` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The master server uuid.',
  `Retry_count` bigint(20) unsigned NOT NULL COMMENT 'Number of reconnect attempts, to the master, before giving up.',
  `Ssl_crl` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The file used for the Certificate Revocation List (CRL)',
  `Ssl_crlpath` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'The path used for Certificate Revocation List (CRL) files',
  `Enabled_auto_position` tinyint(1) NOT NULL COMMENT 'Indicates whether GTIDs will be used to retrieve events from the master.',
  `Channel_name` char(64) NOT NULL COMMENT 'The channel on which the slave is connected to a source. Used in Multisource Replication',
  `Tls_version` text CHARACTER SET utf8 COLLATE utf8_bin COMMENT 'Tls version',
  PRIMARY KEY (`Channel_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Master Information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slave_master_info`
--

LOCK TABLES `slave_master_info` WRITE;
/*!40000 ALTER TABLE `slave_master_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `slave_master_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slave_relay_log_info`
--

DROP TABLE IF EXISTS `slave_relay_log_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slave_relay_log_info` (
  `Number_of_lines` int(10) unsigned NOT NULL COMMENT 'Number of lines in the file or rows in the table. Used to version table definitions.',
  `Relay_log_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT 'The name of the current relay log file.',
  `Relay_log_pos` bigint(20) unsigned NOT NULL COMMENT 'The relay log position of the last executed event.',
  `Master_log_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT 'The name of the master binary log file from which the events in the relay log file were read.',
  `Master_log_pos` bigint(20) unsigned NOT NULL COMMENT 'The master log position of the last executed event.',
  `Sql_delay` int(11) NOT NULL COMMENT 'The number of seconds that the slave must lag behind the master.',
  `Number_of_workers` int(10) unsigned NOT NULL,
  `Id` int(10) unsigned NOT NULL COMMENT 'Internal Id that uniquely identifies this record.',
  `Channel_name` char(64) NOT NULL COMMENT 'The channel on which the slave is connected to a source. Used in Multisource Replication',
  PRIMARY KEY (`Channel_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Relay Log Information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slave_relay_log_info`
--

LOCK TABLES `slave_relay_log_info` WRITE;
/*!40000 ALTER TABLE `slave_relay_log_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `slave_relay_log_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slave_worker_info`
--

DROP TABLE IF EXISTS `slave_worker_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slave_worker_info` (
  `Id` int(10) unsigned NOT NULL,
  `Relay_log_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Relay_log_pos` bigint(20) unsigned NOT NULL,
  `Master_log_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Master_log_pos` bigint(20) unsigned NOT NULL,
  `Checkpoint_relay_log_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Checkpoint_relay_log_pos` bigint(20) unsigned NOT NULL,
  `Checkpoint_master_log_name` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Checkpoint_master_log_pos` bigint(20) unsigned NOT NULL,
  `Checkpoint_seqno` int(10) unsigned NOT NULL,
  `Checkpoint_group_size` int(10) unsigned NOT NULL,
  `Checkpoint_group_bitmap` blob NOT NULL,
  `Channel_name` char(64) NOT NULL COMMENT 'The channel on which the slave is connected to a source. Used in Multisource Replication',
  PRIMARY KEY (`Channel_name`,`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Worker Information';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slave_worker_info`
--

LOCK TABLES `slave_worker_info` WRITE;
/*!40000 ALTER TABLE `slave_worker_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `slave_worker_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tables_priv`
--

DROP TABLE IF EXISTS `tables_priv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tables_priv` (
  `Host` char(60) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Db` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `User` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Table_name` char(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Grantor` char(93) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Table_priv` set('Select','Insert','Update','Delete','Create','Drop','Grant','References','Index','Alter','Create View','Show view','Trigger') CHARACTER SET utf8 NOT NULL DEFAULT '',
  `Column_priv` set('Select','Insert','Update','References') CHARACTER SET utf8 NOT NULL DEFAULT '',
  PRIMARY KEY (`Host`,`Db`,`User`,`Table_name`),
  KEY `Grantor` (`Grantor`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table privileges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tables_priv`
--

LOCK TABLES `tables_priv` WRITE;
/*!40000 ALTER TABLE `tables_priv` DISABLE KEYS */;
INSERT INTO `tables_priv` VALUES ('localhost','mysql','mysql.session','user','boot@connecting host','0000-00-00 00:00:00','Select',''),('localhost','sys','mysql.sys','sys_config','root@localhost','2018-12-28 10:43:31','Select','');
/*!40000 ALTER TABLE `tables_priv` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_zone`
--

DROP TABLE IF EXISTS `time_zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `time_zone` (
  `Time_zone_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Use_leap_seconds` enum('Y','N') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`Time_zone_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Time zones';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_zone`
--

LOCK TABLES `time_zone` WRITE;
/*!40000 ALTER TABLE `time_zone` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_zone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_zone_leap_second`
--

DROP TABLE IF EXISTS `time_zone_leap_second`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `time_zone_leap_second` (
  `Transition_time` bigint(20) NOT NULL,
  `Correction` int(11) NOT NULL,
  PRIMARY KEY (`Transition_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Leap seconds information for time zones';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_zone_leap_second`
--

LOCK TABLES `time_zone_leap_second` WRITE;
/*!40000 ALTER TABLE `time_zone_leap_second` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_zone_leap_second` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_zone_name`
--

DROP TABLE IF EXISTS `time_zone_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `time_zone_name` (
  `Name` char(64) NOT NULL,
  `Time_zone_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Time zone names';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_zone_name`
--

LOCK TABLES `time_zone_name` WRITE;
/*!40000 ALTER TABLE `time_zone_name` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_zone_name` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_zone_transition`
--

DROP TABLE IF EXISTS `time_zone_transition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `time_zone_transition` (
  `Time_zone_id` int(10) unsigned NOT NULL,
  `Transition_time` bigint(20) NOT NULL,
  `Transition_type_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`Time_zone_id`,`Transition_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Time zone transitions';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_zone_transition`
--

LOCK TABLES `time_zone_transition` WRITE;
/*!40000 ALTER TABLE `time_zone_transition` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_zone_transition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time_zone_transition_type`
--

DROP TABLE IF EXISTS `time_zone_transition_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `time_zone_transition_type` (
  `Time_zone_id` int(10) unsigned NOT NULL,
  `Transition_type_id` int(10) unsigned NOT NULL,
  `Offset` int(11) NOT NULL DEFAULT '0',
  `Is_DST` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `Abbreviation` char(8) NOT NULL DEFAULT '',
  PRIMARY KEY (`Time_zone_id`,`Transition_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 STATS_PERSISTENT=0 COMMENT='Time zone transition types';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time_zone_transition_type`
--

LOCK TABLES `time_zone_transition_type` WRITE;
/*!40000 ALTER TABLE `time_zone_transition_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_zone_transition_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `Host` char(60) COLLATE utf8_bin NOT NULL DEFAULT '',
  `User` char(32) COLLATE utf8_bin NOT NULL DEFAULT '',
  `Select_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Insert_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Update_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Delete_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Drop_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Reload_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Shutdown_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Process_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `File_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Grant_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `References_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Index_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Alter_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Show_db_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Super_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_tmp_table_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Lock_tables_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Execute_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Repl_slave_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Repl_client_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_view_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Show_view_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_routine_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Alter_routine_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_user_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Event_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Trigger_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `Create_tablespace_priv` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `ssl_type` enum('','ANY','X509','SPECIFIED') CHARACTER SET utf8 NOT NULL DEFAULT '',
  `ssl_cipher` blob NOT NULL,
  `x509_issuer` blob NOT NULL,
  `x509_subject` blob NOT NULL,
  `max_questions` int(11) unsigned NOT NULL DEFAULT '0',
  `max_updates` int(11) unsigned NOT NULL DEFAULT '0',
  `max_connections` int(11) unsigned NOT NULL DEFAULT '0',
  `max_user_connections` int(11) unsigned NOT NULL DEFAULT '0',
  `plugin` char(64) COLLATE utf8_bin NOT NULL DEFAULT 'mysql_native_password',
  `authentication_string` text COLLATE utf8_bin,
  `password_expired` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  `password_last_changed` timestamp NULL DEFAULT NULL,
  `password_lifetime` smallint(5) unsigned DEFAULT NULL,
  `account_locked` enum('N','Y') CHARACTER SET utf8 NOT NULL DEFAULT 'N',
  PRIMARY KEY (`Host`,`User`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and global privileges';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('localhost','root','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','','','','',0,0,0,0,'mysql_native_password','*3918FE1BC78015D043BB3E7E4C39D2C257746486','N','2018-12-28 10:43:44',NULL,'N'),('localhost','mysql.session','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','Y','N','N','N','N','N','N','N','N','N','N','N','N','N','','','','',0,0,0,0,'mysql_native_password','*THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE','N','2018-12-28 10:43:31',NULL,'Y'),('localhost','mysql.sys','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','N','','','','',0,0,0,0,'mysql_native_password','*THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE','N','2018-12-28 10:43:31',NULL,'Y'),('%','xchat','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','','','','',0,0,0,0,'mysql_native_password','*3918FE1BC78015D043BB3E7E4C39D2C257746486','N','2019-01-07 20:41:26',NULL,'N');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mysql'
--

--
-- Dumping routines for database 'mysql'
--

--
-- Table structure for table `general_log`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS `general_log` (
  `event_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `user_host` mediumtext NOT NULL,
  `thread_id` bigint(21) unsigned NOT NULL,
  `server_id` int(10) unsigned NOT NULL,
  `command_type` varchar(64) NOT NULL,
  `argument` mediumblob NOT NULL
) ENGINE=CSV DEFAULT CHARSET=utf8 COMMENT='General log';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `slow_log`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE IF NOT EXISTS `slow_log` (
  `start_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `user_host` mediumtext NOT NULL,
  `query_time` time(6) NOT NULL,
  `lock_time` time(6) NOT NULL,
  `rows_sent` int(11) NOT NULL,
  `rows_examined` int(11) NOT NULL,
  `db` varchar(512) NOT NULL,
  `last_insert_id` int(11) NOT NULL,
  `insert_id` int(11) NOT NULL,
  `server_id` int(10) unsigned NOT NULL,
  `sql_text` mediumblob NOT NULL,
  `thread_id` bigint(21) unsigned NOT NULL
) ENGINE=CSV DEFAULT CHARSET=utf8 COMMENT='Slow log';
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:24:37
CREATE DATABASE  IF NOT EXISTS `swingers` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `swingers`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: swingers
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
-- Dumping events for database 'swingers'
--

--
-- Dumping routines for database 'swingers'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:24:37
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
-- Table structure for table `tblauthenticate`
--

DROP TABLE IF EXISTS `tblauthenticate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblauthenticate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `hash` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblauthenticate`
--

LOCK TABLES `tblauthenticate` WRITE;
/*!40000 ALTER TABLE `tblauthenticate` DISABLE KEYS */;
INSERT INTO `tblauthenticate` VALUES (1,20,'$2a$10$hesl0HcWQXwtGuAyIm9iD.os.DY0UTgg17VrzL/vGEavA/qI2gGf2');
/*!40000 ALTER TABLE `tblauthenticate` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `tblrooms`
--

DROP TABLE IF EXISTS `tblrooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblrooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isPm` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblrooms`
--

LOCK TABLES `tblrooms` WRITE;
/*!40000 ALTER TABLE `tblrooms` DISABLE KEYS */;
INSERT INTO `tblrooms` VALUES (1,'Lounge','\0');
/*!40000 ALTER TABLE `tblrooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblusers`
--

DROP TABLE IF EXISTS `tblusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isGuest` bit(1) NOT NULL,
  `gender` int(11) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=439 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblusers`
--

LOCK TABLES `tblusers` WRITE;
/*!40000 ALTER TABLE `tblusers` DISABLE KEYS */;
INSERT INTO `tblusers` VALUES (1,'dfsdfs',NULL,'',NULL,NULL),(2,'dfdfds',NULL,'',NULL,NULL),(3,'dfsdsf',NULL,'',NULL,NULL),(4,'dsfdfs',NULL,'',NULL,NULL),(5,'dsffd',NULL,'',NULL,NULL),(6,'fddsfdfs',NULL,'',NULL,NULL),(7,'sddfs',NULL,'',NULL,NULL),(8,'sdds',NULL,'',NULL,NULL),(9,'dfsdsfdfdfd',NULL,'',NULL,NULL),(10,'dsdsds',NULL,'',NULL,NULL),(11,'dfdfsdsfds',NULL,'',NULL,NULL),(12,'dfsds',NULL,'',NULL,NULL),(13,'dsfds',NULL,'',NULL,NULL),(14,'dfsd',NULL,'',NULL,NULL),(15,'sdsd',NULL,'',NULL,NULL),(16,'sdsddfsdfddsds',NULL,'',NULL,NULL),(17,'dsfdsf',NULL,'',NULL,NULL),(18,'dfdsfdsf',NULL,'',NULL,NULL),(19,'dfs',NULL,'',NULL,NULL),(20,'adsfdsdfsdfdfsdfs','adfsd','\0',0,'1901-00-01 00:00:00'),(21,'sdffdsds',NULL,'',NULL,NULL),(22,'dfsdfsdfs',NULL,'',NULL,NULL),(23,'dfdsds',NULL,'',NULL,NULL),(24,'dsdfs',NULL,'',NULL,NULL),(25,'fddfsdfs',NULL,'',NULL,NULL),(26,'dsfdsfdfd',NULL,'',NULL,NULL),(27,'asdfdfsdfs',NULL,'',NULL,NULL),(28,'dsdsf',NULL,'',NULL,NULL),(29,'dsdsfdfs',NULL,'',NULL,NULL),(30,'dfsdsfdsdss',NULL,'',NULL,NULL),(31,'dfsdfsdfdsf',NULL,'',NULL,NULL),(32,'dfsdsfdsfdsf',NULL,'',NULL,NULL),(33,'fdsdfs',NULL,'',NULL,NULL),(34,'dfsfds',NULL,'',NULL,NULL),(35,'dfssd',NULL,'',NULL,NULL),(36,'dfsdfssd',NULL,'',NULL,NULL),(37,'dsf',NULL,'',NULL,NULL),(38,'dfsdfsfds',NULL,'',NULL,NULL),(39,'fdsdfsdfs',NULL,'',NULL,NULL),(40,'fds',NULL,'',NULL,NULL),(41,'dfsdfssdfs',NULL,'',NULL,NULL),(42,'fdsdfssdfdsf',NULL,'',NULL,NULL),(43,'dfsdfsdsfsdf',NULL,'',NULL,NULL),(44,'dsfdfsdfdsfds',NULL,'',NULL,NULL),(45,'dsfsdf',NULL,'',NULL,NULL),(46,'dfsdsfdsfdsdsf',NULL,'',NULL,NULL),(47,'dsfdfsdsfds',NULL,'',NULL,NULL),(48,'dfsdfsdsfdfs',NULL,'',NULL,NULL),(49,'dfsfdsdfsdsf',NULL,'',NULL,NULL),(50,'dfsdsfsdfdfs',NULL,'',NULL,NULL),(51,'dfsdfsdfsds',NULL,'',NULL,NULL),(52,'ffdsfds',NULL,'',NULL,NULL),(53,'sdffds',NULL,'',NULL,NULL),(54,'dfdsfdfs',NULL,'',NULL,NULL),(55,'dsfdfsdfsdsf',NULL,'',NULL,NULL),(56,'dfsdsfdsfs',NULL,'',NULL,NULL),(57,'sfddfs',NULL,'',NULL,NULL),(58,'dfsdfsds',NULL,'',NULL,NULL),(59,'dfsdfsdsfdfsdsf',NULL,'',NULL,NULL),(60,'dfsfdssds',NULL,'',NULL,NULL),(61,'dsds',NULL,'',NULL,NULL),(62,'dfsfdsdsfdfs',NULL,'',NULL,NULL),(63,'dfsdfsdfsdsfdfsd',NULL,'',NULL,NULL),(64,'dfsfdsfds',NULL,'',NULL,NULL),(65,'dfsdfsfsd',NULL,'',NULL,NULL),(66,'dsfdsfs',NULL,'',NULL,NULL),(67,'DFSDSFSDADSA',NULL,'',NULL,NULL),(68,'dsfdfsdssdfds',NULL,'',NULL,NULL),(69,'fdssd',NULL,'',NULL,NULL),(70,'dsdsdsd',NULL,'',NULL,NULL),(71,'dfsdfsdfse',NULL,'',NULL,NULL),(72,'wqe',NULL,'',NULL,NULL),(73,'dfsdfsdf',NULL,'',NULL,NULL),(74,'dsfdfsdfs',NULL,'',NULL,NULL),(75,'dfsdfss',NULL,'',NULL,NULL),(76,'dsfdfsdfssddssd',NULL,'',NULL,NULL),(77,'dfsdfsdsfdsf',NULL,'',NULL,NULL),(78,'dfsdfsdfsdfsdfsds',NULL,'',NULL,NULL),(79,'dfsdfsdsffsdfds',NULL,'',NULL,NULL),(80,'dfsdfsdfssdfdsf',NULL,'',NULL,NULL),(81,'dfsfdsfdsfdsdfs',NULL,'',NULL,NULL),(82,'ewrrewerwrew',NULL,'',NULL,NULL),(83,'dsfdfsfdsdfs',NULL,'',NULL,NULL),(84,'fdsdfsdfsewr',NULL,'',NULL,NULL),(85,'werewr',NULL,'',NULL,NULL),(86,'ewrsdffsd',NULL,'',NULL,NULL),(87,'324342',NULL,'',NULL,NULL),(88,'erwerwerw',NULL,'',NULL,NULL),(89,'ewrew',NULL,'',NULL,NULL),(90,'rewerewr',NULL,'',NULL,NULL),(91,'wererwerw',NULL,'',NULL,NULL),(92,'rewew34',NULL,'',NULL,NULL),(93,'ewrewrew',NULL,'',NULL,NULL),(94,'ewrewr',NULL,'',NULL,NULL),(95,'ewewrrwe',NULL,'',NULL,NULL),(96,'ewrer',NULL,'',NULL,NULL),(97,'ewewr',NULL,'',NULL,NULL),(98,'ewrrewerfds',NULL,'',NULL,NULL),(99,'ewrrew',NULL,'',NULL,NULL),(100,'erwewr',NULL,'',NULL,NULL),(101,'dfsdfdfs',NULL,'',NULL,NULL),(102,'dfsdfsdfsewr',NULL,'',NULL,NULL),(103,'ewrwew',NULL,'',NULL,NULL),(104,'dfsewqr',NULL,'',NULL,NULL),(105,'dfdsdfssdf',NULL,'',NULL,NULL),(106,'dfsdfds',NULL,'',NULL,NULL),(107,'dsffdssdf',NULL,'',NULL,NULL),(108,'refdfgdgfd',NULL,'',NULL,NULL),(109,'sdfdfsdsf',NULL,'',NULL,NULL),(110,'dsfdfssd',NULL,'',NULL,NULL),(111,'sdasdadsa',NULL,'',NULL,NULL),(112,'dsfdsfsdds',NULL,'',NULL,NULL),(113,'dfsdfssde',NULL,'',NULL,NULL),(114,'erwrewds',NULL,'',NULL,NULL),(115,'dfsdfsdfsewrew',NULL,'',NULL,NULL),(116,'ewrr',NULL,'',NULL,NULL),(117,'ewrdsf',NULL,'',NULL,NULL),(118,'ewrewrdfs',NULL,'',NULL,NULL),(119,'rerewdfsds',NULL,'',NULL,NULL),(120,'erwerdfs',NULL,'',NULL,NULL),(121,'dfdsfsd',NULL,'',NULL,NULL),(122,'ewrdfsds',NULL,'',NULL,NULL),(123,'erwewrew',NULL,'',NULL,NULL),(124,'rewerwdfdfs',NULL,'',NULL,NULL),(125,'rewewrew',NULL,'',NULL,NULL),(126,'erwerwdfs',NULL,'',NULL,NULL),(127,'redfdfs',NULL,'',NULL,NULL),(128,'dsdfsdfsdfs',NULL,'',NULL,NULL),(129,'erwdsdfs',NULL,'',NULL,NULL),(130,'dsfdfsewr',NULL,'',NULL,NULL),(131,'ewrdfsdfs',NULL,'',NULL,NULL),(132,'erwerwdfsfds',NULL,'',NULL,NULL),(133,'dssdf',NULL,'',NULL,NULL),(134,'erwerwew',NULL,'',NULL,NULL),(135,'erwerwfds',NULL,'',NULL,NULL),(136,'rewerewrfds',NULL,'',NULL,NULL),(137,'dsfdfsfds',NULL,'',NULL,NULL),(138,'ewrewrfds',NULL,'',NULL,NULL),(139,'dfsdfsdfsewewq',NULL,'',NULL,NULL),(140,'reewrfds',NULL,'',NULL,NULL),(141,'',NULL,'',NULL,NULL),(142,'SoftwareEngineer',NULL,'',NULL,NULL),(143,'rewerw',NULL,'',NULL,NULL),(144,'rewerwewr',NULL,'',NULL,NULL),(145,'ewrrewerwwer',NULL,'',NULL,NULL),(146,'ewrewrewrerw',NULL,'',NULL,NULL),(147,'fdsdfssda',NULL,'',NULL,NULL),(148,'dfsewr',NULL,'',NULL,NULL),(149,'dsdsds7er',NULL,'',NULL,NULL),(150,'dfsdfse',NULL,'',NULL,NULL),(151,'dsfdfsds',NULL,'',NULL,NULL),(152,'erwewfdssd',NULL,'',NULL,NULL),(153,'dsfer',NULL,'',NULL,NULL),(154,'ewrdfs',NULL,'',NULL,NULL),(155,'dfsdfsdfsdsf',NULL,'',NULL,NULL),(156,'dsfwer',NULL,'',NULL,NULL),(157,'ererwdsf',NULL,'',NULL,NULL),(158,'ewrdfsdfsd',NULL,'',NULL,NULL),(159,'dsfdfsewrds',NULL,'',NULL,NULL),(160,'erwdsfds',NULL,'',NULL,NULL),(161,'ewrdsffds',NULL,'',NULL,NULL),(162,'erwdfsdfs',NULL,'',NULL,NULL),(163,'erwerwdfsdfs',NULL,'',NULL,NULL),(164,'rewdsfdfs',NULL,'',NULL,NULL),(165,'dfsfdsdfs',NULL,'',NULL,NULL),(166,'rewdfssd',NULL,'',NULL,NULL),(167,'dsfdfsdsew',NULL,'',NULL,NULL),(168,'sdfdse',NULL,'',NULL,NULL),(169,'dsfdsfsd',NULL,'',NULL,NULL),(170,'dfsdfdse',NULL,'',NULL,NULL),(171,'dfsfds7',NULL,'',NULL,NULL),(172,'rewfsddfs',NULL,'',NULL,NULL),(173,'erwfdsds',NULL,'',NULL,NULL),(174,'ewrdsfdfs',NULL,'',NULL,NULL),(175,'ewrfdsdfs',NULL,'',NULL,NULL),(176,'werdfsdfs',NULL,'',NULL,NULL),(177,'erwdsfdfs',NULL,'',NULL,NULL),(178,'ewrfds',NULL,'',NULL,NULL),(179,'ewfds',NULL,'',NULL,NULL),(180,'ewrdsfdfsd',NULL,'',NULL,NULL),(181,'sdfs',NULL,'',NULL,NULL),(182,'ewdfsfdsdfs',NULL,'',NULL,NULL),(183,'edsdsf',NULL,'',NULL,NULL),(184,'eewsddfs',NULL,'',NULL,NULL),(185,'fdssdfdfs',NULL,'',NULL,NULL),(186,'ewrfddfsd',NULL,'',NULL,NULL),(187,'erwerdfssd',NULL,'',NULL,NULL),(188,'ewrerwdfs',NULL,'',NULL,NULL),(189,'ewerwdfsdfs',NULL,'',NULL,NULL),(190,'erwfsdsf',NULL,'',NULL,NULL),(191,'erwerdf',NULL,'',NULL,NULL),(192,'erdsfdfs',NULL,'',NULL,NULL),(193,'erwerfds',NULL,'',NULL,NULL),(194,'ewrerwdsfdfs',NULL,'',NULL,NULL),(195,'ewrerwdfd',NULL,'',NULL,NULL),(196,'dsfdfsdse',NULL,'',NULL,NULL),(197,'dse',NULL,'',NULL,NULL),(198,'dfsfdse',NULL,'',NULL,NULL),(199,'dsfdsfe',NULL,'',NULL,NULL),(200,'ewrdfse',NULL,'',NULL,NULL),(201,'rewerwddsf',NULL,'',NULL,NULL),(202,'erwrdfs',NULL,'',NULL,NULL),(203,'weersdfdfs',NULL,'',NULL,NULL),(204,'ewrrewdf',NULL,'',NULL,NULL),(205,'eerwrewfds',NULL,'',NULL,NULL),(206,'ewrfdsdfse',NULL,'',NULL,NULL),(207,'dsdsdds',NULL,'',NULL,NULL),(208,'dsdsfe',NULL,'',NULL,NULL),(209,'fdsfdsfdsdsfdsf',NULL,'',NULL,NULL),(210,'ewrerwredfs',NULL,'',NULL,NULL),(211,'ewrerwredfsd',NULL,'',NULL,NULL),(212,'ewrerwredfsddsds',NULL,'',NULL,NULL),(213,'ewrerwredfsddsdsd',NULL,'',NULL,NULL),(214,'ewrerwredfsddsdsdere',NULL,'',NULL,NULL),(215,'erwerwdfsdfd',NULL,'',NULL,NULL),(216,'erwd232',NULL,'',NULL,NULL),(217,'ererwewdsfds',NULL,'',NULL,NULL),(218,'ewrfdse',NULL,'',NULL,NULL),(219,'rewewrfd',NULL,'',NULL,NULL),(220,'ewredfsdf',NULL,'',NULL,NULL),(221,'werfdsd',NULL,'',NULL,NULL),(222,'rewdfsdfs',NULL,'',NULL,NULL),(223,'erwewrdse',NULL,'',NULL,NULL),(224,'ewr334',NULL,'',NULL,NULL),(225,'erwrewdfs2',NULL,'',NULL,NULL),(226,'ewrds',NULL,'',NULL,NULL),(227,'sdfeer',NULL,'',NULL,NULL),(228,'sdfser',NULL,'',NULL,NULL),(229,'dfdfdsf',NULL,'',NULL,NULL),(230,'fdsdseere',NULL,'',NULL,NULL),(231,'ewrdfsfds',NULL,'',NULL,NULL),(232,'dsfewerwfd',NULL,'',NULL,NULL),(233,'dsfdfsdfsdsds',NULL,'',NULL,NULL),(234,'dsferdfd',NULL,'',NULL,NULL),(235,'ewdfsd',NULL,'',NULL,NULL),(236,'ewrdfsfd',NULL,'',NULL,NULL),(237,'ewrewrfdsdfsds',NULL,'',NULL,NULL),(238,'ewrefdsdfs',NULL,'',NULL,NULL),(239,'erfdfew33',NULL,'',NULL,NULL),(240,'sdfew',NULL,'',NULL,NULL),(241,'ewrfddsfsfdsdffdsdsfsdf',NULL,'',NULL,NULL),(242,'fddsfewrerw',NULL,'',NULL,NULL),(243,'sdfdsewr',NULL,'',NULL,NULL),(244,'sddsfdsdfs',NULL,'',NULL,NULL),(245,'sdfdsdf',NULL,'',NULL,NULL),(246,'sdfwer',NULL,'',NULL,NULL),(247,'ewrerwdsfdfsdfds',NULL,'',NULL,NULL),(248,'ewrdffdfsd',NULL,'',NULL,NULL),(249,'sdrdsf',NULL,'',NULL,NULL),(250,'sdfdswererw',NULL,'',NULL,NULL),(251,'ewrddsfdfs',NULL,'',NULL,NULL),(252,'sdfewrew',NULL,'',NULL,NULL),(253,'ewrdfdfs',NULL,'',NULL,NULL),(254,'ewrerw342342',NULL,'',NULL,NULL),(255,'dfsdsfds',NULL,'',NULL,NULL),(256,'werdvddfsfds',NULL,'',NULL,NULL),(257,'eerwewrdfs',NULL,'',NULL,NULL),(258,'dsfdsdsf',NULL,'',NULL,NULL),(259,'dsffddsf',NULL,'',NULL,NULL),(260,'wererfsddsf',NULL,'',NULL,NULL),(261,'dsffddfssd',NULL,'',NULL,NULL),(262,'fdsdfsdfsfds',NULL,'',NULL,NULL),(263,'dsfdsfds',NULL,'',NULL,NULL),(264,'sdffsddsf',NULL,'',NULL,NULL),(265,'ewrwdfs',NULL,'',NULL,NULL),(266,'dfsdfsdfew',NULL,'',NULL,NULL),(267,'erwddfssdf',NULL,'',NULL,NULL),(268,'werewrfdsdfs',NULL,'',NULL,NULL),(269,'dfsdfsfdserw',NULL,'',NULL,NULL),(270,'dsfdfdfs',NULL,'',NULL,NULL),(271,'werdfsfds',NULL,'',NULL,NULL),(272,'ewrsd3we',NULL,'',NULL,NULL),(273,'rewdfsfdsdfs',NULL,'',NULL,NULL),(274,'werdsf',NULL,'',NULL,NULL),(275,'rewdfdfs',NULL,'',NULL,NULL),(276,'ewrwer',NULL,'',NULL,NULL),(277,'erwdfsdsf',NULL,'',NULL,NULL),(278,'rewdfsfds',NULL,'',NULL,NULL),(279,'erwdfsdfsdfsd',NULL,'',NULL,NULL),(280,'sdffdsfds',NULL,'',NULL,NULL),(281,'ewrfdfdfds',NULL,'',NULL,NULL),(282,'erwsdffds',NULL,'',NULL,NULL),(283,'dfsdfswe',NULL,'',NULL,NULL),(284,'werewrfdsdfs7',NULL,'',NULL,NULL),(285,'fdsewerwf',NULL,'',NULL,NULL),(286,'rewerwfds',NULL,'',NULL,NULL),(287,'ewrerfdsfds',NULL,'',NULL,NULL),(288,'errewfdsfds',NULL,'',NULL,NULL),(289,'dfsfdser',NULL,'',NULL,NULL),(290,'erwfdsfds',NULL,'',NULL,NULL),(291,'sdfds',NULL,'',NULL,NULL),(292,'erwddsffsd',NULL,'',NULL,NULL),(293,'dfsfddfs',NULL,'',NULL,NULL),(294,'ewrewrfdsdsf',NULL,'',NULL,NULL),(295,'erwerwfdsdsd',NULL,'',NULL,NULL),(296,'werdfdfs',NULL,'',NULL,NULL),(297,'ewersdfdfs',NULL,'',NULL,NULL),(298,'erwrefdsdfs',NULL,'',NULL,NULL),(299,'fddfsdfse',NULL,'',NULL,NULL),(300,'erwrewdfsfds',NULL,'',NULL,NULL),(301,'erwreerwfds',NULL,'',NULL,NULL),(302,'dfsfdsewrre',NULL,'',NULL,NULL),(303,'ddsfewr',NULL,'',NULL,NULL),(304,'erwerwfdss',NULL,'',NULL,NULL),(305,'erwrewfdsfds',NULL,'',NULL,NULL),(306,'ewredfsds',NULL,'',NULL,NULL),(307,'erwdfsfds',NULL,'',NULL,NULL),(308,'ERWDFSFDSFDS',NULL,'',NULL,NULL),(309,'rewdfdfsewr',NULL,'',NULL,NULL),(310,'erwfdfdsdfs',NULL,'',NULL,NULL),(311,'ewrredfsdfs',NULL,'',NULL,NULL),(312,'ewrrewerwfds',NULL,'',NULL,NULL),(313,'rewrewdfsdfs',NULL,'',NULL,NULL),(314,'erwrefdfds',NULL,'',NULL,NULL),(315,'erwdfsdfsdfs',NULL,'',NULL,NULL),(316,'DDD',NULL,'',NULL,NULL),(317,'ewqdsadsa',NULL,'',NULL,NULL),(318,'ewererwfdsfds',NULL,'',NULL,NULL),(319,'ewrffds',NULL,'',NULL,NULL),(320,'eererwdffds',NULL,'',NULL,NULL),(321,'erwrewfdsdsf',NULL,'',NULL,NULL),(322,'ewrerdfs',NULL,'',NULL,NULL),(323,'dfsfddfsewew',NULL,'',NULL,NULL),(324,'ewerewfdsfds',NULL,'',NULL,NULL),(325,'dsfdfsdfsdsfe',NULL,'',NULL,NULL),(326,'ewrerwdfsee',NULL,'',NULL,NULL),(327,'wredfsdfs',NULL,'',NULL,NULL),(328,'ewrrewfdsdfs',NULL,'',NULL,NULL),(329,'erwrwdfsdfs',NULL,'',NULL,NULL),(330,'ewfesdffds',NULL,'',NULL,NULL),(331,'ewdfsdfsfds',NULL,'',NULL,NULL),(332,'werredfdf',NULL,'',NULL,NULL),(333,'ewrerfdsdfs',NULL,'',NULL,NULL),(334,'erwerdsfsdf',NULL,'',NULL,NULL),(335,'ewdsfdsfdfs',NULL,'',NULL,NULL),(336,'ewrdsfsddfsds',NULL,'',NULL,NULL),(337,'ewrdfsdfsewr',NULL,'',NULL,NULL),(338,'erwdfsdfse',NULL,'',NULL,NULL),(339,'ewrdfsfdsewr',NULL,'',NULL,NULL),(340,'erwdsffdssdf',NULL,'',NULL,NULL),(341,'ewrerwdfsew',NULL,'',NULL,NULL),(342,'erwhgj',NULL,'',NULL,NULL),(343,'ewrerwdffds',NULL,'',NULL,NULL),(344,'ewrdsfdfsdfs',NULL,'',NULL,NULL),(345,'wererwerdfsfds',NULL,'',NULL,NULL),(346,'ewrewrdfsdfs',NULL,'',NULL,NULL),(347,'ewrsdfdfdsf',NULL,'',NULL,NULL),(348,'fsddfsdfs',NULL,'',NULL,NULL),(349,'ewdfdsf',NULL,'',NULL,NULL),(350,'dfdfdfdf',NULL,'',NULL,NULL),(351,'erwrewdffd',NULL,'',NULL,NULL),(352,'erwdfdffd',NULL,'',NULL,NULL),(353,'dffdfdsfd',NULL,'',NULL,NULL),(354,'dsffdfddfdfs',NULL,'',NULL,NULL),(355,'dffdfd',NULL,'',NULL,NULL),(356,'dsffdsfdsfdsf',NULL,'',NULL,NULL),(357,'dsadfsdfs',NULL,'',NULL,NULL),(358,'DSFDFSFFDSFDS',NULL,'',NULL,NULL),(359,'sdfffdsfds',NULL,'',NULL,NULL),(360,'dsdfsfdsfds',NULL,'',NULL,NULL),(361,'werqrwefds',NULL,'',NULL,NULL),(362,'sdfdfsfds',NULL,'',NULL,NULL),(363,'SFDDFSFDSDFS',NULL,'',NULL,NULL),(364,'sdfsfsddfsdsf',NULL,'',NULL,NULL),(365,'asdfadsfdfsa',NULL,'',NULL,NULL),(366,'dsafasdfdsff',NULL,'',NULL,NULL),(367,'dssdffdsfsd',NULL,'',NULL,NULL),(368,'ewrwerdfsdfs',NULL,'',NULL,NULL),(369,'sdffdsfdsfsd',NULL,'',NULL,NULL),(370,'fsdfdsdfs',NULL,'',NULL,NULL),(371,'sdfdfsdfsdfs',NULL,'',NULL,NULL),(372,'sdffdsdfsdfs',NULL,'',NULL,NULL),(373,'dsffddsfdfsdfs',NULL,'',NULL,NULL),(374,'ewrerwfddfsdfs',NULL,'',NULL,NULL),(375,'fdfdfdfs',NULL,'',NULL,NULL),(376,'qfdsdffdsfsdfsd',NULL,'',NULL,NULL),(377,'sdffdfdfs',NULL,'',NULL,NULL),(378,'werfddfsfsdf',NULL,'',NULL,NULL),(379,'dsffdsdfs',NULL,'',NULL,NULL),(380,'dffdsdfs',NULL,'',NULL,NULL),(381,'fdsfdsfdsfsdsfd',NULL,'',NULL,NULL),(382,'ddfsfdfdsfds',NULL,'',NULL,NULL),(383,'dfsdfsdfds',NULL,'',NULL,NULL),(384,'dsfdsdfsfds',NULL,'',NULL,NULL),(385,'dfsdfddfs',NULL,'',NULL,NULL),(386,'dsffddfsdsf',NULL,'',NULL,NULL),(387,'werdsfdfsdsf',NULL,'',NULL,NULL),(388,'dsffdsfdsfdsfew',NULL,'',NULL,NULL),(389,'dafdfsafdsdf',NULL,'',NULL,NULL),(390,'adffdffdsaadsf',NULL,'',NULL,NULL),(391,'dsfdfsdffds',NULL,'',NULL,NULL),(392,'dwfadfsdfadfsa',NULL,'',NULL,NULL),(393,'fffdsdfsfdfds',NULL,'',NULL,NULL),(394,'fdsdfsfdsfdsfds',NULL,'',NULL,NULL),(395,'dsdsfdewrerwdf',NULL,'',NULL,NULL),(396,'rewdfdfds',NULL,'',NULL,NULL),(397,'dfdfsdfdfs',NULL,'',NULL,NULL),(398,'rewdfdf',NULL,'',NULL,NULL),(399,'ddsffdfsdsdff',NULL,'',NULL,NULL),(400,'sdfadsffdas',NULL,'',NULL,NULL),(401,'dsffdsfddfs',NULL,'',NULL,NULL),(402,'dfsdfsfdsdfs',NULL,'',NULL,NULL),(403,'sddfsfdsdfsfds',NULL,'',NULL,NULL),(404,'dsfffdsfdsdfs',NULL,'',NULL,NULL),(405,'dsaaewrdsf',NULL,'',NULL,NULL),(406,'sddsfds',NULL,'',NULL,NULL),(407,'dsfsdfdsfsd',NULL,'',NULL,NULL),(408,'dsfddfsffds',NULL,'',NULL,NULL),(409,'dfsfdfds',NULL,'',NULL,NULL),(410,'dafdfsfafds',NULL,'',NULL,NULL),(411,'ceredffdsfds',NULL,'',NULL,NULL),(412,'sdfdfsdfsdf',NULL,'',NULL,NULL),(413,'ewrdfdf',NULL,'',NULL,NULL),(414,'wredsffdds',NULL,'',NULL,NULL),(415,'ewrdfsdsffdsfds',NULL,'',NULL,NULL),(416,'rewrewdf',NULL,'',NULL,NULL),(417,'ewrfdfd',NULL,'',NULL,NULL),(418,'fdsfdsdfs',NULL,'',NULL,NULL),(419,'ewffdssfds',NULL,'',NULL,NULL),(420,'fdfdsfdfds',NULL,'',NULL,NULL),(421,'dfewfds',NULL,'',NULL,NULL),(422,'ewrerwdfdf',NULL,'',NULL,NULL),(423,'fddfdf',NULL,'',NULL,NULL),(424,'ewrfddfdf',NULL,'',NULL,NULL),(425,'ewrdffd',NULL,'',NULL,NULL),(426,'erwfddf',NULL,'',NULL,NULL),(427,'dfsdfsfdserwe',NULL,'',NULL,NULL),(428,'dfdfsfdfds',NULL,'',NULL,NULL),(429,'dfsdfsfdse',NULL,'',NULL,NULL),(430,'fdsdffds',NULL,'',NULL,NULL),(431,'werwerfdfdsf',NULL,'',NULL,NULL),(432,'rwedsffdsfsd',NULL,'',NULL,NULL),(433,'werdfsfdsdfs',NULL,'',NULL,NULL),(434,'ewrdsfdfdfs',NULL,'',NULL,NULL),(435,'ewewrdsffds',NULL,'',NULL,NULL),(436,'ewr324',NULL,'',NULL,NULL),(437,'ewrdfdfdsf',NULL,'',NULL,NULL),(438,'werdfsfdsfds',NULL,'',NULL,NULL);
/*!40000 ALTER TABLE `tblusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'xchat'
--

--
-- Dumping routines for database 'xchat'
--
/*!50003 DROP PROCEDURE IF EXISTS `xchat_hash_get` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `xchat_hash_get`(
in userId int
)
BEGIN
SET NAMES utf8mb4;
	select hash from tblAuthenticate where userId = `useId`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `xchat_register` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `xchat_register`(
in email varchar(200),
in username varchar(100),
in hash varchar(100),
in gender int,
in birthday datetime,
in isGuest bit)
BEGIN
declare userId int;
SET NAMES utf8mb4;
insert into tblUsers(email, username, gender, birthday, isGuest) values(email, username, gender, birthday, isGuest);
set userId = LAST_INSERT_ID();
if(isGuest=0) then
insert into tblAuthenticate(userId, hash) values(userId, hash);
end if;
select * from tblUsers where tblUsers.id = userId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `xchat_rooms_get` */;
ALTER DATABASE `xchat` CHARACTER SET utf8 COLLATE utf8_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `xchat_rooms_get`(
)
BEGIN
	select * from tblRooms;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `xchat` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
/*!50003 DROP PROCEDURE IF EXISTS `xchat_room_messages_get` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `xchat_room_messages_get`(
in roomId Integer,
in nMessages Integer)
BEGIN
SET NAMES utf8mb4;
	select tblRoomMessages.id, roomId, userId, content, username, serverAssignedNMessage from tblRoomMessages 
INNER JOIN tblUsers on tblRoomMessages.userId = tblUsers.id where roomId=`roomId` order by id limit nMessages;	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `xchat_room_message_add` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `xchat_room_message_add`(
in roomId int,
in userId int,
in content text,
in serverAssignedNMessage int)
BEGIN
SET NAMES utf8mb4;
insert into tblRoomMESSAGES (roomId, userId, content, serverAssignedNMessage) values(roomId, userId, content, serverAssignedNMessage);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `xchat_username_count` */;
ALTER DATABASE `xchat` CHARACTER SET utf8 COLLATE utf8_general_ci ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `xchat_username_count`(
in username varchar(45))
BEGIN

        select count(*) as count from tblUsers where tblUsers.username =username;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
ALTER DATABASE `xchat` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:24:37