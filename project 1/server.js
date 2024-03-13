require('dotenv').config();
const express = require('express');
const app = express();           // server create
const morgan = require('morgan');      // log to console
const port = process.env.PORT;


const mongoose = require('mongoose');

app.use(express.json());
app.use(morgan("dev"));

async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);  
}
main()
.then(()=>console.log('Db is connected........'))
.catch(err => console.log(err));

const userRoutes = require('./routes/user.routes');
app.use("/api/user", userRoutes);

const productRoutes = require('./routes/product.routes');
app.use("/api/product", productRoutes);

app.listen(port,()=>{
    console.log('Server is running on port 1000');
});