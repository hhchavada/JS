const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken')

const {registerUser,
       loginUser,
       getAllUsers,
       getusers,
       updateuser,
       deleteUser
                  } = require('../controller/user.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user',loginUser);
userRoutes.get('/get-All-users', verifyToken, getAllUsers);
userRoutes.get('/get-users', verifyToken, getusers);
userRoutes.put('/update-users', verifyToken, updateuser);
userRoutes.delete('/delete-users', verifyToken, deleteUser);

module.exports = userRoutes;