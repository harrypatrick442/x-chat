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
-- Table structure for table `global_status`
--

DROP TABLE IF EXISTS `global_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `global_status` (
  `VARIABLE_NAME` varchar(64) NOT NULL,
  `VARIABLE_VALUE` varchar(1024) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_status`
--

LOCK TABLES `global_status` WRITE;
/*!40000 ALTER TABLE `global_status` DISABLE KEYS */;
INSERT INTO `global_status` VALUES ('Aborted_clients','4'),('Aborted_connects','8'),('Binlog_cache_disk_use','0'),('Binlog_cache_use','0'),('Binlog_stmt_cache_disk_use','0'),('Binlog_stmt_cache_use','0'),('Bytes_received','649890'),('Bytes_sent','13716398'),('Com_stmt_reprepare','0'),('Connection_errors_accept','0'),('Connection_errors_internal','0'),('Connection_errors_max_connections','0'),('Connection_errors_peer_address','0'),('Connection_errors_select','0'),('Connection_errors_tcpwrap','0'),('Connections','336'),('Created_tmp_disk_tables','1330'),('Created_tmp_files','5'),('Created_tmp_tables','4288'),('Delayed_errors','0'),('Delayed_insert_threads','0'),('Delayed_writes','0'),('Flush_commands','1'),('Handler_commit','266'),('Handler_delete','4'),('Handler_discover','0'),('Handler_external_lock','2931'),('Handler_mrr_init','0'),('Handler_prepare','0'),('Handler_read_first','840'),('Handler_read_key','1166'),('Handler_read_last','0'),('Handler_read_next','5026'),('Handler_read_prev','0'),('Handler_read_rnd','0'),('Handler_read_rnd_next','850274'),('Handler_rollback','0'),('Handler_savepoint','0'),('Handler_savepoint_rollback','0'),('Handler_update','0'),('Handler_write','379741'),('Innodb_buffer_pool_dump_status','Dumping of buffer pool not started'),('Innodb_buffer_pool_load_status','Buffer pool(s) load completed at 190107 21:07:39'),('Innodb_buffer_pool_resize_status',''),('Innodb_buffer_pool_pages_data','256'),('Innodb_buffer_pool_bytes_data','4194304'),('Innodb_buffer_pool_pages_dirty','18'),('Innodb_buffer_pool_bytes_dirty','294912'),('Innodb_buffer_pool_pages_flushed','74'),('Innodb_buffer_pool_pages_free','255'),('Innodb_buffer_pool_pages_misc','1'),('Innodb_buffer_pool_pages_total','512'),('Innodb_buffer_pool_read_ahead_rnd','0'),('Innodb_buffer_pool_read_ahead','0'),('Innodb_buffer_pool_read_ahead_evicted','0'),('Innodb_buffer_pool_read_requests','49814'),('Innodb_buffer_pool_reads','534'),('Innodb_buffer_pool_wait_free','0'),('Innodb_buffer_pool_write_requests','27963'),('Innodb_data_fsyncs','66'),('Innodb_data_pending_fsyncs','0'),('Innodb_data_pending_reads','0'),('Innodb_data_pending_writes','0'),('Innodb_data_read','8819200'),('Innodb_data_reads','586'),('Innodb_data_writes','137'),('Innodb_data_written','1505792'),('Innodb_dblwr_pages_written','16'),('Innodb_dblwr_writes','8'),('Innodb_log_waits','0'),('Innodb_log_write_requests','3'),('Innodb_log_writes','29'),('Innodb_os_log_fsyncs','43'),('Innodb_os_log_pending_fsyncs','0'),('Innodb_os_log_pending_writes','0'),('Innodb_os_log_written','24064'),('Innodb_page_size','16384'),('Innodb_pages_created','50'),('Innodb_pages_read','533'),('Innodb_pages_written','74'),('Innodb_row_lock_current_waits','0'),('Innodb_row_lock_time','0'),('Innodb_row_lock_time_avg','0'),('Innodb_row_lock_time_max','0'),('Innodb_row_lock_waits','0'),('Innodb_rows_deleted','0'),('Innodb_rows_inserted','5107'),('Innodb_rows_read','58491'),('Innodb_rows_updated','0'),('Innodb_num_open_files','44'),('Innodb_truncated_status_writes','0'),('Innodb_available_undo_logs','128'),('Key_blocks_not_flushed','0'),('Key_blocks_unused','6693'),('Key_blocks_used','5'),('Key_read_requests','150'),('Key_reads','5'),('Key_write_requests','16'),('Key_writes','16'),('Locked_connects','0'),('Max_execution_time_exceeded','0'),('Max_execution_time_set','0'),('Max_execution_time_set_failed','0'),('Max_used_connections','9'),('Max_used_connections_time','2019-01-07 21:18:52'),('Not_flushed_delayed_rows','0'),('Ongoing_anonymous_transaction_count','0'),('Open_files','92'),('Open_streams','0'),('Open_table_definitions','198'),('Open_tables','618'),('Opened_files','754'),('Opened_table_definitions','218'),('Opened_tables','712'),('Performance_schema_accounts_lost','0'),('Performance_schema_cond_classes_lost','0'),('Performance_schema_cond_instances_lost','0'),('Performance_schema_digest_lost','0'),('Performance_schema_file_classes_lost','0'),('Performance_schema_file_handles_lost','0'),('Performance_schema_file_instances_lost','10'),('Performance_schema_hosts_lost','0'),('Performance_schema_index_stat_lost','0'),('Performance_schema_locker_lost','0'),('Performance_schema_memory_classes_lost','0'),('Performance_schema_metadata_lock_lost','0'),('Performance_schema_mutex_classes_lost','0'),('Performance_schema_mutex_instances_lost','0'),('Performance_schema_nested_statement_lost','0'),('Performance_schema_prepared_statements_lost','0'),('Performance_schema_program_lost','0'),('Performance_schema_rwlock_classes_lost','0'),('Performance_schema_rwlock_instances_lost','0'),('Performance_schema_session_connect_attrs_lost','0'),('Performance_schema_socket_classes_lost','0'),('Performance_schema_socket_instances_lost','0'),('Performance_schema_stage_classes_lost','0'),('Performance_schema_statement_classes_lost','0'),('Performance_schema_table_handles_lost','0'),('Performance_schema_table_instances_lost','0'),('Performance_schema_table_lock_stat_lost','0'),('Performance_schema_thread_classes_lost','0'),('Performance_schema_thread_instances_lost','0'),('Performance_schema_users_lost','0'),('Prepared_stmt_count','0'),('Qcache_free_blocks','1'),('Qcache_free_memory','1031872'),('Qcache_hits','0'),('Qcache_inserts','0'),('Qcache_lowmem_prunes','0'),('Qcache_not_cached','1025'),('Qcache_queries_in_cache','0'),('Qcache_total_blocks','1'),('Queries','7652'),('Questions','7537'),('Select_full_join','942'),('Select_full_range_join','0'),('Select_range','0'),('Select_range_check','0'),('Select_scan','3620'),('Slave_open_temp_tables','0'),('Slow_launch_threads','0'),('Slow_queries','0'),('Sort_merge_passes','0'),('Sort_range','0'),('Sort_rows','0'),('Sort_scan','628'),('Ssl_accept_renegotiates','0'),('Ssl_accepts','0'),('Ssl_callback_cache_hits','0'),('Ssl_cipher',''),('Ssl_cipher_list',''),('Ssl_client_connects','0'),('Ssl_connect_renegotiates','0'),('Ssl_ctx_verify_depth','0'),('Ssl_ctx_verify_mode','0'),('Ssl_default_timeout','0'),('Ssl_finished_accepts','0'),('Ssl_finished_connects','0'),('Ssl_server_not_after',''),('Ssl_server_not_before',''),('Ssl_session_cache_hits','0'),('Ssl_session_cache_misses','0'),('Ssl_session_cache_mode','NONE'),('Ssl_session_cache_overflows','0'),('Ssl_session_cache_size','0'),('Ssl_session_cache_timeouts','0'),('Ssl_sessions_reused','0'),('Ssl_used_session_cache_entries','0'),('Ssl_verify_depth','0'),('Ssl_verify_mode','0'),('Ssl_version',''),('Table_locks_immediate','1058'),('Table_locks_waited','0'),('Table_open_cache_hits','2721'),('Table_open_cache_misses','712'),('Table_open_cache_overflows','72'),('Tc_log_max_pages_used','0'),('Tc_log_page_size','0'),('Tc_log_page_waits','0'),('Threads_cached','0'),('Threads_connected','9'),('Threads_created','9'),('Threads_running','1'),('Uptime','958'),('Uptime_since_flush_status','958');
/*!40000 ALTER TABLE `global_status` ENABLE KEYS */;
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
