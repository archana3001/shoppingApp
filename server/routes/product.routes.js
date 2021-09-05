const express = require("express");
const productSchema= require("../models/product");
const productrouter = express.Router();
const { check, validationResult } = require('express-validator');

/////////////////Product API

// To get All Products
productrouter.route('/allproduct/:id').get((req, res, next)=>{
    productSchema.find({seller_id : req.params.id},(error, response) => {
        if (error) {
            return next(error)
        } else {
            console.log(response);
            res.status(200).json(response)
        }
    })
})

// To add   Products
productrouter.post('/add-product',[
    check('name').not().isEmpty().isLength({ min: 3 }).withMessage('Name must be atleast 3 characters long'),
    check('category').not().isEmpty().isLength({min: 3}),
    check('price').not().isEmpty().isNumeric(),
    check('quantity').not().isEmpty().isNumeric(),
    check('seller_id').not().isEmpty()
],
(req, res, next) => {
    const errors = validationResult(req);
    //console.log(req);

    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    else {
        console.log("response after adding product",req);
            const product = new productSchema ({
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                quantity: req.body.quantity,
                seller_id: req.body.seller_id
            });
            product.save().then((response) => {
                res.status(201).json({
                    message: "Product  successfully added!",
                    result: response
                });
            }).catch(error => {
                res.status(500).json({
                    error: error
                });
            });
    }
});

productrouter.route('/delete-product/:id').delete((req, res, next) => {
    productSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = productrouter;