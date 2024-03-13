const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: { type: String },
    gender: { type: String, enum: ['Male', 'Female'] },
    email: {type: String},
    password: {type: String},
    age: {type: Number}
});

module.exports = mongoose.model('Users',userSchema);