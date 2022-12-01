const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({

    saleName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
     
});
module.exports = mongoose.model("sales", salesSchema);