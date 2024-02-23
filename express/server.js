const express = require('express');
const server = express();
const path = require('path');

server.post('/', (req, res) => {
    res.send('post method');
});
server.get('/', (req, res) => {
    res.end('Welcome to express.js');
});
server.put('/', (req, res) => {
    res.status(400).json({message: 'put method call'});
});
server.patch('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'abc.txt'));
});
server.delete('/', (req, res) => {
    res.sendStatus(201);
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000')
});
