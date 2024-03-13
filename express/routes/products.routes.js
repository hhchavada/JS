const express = require('express');
const  productsRoutes = express.Router();

const {addProduct , getAllProduct , getProduct , updateProduct , deleteProduct} = require('../controller/products.controller')

productsRoutes.post('/add-product' , addProduct);

productsRoutes.get('/get-all-product' , getAllProduct);

productsRoutes.get('/get-product' , getProduct);

productsRoutes.put('/update-product' , updateProduct);

productsRoutes.delete('/delete-product' , deleteProduct);

module.exports = productsRoutes;