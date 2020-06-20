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

users 
1. create user

articles
1. create article
2. show all articles

comments
1. show all comments(user)
2. show all comments(article)
3. add a comment