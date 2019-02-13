--get all cars

select
cars.year,
cars.model,
cars.trim,
parts.name,
parts.description,
parts.price,
parts.picture,
parts.part_num
from cars
join subaru_key on cars.id = subaru_key.car_id
join parts on subaru_key.part_id = parts.id;

--get all products for specific model, trim, and year

select
cars.year,
cars.model,
cars.trim,
parts.name,
parts.description,
parts.price,
parts.picture,
parts.part_num
from cars
join subaru_key on cars.id = subaru_key.car_id
join parts on subaru_key.part_id = parts.id
where cars.model = 'Outback' and cars.trim = '2.5i' and cars.year = '2018';

--get all orders

select
subaru_users.username,
orders.order_id,
orders.price,
parts.name,
ordered_parts.quanity
from subaru_users
join orders on subaru_users.id = orders.user_id
join ordered_parts on orders.order_id = ordered_parts.order_id
join parts on ordered_parts.part_id = parts.id;