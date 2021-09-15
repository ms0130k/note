1. create db
      - create database test_db;
2. create user
- create user 'test_user'@'localhost' identified by 'password';
3. set log_bin_trust_function_creators
- SHOW GLOBAL variables LIKE 'log_bin_trust_function_creators';(off)
- SET GLOBAL log_bin_trust_function_creators = ON;
5. extract dump
- gzip -d dump_file.gz
6. import dump
- move to dump file path
- mysql -u test_user -p test_db < dump_file_name
7. write password
