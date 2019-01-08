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
-- Table structure for table `memory_summary_by_host_by_event_name`
--

DROP TABLE IF EXISTS `memory_summary_by_host_by_event_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `memory_summary_by_host_by_event_name` (
  `HOST` char(60) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
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
-- Dumping data for table `memory_summary_by_host_by_event_name`
--

LOCK TABLES `memory_summary_by_host_by_event_name` WRITE;
/*!40000 ALTER TABLE `memory_summary_by_host_by_event_name` DISABLE KEYS */;
INSERT INTO `memory_summary_by_host_by_event_name` VALUES (NULL,'memory/sql/Locked_tables_list::m_locked_tables_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/display_table_locks',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/THD::transactions::mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Delegate::memroot',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/thd::main_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/help',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/new_frm_mem',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/gdl',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Table_triggers_list',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/servers',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Prepared_statement_map',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Prepared_statement::main_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Protocol_local::m_rset_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Warning_info::m_warn_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/THD::sp_cache',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/sp_head::main_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/sp_head::execute_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/sp_head::call_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/table_mapping::m_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/QUICK_RANGE_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/QUICK_INDEX_MERGE_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/QUICK_ROR_INTERSECT_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/QUICK_ROR_UNION_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/QUICK_GROUP_MIN_MAX_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/test_quick_select',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/prune_partitions::exec',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MYSQL_BIN_LOG::recover',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Blob_mem_storage::storage',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/NAMED_ILINK::name',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/String::value',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Sys_var_charptr::value',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Queue::queue_item',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/THD::db',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/user_var_entry',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Slave_job_group::group_relay_log_name',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Relay_log_info::group_relay_log_name',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/binlog_cache_mngr',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Row_data_memory::memory',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Gtid_set::to_string',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Gtid_state::to_string',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Owned_gtids::to_string',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Log_event',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Incident_log_event::message',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Rows_query_log_event::rows_query',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Sort_param::tmp_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Filesort_info::merge',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Filesort_info::record_pointers',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Filesort_buffer::sort_keys',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/handler::errmsgs',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/handlerton',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/XID',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/host_cache::hostname',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/user_var_entry::value',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/User_level_lock',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MYSQL_LOG::name',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/TC_LOG_MMAP::pages',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/my_bitmap_map',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/QUICK_RANGE_SELECT::mrr_buf_desc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Event_queue_element_for_exec::names',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/my_str_malloc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MYSQL_BIN_LOG::basename',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MYSQL_BIN_LOG::index',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MYSQL_RELAY_LOG::basename',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MYSQL_RELAY_LOG::index',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/rpl_filter memory',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/errmsgs',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Gis_read_stream::err_msg',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Geometry::ptr_and_wkb_data',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MYSQL_LOCK',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/NET::buff',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/NET::compress_packet',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Event_scheduler::scheduler_param',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Gtid_set::Interval_chunk',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Owned_gtids::sidno_to_hash',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Sid_map::Node',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Gtid_state::group_commit_sidno_locks',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Mutex_cond_array::Mutex_cond',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/TABLE_RULE_ENT',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Rpl_info_table',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Rpl_info_file::buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/db_worker_hash_entry',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/rpl_slave::check_temp_dir',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/rpl_slave::command_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/binlog_ver_1_event',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/SLAVE_INFO',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/binlog_pos',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/HASH_ROW_ENTRY',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/binlog_statement_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/partition_syntax_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/READ_INFO',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/JOIN_CACHE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/TABLE::sort_io_cache',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/frm',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Unique::sort_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Unique::merge_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/frm::extra_segment_buff',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/frm::form_pos',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/frm::string',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/LOG_name',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/DATE_TIME_FORMAT',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/DDL_LOG_MEMORY_ENTRY',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/ST_SCHEMA_TABLE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/ignored_db',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/PROFILE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/global_system_variables',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/THD::variables',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Security_context',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Shared_memory_name',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/bison_stack',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/THD::handler_tables_hash',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/hash_index_key_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/dboptions_hash',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/user_conn',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/LOG_POS_COORD',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/XID_STATE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MPVIO_EXT::auth_info',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/opt_bin_logname',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/READ_RECORD_cache',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Quick_ranges',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/File_query_log::name',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Table_trigger_dispatcher::m_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/thd_timer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/THD::Session_tracker',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/THD::Session_sysvar_resource_manager',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/show_slave_status_io_gtid_set',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/write_set_extraction',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/get_all_tables',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/fill_schema_schemata',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/JSON',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/create_shared_memory',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/mysql_options',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/MYSQL_DATA',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/MYSQL',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/MYSQL_RES',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/MYSQL_ROW',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/MYSQL_STATE_CHANGE_INFO',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/client/MYSQL_HANDSHAKE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/vio/ssl_fd',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/vio/vio',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/vio/read_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/win_SECURITY_ATTRIBUTES',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/win_PACL',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/win_IP_ADAPTER_ADDRESSES',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/max_alloca',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/charset_file',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/charset_loader',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/lf_node',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/lf_dynarray',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/lf_slist',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/LIST',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/IO_CACHE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/KEY_CACHE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/SAFE_HASH_ENTRY',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/MY_TMPDIR::full_list',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/MY_BITMAP::bitmap',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/my_compress_alloc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/pack_frm',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/my_err_head',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/my_file_info',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/MY_DIR',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/MY_STAT',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/QUEUE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/DYNAMIC_STRING',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/mysys/TREE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/MDL_context::acquire_locks',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Partition_share',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/partition_sort_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Partition_admin',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/plugin_init_tmp',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/plugin_int_mem_root',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/mysql_plugin_dl',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/mysql_plugin',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/csv/blobroot',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/csv/tina_set',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/csv/row',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/csv/Transparent_file',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/adaptive hash index',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/buf_buf_pool',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/dict_stats_bg_recalc_pool_t',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/dict_stats_index_map_t',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/dict_stats_n_diff_on_level',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/other',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row_log_buf',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row_merge_sort',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/std',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx_sys_t::rw_trx_ids',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/partitioning',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/api0api',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/btr0btr',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/btr0bulk',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/btr0cur',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/btr0pcur',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/btr0sea',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/buf0buf',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/buf0dblwr',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/buf0dump',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/buf0flu',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/buf0lru',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/dict0dict',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/dict0mem',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/dict0stats',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/dict0stats_bg',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/eval0eval',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fil0fil',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fsp0file',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fsp0space',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fsp0sysspace',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fts0ast',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fts0config',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fts0fts',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fts0opt',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fts0pars',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fts0que',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/fts0sql',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/gis0sea',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ha0ha',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ha_innodb',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/handler0alter',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/hash0hash',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/i_s',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ibuf0ibuf',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/lexyy',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/lock0lock',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/log0log',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/log0recv',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/mem0mem',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/os0event',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/os0file',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/page0cur',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/page0zip',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/pars0lex',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/read0read',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/rem0rec',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row0ftsort',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row0import',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row0log',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row0merge',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row0mysql',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row0sel',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/row0trunc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/srv0conc',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/srv0srv',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/srv0start',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/sync0arr',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/sync0debug',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/sync0rw',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/sync0types',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx0i_s',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx0purge',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx0roll',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx0rseg',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx0sys',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx0trx',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/trx0undo',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/usr0sess',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ut0list',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ut0mem',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ut0mutex',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ut0pool',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ut0rbt',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/innodb/ut0wqueue',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MYISAM_SHARE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MI_INFO',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MI_INFO::ft1_to_ft2',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MI_INFO::bulk_insert',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/record_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/FTB',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/FT_INFO',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/FTPARSER_PARAM',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/ft_memroot',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/ft_stopwords',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MI_SORT_PARAM',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MI_SORT_PARAM::wordroot',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/SORT_FT_BUF',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/SORT_KEY_BLOCKS',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/filecopy',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/SORT_INFO::buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MI_DECODE_TREE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/MYISAM_SHARE::decode_tables',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/preload_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/stPageList::pages',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisam/keycache_thread_var',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/memory/HP_SHARE',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/memory/HP_INFO',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/memory/HP_PTRS',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/memory/HP_KEYDEF',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisammrg/MYRG_INFO',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/myisammrg/children',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/archive/FRM',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/archive/record_buffer',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/blackhole/blackhole_share',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/partition/ha_partition::file',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/partition/ha_partition::engine_array',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/partition/ha_partition::part_ids',0,0,0,0,0,0,0,0,0,0),(NULL,'memory/sql/Relay_log_info::mts_coor',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Locked_tables_list::m_locked_tables_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/display_table_locks',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/THD::transactions::mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Delegate::memroot',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/thd::main_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/help',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/new_frm_mem',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/gdl',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Table_triggers_list',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/servers',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Prepared_statement_map',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Prepared_statement::main_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Protocol_local::m_rset_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Warning_info::m_warn_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/THD::sp_cache',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/sp_head::main_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/sp_head::execute_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/sp_head::call_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/table_mapping::m_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/QUICK_RANGE_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/QUICK_INDEX_MERGE_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/QUICK_ROR_INTERSECT_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/QUICK_ROR_UNION_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/QUICK_GROUP_MIN_MAX_SELECT::alloc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/test_quick_select',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/prune_partitions::exec',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MYSQL_BIN_LOG::recover',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Blob_mem_storage::storage',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/NAMED_ILINK::name',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/String::value',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Sys_var_charptr::value',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Queue::queue_item',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/THD::db',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/user_var_entry',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Slave_job_group::group_relay_log_name',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Relay_log_info::group_relay_log_name',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/binlog_cache_mngr',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Row_data_memory::memory',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Gtid_set::to_string',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Gtid_state::to_string',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Owned_gtids::to_string',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Log_event',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Incident_log_event::message',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Rows_query_log_event::rows_query',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Sort_param::tmp_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Filesort_info::merge',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Filesort_info::record_pointers',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Filesort_buffer::sort_keys',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/handler::errmsgs',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/handlerton',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/XID',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/host_cache::hostname',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/user_var_entry::value',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/User_level_lock',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MYSQL_LOG::name',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/TC_LOG_MMAP::pages',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/my_bitmap_map',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/QUICK_RANGE_SELECT::mrr_buf_desc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Event_queue_element_for_exec::names',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/my_str_malloc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MYSQL_BIN_LOG::basename',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MYSQL_BIN_LOG::index',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MYSQL_RELAY_LOG::basename',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MYSQL_RELAY_LOG::index',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/rpl_filter memory',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/errmsgs',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Gis_read_stream::err_msg',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Geometry::ptr_and_wkb_data',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MYSQL_LOCK',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/NET::buff',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/NET::compress_packet',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Event_scheduler::scheduler_param',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Gtid_set::Interval_chunk',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Owned_gtids::sidno_to_hash',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Sid_map::Node',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Gtid_state::group_commit_sidno_locks',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Mutex_cond_array::Mutex_cond',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/TABLE_RULE_ENT',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Rpl_info_table',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Rpl_info_file::buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/db_worker_hash_entry',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/rpl_slave::check_temp_dir',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/rpl_slave::command_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/binlog_ver_1_event',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/SLAVE_INFO',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/binlog_pos',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/HASH_ROW_ENTRY',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/binlog_statement_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/partition_syntax_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/READ_INFO',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/JOIN_CACHE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/TABLE::sort_io_cache',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/frm',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Unique::sort_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Unique::merge_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/frm::extra_segment_buff',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/frm::form_pos',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/frm::string',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/LOG_name',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/DATE_TIME_FORMAT',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/DDL_LOG_MEMORY_ENTRY',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/ST_SCHEMA_TABLE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/ignored_db',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/PROFILE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/global_system_variables',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/THD::variables',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Security_context',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Shared_memory_name',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/bison_stack',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/THD::handler_tables_hash',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/hash_index_key_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/dboptions_hash',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/user_conn',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/LOG_POS_COORD',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/XID_STATE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MPVIO_EXT::auth_info',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/opt_bin_logname',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/READ_RECORD_cache',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Quick_ranges',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/File_query_log::name',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Table_trigger_dispatcher::m_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/thd_timer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/THD::Session_tracker',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/THD::Session_sysvar_resource_manager',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/show_slave_status_io_gtid_set',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/write_set_extraction',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/get_all_tables',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/fill_schema_schemata',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/JSON',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/create_shared_memory',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/mysql_options',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/MYSQL_DATA',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/MYSQL',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/MYSQL_RES',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/MYSQL_ROW',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/MYSQL_STATE_CHANGE_INFO',0,0,0,0,0,0,0,0,0,0),('localhost','memory/client/MYSQL_HANDSHAKE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/vio/ssl_fd',0,0,0,0,0,0,0,0,0,0),('localhost','memory/vio/vio',0,0,0,0,0,0,0,0,0,0),('localhost','memory/vio/read_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/win_SECURITY_ATTRIBUTES',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/win_PACL',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/win_IP_ADAPTER_ADDRESSES',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/max_alloca',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/charset_file',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/charset_loader',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/lf_node',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/lf_dynarray',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/lf_slist',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/LIST',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/IO_CACHE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/KEY_CACHE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/SAFE_HASH_ENTRY',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/MY_TMPDIR::full_list',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/MY_BITMAP::bitmap',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/my_compress_alloc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/pack_frm',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/my_err_head',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/my_file_info',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/MY_DIR',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/MY_STAT',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/QUEUE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/DYNAMIC_STRING',0,0,0,0,0,0,0,0,0,0),('localhost','memory/mysys/TREE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/MDL_context::acquire_locks',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Partition_share',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/partition_sort_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Partition_admin',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/plugin_init_tmp',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/plugin_int_mem_root',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/mysql_plugin_dl',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/mysql_plugin',0,0,0,0,0,0,0,0,0,0),('localhost','memory/csv/blobroot',0,0,0,0,0,0,0,0,0,0),('localhost','memory/csv/tina_set',0,0,0,0,0,0,0,0,0,0),('localhost','memory/csv/row',0,0,0,0,0,0,0,0,0,0),('localhost','memory/csv/Transparent_file',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/adaptive hash index',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/buf_buf_pool',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/dict_stats_bg_recalc_pool_t',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/dict_stats_index_map_t',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/dict_stats_n_diff_on_level',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/other',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row_log_buf',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row_merge_sort',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/std',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx_sys_t::rw_trx_ids',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/partitioning',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/api0api',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/btr0btr',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/btr0bulk',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/btr0cur',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/btr0pcur',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/btr0sea',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/buf0buf',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/buf0dblwr',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/buf0dump',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/buf0flu',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/buf0lru',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/dict0dict',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/dict0mem',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/dict0stats',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/dict0stats_bg',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/eval0eval',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fil0fil',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fsp0file',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fsp0space',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fsp0sysspace',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fts0ast',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fts0config',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fts0fts',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fts0opt',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fts0pars',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fts0que',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/fts0sql',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/gis0sea',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ha0ha',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ha_innodb',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/handler0alter',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/hash0hash',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/i_s',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ibuf0ibuf',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/lexyy',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/lock0lock',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/log0log',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/log0recv',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/mem0mem',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/os0event',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/os0file',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/page0cur',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/page0zip',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/pars0lex',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/read0read',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/rem0rec',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row0ftsort',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row0import',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row0log',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row0merge',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row0mysql',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row0sel',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/row0trunc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/srv0conc',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/srv0srv',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/srv0start',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/sync0arr',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/sync0debug',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/sync0rw',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/sync0types',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx0i_s',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx0purge',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx0roll',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx0rseg',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx0sys',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx0trx',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/trx0undo',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/usr0sess',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ut0list',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ut0mem',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ut0mutex',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ut0pool',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ut0rbt',0,0,0,0,0,0,0,0,0,0),('localhost','memory/innodb/ut0wqueue',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MYISAM_SHARE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MI_INFO',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MI_INFO::ft1_to_ft2',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MI_INFO::bulk_insert',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/record_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/FTB',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/FT_INFO',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/FTPARSER_PARAM',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/ft_memroot',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/ft_stopwords',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MI_SORT_PARAM',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MI_SORT_PARAM::wordroot',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/SORT_FT_BUF',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/SORT_KEY_BLOCKS',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/filecopy',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/SORT_INFO::buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MI_DECODE_TREE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/MYISAM_SHARE::decode_tables',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/preload_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/stPageList::pages',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisam/keycache_thread_var',0,0,0,0,0,0,0,0,0,0),('localhost','memory/memory/HP_SHARE',0,0,0,0,0,0,0,0,0,0),('localhost','memory/memory/HP_INFO',0,0,0,0,0,0,0,0,0,0),('localhost','memory/memory/HP_PTRS',0,0,0,0,0,0,0,0,0,0),('localhost','memory/memory/HP_KEYDEF',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisammrg/MYRG_INFO',0,0,0,0,0,0,0,0,0,0),('localhost','memory/myisammrg/children',0,0,0,0,0,0,0,0,0,0),('localhost','memory/archive/FRM',0,0,0,0,0,0,0,0,0,0),('localhost','memory/archive/record_buffer',0,0,0,0,0,0,0,0,0,0),('localhost','memory/blackhole/blackhole_share',0,0,0,0,0,0,0,0,0,0),('localhost','memory/partition/ha_partition::file',0,0,0,0,0,0,0,0,0,0),('localhost','memory/partition/ha_partition::engine_array',0,0,0,0,0,0,0,0,0,0),('localhost','memory/partition/ha_partition::part_ids',0,0,0,0,0,0,0,0,0,0),('localhost','memory/sql/Relay_log_info::mts_coor',0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `memory_summary_by_host_by_event_name` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:23:39
