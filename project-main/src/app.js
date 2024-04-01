const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const port=process.env.PORT;

app.use(express.json());

const adminsRoutes = require('./routes/admin/index.routes');
app.use('/api/admin' , adminsRoutes);

const userRoutes = require('./routes/user/index.routes');
app.use('/api/user' , userRoutes);

app.listen(port , async() => {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('DB is Connected'))
    .catch(err => console.log(err.message));
    console.log(`server is start at http://localhost:${port}`);
})