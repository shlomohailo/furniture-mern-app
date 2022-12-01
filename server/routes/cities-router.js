const citiesRouter = require('express').Router()
const { getCities, getCitiesById, addCities, updateCities, deleteCities } = require('../controllers/cities-ctrl');

citiesRouter.get('/', getCities);
citiesRouter.get('/byId/:id', getCitiesById);
citiesRouter.post('/add', addCities);
citiesRouter.put('/update/:id', updateCities);
citiesRouter.delete('/delete/:id', deleteCities);

module.exports = citiesRouter;