drop table ordered_parts;
drop table orders;

create table if not exists orders(
order_id serial primary key,
user_id integer references subaru_users(id),
email varchar(80),
first_name varchar(80),
last_name varchar(80),
address_1 varchar(180),
address_2 varchar(180),
city varchar(80),
state varchar(20),
zip integer,
total decimal,
purchase_completed text
);

insert into orders(email, first_name, last_name, address_1, address_2, city, state, zip, total, purchase_completed)
values('e@e.com', 'bobby', 'mcgee', '123 Happy Place', null, 'Happyton', 'TX', 12345, 77.06, 'yes');

select * from orders;

create table if not exists ordered_parts(
id serial primary key,
order_id integer references orders(order_id),
part_id integer references parts(id),
quantity integer
);

insert into ordered_parts(order_id, part_id, quantity)
values(1,2,2);

insert into ordered_parts(order_id, part_id, quantity)
values(1,6,3);

insert into ordered_parts(order_id, part_id, quantity)
values(1,22,1);

select * from ordered_parts;