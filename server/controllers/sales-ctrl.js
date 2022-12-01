const salesModel = require('../models/model-sales');

const getSales = async (req, res) => {
    await salesModel.find({})
        .then((sales, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (sales.length == 0) {
                return res.json({ success: false, message: "No sales available" })
            }
            res.status(200).json({ success: true, sales })
        })
};

const getSalesById = async (req, res) => {
    await salesModel.findById(req.params.id)
        .then(sales => {
            if (!sales) {
                return res.json({ success: false, massage: "No sales available" })
            }
            return res.status(200).json({ success: true, sales })
        })
        .catch(error => res.status(400).json({ success: false, error }))
};

const addSales = async (req, res) => {
    await salesModel.insertMany(req.body.sales)
        .then((result) => {
            return res.status(200).json({ successes: true, result })
        }).catch(error => res.status(400).json({ successes: false, error }))
};

const updateSales = async (req, res) => {
    await salesModel.findByIdAndUpdate(req.params.id, req.body.sales)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
};

const deleteSales = async (req, res) => {
    await salesModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
};

module.exports = { getSales, getSalesById, addSales, updateSales, deleteSales }