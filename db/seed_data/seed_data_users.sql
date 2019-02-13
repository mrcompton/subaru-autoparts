create table if not exists subaru_users(
id serial primary key,
username varchar(40) not null unique,
password varchar(40) not null unique
);


insert into subaru_users(username,password)
values('CoolGuy','1234');

insert into subaru_users(username,password)
values('Speedy','5678');

insert into subaru_users(username,password)
values('RubySue','1111');


