import express from 'express'


//import controllers
import { getCities, welcomeMessage } from '../controllers/cities.js'
import { userRegister, userLogin } from '../controllers/auth.js'


const router = express.Router()

router.route('/')
  .get(welcomeMessage)

router.route('/cities')
  .get(getCities)



//Authentication
router.route('/register')
  .post(userRegister)

router.route('/login')
  .post(userLogin)

export default router