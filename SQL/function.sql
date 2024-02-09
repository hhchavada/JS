select INITCAP(s) from client_master;      --NOT EXIST
select UPPER(name) from client_master;
+----------------+
| UPPER(name)    |
+----------------+
| IVAN BAYROSS   |
| MAMTA MUZUMDAR |
| CHHAYA BANKER  |
| ASHWINI JOSHI  |
| HANSAL COLACO  |
| DEEPAK SHARMA  |
+----------------+

select LOWER(name) from client_master;
+----------------+
| LOWER(name)    |
+----------------+
| ivan bayross   |
| mamta muzumdar |
| chhaya banker  |
| ashwini joshi  |
| hansal colaco  |
| deepak sharma  |
+----------------+

select concat(address1,address2) from client_master;
+---------------------------+
| concat(address1,address2) |
+---------------------------+
| A/14worli                 |
| 65nariman                 |
| P-7bandra                 |
| A/7juhu                   |
| 66bandra                  |
| 68anomus                  |
+---------------------------+

select ASIN(10) from client_master;
+----------+
| ASIN(10) |
+----------+
|     NULL |
+----------+

select COSH(25) from client_master;     -- NOT EXIST