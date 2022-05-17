import express from 'express'
import { addCity, deleteCity, getCities, getSingleCity, updateCity, welcomeMessage } from '../controllers/cities.js'



//import controllers
import { userRegister, userLogin } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { addThingsToDo, deleteThingsToDo, addRestaurant, deleteRestaurant } from '../controllers/subSchema.js'

const router = express.Router()

router.route('/')
  .get(welcomeMessage)

router.route('/cities')
  .get(getCities)
  .post(secureRoute, addCity)

router.route('/cities/:id')
  .get(secureRoute,getSingleCity)
  .put(secureRoute,updateCity)
  .delete(secureRoute,deleteCity)

router.route('/cities/:id/fun')
  .post(secureRoute, addThingsToDo)

router.route('/cities/:id/fun/:funId')
  .delete(secureRoute, deleteThingsToDo )

router.route('/cities/:id/restaurant')
  .post(secureRoute, addRestaurant)

router.route('/cities/:id/restaurant/:restaurantId')
  .delete(secureRoute, deleteRestaurant )

//Authentication
router.route('/register')
  .post(userRegister)

router.route('/login')
  .post(userLogin)

export default router