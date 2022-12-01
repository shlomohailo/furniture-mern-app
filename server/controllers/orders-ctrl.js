const ordersModel = require('../models/model-orders');

const getOrders = async (req, res) => {
    await ordersModel.find({})
        .then((orders, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (orders.length == 0) {
                return res.json({ success: false, message: "No orders available" })
            }
            res.status(200).json({ success: true, orders })
        })
};

const getOrdersById = async (req, res) => {
    await ordersModel.findById(req.params.id)
        .then(orders => {
            if (!orders) {
                return res.json({ success: false, massage: "No orders available" })
            }
            return res.status(200).json({ success: true, orders })
        })
        .catch(error => res.status(400).json({ success: false, error }))
};

const addOrders = async (req, res) => {
    await ordersModel.insertMany(req.body.orders)
        .then((result) => {
            return res.status(200).json({ successes: true, result })
        }).catch(error => res.status(400).json({ successes: false, error }))
};

const updateOrders = async (req, res) => {
    await ordersModel.findByIdAndUpdate(req.params.id, req.body.orders)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
};

const deleteOrders = async (req, res) => {
    await ordersModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
};

module.exports = { getOrders, getOrdersById, addOrders, updateOrders, deleteOrders }