create table if not exists cart(
id serial primary key,
quantity integer,
total decimal,
part_id integer references parts(id)
);


--show all items in cart

select 
parts.name,
parts.price,
parts.picture,
cart.quantity,
cart.total
from cart
join parts on cart.part_id = parts.id;

--add item to cart

insert into cart(quantity, total, part_id)
values(2, 12.44, 1); --can you do math in sql (adding prices to get total?) Or is it better to do in JS?

insert into cart(quantity, total, part_id)
values(1, 16.59, 3);

--remove item from cart

delete from cart
where id = 4

--edit quantity in cart

update cart set quantity=3, total=18.66 where id = 1;  --make sure to do the math to update total in js, before you pass in the new total
