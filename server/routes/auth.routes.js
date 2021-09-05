const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const adminSchema = require("../models/admin");

const authorize = require("../middlewares/auth");
const { check, validationResult } = require('express-validator');

// Sign-up
router.post("/register-admin",
    [
        check('name')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('email', 'Email is required')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 20 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 20 }),
            check('admintype', 'Admin type is required').not().isEmpty()
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        else {
            bcrypt.hash(req.body.password, 10).then((hash) => {
                const admin = new adminSchema ({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    admintype: req.body.admintype
                });
                admin.save().then((response) => {
                    res.status(201).json({
                        message: "User successfully created!",
                        result: response
                    });
                }).catch(error => {
                    res.status(500).json({
                        error: error
                    });
                });
            });
        }
    });


// Sign-in
router.post("/admin-signin", (req, res, next) => {
    let getUser;
    adminSchema.findOne({
        email: req.body.email
    }).then(admin => {
        if (!admin) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = admin;
        console.log(getUser);
        return bcrypt.compare(req.body.password, admin.password);
    }).then(response => {
        if (response==false) {
            console.log("response",response);
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            _id: getUser._id
        });
    }).catch(err => {
        console.log("error",err);
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
});

// Get Admin
/*
router.route('/admins').get((req, res) => {
    adminSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})
*/
// Get Single Admin
router.route('/admin-profile/:id').get(authorize, (req, res, next) => {
    adminSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// Update Admin
router.route('/update-admin/:id').put((req, res, next) => {
    adminSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User successfully updated!')
        }
    })
})


// Delete Admin
router.route('/delete-admin/:id').delete((req, res, next) => {
    adminSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


module.exports = router;