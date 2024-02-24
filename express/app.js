const express = require('express');
const app = express();           // server create
const morgan = require('morgan');      // log to console

//middleware

let myfun = (req,res,next) => {
    if((req.query.age) >= 18){
        next();
    }else{
        res.send('sorry!!!')
    }
}
app.use(express.json());
app.use(morgan("dev"));

app.get('/',myfun,(req, res) => {
    res.send('Welcome to express.js');
});
app.post('/',(req, res) => {
    res.send('post method');
});


app.listen(3010,()=>{
    console.log('Server is running on port 3010')
});