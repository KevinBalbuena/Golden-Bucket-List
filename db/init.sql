DROP TABLE IF EXISTS users;

create table users(
    id serial primary key,
    email text not null unique,
    password text not null,
    username text 
);