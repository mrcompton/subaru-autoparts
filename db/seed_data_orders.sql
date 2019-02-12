create table if not exists orders(
order_id serial primary key,
user_id integer references subaru_users(id),
price decimal
);

insert into orders(user_id,price)
values(2,32.76);

insert into orders(user_id,price)
values(1,11.05);

create table if not exists ordered_parts(
id serial primary key,
order_id integer references orders(order_id),
part_id integer references parts(id),
quanity integer
);

insert into ordered_parts(order_id,part_id,quanity)
values (1,1,2);

insert into ordered_parts(order_id,part_id,quanity)
values (1,5,1);

insert into ordered_parts(order_id,part_id,quanity)
values (2,2,2);