const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let productSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },price:{
    type: Number,
    required: true
    },quantity:{
        type: Number,
        require: true
    },
    seller_id:{
    type: String,
    required: true
    }
},{
    collection: 'product-details'
})

productSchema.plugin(uniqueValidator,{ message: 'Product not found.' });
module.exports = mongoose.model('product', productSchema)
