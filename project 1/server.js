require('dotenv').config();
const express = require('express');
const app = express();           // server create
const morgan = require('morgan');      // log to console
const port = process.env.PORT;
const path = require('path');

const mongoose = require('mongoose');

app.use(express.json());
app.use(morgan("dev"));

async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);  
}
main()
.then(()=>console.log('Db is connected........'))
.catch(err => console.log(err));

let imagePath = path.join(__dirname, 'public' , 'images')  ;
app.use('/public/images', express.static(imagePath));

const userRoutes = require('./routes/user.routes');
app.use("/api/user", userRoutes);

const productRoutes = require('./routes/product.routes');
app.use("/api/product", productRoutes);

const cartRoutes = require('./routes/cart.routes');
app.use("/api/cart", cartRoutes);

const orderRoutes = require('./routes/order.routes');
app.use("/api/order", orderRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});