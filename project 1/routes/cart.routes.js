const express = require('express');
const cartRoutes = express.Router();
const { verifyToken } = require('../helpers/verifyToken');
const {
    addToCart,
    getAllCart,
    getCart
} = require('../controller/cart.controller');

cartRoutes.post('/add-cart',verifyToken,addToCart);
cartRoutes.get('/get-All-cart',verifyToken,getAllCart);
cartRoutes.get('/get-carts',verifyToken,getCart);

module.exports = cartRoutes;