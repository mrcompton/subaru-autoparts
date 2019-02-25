select
cars.year,
cars.model,
cars.trim,
parts.id,
parts.name,
parts.description,
parts.price,
parts.picture,
parts.part_num
from cars
join subaru_key on cars.id = subaru_key.car_id
join parts on subaru_key.part_id = parts.id
where cars.year = ${year} and cars.model = ${model} and cars.trim = ${trim};