const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const port = process.env.PORT;
const mongoAtlas = process.env.MONGO_KEY;
const app = express();

app.use(bodyParser.json()); //parse application/json

//Using CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT', 'PATCH', 'DELETE' );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/shop', shopRoutes);

//middleware for handling errors
app.use((error, req, res, next) => {
    console.log(err);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message});
});

mongoose.connect(
    `mongodb+srv://ollie:${mongoAtlas}@cluster-ojb-lkvl6.mongodb.net/products?retryWrites=true`
    ).then(result => {
        app.listen(port, () => {
            console.log('Conntected to db!');
            console.log(`App listening on port ${port}!`);
        });
    }).catch(err => console.log(err));