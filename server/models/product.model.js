const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Product name is required!"],
        minlength: [2, "Must be longer than 2 characters!"]
    },
    price: {
        type: Number,
        required : [true, "Please enter the price!"],
        min: [.01, "Price must be at least 1 cent"]
    },
    description: { 
        type: String,
        required: [true, "Description is required!"],
        minlength: [2, "Must be longer than 2 characters!"]
    },
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);
