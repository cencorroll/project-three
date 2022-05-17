import jwt from 'jsonwebtoken' 
import { secret } from './environment.js'
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
   
    if (!userToVerify) throw new error('user not found')
    next()

  } catch (error) {
    return res.status(401).json({ message: 'Unauthorised' })
  }
}