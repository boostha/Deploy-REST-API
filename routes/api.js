// Import model
const legoModel = require('./../models/lego')

// Use Express router
const express = require('express')
const router = express.Router()

// GET request for entire gallery
router.get('/lego', async (req, res) => {
  
  try {
    const legoGallery = await legoModel.find()
    res.send(legoGallery)
  } catch {
    res.status(404).send({error: 'File Not Found'})
  }
})


// GET request for individual gallery items
router.get('/lego/:id', async (req, res) => {
  
  try {
    const legoID = await legoModel.findOne({ id: req.params.id })
    if(legoID === null) {
      throw new Error('File Not Found')
    }
    res.send(legoID)
  } catch(err) {
    res.status(404).send({error: 'File Not Found'})
  }
})


// export module
module.exports = router