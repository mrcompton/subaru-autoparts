-- drop table subaru_cart;

create table if not exists subaru_cart(
id serial primary key,
part_num text,
email text references subaru_users(email),
quantity integer,
total decimal
);

--add item to cart

insert into subaru_cart(part_num,email,quantity,total)
values('15208AA15A', 'e@e.com', 2, 10.62);

insert into subaru_cart(part_num,email,quantity,total)
values('15208AA15A', 'a@a.com', 1, 5.31); 

-- select * from subaru_cart
