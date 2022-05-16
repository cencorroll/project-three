import express from 'express'
import { getCities, welcomeMessage } from '../controllers/cities.js'

const router = express.Router()

router.route('/')
  .get(welcomeMessage)

router.route('/cities')
  .get(getCities)

export default router