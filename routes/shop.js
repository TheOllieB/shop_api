const express = require('express');
const { body } = require('express-validator/check');
const router = express.Router();
const shopController = require('../controllers/shop');

//POST /shop/product
router.post('/product', [
    //Back-end validation - trim whitespace and check if its a min of 5 characters!!
    body('title').trim().isLength({ min: 5 }),
    body('content').trim().isLength({ min: 5 })
], shopController.createProduct);

module.exports = router;