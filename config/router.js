import express from 'express'
import { addCity, deleteCity, getCities, getSingleCity, updateCity, welcomeMessage } from '../controllers/cities.js'
<<<<<<< HEAD


//import controllers
import { userRegister, userLogin } from '../controllers/auth.js'

=======
import { userRegister, userLogin } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
<<<<<<< HEAD
import { addThingsToDo, deleteThingsToDo, addRestaurant, deleteRestaurant, addHotel, deleteHotel, addHistory, deleteHistory, addReviewCities, deleteReviewCities } from '../controllers/subSchema.js'
=======
import { addThingsToDo, deleteThingsToDo, addRestaurant, deleteRestaurant } from '../controllers/subSchema.js'
>>>>>>> c8b7b75c7af30467fa6234afd7e4234edeb1f8ef
>>>>>>> 59ccd8b51a455bb8dea71499c1c1361f5bf9f157

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


// ?SubSchema ROUTES
//REVIEWS
router.route('/cities/:id/review')
  .post(secureRoute, addReviewCities)

router.route('/cities/:id/review/:reviewId')
  .delete(secureRoute, deleteReviewCities )

//THINGS TO DO
router.route('/cities/:id/fun')
  .post(secureRoute, addThingsToDo)

router.route('/cities/:id/fun/:funId')
  .delete(secureRoute, deleteThingsToDo )

// router.route('/cities/:id/fun/:funId/review')
//   .post(secureRoute, addReviewFun)

// router.route('/cities/:id/fun/:funId/review/:reviewID')
//   .delete(secureRoute, deleteReviewFun)

//RESTAURANTS
router.route('/cities/:id/restaurant')
  .post(secureRoute, addRestaurant)

router.route('/cities/:id/restaurant/:restaurantId')
  .delete(secureRoute, deleteRestaurant )

// router.route('/cities/:id/restaurant/review')
//   .post(secureRoute, addReview)



//HOTELS
router.route('/cities/:id/hotel')
  .post(secureRoute, addHotel)

router.route('/cities/:id/hotel/:hotelId')
  .delete(secureRoute, deleteHotel )

//SHORT HISTORY
router.route('/cities/:id/history')
  .post(secureRoute, addHistory)

router.route('/cities/:id/history/:historyId')
  .delete(secureRoute, deleteHistory )


//Authentication
router.route('/register')
  .post(userRegister)

router.route('/login')
  .post(userLogin)

export default router