/***********************/
/* Connect to Database */
/***********************/

const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });

/****************************/
/* Read array from database */
/****************************/

// Define schema

const legoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  pathURL: String,
  linkURL: String,
  credit: String,
  dateCreated: String,
  creditURL: String
})

// Compile schema

const Lego = mongoose.model('Lego', legoSchema)

module.exports = Lego