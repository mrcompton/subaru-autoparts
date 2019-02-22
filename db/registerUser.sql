insert into subaru_users(email,password)
values(${email},${password})
returning email;