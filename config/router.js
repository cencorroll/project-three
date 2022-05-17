import express from 'express'
<<<<<<< HEAD
import { addCity, deleteCity, getCities, getSingleCity, updateCity, welcomeMessage } from '../controllers/cities.js'
=======


//import controllers
import { getCities, welcomeMessage } from '../controllers/cities.js'
import { userRegister, userLogin } from '../controllers/auth.js'

>>>>>>> development

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



//Authentication
router.route('/register')
  .post(userRegister)

router.route('/login')
  .post(userLogin)

export default router