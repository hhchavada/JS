const products = require('../product.json');

exports.addProduct = (req, res) => {
    console.log(req.body);
    const product = req.body;
    products.push(product);
    res.status(201).json({message: 'Product added successfully...'}) 
};

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
};

exports.getProduct = (req, res) => {
    const id = +req.query.id;
    let product = products.find((item)=> item.id === id);
    res.status(200).json(product);
};

exports.replaceProduct = (req,res) =>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products[productIndex];
    products.splice(productIndex, 1,{...req.body});
    res.status(200).json({mwssage : 'product replace successfully'});

};

exports.updateProduct = (req,res) =>{
    const id = +req.body.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products[productIndex];
    let item = products.splice(productIndex,1,{...product, ...req.body});
    res.status(200).json({message : 'product update successfully'});
};

exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    let productIndex = products.findIndex((item)=> item.id === id);
    let product = products.splice(productIndex,1);
    let item = products.splice(productIndex,1);
    res.status(200).json({mwssage : 'product delete successfully'});
};