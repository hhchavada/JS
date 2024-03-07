const express = require('express');
const userRoutes = express.Router();
const {adduser} = require('../controller/user.controller');

userRoutes.post ('/add-user', adduser);
userRoutes.get('/get-all-users',getallusers);
userRoutes.get('/get-users',getusers);
userRoutes.put('/update-users',updateusers);
userRoutes.delete('/delete-users',deleteusers);

module.exports = userRoutes;