const salesRouter = require('express').Router()
const { getSales, getSalesById, addSales, updateSales, deleteSales } = require('../controllers/sales-ctrl');

salesRouter.get('/', getSales);
salesRouter.get('/byId/:id', getSalesById);
salesRouter.post('/add', addSales);
salesRouter.put('/update/:id', updateSales);
salesRouter.delete('/delete/:id', deleteSales);

module.exports = salesRouter;