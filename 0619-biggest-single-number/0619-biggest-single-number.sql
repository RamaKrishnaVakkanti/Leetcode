# Write your MySQL query statement below
# select max(num) as num from mynumbers where num in(select num from mynumbers group by num having count(num) = 1);


select max(num) as num from Mynumbers where num in (select num from myNumbers group by num having count(num)=1);