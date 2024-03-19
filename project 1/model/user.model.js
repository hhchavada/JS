const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{type : String},
    lastName: { type: String },
    gender: { type: String, enum: ['Male', 'Female'] },
    email: {type: String},
    password: {type: String},
    profileImage: {type: String},
    age: {type: Number},
    isDelete :{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Users',userSchema);