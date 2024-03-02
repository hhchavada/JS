const express = require('express');
const UserRoutes = express.Router();
const { addUser,
        getAllUser,
        getUser,
        replaceUser,
        updateUser,
        deleteUser } = require('../controller/user.controller');

// create product
UserRoutes.post('/',addUser);

// all products 
UserRoutes.get('/',getAllUser);

// single product
UserRoutes.get('/single-product',getUser);

// replace singal product
UserRoutes.put('/replace-product', replaceUser);

// update singal product
UserRoutes.patch('update-product',updateUser);

// delete singal product
UserRoutes.delete('/delete-product',deleteUser);

module.exports = UserRoutes;