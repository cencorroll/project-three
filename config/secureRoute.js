import jwt from 'jsonwebtoken' 
import User from '../models/users.js'
import 'dotenv/config'


export const secureRoute = async (req, res, next) => {
  console.log('arrived at secureRoute')
  try {
  
    console.log('headers-->', req.headers)
    if (!req.headers.authorization) throw new Error('missing header')

    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('token', token)

  
    const payload = jwt.verify(token, process.env.secret)
    console.log('paylod-->', payload)

    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify) throw new Error('user not found')

    req.verifiedUser = userToVerify

    next()

  } catch (error) {
    return res.status(401).json({ message: 'Unauthorised' })
  }
}