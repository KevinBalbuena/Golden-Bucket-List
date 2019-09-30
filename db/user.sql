create table users(
  email varchar(255) not null unique, 
  username varchar(50), 
  password varchar(50)
);