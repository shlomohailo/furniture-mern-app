const usersRouter = require('express').Router()
const { getFurniture,getFurnitureById,addFurniture,updateFurniture,deleteFurniture } = require('../controllers/furniture-ctrl');

usersRouter.get('/', getFurniture);
usersRouter.get('/byId/:id', getFurnitureById);
usersRouter.post('/add', addFurniture);
usersRouter.put('/update/:id', updateFurniture);
usersRouter.delete('/delete/:id', deleteFurniture);

module.exports = usersRouter