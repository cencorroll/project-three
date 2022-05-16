import express from 'express'
import mongoose from 'mongoose'
import { PORT, mongoURL } from './config/enviroments.js'
import router from './config/router.js'


const logger = (req, res, next) => { 
  console.log(`Incoming request on ${req.method} - ${req.url} `)
  next()
}

const startServer = async () => { 
  const app = express()

  app.use(logger)
  app.use(express.json())
  app.use(router)

  await mongoose.connect(mongoURL)
  app.listen(PORT, () => console.log(`PORT listening on Port ${PORT}`))
}

startServer()