import jwt from 'jsonwebtoken' 
import { secret } from './environments.js'
import User from '../models/users.js'


export const secureRoute = async (req, res, next) => {
  console.log('arrived at secureRoute')
  try {
  
    console.log('headers-->', req.headers)
    if (!req.headers.authorization) throw new Error('missing header')

    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('token', token)

  
    const payload = jwt.verify(token, secret)
    console.log('paylod-->', payload)

    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify) throw new Error('user not found')
<<<<<<< HEAD
=======

    req.verifiedUser = userToVerify

>>>>>>> c8b7b75c7af30467fa6234afd7e4234edeb1f8ef
    next()

  } catch (error) {
    return res.status(401).json({ message: 'Unauthorised' })
  }
}