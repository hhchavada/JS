create table client_master(
    clientno varchar(6) primary key,
    name varchar(15) not null,
    address1 varchar(30),
    address2 varchar(30),
    city varchar(10),
    pincode int,
    state varchar(15),
    baldue int);

 insert into client_master values
    ("C00001","ivan bayross", "A/14","worli", "mumbai", 400054, "maharashtra", 15000),
    ("C00002","mamta muzumdar","65", "nariman","madras", 780001, "tamil nadu", 0),
    ("C00003","chhaya banker", 'P-7',"bandra","mumbai", 400057, "maharashtra", 5000),
    ("C00004","ashwini joshi", "A/7","juhu","banglor", 560001, "karnataka", 0),
    ("C00005","hansal colaco", "66","bandra","mumbai", 400060, "maharashtra", 2000),
    ("C00006","deepak sharma", "68","anomus","mangalore", 560050, "karnataka", 0);

create table product_master(
    productno varchar(6) primary key,
    description varchar(30) not null, 
    profitpercent int not null, 
    unitmeasure varchar(20) not null,
    qtyonhand int not null, 
    reorderlvl int not null, 
    sellprice int not null, 
    costprice int not null);

insert into product_master values
("P0001","t-shirt",5,"piece",200,50,350,250),
("P0345","shirt",6,"piece",150,50,500,350),
("P06734","cotton jeans",5,"piece",100,20,600,450),
("P07865","jeans",5,"piece",100,20,750,500),
("P07868","trousers",2,"piece",150,50,850,550),
("P07885","pull overs",2.5,"piece",80,30,700,450),
("P07965","denim shirts",4,"piece",100,40,350,250),
("P07975","lycra tops",5,"piece",70,30,300,175),
("P08865","skirts",5,"piece",75,30,450,300);

create table salesman_master(
    salesmanno varchar(6) primary key,
    salesmanname varchar(20) not null,
    address1 varchar(30) not null,
    address2 varchar(30),
    city varchar(20),
    pincode int,
    state varchar(20),
    salamt int not null,
    tgttoget int not null,
    ytdsales int not null,
    remarks varchar(60));


insert into salesman_master values
("S00001","aman","14","worli","mumbai",400002,"maharashtra",3000,100,50,"good"),
("S00002","omkar","65","nariman","mumbai",400001,"maharashtra",3000,200,100,"good"),
("S00003","raj","7","bandra","mumbai",400032,"maharashtra",3000,200,100,"good"),
("S00004","ashish","5","juhu","mumbai",400044,"maharashtra",3500,200,150,"good");


create table sales_order(
    orderno varchar(6),
    clientno varchar(6),
    orderdate date not null,
    delyaddr varchar(25),
    salesmanno varchar(6),
    delytype char(1),
    billyn char(1),
    delydate date,
    ordersatuts varchar(10),
    primary key (orderno),
    foreign key (clientno) references client_master(clientno),
    foreign key (salesmanno) references salesman_master(salesmanno)
    );



insert into sales_order values
("O19001","C00001","04-06-12","worli,mumbai","S00001","F","N","04-06-20","in process"),
("O19002","C00002","04-06-25","nariman,mumbai","S00002","P","N","04-06-27","cancelled"),
("O46865","C00003","04-02-18","bandra,mumbai","S00003","F","Y","04-02-20","fulfilled"),
("O19003","C00001","04-03-03","worli,mumbai","S00001","F","Y","04-03-07","fulfilled"),
("O46866","C00004","04-05-20","juhu,banglor","S00002","P","N","04-05-22","cancelled"),
("O19008","C00005","04-05-24","bandra,mumbai","S00004","F","N","04-05-26","in process");


create table sales_order_details(
    orderno varchar(6),
    productno varchar(6),
    qtyordered int,
    qtydisp int,
    productrate int,
    foreign key (orderno) references sales_order(orderno),
    foreign key (productno) references product_master(productno)
);

insert into sales_order_details values
("O19001","P0001",4,4,525),
("O19001","P07965",2,1,8400),
("O19001","P07885",2,1,5250),
("O19002","P0001",10,0,525),
("O46865","P07868",3,3,3150),
("O46865","P07885",3,1,5250),
("O46865","P0001",10,10,525),
("O46865","P0345",4,4,1050),
("O19003","P0345",2,2,1050),
("O19003","P06734",1,1,12000),
("O46866","P07965",1,0,8400),
("O46866","P07975",1,0,1050),
("O19008","P0001",10,5,525),
("O19008","P07975",5,3,1050);