-- select * from customers;

-- WHERE CLAUSE
 
-- select * from  customers where country = 'USA';
-- select * from  customers where customerNumber < 200;
-- select * from  customers where customerNumber > 200;
-- select * from  customers where country != 'USA';
-- select * from  customers where country <> 'USA';
-- select * from  customers where customerNumber <= 200;
-- select * from  customers where customerNumber >= 200;

-- ORDER BY 

-- select * from customers order by country ;
-- select * from customers order by country desc ;
-- select * from customers order by country desc , city asc;

-- IN & NOT  OPERATOR 

-- select * from customers where country in ('USA','spain','denmark');
-- select * from customers where country  not in ('USA','spain','denmark');

-- BETWEEN OPERATOR

-- select * from customers where customerNumber between 200 and 400 ;  
-- select * from customers where customerNumber not between 200 and 400 ; 

-- LIMIT

-- select * from  customers limit 15; 

-- DISTINCT STATEMENT

-- select distinct contry from customers;

-- GROUP BY

-- select country, count(customerName) from customers group by country;
-- select count(creditlimit) from customers;    
-- select max(creditlimit) from customers;
-- select min(creditlimit) from customers;
-- select sum(creditlimit) from customers;
-- select avg(creditlimit) from customers;

-- LIKE OPERATOR 
-- select * from customers where customerName like 'p%';
-- select * from customers where customerName like '%o';
-- select * from customers where customerName like '_a%';
-- select * from customers where customerName like '%a_';
-- select * from customers where customerName like '%p%';
-- select * from customers where customerName like '_a__';
-- select * from customers where customerName like 'p%o';