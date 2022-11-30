const furnitureModel = require('../models/model-furniture');

const getFurniture = async(req, res) => {
    await furnitureModel.find().then((result) => {
      return result.length == 0
        ? res.status(300).json({ successes: true, msg: "no furniture was found" })
        : res.status(200).json({ successes: true }, result);
    })
  .catch (error=> res.status(400).json({ successes: false , error})) 
};

const getFurnitureById = async(req,res) => {
    await furnitureModel.findById(req.params.id)
    .then(result => {
        return !result ?
        res.status(200).json({ successes: true }, result)
        :  res.status(300).json({ successes: false, msg: "no furniture was found" })
    }).catch(error=> res.status(400).json({ successes: false , error})) 
};

const addFurniture = async(req,res) => {
    await furnitureModel.insertMany(req.body.furniture)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

const updateFurniture = async(req,res) => {
    await furnitureModel.findByIdAndUpdate(req.params.id, req.body.furniture)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

const deleteFurniture = async(req,res) => {
    await furnitureModel.findByIdAndRemove(req.params.id, req.body.furniture)
    .then((result)=>{
        return res.status(200).json({successes: true, result})
    }).catch(error=> res.status(400).json({ successes: false , error}))
};

module.exports = {getFurniture,getFurnitureById,addFurniture,updateFurniture,deleteFurniture}