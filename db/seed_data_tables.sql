create table if not exists subaru_users(
user_id serial primary key,
username varchar(40) not null unique,
password varchar(40) not null unique
);

create table if not exists parts(
id serial primary key,
part_num text,
category text,
name text,
description text,
price decimal,
picture text
);


create table if not exists cars (
id serial primary key,
year integer,
model text,
trim text
);

create table if not exists subaru_key (
id serial primary key,
car_id integer references cars(id),
part_id integer references parts(id)
);


