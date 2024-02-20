const http = require('http');
const fs = require('fs');
// const data = fs.readFileSync('./hello.json','utf-8');
const data = require('./hello.json');

const app = http.createServer();

app.on('request',(req,res)=>{
    let items = req.url.split('/');
    console.log(items); 
    
    if(items[1] === ''){
        res.setHeader('Content-type','text/html');
        res.write('<h1 style="color:blue">Welcome To NODEJS</h1>');
        res.end();
    }
   else if(items[1] === 'user'){
        res.setHeader('Content-type','text/html');
        res.write('<h1 style="color:green">Welcome To User Page</h1>');
        res.end();
    }
   else if(items[1] === 'product'){
        res.setHeader('Content-type','application/json');
        if(items.length === 3){
            let id = Number(items[2]);
            let products = data[id-1];
            res.end(JSON.stringify(products));
        }else
        res.end(JSON.stringify(data));
    }
    else{
        res.setHeader('Content-type','text/html');
        res.write('<h1 style="color:red">Page Not Found</h1>');   
        res.end(); 
    }
})

app.listen(2222,() => {
    console.log('Server Start at port http://localhost:2222');
});

