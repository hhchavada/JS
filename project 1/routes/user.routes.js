const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken')

const {registerUser,
       loginUser,
       getAllUsers,
       getusers,
       updateuser,
       deleteUser,
       addNewUser
                  } = require('../controller/user.controller');
const { upload } = require('../helpers/imageUpload');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user',loginUser);
userRoutes.get('/get-All-users', verifyToken, getAllUsers);
userRoutes.get('/get-users', verifyToken, getusers);
userRoutes.put('/update-users', verifyToken, updateuser);
userRoutes.delete('/delete-users', verifyToken, deleteUser);
userRoutes.post('/add-user', upload.single('profileImage'),addNewUser);


module.exports = userRoutes;