const ordersRouter = require('express').Router()
const { getOrders, getOrdersById, addOrders, updateOrders, deleteOrders } = require('../controllers/orders-ctrl');

ordersRouter.get('/', getOrders);
ordersRouter.get('/byId/:id', getOrdersById);
ordersRouter.post('/add', addOrders);
ordersRouter.put('/update/:id', updateOrders);
ordersRouter.delete('/delete/:id', deleteOrders);

module.exports = ordersRouter;