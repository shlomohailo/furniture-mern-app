const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({

    product: {
        type: String,
        required: true,
    },
    model: {
        type: N,
        required: true,
    },
    orders: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    depth: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    Length: {
        type: String,
        required: true,
    },
    IsItInStock: {
        type: Boolean,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})
