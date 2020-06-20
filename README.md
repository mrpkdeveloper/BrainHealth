# Project-hackjaipur-

### Database setup

```shell
mysql -u root
```

```sql
create database healthdb;
create user healthuser identified with mysql_native_password by 'healthpass';
grant all privileges on healthdb.* to healthuser;
flush privileges;
```
## Project structure

```shell
SRC
├───controllers
├───db
├───public
└───routes
```