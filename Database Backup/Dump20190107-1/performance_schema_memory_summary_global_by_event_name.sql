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
-- Table structure for table `memory_summary_global_by_event_name`
--

DROP TABLE IF EXISTS `memory_summary_global_by_event_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `memory_summary_global_by_event_name` (
  `EVENT_NAME` varchar(128) NOT NULL,
  `COUNT_ALLOC` bigint(20) unsigned NOT NULL,
  `COUNT_FREE` bigint(20) unsigned NOT NULL,
  `SUM_NUMBER_OF_BYTES_ALLOC` bigint(20) unsigned NOT NULL,
  `SUM_NUMBER_OF_BYTES_FREE` bigint(20) unsigned NOT NULL,
  `LOW_COUNT_USED` bigint(20) NOT NULL,
  `CURRENT_COUNT_USED` bigint(20) NOT NULL,
  `HIGH_COUNT_USED` bigint(20) NOT NULL,
  `LOW_NUMBER_OF_BYTES_USED` bigint(20) NOT NULL,
  `CURRENT_NUMBER_OF_BYTES_USED` bigint(20) NOT NULL,
  `HIGH_NUMBER_OF_BYTES_USED` bigint(20) NOT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memory_summary_global_by_event_name`
--

LOCK TABLES `memory_summary_global_by_event_name` WRITE;
/*!40000 ALTER TABLE `memory_summary_global_by_event_name` DISABLE KEYS */;
INSERT INTO `memory_summary_global_by_event_name` VALUES ('memory/performance_schema/mutex_instances',1,0,131072,0,0,1,1,0,131072,131072),('memory/performance_schema/rwlock_instances',1,0,131072,0,0,1,1,0,131072,131072),('memory/performance_schema/cond_instances',1,0,16384,0,0,1,1,0,16384,16384),('memory/performance_schema/file_instances',1,0,2883584,0,0,1,1,0,2883584,2883584),('memory/performance_schema/socket_instances',1,0,81920,0,0,1,1,0,81920,81920),('memory/performance_schema/metadata_locks',0,0,0,0,0,0,0,0,0,0),('memory/performance_schema/file_handle',1,0,262144,0,0,1,1,0,262144,262144),('memory/performance_schema/accounts',1,0,90112,0,0,1,1,0,90112,90112),('memory/performance_schema/events_waits_summary_by_account_by_event_name',1,0,1736704,0,0,1,1,0,1736704,1736704),('memory/performance_schema/events_stages_summary_by_account_by_event_name',1,0,614400,0,0,1,1,0,614400,614400),('memory/performance_schema/events_statements_summary_by_account_by_event_name',1,0,4545536,0,0,1,1,0,4545536,4545536),('memory/performance_schema/events_transactions_summary_by_account_by_event_name',1,0,11264,0,0,1,1,0,11264,11264),('memory/performance_schema/memory_summary_by_account_by_event_name',1,0,2949120,0,0,1,1,0,2949120,2949120),('memory/performance_schema/events_stages_summary_global_by_event_name',1,0,4800,0,0,1,1,0,4800,4800),('memory/performance_schema/events_statements_summary_global_by_event_name',1,0,35512,0,0,1,1,0,35512,35512),('memory/performance_schema/memory_summary_global_by_event_name',1,0,23040,0,0,1,1,0,23040,23040),('memory/performance_schema/hosts',1,0,73728,0,0,1,1,0,73728,73728),('memory/performance_schema/events_waits_summary_by_host_by_event_name',1,0,1736704,0,0,1,1,0,1736704,1736704),('memory/performance_schema/events_stages_summary_by_host_by_event_name',1,0,614400,0,0,1,1,0,614400,614400),('memory/performance_schema/events_statements_summary_by_host_by_event_name',1,0,4545536,0,0,1,1,0,4545536,4545536),('memory/performance_schema/events_transactions_summary_by_host_by_event_name',1,0,11264,0,0,1,1,0,11264,11264),('memory/performance_schema/memory_summary_by_host_by_event_name',1,0,2949120,0,0,1,1,0,2949120,2949120),('memory/performance_schema/threads',1,0,933888,0,0,1,1,0,933888,933888),('memory/performance_schema/events_waits_summary_by_thread_by_event_name',1,0,3473408,0,0,1,1,0,3473408,3473408),('memory/performance_schema/events_stages_summary_by_thread_by_event_name',1,0,1228800,0,0,1,1,0,1228800,1228800),('memory/performance_schema/events_statements_summary_by_thread_by_event_name',1,0,9091072,0,0,1,1,0,9091072,9091072),('memory/performance_schema/events_transactions_summary_by_thread_by_event_name',1,0,22528,0,0,1,1,0,22528,22528),('memory/performance_schema/memory_summary_by_thread_by_event_name',1,0,5898240,0,0,1,1,0,5898240,5898240),('memory/performance_schema/events_waits_history',1,0,430080,0,0,1,1,0,430080,430080),('memory/performance_schema/events_stages_history',1,0,266240,0,0,1,1,0,266240,266240),('memory/performance_schema/events_statements_history',1,0,3665920,0,0,1,1,0,3665920,3665920),('memory/performance_schema/events_statements_history.tokens',1,0,2621440,0,0,1,1,0,2621440,2621440),('memory/performance_schema/events_statements_history.sqltext',1,0,2621440,0,0,1,1,0,2621440,2621440),('memory/performance_schema/events_statements_current',1,0,3665920,0,0,1,1,0,3665920,3665920),('memory/performance_schema/events_statements_current.tokens',1,0,2621440,0,0,1,1,0,2621440,2621440),('memory/performance_schema/events_statements_current.sqltext',1,0,2621440,0,0,1,1,0,2621440,2621440),('memory/performance_schema/events_transactions_history',1,0,839680,0,0,1,1,0,839680,839680),('memory/performance_schema/session_connect_attrs',1,0,131072,0,0,1,1,0,131072,131072),('memory/performance_schema/users',1,0,81920,0,0,1,1,0,81920,81920),('memory/performance_schema/events_waits_summary_by_user_by_event_name',1,0,1736704,0,0,1,1,0,1736704,1736704),('memory/performance_schema/events_stages_summary_by_user_by_event_name',1,0,614400,0,0,1,1,0,614400,614400),('memory/performance_schema/events_statements_summary_by_user_by_event_name',1,0,4545536,0,0,1,1,0,4545536,4545536),('memory/performance_schema/events_transactions_summary_by_user_by_event_name',1,0,11264,0,0,1,1,0,11264,11264),('memory/performance_schema/memory_summary_by_user_by_event_name',1,0,2949120,0,0,1,1,0,2949120,2949120),('memory/performance_schema/mutex_class',1,0,53760,0,0,1,1,0,53760,53760),('memory/performance_schema/rwlock_class',1,0,10240,0,0,1,1,0,10240,10240),('memory/performance_schema/cond_class',1,0,20480,0,0,1,1,0,20480,20480),('memory/performance_schema/thread_class',1,0,9600,0,0,1,1,0,9600,9600),('memory/performance_schema/file_class',1,0,25600,0,0,1,1,0,25600,25600),('memory/performance_schema/socket_class',1,0,3200,0,0,1,1,0,3200,3200),('memory/performance_schema/stage_class',1,0,38400,0,0,1,1,0,38400,38400),('memory/performance_schema/statement_class',1,0,37056,0,0,1,1,0,37056,37056),('memory/performance_schema/memory_class',1,0,61440,0,0,1,1,0,61440,61440),('memory/performance_schema/setup_actors',1,0,40960,0,0,1,1,0,40960,40960),('memory/performance_schema/setup_objects',1,0,57344,0,0,1,1,0,57344,57344),('memory/performance_schema/events_statements_summary_by_digest',1,0,5120000,0,0,1,1,0,5120000,5120000),('memory/performance_schema/events_statements_summary_by_digest.tokens',1,0,10240000,0,0,1,1,0,10240000,10240000),('memory/performance_schema/events_stages_history_long',1,0,1040000,0,0,1,1,0,1040000,1040000),('memory/performance_schema/events_statements_history_long',1,0,14320000,0,0,1,1,0,14320000,14320000),('memory/performance_schema/events_statements_history_long.tokens',1,0,10240000,0,0,1,1,0,10240000,10240000),('memory/performance_schema/events_statements_history_long.sqltext',1,0,10240000,0,0,1,1,0,10240000,10240000),('memory/performance_schema/events_transactions_history_long',1,0,3280000,0,0,1,1,0,3280000,3280000),('memory/performance_schema/events_waits_history_long',1,0,1680000,0,0,1,1,0,1680000,1680000),('memory/performance_schema/table_handles',1,0,9502720,0,0,1,1,0,9502720,9502720),('memory/performance_schema/table_shares',1,0,4194304,0,0,1,1,0,4194304,4194304),('memory/performance_schema/table_io_waits_summary_by_index_usage',1,0,2883584,0,0,1,1,0,2883584,2883584),('memory/performance_schema/table_lock_waits_summary_by_table',1,0,1409024,0,0,1,1,0,1409024,1409024),('memory/performance_schema/events_statements_summary_by_program',1,0,458752,0,0,1,1,0,458752,458752),('memory/performance_schema/prepared_statements_instances',0,0,0,0,0,0,0,0,0,0),('memory/performance_schema/scalable_buffer',16,0,1776,0,0,16,16,0,1776,1776),('memory/sql/Locked_tables_list::m_locked_tables_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/display_table_locks',0,0,0,0,0,0,0,0,0,0),('memory/sql/THD::transactions::mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/Delegate::memroot',0,0,0,0,0,0,0,0,0,0),('memory/sql/sql_acl_mem',0,0,0,0,0,0,0,0,0,0),('memory/sql/sql_acl_memex',0,0,0,0,0,0,0,0,0,0),('memory/sql/acl_cache',0,0,0,0,0,0,0,0,0,0),('memory/sql/thd::main_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/help',0,0,0,0,0,0,0,0,0,0),('memory/sql/new_frm_mem',0,0,0,0,0,0,0,0,0,0),('memory/sql/TABLE_SHARE::mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/gdl',0,0,0,0,0,0,0,0,0,0),('memory/sql/Table_triggers_list',0,0,0,0,0,0,0,0,0,0),('memory/sql/servers',0,0,0,0,0,0,0,0,0,0),('memory/sql/Prepared_statement_map',0,0,0,0,0,0,0,0,0,0),('memory/sql/Prepared_statement::main_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/Protocol_local::m_rset_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/Warning_info::m_warn_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/THD::sp_cache',0,0,0,0,0,0,0,0,0,0),('memory/sql/sp_head::main_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/sp_head::execute_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/sp_head::call_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/table_mapping::m_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/QUICK_RANGE_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('memory/sql/QUICK_INDEX_MERGE_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('memory/sql/QUICK_ROR_INTERSECT_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('memory/sql/QUICK_ROR_UNION_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('memory/sql/QUICK_GROUP_MIN_MAX_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('memory/sql/test_quick_select',0,0,0,0,0,0,0,0,0,0),('memory/sql/prune_partitions::exec',0,0,0,0,0,0,0,0,0,0),('memory/sql/MYSQL_BIN_LOG::recover',0,0,0,0,0,0,0,0,0,0),('memory/sql/Blob_mem_storage::storage',0,0,0,0,0,0,0,0,0,0),('memory/sql/NAMED_ILINK::name',0,0,0,0,0,0,0,0,0,0),('memory/sql/String::value',0,0,0,0,0,0,0,0,0,0),('memory/sql/Sys_var_charptr::value',0,0,0,0,0,0,0,0,0,0),('memory/sql/Queue::queue_item',0,0,0,0,0,0,0,0,0,0),('memory/sql/THD::db',0,0,0,0,0,0,0,0,0,0),('memory/sql/user_var_entry',0,0,0,0,0,0,0,0,0,0),('memory/sql/Slave_job_group::group_relay_log_name',0,0,0,0,0,0,0,0,0,0),('memory/sql/Relay_log_info::group_relay_log_name',0,0,0,0,0,0,0,0,0,0),('memory/sql/binlog_cache_mngr',0,0,0,0,0,0,0,0,0,0),('memory/sql/Row_data_memory::memory',0,0,0,0,0,0,0,0,0,0),('memory/sql/Gtid_set::to_string',0,0,0,0,0,0,0,0,0,0),('memory/sql/Gtid_state::to_string',0,0,0,0,0,0,0,0,0,0),('memory/sql/Owned_gtids::to_string',0,0,0,0,0,0,0,0,0,0),('memory/sql/Log_event',0,0,0,0,0,0,0,0,0,0),('memory/sql/Incident_log_event::message',0,0,0,0,0,0,0,0,0,0),('memory/sql/Rows_query_log_event::rows_query',0,0,0,0,0,0,0,0,0,0),('memory/sql/Sort_param::tmp_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/Filesort_info::merge',0,0,0,0,0,0,0,0,0,0),('memory/sql/Filesort_info::record_pointers',0,0,0,0,0,0,0,0,0,0),('memory/sql/Filesort_buffer::sort_keys',0,0,0,0,0,0,0,0,0,0),('memory/sql/handler::errmsgs',0,0,0,0,0,0,0,0,0,0),('memory/sql/handlerton',0,0,0,0,0,0,0,0,0,0),('memory/sql/XID',0,0,0,0,0,0,0,0,0,0),('memory/sql/host_cache::hostname',0,0,0,0,0,0,0,0,0,0),('memory/sql/user_var_entry::value',0,0,0,0,0,0,0,0,0,0),('memory/sql/User_level_lock',0,0,0,0,0,0,0,0,0,0),('memory/sql/MYSQL_LOG::name',0,0,0,0,0,0,0,0,0,0),('memory/sql/TC_LOG_MMAP::pages',0,0,0,0,0,0,0,0,0,0),('memory/sql/my_bitmap_map',0,0,0,0,0,0,0,0,0,0),('memory/sql/QUICK_RANGE_SELECT::mrr_buf_desc',0,0,0,0,0,0,0,0,0,0),('memory/sql/Event_queue_element_for_exec::names',0,0,0,0,0,0,0,0,0,0),('memory/sql/my_str_malloc',0,0,0,0,0,0,0,0,0,0),('memory/sql/MYSQL_BIN_LOG::basename',0,0,0,0,0,0,0,0,0,0),('memory/sql/MYSQL_BIN_LOG::index',0,0,0,0,0,0,0,0,0,0),('memory/sql/MYSQL_RELAY_LOG::basename',0,0,0,0,0,0,0,0,0,0),('memory/sql/MYSQL_RELAY_LOG::index',0,0,0,0,0,0,0,0,0,0),('memory/sql/rpl_filter memory',0,0,0,0,0,0,0,0,0,0),('memory/sql/errmsgs',0,0,0,0,0,0,0,0,0,0),('memory/sql/Gis_read_stream::err_msg',0,0,0,0,0,0,0,0,0,0),('memory/sql/Geometry::ptr_and_wkb_data',0,0,0,0,0,0,0,0,0,0),('memory/sql/MYSQL_LOCK',0,0,0,0,0,0,0,0,0,0),('memory/sql/NET::buff',0,0,0,0,0,0,0,0,0,0),('memory/sql/NET::compress_packet',0,0,0,0,0,0,0,0,0,0),('memory/sql/Event_scheduler::scheduler_param',0,0,0,0,0,0,0,0,0,0),('memory/sql/Gtid_set::Interval_chunk',0,0,0,0,0,0,0,0,0,0),('memory/sql/Owned_gtids::sidno_to_hash',0,0,0,0,0,0,0,0,0,0),('memory/sql/Sid_map::Node',0,0,0,0,0,0,0,0,0,0),('memory/sql/Gtid_state::group_commit_sidno_locks',0,0,0,0,0,0,0,0,0,0),('memory/sql/Mutex_cond_array::Mutex_cond',0,0,0,0,0,0,0,0,0,0),('memory/sql/TABLE_RULE_ENT',0,0,0,0,0,0,0,0,0,0),('memory/sql/Rpl_info_table',0,0,0,0,0,0,0,0,0,0),('memory/sql/Rpl_info_file::buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/db_worker_hash_entry',0,0,0,0,0,0,0,0,0,0),('memory/sql/rpl_slave::check_temp_dir',0,0,0,0,0,0,0,0,0,0),('memory/sql/rpl_slave::command_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/binlog_ver_1_event',0,0,0,0,0,0,0,0,0,0),('memory/sql/SLAVE_INFO',0,0,0,0,0,0,0,0,0,0),('memory/sql/binlog_pos',0,0,0,0,0,0,0,0,0,0),('memory/sql/HASH_ROW_ENTRY',0,0,0,0,0,0,0,0,0,0),('memory/sql/binlog_statement_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/partition_syntax_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/READ_INFO',0,0,0,0,0,0,0,0,0,0),('memory/sql/JOIN_CACHE',0,0,0,0,0,0,0,0,0,0),('memory/sql/TABLE::sort_io_cache',0,0,0,0,0,0,0,0,0,0),('memory/sql/frm',0,0,0,0,0,0,0,0,0,0),('memory/sql/Unique::sort_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/Unique::merge_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/TABLE',0,0,0,0,0,0,0,0,0,0),('memory/sql/frm::extra_segment_buff',0,0,0,0,0,0,0,0,0,0),('memory/sql/frm::form_pos',0,0,0,0,0,0,0,0,0,0),('memory/sql/frm::string',0,0,0,0,0,0,0,0,0,0),('memory/sql/LOG_name',0,0,0,0,0,0,0,0,0,0),('memory/sql/DATE_TIME_FORMAT',0,0,0,0,0,0,0,0,0,0),('memory/sql/DDL_LOG_MEMORY_ENTRY',0,0,0,0,0,0,0,0,0,0),('memory/sql/ST_SCHEMA_TABLE',0,0,0,0,0,0,0,0,0,0),('memory/sql/ignored_db',0,0,0,0,0,0,0,0,0,0),('memory/sql/PROFILE',0,0,0,0,0,0,0,0,0,0),('memory/sql/global_system_variables',0,0,0,0,0,0,0,0,0,0),('memory/sql/THD::variables',0,0,0,0,0,0,0,0,0,0),('memory/sql/Security_context',0,0,0,0,0,0,0,0,0,0),('memory/sql/Shared_memory_name',0,0,0,0,0,0,0,0,0,0),('memory/sql/bison_stack',0,0,0,0,0,0,0,0,0,0),('memory/sql/THD::handler_tables_hash',0,0,0,0,0,0,0,0,0,0),('memory/sql/hash_index_key_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/dboptions_hash',0,0,0,0,0,0,0,0,0,0),('memory/sql/user_conn',0,0,0,0,0,0,0,0,0,0),('memory/sql/LOG_POS_COORD',0,0,0,0,0,0,0,0,0,0),('memory/sql/XID_STATE',0,0,0,0,0,0,0,0,0,0),('memory/sql/MPVIO_EXT::auth_info',0,0,0,0,0,0,0,0,0,0),('memory/sql/opt_bin_logname',0,0,0,0,0,0,0,0,0,0),('memory/sql/Query_cache',0,0,0,0,0,0,0,0,0,0),('memory/sql/READ_RECORD_cache',0,0,0,0,0,0,0,0,0,0),('memory/sql/Quick_ranges',0,0,0,0,0,0,0,0,0,0),('memory/sql/File_query_log::name',0,0,0,0,0,0,0,0,0,0),('memory/sql/Table_trigger_dispatcher::m_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/thd_timer',0,0,0,0,0,0,0,0,0,0),('memory/sql/THD::Session_tracker',0,0,0,0,0,0,0,0,0,0),('memory/sql/THD::Session_sysvar_resource_manager',0,0,0,0,0,0,0,0,0,0),('memory/sql/show_slave_status_io_gtid_set',0,0,0,0,0,0,0,0,0,0),('memory/sql/write_set_extraction',0,0,0,0,0,0,0,0,0,0),('memory/sql/get_all_tables',0,0,0,0,0,0,0,0,0,0),('memory/sql/fill_schema_schemata',0,0,0,0,0,0,0,0,0,0),('memory/sql/native_functions',0,0,0,0,0,0,0,0,0,0),('memory/sql/JSON',0,0,0,0,0,0,0,0,0,0),('memory/client/create_shared_memory',0,0,0,0,0,0,0,0,0,0),('memory/client/mysql_options',0,0,0,0,0,0,0,0,0,0),('memory/client/MYSQL_DATA',0,0,0,0,0,0,0,0,0,0),('memory/client/MYSQL',0,0,0,0,0,0,0,0,0,0),('memory/client/MYSQL_RES',0,0,0,0,0,0,0,0,0,0),('memory/client/MYSQL_ROW',0,0,0,0,0,0,0,0,0,0),('memory/client/MYSQL_STATE_CHANGE_INFO',0,0,0,0,0,0,0,0,0,0),('memory/client/MYSQL_HANDSHAKE',0,0,0,0,0,0,0,0,0,0),('memory/vio/ssl_fd',0,0,0,0,0,0,0,0,0,0),('memory/vio/vio',0,0,0,0,0,0,0,0,0,0),('memory/vio/read_buffer',0,0,0,0,0,0,0,0,0,0),('memory/mysys/win_SECURITY_ATTRIBUTES',0,0,0,0,0,0,0,0,0,0),('memory/mysys/win_PACL',0,0,0,0,0,0,0,0,0,0),('memory/mysys/win_IP_ADAPTER_ADDRESSES',0,0,0,0,0,0,0,0,0,0),('memory/mysys/max_alloca',0,0,0,0,0,0,0,0,0,0),('memory/mysys/charset_file',0,0,0,0,0,0,0,0,0,0),('memory/mysys/charset_loader',0,0,0,0,0,0,0,0,0,0),('memory/mysys/lf_node',0,0,0,0,0,0,0,0,0,0),('memory/mysys/lf_dynarray',0,0,0,0,0,0,0,0,0,0),('memory/mysys/lf_slist',0,0,0,0,0,0,0,0,0,0),('memory/mysys/LIST',0,0,0,0,0,0,0,0,0,0),('memory/mysys/IO_CACHE',0,0,0,0,0,0,0,0,0,0),('memory/mysys/KEY_CACHE',0,0,0,0,0,0,0,0,0,0),('memory/mysys/SAFE_HASH_ENTRY',0,0,0,0,0,0,0,0,0,0),('memory/mysys/MY_TMPDIR::full_list',0,0,0,0,0,0,0,0,0,0),('memory/mysys/MY_BITMAP::bitmap',0,0,0,0,0,0,0,0,0,0),('memory/mysys/my_compress_alloc',0,0,0,0,0,0,0,0,0,0),('memory/mysys/pack_frm',0,0,0,0,0,0,0,0,0,0),('memory/mysys/my_err_head',0,0,0,0,0,0,0,0,0,0),('memory/mysys/my_file_info',0,0,0,0,0,0,0,0,0,0),('memory/mysys/MY_DIR',0,0,0,0,0,0,0,0,0,0),('memory/mysys/MY_STAT',0,0,0,0,0,0,0,0,0,0),('memory/mysys/QUEUE',0,0,0,0,0,0,0,0,0,0),('memory/mysys/DYNAMIC_STRING',0,0,0,0,0,0,0,0,0,0),('memory/mysys/TREE',0,0,0,0,0,0,0,0,0,0),('memory/sql/Event_basic::mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/root',0,0,0,0,0,0,0,0,0,0),('memory/sql/load_env_plugins',0,0,0,0,0,0,0,0,0,0),('memory/sql/MDL_context::acquire_locks',0,0,0,0,0,0,0,0,0,0),('memory/sql/Partition_share',0,0,0,0,0,0,0,0,0,0),('memory/sql/partition_sort_buffer',0,0,0,0,0,0,0,0,0,0),('memory/sql/Partition_admin',0,0,0,0,0,0,0,0,0,0),('memory/sql/plugin_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/plugin_init_tmp',0,0,0,0,0,0,0,0,0,0),('memory/sql/plugin_int_mem_root',0,0,0,0,0,0,0,0,0,0),('memory/sql/mysql_plugin_dl',0,0,0,0,0,0,0,0,0,0),('memory/sql/mysql_plugin',0,0,0,0,0,0,0,0,0,0),('memory/sql/plugin_bookmark',0,0,0,0,0,0,0,0,0,0),('memory/csv/TINA_SHARE',0,0,0,0,0,0,0,0,0,0),('memory/csv/blobroot',0,0,0,0,0,0,0,0,0,0),('memory/csv/tina_set',0,0,0,0,0,0,0,0,0,0),('memory/csv/row',0,0,0,0,0,0,0,0,0,0),('memory/csv/Transparent_file',0,0,0,0,0,0,0,0,0,0),('memory/innodb/adaptive hash index',0,0,0,0,0,0,0,0,0,0),('memory/innodb/buf_buf_pool',0,0,0,0,0,0,0,0,0,0),('memory/innodb/dict_stats_bg_recalc_pool_t',0,0,0,0,0,0,0,0,0,0),('memory/innodb/dict_stats_index_map_t',0,0,0,0,0,0,0,0,0,0),('memory/innodb/dict_stats_n_diff_on_level',0,0,0,0,0,0,0,0,0,0),('memory/innodb/other',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row_log_buf',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row_merge_sort',0,0,0,0,0,0,0,0,0,0),('memory/innodb/std',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx_sys_t::rw_trx_ids',0,0,0,0,0,0,0,0,0,0),('memory/innodb/partitioning',0,0,0,0,0,0,0,0,0,0),('memory/innodb/api0api',0,0,0,0,0,0,0,0,0,0),('memory/innodb/btr0btr',0,0,0,0,0,0,0,0,0,0),('memory/innodb/btr0bulk',0,0,0,0,0,0,0,0,0,0),('memory/innodb/btr0cur',0,0,0,0,0,0,0,0,0,0),('memory/innodb/btr0pcur',0,0,0,0,0,0,0,0,0,0),('memory/innodb/btr0sea',0,0,0,0,0,0,0,0,0,0),('memory/innodb/buf0buf',0,0,0,0,0,0,0,0,0,0),('memory/innodb/buf0dblwr',0,0,0,0,0,0,0,0,0,0),('memory/innodb/buf0dump',0,0,0,0,0,0,0,0,0,0),('memory/innodb/buf0flu',0,0,0,0,0,0,0,0,0,0),('memory/innodb/buf0lru',0,0,0,0,0,0,0,0,0,0),('memory/innodb/dict0dict',0,0,0,0,0,0,0,0,0,0),('memory/innodb/dict0mem',0,0,0,0,0,0,0,0,0,0),('memory/innodb/dict0stats',0,0,0,0,0,0,0,0,0,0),('memory/innodb/dict0stats_bg',0,0,0,0,0,0,0,0,0,0),('memory/innodb/eval0eval',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fil0fil',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fsp0file',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fsp0space',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fsp0sysspace',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fts0ast',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fts0config',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fts0fts',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fts0opt',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fts0pars',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fts0que',0,0,0,0,0,0,0,0,0,0),('memory/innodb/fts0sql',0,0,0,0,0,0,0,0,0,0),('memory/innodb/gis0sea',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ha0ha',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ha_innodb',0,0,0,0,0,0,0,0,0,0),('memory/innodb/handler0alter',0,0,0,0,0,0,0,0,0,0),('memory/innodb/hash0hash',0,0,0,0,0,0,0,0,0,0),('memory/innodb/i_s',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ibuf0ibuf',0,0,0,0,0,0,0,0,0,0),('memory/innodb/lexyy',0,0,0,0,0,0,0,0,0,0),('memory/innodb/lock0lock',0,0,0,0,0,0,0,0,0,0),('memory/innodb/log0log',0,0,0,0,0,0,0,0,0,0),('memory/innodb/log0recv',0,0,0,0,0,0,0,0,0,0),('memory/innodb/mem0mem',0,0,0,0,0,0,0,0,0,0),('memory/innodb/os0event',0,0,0,0,0,0,0,0,0,0),('memory/innodb/os0file',0,0,0,0,0,0,0,0,0,0),('memory/innodb/page0cur',0,0,0,0,0,0,0,0,0,0),('memory/innodb/page0zip',0,0,0,0,0,0,0,0,0,0),('memory/innodb/pars0lex',0,0,0,0,0,0,0,0,0,0),('memory/innodb/read0read',0,0,0,0,0,0,0,0,0,0),('memory/innodb/rem0rec',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row0ftsort',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row0import',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row0log',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row0merge',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row0mysql',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row0sel',0,0,0,0,0,0,0,0,0,0),('memory/innodb/row0trunc',0,0,0,0,0,0,0,0,0,0),('memory/innodb/srv0conc',0,0,0,0,0,0,0,0,0,0),('memory/innodb/srv0srv',0,0,0,0,0,0,0,0,0,0),('memory/innodb/srv0start',0,0,0,0,0,0,0,0,0,0),('memory/innodb/sync0arr',0,0,0,0,0,0,0,0,0,0),('memory/innodb/sync0debug',0,0,0,0,0,0,0,0,0,0),('memory/innodb/sync0rw',0,0,0,0,0,0,0,0,0,0),('memory/innodb/sync0types',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx0i_s',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx0purge',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx0roll',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx0rseg',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx0sys',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx0trx',0,0,0,0,0,0,0,0,0,0),('memory/innodb/trx0undo',0,0,0,0,0,0,0,0,0,0),('memory/innodb/usr0sess',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ut0list',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ut0mem',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ut0mutex',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ut0pool',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ut0rbt',0,0,0,0,0,0,0,0,0,0),('memory/innodb/ut0wqueue',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MYISAM_SHARE',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MI_INFO',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MI_INFO::ft1_to_ft2',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MI_INFO::bulk_insert',0,0,0,0,0,0,0,0,0,0),('memory/myisam/record_buffer',0,0,0,0,0,0,0,0,0,0),('memory/myisam/FTB',0,0,0,0,0,0,0,0,0,0),('memory/myisam/FT_INFO',0,0,0,0,0,0,0,0,0,0),('memory/myisam/FTPARSER_PARAM',0,0,0,0,0,0,0,0,0,0),('memory/myisam/ft_memroot',0,0,0,0,0,0,0,0,0,0),('memory/myisam/ft_stopwords',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MI_SORT_PARAM',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MI_SORT_PARAM::wordroot',0,0,0,0,0,0,0,0,0,0),('memory/myisam/SORT_FT_BUF',0,0,0,0,0,0,0,0,0,0),('memory/myisam/SORT_KEY_BLOCKS',0,0,0,0,0,0,0,0,0,0),('memory/myisam/filecopy',0,0,0,0,0,0,0,0,0,0),('memory/myisam/SORT_INFO::buffer',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MI_DECODE_TREE',0,0,0,0,0,0,0,0,0,0),('memory/myisam/MYISAM_SHARE::decode_tables',0,0,0,0,0,0,0,0,0,0),('memory/myisam/preload_buffer',0,0,0,0,0,0,0,0,0,0),('memory/myisam/stPageList::pages',0,0,0,0,0,0,0,0,0,0),('memory/myisam/keycache_thread_var',0,0,0,0,0,0,0,0,0,0),('memory/memory/HP_SHARE',0,0,0,0,0,0,0,0,0,0),('memory/memory/HP_INFO',0,0,0,0,0,0,0,0,0,0),('memory/memory/HP_PTRS',0,0,0,0,0,0,0,0,0,0),('memory/memory/HP_KEYDEF',0,0,0,0,0,0,0,0,0,0),('memory/myisammrg/MYRG_INFO',0,0,0,0,0,0,0,0,0,0),('memory/myisammrg/children',0,0,0,0,0,0,0,0,0,0),('memory/archive/FRM',0,0,0,0,0,0,0,0,0,0),('memory/archive/record_buffer',0,0,0,0,0,0,0,0,0,0),('memory/blackhole/blackhole_share',0,0,0,0,0,0,0,0,0,0),('memory/partition/ha_partition::file',0,0,0,0,0,0,0,0,0,0),('memory/partition/ha_partition::engine_array',0,0,0,0,0,0,0,0,0,0),('memory/partition/ha_partition::part_ids',0,0,0,0,0,0,0,0,0,0),('memory/sql/tz_storage',0,0,0,0,0,0,0,0,0,0),('memory/sql/servers_cache',0,0,0,0,0,0,0,0,0,0),('memory/sql/udf_mem',0,0,0,0,0,0,0,0,0,0),('memory/sql/Relay_log_info::mts_coor',0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `memory_summary_global_by_event_name` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:42