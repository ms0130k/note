1. create db
> create database test_db;
2. create user
> create user 'test_user'@'localhost' identified by 'password';
3. extract dump
> gzip -d dump_file.gz
4. import dump
> move to dump file path
 mysql -u test_user -p test_db < dump_file_name
5. write password
