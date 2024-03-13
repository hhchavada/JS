const express = require('express');
const app = express();           // server create
const morgan = require('morgan');      // log to console
const path = require('path');

//middleware

let myfun = (req,res,next) => {
    if((req.query.age) >= 18){
        next();
    }else{
        res.send('sorry!!!')
    }
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/hello',express.static(path.join (__dirname,'harsh.JPG')));

app.use(morgan("dev"));
// app.use(express.static(path.join (__dirname,'./harsh.JPG')));
app.get('/',(req, res) => {
    res.send('about');
});
app.post('/',(req, res) => {
    console.log(req.body);
    res.send('post method');
});

app.listen(3010,()=>{
    console.log('Server is running on port 3010')
});