db.createCollection("product")

db.product_master.insertMany([
    {

        ProductNo: 'P00001',
        Description: 'T-Shirts',
        Profitpercent: 5,
        Unitmeasure: 'Piece',
        Qtyonhand: 200,
        Reorderlvl: 50,
        Sellprice: 350,
        Constprice: 250
    },
    {
        ProductNo: 'P0345',
        Description: 'Shirts',
        Profitpercent: 6,
        Unitmeasure: 'Piece',
        Qtyonhand: 150,
        Reorderlvl: 50,
        Sellprice: 500,
        Constprice: 350
    },
    {
        ProductNo: 'P06734',
        Description: 'Cotton Jeans',
        Profitpercent: 5,
        Unitmeasure: 'Piece',
        Qtyonhand: 100,
        Reorderlvl: 20,
        Sellprice: 600,
        Constprice: 450
    },
    {
        ProductNo: 'P07865',
        Description: 'Jeans',
        Profitpercent: 5,
        Unitmeasure: 'Piece',
        Qtyonhand: 100,
        Reorderlvl: 20,
        Sellprice: 750,
        Constprice: 500
    },
    {
        ProductNo: 'P07868',
        Description: 'Trousers',
        Profitpercent: 2,
        Unitmeasure: 'Piece',
        Qtyonhand: 150,
        Reorderlvl: 50,
        Sellprice: 850,
        Constprice: 550
    },
    {
        ProductNo: 'P07885',
        Description: 'Pull Overs',
        Profitpercent: 2,
        Unitmeasure: 'Piece',
        Qtyonhand: 80,
        Reorderlvl: 30,
        Sellprice: 700,
        Constprice: 450
    },
    {
        ProductNo: 'P07965',
        Description: 'Denim Shirts',
        Profitpercent: 4,
        Unitmeasure: 'Piece',
        Qtyonhand: 100,
        Reorderlvl: 350,
        Constprice: 250
    },
    {
        ProductNo: 'P07975',
        Description: 'Lycra Tops',
        Profitpercent: 5,
        Unitmeasure: 'Piece',
        Qtyonhand: 70,
        Reorderlvl: 30,
        Sellprice: 300,
        Constprice: 175
    },
    {
        ProductNo: 'P08865',
        Description: 'Skirts',
        Profitpercent: 5,
        Unitmeasure: 'Piece',
        Qtyonhand: 75,
        Reorderlvl: 30,
        Sellprice: 450,
        Constprice: 300
    }
])


db.product_master.find()

// [
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033fa7'),
//       ProductNo: 'P00001',
//       Description: 'T-Shirts',
//       Profitpercent: 5,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 200,
//       Reorderlvl: 50,
//       Sellprice: 350,
//       Constprice: 250
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033fa8'),
//       ProductNo: 'P0345',
//       Description: 'Shirts',
//       Profitpercent: 6,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 150,
//       Reorderlvl: 50,
//       Sellprice: 500,
//       Constprice: 350
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033fa9'),
//       ProductNo: 'P06734',
//       Description: 'Cotton Jeans',
//       Profitpercent: 5,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 100,
//       Reorderlvl: 20,
//       Sellprice: 600,
//       Constprice: 450
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033faa'),
//       ProductNo: 'P07865',
//       Description: 'Jeans',
//       Profitpercent: 5,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 100,
//       Reorderlvl: 20,
//       Sellprice: 750,
//       Constprice: 500
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033fab'),
//       ProductNo: 'P07868',
//       Description: 'Trousers',
//       Profitpercent: 2,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 150,
//       Reorderlvl: 50,
//       Sellprice: 850,
//       Constprice: 550
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033fac'),
//       ProductNo: 'P07885',
//       Description: 'Pull Overs',
//       Profitpercent: 2,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 80,
//       Reorderlvl: 30,
//       Sellprice: 700,
//       Constprice: 450
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033fad'),
//       ProductNo: 'P07965',
//       Description: 'Denim Shirts',
//       Profitpercent: 4,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 100,
//       Reorderlvl: 350,
//       Constprice: 250
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033fae'),
//       ProductNo: 'P07975',
//       Description: 'Lycra Tops',
//       Profitpercent: 5,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 70,
//       Reorderlvl: 30,
//       Sellprice: 300,
//       Constprice: 175
//     },
//     {
//       _id: ObjectId('65b0dbad2f84ddecea033faf'),
//       ProductNo: 'P08865',
//       Description: 'Skirts',
//       Profitpercent: 5,
//       Unitmeasure: 'Piece',
//       Qtyonhand: 75,
//       Reorderlvl: 30,
//       Sellprice: 450,
//       Constprice: 300
//     }
//   ]