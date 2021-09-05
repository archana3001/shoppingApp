const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let customerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
}, {
    collection: 'users'
})

customerSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('customer', customerSchema)