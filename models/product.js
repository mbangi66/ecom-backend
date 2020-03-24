const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const product = new Schema({
    name:String,
    description:String,
    price:Number,
    //picture:String
})


module.exports = mongoose.model('Product',product)