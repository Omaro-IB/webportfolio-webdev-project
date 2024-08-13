const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const url = process.env.MONGODB_URI

// Wait for database to connect, logging an error if there is a problem
mongoose.connect(url)
  .then(_ => {    console.log('connected to MongoDB')  })
  .catch(error => {    console.log('error connecting to MongoDB:', error.message)  })

// Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
})

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Contact', contactSchema)