import express from 'express'
import { addCity, deleteCity, getCities, getSingleCity, updateCity, welcomeMessage } from '../controllers/cities.js'
import { userRegister, userLogin } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/')
  .get(welcomeMessage)

router.route('/cities')
  .get(getCities)
  .post(secureRoute, addCity)

router.route('/cities/:id')
  .get(secureRoute, getSingleCity)
  .put(secureRoute, updateCity)
  .delete(secureRoute, deleteCity)

//Authentication
router.route('/register')
  .post(userRegister)

router.route('/login')
  .post(userLogin)

export default router