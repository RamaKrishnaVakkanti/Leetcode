# Write your MySQL query statement below
# select salary as SecondHighestSalary from (select * from employee order by salary DESC limit 2) as temp order by salary ASC limit 1;


# select if(salary is not null, salary, null) as SecondHighestSalary from employee order by salary DESC limit 1 offset 1;

select(select distinct salary from employee order by salary desc limit 1 offset 1)as SecondHighestSalary;