// START: Imports
require('dotenv').config()
const express = require('express')
const  morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
const Contact = require('./models/contact')

// HTTPS and SSL
const https = require('https')
const privateKey = fs.readFileSync(process.env.PRIV_KEY)
const certificate = fs.readFileSync(process.env.CERT)
const credentials = { key: privateKey, cert: certificate }

// Python
const { spawnSync } = require('child_process');
const { readFile } = require('fs/promises');
// END: Imports

const app = express()

// START: Global Middleware
// JSON middleware
app.use(express.json())
// CORS middleware
app.use(cors())

// Morgan middleware for logging
morgan.token('body', (req, _) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
// END: Global Middleware


// START: Endpoints
// Post /submit
app.post('/submit', (req, res, next) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  })
  contact.save().then(savedContact => {
    res.json(savedContact)
  }).catch(err => next(err))
})

// PUT /recipe/
app.put("/recipe/", async (req, res, next)=>{
  // Get input from request body
  const inp = req.body.input
  if (!inp) {
    return res.status(400).send('invalid input')
  }

  // Get result from python script
  const pythonProcess = await spawnSync('python3', [
    process.env.RECIPE_PY,
    inp
  ]);
  const result = pythonProcess.stdout?.toString()?.trim();

  // Send HTML or code 500
  if (result === "OK") {
    res.sendFile(process.env.RECIPE_HTML)
  } else {
    res.status(500).send(result)
  }
});
// End: Endpoints


// 404 middleware
const unknownEndpointMiddleware = (request, response) => {response.status(404).send({ error: 'unknown endpoint' })}
app.use(unknownEndpointMiddleware)

// Error handler middleware
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)

// HTTPS server
const httpsServer = https.createServer(credentials, app)
const PORT = process.env.SERVER_PORT
const HOSTNAME = process.env.SERVER_HOSTNAME
httpsServer.listen(PORT, HOSTNAME, () => {
  console.log(`HTTPS server running on port ${PORT}`)
  console.log(`https://${HOSTNAME}:${PORT}`)
})
