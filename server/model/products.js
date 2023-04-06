const mongoose = require("mongoose");

const products = new mongoose.Schema({
    id: {
        type:Number
    },
    title: {
        type:String
    },
    price: {
        type:Number
    },
    description: {
        type:String
    },
    category: {
        type:String
    },
    image: {
        type:String
    },
    rating: {
        type:Object
    }

})

module.exports = mongoose.model("fakeproducts",products);