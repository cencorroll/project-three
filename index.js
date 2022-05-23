import express from 'express'
import mongoose from 'mongoose'
import router from './config/router.js'
import 'dotenv/config'
import cors from 'cors'

const logger = (req, res, next) => { 
  console.log(`Incoming request on ${req.method} - ${req.url} `)
  next()
}

const startServer = async () => { 
  const app = express()


  app.use(logger)
  app.use(express.json())
  app.use(cors())
  app.use('/api', router)

  await mongoose.connect(process.env.mongoURL)
  app.listen(process.env.PORT, () => console.log(`PORT listening on Port ${process.env.PORT}`))
}

startServer()