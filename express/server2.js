const express = require('express');
const app = express();           // server create
const morgan = require('morgan');      // log to console
const products = require('./product.json');
const user = require('./user.json');


//middleware
app.use(express.json());
app.use(morgan("dev"));

const productRoutes = require('./routes/product.routes');
app.use('/products',productRoutes);

const userRoutes = require('./routes/user.routes');
app.use('/user',userRoutes);

app.listen(3434,()=>{
    console.log('Server is running on port 3434')
});