1.select * from employee;

2.select * from employees where jobtitle = 'sales rep' and employeenumber between 1200 and 1500;

3.select * from employees where officeCode >=2 and jobtitle = 'sales rep';

4.select * from customers where country NOT IN  ('USA');

8.select * from customers where city IN ('singapore','liverpool','nyc');

9.select * from customers where contactFirstName = 'smith';

10.select * from employees where officecode in  (1,3,5);

11.select * from customers where creditLimit between 50000 and 95000;

12.select * from employees where officecode not in  (1,3);

13.select * from customers where contactFirstName like 's%';

14.select * from customers where contactFirstName like 's%h';

15.select * from customers where contactFirstName like 's____';

16.select * from customers where contactFirstName like '_________';

17.select * from customers where contactFirstName like 'a%e';

18.select * from customers where contactFirstName like '%ee%';

19.select count(officecode) from employees;  

20.select state, max(creditLimit) from customers group by state;