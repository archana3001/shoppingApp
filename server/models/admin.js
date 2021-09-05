const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let adminSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },admintype:{
        type: String
    }
}, {
    collection: 'seller-info'
})



adminSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('admin', adminSchema)