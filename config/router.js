import express from 'express'
import { addCity, deleteCity, getCities, getSingleCity, updateCity, welcomeMessage } from '../controllers/cities.js'

const router = express.Router()

router.route('/')
  .get(welcomeMessage)

router.route('/cities')
  .get(getCities)
  .post(addCity)

router.route('/cities/:id')
  .get(getSingleCity)
  .put(updateCity)
  .delete(deleteCity)

export default router