const express = require('express');
const app = express();           // server create
const morgan = require('morgan');      // log to console
// const products = require('./product.json');
// const User = require('./user.json');

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/harsh');  
}
main()
.then(()=>console.log('Db is connected........'))
.catch(err => console.log(err));

//middleware
app.use(express.json());
app.use(morgan("dev"));

// const productRoutes = require('./routes/product.routes');
// app.use('/products',productRoutes);

// const userRoutes = require('./routes/user.routes');
// app.use("/api/user", userRoutes);


const productsRoutes = require('./routes/products.routes');
app.use("/api/product", productsRoutes);

app.listen(3434,()=>{
    console.log('Server is running on port 3434')
});