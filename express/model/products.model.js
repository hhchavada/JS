const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title:String,
    description:{
        type:String
    },
    price:{
        type:Number
    },
    category:[{
        type:String
    }],
    isDelete:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('products' , productSchema);