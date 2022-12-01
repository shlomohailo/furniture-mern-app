const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    model: { type: String, required: true },
    orders: { type: Number, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    img: { type: String, required: true }
});
module.exports = mongoose.model("products", productsSchema);
