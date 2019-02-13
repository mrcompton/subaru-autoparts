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