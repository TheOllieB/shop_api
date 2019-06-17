const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Products Model
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);