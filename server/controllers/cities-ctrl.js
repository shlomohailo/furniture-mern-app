const citiesModel = require('../models/model-cities');

const getCities = async (req, res) => {
    await citiesModel.find({})
        .then((cities, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (cities.length == 0) {
                return res.json({ success: false, message: "No cities available" })
            }
            res.status(200).json({ success: true, cities })
        })
};

const getCitiesById = async (req, res) => {
    await citiesModel.findById(req.params.id)
        .then(cities => {
            if (!cities) {
                return res.json({ success: false, massage: "No cities available" })
            }
            return res.status(200).json({ success: true, cities })
        })
        .catch(error => res.status(400).json({ success: false, error }))
};

const addCities = async (req, res) => {
    await citiesModel.insertMany(req.body.cities)
        .then((result) => {
            return res.status(200).json({ successes: true, result })
        }).catch(error => res.status(400).json({ successes: false, error }))
};

const updateCities = async (req, res) => {
    await citiesModel.findByIdAndUpdate(req.params.id, req.body.cities)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
};

const deleteCities = async (req, res) => {
    await citiesModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
};

module.exports = { getCities, getCitiesById, addCities, updateCities, deleteCities }