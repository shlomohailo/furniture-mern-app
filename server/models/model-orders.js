const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderNumber: { type: Number, required: true },
    orderDate: { type: Date, required: true },
    sum: { type: String, required: true },
    itemsNumber: { type: Number, required: true }
});
module.exports = mongoose.model("orders", orderSchema);