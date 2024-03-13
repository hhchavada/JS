const express = require('express');
const  productsRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken')

const {addProduct , getAllProduct , getProduct , updateProduct , deleteProduct} = require('../controller/product.controller')

productsRoutes.post('/add-product' , addProduct);

productsRoutes.get('/get-all-product' , verifyToken,getAllProduct);

productsRoutes.get('/get-product' ,verifyToken, getProduct);

productsRoutes.put('/update-product' , verifyToken,updateProduct);

productsRoutes.delete('/delete-product' , verifyToken,deleteProduct);

module.exports = productsRoutes;