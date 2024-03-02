const express = require('express');
const productRoutes = express.Router();
const { addProduct,
        getAllProducts,
        getProduct,
        replaceProduct,
        updateProduct,
        deleteProduct } = require('../controller/product.controller');

// create product
productRoutes.post('/',addProduct);

// all products 
productRoutes.get('/',getAllProducts);

// single product
productRoutes.get('/single-product',getProduct);

// replace singal product
productRoutes.put('/replace-product', replaceProduct);

// update singal product
productRoutes.patch('/update-product',updateProduct);

// delete singal product
productRoutes.delete('/delete-product',deleteProduct);

module.exports = productRoutes;