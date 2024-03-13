const Product = require('../model/product.model');


exports.addProduct = async(req , res) => {
    try {
        const {title,description,price,category} = req.body;
        console.log(req.body);

        let newProduct = await Product.create({
           title,
           description,
           price,
           category
        });
        newProduct.save();
        res.status(201).json({Product: newProduct , Message: 'New product is Added'}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error '})
    }
};

exports.getAllProduct = async(req , res) => {
    try {
        let products = await Product.find({isDelete: false});
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error '})
    }
};

exports.getProduct = async(req , res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findOne({ _id: productId , isDelete: false });
        if(!product){
            return res.status(404).json({Message: 'Product Not found'})
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error '})
    }
};

exports.updateProduct = async(req , res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({Message: 'Product Not found'})
        }
        product = await Product.findByIdAndUpdate(product._id , {$set:{...req.body}} , {new: true});
        res.status(200).json({product , Message: 'Product Updated..'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error '})
    }
}

exports.deleteProduct = async(req , res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({Message: 'Product Not found'})
        }
        product = await Product.findOneAndUpdate({ _id: product._id}, {isDelete: false} , {new: true});
        res.status(200).json({product , Message: 'Product Deleted..'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal Server Error '})
    }
}

