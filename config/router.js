import express from 'express'


import { secureRoute } from './secureRoute.js'

//import controllers
import { userRegister, userLogin } from '../controllers/auth.js'
import { getAllThingsToDo, getSingleThingsTodo , addThingsToDo, deleteThingsToDo, addRestaurant, deleteRestaurant, getAllHotels, getSingleHotels, addHotel, deleteHotel, getHistory, addHistory, deleteHistory, addReviewCities, deleteReviewCities, getSingleRestaurant, getAllRestaurants, addRestaurantReview, addHotelReview, addFunReview } from '../controllers/subSchema.js'
import { addCity, deleteCity, getCities, getSingleCity, updateCity, welcomeMessage } from '../controllers/cities.js'

import { getProfile } from '../controllers/users.js'

const router = express.Router()

router.route('/')
  .get(welcomeMessage)

router.route('/cities')
  .get(getCities)
  .post(secureRoute, addCity)

router.route('/cities/:id')
  .get(getSingleCity)
  // .put(secureRoute, updateCity)
  .delete(secureRoute, deleteCity)
router.route('/cities/:id/edit')
  .put(secureRoute, updateCity)


// ?SubSchema ROUTES
//REVIEWS
router.route('/cities/:id/reviews')
  // .get(getReviewCities)
  .post(secureRoute, addReviewCities)

router.route('/cities/:id/reviews/:reviewId')
  .delete(secureRoute, deleteReviewCities)

//THINGS TO DO
router.route('/cities/:id/fun')
  .get(getAllThingsToDo)
  .post(secureRoute, addThingsToDo)

router.route('/cities/:id/fun/:funId')
  .get(getSingleThingsTodo)
  .delete(secureRoute, deleteThingsToDo)

router.route('/cities/:id/fun/:funId/review')
  .post(secureRoute, addFunReview)
// router.route('/cities/:id/fun/:funId/review/:reviewID')
//   .delete(secureRoute, deleteReviewFun)

//RESTAURANTS
router.route('/cities/:id/restaurants')
  .get(getAllRestaurants)
  .post(secureRoute, addRestaurant)

router.route('/cities/:id/restaurants/:restaurantId')
  .get(getSingleRestaurant)
  .delete(secureRoute, deleteRestaurant)

router.route('/cities/:id/restaurants/:restaurantId/review')
  .post(secureRoute, addRestaurantReview)

router.route('/cities/:id/restaurants/:restaurantId/review/reviewId')
  .get(addRestaurantReview)



//HOTELS
router.route('/cities/:id/hotels')
  .get(getAllHotels)
  .post(secureRoute, addHotel)

router.route('/cities/:id/hotels/:hotelId')
  .get(getSingleHotels)
  .delete(secureRoute, deleteHotel)

router.route('/cities/:id/hotels/:hotelId/review')
  .post(secureRoute, addHotelReview)

//SHORT HISTORY
router.route('/cities/:id/history')
  .get(getHistory)
  .post(secureRoute, addHistory)

router.route('/cities/:id/history/:historyId')
  .delete(secureRoute, deleteHistory)


//Authentication
router.route('/register')
  .post(userRegister)

router.route('/login')
  .post(userLogin)

//user
router.route('/profile')
  .get(secureRoute, getProfile)

export default router