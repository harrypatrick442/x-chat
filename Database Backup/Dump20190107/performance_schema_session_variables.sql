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
-- Table structure for table `session_variables`
--

DROP TABLE IF EXISTS `session_variables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session_variables` (
  `VARIABLE_NAME` varchar(64) NOT NULL,
  `VARIABLE_VALUE` varchar(1024) DEFAULT NULL
) ENGINE=PERFORMANCE_SCHEMA DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_variables`
--

LOCK TABLES `session_variables` WRITE;
/*!40000 ALTER TABLE `session_variables` DISABLE KEYS */;
INSERT INTO `session_variables` VALUES ('auto_increment_increment','1'),('auto_increment_offset','1'),('autocommit','ON'),('automatic_sp_privileges','ON'),('avoid_temporal_upgrade','OFF'),('back_log','80'),('basedir','C:\\Program Files\\MySQL\\MySQL Server 5.7\\'),('big_tables','OFF'),('bind_address','*'),('binlog_cache_size','32768'),('binlog_checksum','CRC32'),('binlog_direct_non_transactional_updates','OFF'),('binlog_error_action','ABORT_SERVER'),('binlog_format','ROW'),('binlog_group_commit_sync_delay','0'),('binlog_group_commit_sync_no_delay_count','0'),('binlog_gtid_simple_recovery','ON'),('binlog_max_flush_queue_time','0'),('binlog_order_commits','ON'),('binlog_row_image','FULL'),('binlog_rows_query_log_events','OFF'),('binlog_stmt_cache_size','32768'),('block_encryption_mode','aes-128-ecb'),('bulk_insert_buffer_size','8388608'),('character_set_client','utf8mb4'),('character_set_connection','utf8mb4'),('character_set_database','utf8'),('character_set_filesystem','binary'),('character_set_results','utf8'),('character_set_server','utf8mb4'),('character_set_system','utf8'),('character_sets_dir','C:\\Program Files\\MySQL\\MySQL Server 5.7\\share\\charsets\\'),('check_proxy_users','OFF'),('collation_connection','utf8mb4_unicode_ci'),('collation_database','utf8_general_ci'),('collation_server','utf8mb4_unicode_ci'),('completion_type','NO_CHAIN'),('concurrent_insert','AUTO'),('connect_timeout','10'),('core_file','OFF'),('datadir','C:\\ProgramData\\MySQL\\MySQL Server 5.7\\Data\\'),('date_format','%Y-%m-%d'),('datetime_format','%Y-%m-%d %H:%i:%s'),('default_authentication_plugin','mysql_native_password'),('default_password_lifetime','0'),('default_storage_engine','InnoDB'),('default_tmp_storage_engine','InnoDB'),('default_week_format','0'),('delay_key_write','ON'),('delayed_insert_limit','100'),('delayed_insert_timeout','300'),('delayed_queue_size','1000'),('disabled_storage_engines',''),('disconnect_on_expired_password','ON'),('div_precision_increment','4'),('end_markers_in_json','OFF'),('enforce_gtid_consistency','OFF'),('eq_range_index_dive_limit','200'),('error_count','0'),('event_scheduler','OFF'),('expire_logs_days','0'),('explicit_defaults_for_timestamp','OFF'),('external_user',''),('flush','OFF'),('flush_time','0'),('foreign_key_checks','ON'),('ft_boolean_syntax','+ -><()~*:\"\"&|'),('ft_max_word_len','84'),('ft_min_word_len','4'),('ft_query_expansion_limit','20'),('ft_stopword_file','(built-in)'),('general_log','OFF'),('general_log_file','DESKTOP-FRGU24C.log'),('group_concat_max_len','1024'),('gtid_executed_compression_period','1000'),('gtid_mode','OFF'),('gtid_next','AUTOMATIC'),('gtid_owned',''),('gtid_purged',''),('have_compress','YES'),('have_crypt','NO'),('have_dynamic_loading','YES'),('have_geometry','YES'),('have_openssl','DISABLED'),('have_profiling','YES'),('have_query_cache','YES'),('have_rtree_keys','YES'),('have_ssl','DISABLED'),('have_statement_timeout','YES'),('have_symlink','YES'),('host_cache_size','279'),('hostname','DESKTOP-FRGU24C'),('identity','0'),('ignore_builtin_innodb','OFF'),('ignore_db_dirs',''),('init_connect','SET NAMES utf8mb4'),('init_file',''),('init_slave',''),('innodb_adaptive_flushing','ON'),('innodb_adaptive_flushing_lwm','10'),('innodb_adaptive_hash_index','ON'),('innodb_adaptive_hash_index_parts','8'),('innodb_adaptive_max_sleep_delay','150000'),('innodb_api_bk_commit_interval','5'),('innodb_api_disable_rowlock','OFF'),('innodb_api_enable_binlog','OFF'),('innodb_api_enable_mdl','OFF'),('innodb_api_trx_level','0'),('innodb_autoextend_increment','64'),('innodb_autoinc_lock_mode','1'),('innodb_buffer_pool_chunk_size','8388608'),('innodb_buffer_pool_dump_at_shutdown','ON'),('innodb_buffer_pool_dump_now','OFF'),('innodb_buffer_pool_dump_pct','25'),('innodb_buffer_pool_filename','ib_buffer_pool'),('innodb_buffer_pool_instances','1'),('innodb_buffer_pool_load_abort','OFF'),('innodb_buffer_pool_load_at_startup','ON'),('innodb_buffer_pool_load_now','OFF'),('innodb_buffer_pool_size','8388608'),('innodb_change_buffer_max_size','25'),('innodb_change_buffering','all'),('innodb_checksum_algorithm','crc32'),('innodb_checksums','ON'),('innodb_cmp_per_index_enabled','OFF'),('innodb_commit_concurrency','0'),('innodb_compression_failure_threshold_pct','5'),('innodb_compression_level','6'),('innodb_compression_pad_pct_max','50'),('innodb_concurrency_tickets','5000'),('innodb_data_file_path','ibdata1:12M:autoextend'),('innodb_data_home_dir',''),('innodb_deadlock_detect','ON'),('innodb_default_row_format','dynamic'),('innodb_disable_sort_file_cache','OFF'),('innodb_doublewrite','ON'),('innodb_fast_shutdown','1'),('innodb_file_format','Barracuda'),('innodb_file_format_check','ON'),('innodb_file_format_max','Barracuda'),('innodb_file_per_table','ON'),('innodb_fill_factor','100'),('innodb_flush_log_at_timeout','1'),('innodb_flush_log_at_trx_commit','1'),('innodb_flush_method',''),('innodb_flush_neighbors','1'),('innodb_flush_sync','ON'),('innodb_flushing_avg_loops','30'),('innodb_force_load_corrupted','OFF'),('innodb_force_recovery','0'),('innodb_ft_aux_table',''),('innodb_ft_cache_size','8000000'),('innodb_ft_enable_diag_print','OFF'),('innodb_ft_enable_stopword','ON'),('innodb_ft_max_token_size','84'),('innodb_ft_min_token_size','3'),('innodb_ft_num_word_optimize','2000'),('innodb_ft_result_cache_limit','2000000000'),('innodb_ft_server_stopword_table',''),('innodb_ft_sort_pll_degree','2'),('innodb_ft_total_cache_size','640000000'),('innodb_ft_user_stopword_table',''),('innodb_io_capacity','200'),('innodb_io_capacity_max','2000'),('innodb_large_prefix','ON'),('innodb_lock_wait_timeout','50'),('innodb_locks_unsafe_for_binlog','OFF'),('innodb_log_buffer_size','1048576'),('innodb_log_checksums','ON'),('innodb_log_compressed_pages','ON'),('innodb_log_file_size','50331648'),('innodb_log_files_in_group','2'),('innodb_log_group_home_dir','.\\'),('innodb_log_write_ahead_size','8192'),('innodb_lru_scan_depth','1024'),('innodb_max_dirty_pages_pct','75.000000'),('innodb_max_dirty_pages_pct_lwm','0.000000'),('innodb_max_purge_lag','0'),('innodb_max_purge_lag_delay','0'),('innodb_max_undo_log_size','1073741824'),('innodb_monitor_disable',''),('innodb_monitor_enable',''),('innodb_monitor_reset',''),('innodb_monitor_reset_all',''),('innodb_old_blocks_pct','37'),('innodb_old_blocks_time','1000'),('innodb_online_alter_log_max_size','134217728'),('innodb_open_files','300'),('innodb_optimize_fulltext_only','OFF'),('innodb_page_cleaners','1'),('innodb_page_size','16384'),('innodb_print_all_deadlocks','OFF'),('innodb_purge_batch_size','300'),('innodb_purge_rseg_truncate_frequency','128'),('innodb_purge_threads','4'),('innodb_random_read_ahead','OFF'),('innodb_read_ahead_threshold','56'),('innodb_read_io_threads','4'),('innodb_read_only','OFF'),('innodb_replication_delay','0'),('innodb_rollback_on_timeout','OFF'),('innodb_rollback_segments','128'),('innodb_sort_buffer_size','1048576'),('innodb_spin_wait_delay','6'),('innodb_stats_auto_recalc','ON'),('innodb_stats_include_delete_marked','OFF'),('innodb_stats_method','nulls_equal'),('innodb_stats_on_metadata','OFF'),('innodb_stats_persistent','ON'),('innodb_stats_persistent_sample_pages','20'),('innodb_stats_sample_pages','8'),('innodb_stats_transient_sample_pages','8'),('innodb_status_output','OFF'),('innodb_status_output_locks','OFF'),('innodb_strict_mode','ON'),('innodb_support_xa','ON'),('innodb_sync_array_size','1'),('innodb_sync_spin_loops','30'),('innodb_table_locks','ON'),('innodb_temp_data_file_path','ibtmp1:12M:autoextend'),('innodb_thread_concurrency','9'),('innodb_thread_sleep_delay','0'),('innodb_tmpdir',''),('innodb_undo_directory','.\\'),('innodb_undo_log_truncate','OFF'),('innodb_undo_logs','128'),('innodb_undo_tablespaces','0'),('innodb_use_native_aio','ON'),('innodb_version','5.7.21'),('innodb_write_io_threads','4'),('insert_id','0'),('interactive_timeout','28800'),('internal_tmp_disk_storage_engine','InnoDB'),('join_buffer_size','262144'),('keep_files_on_create','OFF'),('key_buffer_size','8388608'),('key_cache_age_threshold','300'),('key_cache_block_size','1024'),('key_cache_division_limit','100'),('keyring_operations','ON'),('large_files_support','ON'),('large_page_size','0'),('large_pages','OFF'),('last_insert_id','0'),('lc_messages','en_US'),('lc_messages_dir','C:\\Program Files\\MySQL\\MySQL Server 5.7\\share\\'),('lc_time_names','en_US'),('license','GPL'),('local_infile','ON'),('lock_wait_timeout','31536000'),('log_bin','OFF'),('log_bin_basename',''),('log_bin_index',''),('log_bin_trust_function_creators','OFF'),('log_bin_use_v1_row_events','OFF'),('log_builtin_as_identified_by_password','OFF'),('log_error','.\\DESKTOP-FRGU24C.err'),('log_error_verbosity','3'),('log_output','FILE'),('log_queries_not_using_indexes','OFF'),('log_slave_updates','OFF'),('log_slow_admin_statements','OFF'),('log_slow_slave_statements','OFF'),('log_statements_unsafe_for_binlog','ON'),('log_syslog','ON'),('log_syslog_tag',''),('log_throttle_queries_not_using_indexes','0'),('log_timestamps','UTC'),('log_warnings','2'),('long_query_time','10.000000'),('low_priority_updates','OFF'),('lower_case_file_system','ON'),('lower_case_table_names','1'),('master_info_repository','FILE'),('master_verify_checksum','OFF'),('max_allowed_packet','4194304'),('max_binlog_cache_size','18446744073709547520'),('max_binlog_size','1073741824'),('max_binlog_stmt_cache_size','18446744073709547520'),('max_connect_errors','100'),('max_connections','151'),('max_delayed_threads','20'),('max_digest_length','1024'),('max_error_count','64'),('max_execution_time','0'),('max_heap_table_size','16777216'),('max_insert_delayed_threads','20'),('max_join_size','18446744073709551615'),('max_length_for_sort_data','1024'),('max_points_in_geometry','65536'),('max_prepared_stmt_count','16382'),('max_relay_log_size','0'),('max_seeks_for_key','4294967295'),('max_sort_length','1024'),('max_sp_recursion_depth','0'),('max_tmp_tables','32'),('max_user_connections','0'),('max_write_lock_count','4294967295'),('metadata_locks_cache_size','1024'),('metadata_locks_hash_instances','8'),('min_examined_row_limit','0'),('multi_range_count','256'),('myisam_data_pointer_size','6'),('myisam_max_sort_file_size','107374182400'),('myisam_mmap_size','18446744073709551615'),('myisam_recover_options','OFF'),('myisam_repair_threads','1'),('myisam_sort_buffer_size','8388608'),('myisam_stats_method','nulls_unequal'),('myisam_use_mmap','OFF'),('mysql_native_password_proxy_users','OFF'),('named_pipe','OFF'),('net_buffer_length','16384'),('net_read_timeout','30'),('net_retry_count','10'),('net_write_timeout','60'),('new','OFF'),('ngram_token_size','2'),('offline_mode','OFF'),('old','OFF'),('old_alter_table','OFF'),('old_passwords','0'),('open_files_limit','6209'),('optimizer_prune_level','1'),('optimizer_search_depth','62'),('optimizer_switch','index_merge=on,index_merge_union=on,index_merge_sort_union=on,index_merge_intersection=on,engine_condition_pushdown=on,index_condition_pushdown=on,mrr=on,mrr_cost_based=on,block_nested_loop=on,batched_key_access=off,materialization=on,semijoin=on,loosescan=on,firstmatch=on,duplicateweedout=on,subquery_materialization_cost_based=on,use_index_extensions=on,condition_fanout_filter=on,derived_merge=on'),('optimizer_trace','enabled=off,one_line=off'),('optimizer_trace_features','greedy_search=on,range_optimizer=on,dynamic_range=on,repeated_subselect=on'),('optimizer_trace_limit','1'),('optimizer_trace_max_mem_size','16384'),('optimizer_trace_offset','-1'),('parser_max_mem_size','18446744073709551615'),('performance_schema','ON'),('performance_schema_accounts_size','-1'),('performance_schema_digests_size','10000'),('performance_schema_events_stages_history_long_size','10000'),('performance_schema_events_stages_history_size','10'),('performance_schema_events_statements_history_long_size','10000'),('performance_schema_events_statements_history_size','10'),('performance_schema_events_transactions_history_long_size','10000'),('performance_schema_events_transactions_history_size','10'),('performance_schema_events_waits_history_long_size','10000'),('performance_schema_events_waits_history_size','10'),('performance_schema_hosts_size','-1'),('performance_schema_max_cond_classes','80'),('performance_schema_max_cond_instances','-1'),('performance_schema_max_digest_length','1024'),('performance_schema_max_file_classes','80'),('performance_schema_max_file_handles','32768'),('performance_schema_max_file_instances','-1'),('performance_schema_max_index_stat','-1'),('performance_schema_max_memory_classes','320'),('performance_schema_max_metadata_locks','-1'),('performance_schema_max_mutex_classes','210'),('performance_schema_max_mutex_instances','-1'),('performance_schema_max_prepared_statements_instances','-1'),('performance_schema_max_program_instances','-1'),('performance_schema_max_rwlock_classes','40'),('performance_schema_max_rwlock_instances','-1'),('performance_schema_max_socket_classes','10'),('performance_schema_max_socket_instances','-1'),('performance_schema_max_sql_text_length','1024'),('performance_schema_max_stage_classes','150'),('performance_schema_max_statement_classes','193'),('performance_schema_max_statement_stack','10'),('performance_schema_max_table_handles','-1'),('performance_schema_max_table_instances','-1'),('performance_schema_max_table_lock_stat','-1'),('performance_schema_max_thread_classes','50'),('performance_schema_max_thread_instances','-1'),('performance_schema_session_connect_attrs_size','512'),('performance_schema_setup_actors_size','-1'),('performance_schema_setup_objects_size','-1'),('performance_schema_users_size','-1'),('pid_file','C:\\ProgramData\\MySQL\\MySQL Server 5.7\\Data\\DESKTOP-FRGU24C.pid'),('plugin_dir','C:\\Program Files\\MySQL\\MySQL Server 5.7\\lib\\plugin\\'),('port','3306'),('preload_buffer_size','32768'),('profiling','OFF'),('profiling_history_size','15'),('protocol_version','10'),('proxy_user',''),('pseudo_slave_mode','OFF'),('pseudo_thread_id','58'),('query_alloc_block_size','8192'),('query_cache_limit','1048576'),('query_cache_min_res_unit','4096'),('query_cache_size','1048576'),('query_cache_type','OFF'),('query_cache_wlock_invalidate','OFF'),('query_prealloc_size','8192'),('rand_seed1','0'),('rand_seed2','0'),('range_alloc_block_size','4096'),('range_optimizer_max_mem_size','8388608'),('rbr_exec_mode','STRICT'),('read_buffer_size','8192'),('read_only','OFF'),('read_rnd_buffer_size','1'),('relay_log',''),('relay_log_basename','C:\\ProgramData\\MySQL\\MySQL Server 5.7\\Data\\DESKTOP-FRGU24C-relay-bin'),('relay_log_index','C:\\ProgramData\\MySQL\\MySQL Server 5.7\\Data\\DESKTOP-FRGU24C-relay-bin.index'),('relay_log_info_file','relay-log.info'),('relay_log_info_repository','FILE'),('relay_log_purge','ON'),('relay_log_recovery','OFF'),('relay_log_space_limit','0'),('report_host',''),('report_password',''),('report_port','3306'),('report_user',''),('require_secure_transport','OFF'),('rpl_stop_slave_timeout','31536000'),('secure_auth','ON'),('secure_file_priv','C:\\ProgramData\\MySQL\\MySQL Server 5.7\\Uploads\\'),('server_id','1'),('server_id_bits','32'),('server_uuid','6a957e01-0a8d-11e9-8312-e8039af65ba7'),('session_track_gtids','OFF'),('session_track_schema','ON'),('session_track_state_change','OFF'),('session_track_system_variables','time_zone,autocommit,character_set_client,character_set_results,character_set_connection'),('session_track_transaction_info','OFF'),('sha256_password_proxy_users','OFF'),('shared_memory','OFF'),('shared_memory_base_name','MYSQL'),('show_compatibility_56','OFF'),('show_old_temporals','OFF'),('skip_external_locking','ON'),('skip_name_resolve','OFF'),('skip_networking','OFF'),('skip_show_database','OFF'),('slave_allow_batching','OFF'),('slave_checkpoint_group','512'),('slave_checkpoint_period','300'),('slave_compressed_protocol','OFF'),('slave_exec_mode','STRICT'),('slave_load_tmpdir','C:\\WINDOWS\\SERVIC~3\\NETWOR~1\\AppData\\Local\\Temp'),('slave_max_allowed_packet','1073741824'),('slave_net_timeout','60'),('slave_parallel_type','DATABASE'),('slave_parallel_workers','0'),('slave_pending_jobs_size_max','16777216'),('slave_preserve_commit_order','OFF'),('slave_rows_search_algorithms','TABLE_SCAN,INDEX_SCAN'),('slave_skip_errors','OFF'),('slave_sql_verify_checksum','ON'),('slave_transaction_retries','10'),('slave_type_conversions',''),('slow_launch_time','2'),('slow_query_log','ON'),('slow_query_log_file','DESKTOP-FRGU24C-slow.log'),('socket','MySQL'),('sort_buffer_size','262144'),('sql_auto_is_null','OFF'),('sql_big_selects','ON'),('sql_buffer_result','OFF'),('sql_log_bin','ON'),('sql_log_off','OFF'),('sql_mode',''),('sql_notes','ON'),('sql_quote_show_create','ON'),('sql_safe_updates','OFF'),('sql_select_limit','18446744073709551615'),('sql_slave_skip_counter','0'),('sql_warnings','OFF'),('ssl_ca',''),('ssl_capath',''),('ssl_cert',''),('ssl_cipher',''),('ssl_crl',''),('ssl_crlpath',''),('ssl_key',''),('stored_program_cache','256'),('super_read_only','OFF'),('sync_binlog','1'),('sync_frm','ON'),('sync_master_info','10000'),('sync_relay_log','10000'),('sync_relay_log_info','10000'),('system_time_zone','GMT Standard Time'),('table_definition_cache','1400'),('table_open_cache','2000'),('table_open_cache_instances','16'),('thread_cache_size','10'),('thread_handling','one-thread-per-connection'),('thread_stack','262144'),('time_format','%H:%i:%s'),('time_zone','+00:00'),('timestamp','1546895937.764889'),('tls_version','TLSv1,TLSv1.1'),('tmp_table_size','16777216'),('tmpdir','C:\\WINDOWS\\SERVIC~3\\NETWOR~1\\AppData\\Local\\Temp'),('transaction_alloc_block_size','8192'),('transaction_allow_batching','OFF'),('transaction_isolation','REPEATABLE-READ'),('transaction_prealloc_size','4096'),('transaction_read_only','OFF'),('transaction_write_set_extraction','OFF'),('tx_isolation','REPEATABLE-READ'),('tx_read_only','OFF'),('unique_checks','ON'),('updatable_views_with_limit','YES'),('version','5.7.21-log'),('version_comment','MySQL Community Server (GPL)'),('version_compile_machine','x86_64'),('version_compile_os','Win64'),('wait_timeout','28800'),('warning_count','1');
/*!40000 ALTER TABLE `session_variables` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-07 21:18:57
