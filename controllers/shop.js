const Product = require('../models/product');

exports.getProducts = (req, res, next) => {

}
exports.createProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const product = new Product({
        title: title, 
        description: description, 
        creator: {name: 'Ollie'}
    });
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message:'Product created successfully!',
            post: result
        });
    }).catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
}