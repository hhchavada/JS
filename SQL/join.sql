select so.* , cm.name from sales_order so 
inner join client_master cm on cm.clientno = so.clientno;

O19001	C00001	2012-06-04	worli,mumbai	  S00001	F	N	2020-06-04	in process	ivan bayross
O19002	C00002	2025-06-04	nariman,mumbai	S00002	P	N	2027-06-04	cancelled 	mamta muzumdar
O19003	C00001	2003-03-04	worli,mumbai  	S00001	F	Y	2007-03-04	fulfilled 	ivan bayross
O19008	C00005	2024-05-04	bandra,mumbai 	S00004	F	N	2026-05-04	in process	hansal colaco
O46865	C00003	2018-02-04	bandra,mumbai 	S00003	F	Y	2020-02-04	fulfilled 	chhaya banker
O46866	C00004	2020-05-04	juhu,banglor  	S00002	P	N	2022-05-04	cancelled 	ashwini joshi


select so.* , cm.name from sales_order so 
left join client_master cm on cm.clientno = so.clientno;

O19001	C00001	2012-06-04	worli,mumbai	  S00001	F	N	2020-06-04	in process	ivan bayross
O19002	C00002	2025-06-04	nariman,mumbai	S00002	P	N	2027-06-04	cancelled 	mamta muzumdar
O19003	C00001	2003-03-04	worli,mumbai    S00001	F	Y	2007-03-04	fulfilled 	ivan bayross
O19008	C00005	2024-05-04	bandra,mumbai 	S00004	F	N	2026-05-04	in process	hansal colaco
O46865	C00003	2018-02-04	bandra,mumbai 	S00003	F	Y	2020-02-04	fulfilled 	chhaya banker
O46866	C00004	2020-05-04	juhu,banglor  	S00002	P	N	2022-05-04	cancelled 	ashwini joshi


select so.* , cm.name from sales_order so 
right join client_master cm on cm.clientno = so.clientno;

O19001	C00001	2012-06-04	worli,mumbai	  S00001	F	N	2020-06-04	in process	ivan bayross
O19003	C00001	2003-03-04	worli,mumbai	  S00001	F	Y	2007-03-04	fulfilled 	ivan bayross
O19002	C00002	2025-06-04	nariman,mumbai	S00002	P	N	2027-06-04	cancelled 	mamta muzumdar
O46865	C00003	2018-02-04	bandra,mumbai	  S00003	F	Y	2020-02-04	fulfilled 	chhaya banker
O46866	C00004	2020-05-04	juhu,banglor  	S00002	P	N	2022-05-04	cancelled 	ashwini joshi
O19008	C00005	2024-05-04	bandra,mumbai	  S00004	F	N	2026-05-04	in process	hansal colaco
null    null    nul         null            null    null    null    null        deepak sharma


select so.* , cm.name from sales_order so 
inner join client_master cm on cm.clientno = so.clientno
inner join salesman_master sm on sm.salesmanno = so.salesmanno;

O19001	C00001	2012-06-04	worli,mumbai  	S00001	F	N	2020-06-04	in process	ivan bayross
O19003	C00001	2003-03-04	worli,mumbai  	S00001	F	Y	2007-03-04	fulfilled 	ivan bayross
O19002	C00002	2025-06-04	nariman,mumbai	S00002	P	N	2027-06-04	cancelled 	mamta muzumdar
O46866	C00004	2020-05-04	juhu,banglor  	S00002	P	N	2022-05-04	cancelled 	ashwini joshi
O46865	C00003	2018-02-04	bandra,mumbai 	S00003	F	Y	2020-02-04	fulfilled 	chhaya banker
O19008	C00005	2024-05-04	bandra,mumbai 	S00004	F	N	2026-05-04	in process	hansal colaco


-- a.find out products,which have been sold to "ivan bayross"
select  client_master.NAME,product_master.description,sales_order.orderno
from sales_order_details 
inner join sales_order  on sales_order_details.orderno = sales_order.orderno
inner join client_master on sales_order.clientno =  client_master.clientno
inner join  product_master on sales_order_details.productNo = product_master.productNo where name = "ivan bayross";

 =>ivan bayross 	t-shirt     	O19001
   ivan bayross 	denim shirts	O19001
   ivan bayross 	pull overs  	O19001
   ivan bayross 	shirt	        O19003
   ivan bayross 	cotton jeans	O19003


-- b.find out the products and their quantites that will have to be deliverd in the current month.
select  sales_order.DELYDATE,product_master.description,sales_order_details.qtyordered
from sales_order_details 
inner join sales_order  on sales_order_details.ORDERNO = sales_order.ORDERNO
inner join client_master on sales_order.CLIENTNO =  client_master.CLIENTNO
inner join  product_master on sales_order_details.productNo = product_master.productNo where delydate = "2002-06-20" ;

 =>2004-06-20	t-shirt     	4
   2004-06-20	denim shirts	2
   2004-06-20	pull overs	  2


-- c.List the productno and description of constantly sold (i.e.rapidly moving) products.
select  distinct product_master.productno,description  
from sales_order_details 
inner join  product_master on sales_order_details.productNo = product_master.productNo ;

 => P0001	  t-shirt
    P0345 	shirt
    P06734	cotton jeans
    P07868	trousers
    P07885	pull overs
    P07965	denim shirts
    P07975	lycra tops


--d.find the names of clients who have purchased trousers
select client_master.name , product_master.description 
from sales_order_details 
inner join sales_order  on sales_order_details.orderno = sales_order.orderno 
inner join client_master on sales_order.clientno =  client_master.clientno
inner join  product_master on sales_order_details.productNo = product_master.productNo where description = "trousers";

 =>chhaya banker	trousers


-- e.list of the products and orders from customers who have ordered less than 5 units of "pull overs"
select client_master.name , product_master.description ,sales_order_details.qtyordered
from sales_order_details 
inner join sales_order  on sales_order_details.orderno = sales_order.orderno 
inner join client_master on sales_order.clientno =  client_master.clientno
inner join  product_master on sales_order_details.productNo = product_master.productNo where qtyordered < 5 and description ="pull overs";

 =>ivan bayross 	pull overs	2
   chhaya banker	pull overs	3


-- f.find the products and their quantities for ther orders placed by "ivan byross" and "mamta muzumdar"
select client_master.name , product_master.description ,sales_order_details.qtyordered
from sales_order_details 
inner join sales_order  on sales_order_details.orderno = sales_order.orderno
inner join client_master on sales_order.clientno =  client_master.clientno
inner join  product_master on sales_order_details.productNo = product_master.productNo where name  in ("Ivan bayross" ,"mamta muzumdar");

 =>ivan bayross	   t-shirt	       4
   ivan bayross	   denim shirts	   2
   ivan bayross	   pull overs	     2
   ivan bayross	   shirt           2
   ivan bayross	   cotton jeans	   1
   mamta muzumdar  t-shirt	       10


-- G.find the products and their quantites for the orders placed by clientno "c00001" and "c00002"
select client_master.clientno , product_master.description ,sales_order_details.qtyordered
from sales_order_details 
inner join sales_order  on sales_order_details.orderno = sales_order.orderno 
inner join client_master on sales_order.clientno =  client_master.clientno
inner join  product_master on sales_order_details.productNo = product_master.productNo where client_master.clientno in ("c00001" ,"c00002");
  
  =>C00001	t-shirt	      4
    C00001	denim shirts 	2
    C00001	pull overs  	2
    C00001	shirt       	2
    C00001	cotton jeans	1
    C00002	t-shirt	      10