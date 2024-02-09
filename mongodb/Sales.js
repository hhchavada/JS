db.createCollection("sales")
db.sales_master.insertMany([
    {
        Salesmanno: 'S00001',
        Salesmanname: 'Aman',
        Address1: 'A/14',
        Address2: 'Worli',
        City: 'Maharastra',
        Pincode: 400002,
        State: 'Mumbai',
        Salamt: 3000,
        Tgttoget: 100,
        Ytdsales: 50,
        Remarks: 'Good'
    },
    {
        Salesmanno: 'S00002',
        Salesmanname: 'Omkar',
        Address1: '65',
        Address2: 'Nariman',
        City: 'Mumbai',
        Pincode: 400001,
        State: 'Maharastra',
        Salamt: 3000,
        Tgttoget: 200,
        Ytdsales: 100,
        Remarks: 'Good'
    },
    {
        Salesmanno: 'S00003',
        Salesmanname: 'Raj',
        Address1: 'P-7',
        Address2: 'Bandra',
        City: 'Mumbai',
        Pincode: 400032,
        State: 'Maharastra',
        Salamt: 3000,
        Tgttoget: 200,
        Ytdsales: 100,
        Remarks: 'Good'
    },
    {
        Salesmanno: 'S00004',
        Salesmanname: 'Ashish',
        Address1: 'A/5',
        Address2: 'Juhu',
        City: 'Mumbai',
        Pincode: 400044,
        State: 'Maharastra',
        Salamt: 3000,
        Tgttoget: 200,
        Ytdsales: 150,
        Remarks: 'Good'
    }
])

db.sales_master.find()

// [
//     {
//       _id: ObjectId('65b0df032f84ddecea033fb0'),
//       Salesmanno: 'S00001',
//       Salesmanname: 'Aman',
//       Address1: 'A/14',
//       Address2: 'Worli',
//       City: 'Maharastra',
//       Pincode: 400002,
//       State: 'Mumbai',
//       Salamt: 3000,
//       Tgttoget: 100,
//       Ytdsales: 50,
//       Remarks: 'Good'
//     },
//     {
//       _id: ObjectId('65b0df032f84ddecea033fb1'),
//       Salesmanno: 'S00002',
//       Salesmanname: 'Omkar',
//       Address1: '65',
//       Address2: 'Nariman',
//       City: 'Mumbai',
//       Pincode: 400001,
//       State: 'Maharastra',
//       Salamt: 3000,
//       Tgttoget: 200,
//       Ytdsales: 100,
//       Remarks: 'Good'
//     },
//     {
//       _id: ObjectId('65b0df032f84ddecea033fb2'),
//       Salesmanno: 'S00003',
//       Salesmanname: 'Raj',
//       Address1: 'P-7',
//       Address2: 'Bandra',
//       City: 'Mumbai',
//       Pincode: 400032,
//       State: 'Maharastra',
//       Salamt: 3000,
//       Tgttoget: 200,
//       Ytdsales: 100,
//       Remarks: 'Good'
//     },
//     {
//       _id: ObjectId('65b0df032f84ddecea033fb3'),
//       Salesmanno: 'S00004',
//       Salesmanname: 'Ashish',
//       Address1: 'A/5',
//       Address2: 'Juhu',
//       City: 'Mumbai',
//       Pincode: 400044,
//       State: 'Maharastra',
//       Salamt: 3000,
//       Tgttoget: 200,
//       Ytdsales: 150,
//       Remarks: 'Good'
//     }
//   ]