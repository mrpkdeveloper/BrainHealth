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

### Backend
```shell
SRC
├───controllers
├───db
├───public
└───routes
```

### Frontend
```
src/public
├───app          # our own frontendcode
├───components   # html components parts used
├───css          # css libraries that we are using
├───fonts        # fonts that we are using
└───js           # js libraries that we are using
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


## Api documentation
### Users
1. `post /users`  
creates a new user with random username and an user id
2. `get /users/{userid}`  
get user with with given id
3. `get /users/{username}`  
get user with with given username

### Post
1. `get /posts`  
get all posts by everyone
2. `post /posts`  
create a new post with fields
```
userId=  
title=  
body=  
```