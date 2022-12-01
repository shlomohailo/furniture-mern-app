const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({

    citiesName: { type: String, required: true },
    profit: { type: Number, required: true }
});
module.exports = mongoose.model("cities", citiesSchema);